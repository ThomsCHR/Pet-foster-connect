import { Router } from "express";

import animalRouter from "./animal.router";
import associationRouter from "./association.router";
import offerRouter from "./offer.router";
import authRouter from "./auth.router";
import volunteerRouter from "./volunteer.router";
import statsRouter from "./stats.router";
import imageRouter from "./image.router";

const router = Router();

router.use("/auth", authRouter);
router.use("/stats", statsRouter);
router.use("/volunteers", volunteerRouter);
router.use("/animals", animalRouter);
router.use("/animals", imageRouter);
router.use("/associations", associationRouter);
router.use("/offers", offerRouter);

export default router;