import { useParams, Link } from "react-router-dom";
import "../../assets/styles/association.detail.css";

// =============================================
// DONNÉES STATIQUES (à remplacer par l'API plus tard)
// =============================================

const REGION_LABELS: Record<string, string> = {
  Auvergne_Rhone_Alpes: "Auvergne-Rhône-Alpes",
  Bourgogne_Franche_Comte: "Bourgogne-Franche-Comté",
  Bretagne: "Bretagne",
  Centre_Val_de_Loire: "Centre-Val de Loire",
  Corse: "Corse",
  Grand_Est: "Grand Est",
  Hauts_de_France: "Hauts-de-France",
  Ile_de_France: "Île-de-France",
  Normandie: "Normandie",
  Nouvelle_Aquitaine: "Nouvelle-Aquitaine",
  Occitanie: "Occitanie",
  Pays_de_la_Loire: "Pays de la Loire",
  Provence_Alpes_Cote_Azur: "Provence-Alpes-Côte d'Azur",
};

const ASSOCIATIONS = [
  {
    id: 1,
    nom: "SPA de Lyon",
    region: "Auvergne_Rhone_Alpes",
    description: "La SPA de Lyon accueille et soigne les animaux abandonnés depuis plus de 50 ans. Nous travaillons avec un réseau de familles d'accueil bénévoles pour offrir le meilleur confort possible aux animaux en attente d'adoption.",
    photo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1400&h=400&fit=crop",
    email: "contact@spa-lyon.fr",
    phone: "04 72 00 00 00",
  },
  {
    id: 2,
    nom: "Refuge du Soleil",
    region: "Provence_Alpes_Cote_Azur",
    description: "Le Refuge du Soleil est une association à but non lucratif dédiée au bien-être animal dans la région marseillaise. Nous cherchons des familles d'accueil temporaires pour nos pensionnaires.",
    photo: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1400&h=400&fit=crop",
    email: "refuge.soleil@gmail.com",
    phone: "04 91 00 00 00",
  },
  {
    id: 3,
    nom: "SPA de Paris",
    region: "Ile_de_France",
    description: "L'une des plus grandes associations de protection animale en France. Nous gérons plusieurs refuges en Île-de-France et recherchons constamment des bénévoles et des familles d'accueil.",
    photo: "https://images.unsplash.com/photo-1534361960057-19f4434c8f5f?w=1400&h=400&fit=crop",
    email: "info@spa-paris.org",
    phone: "01 43 00 00 00",
  },
  {
    id: 4,
    nom: "SPA de Bordeaux",
    region: "Nouvelle_Aquitaine",
    description: "Association locale engagée pour la cause animale en Gironde. Nous proposons des programmes de famille d'accueil pour les animaux convalescents, les chiots et chatons trop jeunes, et les animaux stressés en refuge.",
    photo: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=1400&h=400&fit=crop",
    email: "spa.bordeaux@wanadoo.fr",
    phone: "05 56 00 00 00",
  },
  {
    id: 5,
    nom: "Animaux en Détresse",
    region: "Occitanie",
    description: "Association fondée en 2005, Animaux en Détresse intervient sur toute la région toulousaine pour recueillir les animaux abandonnés ou maltraités. Notre priorité : trouver des familles d'accueil bienveillantes.",
    photo: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1400&h=400&fit=crop",
    email: "animaux.detresse31@gmail.com",
    phone: "05 61 00 00 00",
  },
  {
    id: 6,
    nom: "Patte Douce",
    region: "Pays_de_la_Loire",
    description: "Patte Douce est une petite association familiale qui place les animaux en famille d'accueil plutôt qu'en cage. Chaque animal est suivi individuellement jusqu'à son adoption définitive.",
    photo: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1400&h=400&fit=crop",
    email: "patte.douce44@outlook.fr",
    phone: "02 40 00 00 00",
  },
];

