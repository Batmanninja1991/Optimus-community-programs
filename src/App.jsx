import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
        <Hero />
        <About />
      <Footer />
    </div>
  );
};

export default App;
