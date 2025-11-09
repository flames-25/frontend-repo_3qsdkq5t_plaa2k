import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12] font-[Inter] antialiased">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className="border-t border-white/10 bg-[#0b0b12] py-10 text-center text-white/50">
        <div className="container mx-auto px-6">
          <p>
            © {new Date().getFullYear()} NovaPortfolio — Built with care, motion, and a hint of stardust.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
