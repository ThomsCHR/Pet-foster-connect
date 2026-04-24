import { Router } from "express";

import animalRouter from "./animal.router";
import associationRouter from "./association.router";
import offerRouter from "./offer.router";
import userRouter from "./user.router";
import authRouter from "./auth.router";
import volunteerRouter from "./volunteer.router";
import statsRouter from "./stats.router";

const router = Router();

router.use("/auth", authRouter);
router.use("/stats", statsRouter);
router.use("/volunteers", volunteerRouter);
router.use("/animals", animalRouter);
router.use("/associations", associationRouter);
router.use("/offers", offerRouter);
router.use("/users", userRouter);

export default router;