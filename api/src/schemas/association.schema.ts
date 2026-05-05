import { z } from "zod";
import { regionEnum, phoneSchema } from "./shared.schema";

export const updateAssociationSchema = z.object({
  name: z.string().min(2, "Nom d'association trop court"),
  email: z.string().email("Email invalide"),
  phone: phoneSchema,
  address: z.string().min(5, "Adresse trop courte"),
  region: regionEnum.optional(),
  description: z.string().optional(),
});

export type UpdateAssociationInput = z.infer<typeof updateAssociationSchema>;
