import request from "supertest";
import { prisma } from "../../src/client";
import { createApp } from "../helpers/app";
import { cleanDb } from "../helpers/db";

const app = createApp();

const ASSO_BODY = {
  type: "association",
  email: "asso@test.com",
  password: "Motdepasse1!",
  confirmPassword: "Motdepasse1!",
  phone: "0612345678",
  address: "1 rue du Test, Paris",
  nomAsso: "Test Asso",
  siret: "12345678901234",
};

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

// Inscrit un utilisateur et retourne son cookie de session
async function getCookieFor(body: typeof ASSO_BODY | typeof VOLUNTEER_BODY) {
  const res = await request(app).post("/api/auth/register").send(body);
  return res.headers["set-cookie"][0] as string;
}

const ANIMAL_BODY = {
  name: "Rex",
  species: "Chien",
  gender: "Mâle",
  description: "Un beau chien énergique",
};

beforeEach(async () => {
  await cleanDb();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("GET /api/animals", () => {
  it("retourne 200 avec un tableau (même vide)", async () => {
    const res = await request(app).get("/api/animals");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});

describe("POST /api/animals", () => {
  it("retourne 401 sans authentification", async () => {
    const res = await request(app).post("/api/animals").send(ANIMAL_BODY);

    expect(res.status).toBe(401);
  });

  it("retourne 403 si connecté en tant que bénévole", async () => {
    const cookie = await getCookieFor(VOLUNTEER_BODY);

    const res = await request(app)
      .post("/api/animals")
      .set("Cookie", cookie)
      .send(ANIMAL_BODY);

    expect(res.status).toBe(403);
  });

  it("crée un animal et retourne 201 si connecté en tant qu'association", async () => {
    const cookie = await getCookieFor(ASSO_BODY);

    const res = await request(app)
      .post("/api/animals")
      .set("Cookie", cookie)
      .send(ANIMAL_BODY);

    expect(res.status).toBe(201);

    const animal = await prisma.animal.findFirst({ where: { name: "Rex" } });
    expect(animal).not.toBeNull();
    expect(animal?.status).toBe("a_placer");
  });

  it("retourne 400 si le body est invalide (nom manquant)", async () => {
    const cookie = await getCookieFor(ASSO_BODY);

    const res = await request(app)
      .post("/api/animals")
      .set("Cookie", cookie)
      .send({ species: "Chien", gender: "Mâle", description: "Un chien" });

    expect(res.status).toBe(400);
  });
});
