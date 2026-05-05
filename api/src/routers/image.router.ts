import { Router } from "express";
import { uploadAnimalImage, updateAnimalImage, deleteAnimalImage } from "../controllers/image.controller";
import { requireAuth } from "../middlewares/auth.middleware";
import { upload } from "../middlewares/upload.middleware";

const imageRouter = Router();

// POST /api/animals/:animalId/images  → upload une image pour un animal
imageRouter.post("/:animalId/images", requireAuth, upload.single("image"), uploadAnimalImage);

// PUT    /api/animals/images/:imageId → remplace une image
imageRouter.put("/images/:imageId", requireAuth, upload.single("image"), updateAnimalImage);

// DELETE /api/animals/images/:imageId → supprime une image
imageRouter.delete("/images/:imageId", requireAuth, deleteAnimalImage);

export default imageRouter;
