import React from "react";
import "./StackBanner.css";
import { SiRootssage } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { FaWordpress } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { AiOutlineOpenAI } from "react-icons/ai";


const StackBanner = () => {
  return (
    <div className="stack-banner">
      <h2>Mes compétences techniques</h2>

      <div className="stack-top stack-logos">
        <h4>Framework Front</h4>
        <div className="stack-logos-row">
          <FaReact className="stack-icons"/>
          <FaBootstrap className="stack-icons"/>
          <SiRootssage className="stack-icons"/>

        </div>
      </div>

      <div className="stack-middle stack-logos">
        <h4>Framework Back</h4>
        <div className="stack-logos-row">
          <SiRubyonrails className="stack-icons"/>
          <DiRuby className="stack-icons"/>
          <FaWordpress className="stack-icons"/>

        </div>
      </div>

      <div className="stack-finish stack-logos">
        <h4>Langages Bruts</h4>
        <div className="stack-logos-row">
          <FaHtml5 className="stack-icons"/>
          <FaCss3Alt className="stack-icons"/>
          <IoLogoJavascript className="stack-icons"/>
        </div>
      </div>

      <div className="stack-end stack-logos">
        <h4>Design & Outils</h4>
        <div className="stack-logos-row">
          <FaFigma className="stack-icons"/>
          <AiOutlineOpenAI className="stack-icons"/>
        </div>
      </div>

    </div>
  );
};

export default StackBanner;
