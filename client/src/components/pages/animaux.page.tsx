import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../lib/api";
import "../../assets/styles/animaux.css";

type AnimalStatus = "a_placer" | "placement_en_cours" | "adopte" | "place";

interface Image {
  id: number;
  url: string;
  thumb: string;
}

interface Association {
  id: number;
  name: string;
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
  associationId: number;
  association: Association | null;
  images: Image[];
}

const FILTRES_ESPECE = ["Tous", "Chien", "Chat"];
const FILTRES_STATUT: { label: string; value: string }[] = [
  { label: "Tous", value: "Tous" },
  { label: "À placer", value: "a_placer" },
  { label: "Placement en cours", value: "placement_en_cours" },
  { label: "Placé", value: "place" },
  { label: "Adopté", value: "adopte" },
];

const STATUT_LABELS: Record<AnimalStatus, string> = {
  a_placer: "À placer",
  placement_en_cours: "Placement en cours",
  place: "Placé",
  adopte: "Adopté",
};

function AnimauxPage() {
  const [animaux, setAnimaux] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtreEspece, setFiltreEspece] = useState("Tous");
  const [filtreStatut, setFiltreStatut] = useState("Tous");
  const [recherche, setRecherche] = useState("");

  useEffect(() => {
    apiFetch("/api/animals")
      .then((res) => res.json())
      .then((json) => {
        setAnimaux(json.data ?? []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const animauxFiltres = animaux.filter((animal) => {
    const matchEspece = filtreEspece === "Tous" || animal.species === filtreEspece;
    const matchStatut = filtreStatut === "Tous" || animal.status === filtreStatut;
    const matchRecherche =
      animal.name.toLowerCase().includes(recherche.toLowerCase()) ||
      animal.breed?.toLowerCase().includes(recherche.toLowerCase());
    return matchEspece && matchStatut && matchRecherche;
  });

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="animaux-page">

      {/* ===== EN-TÊTE ===== */}
      <div className="animaux-header">
        <h1>Nos animaux</h1>
        <p>{animaux.length} animaux attendent une famille d'accueil</p>
      </div>

      {/* ===== BARRE DE RECHERCHE + FILTRES ===== */}
      <div className="animaux-filtres">

        {/* Recherche par nom ou race */}
        <input
          type="text"
          placeholder="Rechercher par nom ou race..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          className="recherche-input"
        />

        {/* Filtre par espèce */}
        <div className="filtres-groupe">
          {FILTRES_ESPECE.map((filtre) => (
            <button
              key={filtre}
              className={`filtre-btn ${filtreEspece === filtre ? "actif" : ""}`}
              onClick={() => setFiltreEspece(filtre)}
            >
              {filtre}
            </button>
          ))}
        </div>

        {/* Filtre par statut */}
        <div className="filtres-groupe">
          {FILTRES_STATUT.map((filtre) => (
            <button
              key={filtre.value}
              className={`filtre-btn ${filtreStatut === filtre.value ? "actif" : ""}`}
              onClick={() => setFiltreStatut(filtre.value)}
            >
              {filtre.label}
            </button>
          ))}
        </div>

      </div>

      {/* ===== RÉSULTATS ===== */}
      <div className="animaux-container">

        {/* Message si aucun résultat */}
        {animauxFiltres.length === 0 && (
          <div className="aucun-resultat">
            <div className="aucun-resultat-icon">🔍</div>
            <p>Aucun animal ne correspond à ta recherche.</p>
          </div>
        )}

        {/* Grille de cartes */}
        <div className="animaux-grille">
          {animauxFiltres.map((animal) => (
            <Link key={animal.id} to={`/animals/${animal.id}`} className="animal-card">

              {/* Photo */}
              <div className="animal-photo-wrapper">
                <img
                  src={animal.images[0]?.url ?? "https://placehold.co/400x300?text=Pas+de+photo"}
                  alt={animal.name}
                  className="animal-photo"
                />
                {/* Badge statut */}
                <span className={`animal-statut ${animal.status === "a_placer" ? "statut-dispo" : "statut-accueil"}`}>
                  {STATUT_LABELS[animal.status]}
                </span>
              </div>

              {/* Infos */}
              <div className="animal-infos">
                <div className="animal-top">
                  <h2 className="animal-nom">{animal.name}</h2>
                  <span className="animal-espece">{animal.species === "Chien" ? "🐶" : "🐱"}</span>
                </div>

                <p className="animal-race">
                  {animal.breed ? `${animal.breed} · ` : ""}{animal.gender}
                </p>
                <p className="animal-description">{animal.description}</p>

                <div className="animal-footer">
                  <span className="animal-asso">📍 {animal.association?.name ?? `Association #${animal.associationId}`}</span>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>

    </div>
  );
}

export default AnimauxPage;
