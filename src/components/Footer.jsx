import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
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
          <FaEnvelope />
        </a>
      </div>

      <p className="dm-sans">© 2025 Morgane Bourdillon All rights reserved.</p>
    </footer>
  );
};

export default Footer;
