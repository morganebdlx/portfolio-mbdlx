import React, { useState, useEffect } from "react";
import "./Header.css";
import "./Contact.css";
import logoAtelierSureau from "../assets/images/logo-atelier-sureau.png";

const Header = () => {
  const [animationDone, setAnimationDone] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
  <header className={`header ${animationDone ? "animate-done" : "animate-start"}`}>
    {!animationDone ? (
      <div className="welcome-message">
        <p>Bienvenue</p>
      </div>
    ) : (
      <>
        <div className="header-content">
          <div className="logo-content">
            <img src={logoAtelierSureau} alt="Logo atelier Sureau" />
          </div>
          <div className="menu">
            <button type="button" className="menu-button" onClick={toggleMenu} aria-label="Menu">
              MENU
            </button>
          </div>

          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li className="rectangle"><a href="#">Projets</a></li>
              <li className="rounded"><a href="#">A propos</a></li>
              <li className="rectangle" onClick={() => setIsOpen(true)}><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>

        {isOpen && (
          <div className="modal-overlay" onClick={() => setIsOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
              <h3>Contactez-moi</h3>
              <ul>
                <li>Email : <a href="mailto:morganebourdillon@gmail.com">morganebourdillon@gmail.com</a></li>
                <li>LinkedIn : <a href="https://www.linkedin.com/in/morgane-bourdillon-18929042" target="_blank" rel="noopener noreferrer">Mon Profil LinkedIn</a></li>
                <li>GitHub : <a href="https://github.com/morganebdlx" target="_blank" rel="noopener noreferrer">Mon GitHub</a></li>
              </ul>
            </div>
          </div>
        )}
      </>
    )}
  </header>
);
}

export default Header;
