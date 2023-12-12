import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Skincare from "../pages/skincare";
import Acercade from "../pages/Acercade";
import Contacto from "../pages/Contacto";
import Turnos from "../pages/Turnos";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skincare" element={<Skincare />} />
      <Route path="/acercade" element={<Acercade />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/turnos" element={<Turnos/>} />
    </Routes>
  );
};

export default Router;
