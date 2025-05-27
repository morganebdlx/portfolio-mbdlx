import React, { useState, useEffect } from "react";
import "./Header.css";
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

  return (
    <header className={`header ${animationDone ? "animate-done" : "animate-start"}`}>
    {!animationDone ? (
      <div className="welcome-message">
        <p>Bienvenue</p>
      </div>
    ) : (
      <div className="header-content">
        <div className="logo-content">
        <img src={logoAtelierSureau} alt="Logo atelier Sureau" />
        </div>
        <div className="menu">
          <button type="button" className="menu-button"  onClick={toggleMenu} aria-label="Menu">
            MENU
          </button>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li className="rectangle"><a href="#">Projets</a></li>
            <li className="rounded"><a href="#">A propos</a></li>
            <li className="rectangle"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    )}
  </header>
  );
};

export default Header;
