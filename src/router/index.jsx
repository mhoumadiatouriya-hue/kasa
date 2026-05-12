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
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}