import request from "supertest";
import { prisma } from "../../src/client";
import { createApp } from "../helpers/app";
import { cleanDb } from "../helpers/db";

const app = createApp();

const VOLUNTEER_BODY = {
  type: "benevole",
  email: "benevole@test.com",
  password: "Motdepasse1!",
  confirmPassword: "Motdepasse1!",
  phone: "0612345678",
  address: "1 rue du Test, Paris",
  firstname: "Jean",
  lastname: "Dupont",
  capacity: "2 animaux",
};

beforeEach(async () => {
  await cleanDb();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("POST /api/auth/register", () => {
  it("crée un bénévole, retourne 201 et l'enregistre en base", async () => {
    const res = await request(app).post("/api/auth/register").send(VOLUNTEER_BODY);

    expect(res.status).toBe(201);

    const user = await prisma.users.findUnique({ where: { email: VOLUNTEER_BODY.email } });
    expect(user).not.toBeNull();
  });

  it("retourne 409 si l'email est déjà utilisé", async () => {
    await request(app).post("/api/auth/register").send(VOLUNTEER_BODY);

    const res = await request(app).post("/api/auth/register").send(VOLUNTEER_BODY);

    expect(res.status).toBe(409);
  });

  it("retourne 400 si le body est invalide", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ email: "pas-un-email", password: "court" });

    expect(res.status).toBe(400);
  });
});

describe("POST /api/auth/login", () => {
  beforeEach(async () => {
    await request(app).post("/api/auth/register").send(VOLUNTEER_BODY);
  });

  it("retourne 200 avec les bons identifiants", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: VOLUNTEER_BODY.email,
      password: VOLUNTEER_BODY.password,
    });

    expect(res.status).toBe(200);
  });

  it("retourne 401 avec un mauvais mot de passe", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: VOLUNTEER_BODY.email,
      password: "mauvais-mot-de-passe",
    });

    expect(res.status).toBe(401);
  });

  it("retourne 401 si l'email n'existe pas", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "inexistant@test.com",
      password: "Motdepasse1!",
    });

    expect(res.status).toBe(401);
  });
});
