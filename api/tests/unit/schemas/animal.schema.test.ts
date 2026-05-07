import { createAnimalSchema, updateAnimalSchema } from "../../../src/schemas/animal.schema";

// --- createAnimalSchema ---

describe("createAnimalSchema", () => {
  const animalValide = {
    name: "Rex",
    species: "Chien",
    gender: "Mâle",
    description: "Un beau labrador très doux",
  };

  it("accepte un animal avec les champs obligatoires", () => {
    const result = createAnimalSchema.safeParse(animalValide);
    expect(result.success).toBe(true);
  });

  it("met le statut 'a_placer' par défaut", () => {
    const result = createAnimalSchema.safeParse(animalValide);
    expect(result.success && result.data.status).toBe("a_placer");
  });

  it("refuse si le nom est vide", () => {
    const result = createAnimalSchema.safeParse({ ...animalValide, name: "" });
    expect(result.success).toBe(false);
  });

  it("refuse si la description est vide", () => {
    const result = createAnimalSchema.safeParse({ ...animalValide, description: "" });
    expect(result.success).toBe(false);
  });

  it("refuse un statut qui n'existe pas", () => {
    const result = createAnimalSchema.safeParse({ ...animalValide, status: "perdu" });
    expect(result.success).toBe(false);
  });

  it("accepte une race optionnelle", () => {
    const result = createAnimalSchema.safeParse({ ...animalValide, breed: "Labrador" });
    expect(result.success).toBe(true);
  });
});

// --- updateAnimalSchema ---

describe("updateAnimalSchema", () => {
  it("accepte une mise à jour avec un seul champ", () => {
    const result = updateAnimalSchema.safeParse({ name: "Max" });
    expect(result.success).toBe(true);
  });

  it("accepte un objet vide (tous les champs sont optionnels)", () => {
    const result = updateAnimalSchema.safeParse({});
    expect(result.success).toBe(true);
  });
});
