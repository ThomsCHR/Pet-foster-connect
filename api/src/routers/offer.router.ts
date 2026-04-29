import { Router } from "express";
import { createOffer, getOffersByVolunteer, getOffersByAssociation, updateOfferStatus } from "../controllers/offer.controller";
import { requireAuth } from "../middlewares/auth.middleware";

const offerRouter = Router();

// POST   /api/offers                          → soumettre une demande (bénévole connecté)
// GET    /api/offers/volunteer/:volunteerId   → voir ses propres demandes
// GET    /api/offers/association/:assoId      → voir les demandes reçues (association connectée)
// PATCH  /api/offers/:volunteerId/:animalId   → changer le statut (accepter/refuser/annuler)

offerRouter.post("/", requireAuth, createOffer);
offerRouter.get("/volunteer/:volunteerId", requireAuth, getOffersByVolunteer);
offerRouter.get("/association/:associationId", requireAuth, getOffersByAssociation);
offerRouter.patch("/:volunteerId/:animalId", requireAuth, updateOfferStatus);

export default offerRouter;
