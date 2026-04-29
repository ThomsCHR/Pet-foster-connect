import { type Request, type Response } from "express";
import { prisma } from "../client";

// Soumet une nouvelle demande d'accueil (bénévole → animal)
export const createOffer = async (req: Request, res: Response) => {
  try {
    const { animalId } = req.body;

    // Récupérer le bénévole lié à l'utilisateur connecté
    const volunteer = await prisma.volunteer.findFirst({
      where: { userId: req.user!.id },
    });

    if (!volunteer) {
      return res.status(403).json({ error: "Seuls les bénévoles peuvent faire une demande d'accueil" });
    }

    // Vérifier que l'animal existe
    const animal = await prisma.animal.findUnique({
      where: { id: Number(animalId) },
    });

    if (!animal) {
      return res.status(404).json({ error: "Animal introuvable" });
    }

    if (animal.status !== "a_placer") {
      return res.status(400).json({ error: "Cet animal n'est plus disponible pour une demande" });
    }

    // Vérifier si une demande existe déjà pour ce couple bénévole/animal
    const existing = await prisma.offer.findUnique({
      where: {
        volunteerId_animalId: { volunteerId: volunteer.id, animalId: Number(animalId) },
      },
    });

    if (existing) {
      // Si la demande avait été annulée, on la réactive plutôt que d'en créer une nouvelle
      if (existing.status === "annulee") {
        const updated = await prisma.offer.update({
          where: { volunteerId_animalId: { volunteerId: volunteer.id, animalId: Number(animalId) } },
          data: { status: "soumise" },
        });
        return res.status(200).json({ message: "Demande réactivée", data: updated });
      }
      return res.status(409).json({ error: "Vous avez déjà une demande pour cet animal", data: existing });
    }

    const offer = await prisma.offer.create({
      data: {
        volunteerId: volunteer.id,
        animalId: Number(animalId),
        status: "soumise",
      },
    });

    res.status(201).json({ message: "Demande créée", data: offer });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};

// Récupère toutes les demandes d'un bénévole (pour son profil perso)
export const getOffersByVolunteer = async (req: Request, res: Response) => {
  try {
    const { volunteerId } = req.params;

    // Vérifier que c'est bien le bénévole connecté qui consulte ses propres demandes
    const volunteer = await prisma.volunteer.findFirst({
      where: { userId: req.user!.id },
    });

    if (!volunteer || volunteer.id !== Number(volunteerId)) {
      return res.status(403).json({ error: "Accès non autorisé" });
    }

    const offers = await prisma.offer.findMany({
      where: { volunteerId: Number(volunteerId) },
      include: {
        animal: {
          include: {
            images: true,
            association: { select: { id: true, name: true } },
          },
        },
      },
    });

    res.status(200).json({ message: "Demandes du bénévole", data: offers });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};

// Récupère toutes les demandes reçues pour les animaux d'une association
export const getOffersByAssociation = async (req: Request, res: Response) => {
  try {
    const { associationId } = req.params;

    // Vérifier que c'est bien l'association connectée
    const association = await prisma.association.findFirst({
      where: { userId: req.user!.id },
    });

    if (!association || association.id !== Number(associationId)) {
      return res.status(403).json({ error: "Accès non autorisé" });
    }

    const offers = await prisma.offer.findMany({
      where: {
        animal: { associationId: Number(associationId) },
      },
      include: {
        animal: {
          select: { id: true, name: true, species: true, images: true },
        },
        volunteer: {
          include: {
            user: { select: { email: true, phone: true, region: true } },
          },
        },
      },
    });

    res.status(200).json({ message: "Demandes reçues", data: offers });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};

// Met à jour le statut d'une demande : acceptee / refusee (association) ou annulee (bénévole)
export const updateOfferStatus = async (req: Request, res: Response) => {
  try {
    const { volunteerId, animalId } = req.params;
    const { status } = req.body;

    const statutsValides = ["acceptee", "refusee", "annulee"];
    if (!statutsValides.includes(status)) {
      return res.status(400).json({ error: "Statut invalide" });
    }

    // Récupérer la demande et les données de l'animal pour vérifier les droits
    const offer = await prisma.offer.findUnique({
      where: {
        volunteerId_animalId: {
          volunteerId: Number(volunteerId),
          animalId: Number(animalId),
        },
      },
      include: { animal: true },
    });

    if (!offer) {
      return res.status(404).json({ error: "Demande introuvable" });
    }

    if (status === "annulee") {
      // Seul le bénévole concerné peut annuler sa propre demande
      const volunteer = await prisma.volunteer.findFirst({
        where: { userId: req.user!.id },
      });
      if (!volunteer || volunteer.id !== Number(volunteerId)) {
        return res.status(403).json({ error: "Non autorisé à annuler cette demande" });
      }
    } else {
      // Seule l'association propriétaire de l'animal peut accepter ou refuser
      const association = await prisma.association.findFirst({
        where: { userId: req.user!.id },
      });
      if (!association || association.id !== offer.animal.associationId) {
        return res.status(403).json({ error: "Non autorisé à traiter cette demande" });
      }
    }

    if (status === "acceptee") {
      // Transaction atomique :
      //   1. Accepter cette demande
      //   2. Passer l'animal en "placement_en_cours" et l'affecter au bénévole
      //   3. Refuser automatiquement toutes les autres demandes en attente pour cet animal
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
          where: {
            animalId: Number(animalId),
            volunteerId: { not: Number(volunteerId) },
            status: "soumise",
          },
          data: { status: "refusee" },
        }),
      ]);

      return res.status(200).json({ message: "Demande acceptée, animal en cours de placement" });
    }

    // Pour "refusee" ou "annulee" : simple mise à jour du statut
    const updated = await prisma.offer.update({
      where: { volunteerId_animalId: { volunteerId: Number(volunteerId), animalId: Number(animalId) } },
      data: { status },
    });

    res.status(200).json({ message: "Statut mis à jour", data: updated });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};
