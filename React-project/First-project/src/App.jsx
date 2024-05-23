import React from "react";
import Navbar from "./Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./Footer";
import "@fortawesome/fontawesome-free/css/all.css";

import Slider1 from "./assets/slider1.jpeg";
import Slider2 from "./assets/slider2.jpeg";
import Slider3 from "./assets/slider3.jpeg";
import Slider4 from "./assets/slider4.png";
import Slider5 from "./assets/slider5.jpeg";
import SliderPage from "./SliderPage";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const slides = [
    {
      Slider1,
      Slider2,
      Slider3,
      Slider4,
      Slider5,
    },
  ];

  console.log("Slides array:", slides);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SliderPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
