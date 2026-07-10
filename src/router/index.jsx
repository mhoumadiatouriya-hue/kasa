import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About";
import Logement from "../pages/Logement/Logement";
import Error from "../pages/Error";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Router() {
  return (
    <>
    {/* Le Header et le Footer sont affichés sur toutes les pages de l'application. */}
      <Header />
    {/* Définit les différentes routes et le composant à afficher selon l'URL. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Route dynamique : l'identifiant du logement est récupéré grâce au paramètre ":id". */}
        <Route path="/logement/:id" element={<Logement />} />
         {/* Redirige toutes les URL inconnues vers la page d'erreur. */}
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}