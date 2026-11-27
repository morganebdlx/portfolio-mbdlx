import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";


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

        {isOpen && <ContactModal onClose={() => setIsOpen(false)} />}
  </header>
);
}

export default Header;
