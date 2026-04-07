import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/animaux.css";

// =============================================
// DONNÉES STATIQUES (à remplacer par l'API plus tard)
// =============================================
const ANIMAUX = [
  {
    id: 1,
    nom: "Luna",
    espece: "Chien",
    race: "Labrador",
    age: "2 ans",
    sexe: "Femelle",
    description: "Luna est une chienne douce et joueuse. Elle adore les enfants et s'entend bien avec les autres animaux.",
    photo: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
    association: "SPA de Lyon",
    statut: "Disponible",
  },
  {
    id: 2,
    nom: "Milo",
    espece: "Chat",
    race: "Européen",
    age: "4 ans",
    sexe: "Mâle",
    description: "Milo est un chat câlin qui cherche une famille calme. Il est parfait pour un appartement.",
    photo: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
    association: "Refuge du Soleil",
    statut: "Disponible",
  },
  {
    id: 3,
    nom: "Rocky",
    espece: "Chien",
    race: "Berger Allemand",
    age: "5 ans",
    sexe: "Mâle",
    description: "Rocky est un chien énergique qui a besoin d'exercice. Idéal pour une famille active avec un jardin.",
    photo: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=300&fit=crop",
    association: "SPA de Paris",
    statut: "En famille d'accueil",
  },
  {
    id: 4,
    nom: "Bella",
    espece: "Chat",
    race: "Persan",
    age: "3 ans",
    sexe: "Femelle",
    description: "Bella est une chatte indépendante et élégante. Elle préfère les foyers sans autres animaux.",
    photo: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=400&h=300&fit=crop",
    association: "Refuge du Soleil",
    statut: "Disponible",
  },
  {
    id: 5,
    nom: "Max",
    espece: "Chien",
    race: "Beagle",
    age: "1 an",
    sexe: "Mâle",
    description: "Max est un jeune chien plein de vie. Il est encore en apprentissage mais très attachant.",
    photo: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400&h=300&fit=crop",
    association: "SPA de Lyon",
    statut: "Disponible",
  },
  {
    id: 6,
    nom: "Nala",
    espece: "Chat",
    race: "Maine Coon",
    age: "6 ans",
    sexe: "Femelle",
    description: "Nala est une grande chatte majestueuse, très affectueuse avec ses humains de confiance.",
    photo: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop",
    association: "SPA de Bordeaux",
    statut: "Disponible",
  },
];

// Les filtres disponibles
const FILTRES_ESPECE = ["Tous", "Chien", "Chat"];
const FILTRES_STATUT = ["Tous", "Disponible", "En famille d'accueil"];

function AnimauxPage() {
  // État des filtres sélectionnés
  const [filtreEspece, setFiltreEspece] = useState("Tous");
  const [filtreStatut, setFiltreStatut] = useState("Tous");
  const [recherche, setRecherche] = useState("");

  // On filtre la liste selon les critères choisis
  const animauxFiltres = ANIMAUX.filter((animal) => {
    const matchEspece = filtreEspece === "Tous" || animal.espece === filtreEspece;
    const matchStatut = filtreStatut === "Tous" || animal.statut === filtreStatut;
    const matchRecherche = animal.nom.toLowerCase().includes(recherche.toLowerCase())
      || animal.race.toLowerCase().includes(recherche.toLowerCase());
    return matchEspece && matchStatut && matchRecherche;
  });

  return (
    <div className="animaux-page">

      {/* ===== EN-TÊTE ===== */}
      <div className="animaux-header">
        <h1>Nos animaux</h1>
        <p>{ANIMAUX.length} animaux attendent une famille d'accueil</p>
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
              key={filtre}
              className={`filtre-btn ${filtreStatut === filtre ? "actif" : ""}`}
              onClick={() => setFiltreStatut(filtre)}
            >
              {filtre}
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
            <div key={animal.id} className="animal-card">

              {/* Photo */}
              <div className="animal-photo-wrapper">
                <img src={animal.photo} alt={animal.nom} className="animal-photo" />
                {/* Badge statut */}
                <span className={`animal-statut ${animal.statut === "Disponible" ? "statut-dispo" : "statut-accueil"}`}>
                  {animal.statut}
                </span>
              </div>

              {/* Infos */}
              <div className="animal-infos">
                <div className="animal-top">
                  <h2 className="animal-nom">{animal.nom}</h2>
                  <span className="animal-espece">{animal.espece === "Chien" ? "🐶" : "🐱"}</span>
                </div>

                <p className="animal-race">{animal.race} · {animal.age} · {animal.sexe}</p>
                <p className="animal-description">{animal.description}</p>

                <div className="animal-footer">
                  <span className="animal-asso">📍 {animal.association}</span>
                  <Link to={`/animals/${animal.id}`} className="animal-btn">
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

export default AnimauxPage;
