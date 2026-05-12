import Banner from "../components/Banner";
import Collapse from "../components/Collapse/Collapse";
import "./about.css";

const aboutImage = "/images/apropos.png";

const aboutData = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbateur entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "Nos équipes se tiennent à votre disposition afin de vous fournir une expérience parfaite. Nous restons à votre écoute pour répondre à vos besoins.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Chaque logement respecte les critères de sécurité établis par nos services.",
  },
];

export default function About() {
  return (
    <main className="about">
      <Banner texte="" image={aboutImage} />

      <section className="about-content">
        {aboutData.map((item) => (
          <Collapse
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}
      </section>
    </main>
  );
}