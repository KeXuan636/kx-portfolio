import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Certificates from "./components/sections/Certificates";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
