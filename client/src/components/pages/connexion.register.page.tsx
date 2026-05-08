import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiFetch } from "../../lib/api";
import { useAuth } from "../../contexts/AuthContext";
import "../../assets/styles/register.css";

// Valeurs de l'enum Region (Prisma)
const REGIONS = [
  { value: "Auvergne_Rhone_Alpes",      label: "Auvergne-Rhône-Alpes" },
  { value: "Bourgogne_Franche_Comte",   label: "Bourgogne-Franche-Comté" },
  { value: "Bretagne",                  label: "Bretagne" },
  { value: "Centre_Val_de_Loire",       label: "Centre-Val de Loire" },
  { value: "Corse",                     label: "Corse" },
  { value: "Grand_Est",                 label: "Grand Est" },
  { value: "Hauts_de_France",           label: "Hauts-de-France" },
  { value: "Ile_de_France",             label: "Île-de-France" },
  { value: "Normandie",                 label: "Normandie" },
  { value: "Nouvelle_Aquitaine",        label: "Nouvelle-Aquitaine" },
  { value: "Occitanie",                 label: "Occitanie" },
  { value: "Pays_de_la_Loire",          label: "Pays de la Loire" },
  { value: "Provence_Alpes_Cote_Azur",  label: "Provence-Alpes-Côte d'Azur" },
  { value: "Guadeloupe",                label: "Guadeloupe" },
  { value: "Martinique",                label: "Martinique" },
  { value: "Guyane",                    label: "Guyane" },
  { value: "La_Reunion",                label: "La Réunion" },
  { value: "Mayotte",                   label: "Mayotte" },
];

// Type de compte sélectionnable
type TypeCompte = "benevole" | "association";

function RegisterPage() {
  const navigate = useNavigate();
  const { refreshUser } = useAuth();

  // Quel type de compte ?
  const [type, setType] = useState<TypeCompte>("benevole");
  const [errors, setErrors] = useState<string[]>([]);

  // ── Champs communs (model Users) ──
  const [email, setEmail]           = useState("");
  const [password, setPassword]     = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone]           = useState("");
  const [address, setAddress]       = useState("");
  const [region, setRegion]         = useState("");
  const [description, setDescription] = useState("");

  // ── Champs bénévole (model Volunteer) ──
  const [firstname, setFirstname]   = useState("");
  const [lastname, setLastname]     = useState("");
  const [capacity, setCapacity]     = useState("");

  // ── Champs association (model Association) ──
  const [nomAsso, setNomAsso]       = useState("");
  const [siret, setSiret]           = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors([]);

    const body = {
      type,
      email,
      password,
      confirmPassword,
      phone,
      address,
      region,
      description,
      ...(type === "benevole" ? { firstname, lastname, capacity } : { nomAsso, siret }),
    };

    try {
      const res = await apiFetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data.details) {
          const messages = Object.values(data.details as Record<string, string[]>).flat();
          setErrors(messages.length > 0 ? messages : [data.error ?? "Erreur lors de l'inscription"]);
        } else {
          setErrors([data.error ?? "Erreur lors de l'inscription"]);
        }
        return;
      }
      await refreshUser();
      navigate("/");
    } catch {
      setErrors(["Erreur réseau, veuillez réessayer"]);
    }
  }

  return (
    <div className="register-page">
      <div className="register-inner">

        <h1 className="register-title">Créer un compte</h1>
        <p className="register-subtitle">Rejoignez la communauté Pet Foster Connect</p>

        {errors.length > 0 && (
          <ul style={{ color: "red", marginBottom: "1rem", paddingLeft: "1.2rem" }}>
            {errors.map((msg, i) => <li key={i}>{msg}</li>)}
          </ul>
        )}

        {/* ===== CHOIX DU TYPE ===== */}
        <div className="register-type-choix">

          <button
            type="button"
            className={`type-card ${type === "benevole" ? "selected" : ""}`}
            onClick={() => setType("benevole")}
          >
            <span className="type-card-icon">🙋</span>
            <span className="type-card-label">Bénévole</span>
            <span className="type-card-desc">Je veux accueillir des animaux</span>
          </button>

          <button
            type="button"
            className={`type-card ${type === "association" ? "selected" : ""}`}
            onClick={() => setType("association")}
          >
            <span className="type-card-icon">🏢</span>
            <span className="type-card-label">Association</span>
            <span className="type-card-desc">Je représente une structure</span>
          </button>

        </div>

        {/* ===== FORMULAIRE ===== */}
        <form className="register-form" onSubmit={handleSubmit}>

          {/* ── Infos spécifiques au type ── */}
          {type === "benevole" ? (
            <>
              <p className="form-section-title">Informations personnelles</p>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Prénom</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Jean"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Nom</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Dupont"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Capacité d'accueil
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="ex : 1 chien, 2 chats max"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  required
                />
              </div>
            </>
          ) : (
            <>
              <p className="form-section-title">Informations de l'association</p>

              <div className="form-group">
                <label className="form-label">Nom de l'association</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="SPA de Lyon"
                  value={nomAsso}
                  onChange={(e) => setNomAsso(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Numéro SIRET</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="12345678901234"
                  maxLength={14}
                  value={siret}
                  onChange={(e) => setSiret(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          {/* ── Infos communes (Users) ── */}
          <p className="form-section-title">Compte</p>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="jean@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Confirmation</label>
              <input
                type="password"
                className="form-input"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <p className="form-section-title">Coordonnées</p>

          <div className="form-group">
            <label className="form-label">Téléphone</label>
            <input
              type="tel"
              className="form-input"
              placeholder="06 00 00 00 00"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Adresse</label>
            <input
              type="text"
              className="form-input"
              placeholder="12 rue des Lilas, 69001 Lyon"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Région</label>
            <select
              className="form-select"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              required
            >
              <option value="">-- Sélectionner une région --</option>
              {REGIONS.map((r) => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              Description <span>(optionnel)</span>
            </label>
            <textarea
              className="form-textarea"
              placeholder={
                type === "benevole"
                  ? "Parlez-nous de vous, de votre logement, de vos animaux..."
                  : "Décrivez votre association, vos missions..."
              }
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-register">
            Créer mon compte
          </button>

        </form>

        <p className="register-login-link">
          Déjà un compte ? <Link to="/auth">Se connecter</Link>
        </p>

      </div>
    </div>
  );
}

export default RegisterPage;
