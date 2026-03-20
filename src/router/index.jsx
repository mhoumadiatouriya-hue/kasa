import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Logement from "../pages/Logement/Logement";
import MainLayout from "../layouts/MainLayout";

export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}