// src/components/FloatingContact.jsx
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
            <h2>Contactez-moi</h2>
            <ul>
              <li>Email : <a href="mailto:tonadresse@email.com">tonadresse@email.com</a></li>
              <li>LinkedIn : <a href="https://linkedin.com/in/tonprofil" target="_blank">Mon LinkedIn</a></li>
              <li>GitHub : <a href="https://github.com/tonpseudo" target="_blank">Mon GitHub</a></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default FloatingContact;
