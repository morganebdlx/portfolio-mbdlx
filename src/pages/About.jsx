import Photo from "../assets/images/morgane_paysage_web.jpg";

const timeline = [
  ["2015–2017", "Hôtesse de l’air chez China Eastern Airlines, entre Paris et Shanghai."],
  ["2018", "Hôtesse de l’air chez Joon, filiale d’Air France."],
  ["2019", "Passage chez Air France, sur long-courrier."],
  ["Octobre 2024", "Bootcamp Le Wagon à Bordeaux : Ruby on Rails, JavaScript, SQL et Git."],
  ["Début 2025", "Stage chez Inside Therapeutics : développement et mise en production du calculateur de formulation LNP."],
  ["Septembre 2025", "Alternance chez Studio Lab et parcours Intégrateur web d’OpenClassrooms."],
  ["2026", "Portfolio et parcours Intégrateur web OpenClassrooms."],
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-lead">
        <div><p className="projects-kicker">Parcours / Bordeaux</p><h1>À propos<br /><em>de moi.</em></h1>
          <p>Je suis Morgane Bourdillon, développeuse front-end orientée produit. J’intègre des interfaces fidèles aux maquettes, attentives à l’expérience utilisateur et à la cohérence du design system.</p>
          <p>Après plusieurs années comme hôtesse de l’air, j’ai choisi en 2024 de me reconvertir dans le développement web. Je travaille aujourd’hui chez Studio Lab et poursuis le parcours Intégrateur web d’OpenClassrooms.</p>
        </div>
        <img src={Photo} alt="Portrait de Morgane Bourdillon" />
      </section>
      <section className="about-journey"><h2>Mon parcours</h2><div>{timeline.map(([date, text]) => <div className="journey-row" key={date}><span>{date}</span><p>{text}</p></div>)}</div></section>
      <section className="about-approach"><h2>Ma façon de travailler</h2><div><p>Je suis minutieuse dans l’intégration des maquettes et attentive au SEO et à l’accessibilité dès le début d’un projet. Je travaille avec rigueur et je tiens les délais.</p><p>Je souhaite évoluer vers un profil hybride entre développement et produit, avec davantage de gestion de projet et de transmission.</p><h3>Formation</h3><p>Le Wagon — titre RNCP niveau 6, 2024<br />OpenClassrooms — Intégrateur web, en cours</p></div></section>
    </main>
  );
}
import "./About.css";
