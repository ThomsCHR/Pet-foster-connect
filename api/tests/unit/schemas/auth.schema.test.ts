import { loginSchema, registerSchema } from "../../../src/schemas/auth.schema";

// --- loginSchema ---

describe("loginSchema", () => {
  it("accepte un email et mot de passe valides", () => {
    const result = loginSchema.safeParse({
      email: "test@example.com",
      password: "monmotdepasse",
    });
    expect(result.success).toBe(true);
  });

  it("refuse un email mal formaté", () => {
    const result = loginSchema.safeParse({
      email: "pas-un-email",
      password: "monmotdepasse",
    });
    expect(result.success).toBe(false);
  });

  it("refuse si le mot de passe est vide", () => {
    const result = loginSchema.safeParse({
      email: "test@example.com",
      password: "",
    });
    expect(result.success).toBe(false);
  });
});

// --- registerSchema bénévole ---

describe("registerSchema - bénévole", () => {
  const benevoleValide = {
    type: "benevole",
    email: "jean@example.com",
    password: "motdepasse123",
    confirmPassword: "motdepasse123",
    phone: "0612345678",
    address: "1 rue de la Paix, Paris",
    firstname: "Jean",
    lastname: "Dupont",
    capacity: "2 animaux",
  };

  it("accepte un bénévole avec toutes les données correctes", () => {
    const result = registerSchema.safeParse(benevoleValide);
    expect(result.success).toBe(true);
  });

  it("refuse si les deux mots de passe sont différents", () => {
    const result = registerSchema.safeParse({
      ...benevoleValide,
      confirmPassword: "autrechose",
    });
    expect(result.success).toBe(false);
  });

  it("refuse un mot de passe trop court (moins de 8 caractères)", () => {
    const result = registerSchema.safeParse({
      ...benevoleValide,
      password: "court",
      confirmPassword: "court",
    });
    expect(result.success).toBe(false);
  });

  it("refuse un numéro de téléphone invalide", () => {
    const result = registerSchema.safeParse({
      ...benevoleValide,
      phone: "123",
    });
    expect(result.success).toBe(false);
  });
});

// --- registerSchema association ---

describe("registerSchema - association", () => {
  const assoValide = {
    type: "association",
    email: "spa@example.com",
    password: "motdepasse123",
    confirmPassword: "motdepasse123",
    phone: "0612345678",
    address: "10 avenue de la République, Lyon",
    nomAsso: "SPA Lyon",
    siret: "12345678901234",
  };

  it("accepte une association avec toutes les données correctes", () => {
    const result = registerSchema.safeParse(assoValide);
    expect(result.success).toBe(true);
  });

  it("refuse un SIRET qui n'a pas 14 chiffres", () => {
    const result = registerSchema.safeParse({
      ...assoValide,
      siret: "123",
    });
    expect(result.success).toBe(false);
  });
});
