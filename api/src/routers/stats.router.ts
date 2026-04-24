import { Router } from "express";
import { getStats } from "../controllers/stats.controller";

const statsRouter = Router();

statsRouter.get("/", getStats);

export default statsRouter;
