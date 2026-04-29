import { type Request, type Response } from "express";
import { prisma } from "../client";

export const getAnimals = async (req: Request, res: Response) => {
  try {
    const animals = await prisma.animal.findMany({ include: { images: true, association: true } });
    res.status(200).json({ message: "Get all animals", data: animals });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};

export const getAnimalById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const animal = await prisma.animal.findUnique({
      where: { id: Number(id) },
      include: { images: true, association: { include: { user: true } } },
    });
    if (!animal) {
      return res.status(404).json({ message: "Animal not found" });
    }
    res.status(200).json({ message: "Get animal by ID", data: animal });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};

export const createAnimal = async (req: Request, res: Response) => {
  try {
    const { name, species, breed, gender, description, status, associationId, dateOfBirth } = req.body;
    const newAnimal = await prisma.animal.create({
      data: {
        name,
        species,
        breed,
        gender,
        description,
        status,
        associationId,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
      },
    });
    res.status(201).json({ message: "Animal created", data: newAnimal });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};

export const updateAnimal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, species, breed, gender, description, status, associationId, dateOfBirth } = req.body;
    const updatedAnimal = await prisma.animal.update({
      where: { id: Number(id) },
      data: {
        name,
        species,
        breed,
        gender,
        description,
        status,
        associationId,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
      },
    });
    res.status(200).json({ message: "Animal updated", data: updatedAnimal });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};

export const deleteAnimal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.animal.delete({ where: { id: Number(id) } });
    res.status(200).json({ message: "Animal deleted" });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};
export const getAnimalsByAssociation = async (req: Request, res: Response) => {
  try {
    const { associationId } = req.params;
    const animals = await prisma.animal.findMany({
      where: { associationId: Number(associationId) },
      include: { images: true },
    });
    res.status(200).json({ message: "Get animals by association", data: animals });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};