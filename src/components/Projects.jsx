import ProjectCard from "./ProjectCard";
import "./Projects.css";
import taskItDemo from "../assets/video/taskit.mp4";

const projects = [
  { number: "01", title: "Task It", type: "Application Ruby on Rails · 2024", videoSrc: taskItDemo, description: "Une application imaginée pour numériser des listes manuscrites et des rendez-vous. J’ai travaillé sur l’intégration de l’API OpenAI, le traitement asynchrone avec Active Jobs et l’affichage en temps réel avec Turbo Streams.", tags: ["Ruby on Rails", "OpenAI", "Turbo"] },
  { number: "02", title: "Calculateur scientifique", type: "Application web · Inside Therapeutics", description: "Pendant mon stage chez Inside Therapeutics, j’ai développé un calculateur en ligne pour aider les chercheurs à préparer leurs formulations RNA-LNP.", href: "https://insidetx.com/resources/lnp-formulation-design-calculator/", tags: ["HTML", "CSS", "JavaScript", "WordPress"], details: { Objectifs: "Remplacer des calculs manuels par un outil utilisable directement sur le site de l’entreprise.", Compétences: "Calculs et conversions d’unités, modes de saisie, alertes, export des résultats et partage par lien prérempli. Travail avec le Head of Design et les chercheurs, avec GitHub et Trello pour le suivi.", Résultat: "Le calculateur est en production et utilisé par les chercheurs et les clients de l’entreprise.", Perspectives: "Ajouter des tests automatisés sur les calculs et un historique des formulations." } },
  { number: "03", title: "Kaza", type: "Formation · Application React", description: "Une plateforme de location entre particuliers développée en React à partir de maquettes Figma, sur desktop et mobile.", tags: ["React", "Vite", "React Router", "SCSS"], details: { Objectifs: "Construire une application monopage responsive avec des composants réutilisables et un routage complet.", Compétences: "Découpage en composants, routes dynamiques, page 404 et gestion de l’état local avec les hooks React.", Résultat: "Une navigation sans rechargement et une interface adaptée aux différents écrans.", Perspectives: "Remplacer le fichier JSON par une API, ajouter des tests unitaires et réaliser un audit d’accessibilité." } },
  { number: "04", title: "Nina Carducci", type: "Formation · SEO et performance", description: "Optimisation du site d’une photographe bordelaise : audit, correction de la galerie et amélioration du référencement, de la performance et de l’accessibilité.", tags: ["HTML", "CSS", "JavaScript", "jQuery", "Lighthouse"], details: { Compétences: "Images WebP, chargement différé, minification, métadonnées et données structurées JSON-LD.", Résultat: "Scores Lighthouse après optimisation : performance 99, accessibilité 91, bonnes pratiques 100 et SEO 100.", Perspectives: "Améliorer encore l’accessibilité et remplacer jQuery par du JavaScript natif." } },
  { number: "05", title: "Studio Lab", type: "Alternance · Sites clients", description: "Chez Studio Lab, je développe des sites pour des clients variés, principalement en e-commerce, à partir de maquettes Figma.", tags: ["Shopify", "Liquid", "Hydrogen", "WordPress", "Next.js"], details: { Objectifs: "Livrer des sites adaptés aux maquettes et aux outils de gestion des clients.", Réalisations: "Fhore, Kosmoteros, Efflorescence et The French Method ; conception et intégration de la page Studio photo et réalisation de la page événement Point of View.", Compétences: "Intégration multi-CMS, e-commerce headless, design system, maintenance et suivi des retours clients.", Perspectives: "Mesurer les performances des sites et documenter le design system de Fhore." }, links: [{ label: "Fhore", href: "https://fhore.fr" }, { label: "Kosmoteros", href: "https://kosmoteros.fr" }, { label: "Efflorescence", href: "https://studio-efflorescence.com" }, { label: "The French Method", href: "https://thefrench-method.com" }] },
];

const Projects = () => (
  <section className="projects-section" id="projects" aria-labelledby="projects-title">
    <div className="projects-heading">
      <p className="projects-kicker">Portfolio / Développement web</p>
      <h1 id="projects-title">Projets<span> / </span><em>Archives</em></h1>
      <p>Une sélection de projets web, réalisés en formation et en entreprise.</p>
    </div>
    <div className="archive-layout">
      <nav className="archive-index" aria-label="Index des projets">
        <p>Projets</p>
        {projects.map((project) => <a key={project.title} href={`#projet-${project.number}`}>{project.title}</a>)}
      </nav>
      <div className="archive-content">
        <div className="archive-overview">
          <a className="archive-tile archive-tile-task" href="#projet-01">
            <video src={taskItDemo} muted playsInline preload="metadata" aria-hidden="true" />
            <span><strong>Task It</strong><small>Application web / Ruby on Rails</small></span>
          </a>
          <div className="archive-overview-title">Projets<br /><em>choisis</em></div>
          <a className="archive-tile archive-tile-calculator" href="#projet-02">
            <span className="archive-calculator-art" aria-hidden="true"><span>Calculateur</span><em>scientifique</em></span>
            <span><strong>Calculateur scientifique</strong><small>Application web / JavaScript</small></span>
          </a>
          <p className="archive-note">Une sélection de projets réalisés en formation, en équipe et en entreprise.</p>
        </div>
        <div className="archive-divider"><span>Les projets en détail</span><span>Portfolio / Développement web</span></div>
        <div className="projects-container">
        {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
