import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { apiFetch } from "../../lib/api";
import type { Animal, OfferStatus } from "../../types";
import { ANIMAL_STATUS_LABELS, ANIMAL_STATUS_CLASS, getRegionLabel } from "../../constants";
import "../../assets/styles/animal.detail.css";

// Ces props sont passées depuis App.tsx
type Props = {
  isLogged: boolean;
  connectedUser: { volunteer?: { id: number } | null } | null;
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

function AnimalDetailPage({ isLogged, connectedUser }: Props) {
  const { id } = useParams();

  // Données de l'animal
  const [animal, setAnimal]   = useState<Animal | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // État de la demande d'accueil du bénévole pour cet animal
  const [offerStatus, setOfferStatus]   = useState<OfferStatus | null>(null);
  const [offerLoading, setOfferLoading] = useState(false);
  const [offerEnvoi, setOfferEnvoi]     = useState(false);

  const isVolunteer  = isLogged && connectedUser?.volunteer != null;
  const volunteerId  = connectedUser?.volunteer?.id;

  // Chargement des données de l'animal
  useEffect(() => {
    apiFetch(`/api/animals/${id}`)
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

  // Si l'utilisateur est bénévole, on vérifie s'il a déjà une demande pour cet animal
  useEffect(() => {
    if (!isVolunteer || !volunteerId) return;

    async function verifierOffre() {
      setOfferLoading(true);
      try {
        const res = await apiFetch(`/api/offers/volunteer/${volunteerId}`);
        const json = await res.json();
        if (!json.data) return;

        const offreExistante = json.data.find(
          (o: { animalId: number; status: OfferStatus }) => o.animalId === Number(id)
        );
        if (offreExistante) setOfferStatus(offreExistante.status);
      } catch (err) {
        console.error("Erreur lors de la vérification de la demande :", err);
      } finally {
        setOfferLoading(false);
      }
    }

    verifierOffre();
  }, [isVolunteer, volunteerId, id]);

  // Soumet une demande d'accueil pour cet animal
  async function faireDemandeAccueil() {
    if (!isVolunteer) return;
    setOfferEnvoi(true);

    try {
      const reponse = await apiFetch("/api/offers", {
        method: "POST",
        body: JSON.stringify({ animalId: Number(id) }),
      });

      if (reponse.ok || reponse.status === 200) {
        setOfferStatus("soumise");
      } else {
        const json = await reponse.json();
        console.error("Erreur lors de la demande :", json.error);
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
    }

    setOfferEnvoi(false);
  }

  // Annule la demande d'accueil en cours
  async function annulerDemande() {
    if (!volunteerId) return;
    setOfferEnvoi(true);

    try {
      const reponse = await apiFetch(`/api/offers/${volunteerId}/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: "annulee" }),
      });

      if (reponse.ok) {
        setOfferStatus("annulee");
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
    }

    setOfferEnvoi(false);
  }

  // Rendu du bloc "demande" selon l'état de l'offre et de l'animal
  function renderBoutonDemande() {
    const peutFaireDemande = animal?.status === "a_placer";

    if (!peutFaireDemande) {
      return (
        <div className="demande-unavailable">
          Cet animal n'est plus disponible pour une demande d'accueil.
        </div>
      );
    }

    if (!isVolunteer) {
      return (
        <div className="demande-locked-full">
          🔒 <span>
            <Link to="/auth">Connectez-vous</Link> en tant que bénévole pour faire une demande
          </span>
        </div>
      );
    }

    if (offerLoading) {
      return <div className="demande-unavailable">Chargement...</div>;
    }

    // Demande en cours d'examen
    if (offerStatus === "soumise") {
      return (
        <div className="demande-soumise">
          <span className="demande-soumise-texte">⏳ Demande envoyée — en attente de réponse de l'association</span>
          <button
            className="btn-demande-annuler"
            onClick={annulerDemande}
            disabled={offerEnvoi}
          >
            {offerEnvoi ? "Annulation..." : "Annuler ma demande"}
          </button>
        </div>
      );
    }

    // Demande acceptée
    if (offerStatus === "acceptee") {
      return (
        <div className="demande-acceptee">
          ✅ Votre demande a été acceptée ! L'association va vous contacter.
        </div>
      );
    }

    // Demande refusée
    if (offerStatus === "refusee") {
      return (
        <div className="demande-refusee">
          ❌ Votre demande a été refusée par l'association.
        </div>
      );
    }

    // Demande précédemment annulée → on peut en soumettre une nouvelle
    if (offerStatus === "annulee") {
      return (
        <button
          className="btn-demande-full"
          onClick={faireDemandeAccueil}
          disabled={offerEnvoi}
        >
          {offerEnvoi ? "Envoi..." : "Faire une nouvelle demande d'accueil"}
        </button>
      );
    }

    // Aucune demande existante
    return (
      <button
        className="btn-demande-full"
        onClick={faireDemandeAccueil}
        disabled={offerEnvoi}
      >
        {offerEnvoi ? "Envoi en cours..." : "Faire une demande d'accueil"}
      </button>
    );
  }

  if (loading) return <p>Chargement...</p>;

  if (notFound || !animal) {
    return (
      <div className="animal-not-found">
        <p>Animal introuvable.</p>
        <Link to="/animals">← Retour aux animaux</Link>
      </div>
    );
  }

  const age = animal.dateOfBirth ? calculerAge(animal.dateOfBirth) : null;

  return (
    <div className="animal-detail-page">
    <div className="animal-detail-wrapper">
    <div className="animal-detail-card">

      {/* ===== GALERIE ===== */}
      <div className="animal-gallery">
        <div className="animal-gallery-photo">
          <img
            src={animal.images[photoIndex]?.url ?? "https://placehold.co/800x600?text=Pas+de+photo"}
            alt={animal.name}
            className="animal-gallery-main"
          />
          <span className={`animal-gallery-statut ${ANIMAL_STATUS_CLASS[animal.status]}`}>
            {ANIMAL_STATUS_LABELS[animal.status]}
          </span>
        </div>

        {animal.images.length > 1 && (
          <div className="animal-gallery-thumbs">
            {animal.images.map((img, index) => (
              <img
                key={img.id}
                src={img.thumb || img.url}
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
                    📍 {getRegionLabel(animal.association.user.region)}
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
        {renderBoutonDemande()}
      </div>

    </div>

    </div>
    </div>
  );
}

export default AnimalDetailPage;
