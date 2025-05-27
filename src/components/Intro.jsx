import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <h1>Bienvenue</h1>
        <h2>Portfolio 2025</h2>
      </div>
      <div className="intro-right">
        <div>
          <p>
            Ici vous êtes dans <strong>mon univers</strong>, je vais vous parler de ce que <strong>j’ai fait</strong>, ce que <strong>je fais</strong>, mais aussi qui <strong>je suis</strong>.
          </p>
          <p>
            Vous pourrez y <strong>découvrir mes projets</strong>, en savoir plus <strong>mes compétences</strong> et sur <strong>mon expérience</strong>.
          </p>
          <p>
            J'aime la <strong>création de solutions innovantes</strong>, <strong>être en équipe</strong> pour créer un projet : dans <strong>une équipe passionnée, passionnante, inspirée et inspirante</strong>.
          </p>
          <p>
            <em>"De l'idée sur papier au site en production."</em>
          </p>
          <p>
            Je recherche <strong>une alternance</strong> ou bien <strong>ma première expérience</strong>, dans l'idéal une agence digitale.
          </p>
          <p>
            N'hésitez pas à <strong>parcourir mon travail</strong> et à <strong>me contacter</strong> pour toute question ou opportunité !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
