import './Header.css';
import logo from '../assets/V7_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
        <div className="logo">
          <img src={logo} alt="V7LVET Logo" />
        </div>

        <div className="menu-burger">
          <button type="button" className="menu-button" onClick={toggleMenu} aria-label="Menu">
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="burger" />
          </button>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">EXPERTISES</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">V7 LAB <FontAwesomeIcon icon={faChevronDown} className="chevron-menu"/></a></li>
            <li><a href="#">A PROPOS</a></li>
            <li className="cta-menu"><a href="#">CONTACT <FontAwesomeIcon icon={faArrowRight} className="menu-arrow" aria-hidden="true"/></a></li>
          </ul>
        </nav>
    </header>
  )
}
export default Header;
