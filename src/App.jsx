import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import "./index.css";
import Programs from "./components/Programs";
import Activities from "./components/Activities";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Activities />
      <Footer />
    </div>
  );
};

export default App;
