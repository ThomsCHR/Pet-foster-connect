import { z } from "zod";
import { regionEnum, phoneSchema } from "./shared.schema";

export const updateVolunteerSchema = z.object({
  firstname: z.string().trim().min(2, "Prénom trop court"),
  lastname: z.string().trim().min(2, "Nom trop court"),
  capacity: z.string().trim().min(1, "Capacité d'accueil requise"),
  email: z.string().trim().email("Email invalide"),
  phone: phoneSchema,
  address: z.string().trim().min(5, "Adresse trop courte"),
  region: regionEnum.optional(),
  description: z.string().trim().optional(),
});

export type UpdateVolunteerInput = z.infer<typeof updateVolunteerSchema>;
