import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { apiFetch } from "../../lib/api";
import { useAuth } from "../../contexts/AuthContext";
import "../../assets/styles/profil.css";

// ── Types ──────────────────────────────────────────────────────────────────

type OfferStatus = "soumise" | "acceptee" | "refusee" | "annulee";

type OfferData = {
  volunteerId: number;
  animalId: number;
  status: OfferStatus;
  animal: {
    id: number;
    name: string;
    species: string;
    breed: string | null;
    images: { id: number; url: string; thumb: string }[];
    association: { id: number; name: string };
  };
};

type ImageData = {
  id: number;
  url: string;
  thumb: string;
};

type AnimalData = {
  id: number;
  name: string;
  species: string;
  breed: string | null;
  gender: string;
  status: string;
  images: ImageData[];
  association: {
    id: number;
    name: string;
  };
};

type VolunteerData = {
  id: number;
  firstname: string;
  lastname: string;
  capacity: string;
  user: {
    id: number;
    email: string;
    phone: string;
    address: string;
    region: string | null;
    description: string | null;
  };
  animal: AnimalData[];
};

// ── Constantes ─────────────────────────────────────────────────────────────

const REGIONS = [
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
  if (regionValue === null) return "—";
  for (let i = 0; i < REGIONS.length; i++) {
    if (REGIONS[i].value === regionValue) return REGIONS[i].label;
  }
  return regionValue;
}

function getStatusLabel(status: string): string {
  if (status === "a_placer")           return "À placer";
  if (status === "placement_en_cours") return "Placement en cours";
  if (status === "place")              return "Placé";
  if (status === "adopte")             return "Adopté";
  return status;
}

function getStatusClass(status: string): string {
  if (status === "a_placer")           return "statut-a-placer";
  if (status === "placement_en_cours") return "statut-placement";
  if (status === "place")              return "statut-place";
  if (status === "adopte")             return "statut-adopte";
  return "";
}

// ── Composant ──────────────────────────────────────────────────────────────

