
## Test Technique – Studio Lab

# Présentation
Ce projet est un test technique réalisé pour Studio Lab. Il a pour but de démontrer mes compétences en développement web, en respectant les consignes fournies dans le cahier des charges.

# Déploiement sur GitHub Pages
Première fois que je fais un déploiement GitHub Pages, c'est une solution d'hébergement gratuite temporaire qui permet d'avoir rapidement le résultat final avec les intéractions, animations et responsive. Voici le lien : https://morganebdlx.github.io/studiolab-test/

# Fonctionnalités
- Le composant Header est en transparence avec le Hero.
- Le Hero contient une image centrée qui s'agrandit et un texte qui apparaît après un certain temps.
- Le logo, le menu burger, et la navigation dans le Header sont sticky.
- Une animation du menu se déclenche au clic pour déployer la navigation.
- Une section de texte avec plusieurs tailles et un bouton "en savoir plus" contenant une flèche via fontawesome.
- Un composant avec une intro, un bouton "en savoir plus" similaire à celui de la section précédente, puis 5 cartes avec des animations au hover.
- Un footer simple en signature.

# Stack technique
Langage : JavaScript |
Framework : React |
Outils : Vite, npm, Git, zsh, fontAwesome, googleFont


# Choix techniques et hypothèses
J’ai choisi React car je suis en train de me former seule sur ce framework. Cela m’a permis de renforcer mes compétences sur la gestion des composants, la structure d’un projet moderne avec Vite, et l’organisation des fichiers CSS qui sont associés à chaque composant.


# Structure du projet
```
├── public/
├── src/
│   ├── assets/
│   │   └── images
│   ├── components/
│   │   ├── CardsSection.css
│   │   ├── CardsSection.jsx
│   │   ├── Footer.css
│   │   ├── Footer.jsx
│   │   ├── Header.css
│   │   ├── Header.jsx
│   │   ├── Hero.css
│   │   ├── Hero.jsx
│   │   ├── TextSection.css
│   │   ├── TextSection.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── Index.css
│   ├── main.jsx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```


## Remerciements
Merci à Studio Lab pour ce test challengeant.
Je reste disponible pour toute question ou pour détailler certains choix techniques.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# studiolab-test
