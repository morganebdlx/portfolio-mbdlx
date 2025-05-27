import Header from './components/Header';
import Hero from './components/Hero';
import TextSection from './components/TextSection';
import CardsSection from './components/CardsSection';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <>
      <div className="App">
        <main>
          <Header />
          <Hero />
          <TextSection />
          <CardsSection />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
