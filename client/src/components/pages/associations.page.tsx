import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/associations.css";

// =============================================
// DONNÉES STATIQUES (à remplacer par l'API plus tard)
// =============================================
// Labels lisibles pour l'enum Region de Prisma
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
    photo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=300&fit=crop",
    animauxDisponibles: 24,
    famillesAccueil: 12,
    email: "contact@spa-lyon.fr",
  },
  {
    id: 2,
    nom: "Refuge du Soleil",
    region: "Provence_Alpes_Cote_Azur",
    description: "Le Refuge du Soleil est une association à but non lucratif dédiée au bien-être animal dans la région marseillaise. Nous cherchons des familles d'accueil temporaires pour nos pensionnaires.",
    photo: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=300&fit=crop",
    animauxDisponibles: 18,
    famillesAccueil: 8,
    email: "refuge.soleil@gmail.com",
  },
  {
    id: 3,
    nom: "SPA de Paris",
    region: "Ile_de_France",
    description: "L'une des plus grandes associations de protection animale en France. Nous gérons plusieurs refuges en Île-de-France et recherchons constamment des bénévoles et des familles d'accueil.",
    photo: "https://images.unsplash.com/photo-1534361960057-19f4434c8f5f?w=600&h=300&fit=crop",
    animauxDisponibles: 47,
    famillesAccueil: 31,
    email: "info@spa-paris.org",
  },
  {
    id: 4,
    nom: "SPA de Bordeaux",
    region: "Nouvelle_Aquitaine",
    description: "Association locale engagée pour la cause animale en Gironde. Nous proposons des programmes de famille d'accueil pour les animaux convalescents, les chiots et chatons trop jeunes, et les animaux stressés en refuge.",
    photo: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&h=300&fit=crop",
    animauxDisponibles: 15,
    famillesAccueil: 7,
    email: "spa.bordeaux@wanadoo.fr",
  },
  {
    id: 5,
    nom: "Animaux en Détresse",
    region: "Occitanie",
    description: "Association fondée en 2005, Animaux en Détresse intervient sur toute la région toulousaine pour recueillir les animaux abandonnés ou maltraités. Notre priorité : trouver des familles d'accueil bienveillantes.",
    photo: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=300&fit=crop",
    animauxDisponibles: 11,
    famillesAccueil: 5,
    email: "animaux.detresse31@gmail.com",
  },
  {
    id: 6,
    nom: "Patte Douce",
    region: "Pays_de_la_Loire",
    description: "Patte Douce est une petite association familiale qui place les animaux en famille d'accueil plutôt qu'en cage. Chaque animal est suivi individuellement jusqu'à son adoption définitive.",
    photo: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=300&fit=crop",
    animauxDisponibles: 9,
    famillesAccueil: 9,
    email: "patte.douce44@outlook.fr",
  },
];

// Les filtres : valeurs de l'enum + "Toutes"
const FILTRES_REGION = ["Toutes", ...Object.keys(REGION_LABELS)];

function AssociationsPage() {
  // État des filtres sélectionnés
  const [recherche, setRecherche] = useState("");
  const [filtreRegion, setFiltreRegion] = useState("Toutes");

  // On filtre la liste selon les critères choisis
  const associationsFiltrees = ASSOCIATIONS.filter((asso) => {
    const matchRecherche = asso.nom.toLowerCase().includes(recherche.toLowerCase());
    const matchRegion = filtreRegion === "Toutes" || asso.region === filtreRegion;
    return matchRecherche && matchRegion;
  });

  return (
    <div className="associations-page">

      {/* ===== EN-TÊTE ===== */}
      <div className="associations-header">
        <h1>Les associations</h1>
        <p>{ASSOCIATIONS.length} associations partenaires à travers la France</p>
      </div>

      {/* ===== BARRE DE RECHERCHE + FILTRES ===== */}
      <div className="associations-filtres">

        {/* Recherche par nom */}
        <input
          type="text"
          placeholder="Rechercher par nom..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          className="recherche-input"
        />

        {/* Filtre par région */}
        <div className="filtres-groupe">
          {FILTRES_REGION.map((filtre) => (
            <button
              key={filtre}
              className={`filtre-btn ${filtreRegion === filtre ? "actif" : ""}`}
              onClick={() => setFiltreRegion(filtre)}
            >
              {filtre === "Toutes" ? "Toutes" : REGION_LABELS[filtre]}
            </button>
          ))}
        </div>

      </div>

      {/* ===== RÉSULTATS ===== */}
      <div className="associations-container">

        {/* Message si aucun résultat */}
        {associationsFiltrees.length === 0 && (
          <div className="aucun-resultat">
            <div className="aucun-resultat-icon">🔍</div>
            <p>Aucune association ne correspond à ta recherche.</p>
          </div>
        )}

        {/* Grille de cartes */}
        <div className="associations-grille">
          {associationsFiltrees.map((asso) => (
            <div key={asso.id} className="asso-card">

              {/* Photo */}
              <div className="asso-photo-wrapper">
                <img src={asso.photo} alt={asso.nom} className="asso-photo" />
                {/* Badge région */}
                <span className="asso-dept">{REGION_LABELS[asso.region]}</span>
              </div>

              {/* Infos */}
              <div className="asso-infos">
                <h2 className="asso-nom">{asso.nom}</h2>
                <p className="asso-ville">📍 {REGION_LABELS[asso.region]}</p>
                <p className="asso-description">{asso.description}</p>

                {/* Stats */}
                <div className="asso-stats">
                  <span className="asso-stat">🐾 {asso.animauxDisponibles} animaux</span>
                  <span className="asso-stat">🏠 {asso.famillesAccueil} familles</span>
                </div>

                <div className="asso-footer">
                  <span className="asso-contact">✉️ {asso.email}</span>
                  <Link to={`/associations/${asso.id}`} className="asso-btn">
                    Voir plus →
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default AssociationsPage;
