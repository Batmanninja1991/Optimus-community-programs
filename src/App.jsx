import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Hero />} />
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
