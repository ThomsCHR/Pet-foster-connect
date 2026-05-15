import { Request, Response, NextFunction } from "express";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { prisma } from "../client";
import { AppError } from "../middlewares/error.middleware";

const JWT_SECRET = process.env.JWT_SECRET as string;

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export async function register(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { type, email, password, phone, address, region, description,
      firstname, lastname, capacity, nomAsso, siret } = req.body;

    const existing = await prisma.users.findUnique({ where: { email } });
    if (existing) throw new AppError(409, "Cet email est déjà utilisé");

    const hashedPassword = await argon2.hash(password);

    const user = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
        phone,
        address,
        region: region || undefined,
        description: description || undefined,
        ...(type === "benevole"
          ? { volunteer: { create: { firstname, lastname, capacity } } }
          : { association: { create: { name: nomAsso, siret } } }),
      },
      include: { volunteer: true, association: true },
    });

    const role: "volunteer" | "association" | "user" =
      user.volunteer ? "volunteer" : user.association ? "association" : "user";

    const token = jwt.sign({ id: user.id, email: user.email, role }, JWT_SECRET, { expiresIn: "7d" });
    res.cookie("token", token, COOKIE_OPTIONS);

    const { password: _pw, ...userWithoutPassword } = user;
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { email, password } = req.body;

    const user = await prisma.users.findUnique({
      where: { email },
      include: { volunteer: true, association: true },
    });

    if (!user) throw new AppError(401, "Email ou mot de passe incorrect");

    const valid = await argon2.verify(user.password, password);
    if (!valid) throw new AppError(401, "Email ou mot de passe incorrect");

    const role: "volunteer" | "association" | "user" =
      user.volunteer ? "volunteer" : user.association ? "association" : "user";

    const token = jwt.sign({ id: user.id, email: user.email, role }, JWT_SECRET, { expiresIn: "7d" });
    res.cookie("token", token, COOKIE_OPTIONS);

    const { password: _pw, ...userWithoutPassword } = user;
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    next(error);
  }
}

export async function logout(_req: Request, res: Response): Promise<void> {
  res.clearCookie("token", COOKIE_OPTIONS);
  res.status(200).json({ message: "Déconnecté" });
}

export async function me(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const user = await prisma.users.findUnique({
      where: { id: req.user!.id },
      include: { volunteer: true, association: true },
    });

    if (!user) throw new AppError(404, "Utilisateur introuvable");

    const { password: _pw, ...userWithoutPassword } = user;
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    next(error);
  }
}
