import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      
        <div className="nombre-header">
          <h1>NOMBRE EMPRESA</h1>
        </div>
    
      <nav className="navbar">
        <li className="lista">
        <Link to="/home">HOME</Link>
        <Link to="/skincare">SKINCARE</Link>
        <Link to="/Acercade">ACERCA DE</Link>
        <Link to="/contacto">CONTACTO</Link>
        <Link to="/Turnos">TURNOS</Link>
        </li>
      </nav>
    </>
  );
};

export default Header;
