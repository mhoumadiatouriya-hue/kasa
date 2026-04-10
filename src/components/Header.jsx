import { Link, NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo-link">
          <img src="/images/logo.png" alt="Kasa" className="header-logo" />
        </Link>

        <nav className="header-nav">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">A Propos</NavLink>
        </nav>
      </div>
    </header>
  );
}