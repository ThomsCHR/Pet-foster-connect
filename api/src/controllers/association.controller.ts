import { type Request, type Response, type NextFunction } from "express";
import { prisma } from "../client";
import { AppError } from "../middlewares/error.middleware";

export const getAssociations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const associations = await prisma.association.findMany({
      include: {
        user: { select: { email: true, phone: true, region: true, description: true, image: true } },
        _count: { select: { animals: true } },
      },
    });
    res.json(associations);
  } catch (error) {
    next(error);
  }
};

export const getAssociationById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const association = await prisma.association.findUnique({
      where: { id: Number(req.params.id) },
      include: {
        user: { select: { email: true, phone: true, address: true, region: true, description: true, image: true } },
        animals: { include: { images: true } },
      },
    });
    if (!association) throw new AppError(404, "Association introuvable");
    res.json(association);
  } catch (error) {
    next(error);
  }
};

export const updateAssociation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, phone, address, description, region } = req.body;

    if (req.user?.role !== "association") throw new AppError(403, "Réservé aux associations");

    const assoc = await prisma.association.findUnique({ where: { id: Number(req.params.id) } });
    if (!assoc || assoc.userId !== req.user.id) throw new AppError(403, "Vous ne pouvez modifier que votre propre association");

    const updatedAssociation = await prisma.association.update({
      where: { id: Number(req.params.id) },
      data: {
        name,
        user: {
          update: {
            email,
            phone,
            address,
            description: description || undefined,
            region: region || undefined,
          },
        },
      },
      include: {
        user: { select: { email: true, phone: true, address: true, region: true, description: true, image: true } },
      },
    });
    res.json(updatedAssociation);
  } catch (error) {
    next(error);
  }
};

export const deleteAssociation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user?.role !== "association") throw new AppError(403, "Réservé aux associations");

    const assoc = await prisma.association.findUnique({ where: { id: Number(req.params.id) } });
    if (!assoc) throw new AppError(404, "Association introuvable");
    if (assoc.userId !== req.user.id) throw new AppError(403, "Vous ne pouvez supprimer que votre propre compte");

    await prisma.users.delete({ where: { id: assoc.userId } });
    res.status(200).json({ message: "Compte supprimé" });
  } catch (error) {
    next(error);
  }
};
