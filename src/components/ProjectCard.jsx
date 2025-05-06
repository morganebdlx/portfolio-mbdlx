import React, { useState } from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, videoSrc, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <video className="demo-video" src={videoSrc} controls muted></video>
      <button onClick={toggleAccordion}>
        {isOpen ? "Réduire" : "En savoir plus"}
      </button>
      <div className={`accordion ${isOpen ? "open" : ""}`}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
