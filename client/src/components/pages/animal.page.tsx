import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../assets/styles/animal.detail.css";

// =============================================
// DONNÉES STATIQUES (à remplacer par l'API plus tard)
// =============================================

// Correspond à l'enum AnimalStatus de Prisma
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

// Calcule l'âge à partir d'une date de naissance ISO
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

// Données statiques — structure calquée sur le modèle Prisma
const ANIMAUX = [
  {
    id: 1,
    name: "Luna",
    species: "Chien",
    breed: "Labrador",
    gender: "Femelle",
    dateOfBirth: "2022-03-15",
    description:
      "Luna est une chienne douce et joueuse qui adore la compagnie des humains et des autres animaux. Elle a été recueillie après l'abandon de son propriétaire et cherche désormais une famille aimante. Elle est à jour de ses vaccins, stérilisée et pucée. Luna s'entend très bien avec les enfants et n'a pas peur des chats. Elle aime les longues balades et les séances de jeux dans le jardin.",
    status: "a_placer" as AnimalStatus,
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=200&h=150&fit=crop" },
      { id: 2, url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=150&fit=crop" },
      { id: 3, url: "https://images.unsplash.com/photo-1534361960057-19f4434c8f5f?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1534361960057-19f4434c8f5f?w=200&h=150&fit=crop" },
    ],
    association: { id: 1, name: "SPA de Lyon", region: "Auvergne_Rhone_Alpes", photo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=100&h=100&fit=crop" },
  },
  {
    id: 2,
    name: "Milo",
    species: "Chat",
    breed: "Européen",
    gender: "Mâle",
    dateOfBirth: "2020-07-20",
    description:
      "Milo est un chat câlin et discret qui cherche une famille calme. Il est parfait pour un appartement et s'adapte facilement à un nouveau foyer. Il apprécie les longues siestes au soleil et les câlins le soir. Milo est castré, vacciné et identifié. Il préfère être le seul animal de la maison.",
    status: "a_placer" as AnimalStatus,
    images: [
      { id: 4, url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=150&fit=crop" },
      { id: 5, url: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=200&h=150&fit=crop" },
    ],
    association: { id: 2, name: "Refuge du Soleil", region: "Provence_Alpes_Cote_Azur", photo: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=100&h=100&fit=crop" },
  },
  {
    id: 3,
    name: "Rocky",
    species: "Chien",
    breed: "Berger Allemand",
    gender: "Mâle",
    dateOfBirth: "2019-11-05",
    description:
      "Rocky est un chien énergique et intelligent. Il a besoin d'exercice quotidien et d'un espace extérieur. Idéal pour une famille active avec un jardin. Il est bien socialisé avec les humains mais préfère être le seul animal. Rocky est à jour de ses soins vétérinaires.",
    status: "placement_en_cours" as AnimalStatus,
    images: [
      { id: 6, url: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=200&h=150&fit=crop" },
    ],
    association: { id: 3, name: "SPA de Paris", region: "Ile_de_France", photo: "https://images.unsplash.com/photo-1534361960057-19f4434c8f5f?w=100&h=100&fit=crop" },
  },
  {
    id: 4,
    name: "Bella",
    species: "Chat",
    breed: "Persan",
    gender: "Femelle",
    dateOfBirth: "2021-04-10",
    description:
      "Bella est une chatte élégante et indépendante. Elle prend du temps pour apprivoiser les nouvelles personnes mais devient très affectueuse une fois en confiance. Elle est stérilisée et vaccinée. Préfère un foyer sans autres animaux et sans enfants en bas âge.",
    status: "a_placer" as AnimalStatus,
    images: [
      { id: 7, url: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=200&h=150&fit=crop" },
      { id: 8, url: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=200&h=150&fit=crop" },
    ],
    association: { id: 2, name: "Refuge du Soleil", region: "Provence_Alpes_Cote_Azur", photo: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=100&h=100&fit=crop" },
  },
  {
    id: 5,
    name: "Max",
    species: "Chien",
    breed: "Beagle",
    gender: "Mâle",
    dateOfBirth: "2023-01-20",
    description:
      "Max est un jeune chien plein d'énergie et de curiosité. Il est encore en apprentissage de la propreté et des règles de vie. Il adore jouer et explorer. Il a besoin d'une famille patiente et disponible pour l'accompagner dans son éducation.",
    status: "a_placer" as AnimalStatus,
    images: [
      { id: 9, url: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=200&h=150&fit=crop" },
    ],
    association: { id: 1, name: "SPA de Lyon", region: "Auvergne_Rhone_Alpes", photo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=100&h=100&fit=crop" },
  },
  {
    id: 6,
    name: "Nala",
    species: "Chat",
    breed: "Maine Coon",
    gender: "Femelle",
    dateOfBirth: "2018-09-12",
    description:
      "Nala est une grande chatte majestueuse et très affectueuse. Elle est très à l'aise avec les humains et adore être le centre de l'attention. Elle cherche une famille qui lui accordera du temps et de l'affection. Stérilisée, vaccinée, identifiée.",
    status: "a_placer" as AnimalStatus,
    images: [
      { id: 10, url: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=200&h=150&fit=crop" },
    ],
    association: { id: 4, name: "SPA de Bordeaux", region: "Nouvelle_Aquitaine", photo: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=100&h=100&fit=crop" },
  },
];

// =============================================
// PROPS
// =============================================
type Props = {
  isLogged: boolean;
  connectedUser: { volunteer?: { id: number } } | null;
};

function AnimalDetailPage({ isLogged, connectedUser }: Props) {
  const { id } = useParams();
  const animal = ANIMAUX.find((a) => a.id === Number(id));

  // Index de la photo affichée en grand
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!animal) {
    return (
      <div className="animal-not-found">
        <p>Animal introuvable.</p>
        <Link to="/animals">← Retour aux animaux</Link>
      </div>
    );
  }

  const isVolunteer = isLogged && connectedUser?.volunteer != null;
  // On peut faire une demande uniquement si l'animal est "à placer"
  const peutFaireDemande = animal.status === "a_placer";
  const age = calculerAge(animal.dateOfBirth);

  return (
    <div className="animal-detail-page">
    <div className="animal-detail-card">

      {/* ===== GALERIE ===== */}
      <div className="animal-gallery">
        <img
          src={animal.images[photoIndex].url}
          alt={animal.name}
          className="animal-gallery-main"
        />
        <span className={`animal-gallery-statut ${STATUS_CLASS[animal.status]}`}>
          {STATUS_LABELS[animal.status]}
        </span>

        {/* Miniatures — affichées uniquement si plusieurs photos */}
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

        {/* Nom */}
        <div className="animal-detail-header">
          <h1 className="animal-detail-nom">{animal.name}</h1>
          <span className="animal-detail-espece-icon">
            {animal.species === "Chien" ? "🐶" : "🐱"}
          </span>
        </div>

        {/* Tags : espèce, race, sexe, âge */}
        <div className="animal-detail-tags">
          <span className="animal-tag">{animal.species}</span>
          {animal.breed && <span className="animal-tag">{animal.breed}</span>}
          <span className="animal-tag">{animal.gender}</span>
          <span className="animal-tag">{age}</span>
        </div>

        {/* Description */}
        <div className="animal-detail-section">
          <h2>À propos</h2>
          <p className="animal-detail-description">{animal.description}</p>
        </div>

        {/* Association */}
        <div className="animal-detail-section">
          <h2>Association</h2>
          <Link to={`/associations/${animal.association.id}`} className="animal-asso-card">
            <img
              src={animal.association.photo}
              alt={animal.association.name}
              className="animal-asso-logo"
            />
            <div className="animal-asso-info">
              <p className="animal-asso-nom">{animal.association.name}</p>
              <p className="animal-asso-region">
                📍 {REGION_LABELS[animal.association.region] ?? animal.association.region}
              </p>
            </div>
            <span className="animal-asso-arrow">›</span>
          </Link>
        </div>

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
