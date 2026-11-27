import "./Intro.css";
import { Link } from "react-router-dom";

const Intro = () => (
  <section className="intro" aria-labelledby="intro-title">
    <div className="intro-heading"><span>Développement web / Bordeaux</span><h2 id="intro-title">À propos<br /><em>de moi.</em></h2></div>
    <div className="intro-editorial-note"><span>Développement web &amp; design</span><p>De l’idée<br /><em>au projet.</em></p></div>
    <div className="intro-right">
      <div className="intro-copy">
        <p>Je suis Morgane Bourdillon, développeuse front-end orientée produit. J’intègre des interfaces fidèles aux maquettes, en tenant compte de l’expérience utilisateur et de la cohérence du design system.</p>
        <p>Après une carrière dans l’aérien, j’ai choisi de me reconvertir dans le développement web. Je travaille aujourd’hui en alternance chez Studio Lab, en parallèle du parcours Intégrateur web d’OpenClassrooms.</p>
        <p className="quote">« De l’idée sur papier au site en production. »</p>
      </div>
      <div className="call-to-action">
        <Link className="button button-primary" to="/projets">Voir mes projets</Link>
        <a className="text-link" href="mailto:morganebourdillon@gmail.com">Me contacter</a>
        <Link className="text-link" to="/a-propos">Mon parcours</Link>
      </div>
    </div>
  </section>
);

export default Intro;
