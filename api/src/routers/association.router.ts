import { Router } from "express";
import { createAssociation, deleteAssociation, getAssociationById, getAssociations, updateAssociation } from "../controllers/association.controller";
import { uploadAssociationCover } from "../controllers/image.controller";
import { requireAuth } from "../middlewares/auth.middleware";
import { upload } from "../middlewares/upload.middleware";
import { validate } from "../middlewares/validate.middleware";
import { updateAssociationSchema } from "../schemas";

const associationRouter = Router();


// recuperer toutes les associations
associationRouter.get("/", getAssociations);

// creer une association
associationRouter.post("/", createAssociation);

// recuperer une association par son ID
associationRouter.get("/:id", getAssociationById);

// mettre à jour une association (association propriétaire uniquement)
associationRouter.put("/:id", requireAuth, validate(updateAssociationSchema), updateAssociation);

// uploader la photo de couverture d'une association
associationRouter.post("/:id/cover", requireAuth, upload.single("image"), uploadAssociationCover);

// supprimer une association
associationRouter.delete("/:id", deleteAssociation);


export default associationRouter;