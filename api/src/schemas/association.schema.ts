import { z } from "zod";
import { regionEnum, phoneSchema } from "./shared.schema";

export const updateAssociationSchema = z.object({
  name: z.string().trim().min(2, "Nom d'association trop court"),
  email: z.string().trim().email("Email invalide"),
  phone: phoneSchema,
  address: z.string().trim().min(5, "Adresse trop courte"),
  region: regionEnum.optional(),
  description: z.string().trim().optional(),
});

export type UpdateAssociationInput = z.infer<typeof updateAssociationSchema>;
