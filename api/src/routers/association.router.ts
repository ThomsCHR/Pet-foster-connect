import { Router } from "express";
import { createAssociation, deleteAssociation, getAssociationById, getAssociations, updateAssociation } from "../controllers/association.controller";
import { requireAuth } from "../middlewares/auth.middleware";

const associationRouter = Router();


// recuperer toutes les associations
associationRouter.get("/", getAssociations);

// creer une association
associationRouter.post("/", createAssociation);

// recuperer une association par son ID
associationRouter.get("/:id", getAssociationById);

// mettre à jour une association (association propriétaire uniquement)
associationRouter.put("/:id", requireAuth, updateAssociation);

// supprimer une association
associationRouter.delete("/:id", deleteAssociation);


export default associationRouter;