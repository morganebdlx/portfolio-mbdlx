import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ImEnvelop } from "react-icons/im";
import "./Footer.css";

function Footer() {
   return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#about">À propos</a>
        <a href="#projects">Mes projets</a>
        <a href="#contact">Contact</a>
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
