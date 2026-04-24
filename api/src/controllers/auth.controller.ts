import { Request, Response } from "express";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { prisma } from "../client";

const JWT_SECRET = process.env.JWT_SECRET as string;

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export async function register(req: Request, res: Response): Promise<void> {
  const { type, email, password, confirmPassword, phone, address, region, description,
    firstname, lastname, capacity, nomAsso, siret } = req.body;

  if (password !== confirmPassword) {
    res.status(400).json({ error: "Les mots de passe ne correspondent pas" });
    return;
  }

  const existing = await prisma.users.findUnique({ where: { email } });
  if (existing) {
    res.status(409).json({ error: "Cet email est déjà utilisé" });
    return;
  }

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
}

export async function login(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;

  const user = await prisma.users.findUnique({
    where: { email },
    include: { volunteer: true, association: true },
  });

  if (!user) {
    res.status(401).json({ error: "Email ou mot de passe incorrect" });
    return;
  }

  const valid = await argon2.verify(user.password, password);
  if (!valid) {
    res.status(401).json({ error: "Email ou mot de passe incorrect" });
    return;
  }

  const role: "volunteer" | "association" | "user" =
    user.volunteer ? "volunteer" : user.association ? "association" : "user";

  const token = jwt.sign({ id: user.id, email: user.email, role }, JWT_SECRET, { expiresIn: "7d" });
  res.cookie("token", token, COOKIE_OPTIONS);

  const { password: _pw, ...userWithoutPassword } = user;
  res.status(200).json(userWithoutPassword);
}

export async function logout(_req: Request, res: Response): Promise<void> {
  res.clearCookie("token", COOKIE_OPTIONS);
  res.status(200).json({ message: "Déconnecté" });
}

export async function me(req: Request, res: Response): Promise<void> {
  const user = await prisma.users.findUnique({
    where: { id: req.user!.id },
    include: { volunteer: true, association: true },
  });

  if (!user) {
    res.status(404).json({ error: "Utilisateur introuvable" });
    return;
  }

  const { password: _pw, ...userWithoutPassword } = user;
  res.status(200).json(userWithoutPassword);
}
