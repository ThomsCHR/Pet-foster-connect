import { type Request, type Response, type NextFunction } from "express";
import { prisma } from "../client";
import { AppError } from "../middlewares/error.middleware";

export const createOffer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { animalId } = req.body;

    const volunteer = await prisma.volunteer.findFirst({ where: { userId: req.user!.id } });
    if (!volunteer) throw new AppError(403, "Seuls les bénévoles peuvent faire une demande d'accueil");

    const animal = await prisma.animal.findUnique({ where: { id: Number(animalId) } });
    if (!animal) throw new AppError(404, "Animal introuvable");
    if (animal.status !== "a_placer") throw new AppError(400, "Cet animal n'est plus disponible");

    const existing = await prisma.offer.findUnique({
      where: { volunteerId_animalId: { volunteerId: volunteer.id, animalId: Number(animalId) } },
    });

    if (existing) {
      if (existing.status === "annulee") {
        const updated = await prisma.offer.update({
          where: { volunteerId_animalId: { volunteerId: volunteer.id, animalId: Number(animalId) } },
          data: { status: "soumise" },
        });
        return res.status(200).json({ message: "Demande réactivée", data: updated });
      }
      throw new AppError(409, "Vous avez déjà une demande pour cet animal");
    }

    const offer = await prisma.offer.create({
      data: { volunteerId: volunteer.id, animalId: Number(animalId), status: "soumise" },
    });
    res.status(201).json({ message: "Demande créée", data: offer });
  } catch (error) {
    next(error);
  }
};

export const getOffersByVolunteer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { volunteerId } = req.params;

    const volunteer = await prisma.volunteer.findFirst({ where: { userId: req.user!.id } });
    if (!volunteer || volunteer.id !== Number(volunteerId)) throw new AppError(403, "Vous ne pouvez consulter que vos propres demandes");

    const offers = await prisma.offer.findMany({
      where: { volunteerId: Number(volunteerId) },
      include: {
        animal: { include: { images: true, association: { select: { id: true, name: true } } } },
      },
    });
    res.status(200).json({ message: "Demandes du bénévole", data: offers });
  } catch (error) {
    next(error);
  }
};

export const getOffersByAssociation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { associationId } = req.params;

    const association = await prisma.association.findFirst({ where: { userId: req.user!.id } });
    if (!association || association.id !== Number(associationId)) throw new AppError(403, "Vous ne pouvez consulter que les demandes de votre association");

    const offers = await prisma.offer.findMany({
      where: { animal: { associationId: Number(associationId) } },
      include: {
        animal: { select: { id: true, name: true, species: true, images: true } },
        volunteer: { include: { user: { select: { email: true, phone: true, region: true } } } },
      },
    });
    res.status(200).json({ message: "Demandes reçues", data: offers });
  } catch (error) {
    next(error);
  }
};

export const updateOfferStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { volunteerId, animalId } = req.params;
    const { status } = req.body;

    const offer = await prisma.offer.findUnique({
      where: { volunteerId_animalId: { volunteerId: Number(volunteerId), animalId: Number(animalId) } },
      include: { animal: true },
    });
    if (!offer) throw new AppError(404, "Demande introuvable");

    if (status === "annulee") {
      const volunteer = await prisma.volunteer.findFirst({ where: { userId: req.user!.id } });
      if (!volunteer || volunteer.id !== Number(volunteerId)) throw new AppError(403, "Non autorisé à annuler cette demande");

      if (offer.status === "acceptee") {
        await prisma.$transaction([
          prisma.offer.update({
            where: { volunteerId_animalId: { volunteerId: Number(volunteerId), animalId: Number(animalId) } },
            data: { status: "annulee" },
          }),
          prisma.animal.update({
            where: { id: Number(animalId) },
            data: { status: "a_placer", volunteerId: null },
          }),
        ]);
      } else {
        await prisma.offer.update({
          where: { volunteerId_animalId: { volunteerId: Number(volunteerId), animalId: Number(animalId) } },
          data: { status: "annulee" },
        });
      }

      return res.status(200).json({ message: "Demande annulée" });
    } else {
      const association = await prisma.association.findFirst({ where: { userId: req.user!.id } });
      if (!association || association.id !== offer.animal.associationId) throw new AppError(403, "Non autorisé à traiter cette demande");
    }

    if (status === "acceptee") {
      await prisma.$transaction([
        prisma.offer.update({
          where: { volunteerId_animalId: { volunteerId: Number(volunteerId), animalId: Number(animalId) } },
          data: { status: "acceptee" },
        }),
        prisma.animal.update({
          where: { id: Number(animalId) },
          data: { status: "adopte", volunteerId: Number(volunteerId) },
        }),
        prisma.offer.updateMany({
          where: { animalId: Number(animalId), volunteerId: { not: Number(volunteerId) }, status: "soumise" },
          data: { status: "refusee" },
        }),
      ]);
      return res.status(200).json({ message: "Demande acceptée, animal en cours de placement" });
    }

    if (status === "refusee") {
      await prisma.$transaction([
        prisma.offer.update({
          where: { volunteerId_animalId: { volunteerId: Number(volunteerId), animalId: Number(animalId) } },
          data: { status: "refusee" },
        }),
        prisma.animal.update({
          where: { id: Number(animalId) },
          data: { status: "a_placer", volunteerId: null },
        }),
      ]);
      return res.status(200).json({ message: "Demande refusée, animal remis en disponible" });
    }

    const updated = await prisma.offer.update({
      where: { volunteerId_animalId: { volunteerId: Number(volunteerId), animalId: Number(animalId) } },
      data: { status },
    });
    res.status(200).json({ message: "Demande annulée", data: updated });
  } catch (error) {
    next(error);
  }
};
