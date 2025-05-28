import './PhotosSection.css';
import vintageClock from '../assets/images/vintage-clock.jpg';
import pipistrello from '../assets/images/pipistrello.jpg';
import myself from '../assets/images/me.jpg';
import carsNessino from '../assets/images/cars-nessino.jpg';
import workplace from '../assets/images/workplace.jpeg';


function PhotosSection() {
  return (
    <div className="photos-section">
      <div className="photo-1"><img src={vintageClock} alt="Horloge vintage" /></div>
      <div className="photo-2"><img src={pipistrello} alt="Lampe Pipistrello" /></div>
      <div className="photo-3"><img src={myself} alt="Protagoniste" /></div>
      <div className="photo-4"><img src={workplace} alt="workplace" /></div>
      <div className="photo-5"><img src={carsNessino} alt="Lego et Lampe Nessino" /></div>
    </div>
  );
}

export default PhotosSection;
