import { Router } from "express";
import { getVolunteerById, updateVolunteer, deleteVolunteer } from "../controllers/volunteer.controller";
import { uploadVolunteerAvatar } from "../controllers/image.controller";
import { requireAuth } from "../middlewares/auth.middleware";
import { upload } from "../middlewares/upload.middleware";
import { validate } from "../middlewares/validate.middleware";
import { updateVolunteerSchema } from "../schemas";

const volunteerRouter = Router();

volunteerRouter.get("/:id", getVolunteerById);
volunteerRouter.put("/:id", requireAuth, validate(updateVolunteerSchema), updateVolunteer);
volunteerRouter.post("/:id/avatar", requireAuth, upload.single("image"), uploadVolunteerAvatar);
volunteerRouter.delete("/:id", requireAuth, deleteVolunteer);

export default volunteerRouter;
