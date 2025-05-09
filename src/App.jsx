import "./App.css";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Header from "./components/Header";

import FloatingContact from "./components/FloatingContact";
import Footer from "./components/Footer";
import StackBanner from "./components/StackBanner";
import Hero from "./components/Hero";
import BackgroundAudio from "./components/BackgroundAudio";

function App() {

  return (
    <div>
      <BackgroundAnimation />
      <Header />
      <main>
        <Hero />
        <StackBanner />

        <FloatingContact />
        <BackgroundAudio />
      </main>
      <Footer />
    </div>
  );
}
export default App;
