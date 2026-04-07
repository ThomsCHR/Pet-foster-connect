import { Router } from "express";
import { createAnimal, deleteAnimal, getAnimalById, getAnimals, updateAnimal } from "../controllers/animal.controller";

const animalRouter = Router();

// recuperer tous les animaux
animalRouter.get("/", getAnimals);

// creer un animal
animalRouter.post("/", createAnimal);

// recuperer un animal par son ID
animalRouter.get("/:id", getAnimalById);

// mettre à jour un animal
animalRouter.put("/:id", updateAnimal);

// supprimer un animal
animalRouter.delete("/:id", deleteAnimal);




export default animalRouter;