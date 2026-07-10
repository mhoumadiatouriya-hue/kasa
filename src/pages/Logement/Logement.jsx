import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import "./logement.css";

export default function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [error, setError] = useState(false);
  const [currentPicture, setCurrentPicture] = useState(0);

  // On va récupérer les données du logement correspondant à l'identifiant présent dans l'URL.
  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Logement introuvable");
        }

        return response.json();
      })
      .then((data) => setLogement(data))
      .catch(() => setError(true));
  }, [id]);

  // On redirige vers la page 404 si l'API ne trouve pas le logement demandé.
  if (error) {
    return <Navigate to="/404" replace />;
  }

  if (!logement) {
    return null;
  }

  const pictures = logement.pictures || [];
  const totalPictures = pictures.length;
  
  // Navigation circulaire : depuis la première image, on revient à la dernière,
  // et depuis la dernière, on revient à la première.
  const showPreviousPicture = () => {
    setCurrentPicture((prevIndex) =>
      prevIndex === 0 ? totalPictures - 1 : prevIndex - 1
    );
  };

  const showNextPicture = () => {
    setCurrentPicture((prevIndex) =>
      prevIndex === totalPictures - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="logement">
      <section className="carousel" aria-label="Galerie photos du logement">
        <img
          src={pictures[currentPicture]}
          alt={logement.title}
          className="carousel-image"
        />

        {totalPictures > 1 && (
          <>
            <button
              type="button"
              className="carousel-button carousel-button-left"
              onClick={showPreviousPicture}
              aria-label="Image précédente"
            >
              ❮
            </button>

            <button
              type="button"
              className="carousel-button carousel-button-right"
              onClick={showNextPicture}
              aria-label="Image suivante"
            >
              ❯
            </button>

            <p className="carousel-counter">
              {currentPicture + 1}/{totalPictures}
            </p>
          </>
        )}
      </section>

      <section className="logement-header">
        <div className="logement-info">
          <h1>{logement.title}</h1>

          <p className="logement-location">{logement.location}</p>

          <div className="logement-tags">
            {logement.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="host-rating">
          <div className="host">
            <p>{logement.host.name}</p>

            <img
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>

          <div
            className="rating"
            aria-label={`Note ${logement.rating} sur 5`}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={
                  star <= Number(logement.rating)
                    ? "star active"
                    : "star"
                }
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="logement-collapses">
        <Collapse
          title="Description"
          content={logement.description}
        />

        <Collapse
          title="Équipements"
          content={logement.equipments.map((equipment) => (
            <span key={equipment}>{equipment}</span>
          ))}
        />
      </section>
    </main>
  );
}