const ANIMAUX: Record<number, Array<{
  id: number;
  nom: string;
  espece: string;
  race: string;
  age: string;
  sexe: string;
  description: string;
  photo: string;
  statut: string;
}>> = {
  1: [
    {
      id: 101,
      nom: "Luna",
      espece: "Chien",
      race: "Labrador",
      age: "2 ans",
      sexe: "Femelle",
      description: "Luna est une chienne douce et joueuse. Elle adore les enfants et s'entend bien avec les autres animaux.",
      photo: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
      statut: "Disponible",
    },
    {
      id: 102,
      nom: "Max",
      espece: "Chien",
      race: "Beagle",
      age: "1 an",
      sexe: "Mâle",
      description: "Max est un jeune chien plein de vie. Il est encore en apprentissage mais très attachant.",
      photo: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400&h=300&fit=crop",
      statut: "Disponible",
    },
    {
      id: 103,
      nom: "Sasha",
      espece: "Chat",
      race: "Siamois",
      age: "3 ans",
      sexe: "Femelle",
      description: "Sasha est curieuse et affectueuse. Elle s'adapte bien aux appartements calmes.",
      photo: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=400&h=300&fit=crop",
      statut: "En famille d'accueil",
    },
  ],
  2: [
    {
      id: 201,
      nom: "Milo",
      espece: "Chat",
      race: "Européen",
      age: "4 ans",
      sexe: "Mâle",
      description: "Milo est un chat câlin qui cherche une famille calme. Il est parfait pour un appartement.",
      photo: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
      statut: "Disponible",
    },
    {
      id: 202,
      nom: "Bella",
      espece: "Chat",
      race: "Persan",
      age: "3 ans",
      sexe: "Femelle",
      description: "Bella est une chatte indépendante et élégante. Elle préfère les foyers sans autres animaux.",
      photo: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=400&h=300&fit=crop",
      statut: "Disponible",
    },
  ],
  3: [
    {
      id: 301,
      nom: "Rocky",
      espece: "Chien",
      race: "Berger Allemand",
      age: "5 ans",
      sexe: "Mâle",
      description: "Rocky est un chien énergique qui a besoin d'exercice. Idéal pour une famille active avec un jardin.",
      photo: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=300&fit=crop",
      statut: "En famille d'accueil",
    },
    {
      id: 302,
      nom: "Cleo",
      espece: "Chat",
      race: "Maine Coon",
      age: "2 ans",
      sexe: "Femelle",
      description: "Cleo est une grande chatte très sociable, elle adore jouer et être entourée.",
      photo: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop",
      statut: "Disponible",
    },
    {
      id: 303,
      nom: "Bruno",
      espece: "Chien",
      race: "Bouledogue",
      age: "4 ans",
      sexe: "Mâle",
      description: "Bruno est un chien calme et affectueux, parfait pour la vie en appartement.",
      photo: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=300&fit=crop",
      statut: "Disponible",
    },
  ],
  4: [
    {
      id: 401,
      nom: "Noisette",
      espece: "Chat",
      race: "Roux",
      age: "6 mois",
      sexe: "Femelle",
      description: "Petit chaton énergique, elle a besoin d'une famille patiente pour sa socialisation.",
      photo: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop",
      statut: "Disponible",
    },
  ],
  5: [
    {
      id: 501,
      nom: "Django",
      espece: "Chien",
      race: "Croisé",
      age: "3 ans",
      sexe: "Mâle",
      description: "Django est un chien doux et joueur, retrouvé errant. Il cherche une famille aimante.",
      photo: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
      statut: "Disponible",
    },
    {
      id: 502,
      nom: "Lola",
      espece: "Chien",
      race: "Teckel",
      age: "7 ans",
      sexe: "Femelle",
      description: "Lola est une petite chienne senior qui cherche un foyer paisible pour ses vieux jours.",
      photo: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400&h=300&fit=crop",
      statut: "Disponible",
    },
  ],
  6: [
    {
      id: 601,
      nom: "Nala",
      espece: "Chat",
      race: "Maine Coon",
      age: "6 ans",
      sexe: "Femelle",
      description: "Nala est une grande chatte majestueuse, très affectueuse avec ses humains de confiance.",
      photo: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop",
      statut: "Disponible",
    },
  ],
};

// =============================================
// PROPS (à brancher sur le vrai contexte auth plus tard)
// =============================================
type Props = {
  isLogged: boolean;
  connectedUser: { volunteer?: { id: number } } | null;
};

function AssociationDetailPage({ isLogged, connectedUser }: Props) {
  const { id } = useParams();
  const association = ASSOCIATIONS.find((a) => a.id === Number(id));

  // Association non trouvée
  if (!association) {
    return (
      <div className="detail-not-found">
        <p>Association introuvable.</p>
        <Link to="/associations">← Retour aux associations</Link>
      </div>
    );
  }

  const animaux = ANIMAUX[association.id] ?? [];
  // L'utilisateur connecté est-il un bénévole ?
  const isVolunteer = isLogged && connectedUser?.volunteer != null;

  return (
    <div className="detail-page">

      {/* ===== EN-TÊTE ===== */}
      <div
        className="detail-header"
        style={{ backgroundImage: `url(${association.photo})` } as React.CSSProperties & { backgroundImage: string }}
      >
        <h1>{association.nom}</h1>
        <span className="detail-region-badge">
          📍 {REGION_LABELS[association.region]}
        </span>
      </div>

      {/* ===== INFOS ===== */}
      <div className="detail-infos">
        <div className="detail-infos-inner">
          <p className="detail-description">{association.description}</p>
          <div className="detail-meta">
            <span className="detail-meta-item">✉️ {association.email}</span>
            <span className="detail-meta-item">📞 {association.phone}</span>
            <span className="detail-meta-item">🐾 {animaux.length} animaux</span>
          </div>
        </div>
      </div>

      {/* ===== ANIMAUX ===== */}
      <div className="detail-animaux">
        <h2>Nos animaux</h2>
        <p className="detail-animaux-subtitle">
          {animaux.length} animal{animaux.length > 1 ? "ux" : ""} en attente d'une famille d'accueil
        </p>

        {animaux.length === 0 && (
          <p style={{ color: "#aaa", fontSize: "14px" }}>Aucun animal pour le moment.</p>
        )}

        <div className="detail-animaux-grille">
          {animaux.map((animal) => (
            <div key={animal.id} className="detail-animal-card">

              {/* Photo */}
              <div className="detail-animal-photo-wrapper">
                <img src={animal.photo} alt={animal.nom} className="detail-animal-photo" />
                <span className={`detail-animal-statut ${animal.statut === "Disponible" ? "statut-dispo" : "statut-accueil"}`}>
                  {animal.statut}
                </span>
              </div>

              {/* Infos */}
              <div className="detail-animal-infos">
                <div className="detail-animal-top">
                  <h3 className="detail-animal-nom">{animal.nom}</h3>
                  <span className="detail-animal-espece">{animal.espece === "Chien" ? "🐶" : "🐱"}</span>
                </div>
                <p className="detail-animal-race">{animal.race} · {animal.age} · {animal.sexe}</p>
                <p className="detail-animal-description">{animal.description}</p>

                {/* Bouton demande — bénévole connecté uniquement */}
                {isVolunteer ? (
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
          ))}
        </div>
      </div>

    </div>
  );
}

export default AssociationDetailPage;
