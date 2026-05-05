import { Router } from "express";
import { getVolunteerById, updateVolunteer } from "../controllers/volunteer.controller";
import { requireAuth } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { updateVolunteerSchema } from "../schemas";

const volunteerRouter = Router();

volunteerRouter.get("/:id", getVolunteerById);
volunteerRouter.put("/:id", requireAuth, validate(updateVolunteerSchema), updateVolunteer);

export default volunteerRouter;
