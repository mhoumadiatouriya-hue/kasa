import "./banner.css";

export default function Banner({ texte, image }) {
  return (
    <section className="banner">
      <img src={image} alt="" className="banner-image" />

      {texte && <h1 className="banner-title">{texte}</h1>}
    </section>
  );
}