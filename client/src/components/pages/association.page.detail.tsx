import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apiFetch } from "../../lib/api";
import { useAuth } from "../../contexts/AuthContext";
import "../../assets/styles/association.detail.css";

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

// Props gardées pour compatibilité avec App.tsx — on utilise useAuth() en interne
type Props = {
  isLogged: boolean;
  connectedUser: unknown;
};

function AssociationDetailPage(_props: Props) {
  const { id } = useParams();
  const { connectedUser } = useAuth();

  const [association, setAssociation] = useState<Association | null>(null);
  const [loading, setLoading]         = useState(true);
  const [notFound, setNotFound]       = useState(false);

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

  // Un bénévole connecté peut faire une demande
  function estBenevole(): boolean {
    if (connectedUser === null) return false;
    if (connectedUser.volunteer === null || connectedUser.volunteer === undefined) return false;
    return true;
  }

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

  return (
    <div className="detail-page">

      {/* ===== EN-TÊTE ===== */}
      <div className="detail-header detail-header-placeholder">
        <h1>{association.name}</h1>
        <span className="detail-region-badge">
          📍 {getRegionLabel(association.user.region)}
        </span>
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
            if (animal.images.length > 0) {
              photoUrl = animal.images[0].url;
            }

            let emoji = "🐱";
            if (animal.species === "Chien") {
              emoji = "🐶";
            }

            let raceOuEspece = animal.species;
            if (animal.breed !== null) {
              raceOuEspece = animal.breed;
            }

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

                  {estBenevole() ? (
                    <button className="btn-demande">
                      Faire une demande d'accueil
                    </button>
                  ) : (
                    <div className="demande-locked">
                      🔒 <span>
                        <Link to="/auth">Connectez-vous</Link> en tant que bénévole pour faire une demande
                      </span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

export default AssociationDetailPage;
