import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../lib/api";
import type { Animal } from "../../types";
import { ANIMAL_STATUS_LABELS } from "../../constants";
import "../../assets/styles/animaux.css";

const FILTRES_ESPECE = ["Tous", "Chien", "Chat"];
const FILTRES_STATUT: { label: string; value: string }[] = [
  { label: "Tous", value: "Tous" },
  { label: "À placer", value: "a_placer" },
  { label: "Placement en cours", value: "placement_en_cours" },
  { label: "Placé", value: "place" },
  { label: "Adopté", value: "adopte" },
];

function getPagesAfficher(page: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "...")[] = [1];
  if (page > 3) pages.push("...");
  for (let i = Math.max(2, page - 1); i <= Math.min(total - 1, page + 1); i++) pages.push(i);
  if (page < total - 2) pages.push("...");
  pages.push(total);
  return pages;
}

function AnimauxPage() {
  const [animaux, setAnimaux] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filtreEspece, setFiltreEspece] = useState("Tous");
  const [filtreStatut, setFiltreStatut] = useState("Tous");
  const [recherche, setRecherche] = useState("");
  const [page, setPage] = useState(1);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 639px)").matches);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => { setPage(1); }, [filtreEspece, filtreStatut, recherche]);

  useEffect(() => {
    apiFetch("/api/animals")
      .then((res) => res.json())
      .then((json) => {
        setAnimaux(json.data ?? []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
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

  const itemsParPage = isMobile ? 6 : 9;
  const totalPages = Math.ceil(animauxFiltres.length / itemsParPage);
  const animauxPage = animauxFiltres.slice((page - 1) * itemsParPage, page * itemsParPage);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p style={{ padding: "40px", textAlign: "center", color: "red" }}>Impossible de charger les animaux : {error}</p>;

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
          {animauxPage.map((animal) => (
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
                  {ANIMAL_STATUS_LABELS[animal.status]}
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

      {/* ===== PAGINATION ===== */}
      {totalPages > 1 && (
        <div className="animaux-pagination">
          <button
            className="pagination-btn"
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
          >
            ←
          </button>

          {getPagesAfficher(page, totalPages).map((p, i) =>
            p === "..." ? (
              <span key={`ellipsis-${i}`} className="pagination-ellipsis">…</span>
            ) : (
              <button
                key={p}
                className={`pagination-btn ${page === p ? "actif" : ""}`}
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            )
          )}

          <button
            className="pagination-btn"
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
          >
            →
          </button>
        </div>
      )}

    </div>
  );
}

export default AnimauxPage;
