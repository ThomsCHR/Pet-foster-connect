import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { apiFetch } from "../../lib/api";
import { useAuth } from "../../contexts/AuthContext";
import "../../assets/styles/association.detail.css";

// ── Types ──────────────────────────────────────────────────────────────────

type OfferStatus = "soumise" | "acceptee" | "refusee" | "annulee";

type AssociationOffer = {
  volunteerId: number;
  animalId: number;
  status: OfferStatus;
  animal: {
    id: number;
    name: string;
    species: string;
    images: { id: number; url: string; thumb: string }[];
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

type AnimalImage = {
  id: number;
  url: string;
  thumb: string;
};

type Animal = {
  id: number;
  name: string;
  species: string;
  breed: string | null;
  gender: string;
  description: string;
  status: string;
  images: AnimalImage[];
};

type Association = {
  id: number;
  name: string;
  user: {
    email: string;
    phone: string;
    region: string | null;
    description: string | null;
  };
  animals: Animal[];
};

// ── Constantes ─────────────────────────────────────────────────────────────

const REGION_LABELS: Record<string, string> = {
  Auvergne_Rhone_Alpes:    "Auvergne-Rhône-Alpes",
  Bourgogne_Franche_Comte: "Bourgogne-Franche-Comté",
  Bretagne:                "Bretagne",
  Centre_Val_de_Loire:     "Centre-Val de Loire",
  Corse:                   "Corse",
  Grand_Est:               "Grand Est",
  Hauts_de_France:         "Hauts-de-France",
  Ile_de_France:           "Île-de-France",
  Normandie:               "Normandie",
  Nouvelle_Aquitaine:      "Nouvelle-Aquitaine",
  Occitanie:               "Occitanie",
  Pays_de_la_Loire:        "Pays de la Loire",
  Provence_Alpes_Cote_Azur:"Provence-Alpes-Côte d'Azur",
  Guadeloupe:              "Guadeloupe",
  Martinique:              "Martinique",
  Guyane:                  "Guyane",
  La_Reunion:              "La Réunion",
  Mayotte:                 "Mayotte",
};

const OFFER_STATUS_LABELS: Record<OfferStatus, string> = {
  soumise:  "En attente",
  acceptee: "Acceptée",
  refusee:  "Refusée",
  annulee:  "Annulée",
};

const OFFER_STATUS_CLASS: Record<OfferStatus, string> = {
  soumise:  "offre-statut-soumise",
  acceptee: "offre-statut-acceptee",
  refusee:  "offre-statut-refusee",
  annulee:  "offre-statut-annulee",
};

// ── Fonctions utilitaires ──────────────────────────────────────────────────

function getRegionLabel(regionValue: string | null): string {
  if (regionValue === null) return "France";
  if (REGION_LABELS[regionValue]) return REGION_LABELS[regionValue];
  return regionValue;
}

function getStatusLabel(status: string): string {
  if (status === "a_placer")           return "À placer";
  if (status === "placement_en_cours") return "Placement en cours";
  if (status === "place")              return "Placé";
  if (status === "adopte")             return "Adopté";
  return status;
}

// Props gardées pour compatibilité avec App.tsx
type Props = {
  isLogged: boolean;
  connectedUser: unknown;
};

function AssociationDetailPage(_props: Props) {
  const { id } = useParams();
  const { connectedUser, logout } = useAuth();
  const navigate = useNavigate();

  const [association, setAssociation] = useState<Association | null>(null);
  const [loading, setLoading]         = useState(true);
  const [notFound, setNotFound]       = useState(false);

  // Demandes reçues (visibles uniquement pour l'association propriétaire)
  const [demandesRecues, setDemandesRecues]     = useState<AssociationOffer[]>([]);
  const [demandesLoading, setDemandesLoading]   = useState(false);
  const [offerAction, setOfferAction]           = useState(false);

  // Statuts des demandes du bénévole connecté par animal (animalId → statut)
  const [volunteerOffres, setVolunteerOffres] = useState<Record<number, OfferStatus>>({});
  const [volunteerOffreEnvoi, setVolunteerOffreEnvoi] = useState<number | null>(null);

  // Chargement de l'association
  useEffect(() => {
    async function chargerAssociation() {
      try {
        const reponse = await apiFetch("/api/associations/" + id);

        if (reponse.status === 404) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        const donnees = await reponse.json();
        setAssociation(donnees);
      } catch (erreur) {
        console.error("Erreur lors du chargement de l'association :", erreur);
      }
      setLoading(false);
    }

    chargerAssociation();
  }, [id]);

  // Si c'est l'association propriétaire, on charge les demandes reçues
  useEffect(() => {
    if (!estAssociationProprietaire()) return;

    setDemandesLoading(true);

    apiFetch("/api/offers/association/" + id)
      .then((res) => res.json())
      .then((json) => {
        if (json.data) setDemandesRecues(json.data);
      })
      .catch((err) => console.error("Erreur lors du chargement des demandes :", err))
      .finally(() => setDemandesLoading(false));
  }, [id, connectedUser]);

  // Si c'est un bénévole connecté, on charge ses demandes pour cette association
  useEffect(() => {
    const volunteerId = connectedUser?.volunteer?.id;
    if (!volunteerId) return;

    apiFetch("/api/offers/volunteer/" + volunteerId)
      .then((res) => res.json())
      .then((json) => {
        if (!json.data) return;

        // Construire un dictionnaire animalId → statut de l'offre
        const mapOffres: Record<number, OfferStatus> = {};
        for (const offre of json.data) {
          mapOffres[offre.animalId] = offre.status;
        }
        setVolunteerOffres(mapOffres);
      })
      .catch((err) => console.error("Erreur lors du chargement des offres bénévole :", err));
  }, [connectedUser]);

  async function seDeconnecter() {
    await logout();
    navigate("/");
  }

  // Vérifie si le bénévole connecté peut faire une demande sur cet animal
  function estBenevole(): boolean {
    if (connectedUser === null) return false;
    if (connectedUser.volunteer === null || connectedUser.volunteer === undefined) return false;
    return true;
  }

  // Vérifie si l'utilisateur connecté est bien le propriétaire de cette association
  function estAssociationProprietaire(): boolean {
    if (connectedUser === null) return false;
    if (connectedUser.association === null || connectedUser.association === undefined) return false;
    return connectedUser.association.id === Number(id);
  }

  // Soumet une demande d'accueil pour un animal
  async function faireDemandeAccueil(animalId: number) {
    setVolunteerOffreEnvoi(animalId);

    try {
      const reponse = await apiFetch("/api/offers", {
        method: "POST",
        body: JSON.stringify({ animalId }),
      });

      if (reponse.ok || reponse.status === 200) {
        setVolunteerOffres((prev) => ({ ...prev, [animalId]: "soumise" }));
      } else {
        const json = await reponse.json();
        console.error("Erreur :", json.error);
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
    }

    setVolunteerOffreEnvoi(null);
  }

  // Annule la demande d'accueil d'un bénévole sur un animal
  async function annulerDemandeBenevole(animalId: number) {
    const volunteerId = connectedUser?.volunteer?.id;
    if (!volunteerId) return;

    setVolunteerOffreEnvoi(animalId);

    try {
      const reponse = await apiFetch(`/api/offers/${volunteerId}/${animalId}`, {
        method: "PATCH",
        body: JSON.stringify({ status: "annulee" }),
      });

      if (reponse.ok) {
        setVolunteerOffres((prev) => ({ ...prev, [animalId]: "annulee" }));
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
    }

    setVolunteerOffreEnvoi(null);
  }

  // L'association accepte ou refuse une demande
  async function traiterDemande(volunteerId: number, animalId: number, status: "acceptee" | "refusee") {
    setOfferAction(true);

    try {
      const reponse = await apiFetch(`/api/offers/${volunteerId}/${animalId}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });

      if (reponse.ok) {
        // Mettre à jour localement : changer le statut de cette demande
        setDemandesRecues((prev) =>
          prev.map((d) =>
            d.volunteerId === volunteerId && d.animalId === animalId
              ? { ...d, status }
              : // Si la demande est acceptée, refuser automatiquement les autres pour ce même animal
                status === "acceptee" && d.animalId === animalId && d.status === "soumise"
                ? { ...d, status: "refusee" }
                : d
          )
        );
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
    }

    setOfferAction(false);
  }

  // Rendu du bouton d'action pour un animal (côté bénévole)
  function renderBoutonAnimal(animal: Animal) {
    // Un animal non disponible n'a pas de bouton d'action
    if (animal.status !== "a_placer") {
      return (
        <div className="demande-locked" style={{ background: "#f0fdf4", color: "#166534" }}>
          {getStatusLabel(animal.status)}
        </div>
      );
    }

    if (!estBenevole()) {
      return (
        <div className="demande-locked">
          🔒 <span>
            <Link to="/auth">Connectez-vous</Link> en tant que bénévole pour faire une demande
          </span>
        </div>
      );
    }

    const statut = volunteerOffres[animal.id];
    const enChargement = volunteerOffreEnvoi === animal.id;

    if (statut === "soumise") {
      return (
        <div className="demande-statut-benevole">
          <span className="offre-statut-soumise offre-statut-mini">⏳ Demande envoyée</span>
          <button
            className="btn-demande-annuler-mini"
            onClick={() => annulerDemandeBenevole(animal.id)}
            disabled={enChargement}
          >
            Annuler
          </button>
        </div>
      );
    }

    if (statut === "acceptee") {
      return (
        <div className="demande-statut-benevole">
          <span className="offre-statut-acceptee offre-statut-mini">✅ Acceptée</span>
        </div>
      );
    }

    if (statut === "refusee") {
      return (
        <div className="demande-statut-benevole">
          <span className="offre-statut-refusee offre-statut-mini">❌ Refusée</span>
        </div>
      );
    }

    // Pas de demande ou demande annulée → bouton pour soumettre
    return (
      <button
        className="btn-demande"
        onClick={() => faireDemandeAccueil(animal.id)}
        disabled={enChargement}
      >
        {enChargement ? "Envoi..." : "Faire une demande d'accueil"}
      </button>
    );
  }

  // ── Affichages conditionnels ──

  if (loading) {
    return <p style={{ padding: "40px", textAlign: "center" }}>Chargement...</p>;
  }

  if (notFound || association === null) {
    return (
      <div className="detail-not-found">
        <p>Association introuvable.</p>
        <Link to="/associations">← Retour aux associations</Link>
      </div>
    );
  }

  // Compte des demandes en attente pour l'association
  const demandesEnAttente = demandesRecues.filter((d) => d.status === "soumise").length;

  return (
    <div className="detail-page">

      {/* ===== EN-TÊTE ===== */}
      <div className="detail-header detail-header-placeholder">
        <h1>{association.name}</h1>
        <span className="detail-region-badge">
          📍 {getRegionLabel(association.user.region)}
        </span>

        {estAssociationProprietaire() && (
          <button className="detail-header-btn-logout" onClick={seDeconnecter}>
            Se déconnecter
          </button>
        )}
      </div>

      {/* ===== INFOS ===== */}
      <div className="detail-infos">
        <div className="detail-infos-inner">
          <p className="detail-description">
            {association.user.description || "Aucune description disponible."}
          </p>
          <div className="detail-meta">
            <span className="detail-meta-item">✉️ {association.user.email}</span>
            <span className="detail-meta-item">📞 {association.user.phone}</span>
            <span className="detail-meta-item">🐾 {association.animals.length} animaux</span>
          </div>
        </div>
      </div>

      {/* ===== ANIMAUX ===== */}
      <div className="detail-animaux">
        <h2>Nos animaux</h2>
        <p className="detail-animaux-subtitle">
          {association.animals.length === 0
            ? "Aucun animal pour le moment"
            : association.animals.length + " animal" + (association.animals.length > 1 ? "ux" : "") + " en attente d'une famille d'accueil"}
        </p>

        {association.animals.length === 0 && (
          <p style={{ color: "#aaa", fontSize: "14px" }}>Aucun animal pour le moment.</p>
        )}

        <div className="detail-animaux-grille">
          {association.animals.map((animal) => {

            let photoUrl = "https://placehold.co/400x300?text=Pas+de+photo";
            if (animal.images.length > 0) photoUrl = animal.images[0].url;

            let emoji = "🐱";
            if (animal.species === "Chien") emoji = "🐶";

            let raceOuEspece = animal.species;
            if (animal.breed !== null) raceOuEspece = animal.breed;

            return (
              <div key={animal.id} className="detail-animal-card">

                <div className="detail-animal-photo-wrapper">
                  <img src={photoUrl} alt={animal.name} className="detail-animal-photo" />
                  <span className="detail-animal-statut statut-dispo">
                    {getStatusLabel(animal.status)}
                  </span>
                </div>

                <div className="detail-animal-infos">
                  <div className="detail-animal-top">
                    <h3 className="detail-animal-nom">{animal.name}</h3>
                    <span className="detail-animal-espece">{emoji}</span>
                  </div>
                  <p className="detail-animal-race">{raceOuEspece} · {animal.gender}</p>
                  <p className="detail-animal-description">{animal.description}</p>

                  {/* Bouton de demande (non visible pour l'association propriétaire) */}
                  {!estAssociationProprietaire() && renderBoutonAnimal(animal)}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* ===== SECTION DEMANDES REÇUES (visible uniquement pour l'association) ===== */}
      {estAssociationProprietaire() && (
        <div className="detail-demandes">

          <div className="detail-demandes-header">
            <h2>Demandes d'accueil reçues</h2>
            {demandesEnAttente > 0 && (
              <span className="detail-demandes-badge">
                {demandesEnAttente} en attente
              </span>
            )}
          </div>

          <p className="detail-animaux-subtitle">
            {demandesLoading
              ? "Chargement..."
              : demandesRecues.length === 0
                ? "Aucune demande reçue pour le moment"
                : demandesRecues.length === 1
                  ? "1 demande reçue"
                  : demandesRecues.length + " demandes reçues"}
          </p>

          {!demandesLoading && demandesRecues.length === 0 && (
            <p style={{ color: "#aaa", fontSize: "14px", textAlign: "center", padding: "24px 0" }}>
              Les bénévoles peuvent faire des demandes depuis la fiche de chaque animal.
            </p>
          )}

          {!demandesLoading && demandesRecues.length > 0 && (
            <div className="detail-demandes-liste">
              {demandesRecues.map((demande) => {

                const volunteer = demande.volunteer;
                const animal    = demande.animal;

                let photoUrl = "https://placehold.co/80x80?text=?";
                if (animal.images.length > 0) photoUrl = animal.images[0].thumb || animal.images[0].url;

                const peutTraiter = demande.status === "soumise";

                return (
                  <div key={`${demande.volunteerId}-${demande.animalId}`} className="detail-demande-item">

                    {/* Photo de l'animal */}
                    <Link to={"/animals/" + animal.id}>
                      <img src={photoUrl} alt={animal.name} className="detail-demande-photo" />
                    </Link>

                    {/* Infos bénévole + animal */}
                    <div className="detail-demande-infos">
                      <p className="detail-demande-benevole">
                        {volunteer.firstname} {volunteer.lastname}
                      </p>
                      <p className="detail-demande-meta">📧 {volunteer.user.email}</p>
                      <p className="detail-demande-meta">📞 {volunteer.user.phone}</p>
                      <p className="detail-demande-meta">🐾 Capacité : {volunteer.capacity}</p>
                      <p className="detail-demande-animal">
                        Pour : <Link to={"/animals/" + animal.id}>{animal.name}</Link>
                      </p>
                    </div>

                    {/* Statut + boutons d'action */}
                    <div className="detail-demande-actions">
                      <span className={"offre-statut " + OFFER_STATUS_CLASS[demande.status]}>
                        {OFFER_STATUS_LABELS[demande.status]}
                      </span>

                      {peutTraiter && (
                        <div className="detail-demande-btns">
                          <button
                            className="btn-accepter"
                            onClick={() => traiterDemande(demande.volunteerId, demande.animalId, "acceptee")}
                            disabled={offerAction}
                          >
                            Accepter
                          </button>
                          <button
                            className="btn-refuser"
                            onClick={() => traiterDemande(demande.volunteerId, demande.animalId, "refusee")}
                            disabled={offerAction}
                          >
                            Refuser
                          </button>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      )}

    </div>
  );
}

export default AssociationDetailPage;
