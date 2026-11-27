import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ImEnvelop } from "react-icons/im";
import "./Footer.css";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import { useState } from "react";

function Footer() {
   const [isOpen, setIsOpen] = useState(false);

   return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/a-propos">À propos</Link>
        <Link to="/projets">Mes projets</Link>
        <button className="footer-contact" type="button" onClick={() => setIsOpen(true)}>Contact</button>

        {isOpen && <ContactModal onClose={() => setIsOpen(false)} />}

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
     
      <p className="dm-sans">© {new Date().getFullYear()} Morgane Bourdillon</p>
    </footer>
  );
};

export default Footer;
