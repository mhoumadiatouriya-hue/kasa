import { useState } from "react";
import "./Carousel.css";

function Carousel({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultiplePictures = pictures.length > 1;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={title}
        className="carousel__image"
      />

      {hasMultiplePictures && (
        <>
          <button
            type="button"
            className="carousel__button carousel__button--previous"
            onClick={goToPrevious}
            aria-label="Image précédente"
          >
            ❮
          </button>

          <button
            type="button"
            className="carousel__button carousel__button--next"
            onClick={goToNext}
            aria-label="Image suivante"
          >
            ❯
          </button>

          <p className="carousel__counter">
            {currentIndex + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Carousel;