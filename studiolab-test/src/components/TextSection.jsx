import './TextSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function TextSection() {

  return (
    <>
     <div className="text-section">
        <div className="text-left">
          <p>ADN</p>
          <h2>V7LVET</h2>
          <h3 className="desktop">Un cabinet <br></br>ComptaTech.</h3>
          <h3 className="mobile">Un cabinet ComptaTech.</h3>
        </div>
        <div className="text-right">
          <p>V7LVET est né d’une conviction forte : donner à <strong>l’expertise comptable</strong> une nouvelle <strong>dimension</strong>,
          à travers le <strong>prisme</strong> du <strong>conseil stratégique</strong> et <strong>des technologies de pointe.</strong></p>
          <p><strong>Au-delà des chiffres,</strong> nous sommes un <strong>partenaire engagé,</strong> présent à chaque <strong>étape décisive</strong> de la vie de votre entreprise
          <strong>- du premier souffle à la pleine maturité.</strong></p>
          <button className="text-section-button">En savoir plus <FontAwesomeIcon icon={faArrowRight} className="button-arrow" aria-hidden="true"/></button>
        </div>

      </div>
    </>
  )
}

export default TextSection
