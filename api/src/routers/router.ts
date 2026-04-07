import { Router } from "express";

import animalRouter from "./animal.router";
import associationRouter from "./association.router";
import offerRouter from "./offer.router";
import userRouter from "./user.router";

const router = Router();

router.use("/animals", animalRouter);
router.use("/associations", associationRouter);
router.use("/offers", offerRouter);
router.use("/users", userRouter);

export default router;