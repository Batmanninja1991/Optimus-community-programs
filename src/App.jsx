import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Optimus-community-programs/" element={<Hero />} />
        <Route index path="/about" element={<About />} />
        <Route
          path="/Optimus-community-programs/programs"
          element={<Programs />}
        />
        <Route
          path="/Optimus-community-programs/activities"
          element={<Activities />}
        />
        <Route
          path="/Optimus-community-programs/contact"
          element={<Contact />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
