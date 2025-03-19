import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavbarComponent.css";
import burgerMenu from "../assets/images/burger-menu.svg";
const NavbarComponent = () => {
  return (
    <>
      <nav>
        <div className="name-carre">
          <div className="carre"></div>
          <h2 id="ym">Yahia Mabchour</h2>
        </div>
        <div>
          <Link to="/">A propos de moi</Link>
          <Link to="/about">Projets</Link>
          <Link to="/about">Technos</Link>
          <Link to="/about">Contact</Link>
        </div>
      </nav>
      <div className="name-carre2">
          <div className="carre"></div>
          <h2 id="ym">Yahia Mabchour</h2>
        </div>
      <img id="burgerMenu" src={burgerMenu} alt="le menu burger" />
    </>
  );
};

export default NavbarComponent;
