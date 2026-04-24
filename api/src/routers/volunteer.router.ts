import { Router } from "express";
import { getVolunteerById, updateVolunteer } from "../controllers/volunteer.controller";
import { requireAuth } from "../middlewares/auth.middleware";

const volunteerRouter = Router();

volunteerRouter.get("/:id", getVolunteerById);
volunteerRouter.put("/:id", requireAuth, updateVolunteer);

export default volunteerRouter;
