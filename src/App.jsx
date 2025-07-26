import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Cv from "./pages/Cv";
import DoNotExist from "./pages/DoNotExist"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contact" element={<DoNotExist />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
