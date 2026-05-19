import { type Request, type Response, type NextFunction } from "express";
import { prisma } from "../client";
import { AppError } from "../middlewares/error.middleware";

export const getVolunteerById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const volunteer = await prisma.volunteer.findUnique({
      where: { id: Number(req.params.id) },
      include: {
        user: {
          select: {
            id: true, email: true, phone: true, address: true,
            image: true, region: true, description: true,
            created_at: true, updated_at: true,
          },
        },
        animal: { include: { images: true, association: true } },
      },
    });

    if (!volunteer) throw new AppError(404, "Bénévole introuvable");
    res.status(200).json(volunteer);
  } catch (error) {
    next(error);
  }
};

export const updateVolunteer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const volunteerId = Number(req.params.id);
    const { firstname, lastname, capacity, email, phone, address, region, description } = req.body;

    const volunteer = await prisma.volunteer.findUnique({ where: { id: volunteerId } });
    if (!volunteer) throw new AppError(404, "Bénévole introuvable");
    if (volunteer.userId !== req.user!.id) throw new AppError(403, "Vous ne pouvez modifier que votre propre profil");

    const volunteerMisAJour = await prisma.volunteer.update({
      where: { id: volunteerId },
      data: {
        firstname,
        lastname,
        capacity,
        user: {
          update: {
            email,
            phone,
            address,
            region: region || undefined,
            description: description || undefined,
          },
        },
      },
      include: {
        user: {
          select: {
            id: true, email: true, phone: true, address: true,
            image: true, region: true, description: true,
            created_at: true, updated_at: true,
          },
        },
        animal: { include: { images: true, association: true } },
      },
    });

    res.status(200).json(volunteerMisAJour);
  } catch (error) {
    next(error);
  }
};

export const deleteVolunteer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const volunteerId = Number(req.params.id);

    const volunteer = await prisma.volunteer.findUnique({ where: { id: volunteerId } });
    if (!volunteer) throw new AppError(404, "Bénévole introuvable");
    if (volunteer.userId !== req.user!.id) throw new AppError(403, "Vous ne pouvez supprimer que votre propre compte");

    await prisma.users.delete({ where: { id: volunteer.userId } });
    res.status(200).json({ message: "Compte supprimé" });
  } catch (error) {
    next(error);
  }
};
