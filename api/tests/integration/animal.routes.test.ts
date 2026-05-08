import request from "supertest";
import jwt from "jsonwebtoken";

// On remplace le client Prisma par un faux objet (les tests n'atteignent jamais la DB)
jest.mock("../../src/client", () => ({
  prisma: {
    animal: { findMany: jest.fn(), findUnique: jest.fn(), create: jest.fn(), update: jest.fn(), delete: jest.fn() },
    association: { findUnique: jest.fn() },
  },
}));

import { createApp } from "../helpers/app";

const app = createApp();

// Crée un token JWT valide pour les tests (sans base de données)
function tokenBenevole() {
  return jwt.sign(
    { id: 1, email: "benevole@example.com", role: "volunteer" },
    "test-secret-jest-key"
  );
}

function tokenAssociation() {
  return jwt.sign(
    { id: 2, email: "asso@example.com", role: "association" },
    "test-secret-jest-key"
  );
}

describe("POST /api/animals", () => {
  it("retourne 401 si on n'est pas connecté", async () => {
    const res = await request(app).post("/api/animals").send({
      name: "Rex",
      species: "Chien",
      gender: "Mâle",
      description: "Un beau chien",
    });

    expect(res.status).toBe(401);
  });

  it("retourne 403 si on est connecté en tant que bénévole", async () => {
    const res = await request(app)
      .post("/api/animals")
      .set("Cookie", `token=${tokenBenevole()}`)
      .send({
        name: "Rex",
        species: "Chien",
        gender: "Mâle",
        description: "Un beau chien",
      });

    expect(res.status).toBe(403);
  });

  it("retourne 400 si le body est invalide (association connectée)", async () => {
    const res = await request(app)
      .post("/api/animals")
      .set("Cookie", `token=${tokenAssociation()}`)
      .send({ name: "" }); // nom vide = invalide

    expect(res.status).toBe(400);
  });
});

describe("PUT /api/animals/:id", () => {
  it("retourne 401 si on n'est pas connecté", async () => {
    const res = await request(app).put("/api/animals/1").send({ name: "Max" });

    expect(res.status).toBe(401);
  });

  it("retourne 403 si on est connecté en tant que bénévole", async () => {
    const res = await request(app)
      .put("/api/animals/1")
      .set("Cookie", `token=${tokenBenevole()}`)
      .send({ name: "Max" });

    expect(res.status).toBe(403);
  });
});

describe("DELETE /api/animals/:id", () => {
  it("retourne 401 si on n'est pas connecté", async () => {
    const res = await request(app).delete("/api/animals/1");

    expect(res.status).toBe(401);
  });

  it("retourne 403 si on est connecté en tant que bénévole", async () => {
    const res = await request(app)
      .delete("/api/animals/1")
      .set("Cookie", `token=${tokenBenevole()}`);

    expect(res.status).toBe(403);
  });
});
