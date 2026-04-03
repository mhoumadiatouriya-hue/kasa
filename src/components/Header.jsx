import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo-link">
          <img src="/images/logo.png" alt="Kasa" className="header-logo" />
        </Link>

        <nav className="header-nav">
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </nav>
      </div>
    </header>
  );
}