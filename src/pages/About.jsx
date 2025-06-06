import "./About.css";
import { PiHandSwipeLeft } from "react-icons/pi";
import Photo from "../assets/images/photoMBL.png";

export default function About() {

  return (
      <div className="about-container">
        <div className="timeline">
        <section className="timeline-item intro-about">
        <h2 className="intro-title">Présentation</h2>
          <div className="intro-content">
            <div className="intro-text">
              <p><strong>Nom :</strong> Bourdillon</p>
              <p><strong>Prénom :</strong> Morgane</p>
              <p><strong>Âge :</strong> 33 ans</p>
              <p><strong>Localisation :</strong> Bordeaux, France</p>
              <p>En reconversion professionnelle voici mon histoire...</p>
            </div>
            <div className="intro-photo">
              <img src={Photo} alt="Morgane Bourdillon" />
            </div>
          </div>
        </section>
        <section className="timeline-item">
          <h2>2017</h2>
          <p>Après deux années passées au sein de China Eastern Airlines, à vivre dans mes valises entre Paris et Shanghai, je ressens le besoin de changement. Une belle aventure, riche culturellement, mais épuisante et loin de mes repères. Je décide alors de rentrer en France, avec l’envie de continuer à voler, mais dans un cadre plus familier.
          C’est à ce moment-là qu’Air France annonce l’ouverture d’une nouvelle filiale low-cost dédiée aux Millennials : Joon. Je postule.
          Presque au même moment, Transavia (également dans le groupe AF-KLM) lance une campagne de recrutement. Je postule là aussi.
          Je suis convoquée aux entretiens pour les deux compagnies. Chez Joon, je vais jusqu’au bout du processus, mais malheureusement, aucune place n’est disponible pour la première promotion des Sade (les formations de sécurité et sauvetage).
          La fin d’année approche. Transavia m’appelle… mais pas qu’eux.</p>
        </section>

        <section className="timeline-item">
          <h2>2018</h2>
          <p>Je signe chez Joon le jour de mon anniversaire, le 8 janvier. Ca y est j'ai un pied chez Air France : le rêve de toute une vie se réalise. Let's go ! Quelle aventure ! Participer aux premiers vols d’une nouvelle compagnie aérienne, être là pour les inaugurations, faire partie des "anciennes" en quelques mois, transmettre avec pédagogie aux nouvelles recrues, et surtout continuer d’apprendre. Je découvre l’Europe, mais aussi des destinations plus lointaines commeLe Caire, Mumbai, Le Cap ou encore Les Seychelles. Le rythme est intense, low-cost oblige : épuisant, mais galvanisant. Une super ambiance, une vraie solidarité entre collègues. Et puis un jour, on apprend qu’un nouveau PDG prend la tête d'AF-KLM et Joon c'est pas son truc... </p>
        </section>

        <section className="timeline-item">
          <h2>2019</h2>
          <p>"On ferme Joon et on intégre tout le monde chez Air France", cet article dans le Figaro je le lis entre deux escales de moyen-courrier. L’euphorie gagne tout mon équipage : le rêve continue. L’été suivant, nous passons officiellement chez Air France. Je choisis le long-courrier. Je porte enfin l’uniforme Air France. Je suis un membre à part entière de cette compagnie prestigieuse. Mais l’intégration n’a pas toujours été simple. Je ne suis plus "l’ancienne", mais "la petite Joonette", "la Jooneuse"... Il a fallu faire ses preuves, gagner sa place, se faire accepter. Et puis, avec le temps, les étiquettes disparaissent. Je savoure enfin le Graal tant attendu, après tant d’années à galérer pour intégrer une compagnie française. Mais la fête fut de courte durée…</p>
        </section>

        <section className="timeline-item">
          <h2>202O</h2>
          <p>202O… vous voyez où je veux en venir. Le Covid frappe. Le rêve s’interrompt brutalement. Le confinement, la peur de ramener “ça” à la maison. Les vols de rapatriement, les missions pour aller chercher des masques. Puis le déconfinement, les vols masqués, gantés, parfois même visière sur le nez. Le lien avec les passagers devient difficile : on ne s’entend plus, on garde nos distances, on fait la police des gestes barrières, on a peur… Et pourtant, paradoxalement, le confinement m’a fait du bien. Mon corps se repose enfin. Je redécouvre ce que signifie un rythme normal, être là lors des événements familiaux et amicaux mais surtout l'importance que ça a pour mon entourage. Alors je commence à réfléchir...</p>
        </section>

        <section className="timeline-item">
          <h2>2024</h2>
          <p>C'est le déclic. Après quatre années à évoluer au sein de la compagnie, à construire ma carrière et ma vie de famille, je réalise que quelque chose a changé. La passion n’est plus là, les conditions de travail se durcissent, et surtout, je ne me reconnais plus dans le rythme de vie que ce métier impose à mon quotidien.
          Prendre cette décision n’a pas été facile. Il y avait la peur de décevoir mes parents, qui m’ont toujours soutenue dans la réalisation de ce rêve, et mon mari, qui a dû jongler avec mon emploi du temps atypique, tout en n’évoluant pas dans ce milieu.
          Mais c’est décidé : je tourne la page, avec gratitude et sérénité. Je laisse ma place à celles et ceux qui vibrent encore pour ce métier.
            <br />
            <br />
            De mon côté, je sens l’ennui mental s’installer. J’ai besoin de me stimuler, de créer, d’apprendre à nouveau. Avec le soutien indéfectible de ma famille et même d’Air France, je choisis d’écrire une nouvelle histoire.
            <br />
            <br />
            C'est en Octobre que débute ma reconversion dans le développement web en intégrant le bootcamp Le Wagon à Bordeaux. Pendant neuf semaines intensives, j’apprends les bases fondamentales : algorithmes, programmation orientée objet (OOP) avec Ruby, HTML, CSS, JavaScript, SQL, Git, GitHub, et surtout Ruby on Rails.
            En équipe, nous développons un projet concret (que vous pouvez découvrir dans la rubrique “Mes projets”). En décembre, je passe et obtiens ma certification RNCP niveau 6 en Conception et Développement d’Applications Web (un vrai cadeau de fin d’année).
            Je suis fière de ce que j’ai accompli. Mais cette étape n’est qu’un début : j’ai encore tant à découvrir, à construire, à coder.
            Et surtout, je suis prête.
          </p>
        </section>

        <section className="timeline-item">
          <h2>2025</h2>
          <p>Je débute l’année avec beaucoup d’enthousiasme en intégrant une start-up innovante : Inside Therapeutics. Je suis la seule développeuse de l’équipe, aux côtés de mon maître de stage, le Head of Design, qui touche également au développement web.
          Ma première mission est d’installer localement le site WordPress de l’entreprise sur mon ordinateur professionnel, et d’en rédiger une documentation claire et détaillée pour faciliter la passation et la maintenance.
          Très vite, un premier projet concret me propulse dans le vif du sujet : développer une application de calcul destinée à la communauté scientifique, qui sera intégrée au site existant. En collaboration étroite avec le Head of Design et les chercheurs de la société, je conçois l’application en HTML, CSS et JavaScript pur.
          Pour améliorer notre organisation, je propose de mettre en place un GitHub pour le versioning et un Trello pour le suivi des tâches. L’application est mise en production : c’est une grande fierté de contribuer à un outil utile et concret, conçu pour des scientifiques. Vous pouvez le consulter dans la rubrique “Mes projets” ou directement sur <a href="https://insidetx.com/resources/lnp-formulation-design-calculator/" target="_blank">insidetx.com</a>.
          Peu après, un nouveau projet démarre : un refresh complet du site web. Je mène une enquête UI/UX, réalise des interviews utilisateurs auprès des équipes internes pour comprendre leurs attentes, leurs habitudes de navigation et les besoins réels.
          En attendant la validation des maquettes, je me forme de manière autonome à Sage 10 de Roots.io, un framework puissant pour créer des thèmes WordPress sur mesure. C’est via cette stack que la refonte sera réalisée. Une développeuse freelance est recrutée pour mener l’ensemble du projet de refonte. De mon côté, j’intègre l’application scientifique, propose des animations pour la homepage, et je participe activement aux échanges entre design, contenu et technique.
          Mais au fil des semaines, je ressens un besoin de montée en compétences plus fort, notamment par un apprentissage en binôme ou au sein d’une équipe technique plus structurée. L’entreprise ne pouvant répondre à ces besoins à ce moment-là, nous décidons d’un commun accord de mettre fin au stage prématurément.
          Je choisis alors de me recentrer sur ma formation : je commence à apprendre React, tout en approfondissant mes compétences en UI/UX design. Je travaille aussi sur d’autres projets personnels (encore confidentiels) qui me permettent d’expérimenter et d’aller plus loin techniquement.
          En parallèle, je trouve une entreprise pour poursuivre mon parcours en alternance à la rentrée : une agence digitale 360 avec une équipe humaine et inspirante. Je suis impatiente de débuter cette nouvelle aventure et de continuer à apprendre, créer et grandir dans le monde passionnant du développement web.
          </p>
        </section>
      </div>
      <p className="swipe-left"> <PiHandSwipeLeft /></p>
    </div>

  );
}
