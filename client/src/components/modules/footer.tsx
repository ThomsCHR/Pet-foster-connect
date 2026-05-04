import { Link } from "react-router-dom";
import "../../assets/styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      © 2026 Pet Foster Connect — Fait avec ❤️ pour les animaux
      <span className="footer-sep">·</span>
      <Link to="/cgu" className="footer-cgu-link">CGU</Link>
    </footer>
  );
}

export default Footer;
