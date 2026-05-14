.carousel {
  position: relative;
  width: 100%;
  height: 415px;
  border-radius: 25px;
  overflow: hidden;
}

.carousel__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel__button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: white;
  font-size: 80px;
  cursor: pointer;
  z-index: 2;
  padding: 0 20px;
}

.carousel__button--previous {
  left: 0;
}

.carousel__button--next {
  right: 0;
}

.carousel__counter {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 18px;
  font-weight: 500;
}