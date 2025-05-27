import "./App.css";
import Header from "./components/Header";
import FloatingContact from "./components/FloatingContact";
import Footer from "./components/Footer";
import StackBanner from "./components/StackBanner";
import Intro from "./components/Intro";
import BackgroundAudio from "./components/BackgroundAudio";
import PhotosSection from "./components/PhotosSection";

function App() {

  return (
    <div>
      <Header />
      <main>
        <PhotosSection />
        <Intro />
        <StackBanner />
        <FloatingContact />
        <BackgroundAudio />
      </main>
      <Footer />
    </div>
  );
}
export default App;
