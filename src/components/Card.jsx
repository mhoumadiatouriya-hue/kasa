import { Link } from "react-router-dom";
import "./card.css";

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card-image" />
      <p className="card-title">{title}</p>
    </Link>
  );
}