import "./App.css";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  return (
    <div>
      <BackgroundAnimation />
      <Header />
      <main>
        <About />
        <Projects/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
