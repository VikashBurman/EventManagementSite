import React from "react";
import './App.css'; 
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      {/* <Footer/> */}
      <Toaster/>
    </Router>
  );
};

export default App;
