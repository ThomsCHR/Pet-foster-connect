import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { apiFetch, API_BASE } from "../../lib/api";
import { useAuth } from "../../contexts/AuthContext";
import type { Animal, Association, AssociationOffer, OfferStatus, Image } from "../../types";
import { REGIONS, OFFER_STATUS_LABELS, OFFER_STATUS_CLASS, ANIMAL_STATUS_LABELS, getRegionLabel } from "../../constants";
import "../../assets/styles/association.detail.css";

// L'API de détail retourne toujours `animals`, contrairement à la liste
type AssociationDetail = Association & { animals: Animal[] };

// ── Fonctions utilitaires ──────────────────────────────────────────────────

function getStatusLabel(status: string): string {
  return ANIMAL_STATUS_LABELS[status as keyof typeof ANIMAL_STATUS_LABELS] ?? status;
}

// Props gardées pour compatibilité avec App.tsx
type Props = {
  isLogged: boolean;
  connectedUser: unknown;
};

function AssociationDetailPage({}: Props) {
  const { id } = useParams();
  const { connectedUser, logout } = useAuth();
  const navigate = useNavigate();

  const [association, setAssociation] = useState<AssociationDetail | null>(null);
  const [loading, setLoading]         = useState(true);
  const [notFound, setNotFound]       = useState(false);

  // Demandes reçues (visibles uniquement pour l'association propriétaire)
  const [demandesRecues, setDemandesRecues]     = useState<AssociationOffer[]>([]);
  const [demandesLoading, setDemandesLoading]   = useState(false);
  const [offerAction, setOfferAction]           = useState(false);

  // Statuts des demandes du bénévole connecté par animal (animalId → statut)
  const [volunteerOffres, setVolunteerOffres] = useState<Record<number, OfferStatus>>({});
  const [volunteerOffreEnvoi, setVolunteerOffreEnvoi] = useState<number | null>(null);

  // Édition du profil de l'association
  const [editing, setEditing]         = useState(false);
  const [saving, setSaving]           = useState(false);
  const [editName, setEditName]       = useState("");
  const [editEmail, setEditEmail]     = useState("");
  const [editPhone, setEditPhone]     = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editRegion, setEditRegion]   = useState("");
  const [editDescr, setEditDescr]     = useState("");
  const [editError, setEditError]     = useState("");

  // Photo de couverture
  const [coverUploading, setCoverUploading] = useState(false);

  // Formulaire d'ajout / modification d'animal
  const [formVisible, setFormVisible]   = useState(false);
  const [editAnimalId, setEditAnimalId] = useState<number | null>(null);
  const [formNom, setFormNom]           = useState("");
  const [formEspece, setFormEspece]     = useState("Chat");
  const [formRace, setFormRace]         = useState("");
  const [formGenre, setFormGenre]       = useState("Mâle");
  const [formNaiss, setFormNaiss]       = useState("");
  const [formDescr, setFormDescr]       = useState("");
  const [formStatut, setFormStatut]     = useState("a_placer");
  const [formEnvoi, setFormEnvoi]       = useState(false);
  const [formErreur, setFormErreur]     = useState("");
  const [formImage, setFormImage]       = useState<File | null>(null);
  const [formImages, setFormImages]     = useState<File[]>([]);

  // Chargement de l'association
  useEffect(() => {
    async function chargerAssociation() {
      try {
        const reponse = await apiFetch("/api/associations/" + id);

        if (reponse.status === 404) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        const donnees = await reponse.json();
        setAssociation(donnees);
      } catch (erreur) {
        console.error("Erreur lors du chargement de l'association :", erreur);
      }
      setLoading(false);
    }

    chargerAssociation();
  }, [id]);

  // Si c'est l'association propriétaire, on charge les demandes reçues
  useEffect(() => {
    if (!connectedUser?.association || connectedUser.association.id !== Number(id)) return;

    setDemandesLoading(true);

    apiFetch("/api/offers/association/" + id)
      .then((res) => res.json())
      .then((json) => {
        if (json.data) setDemandesRecues(json.data);
      })
      .catch((err) => console.error("Erreur lors du chargement des demandes :", err))
      .finally(() => setDemandesLoading(false));
  }, [id, connectedUser]);

  // Si c'est un bénévole connecté, on charge ses demandes pour cette association
  useEffect(() => {
    const volunteerId = connectedUser?.volunteer?.id;
    if (!volunteerId) return;

    apiFetch("/api/offers/volunteer/" + volunteerId)
      .then((res) => res.json())
      .then((json) => {
        if (!json.data) return;

        // Construire un dictionnaire animalId → statut de l'offre
        const mapOffres: Record<number, OfferStatus> = {};
        for (const offre of json.data) {
          mapOffres[offre.animalId] = offre.status;
        }
        setVolunteerOffres(mapOffres);
      })
      .catch((err) => console.error("Erreur lors du chargement des offres bénévole :", err));
  }, [connectedUser]);

  async function seDeconnecter() {
    await logout();
    navigate("/");
  }

  // Vérifie si le bénévole connecté peut faire une demande sur cet animal
  function estBenevole(): boolean {
    if (connectedUser === null) return false;
    if (connectedUser.volunteer === null || connectedUser.volunteer === undefined) return false;
    return true;
  }

  // Vérifie si l'utilisateur connecté est bien le propriétaire de cette association
  function estAssociationProprietaire(): boolean {
    if (connectedUser === null) return false;
    if (connectedUser.association === null || connectedUser.association === undefined) return false;
    return connectedUser.association.id === Number(id);
  }

  // Soumet une demande d'accueil pour un animal
  async function faireDemandeAccueil(animalId: number) {
    setVolunteerOffreEnvoi(animalId);

    try {
      const reponse = await apiFetch("/api/offers", {
        method: "POST",
        body: JSON.stringify({ animalId }),
      });

      if (reponse.ok || reponse.status === 200) {
        setVolunteerOffres((prev) => ({ ...prev, [animalId]: "soumise" }));
      } else {
        const json = await reponse.json();
        console.error("Erreur :", json.error);
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
    }

    setVolunteerOffreEnvoi(null);
  }

  // Annule la demande d'accueil d'un bénévole sur un animal
  async function annulerDemandeBenevole(animalId: number) {
    const volunteerId = connectedUser?.volunteer?.id;
    if (!volunteerId) return;

    setVolunteerOffreEnvoi(animalId);

    try {
      const reponse = await apiFetch(`/api/offers/${volunteerId}/${animalId}`, {
        method: "PATCH",
        body: JSON.stringify({ status: "annulee" }),
      });

      if (reponse.ok) {
        setVolunteerOffres((prev) => ({ ...prev, [animalId]: "annulee" }));
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
    }

    setVolunteerOffreEnvoi(null);
  }

  // L'association accepte ou refuse une demande
  async function traiterDemande(volunteerId: number, animalId: number, status: "acceptee" | "refusee") {
    setOfferAction(true);

    try {
      const reponse = await apiFetch(`/api/offers/${volunteerId}/${animalId}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });

      if (reponse.ok) {
        setDemandesRecues((prev) =>
          prev.map((d) =>
            d.volunteerId === volunteerId && d.animalId === animalId
              ? { ...d, status }
              : status === "acceptee" && d.animalId === animalId && d.status === "soumise"
                ? { ...d, status: "refusee" }
                : d
          )
        );
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
    }

    setOfferAction(false);
  }

  // ── Édition du profil ──

  function ouvrirEdition() {
    if (!association) return;
    setEditName(association.name);
    setEditEmail(association.user.email);
    setEditPhone(association.user.phone);
    setEditAddress(association.user.address);
    setEditRegion(association.user.region || "");
    setEditDescr(association.user.description || "");
    setEditError("");
    setEditing(true);
  }

  function annulerEdition() {
    setEditing(false);
    setEditError("");
  }

  async function sauvegarderProfil(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setEditError("");

    try {
      const reponse = await apiFetch("/api/associations/" + id, {
        method: "PUT",
        body: JSON.stringify({
          name: editName,
          email: editEmail,
          phone: editPhone,
          address: editAddress,
          region: editRegion,
          description: editDescr,
        }),
      });

      if (!reponse.ok) {
        const json = await reponse.json();
        setEditError(json.error || "Erreur lors de la sauvegarde");
        setSaving(false);
        return;
      }

      const json = await reponse.json();
      setAssociation((prev) =>
        prev
          ? {
              ...prev,
              name: json.name,
              user: {
                ...prev.user,
                email: json.user.email,
                phone: json.user.phone,
                address: json.user.address,
                region: json.user.region,
                description: json.user.description,
              },
            }
          : prev
      );
      setEditing(false);
    } catch {
      setEditError("Erreur réseau, veuillez réessayer");
    }

    setSaving(false);
  }

  // ── Gestion des animaux (association propriétaire) ──

  function ouvrirFormAjout() {
    setEditAnimalId(null);
    setFormNom("");
    setFormEspece("Chat");
    setFormRace("");
    setFormGenre("Mâle");
    setFormNaiss("");
    setFormDescr("");
    setFormStatut("a_placer");
    setFormErreur("");
    setFormVisible(true);
  }

  function ouvrirFormEdit(animal: Animal) {
    setEditAnimalId(animal.id);
    setFormNom(animal.name);
    setFormEspece(animal.species);
    setFormRace(animal.breed || "");
    setFormGenre(animal.gender);
    setFormNaiss(animal.dateOfBirth ? animal.dateOfBirth.substring(0, 10) : "");
    setFormDescr(animal.description);
    setFormStatut(animal.status);
    setFormErreur("");
    setFormVisible(true);
  }

  function annulerForm() {
    setFormVisible(false);
    setEditAnimalId(null);
    setFormErreur("");
    setFormImage(null);
    setFormImages([]);
  }

  async function ajouterAnimal(e: React.FormEvent) {
    e.preventDefault();
    setFormEnvoi(true);
    setFormErreur("");

    try {
      const reponse = await apiFetch("/api/animals", {
        method: "POST",
        body: JSON.stringify({
          name: formNom,
          species: formEspece,
          breed: formRace || null,
          gender: formGenre,
          dateOfBirth: formNaiss || null,
          description: formDescr,
          status: formStatut,
        }),
      });

      if (!reponse.ok) {
        const json = await reponse.json();
        setFormErreur(json.error || "Erreur lors de la création");
        setFormEnvoi(false);
        return;
      }

      const json = await reponse.json();
      let nouvelAnimal: Animal = { ...json.data, images: [] };

      if (formImage) {
        const fd = new FormData();
        fd.append("image", formImage);
        const imgRes = await fetch(`${API_BASE}/api/animals/${nouvelAnimal.id}/images`, {
          method: "POST",
          credentials: "include",
          body: fd,
        });
        if (imgRes.ok) {
          const imgJson = await imgRes.json();
          nouvelAnimal = { ...nouvelAnimal, images: [imgJson.data] };
        }
      }

      setAssociation((prev) =>
        prev ? { ...prev, animals: [...prev.animals, nouvelAnimal] } : prev
      );
      annulerForm();
    } catch {
      setFormErreur("Erreur réseau, veuillez réessayer");
    }

    setFormEnvoi(false);
  }

  async function modifierAnimal(e: React.FormEvent) {
    e.preventDefault();
    if (!editAnimalId) return;
    setFormEnvoi(true);
    setFormErreur("");

    try {
      const reponse = await apiFetch(`/api/animals/${editAnimalId}`, {
        method: "PUT",
        body: JSON.stringify({
          name: formNom,
          species: formEspece,
          breed: formRace || null,
          gender: formGenre,
          dateOfBirth: formNaiss || null,
          description: formDescr,
          status: formStatut,
        }),
      });

      if (!reponse.ok) {
        const json = await reponse.json();
        setFormErreur(json.error || "Erreur lors de la modification");
        setFormEnvoi(false);
        return;
      }

      const json = await reponse.json();
      let newImages: Image[] = association?.animals.find((a) => a.id === editAnimalId)?.images ?? [];

      for (const file of formImages) {
        const fd = new FormData();
        fd.append("image", file);
        const imgRes = await fetch(`${API_BASE}/api/animals/${editAnimalId}/images`, {
          method: "POST",
          credentials: "include",
          body: fd,
        });
        if (imgRes.ok) {
          const imgJson = await imgRes.json();
          newImages = [...newImages, imgJson.data];
        }
      }

      setAssociation((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          animals: prev.animals.map((a) =>
            a.id === editAnimalId ? { ...a, ...json.data, images: newImages } : a
          ),
        };
      });
      annulerForm();
    } catch {
      setFormErreur("Erreur réseau, veuillez réessayer");
    }

    setFormEnvoi(false);
  }

  async function supprimerImage(animalId: number, imageId: number) {
    try {
      const res = await fetch(`${API_BASE}/api/animals/images/${imageId}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (res.ok) {
        setAssociation((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            animals: prev.animals.map((a) =>
              a.id === animalId
                ? { ...a, images: a.images.filter((img) => img.id !== imageId) }
                : a
            ),
          };
        });
      }
    } catch (err) {
      console.error("Erreur suppression image :", err);
    }
  }

  async function supprimerAnimal(animalId: number) {
    const ok = window.confirm("Supprimer cet animal ? Cette action est irréversible.");
    if (!ok) return;

    try {
      const reponse = await apiFetch(`/api/animals/${animalId}`, { method: "DELETE" });
      if (reponse.ok) {
        setAssociation((prev) =>
          prev ? { ...prev, animals: prev.animals.filter((a) => a.id !== animalId) } : prev
        );
      }
    } catch (err) {
      console.error("Erreur lors de la suppression :", err);
    }
  }

  // Rendu du bouton d'action pour un animal (côté bénévole)
  function renderBoutonAnimal(animal: Animal) {
    if (animal.status !== "a_placer") {
      return (
        <div className="demande-locked" style={{ background: "#f0fdf4", color: "#166534" }}>
          {getStatusLabel(animal.status)}
        </div>
      );
    }

    if (!estBenevole()) {
      return (
        <div className="demande-locked">
          🔒 <span>
            <Link to="/auth">Connectez-vous</Link> en tant que bénévole pour faire une demande
          </span>
        </div>
      );
    }

    const statut = volunteerOffres[animal.id];
    const enChargement = volunteerOffreEnvoi === animal.id;

    if (statut === "soumise") {
      return (
        <div className="demande-statut-benevole">
          <span className="offre-statut-soumise offre-statut-mini">⏳ Demande envoyée</span>
          <button
            className="btn-demande-annuler-mini"
            onClick={() => annulerDemandeBenevole(animal.id)}
            disabled={enChargement}
          >
            Annuler
          </button>
        </div>
      );
    }

    if (statut === "acceptee") {
      return (
        <div className="demande-statut-benevole">
          <span className="offre-statut-acceptee offre-statut-mini">✅ Acceptée</span>
        </div>
      );
    }

    if (statut === "refusee") {
      return (
        <div className="demande-statut-benevole">
          <span className="offre-statut-refusee offre-statut-mini">❌ Refusée</span>
        </div>
      );
    }

    return (
      <button
        className="btn-demande"
        onClick={() => faireDemandeAccueil(animal.id)}
        disabled={enChargement}
      >
        {enChargement ? "Envoi..." : "Faire une demande d'accueil"}
      </button>
    );
  }

  async function changerPhotoCouverture(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverUploading(true);
    try {
      const fd = new FormData();
      fd.append("image", file);
      const res = await fetch(`${API_BASE}/api/associations/${id}/cover`, {
        method: "POST",
        credentials: "include",
        body: fd,
      });
      if (res.ok) {
        const json = await res.json();
        setAssociation((prev) => prev ? { ...prev, user: { ...prev.user, image: json.url } } : prev);
      }
    } catch (err) {
      console.error("Erreur upload couverture :", err);
    }
    setCoverUploading(false);
    e.target.value = "";
  }

  // ── Affichages conditionnels ──

  if (loading) {
    return <p style={{ padding: "40px", textAlign: "center" }}>Chargement...</p>;
  }

  if (notFound || association === null) {
    return (
      <div className="detail-not-found">
        <p>Association introuvable.</p>
        <Link to="/associations">← Retour aux associations</Link>
      </div>
    );
  }

  const demandesEnAttente = demandesRecues.filter((d) => d.status === "soumise").length;

  return (
    <div className="detail-page">

      {/* ===== EN-TÊTE ===== */}
      <div className={`detail-header${association.user.image ? "" : " detail-header-placeholder"}`}>
        {association.user.image && (
          <img src={association.user.image} alt="" className="detail-header-cover" />
        )}

        <h1>{association.name}</h1>
        <span className="detail-region-badge">
          📍 {getRegionLabel(association.user.region)}
        </span>

        {estAssociationProprietaire() && (
          <div className="detail-header-actions">
            {!editing && (
              <button className="detail-header-btn-edit" onClick={ouvrirEdition}>
                Modifier mon profil
              </button>
            )}
            <button className="detail-header-btn-logout" onClick={seDeconnecter}>
              Se déconnecter
            </button>
          </div>
        )}
      </div>

      {/* ===== INFOS ===== */}
      <div className="detail-infos">
        <div className="detail-infos-inner">

          {/* ── Mode lecture ── */}
          {!editing && (
            <>
              <p className="detail-description">
                {association.user.description || "Aucune description disponible."}
              </p>
              <div className="detail-meta">
                <span className="detail-meta-item">✉️ {association.user.email}</span>
                <span className="detail-meta-item">📞 {association.user.phone}</span>
                <span className="detail-meta-item">📍 {association.user.address}</span>
                <span className="detail-meta-item">🐾 {association.animals.length} animaux</span>
              </div>
            </>
          )}

          {/* ── Mode édition ── */}
          {editing && (
            <form className="profil-asso-form" onSubmit={sauvegarderProfil}>

              {editError !== "" && (
                <p className="profil-asso-form-erreur">{editError}</p>
              )}

              <div className="profil-asso-form-grille">
                <div className="profil-asso-form-groupe full">
                  <label className="profil-asso-form-label">Photo de couverture</label>
                  <div className="profil-asso-cover-preview">
                    {association.user.image && (
                      <img src={association.user.image} alt="Couverture actuelle" className="profil-asso-cover-img" />
                    )}
                    <label className="profil-asso-cover-btn">
                      {coverUploading ? "Chargement..." : association.user.image ? "Changer la photo" : "Ajouter une photo"}
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={changerPhotoCouverture}
                        disabled={coverUploading}
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                </div>

                <div className="profil-asso-form-groupe full">
                  <label className="profil-asso-form-label">Nom de l'association *</label>
                  <input
                    className="profil-asso-form-input"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    required
                  />
                </div>

                <div className="profil-asso-form-groupe">
                  <label className="profil-asso-form-label">Email *</label>
                  <input
                    type="email"
                    className="profil-asso-form-input"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="profil-asso-form-groupe">
                  <label className="profil-asso-form-label">Téléphone *</label>
                  <input
                    type="tel"
                    className="profil-asso-form-input"
                    value={editPhone}
                    onChange={(e) => setEditPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="profil-asso-form-groupe full">
                  <label className="profil-asso-form-label">Adresse *</label>
                  <input
                    className="profil-asso-form-input"
                    value={editAddress}
                    onChange={(e) => setEditAddress(e.target.value)}
                    required
                  />
                </div>

                <div className="profil-asso-form-groupe">
                  <label className="profil-asso-form-label">Région</label>
                  <select
                    className="profil-asso-form-select"
                    value={editRegion}
                    onChange={(e) => setEditRegion(e.target.value)}
                  >
                    <option value="">-- Sélectionner --</option>
                    {REGIONS.map((r) => (
                      <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                  </select>
                </div>

                <div className="profil-asso-form-groupe full">
                  <label className="profil-asso-form-label">
                    Description <span style={{ fontWeight: 400, color: "#9ca3af" }}>(optionnel)</span>
                  </label>
                  <textarea
                    className="profil-asso-form-textarea"
                    value={editDescr}
                    onChange={(e) => setEditDescr(e.target.value)}
                    placeholder="Décrivez votre association..."
                  />
                </div>
              </div>

              <div className="profil-asso-form-actions">
                <button type="button" className="profil-asso-btn-annuler" onClick={annulerEdition}>
                  Annuler
                </button>
                <button type="submit" className="profil-asso-btn-save" disabled={saving}>
                  {saving ? "Enregistrement..." : "Enregistrer"}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>

      {/* ===== ANIMAUX ===== */}
      <div className="detail-animaux">

        <div className="detail-animaux-header">
          <div>
            <h2>Nos animaux</h2>
            <p className="detail-animaux-subtitle">
              {association.animals.length === 0
                ? "Aucun animal pour le moment"
                : association.animals.length + " animaux" + (association.animals.length > 1 ? "" : "") + " en attente d'une famille d'accueil"}
            </p>
          </div>

          {estAssociationProprietaire() && !formVisible && (
            <button className="btn-animal-add" onClick={ouvrirFormAjout}>
              + Ajouter un animal
            </button>
          )}
        </div>

        {/* ── Formulaire ajout / modification ── */}
        {formVisible && (
          <form
            className="animal-form-panel"
            onSubmit={editAnimalId !== null ? modifierAnimal : ajouterAnimal}
          >
            <h3 className="animal-form-titre">
              {editAnimalId !== null ? "Modifier l'animal" : "Ajouter un animal"}
            </h3>

            {formErreur !== "" && (
              <p className="animal-form-erreur">{formErreur}</p>
            )}

            <div className="animal-form-grille">
              <div className="animal-form-groupe">
                <label className="animal-form-label">Nom *</label>
                <input
                  className="animal-form-input"
                  value={formNom}
                  onChange={(e) => setFormNom(e.target.value)}
                  required
                  placeholder="Nom de l'animal"
                />
              </div>

              <div className="animal-form-groupe">
                <label className="animal-form-label">Espèce *</label>
                <select
                  className="animal-form-select"
                  value={formEspece}
                  onChange={(e) => setFormEspece(e.target.value)}
                >
                  <option value="Chat">Chat</option>
                  <option value="Chien">Chien</option>
                </select>
              </div>

              <div className="animal-form-groupe">
                <label className="animal-form-label">Race</label>
                <input
                  className="animal-form-input"
                  value={formRace}
                  onChange={(e) => setFormRace(e.target.value)}
                  placeholder="Optionnel"
                />
              </div>

              <div className="animal-form-groupe">
                <label className="animal-form-label">Genre *</label>
                <select
                  className="animal-form-select"
                  value={formGenre}
                  onChange={(e) => setFormGenre(e.target.value)}
                >
                  <option value="Mâle">Mâle</option>
                  <option value="Femelle">Femelle</option>
                </select>
              </div>

              <div className="animal-form-groupe">
                <label className="animal-form-label">Date de naissance</label>
                <input
                  type="date"
                  className="animal-form-input"
                  value={formNaiss}
                  onChange={(e) => setFormNaiss(e.target.value)}
                />
              </div>

              <div className="animal-form-groupe">
                <label className="animal-form-label">Statut *</label>
                <select
                  className="animal-form-select"
                  value={formStatut}
                  onChange={(e) => setFormStatut(e.target.value)}
                >
                  <option value="a_placer">À placer</option>
                  <option value="place">Placé</option>
                  <option value="adopte">Adopté</option>
                </select>
              </div>
            </div>

            <div className="animal-form-groupe">
              <label className="animal-form-label">Description</label>
              <textarea
                className="animal-form-textarea"
                value={formDescr}
                onChange={(e) => setFormDescr(e.target.value)}
                placeholder="Décrivez l'animal, son caractère, ses besoins..."
              />
            </div>

            {/* ── Gestion des images ── */}
            <div className="animal-form-groupe">
              <label className="animal-form-label">
                {editAnimalId !== null ? "Photos existantes" : "Photo"}
              </label>

              {/* Images existantes (mode édition uniquement) */}
              {editAnimalId !== null && (
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
                  {(association?.animals.find((a) => a.id === editAnimalId)?.images ?? []).map((img) => (
                    <div key={img.id} style={{ position: "relative" }}>
                      <img
                        src={img.thumb || img.url}
                        alt="photo"
                        style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 6 }}
                      />
                      <button
                        type="button"
                        onClick={() => supprimerImage(editAnimalId, img.id)}
                        style={{
                          position: "absolute", top: 2, right: 2,
                          background: "rgba(0,0,0,0.6)", color: "#fff",
                          border: "none", borderRadius: "50%",
                          width: 20, height: 20, cursor: "pointer", fontSize: 12,
                        }}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  {(association?.animals.find((a) => a.id === editAnimalId)?.images ?? []).length === 0 && (
                    <p style={{ color: "#aaa", fontSize: 13 }}>Aucune photo</p>
                  )}
                </div>
              )}

              {/* Input fichier */}
              <input
                type="file"
                className="animal-form-input"
                accept="image/jpeg,image/png,image/webp"
                multiple={editAnimalId !== null}
                onChange={(e) => {
                  const files = Array.from(e.target.files ?? []);
                  if (editAnimalId !== null) {
                    setFormImages(files);
                  } else {
                    setFormImage(files[0] ?? null);
                  }
                }}
              />

              {/* Aperçu nouvelles images */}
              {editAnimalId === null && formImage && (
                <img
                  src={URL.createObjectURL(formImage)}
                  alt="Aperçu"
                  style={{ marginTop: 8, maxHeight: 120, borderRadius: 6 }}
                />
              )}
              {editAnimalId !== null && formImages.length > 0 && (
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                  {formImages.map((f, i) => (
                    <img
                      key={i}
                      src={URL.createObjectURL(f)}
                      alt={`Aperçu ${i + 1}`}
                      style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 6 }}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="animal-form-actions">
              <button type="button" className="animal-form-btn-annuler" onClick={annulerForm}>
                Annuler
              </button>
              <button type="submit" className="animal-form-btn-save" disabled={formEnvoi}>
                {formEnvoi
                  ? "Enregistrement..."
                  : editAnimalId !== null
                    ? "Enregistrer"
                    : "Ajouter"}
              </button>
            </div>
          </form>
        )}

        {/* ── Grille animaux ── */}
        {association.animals.length === 0 && !formVisible && (
          <p style={{ color: "#aaa", fontSize: "14px" }}>Aucun animal pour le moment.</p>
        )}

        <div className="detail-animaux-grille">
          {association.animals.map((animal) => {

            let photoUrl = "https://placehold.co/400x300?text=Pas+de+photo";
            if (animal.images.length > 0) photoUrl = animal.images[0].url;

            let emoji = "🐱";
            if (animal.species === "Chien") emoji = "🐶";

            let raceOuEspece = animal.species;
            if (animal.breed !== null) raceOuEspece = animal.breed;

            return (
              <div key={animal.id} className="detail-animal-card">

                <Link to={"/animals/" + animal.id} className="detail-animal-photo-wrapper">
                  <img src={photoUrl} alt={animal.name} className="detail-animal-photo" />
                  <span className="detail-animal-statut statut-dispo">
                    {getStatusLabel(animal.status)}
                  </span>
                </Link>

                <div className="detail-animal-infos">
                  <div className="detail-animal-top">
                    <h3 className="detail-animal-nom">
                      <Link to={"/animals/" + animal.id} className="detail-animal-nom-link">{animal.name}</Link>
                    </h3>
                    <span className="detail-animal-espece">{emoji}</span>
                  </div>
                  <p className="detail-animal-race">{raceOuEspece} · {animal.gender}</p>
                  <p className="detail-animal-description">{animal.description}</p>

                  {/* Boutons bénévole (non visibles pour l'association propriétaire) */}
                  {!estAssociationProprietaire() && renderBoutonAnimal(animal)}

                  {/* Boutons modifier / supprimer (association propriétaire uniquement) */}
                  {estAssociationProprietaire() && (
                    <div className="detail-animal-actions-proprio">
                      <button
                        className="btn-animal-edit"
                        onClick={() => ouvrirFormEdit(animal)}
                      >
                        Modifier
                      </button>
                      <button
                        className="btn-animal-delete"
                        onClick={() => supprimerAnimal(animal.id)}
                      >
                        Supprimer
                      </button>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* ===== SECTION DEMANDES REÇUES (visible uniquement pour l'association) ===== */}
      {estAssociationProprietaire() && (
        <div className="detail-demandes">

          <div className="detail-demandes-header">
            <h2>Demandes d'accueil reçues</h2>
            {demandesEnAttente > 0 && (
              <span className="detail-demandes-badge">
                {demandesEnAttente} en attente
              </span>
            )}
          </div>

          <p className="detail-animaux-subtitle">
            {demandesLoading
              ? "Chargement..."
              : demandesRecues.length === 0
                ? "Aucune demande reçue pour le moment"
                : demandesRecues.length === 1
                  ? "1 demande reçue"
                  : demandesRecues.length + " demandes reçues"}
          </p>

          {!demandesLoading && demandesRecues.length === 0 && (
            <p style={{ color: "#aaa", fontSize: "14px", textAlign: "center", padding: "24px 0" }}>
              Les bénévoles peuvent faire des demandes depuis la fiche de chaque animal.
            </p>
          )}

          {!demandesLoading && demandesRecues.length > 0 && (
            <div className="detail-demandes-liste">
              {demandesRecues.map((demande) => {

                const volunteer = demande.volunteer;
                const animal    = demande.animal;

                let photoUrl = "https://placehold.co/80x80?text=?";
                if (animal.images.length > 0) photoUrl = animal.images[0].thumb || animal.images[0].url;

                const peutTraiter = demande.status === "soumise";

                return (
                  <div key={`${demande.volunteerId}-${demande.animalId}`} className="detail-demande-item">

                    <Link to={"/animals/" + animal.id}>
                      <img src={photoUrl} alt={animal.name} className="detail-demande-photo" />
                    </Link>

                    <div className="detail-demande-infos">
                      <Link to={"/volunteer/" + demande.volunteerId} className="detail-demande-benevole-link">
                        {volunteer.firstname} {volunteer.lastname}
                      </Link>
                      <p className="detail-demande-meta">📧 {volunteer.user.email}</p>
                      <p className="detail-demande-meta">📞 {volunteer.user.phone}</p>
                      <p className="detail-demande-meta">🐾 Capacité : {volunteer.capacity}</p>
                      <p className="detail-demande-animal">
                        Pour : <Link to={"/animals/" + animal.id}>{animal.name}</Link>
                      </p>
                    </div>

                    <div className="detail-demande-actions">
                      <span className={"offre-statut " + OFFER_STATUS_CLASS[demande.status]}>
                        {OFFER_STATUS_LABELS[demande.status]}
                      </span>

                      {peutTraiter && (
                        <div className="detail-demande-btns">
                          <button
                            className="btn-accepter"
                            onClick={() => traiterDemande(demande.volunteerId, demande.animalId, "acceptee")}
                            disabled={offerAction}
                          >
                            Accepter
                          </button>
                          <button
                            className="btn-refuser"
                            onClick={() => traiterDemande(demande.volunteerId, demande.animalId, "refusee")}
                            disabled={offerAction}
                          >
                            Refuser
                          </button>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      )}

    </div>
  );
}

export default AssociationDetailPage;
