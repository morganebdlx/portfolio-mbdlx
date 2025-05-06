import React, { useState, useEffect } from "react";
import "./Header.css"; // Assure-toi que le CSS est bien importé

const Header = () => {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    // Quand le composant se monte, déclenche l'animation
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 3000); // Durée de l'animation (3 secondes)

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={`header ${animationDone ? "animate-done" : "animate-start"}`}>
      {!animationDone ? (
        <div className="welcome-message">
          <p>Bienvenue</p>
        </div>
      ) : (
        <h1 className="reduced-title">Portfolio Morgane B.</h1>
      )}
    </header>
  );
};

export default Header;
