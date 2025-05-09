import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Portfolio</h1>
        <h6 className="hero-description">
        Bienvenue dans mon portfolio !
        <br />
        Vous pourrez y découvrir mes projets et en apprendre davantage sur moi, sur mes compétences et sur mon expérience.
        Je suis un développeuse, j'aime la création de solutions innovantes, j'aime être en équipe pour créer un projet,
        être dans une équipe passionnée, passionnante, inspirée et inspirante.
        <br />
        De l'idée sur papier au site en production.
        <br />
        Je recherche une alternance ou bien ma première expérience, dans l'idéal une agence digitale.
        <br />
        N'hésitez pas à parcourir mon travail et à me contacter pour toute question ou opportunité !
        </h6>
      </div>
    </div>
  );
};

export default Hero;
