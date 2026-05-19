import { Router } from "express";
import { register, login, logout, me } from "../controllers/auth.controller";
import { requireAuth } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { registerSchema, loginSchema } from "../schemas";
import { loginLimiter, registerLimiter } from "../middlewares/rateLimit.middleware";

const authRouter = Router();

authRouter.post("/register", registerLimiter, validate(registerSchema), register);
authRouter.post("/login", loginLimiter, validate(loginSchema), login);
authRouter.post("/logout", logout);
authRouter.get("/me", requireAuth, me);

export default authRouter;
