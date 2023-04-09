import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="bg-navy-blue min-h-screen w-100">
        <Navbar />
          <main>
            <Hero />
            <AboutMe />
            <Projects />
            <Footer />
        <Routes>
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