function VolunteerPage() {
  const { id } = useParams();
  const { connectedUser, refreshUser, logout } = useAuth();
  const navigate = useNavigate();

  // Données chargées depuis l'API
  const [volunteer, setVolunteer] = useState<VolunteerData | null>(null);
  const [loading, setLoading]     = useState(true);
  const [notFound, setNotFound]   = useState(false);

  // Gestion du mode édition
  const [editing, setEditing]     = useState(false);
  const [saving, setSaving]       = useState(false);
  const [formError, setFormError] = useState("");

  // Champs du formulaire d'édition
  const [firstname, setFirstname]       = useState("");
  const [lastname, setLastname]         = useState("");
  const [capacity, setCapacity]         = useState("");
  const [email, setEmail]               = useState("");
  const [phone, setPhone]               = useState("");
  const [address, setAddress]           = useState("");
  const [region, setRegion]             = useState("");
  const [description, setDescription]   = useState("");

  // Demandes d'accueil du bénévole
  const [offers, setOffers]             = useState<OfferData[]>([]);
  const [offersLoading, setOffersLoading] = useState(false);
  const [offerAction, setOfferAction]   = useState(false);

  // Chargement du profil au montage du composant
  useEffect(() => {
    async function chargerProfil() {
      try {
        const reponse = await apiFetch("/api/volunteers/" + id);

        if (reponse.status === 404) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        const donnees = await reponse.json();
        setVolunteer(donnees);
        setLoading(false);
      } catch (erreur) {
        console.error("Erreur lors du chargement du profil :", erreur);
        setLoading(false);
      }
    }

    chargerProfil();
  }, [id]);

  // Chargement des demandes d'accueil (seulement pour le propriétaire du profil)
  useEffect(() => {
    const estProprietaire =
      connectedUser !== null &&
      connectedUser.volunteer !== null &&
      connectedUser.volunteer !== undefined &&
      connectedUser.volunteer.id === Number(id);

    if (!estProprietaire) return;

    setOffersLoading(true);

    apiFetch("/api/offers/volunteer/" + id)
      .then((res) => res.json())
      .then((json) => {
        if (json.data) {
          setOffers(json.data);
        }
      })
      .catch((err) => console.error("Erreur lors du chargement des demandes :", err))
      .finally(() => setOffersLoading(false));
  }, [id, connectedUser]);

  // Ouvre le formulaire en pré-remplissant les champs
  function ouvrirEdition() {
    if (volunteer === null) return;
    setFirstname(volunteer.firstname);
    setLastname(volunteer.lastname);
    setCapacity(volunteer.capacity);
    setEmail(volunteer.user.email);
    setPhone(volunteer.user.phone);
    setAddress(volunteer.user.address);
    setDescription(volunteer.user.description || "");
    setRegion(volunteer.user.region || "");
    setFormError("");
    setEditing(true);
  }

  async function seDeconnecter() {
    await logout();
    navigate("/");
  }

  function annulerEdition() {
    setEditing(false);
    setFormError("");
  }

  // Envoie les modifications à l'API
  async function sauvegarder(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setFormError("");

    try {
      const corps = { firstname, lastname, capacity, email, phone, address, region, description };

      const reponse = await apiFetch("/api/volunteers/" + id, {
        method: "PUT",
        body: JSON.stringify(corps),
      });

      if (reponse.ok === false) {
        const erreurJson = await reponse.json();
        setFormError(erreurJson.error || "Erreur lors de la sauvegarde");
        setSaving(false);
        return;
      }

      const volunteerMisAJour = await reponse.json();
      setVolunteer(volunteerMisAJour);
      await refreshUser();
      setEditing(false);
    } catch (erreur) {
      console.error("Erreur lors de la sauvegarde :", erreur);
      setFormError("Erreur réseau, veuillez réessayer");
    }

    setSaving(false);
  }

  // Annule une demande d'accueil
  async function annulerDemande(animalId: number) {
    if (!id) return;
    setOfferAction(true);

    try {
      const reponse = await apiFetch(`/api/offers/${id}/${animalId}`, {
        method: "PATCH",
        body: JSON.stringify({ status: "annulee" }),
      });

      if (reponse.ok) {
        // Mettre à jour le statut localement sans recharger toutes les offres
        setOffers((prev) =>
          prev.map((o) =>
            o.animalId === animalId ? { ...o, status: "annulee" } : o
          )
        );
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
    }

    setOfferAction(false);
  }

  function estProprietaire(): boolean {
    if (connectedUser === null) return false;
    if (connectedUser.volunteer === null || connectedUser.volunteer === undefined) return false;
    return connectedUser.volunteer.id === Number(id);
  }

  // ── Affichages conditionnels ──

  if (loading) {
    return <p style={{ padding: "40px", textAlign: "center" }}>Chargement...</p>;
  }

  if (notFound || volunteer === null) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <p>Bénévole introuvable.</p>
        <Link to="/">← Retour à l'accueil</Link>
      </div>
    );
  }

  const initiales = volunteer.firstname[0].toUpperCase() + volunteer.lastname[0].toUpperCase();

  let sousTitreAnimaux = "";
  if (volunteer.animal.length === 0)      sousTitreAnimaux = "Aucun animal pour le moment";
  else if (volunteer.animal.length === 1) sousTitreAnimaux = "1 animal actuellement accueilli";
  else                                     sousTitreAnimaux = volunteer.animal.length + " animaux actuellement accueillis";

  // Compte des demandes actives (soumises)
  const demandesEnAttente = offers.filter((o) => o.status === "soumise").length;

  return (
    <div className="profil-page">
      <div className="profil-inner">

        {/* ===== CARTE PROFIL ===== */}
        <div className="profil-card">

          <div className="profil-card-header">
            <div className="profil-avatar">{initiales}</div>

            <div className="profil-card-header-info">
              <h1 className="profil-nom">{volunteer.firstname} {volunteer.lastname}</h1>
              <p className="profil-role">Bénévole · {getRegionLabel(volunteer.user.region)}</p>
            </div>

            {estProprietaire() && editing === false && (
              <div style={{ display: "flex", gap: "10px" }}>
                <button className="profil-btn-edit" onClick={ouvrirEdition}>
                  Modifier mon profil
                </button>
                <button className="profil-btn-logout" onClick={seDeconnecter}>
                  Se déconnecter
                </button>
              </div>
            )}
          </div>

          {/* ── MODE LECTURE ── */}
          {editing === false && (
            <div className="profil-card-body">

              <div className="profil-info-group">
                <span className="profil-info-label">Email</span>
                <span className="profil-info-value">{volunteer.user.email}</span>
              </div>

              <div className="profil-info-group">
                <span className="profil-info-label">Téléphone</span>
                <span className="profil-info-value">{volunteer.user.phone}</span>
              </div>

              <div className="profil-info-group">
                <span className="profil-info-label">Adresse</span>
                <span className="profil-info-value">{volunteer.user.address}</span>
              </div>

              <div className="profil-info-group">
                <span className="profil-info-label">Région</span>
                <span className="profil-info-value">{getRegionLabel(volunteer.user.region)}</span>
              </div>

              <div className="profil-info-group full">
                <span className="profil-info-label">Capacité d'accueil</span>
                <span className="profil-info-value">{volunteer.capacity}</span>
              </div>

              {volunteer.user.description && (
                <div className="profil-info-group full">
                  <span className="profil-info-label">Description</span>
                  <span className="profil-info-value">{volunteer.user.description}</span>
                </div>
              )}

            </div>
          )}

          {/* ── MODE ÉDITION ── */}
          {editing === true && (
            <form className="profil-form" onSubmit={sauvegarder}>

              {formError !== "" && (
                <p className="profil-form-error">{formError}</p>
              )}

              <div className="profil-form-group">
                <label className="profil-form-label">Prénom</label>
                <input className="profil-form-input" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
              </div>

              <div className="profil-form-group">
                <label className="profil-form-label">Nom</label>
                <input className="profil-form-input" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
              </div>

              <div className="profil-form-group">
                <label className="profil-form-label">Email</label>
                <input type="email" className="profil-form-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className="profil-form-group">
                <label className="profil-form-label">Téléphone</label>
                <input type="tel" className="profil-form-input" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>

              <div className="profil-form-group full">
                <label className="profil-form-label">Adresse</label>
                <input className="profil-form-input" value={address} onChange={(e) => setAddress(e.target.value)} required />
              </div>

              <div className="profil-form-group">
                <label className="profil-form-label">Région</label>
                <select className="profil-form-select" value={region} onChange={(e) => setRegion(e.target.value)}>
                  <option value="">-- Sélectionner --</option>
                  {REGIONS.map((r) => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>

              <div className="profil-form-group">
                <label className="profil-form-label">Capacité d'accueil</label>
                <input className="profil-form-input" value={capacity} onChange={(e) => setCapacity(e.target.value)} required />
              </div>

              <div className="profil-form-group full">
                <label className="profil-form-label">
                  Description <span style={{ fontWeight: 400, color: "#9ca3af" }}>(optionnel)</span>
                </label>
                <textarea
                  className="profil-form-textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Parlez-nous de vous, de votre logement..."
                />
              </div>

              <div className="profil-form-actions">
                <button type="button" className="profil-btn-cancel" onClick={annulerEdition}>
                  Annuler
                </button>
                <button type="submit" className="profil-btn-save" disabled={saving}>
                  {saving ? "Enregistrement..." : "Enregistrer"}
                </button>
              </div>

            </form>
          )}

        </div>

        {/* ===== SECTION ANIMAUX ACCUEILLIS ===== */}
        <div className="profil-animaux">
          <h2>Animaux accueillis</h2>
          <p className="profil-animaux-subtitle">{sousTitreAnimaux}</p>

          {volunteer.animal.length === 0 && (
            <div className="profil-animaux-empty">
              <span>🐾</span>
              Vous n'accueillez aucun animal pour le moment.
            </div>
          )}

          {volunteer.animal.length > 0 && (
            <div className="profil-animaux-grille">
              {volunteer.animal.map((animal) => {

                let photoUrl = "https://placehold.co/400x300?text=Pas+de+photo";
                if (animal.images.length > 0) photoUrl = animal.images[0].url;

                let raceOuEspece = animal.species;
                if (animal.breed !== null) raceOuEspece = animal.breed;

                let emoji = "🐱";
                if (animal.species === "Chien") emoji = "🐶";

                return (
                  <Link key={animal.id} to={"/animals/" + animal.id} className="profil-animal-card">
                    <div className="profil-animal-photo-wrapper">
                      <img src={photoUrl} alt={animal.name} className="profil-animal-photo" />
                      <span className={"profil-animal-statut " + getStatusClass(animal.status)}>
                        {getStatusLabel(animal.status)}
                      </span>
                    </div>
                    <div className="profil-animal-infos">
                      <p className="profil-animal-nom">{emoji} {animal.name}</p>
                      <p className="profil-animal-meta">{raceOuEspece} · {animal.gender}</p>
                      <p className="profil-animal-meta">{animal.association.name}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

        </div>

        {/* ===== SECTION DEMANDES D'ACCUEIL (visible uniquement pour le propriétaire) ===== */}
        {estProprietaire() && (
          <div className="profil-demandes">

            <div className="profil-demandes-header">
              <h2>Mes demandes d'accueil</h2>
              {demandesEnAttente > 0 && (
                <span className="profil-demandes-badge">
                  {demandesEnAttente} en attente
                </span>
              )}
            </div>

            <p className="profil-animaux-subtitle">
              {offersLoading
                ? "Chargement..."
                : offers.length === 0
                  ? "Aucune demande pour le moment"
                  : offers.length === 1
                    ? "1 demande au total"
                    : offers.length + " demandes au total"}
            </p>

            {!offersLoading && offers.length === 0 && (
              <div className="profil-animaux-empty">
                <span>📋</span>
                Vous n'avez pas encore fait de demande d'accueil.
                <br />
                <Link to="/animals" style={{ color: "#6366f1", fontWeight: 600, textDecoration: "none" }}>
                  Parcourir les animaux →
                </Link>
              </div>
            )}

            {!offersLoading && offers.length > 0 && (
              <div className="profil-offres-liste">
                {offers.map((offre) => {

                  const animal = offre.animal;
                  let photoUrl = "https://placehold.co/400x300?text=Pas+de+photo";
                  if (animal.images.length > 0) photoUrl = animal.images[0].url;

                  let emoji = "🐱";
                  if (animal.species === "Chien") emoji = "🐶";

                  let raceOuEspece = animal.species;
                  if (animal.breed !== null) raceOuEspece = animal.breed;

                  return (
                    <div key={offre.animalId} className="profil-offre-card">

                      {/* Photo de l'animal */}
                      <Link to={"/animals/" + animal.id} className="profil-offre-photo-link">
                        <img src={photoUrl} alt={animal.name} className="profil-offre-photo" />
                      </Link>

                      {/* Infos */}
                      <div className="profil-offre-infos">
                        <Link to={"/animals/" + animal.id} className="profil-offre-nom">
                          {emoji} {animal.name}
                        </Link>
                        <p className="profil-offre-meta">{raceOuEspece}</p>
                        <p className="profil-offre-meta">{animal.association.name}</p>
                      </div>

                      {/* Statut + action */}
                      <div className="profil-offre-droite">
                        <span className={"profil-offre-statut " + OFFER_STATUS_CLASS[offre.status]}>
                          {OFFER_STATUS_LABELS[offre.status]}
                        </span>

                        {offre.status === "soumise" && (
                          <button
                            className="profil-offre-btn-annuler"
                            onClick={() => annulerDemande(offre.animalId)}
                            disabled={offerAction}
                          >
                            Annuler
                          </button>
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
    </div>
  );
}

export default VolunteerPage;
