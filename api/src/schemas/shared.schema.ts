import { z } from "zod";

export const regionEnum = z.enum([
  "Auvergne_Rhone_Alpes",
  "Bourgogne_Franche_Comte",
  "Bretagne",
  "Centre_Val_de_Loire",
  "Corse",
  "Grand_Est",
  "Hauts_de_France",
  "Ile_de_France",
  "Normandie",
  "Nouvelle_Aquitaine",
  "Occitanie",
  "Pays_de_la_Loire",
  "Provence_Alpes_Cote_Azur",
  "Guadeloupe",
  "Martinique",
  "Guyane",
  "La_Reunion",
  "Mayotte",
]);

export const animalStatusEnum = z.enum([
  "a_placer",
  "placement_en_cours",
  "adopte",
  "place",
]);

export const offerStatusEnum = z.enum([
  "soumise",
  "annulee",
  "acceptee",
  "refusee",
]);

export const phoneSchema = z
  .string()
  .regex(/^(?:\+33|0)[1-9](?:\d{8})$/, "Numéro de téléphone invalide");
