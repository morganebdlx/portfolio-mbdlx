import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ImEnvelop } from "react-icons/im";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {
   const [isOpen, setIsOpen] = useState(false);

   return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/a-propos">À propos</Link>
        <a href="#projects">Mes projets</a>
        <a onClick={() => setIsOpen(true)}>Contact</a>

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

      </div>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/morgane-bourdillon-18929042" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/morganebdlx" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:morganebourdillon@gmail.com">
          <ImEnvelop />
        </a>
      </div>
      <div className="big-name">
        <p>Atelier Sureau</p>
      </div>
      <p className="dm-sans">© 2025 Atelier Sureau & Morgane Bourdillon All rights reserved.</p>
    </footer>
  );
};

export default Footer;
