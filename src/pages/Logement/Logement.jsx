import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import "./logement.css";

export default function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [error, setError] = useState(false);
  const [currentPicture, setCurrentPicture] = useState(0);

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

  if (error) {
    return <Navigate to="/error" />;
  }

  if (!logement) {
    return null;
  }

  const pictures = logement.pictures || [];
  const totalPictures = pictures.length;

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
      <section className="carousel">
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
            >
              ‹
            </button>

            <button
              type="button"
              className="carousel-button carousel-button-right"
              onClick={showNextPicture}
            >
              ›
            </button>

            <p className="carousel-counter">
              {currentPicture + 1}/{totalPictures}
            </p>
          </>
        )}
      </section>

      <section className="logement-header">
        <div>
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
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= Number(logement.rating) ? "star active" : "star"}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="logement-collapses">
        <details>
          <summary>Description</summary>
          <p>{logement.description}</p>
        </details>

        <details>
          <summary>Équipements</summary>
          <ul>
            {logement.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </details>
      </section>
    </main>
  );
}