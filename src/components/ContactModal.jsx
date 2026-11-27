import { useEffect } from "react";
import "./Contact.css";

const ContactModal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" type="button" aria-label="Fermer" onClick={onClose}>×</button>
        <h3 id="contact-modal-title">Contactez-moi</h3>
        <ul>
          <li>Email : <a href="mailto:morganebourdillon@gmail.com">morganebourdillon@gmail.com</a></li>
          <li>LinkedIn : <a href="https://www.linkedin.com/in/morgane-bourdillon-18929042" target="_blank" rel="noopener noreferrer">Mon Profil LinkedIn</a></li>
          <li>GitHub : <a href="https://github.com/morganebdlx" target="_blank" rel="noopener noreferrer">Mon GitHub</a></li>
          <li>Bento : <a href="https://bento.me/morgane-bourdillon" target="_blank" rel="noopener noreferrer">Mon Bento</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactModal;
