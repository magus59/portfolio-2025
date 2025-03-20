import React, { useEffect } from "react";
import "../styles/Home.css";
// import yahia from "../assets/images/y.svg";
import telecharger from "../assets/images/telecharger.png";
import github from "../assets/images/git.svg";
import lin from "../assets/images/in.svg";
import insta from "../assets/images/insta.svg";
import gsap from "gsap";

const Home = () => {


  useEffect(() => {
    gsap.fromTo(
      ".img",
      { x: -200 },
      {
        x: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".img",
          start: "top 100%",
        },
      }
    );

  }, []);

  return (
    <>
      <div className="global">
        <div className="cadre"></div>
        <div className="img">
          <div className="rond"></div>
          {/* <img id="yahia" src={yahia} alt="photos yahia" /> */}
          <div className="name">
            <p className="mabchour">Yahia Mabchour</p>
            <div className="line"></div>
            <h2 className="dev">Développeur</h2>
          </div>
          <div className="icon">
            <img id="lin" src={lin} alt="icon linkedin" />
            <img id="github" src={github} alt="icon github" />
            <img id="insta" src={insta} alt="icon insta" />
          </div>
        </div>
        <div className="img-btn">
          <h2 className="card-title1">Hello</h2>
          <h3 className="card-title2">Mon parcours et mes projets</h3>
          <div className="btn">
            <button className="cv">
              <img
                id="telecharger"
                src={telecharger}
                alt="bouton de téléchargement"
              />
              CV
            </button>
            <button className="projets">PROJETS</button>
          </div>
          <p className="hello">
            Passionné par la data et féru de développement web, je tisse un lien
            harmonieux entre la logique des chiffres et la poésie du code. Mon
            parcours de formation est le catalyseur d'une expertise à la croisée
            de l'analytique pointue et de la créativité algorithmique. En
            unissant ces forces, je façonne des expériences digitales
            inoubliables, où chaque ligne de code raconte une histoire
            captivante.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
