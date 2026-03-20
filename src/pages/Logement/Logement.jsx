import { useParams, Navigate } from "react-router-dom";
import logements from "../../assets/logements.json";

export default function Logement() {
  const { id } = useParams();

  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/error" />;
  }

  return (
    <main>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
    </main>
  );
}