import { Link } from "react-router-dom";
import "../../assets/styles/home.css";

function HomePage() {
  return (
    <div className="home-page">

      {/* ===== HERO ===== */}
      <section className="hero">
        <h1>Trouvez une famille d'accueil<br />pour nos animaux 🐾</h1>
        <p>
          Pet Foster Connect met en relation les refuges et associations avec
          des familles d'accueil bienveillantes, le temps que nos animaux
          trouvent leur foyer définitif.
        </p>
        <div className="hero-buttons">
          <Link to="/animals" className="btn-white">Voir les animaux</Link>
          <Link to="/register" className="btn-outline-white">Devenir famille d'accueil</Link>
        </div>
      </section>

      {/* ===== CHIFFRES CLÉS ===== */}
      <section className="stats">
        <div className="stat-card">
          <div className="stat-number">240+</div>
          <div className="stat-label">Animaux aidés</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">85</div>
          <div className="stat-label">Familles d'accueil</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">30</div>
          <div className="stat-label">Associations partenaires</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">98%</div>
          <div className="stat-label">Animaux replacés</div>
        </div>
      </section>

      {/* ===== COMMENT ÇA MARCHE ===== */}
      <section className="how-it-works">
        <h2>Comment ça marche ?</h2>
        <p className="section-subtitle">Simple et rapide en 3 étapes</p>

        <div className="steps">

          <div className="step-card">
            <div className="step-icon">📝</div>
            <h3>1. Créez votre profil</h3>
            <p>Inscrivez-vous en tant que famille d'accueil ou association en quelques minutes.</p>
          </div>

          <div className="step-card">
            <div className="step-icon">🔍</div>
            <h3>2. Trouvez un animal</h3>
            <p>Parcourez les animaux disponibles et trouvez celui qui correspond à votre situation.</p>
          </div>

          <div className="step-card">
            <div className="step-icon">🏠</div>
            <h3>3. Accueillez-le</h3>
            <p>Prenez contact avec l'association et accueillez l'animal chez vous temporairement.</p>
          </div>

        </div>
      </section>

      {/* ===== POURQUOI NOUS REJOINDRE ===== */}
      <section className="why-us">
        <h2>Pourquoi nous rejoindre ?</h2>
        <p className="section-subtitle">Des avantages pour tout le monde</p>

        <div className="benefits">

          <div className="benefit-item">
            <div className="benefit-icon">❤️</div>
            <h4>Sauvez des vies</h4>
            <p>Chaque famille d'accueil libère une place dans un refuge et donne une chance à un animal.</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">🤝</div>
            <h4>Réseau de confiance</h4>
            <p>Toutes les associations et familles sont vérifiées avant d'accéder à la plateforme.</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">📱</div>
            <h4>Simple à utiliser</h4>
            <p>Une interface claire pour gérer les demandes, les animaux et les contacts.</p>
          </div>

        </div>
      </section>

      {/* ===== APPEL À L'ACTION ===== */}
      <section className="cta-section">
        <h2>Prêt à faire une différence ?</h2>
        <p>Rejoignez notre communauté et aidez nos animaux à trouver un foyer temporaire.</p>
        <Link to="/register" className="btn-green">Commencer maintenant</Link>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        © 2025 Pet Foster Connect — Fait avec ❤️ pour les animaux
      </footer>

    </div>
  );
}

export default HomePage;
