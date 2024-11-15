import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-green-400 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="py-6 text-center text-gray-500 font-mono text-sm">
          <p>/* © 2024 Vignesh Ramalingam. All rights reserved. */</p>
        </footer>
      </div>
    </div>
  );
}

export default App;