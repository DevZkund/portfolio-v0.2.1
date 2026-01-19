// Header.jsx
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1A2F50] bg-background-dark/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-background-dark font-bold text-xl">
              DK
            </div>
            <span className="text-lg font-bold tracking-tight text-white">Devzkund</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a className="text-sm font-medium text-text-muted hover:text-primary transition-colors" href="#home">Home</a>
            <a className="text-sm font-medium text-text-muted hover:text-primary transition-colors" href="#work">Work</a>
            <a className="text-sm font-medium text-text-muted hover:text-primary transition-colors" href="#services">Services</a>
            <a className="text-sm font-medium text-text-muted hover:text-primary transition-colors" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a className="hidden md:flex items-center justify-center rounded-lg bg-primary px-5 py-2 text-sm font-bold text-background-dark hover:bg-white hover:shadow-[0_0_15px_rgba(0,191,230,0.5)] transition-all" href="#contact">
              Get a Quote
            </a>
            <button className="md:hidden text-white" onClick={toggleMenu}>
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden bg-background-dark border-b border-[#1A2F50] transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col p-6 gap-4">
          <a className="text-sm font-medium text-text-muted hover:text-primary" href="#work" onClick={closeMenu}>Work</a>
          <a className="text-sm font-medium text-text-muted hover:text-primary" href="#services" onClick={closeMenu}>Services</a>
          <a className="text-sm font-medium text-text-muted hover:text-primary" href="#about" onClick={closeMenu}>About</a>
          <a className="text-sm font-medium text-text-muted hover:text-primary" href="#contact" onClick={closeMenu}>Contact</a>
          <a className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2 text-sm font-bold text-background-dark" href="#contact" onClick={closeMenu}>
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
