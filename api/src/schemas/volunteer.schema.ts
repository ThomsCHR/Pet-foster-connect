import { z } from "zod";
import { regionEnum, phoneSchema } from "./shared.schema";

export const updateVolunteerSchema = z.object({
  firstname: z.string().min(2, "Prénom trop court"),
  lastname: z.string().min(2, "Nom trop court"),
  capacity: z.string().min(1, "Capacité d'accueil requise"),
  email: z.string().email("Email invalide"),
  phone: phoneSchema,
  address: z.string().min(5, "Adresse trop courte"),
  region: regionEnum.optional(),
  description: z.string().optional(),
});

export type UpdateVolunteerInput = z.infer<typeof updateVolunteerSchema>;
