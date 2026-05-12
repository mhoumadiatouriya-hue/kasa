import { Link } from "react-router-dom";
import "./error.css";

export default function Error() {
  return (
    <main className="error-page">
      <h1 className="error-title">404</h1>

      <p className="error-message">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>

      <Link to="/" className="error-link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}