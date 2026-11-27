import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import "./App.css";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <Router>
      <Layout>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/projets" element={<ProjectsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
