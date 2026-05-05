import { type Request, type Response, type NextFunction } from "express";
import { prisma } from "../client";
import { uploadToImgbb } from "../lib/imgbb";
import { AppError } from "../middlewares/error.middleware";

export const uploadAnimalImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user?.role !== "association") throw new AppError(403, "Réservé aux associations");
    if (!req.file) throw new AppError(400, "Aucun fichier envoyé");

    const animal = await prisma.animal.findUnique({
      where: { id: Number(req.params.animalId) },
      include: { association: true },
    });
    if (!animal) throw new AppError(404, "Animal introuvable");
    if (animal.association.userId !== req.user.id) throw new AppError(403);

    const { url, thumb } = await uploadToImgbb(req.file.buffer);

    const image = await prisma.image.create({
      data: { url, thumb, animalID: animal.id },
    });

    res.status(201).json({ message: "Image uploadée", data: image });
  } catch (error) {
    next(error);
  }
};

export const updateAnimalImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user?.role !== "association") throw new AppError(403, "Réservé aux associations");
    if (!req.file) throw new AppError(400, "Aucun fichier envoyé");

    const image = await prisma.image.findUnique({
      where: { id: Number(req.params.imageId) },
      include: { animal: { include: { association: true } } },
    });
    if (!image) throw new AppError(404, "Image introuvable");
    if (image.animal.association.userId !== req.user.id) throw new AppError(403);

    const { url, thumb } = await uploadToImgbb(req.file.buffer);

    const updated = await prisma.image.update({
      where: { id: image.id },
      data: { url, thumb },
    });

    res.status(200).json({ message: "Image modifiée", data: updated });
  } catch (error) {
    next(error);
  }
};

export const deleteAnimalImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user?.role !== "association") throw new AppError(403, "Réservé aux associations");

    const image = await prisma.image.findUnique({
      where: { id: Number(req.params.imageId) },
      include: { animal: { include: { association: true } } },
    });
    if (!image) throw new AppError(404, "Image introuvable");
    if (image.animal.association.userId !== req.user.id) throw new AppError(403);

    await prisma.image.delete({ where: { id: image.id } });
    res.status(200).json({ message: "Image supprimée" });
  } catch (error) {
    next(error);
  }
};
