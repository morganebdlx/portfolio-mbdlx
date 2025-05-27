import React from "react";
import "./StackBanner.css";
import figmaLogo from "../assets/images/figma.png";
import bootstrapLogo from "../assets/images/bootstrap.png";
import openaiLogo from "../assets/images/openai.webp";
import scssLogo from "../assets/images/scss.png";
import railsLogo from "../assets/images/rails.png";
import jsLogo from "../assets/images/js.png";
import sageLogo from "../assets/images/sage.png";
import wordpressLogo from "../assets/images/wordpress.png";
import reactLogo from "../assets/images/react.png";
import phpLogo from "../assets/images/php.webp";
import htmlLogo from "../assets/images/html.png";
import cssLogo from "../assets/images/css.png";


const StackBanner = () => {
  return (
    <div className="stack-banner">
      <h2>Mes compétences techniques</h2>

      <div className="stack-top stack-logos">
        <h4>Framework Front</h4>
        <div className="stack-logos-row">
          <img src={reactLogo} alt="React" />
          <img src={scssLogo} alt="Scss" />
          <img src={bootstrapLogo} alt="Bootstrap" />
          <img src={sageLogo} alt="Sage" />
        </div>
      </div>

      <div className="stack-middle stack-logos">
        <h4>Framework Back</h4>
        <div className="stack-logos-row">
          <img src={railsLogo} alt="Ruby on Rails" />
          <img src={wordpressLogo} alt="WordPress" />
          <img src={phpLogo} alt="PHP" />
        </div>
      </div>  

      <div className="stack-finish stack-logos">
        <h4>Langages Bruts</h4>
        <div className="stack-logos-row">
          <img src={htmlLogo} alt="HTML" />
          <img src={cssLogo} alt="CSS" />
          <img src={jsLogo} alt="JavaScript" />
        </div>
      </div>

      <div className="stack-end stack-logos">
        <h4>Design & Outils</h4>
        <div className="stack-logos-row">
          <img src={figmaLogo} alt="Figma" />
          <img src={openaiLogo} alt="Open AI" />
        </div>
      </div>
      
    </div>
  );
};

export default StackBanner;
