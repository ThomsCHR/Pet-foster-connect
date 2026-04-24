import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../lib/api";
import "../../assets/styles/associations.css";

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

type Association = {
  id: number;
  name: string;
  user: {
    email: string;
    phone: string;
    region: string | null;
    description: string | null;
  };
  _count: {
    animals: number;
  };
};

function AssociationsPage() {
  const [associations, setAssociations] = useState<Association[]>([]);
  const [loading, setLoading] = useState(true);
  const [recherche, setRecherche] = useState("");
  const [filtreRegion, setFiltreRegion] = useState("Toutes");

  useEffect(() => {
    async function chargerAssociations() {
      try {
        const reponse = await apiFetch("/api/associations");
        const donnees = await reponse.json();
        setAssociations(donnees);
      } catch (erreur) {
        console.error("Erreur lors du chargement des associations :", erreur);
      }
      setLoading(false);
    }

    chargerAssociations();
  }, []);

  // On construit la liste des régions présentes dans les données réelles
  const regionsPresentes: string[] = [];
  for (let i = 0; i < associations.length; i++) {
    const region = associations[i].user.region;
    if (region !== null && regionsPresentes.includes(region) === false) {
      regionsPresentes.push(region);
    }
  }

  // On filtre selon la recherche et la région sélectionnée
  const associationsFiltrees = associations.filter((asso) => {
    const matchNom = asso.name.toLowerCase().includes(recherche.toLowerCase());
    const matchRegion = filtreRegion === "Toutes" || asso.user.region === filtreRegion;
    return matchNom && matchRegion;
  });

  if (loading) {
    return <p style={{ padding: "40px", textAlign: "center" }}>Chargement...</p>;
  }

  return (
    <div className="associations-page">

      {/* ===== EN-TÊTE ===== */}
      <div className="associations-header">
        <h1>Les associations</h1>
        <p>{associations.length} association{associations.length > 1 ? "s" : ""} partenaire{associations.length > 1 ? "s" : ""} à travers la France</p>
      </div>

      {/* ===== BARRE DE RECHERCHE + FILTRES ===== */}
      <div className="associations-filtres">

        <input
          type="text"
          placeholder="Rechercher par nom..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          className="recherche-input"
        />

        <div className="filtres-groupe">
          <button
            className={"filtre-btn " + (filtreRegion === "Toutes" ? "actif" : "")}
            onClick={() => setFiltreRegion("Toutes")}
          >
            Toutes
          </button>
          {regionsPresentes.map((region) => (
            <button
              key={region}
              className={"filtre-btn " + (filtreRegion === region ? "actif" : "")}
              onClick={() => setFiltreRegion(region)}
            >
              {getRegionLabel(region)}
            </button>
          ))}
        </div>

      </div>

      {/* ===== RÉSULTATS ===== */}
      <div className="associations-container">

        {associationsFiltrees.length === 0 && (
          <div className="aucun-resultat">
            <div className="aucun-resultat-icon">🔍</div>
            <p>Aucune association ne correspond à ta recherche.</p>
          </div>
        )}

        <div className="associations-grille">
          {associationsFiltrees.map((asso) => (
            <Link key={asso.id} to={"/associations/" + asso.id} className="asso-card">

              {/* Bandeau avec dégradé à la place de la photo */}
              <div className="asso-photo-wrapper">
                <div className="asso-photo-placeholder">🐾</div>
                <span className="asso-dept">{getRegionLabel(asso.user.region)}</span>
              </div>

              <div className="asso-infos">
                <h2 className="asso-nom">{asso.name}</h2>
                <p className="asso-ville">📍 {getRegionLabel(asso.user.region)}</p>
                <p className="asso-description">
                  {asso.user.description || "Aucune description disponible."}
                </p>

                <div className="asso-stats">
                  <span className="asso-stat">🐾 {asso._count.animals} animaux</span>
                </div>

                <div className="asso-footer">
                  <span className="asso-contact">✉️ {asso.user.email}</span>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>

    </div>
  );
}

export default AssociationsPage;
