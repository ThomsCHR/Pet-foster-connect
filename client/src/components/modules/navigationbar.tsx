import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../assets/styles/navbar.css";
import type { ConnectedUser } from "../../contexts/AuthContext";

type Props = {
  isLogged: boolean;
  connectedUser: ConnectedUser | null;
};

function NavigationBar({ isLogged, connectedUser }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Détecte si l'utilisateur a scrollé pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Détermine le lien du profil selon le type d'utilisateur
  let profilLink = "/auth";
  if (isLogged) {
    if (connectedUser?.volunteer) {
      profilLink = `/volunteer/${connectedUser.volunteer.id}`;
    } else if (connectedUser?.association) {
      profilLink = `/associations/${connectedUser.association.id}`;
    } else {
      profilLink = "/profil";
    }
  }

  return (
    <>
      <div className="nav-spacer" />

      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

        {/* ===== BARRE PRINCIPALE ===== */}
        <div className="nav-inner">

          {/* Logo */}
          <div className="nav-brand" onClick={() => navigate("/")}>
            <div className="nav-brand-icon">🐾</div>
            <span className="nav-brand-name">
              Pet<span>Foster</span>Connect
            </span>
          </div>

          {/* Liens — cachés sur mobile */}
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
              Accueil
            </NavLink>
            <NavLink to="/animals" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Animaux
            </NavLink>
            <NavLink to="/associations" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Associations
            </NavLink>
          </div>

          {/* Boutons droite — cachés sur mobile */}
          <div className="nav-right">
            {isLogged ? (
              <div className="nav-avatar" onClick={() => navigate(profilLink)}>
                {connectedUser?.volunteer
                  ? connectedUser.volunteer.firstname[0] + connectedUser.volunteer.lastname[0]
                  : connectedUser?.association?.name[0] ?? "?"
                }
              </div>
            ) : (
              <>
                <NavLink to="/auth" className="nav-btn-ghost">Se connecter</NavLink>
                <NavLink to="/register" className="nav-btn-pill">Rejoindre</NavLink>
              </>
            )}
          </div>

          {/* Burger — visible uniquement sur mobile */}
          <button
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>

        </div>

        {/* ===== MENU MOBILE ===== */}
        <div className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : ""}`}>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "mobile-link active" : "mobile-link"} end>
            Accueil
          </NavLink>
          <NavLink to="/animals" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "mobile-link active" : "mobile-link"}>
            Animaux
          </NavLink>
          <NavLink to="/associations" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "mobile-link active" : "mobile-link"}>
            Associations
          </NavLink>

          <div className="mobile-divider" />

          {isLogged ? (
            <NavLink to={profilLink} onClick={() => setIsMenuOpen(false)} className="mobile-link">
              Mon profil
            </NavLink>
          ) : (
            <div className="mobile-auth">
              <NavLink to="/auth" onClick={() => setIsMenuOpen(false)} className="mobile-btn-ghost">
                Se connecter
              </NavLink>
              <NavLink to="/register" onClick={() => setIsMenuOpen(false)} className="mobile-btn-pill">
                Rejoindre
              </NavLink>
            </div>
          )}
        </div>

      </nav>
    </>
  );
}

export default NavigationBar;
