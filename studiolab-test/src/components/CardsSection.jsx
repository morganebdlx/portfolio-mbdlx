import './CardsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



function CardsSection() {

  return (
      <div className="cards-section">
        <div className="intro">
          <div className="intro-left">
            <h2 className="desktop">Avantages</h2>
            <h2 className="mobile">Nos avantages</h2>
          </div>
          <div className="intro-right">
            <p>Rejoindre <strong>V7LVET</strong>, c’est choisir un cabinet où <strong>le conseil est au cœur du
              métier</strong>, où chaque mission est une opportunité de créer une véritable valeur
              ajoutée pour votre entreprise.</p>
            <button className="cards-section-button">En savoir plus <FontAwesomeIcon icon={faArrowRight} className="intro-arrow"/></button>
          </div>
        </div>

        <div className="cards">
          <div className="row row-one">

            <div className="card-content">
              <div className="card">
                <div className="card-text-default">
                  <button className="arrow-card" aria-label="View more details"><FontAwesomeIcon icon={faArrowRight} className="right-arrow-icon"/></button>
                    <div className="placeholder"></div>
                  <h3>Qualité</h3>
                  <p>Fiabilité. Précision. Impact.</p>
                </div>

                <div className="card-text card-text-hover">
                  <button className="arrow-card" aria-label="View more details"><FontAwesomeIcon icon={faArrowRight} className="bottom-arrow-icon"/></button>
                  <p><strong>V7LVET incarne un haut niveau d’exigence
                  et de précision. </strong>
                  Héritée des <strong>standards du conseil internationale
                  (Big 4),</strong> cette discipline se traduit par des <strong>livrables
                  alignés sur les normes et les meilleures pratiques
                  de la profession.</strong> A la clé : <strong>lucidité dans la gestion,
                  sécurité dans les décisions.</strong></p>
                </div>
              </div>
            </div>

            <div className="card-content">
              <div className="card">
                <div className="card-text-default">
                  <button className="arrow-card" aria-label="View more details"><FontAwesomeIcon icon={faArrowRight} className="right-arrow-icon"/></button>
                    <div className="placeholder"></div>
                  <h3>Gain de temps</h3>
                  <p>Fluidité. Technologie. Optimisation.</p>
                </div>

                <div className="card-text-hover">
                  <button className="arrow-card" aria-label="View more details"><FontAwesomeIcon icon={faArrowRight} className="bottom-arrow-icon"/></button>
                  <p><strong>Le temps est une ressource rare, V7LVET le
                    valorise.</strong> En <strong>simplifiant la complexité, clarifiant
                    les priorités et accélérant les décisions,</strong> chaque
                    action est recentrée sur l’essentiel : <strong>votre
                    entreprise.</strong> Le tout grâce à un <strong>modèle
                    d’amélioration continue.</strong></p>
                </div>
              </div>
            </div>

            <div className="card-content">
              <div className="card">
                <div className="card-text-default">
                  <button className="arrow-card" aria-label="View more details"><FontAwesomeIcon icon={faArrowRight} className="right-arrow-icon"/></button>
                    <div className="placeholder"></div>
                  <h3>Personnalisation</h3>
                  <p>Conseil. Stratègie. Valeur.</p>
                </div>

                <div className="card-text-hover">
                  <button className="arrow-card" aria-label="View more details"><FontAwesomeIcon icon={faArrowRight} className="bottom-arrow-icon"/></button>
                  <p><strong>V7LVET accompagne une clientèle
                  exigeante,</strong> en quête d’un partenaire capable de
                  <strong>décrypter en profondeur sa réalité : secteur,
                  structure, dynamique, ambitions.</strong>
                  Chaque recommandation naît d’une approche
                  <strong>« deeply tailored »</strong>, pensée avec un <strong>réseau de
                  partenaires de confiance</strong> (avocats, notaires, CGP,
                  etc.). Loin des <strong>solutions standardisées,</strong> V7LVET
                  incarne un <strong>conseil stratégique pluridisciplinaire.</strong></p>
                </div>
              </div>
            </div>

          </div>
          <div className="row row-two">

            <div className="card-content">
              <div className="card">
                <div className="card-text-default">
                  <button className="arrow-card" aria-label="View more details"><FontAwesomeIcon icon={faArrowRight} className="right-arrow-icon"/></button>
                    <div className="placeholder"></div>
                  <h3>Anticipation</h3>
                  <p>Vision. Action. Évolution.</p>
                </div>

                <div className="card-text-hover">
                <button className="arrow-card" aria-label="View more details"><FontAwesomeIcon icon={faArrowRight} className="bottom-arrow-icon"/></button>
                  <p><strong>En dépassant les cadres établis,</strong>
                  V7LVET ouvre des <strong>perspectives nouvelles</strong> et fait
                  de chaque mission un <strong>catalyseur d’évolution.</strong>
                  Chaque intervention <strong>trace une trajectoire,
                  préfigure les enjeux futurs et renforce la capacité
                  de décision.</strong></p>
                </div>
              </div>
            </div>

            <div className="card-content">
              <div className="card">
                <div className="card-text-default">
                  <button className="arrow-card" aria-label="View more details"><FontAwesomeIcon icon={faArrowRight} className="right-arrow-icon"/></button>
                    <div className="placeholder"></div>
                  <h3>Réactivité</h3>
                  <p>Proximité. Disponibilité. Suivi.</p>
                </div>

                <div className="card-text-hover">
                <button className="arrow-card" aria-label="View more details"><FontAwesomeIcon icon={faArrowRight} className="bottom-arrow-icon"/></button>
                  <p><strong>V7LVET privilégie une relation humaine,
                  experte et engagée.</strong>
                  Chaque client bénéficie d’une <strong>équipe dédiée,</strong>
                  capable d’agir <strong>sans latence,</strong> au <strong>rythme des
                  enjeux.</strong> Dès l’entrée en relation, un <strong>espace
                  d’échange fluide</strong> et <strong>confidentiel</strong> via
                  <strong>Treebal</strong> (start-up Bretonne), permet un <strong>dialogue
                  en temps réel, accessible à tout moment,</strong> depuis
                  <strong>mobile</strong> ou <strong>desktop.</strong></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
}

export default CardsSection;
