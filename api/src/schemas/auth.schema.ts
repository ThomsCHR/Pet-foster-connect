import { z } from "zod";
import { regionEnum } from "./shared.schema";

const passwordSchema = z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères");

const baseRegisterSchema = z.object({
  email: z.string().trim().email("Email invalide"),
  password: passwordSchema,
  confirmPassword: z.string(),
  phone: z.string().trim().regex(/^(?:\+33|0)[1-9](?:\d{8})$/, "Numéro de téléphone invalide"),
  address: z.string().trim().min(5, "Adresse trop courte"),
  region: regionEnum.optional(),
  description: z.string().trim().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

export const registerVolunteerSchema = baseRegisterSchema.extend({
  type: z.literal("benevole"),
  firstname: z.string().trim().min(2, "Prénom trop court"),
  lastname: z.string().trim().min(2, "Nom trop court"),
  capacity: z.string().trim().min(1, "Capacité d'accueil requise"),
});

export const registerAssociationSchema = baseRegisterSchema.extend({
  type: z.literal("association"),
  nomAsso: z.string().trim().min(2, "Nom d'association trop court"),
  siret: z.string().trim().regex(/^\d{14}$/, "Le SIRET doit contenir exactement 14 chiffres"),
});

export const registerSchema = z.discriminatedUnion("type", [
  registerVolunteerSchema,
  registerAssociationSchema,
]);

export const loginSchema = z.object({
  email: z.string().trim().email("Email invalide"),
  password: z.string().min(1, "Mot de passe requis"),
});

export type RegisterVolunteerInput = z.infer<typeof registerVolunteerSchema>;
export type RegisterAssociationInput = z.infer<typeof registerAssociationSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
