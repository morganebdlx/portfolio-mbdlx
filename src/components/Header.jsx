import { useState } from "react";
import "./Header.css";
import "./Contact.css";
import { Link } from "react-router-dom";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <header className="header">
        <div className="header-content">
        <Link to="/" className="logo-content">
            Morgane Bourdillon
        </Link>
          <nav className="nav-menu" aria-label="Navigation principale">
            <ul>
              <li><Link to="/projets">Projets</Link></li>
              <li><Link to="/a-propos">À propos</Link></li>
              <li><button type="button" onClick={() => setIsOpen(true)}>Contact</button></li>
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
                <li>Bento : <a href="https://bento.me/morgane-bourdillon" target="_blank" rel="noopener noreferrer">Mon Bento</a></li>
              </ul>
            </div>
          </div>
        )}
  </header>
);
}

export default Header;
