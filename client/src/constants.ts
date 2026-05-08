import type { AnimalStatus, OfferStatus } from "./types";

// ── Régions françaises ────────────────────────────────────────────────────────

export const REGIONS = [
  { value: "Auvergne_Rhone_Alpes",     label: "Auvergne-Rhône-Alpes" },
  { value: "Bourgogne_Franche_Comte",  label: "Bourgogne-Franche-Comté" },
  { value: "Bretagne",                 label: "Bretagne" },
  { value: "Centre_Val_de_Loire",      label: "Centre-Val de Loire" },
  { value: "Corse",                    label: "Corse" },
  { value: "Grand_Est",                label: "Grand Est" },
  { value: "Hauts_de_France",          label: "Hauts-de-France" },
  { value: "Ile_de_France",            label: "Île-de-France" },
  { value: "Normandie",                label: "Normandie" },
  { value: "Nouvelle_Aquitaine",       label: "Nouvelle-Aquitaine" },
  { value: "Occitanie",                label: "Occitanie" },
  { value: "Pays_de_la_Loire",         label: "Pays de la Loire" },
  { value: "Provence_Alpes_Cote_Azur", label: "Provence-Alpes-Côte d'Azur" },
  { value: "Guadeloupe",               label: "Guadeloupe" },
  { value: "Martinique",               label: "Martinique" },
  { value: "Guyane",                   label: "Guyane" },
  { value: "La_Reunion",               label: "La Réunion" },
  { value: "Mayotte",                  label: "Mayotte" },
];

export const REGION_LABELS: Record<string, string> = {
  Auvergne_Rhone_Alpes:     "Auvergne-Rhône-Alpes",
  Bourgogne_Franche_Comte:  "Bourgogne-Franche-Comté",
  Bretagne:                 "Bretagne",
  Centre_Val_de_Loire:      "Centre-Val de Loire",
  Corse:                    "Corse",
  Grand_Est:                "Grand Est",
  Hauts_de_France:          "Hauts-de-France",
  Ile_de_France:            "Île-de-France",
  Normandie:                "Normandie",
  Nouvelle_Aquitaine:       "Nouvelle-Aquitaine",
  Occitanie:                "Occitanie",
  Pays_de_la_Loire:         "Pays de la Loire",
  Provence_Alpes_Cote_Azur: "Provence-Alpes-Côte d'Azur",
  Guadeloupe:               "Guadeloupe",
  Martinique:               "Martinique",
  Guyane:                   "Guyane",
  La_Reunion:               "La Réunion",
  Mayotte:                  "Mayotte",
};

export function getRegionLabel(regionValue: string | null, fallback = "France"): string {
  if (regionValue === null) return fallback;
  return REGION_LABELS[regionValue] ?? regionValue;
}

// ── Statuts animaux ───────────────────────────────────────────────────────────

export const ANIMAL_STATUS_LABELS: Record<AnimalStatus, string> = {
  a_placer:           "À placer",
  placement_en_cours: "Placement en cours",
  place:              "Placé",
  adopte:             "Adopté",
};

export const ANIMAL_STATUS_CLASS: Record<AnimalStatus, string> = {
  a_placer:           "statut-a-placer",
  placement_en_cours: "statut-placement-en-cours",
  place:              "statut-place",
  adopte:             "statut-adopte",
};

// ── Statuts des demandes ──────────────────────────────────────────────────────

export const OFFER_STATUS_LABELS: Record<OfferStatus, string> = {
  soumise:  "En attente",
  acceptee: "Acceptée",
  refusee:  "Refusée",
  annulee:  "Annulée",
};

export const OFFER_STATUS_CLASS: Record<OfferStatus, string> = {
  soumise:  "offre-statut-soumise",
  acceptee: "offre-statut-acceptee",
  refusee:  "offre-statut-refusee",
  annulee:  "offre-statut-annulee",
};
