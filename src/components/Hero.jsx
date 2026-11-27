import './Hero.css';
import portrait from '../assets/images/morgane_paysage_web.jpg';


function Hero() {
  return (
    <section className="hero" aria-label="Présentation de Morgane Bourdillon">
      <h1 className="hero-location">Portfolio personnel<br />Bordeaux, France</h1>
        <figure className="hero-portrait"><img className="hero-portrait-image" src={portrait} alt="Portrait de Morgane Bourdillon" /></figure>
        <p className="hero-label hero-label-dev">Développeuse <span>✳</span></p>
        <p className="hero-label hero-label-create">Créative <span>✳</span></p>
        <p className="hero-label hero-label-web">Front-end <span>✳</span></p>
        <p className="hero-label hero-label-product">Produit <span>✳</span></p>
    </section>
  );
}

export default Hero;
