import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projects-container">
        <ProjectCard
          title="Task it"
          videoSrc="/src/assets/video/taskit.mp4"
          description="J’ai eu l’idée de Task It, une application web en Ruby on Rails conçue pour simplifier la vie quotidienne. On a tous des to-do lists manuscrites qui traînent — sur le frigo, dans un sac, ou sur le bureau. Pareil pour les rappels de rendez-vous, souvent griffonnés sur des petits post-it par le dentiste ou le médecin.

 L’objectif : pouvoir scanner une to-do list ou une carte de rendez-vous écrite à la main, et les retrouver en version numérique dans son téléphone — idéal pour ne plus oublier les courses ou un rendez-vous chez le dentiste !

Et voici comment :
> Au départ, j’ai réalisé un premier design très rapide sur Figma, puis je me suis surtout concentrée sur la partie back-end :

OCR & Intelligence Artificielle :
 > J’ai intégré l’API d’OpenAI pour extraire les tâches et rappels à partir des images. Pour cela, j’ai mis en place deux Services Rails distincts :
- un pour l’analyse des to-do lists,
- un autre pour les rappels avec dates et heures.
👉 En Rails, un service est une classe dédiée à une logique métier complexe, séparée des modèles et des contrôleurs — ici, il contient le prompt envoyé à OpenAI et le traitement de la réponse.

Traitement asynchrone avec les jobs :
 > J’ai utilisé des Active Jobs pour lancer le traitement OCR en arrière-plan.
👉 Un job en Rails permet d’exécuter du code en tâche de fond, sans bloquer l’expérience utilisateur — utile pour analyser une image ou afficher un loader.

Turbo et mise à jour en temps réel :
 Grâce à Turbo Stream, les résultats s’affichent instantanément dès qu’ils sont disponibles, sans rechargement de page.

Helpers :
 > J’ai aussi créé des Helpers, pour afficher dynamiquement une image selon la catégorie d’une liste — un petit détail qui rend l’interface plus intuitive et cohérente.

Le projet a été mis en ligne sur Heroku (l’app n’est plus accessible aujourd’hui).

Un grand merci à mes coéquipiers :
Donovan Trigant pour le front-end,
Thibault Charron (aka Thirbo) pour tout ce qui est Turbo & interactions,
JB pour la gestion de projet."
        />
        <ProjectCard
          title="Calculateur scientifique"
          videoSrc="/src/assets/video/calculateur-insidetx.mp4"
          description="..."
        />
      </div>
    </section>
  );
};

export default Projects;
