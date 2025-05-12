import React, { useState, useEffect } from "react";
import "./Header.css";
import photoMBL from "../assets/images/photoMBL.png";
import logoAtelierSureau from "../assets/images/logo-atelier-sureau.png";

const Header = () => {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

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
        <div className="image-content">
          <img src={photoMBL} alt="Photo de profil" />
        </div>
      </div>
    )}
  </header>
  );
};

export default Header;
