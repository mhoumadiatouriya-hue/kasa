import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Logement introuvable");
        }
        return response.json();
      })
      .then((data) => {
        setLogement(data);
      })
      .catch((error) => {
        console.error(error);
        setRedirect(true);
      });
  }, [id]);

  if (redirect) {
    return <Navigate to="/error" />;
  }

  if (!logement) {
    return null;
  }

  return (
    <main>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.location}</p>
    </main>
  );
}