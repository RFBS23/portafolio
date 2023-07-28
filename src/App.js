import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Experiencia from "./components/experiencia/Experiencia";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Portafolio from "./components/portafolio/Portafolio";

const App = () => {
  return (
    <>
        <Header />
        <main className='main'>
            <Home />
            <About />
            <Skills />
            <Services />
            <Portafolio />
            <Experiencia />
            <Contact />
        </main>
        <Footer />
        <ScrollUp />
    </>
  );
}

export default App;
