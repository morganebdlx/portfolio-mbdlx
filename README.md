# Portfolio — Morgane Bourdillon

Mon portfolio de développeuse web : une présentation de mon parcours et une sélection de projets réalisés en formation et en entreprise.

## Pages

| Route        | Contenu                                                        |
| ------------ | -------------------------------------------------------------- |
| `/`          | Accueil : présentation, projets mis en avant, stack technique  |
| `/projets`   | Tous les projets en détail (objectifs, compétences, résultats) |
| `/a-propos`  | Parcours, façon de travailler et formation                     |

## Stack

- [React 19](https://react.dev)
- [Vite 6](https://vite.dev)
- [React Router 7](https://reactrouter.com) pour la navigation
- [React Icons](https://react-icons.github.io/react-icons/) pour les icônes
- CSS natif, un fichier par composant
- ESLint pour le lint

## Lancer le projet

Il faut Node.js 18 ou une version plus récente.

```bash
npm install
npm run dev
```

Le site est ensuite accessible sur http://localhost:5173.

## Scripts

| Commande          | Rôle                                         |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Serveur de développement avec rechargement   |
| `npm run build`   | Build de production dans `dist/`             |
| `npm run preview` | Sert le build de production en local         |
| `npm run lint`    | Vérifie le code avec ESLint                  |

## Structure

```
src/
├── assets/       images et vidéos
├── components/   composants (Header, Footer, Hero, Projects…) et leur CSS
├── pages/        pages associées aux routes (Home, About, ProjectsPage)
├── App.jsx       définition des routes
├── main.jsx      point d'entrée
└── index.css     styles globaux
```

Les projets affichés sur la page `/projets` sont définis dans le tableau `projects` de [src/components/Projects.jsx](src/components/Projects.jsx).

## Déploiement

`npm run build` génère un site statique dans `dist/`, à déposer sur l'hébergement.

Comme le site utilise des routes côté client, l'hébergement doit renvoyer `index.html` pour toutes les URL. Sinon, recharger `/projets` ou `/a-propos` donne une erreur 404.
