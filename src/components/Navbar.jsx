import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0b0b12]/60 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 text-white">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <Rocket className="h-5 w-5 text-violet-400" />
          <span>NovaPortfolio</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#projects" className="text-sm text-white/80 transition hover:text-white">Projects</a>
          <a href="#about" className="text-sm text-white/80 transition hover:text-white">About</a>
          <a href="#contact" className="text-sm text-white/80 transition hover:text-white">Contact</a>
        </div>
        <a
          href="#contact"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:border-violet-400/40 hover:text-white"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
