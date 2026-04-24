import { type Request, type Response } from "express";
import { prisma } from "../client";

// GET /api/stats
// Retourne les chiffres clés de la plateforme
export const getStats = async (req: Request, res: Response): Promise<void> => {
  try {
    // On compte uniquement les animaux avec le statut "a_placer"
    const animauxDisponibles = await prisma.animal.count({
      where: { status: "a_placer" },
    });

    const nombreBenevoles = await prisma.volunteer.count();

    const nombreAssociations = await prisma.association.count();

    res.status(200).json({
      animauxDisponibles: animauxDisponibles,
      nombreBenevoles: nombreBenevoles,
      nombreAssociations: nombreAssociations,
    });

  } catch (error) {
    console.error("Erreur getStats :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
