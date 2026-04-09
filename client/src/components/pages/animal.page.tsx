import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../../assets/styles/animal.detail.css";

type AnimalStatus = "a_placer" | "placement_en_cours" | "place" | "adopte";

const STATUS_LABELS: Record<AnimalStatus, string> = {
  a_placer: "À placer",
  placement_en_cours: "Placement en cours",
  place: "Placé",
  adopte: "Adopté",
};

const STATUS_CLASS: Record<AnimalStatus, string> = {
  a_placer: "statut-a-placer",
  placement_en_cours: "statut-placement-en-cours",
  place: "statut-place",
  adopte: "statut-adopte",
};

const REGION_LABELS: Record<string, string> = {
  Auvergne_Rhone_Alpes: "Auvergne-Rhône-Alpes",
  Provence_Alpes_Cote_Azur: "Provence-Alpes-Côte d'Azur",
  Ile_de_France: "Île-de-France",
  Nouvelle_Aquitaine: "Nouvelle-Aquitaine",
  Occitanie: "Occitanie",
  Pays_de_la_Loire: "Pays de la Loire",
};

function calculerAge(dateNaissance: string): string {
  const naissance = new Date(dateNaissance);
  const maintenant = new Date();
  const mois =
    (maintenant.getFullYear() - naissance.getFullYear()) * 12 +
    (maintenant.getMonth() - naissance.getMonth());
  if (mois < 12) return `${mois} mois`;
  const ans = Math.floor(mois / 12);
  return `${ans} an${ans > 1 ? "s" : ""}`;
}

interface Image {
  id: number;
  url: string;
  thumb: string;
}

interface Animal {
  id: number;
  name: string;
  species: string;
  breed: string | null;
  gender: string;
  dateOfBirth: string | null;
  description: string;
  status: AnimalStatus;
  images: Image[];
  association: {
    id: number;
    name: string;
    user: {
      region: string;
    };
  };
}

type Props = {
  isLogged: boolean;
  connectedUser: { volunteer?: { id: number } } | null;
};

function AnimalDetailPage({ isLogged, connectedUser }: Props) {
  const { id } = useParams();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3003/api/animals/${id}`)
      .then((res) => {
        if (res.status === 404) { setNotFound(true); setLoading(false); return null; }
        return res.json();
      })
      .then((json) => {
        if (!json) return;
        setAnimal(json.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;

  if (notFound || !animal) {
    return (
      <div className="animal-not-found">
        <p>Animal introuvable.</p>
        <Link to="/animals">← Retour aux animaux</Link>
      </div>
    );
  }

  const isVolunteer = isLogged && connectedUser?.volunteer != null;
  const peutFaireDemande = animal.status === "a_placer";
  const age = animal.dateOfBirth ? calculerAge(animal.dateOfBirth) : null;

  return (
    <div className="animal-detail-page">
    <div className="animal-detail-card">

      {/* ===== GALERIE ===== */}
      <div className="animal-gallery">
        <img
          src={animal.images[photoIndex]?.url ?? "https://placehold.co/800x600?text=Pas+de+photo"}
          alt={animal.name}
          className="animal-gallery-main"
        />
        <span className={`animal-gallery-statut ${STATUS_CLASS[animal.status]}`}>
          {STATUS_LABELS[animal.status]}
        </span>

        {animal.images.length > 1 && (
          <div className="animal-gallery-thumbs">
            {animal.images.map((img, index) => (
              <img
                key={img.id}
                src={img.thumb}
                alt=""
                className={`animal-gallery-thumb ${index === photoIndex ? "active" : ""}`}
                onClick={() => setPhotoIndex(index)}
              />
            ))}
          </div>
        )}
      </div>

      {/* ===== INFOS ===== */}
      <div className="animal-detail-body">

        <div className="animal-detail-header">
          <h1 className="animal-detail-nom">{animal.name}</h1>
          <span className="animal-detail-espece-icon">
            {animal.species === "Chien" ? "🐶" : "🐱"}
          </span>
        </div>

        <div className="animal-detail-tags">
          <span className="animal-tag">{animal.species}</span>
          {animal.breed && <span className="animal-tag">{animal.breed}</span>}
          <span className="animal-tag">{animal.gender}</span>
          {age && <span className="animal-tag">{age}</span>}
        </div>

        <div className="animal-detail-section">
          <h2>À propos</h2>
          <p className="animal-detail-description">{animal.description}</p>
        </div>

        {animal.association && (
          <div className="animal-detail-section">
            <h2>Association</h2>
            <Link to={`/associations/${animal.association.id}`} className="animal-asso-card">
              <div className="animal-asso-info">
                <p className="animal-asso-nom">{animal.association.name}</p>
                {animal.association.user && (
                  <p className="animal-asso-region">
                    📍 {REGION_LABELS[animal.association.user.region] ?? animal.association.user.region}
                  </p>
                )}
              </div>
              <span className="animal-asso-arrow">›</span>
            </Link>
          </div>
        )}

      </div>

      {/* ===== BOUTON DEMANDE ===== */}
      <div className="animal-detail-demande">
        {!peutFaireDemande ? (
          <div className="demande-unavailable">
            Cet animal n'est plus disponible pour une demande d'accueil.
          </div>
        ) : isVolunteer ? (
          <button className="btn-demande-full">
            Faire une demande d'accueil
          </button>
        ) : (
          <div className="demande-locked-full">
            🔒 <span>
              <Link to="/auth">Connectez-vous</Link> en tant que bénévole pour faire une demande
            </span>
          </div>
        )}
      </div>

    </div>
    </div>
  );
}

export default AnimalDetailPage;
