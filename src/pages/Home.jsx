import StackBanner from "../components/StackBanner";
import Intro from "../components/Intro";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import "./Home.css";
import taskItDemo from "../assets/video/taskit.mp4";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <section className="home-projects">
        <div className="home-projects-heading"><p className="home-projects-label">Portfolio / Réalisations</p><h2>Projets<br /><em>sélectionnés.</em></h2><Link className="home-projects-all" to="/projets">Tous les projets</Link></div>
        <Link className="home-project-feature" to="/projets#projet-01"><video src={taskItDemo} muted playsInline preload="metadata" aria-hidden="true" /><span>Task It <small>Application web · Ruby on Rails</small></span></Link>
        <Link className="home-project-calculator" to="/projets#projet-02"><span>Calculateur<br /><em>scientifique</em></span><small>Application web · JavaScript</small></Link>
      </section>
      <StackBanner />
    </main>
  );
}
