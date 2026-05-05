import { z } from "zod";

export const createOfferSchema = z.object({
  animalId: z
    .number({ invalid_type_error: "animalId doit être un nombre" })
    .int("animalId doit être un entier")
    .positive("animalId invalide"),
});

export const updateOfferStatusSchema = z.object({
  status: z.enum(["acceptee", "refusee", "annulee"], {
    message: "Statut invalide (acceptee, refusee ou annulee)",
  }),
});

export type CreateOfferInput = z.infer<typeof createOfferSchema>;
export type UpdateOfferStatusInput = z.infer<typeof updateOfferStatusSchema>;
