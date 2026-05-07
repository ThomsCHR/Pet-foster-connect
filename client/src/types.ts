// ── Statuts ──────────────────────────────────────────────────────────────────

export type AnimalStatus = "a_placer" | "placement_en_cours" | "adopte" | "place";
export type OfferStatus = "soumise" | "acceptee" | "refusee" | "annulee";

// ── Briques de base ───────────────────────────────────────────────────────────

export type Image = {
  id: number;
  url: string;
  thumb: string;
};

// ── Entités principales ───────────────────────────────────────────────────────

export type Animal = {
  id: number;
  name: string;
  species: string;
  breed: string | null;
  gender: string;
  dateOfBirth: string | null;
  description: string;
  status: AnimalStatus;
  associationId?: number;
  images: Image[];
  association?: {
    id: number;
    name: string;
    user?: { region: string };
  } | null;
};

export type Association = {
  id: number;
  name: string;
  user: {
    email: string;
    phone: string;
    address: string;
    region: string | null;
    description: string | null;
  };
  animals?: Animal[];
  _count?: { animals: number };
};

export type Volunteer = {
  id: number;
  firstname: string;
  lastname: string;
  capacity: string;
  user: {
    id?: number;
    email: string;
    phone: string;
    address: string;
    region: string | null;
    description: string | null;
  };
  animal?: Animal[];
};

export type ConnectedUser = {
  id: number;
  email: string;
  phone: string;
  address: string;
  region?: string | null;
  description?: string | null;
  image?: string | null;
  volunteer?: { id: number; firstname: string; lastname: string; capacity: string } | null;
  association?: { id: number; name: string; siret: string } | null;
};

// ── Demandes d'accueil ────────────────────────────────────────────────────────

export type AssociationOffer = {
  volunteerId: number;
  animalId: number;
  status: OfferStatus;
  animal: {
    id: number;
    name: string;
    species: string;
    images: Image[];
  };
  volunteer: {
    id: number;
    firstname: string;
    lastname: string;
    capacity: string;
    user: {
      email: string;
      phone: string;
      region: string | null;
    };
  };
};

export type VolunteerOffer = {
  volunteerId: number;
  animalId: number;
  status: OfferStatus;
  animal: {
    id: number;
    name: string;
    species: string;
    breed: string | null;
    images: Image[];
    association: { id: number; name: string };
  };
};
