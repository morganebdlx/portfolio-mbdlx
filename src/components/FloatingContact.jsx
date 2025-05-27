import { useState } from "react";
import "./FloatingContact.css";

function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="floating-btn" onClick={() => setIsOpen(true)}>
        Contact
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
            <h3>Contactez-moi</h3>
            <ul>
              <li>Email : <a href="mailto:morganebourdillon@gmail.com">morganebourdillon@gmail.com</a></li>
              <li>LinkedIn : <a href="www.linkedin.com/in/morgane-bourdillon-18929042" target="_blank">Mon Profil LinkedIn</a></li>
              <li>GitHub : <a href="https://github.com/morganebdlx" target="_blank">Mon GitHub</a></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default FloatingContact;
