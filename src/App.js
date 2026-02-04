import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Certificates from "./components/sections/Certificates";
import Portfolio from "./components/sections/Portfolio";
import ProjectDetails from "./components/sections/ProjectDetails";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Portfolio />
            <Certificates />
            <Contact />
          </>
        } />

        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;