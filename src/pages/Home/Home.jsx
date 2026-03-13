import Banner from "../../components/Banner";
import Card from "../../components/Card";
import logements from "../../assets/logements.json";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}