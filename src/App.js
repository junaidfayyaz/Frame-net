import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";

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
    </div>
  );
}

export default App;
