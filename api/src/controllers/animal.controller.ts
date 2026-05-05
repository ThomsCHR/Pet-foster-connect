import { type Request, type Response, type NextFunction } from "express";
import { prisma } from "../client";
import { AppError } from "../middlewares/error.middleware";

export const getAnimals = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const animals = await prisma.animal.findMany({ include: { images: true, association: true } });
    res.status(200).json({ message: "Get all animals", data: animals });
  } catch (error) {
    next(error);
  }
};

export const getAnimalById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const animal = await prisma.animal.findUnique({
      where: { id: Number(req.params.id) },
      include: { images: true, association: { include: { user: true } } },
    });
    if (!animal) throw new AppError(404, "Animal introuvable");
    res.status(200).json({ message: "Get animal by ID", data: animal });
  } catch (error) {
    next(error);
  }
};

export const createAnimal = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user?.role !== "association") throw new AppError(403, "Réservé aux associations");

    const assoc = await prisma.association.findUnique({ where: { userId: req.user.id } });
    if (!assoc) throw new AppError(404, "Association introuvable");

    const { name, species, breed, gender, description, status, dateOfBirth } = req.body;
    const newAnimal = await prisma.animal.create({
      data: {
        name,
        species,
        breed: breed || null,
        gender,
        description,
        status: status || "a_placer",
        associationId: assoc.id,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
      },
    });
    res.status(201).json({ message: "Animal created", data: newAnimal });
  } catch (error) {
    next(error);
  }
};

export const updateAnimal = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user?.role !== "association") throw new AppError(403, "Réservé aux associations");

    const animal = await prisma.animal.findUnique({
      where: { id: Number(req.params.id) },
      include: { association: true },
    });
    if (!animal) throw new AppError(404, "Animal introuvable");
    if (animal.association.userId !== req.user.id) throw new AppError(403);

    const { name, species, breed, gender, description, status, dateOfBirth } = req.body;
    const updatedAnimal = await prisma.animal.update({
      where: { id: Number(req.params.id) },
      data: {
        name,
        species,
        breed: breed || null,
        gender,
        description,
        status,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
      },
    });
    res.status(200).json({ message: "Animal updated", data: updatedAnimal });
  } catch (error) {
    next(error);
  }
};

export const deleteAnimal = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user?.role !== "association") throw new AppError(403, "Réservé aux associations");

    const animal = await prisma.animal.findUnique({
      where: { id: Number(req.params.id) },
      include: { association: true },
    });
    if (!animal) throw new AppError(404, "Animal introuvable");
    if (animal.association.userId !== req.user.id) throw new AppError(403);

    await prisma.animal.delete({ where: { id: Number(req.params.id) } });
    res.status(200).json({ message: "Animal deleted" });
  } catch (error) {
    next(error);
  }
};

export const getAnimalsByAssociation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const animals = await prisma.animal.findMany({
      where: { associationId: Number(req.params.associationId) },
      include: { images: true },
    });
    res.status(200).json({ message: "Get animals by association", data: animals });
  } catch (error) {
    next(error);
  }
};
