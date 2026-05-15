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
    if (animal.association.userId !== req.user.id) throw new AppError(403, "Cet animal n'appartient pas à votre association");

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
    if (image.animal.association.userId !== req.user.id) throw new AppError(403, "Cette image n'appartient pas à votre association");

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
    if (image.animal.association.userId !== req.user.id) throw new AppError(403, "Cette image n'appartient pas à votre association");

    await prisma.image.delete({ where: { id: image.id } });
    res.status(200).json({ message: "Image supprimée" });
  } catch (error) {
    next(error);
  }
};

export const uploadVolunteerAvatar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user?.role !== "volunteer") throw new AppError(403, "Réservé aux bénévoles");
    if (!req.file) throw new AppError(400, "Aucun fichier envoyé");

    const volunteer = await prisma.volunteer.findUnique({ where: { id: Number(req.params.id) } });
    if (!volunteer) throw new AppError(404, "Bénévole introuvable");
    if (volunteer.userId !== req.user.id) throw new AppError(403, "Vous ne pouvez modifier que votre propre photo de profil");

    const { url } = await uploadToImgbb(req.file.buffer);

    await prisma.users.update({ where: { id: volunteer.userId }, data: { image: url } });

    res.status(200).json({ message: "Photo de profil mise à jour", url });
  } catch (error) {
    next(error);
  }
};

export const uploadAssociationCover = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user?.role !== "association") throw new AppError(403, "Réservé aux associations");
    if (!req.file) throw new AppError(400, "Aucun fichier envoyé");

    const assoc = await prisma.association.findUnique({ where: { id: Number(req.params.id) } });
    if (!assoc) throw new AppError(404, "Association introuvable");
    if (assoc.userId !== req.user.id) throw new AppError(403, "Cette association ne vous appartient pas");

    const { url } = await uploadToImgbb(req.file.buffer);

    await prisma.users.update({ where: { id: assoc.userId }, data: { image: url } });

    res.status(200).json({ message: "Photo de couverture mise à jour", url });
  } catch (error) {
    next(error);
  }
};
