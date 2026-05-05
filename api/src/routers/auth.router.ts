import { Router } from "express";
import { register, login, logout, me } from "../controllers/auth.controller";
import { requireAuth } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { registerSchema, loginSchema } from "../schemas";

const authRouter = Router();

authRouter.post("/register", validate(registerSchema), register);
authRouter.post("/login", validate(loginSchema), login);
authRouter.post("/logout", logout);
authRouter.get("/me", requireAuth, me);

export default authRouter;
