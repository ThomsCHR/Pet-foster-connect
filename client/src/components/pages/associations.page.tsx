import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../lib/api";
import type { Association } from "../../types";
import { getRegionLabel } from "../../constants";
import "../../assets/styles/associations.css";

function getPagesAfficher(page: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "...")[] = [1];
  if (page > 3) pages.push("...");
  for (let i = Math.max(2, page - 1); i <= Math.min(total - 1, page + 1); i++) pages.push(i);
  if (page < total - 2) pages.push("...");
  pages.push(total);
  return pages;
}

function AssociationsPage() {
  const [associations, setAssociations] = useState<Association[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [recherche, setRecherche] = useState("");
  const [filtreRegion, setFiltreRegion] = useState("Toutes");
  const [page, setPage] = useState(1);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 639px)").matches);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => { setPage(1); }, [recherche, filtreRegion]);

  useEffect(() => {
    async function chargerAssociations() {
      try {
        const reponse = await apiFetch("/api/associations");
        const donnees = await reponse.json();
        setAssociations(donnees);
      } catch (erreur) {
        setError((erreur as Error).message);
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

  const itemsParPage = isMobile ? 6 : 9;
  const totalPages = Math.ceil(associationsFiltrees.length / itemsParPage);
  const assosPage = associationsFiltrees.slice((page - 1) * itemsParPage, page * itemsParPage);

  if (loading) return <p style={{ padding: "40px", textAlign: "center" }}>Chargement...</p>;
  if (error) return <p style={{ padding: "40px", textAlign: "center", color: "red" }}>Impossible de charger les associations : {error}</p>;

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
          {assosPage.map((asso) => (
            <Link key={asso.id} to={"/associations/" + asso.id} className="asso-card">

              <div className="asso-photo-wrapper">
                {asso.user.image
                  ? <img src={asso.user.image} alt={asso.name} className="asso-photo" />
                  : <div className="asso-photo-placeholder">🐾</div>
                }
                <span className="asso-dept">{getRegionLabel(asso.user.region)}</span>
              </div>

              <div className="asso-infos">
                <h2 className="asso-nom">{asso.name}</h2>
                <p className="asso-ville">📍 {getRegionLabel(asso.user.region)}</p>
                <p className="asso-description">
                  {asso.user.description || "Aucune description disponible."}
                </p>

                <div className="asso-stats">
                  <span className="asso-stat">🐾 {asso._count?.animals ?? 0} animaux</span>
                </div>

                <div className="asso-footer">
                  <span className="asso-contact">✉️ {asso.user.email}</span>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>

      {/* ===== PAGINATION ===== */}
      {totalPages > 1 && (
        <div className="associations-pagination">
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

export default AssociationsPage;
