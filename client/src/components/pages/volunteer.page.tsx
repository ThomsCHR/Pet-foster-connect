import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { apiFetch } from "../../lib/api";
import { useAuth } from "../../contexts/AuthContext";
import "../../assets/styles/profil.css";

// Liste des régions pour le formulaire et l'affichage
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

// Convertit la valeur de la région (ex: "Ile_de_France") en texte lisible (ex: "Île-de-France")
function getRegionLabel(regionValue: string | null): string {
  if (regionValue === null) {
    return "—";
  }

  for (let i = 0; i < REGIONS.length; i++) {
    if (REGIONS[i].value === regionValue) {
      return REGIONS[i].label;
    }
  }

  return regionValue; // si on ne trouve pas, on affiche la valeur brute
}

// Retourne le libellé du statut de l'animal
function getStatusLabel(status: string): string {
  if (status === "a_placer")          return "À placer";
  if (status === "placement_en_cours") return "Placement en cours";
  if (status === "place")             return "Placé";
  if (status === "adopte")            return "Adopté";
  return status;
}

// Retourne la classe CSS du badge de statut
function getStatusClass(status: string): string {
  if (status === "a_placer")          return "statut-a-placer";
  if (status === "placement_en_cours") return "statut-placement";
  if (status === "place")             return "statut-place";
  if (status === "adopte")            return "statut-adopte";
  return "";
}

// Types TypeScript — décrivent la forme des données reçues de l'API
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

function VolunteerPage() {
  const { id } = useParams();
  const { connectedUser, refreshUser } = useAuth();

  // Données chargées depuis l'API
  const [volunteer, setVolunteer]   = useState<VolunteerData | null>(null);
  const [loading, setLoading]       = useState(true);
  const [notFound, setNotFound]     = useState(false);

  // Gestion du mode édition
  const [editing, setEditing]       = useState(false);
  const [saving, setSaving]         = useState(false);
  const [formError, setFormError]   = useState("");

  // Champs du formulaire d'édition
  const [firstname, setFirstname]     = useState("");
  const [lastname, setLastname]       = useState("");
  const [capacity, setCapacity]       = useState("");
  const [email, setEmail]             = useState("");
  const [phone, setPhone]             = useState("");
  const [address, setAddress]         = useState("");
  const [region, setRegion]           = useState("");
  const [description, setDescription] = useState("");

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

  // Ouvre le formulaire en pré-remplissant les champs avec les données actuelles
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

  // Ferme le formulaire sans sauvegarder
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
      const corps = {
        firstname: firstname,
        lastname: lastname,
        capacity: capacity,
        email: email,
        phone: phone,
        address: address,
        region: region,
        description: description,
      };

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

      // Met à jour les infos dans la navbar
      await refreshUser();

      setEditing(false);

    } catch (erreur) {
      console.error("Erreur lors de la sauvegarde :", erreur);
      setFormError("Erreur réseau, veuillez réessayer");
    }

    setSaving(false);
  }

  // Vérifie si la personne connectée est bien le propriétaire de ce profil
  function estProprietaire(): boolean {
    if (connectedUser === null) return false;
    if (connectedUser.volunteer === null || connectedUser.volunteer === undefined) return false;
    if (connectedUser.volunteer.id === Number(id)) return true;
    return false;
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

  // Initiales affichées dans l'avatar
  const initiales = volunteer.firstname[0].toUpperCase() + volunteer.lastname[0].toUpperCase();

  // Texte du sous-titre de la section animaux
  let sousTitreAnimaux = "";
  if (volunteer.animal.length === 0) {
    sousTitreAnimaux = "Aucun animal pour le moment";
  } else if (volunteer.animal.length === 1) {
    sousTitreAnimaux = "1 animal actuellement accueilli";
  } else {
    sousTitreAnimaux = volunteer.animal.length + " animaux actuellement accueillis";
  }

  return (
    <div className="profil-page">
      <div className="profil-inner">

        {/* ===== CARTE PROFIL ===== */}
        <div className="profil-card">

          {/* En-tête avec avatar et nom */}
          <div className="profil-card-header">
            <div className="profil-avatar">{initiales}</div>

            <div className="profil-card-header-info">
              <h1 className="profil-nom">{volunteer.firstname} {volunteer.lastname}</h1>
              <p className="profil-role">Bénévole · {getRegionLabel(volunteer.user.region)}</p>
            </div>

            {/* Le bouton "Modifier" n'est visible que pour le propriétaire */}
            {estProprietaire() && editing === false && (
              <button className="profil-btn-edit" onClick={ouvrirEdition}>
                Modifier mon profil
              </button>
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
                <input
                  className="profil-form-input"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>

              <div className="profil-form-group">
                <label className="profil-form-label">Nom</label>
                <input
                  className="profil-form-input"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>

              <div className="profil-form-group">
                <label className="profil-form-label">Email</label>
                <input
                  type="email"
                  className="profil-form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="profil-form-group">
                <label className="profil-form-label">Téléphone</label>
                <input
                  type="tel"
                  className="profil-form-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="profil-form-group full">
                <label className="profil-form-label">Adresse</label>
                <input
                  className="profil-form-input"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div className="profil-form-group">
                <label className="profil-form-label">Région</label>
                <select
                  className="profil-form-select"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <option value="">-- Sélectionner --</option>
                  {REGIONS.map((r) => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>

              <div className="profil-form-group">
                <label className="profil-form-label">Capacité d'accueil</label>
                <input
                  className="profil-form-input"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  required
                />
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

                // Photo de l'animal : on prend la première, sinon un placeholder
                let photoUrl = "https://placehold.co/400x300?text=Pas+de+photo";
                if (animal.images.length > 0) {
                  photoUrl = animal.images[0].url;
                }

                // Race à afficher : la race si elle existe, sinon l'espèce
                let raceOuEspece = animal.species;
                if (animal.breed !== null) {
                  raceOuEspece = animal.breed;
                }

                // Emoji selon l'espèce
                let emoji = "🐱";
                if (animal.species === "Chien") {
                  emoji = "🐶";
                }

                return (
                  <Link key={animal.id} to={"/animals/" + animal.id} className="profil-animal-card">

                    <div className="profil-animal-photo-wrapper">
                      <img
                        src={photoUrl}
                        alt={animal.name}
                        className="profil-animal-photo"
                      />
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

      </div>
    </div>
  );
}

export default VolunteerPage;
