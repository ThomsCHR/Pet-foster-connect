import request from "supertest";

// On remplace le client Prisma par un faux objet (les tests n'atteignent jamais la DB)
jest.mock("../../src/client", () => ({
  prisma: {
    users: { findUnique: jest.fn(), create: jest.fn() },
  },
}));

import { createApp } from "../helpers/app";

// On simule l'appli Express complète, sans démarrer un vrai serveur
const app = createApp();

// Ces tests vérifient ce qui se passe AVANT d'aller en base de données.
// Si le body est invalide, le middleware "validate" répond 400 directement.
// Si le cookie manque, le middleware "requireAuth" répond 401 directement.
// → Aucun mock de base de données nécessaire.

describe("POST /api/auth/login", () => {
  it("retourne 400 si l'email est manquant", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ password: "monmotdepasse" });

    expect(res.status).toBe(400);
  });

  it("retourne 400 si l'email est invalide", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "pas-un-email", password: "monmotdepasse" });

    expect(res.status).toBe(400);
  });

  it("retourne 400 si le body est vide", async () => {
    const res = await request(app).post("/api/auth/login").send({});

    expect(res.status).toBe(400);
  });
});

describe("POST /api/auth/register", () => {
  it("retourne 400 si le type est manquant", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ email: "test@example.com", password: "motdepasse123" });

    expect(res.status).toBe(400);
  });

  it("retourne 400 si le SIRET est invalide (pas 14 chiffres)", async () => {
    const res = await request(app).post("/api/auth/register").send({
      type: "association",
      email: "asso@example.com",
      password: "motdepasse123",
      confirmPassword: "motdepasse123",
      phone: "0612345678",
      address: "1 rue test, Paris",
      nomAsso: "Mon Asso",
      siret: "123",
    });

    expect(res.status).toBe(400);
  });

  it("retourne 400 si les mots de passe sont différents", async () => {
    const res = await request(app).post("/api/auth/register").send({
      type: "benevole",
      email: "test@example.com",
      password: "motdepasse123",
      confirmPassword: "different",
      phone: "0612345678",
      address: "1 rue test, Paris",
      firstname: "Jean",
      lastname: "Dupont",
      capacity: "2 animaux",
    });

    expect(res.status).toBe(400);
  });
});

describe("POST /api/auth/logout", () => {
  it("retourne 200", async () => {
    const res = await request(app).post("/api/auth/logout");

    expect(res.status).toBe(200);
  });
});

describe("GET /api/auth/me", () => {
  it("retourne 401 si aucun cookie n'est envoyé", async () => {
    const res = await request(app).get("/api/auth/me");

    expect(res.status).toBe(401);
  });
});
