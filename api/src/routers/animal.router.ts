import { Router } from "express";
import { createAnimal, deleteAnimal, getAnimalById, getAnimals, getAnimalsByAssociation, updateAnimal } from "../controllers/animal.controller";
import { requireAuth } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { createAnimalSchema, updateAnimalSchema } from "../schemas";

const animalRouter = Router();

// recuperer tous les animaux
animalRouter.get("/", getAnimals);

// creer un animal (association connectée uniquement)
animalRouter.post("/", requireAuth, validate(createAnimalSchema), createAnimal);

// recuperer un animal par son ID
animalRouter.get("/:id", getAnimalById);

// mettre à jour un animal (association propriétaire uniquement)
animalRouter.put("/:id", requireAuth, validate(updateAnimalSchema), updateAnimal);

// recuperer les animaux par association
animalRouter.get("/association/:associationId", getAnimalsByAssociation);

// supprimer un animal (association propriétaire uniquement)
animalRouter.delete("/:id", requireAuth, deleteAnimal);






export default animalRouter;