import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Work from "./Components/Work";
import Portfolio from "./Components/Portfolio";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Services />
      <Experience />
      <Work />
      <Portfolio />
      <Contacts />
      <Footer/>
    </div>
  );
}

export default App;
