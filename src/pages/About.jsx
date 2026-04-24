import Banner from "../components/Banner";
import "./about.css";

const aboutImage = "/images/apropos.png";

export default function About() {
  return (
    <main className="about">
      <Banner texte="" image={aboutImage} />

      <section className="about-content">
        <div className="about-item">Fiabilité</div>
        <div className="about-item">Respect</div>
        <div className="about-item">Service</div>
        <div className="about-item">Sécurité</div>
      </section>
    </main>
  );
}