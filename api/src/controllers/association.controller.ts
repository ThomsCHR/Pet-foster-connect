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

export const createAssociation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, siret, email, phone, address, description, region } = req.body;
    const newAssociation = await prisma.association.create({
      data: {
        name,
        siret,
        user: {
          create: {
            email,
            phone,
            address,
            description: description || undefined,
            region: region || undefined,
            password: "",
          },
        },
      },
    });
    res.status(201).json(newAssociation);
  } catch (error) {
    next(error);
  }
};

export const updateAssociation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, phone, address, description, region } = req.body;

    if (req.user?.role !== "association") throw new AppError(403, "Réservé aux associations");

    const assoc = await prisma.association.findUnique({ where: { id: Number(req.params.id) } });
    if (!assoc || assoc.userId !== req.user.id) throw new AppError(403);

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
    await prisma.association.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: "Association supprimée" });
  } catch (error) {
    next(error);
  }
};
