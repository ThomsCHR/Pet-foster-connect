import { z } from "zod";
import { animalStatusEnum } from "./shared.schema";

export const createAnimalSchema = z.object({
  name: z.string().min(1, "Nom requis"),
  species: z.string().min(1, "Espèce requise"),
  breed: z.string().nullable().optional(),
  gender: z.string().min(1, "Genre requis"),
  description: z.string().min(1, "Description requise"),
  status: animalStatusEnum.default("a_placer"),
  dateOfBirth: z.coerce.date().optional().nullable(),
});

export const updateAnimalSchema = createAnimalSchema.partial();

export type CreateAnimalInput = z.infer<typeof createAnimalSchema>;
export type UpdateAnimalInput = z.infer<typeof updateAnimalSchema>;
