import "./App.css";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";


function App() {

  return (
    <div>
      <BackgroundAnimation />
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
export default App;
