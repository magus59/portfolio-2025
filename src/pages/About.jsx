import React from "react";
import "../styles/About.css";
import CardComponent from "../components/CardComponent";
import microservices from "../assets/images/diagn3.png";
import saori from "../assets/images/saori.png";


const About = () => {
  return (
    <div className="aboutGlobal">
      <div className="titleAbout">
        <div className="carre"></div>
        <h1>Projets</h1>
      </div>
      <p className="aboutP">
        Découvrez mes projets, reflet de ma passion et de mon expertise en
        développement. Chaque ligne de code raconte une histoire, chaque projet
        est une étape de mon parcours.
      </p>
      <CardComponent
      title="Diagnostic Center"
      spanText="Springboot & JAVA"
      date="Janvier à Juin 2025"
      paragraph="J'ai développé une application web en microservices avec Spring Boot et Java. Elle inclut un dictionnaire médical, la gestion des cas cliniques et une recherche avancée par symptômes. Mon objectif été de rendre l'outil performant, intuitif et utile aux étudiants en médecine."
      imageSrc={microservices}
      navigateTo="/diagnostic"
    />
      <CardComponent
      title="Saori Consulting"
      spanText="Vue js"
      date="Janvier à Février 2024"
      paragraph="J'ai développé une application web pour une future ESN en utilisant Vue.js. L'objectif était de créer un site vitrine pour présenter les services de l'entreprise. J'ai travaillé en étroite collaboration avec le client pour répondre à ses attentes."
      imageSrc={saori}
      link="https://creative-blancmange-d15c81.netlify.app/"
    />
  
    </div>
  );
};

export default About;
