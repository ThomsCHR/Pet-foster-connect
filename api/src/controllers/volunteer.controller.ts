import { type Request, type Response } from "express";
import { prisma } from "../client";

// Récupère le profil d'un bénévole avec ses infos et ses animaux accueillis
export const getVolunteerById = async (req: Request, res: Response): Promise<void> => {
  const volunteerId = Number(req.params.id);

  try {
    const volunteer = await prisma.volunteer.findUnique({
      where: { id: volunteerId },
      include: {
        // select : on choisit exactement les champs qu'on veut — le password n'est pas listé donc il ne sera jamais chargé
        user: {
          select: {
            id: true,
            email: true,
            phone: true,
            address: true,
            image: true,
            region: true,
            description: true,
            created_at: true,
            updated_at: true,
          },
        },
        animal: {
          include: {
            images: true,
            association: true,
          },
        },
      },
    });

    if (volunteer === null) {
      res.status(404).json({ error: "Bénévole introuvable" });
      return;
    }

    // volunteer.user ne contient pas le password grâce au select ci-dessus
    // on peut retourner l'objet directement
    res.status(200).json(volunteer);

  } catch (error) {
    console.error("Erreur getVolunteerById :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};


// Met à jour les infos d'un bénévole (seulement le sien)
export const updateVolunteer = async (req: Request, res: Response): Promise<void> => {
  const volunteerId = Number(req.params.id);

  const { firstname, lastname, capacity, email, phone, address, region, description } = req.body;

  try {
    // On vérifie d'abord que le bénévole existe
    const volunteer = await prisma.volunteer.findUnique({
      where: { id: volunteerId },
    });

    if (volunteer === null) {
      res.status(404).json({ error: "Bénévole introuvable" });
      return;
    }

    // Seul le propriétaire du profil peut modifier ses informations
    if (volunteer.userId !== req.user!.id) {
      res.status(403).json({ error: "Vous n'êtes pas autorisé à modifier ce profil" });
      return;
    }

    // Mise à jour du bénévole et de l'utilisateur associé en une seule requête Prisma
    const volunteerMisAJour = await prisma.volunteer.update({
      where: { id: volunteerId },
      data: {
        firstname: firstname,
        lastname: lastname,
        capacity: capacity,
        user: {
          update: {
            email: email,
            phone: phone,
            address: address,
            region: region || undefined,
            description: description || undefined,
          },
        },
      },
      include: {
        // Même principe : select pour ne jamais charger le password
        user: {
          select: {
            id: true,
            email: true,
            phone: true,
            address: true,
            image: true,
            region: true,
            description: true,
            created_at: true,
            updated_at: true,
          },
        },
        animal: {
          include: {
            images: true,
            association: true,
          },
        },
      },
    });

    res.status(200).json(volunteerMisAJour);

  } catch (error) {
    console.error("Erreur updateVolunteer :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
