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
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#portfolio" className="text-2xl font-bold flex items-center">
          <img className='w-44' src='./images/logo.svg' alt='logo'/>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-md font-medium">
          <a href="#Portfolio" className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">Portfolio</a>
          <a href="#about" className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">About</a>
          <a href="#projects" className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">Projects</a>
          <a href="#service" className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">Service</a>
          <a href="#contact" className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full">Contact</a>
        </nav>
        <button id="menuButton" className="md:hidden p-2 border rounded" onClick={toggleMenu}>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle navigation menu</span>
        </button>
      </div>
      <div id="mobileMenu" className={`md:hidden w-full max-w-xs p-4 mx-auto text-center space-y-2 ${isMenuOpen ? '' : 'hidden'}`}>
        <a href="#Portfolio" className="block text-lg font-medium hover:text-primary shadow-lg rounded-lg" onClick={closeMenu}>Portfolio</a>
        <a href="#about" className="block text-lg font-medium hover:text-primary shadow-lg rounded-lg" onClick={closeMenu}>About</a>
        <a href="#projects" className="block text-lg font-medium hover:text-primary shadow-lg rounded-lg" onClick={closeMenu}>Projects</a>
        <a href="#service" className="block text-lg font-medium hover:text-primary shadow-lg rounded-lg" onClick={closeMenu}>Service</a>
        <a href="#contact" className="block text-lg font-medium hover:text-primary shadow-lg rounded-lg" onClick={closeMenu}>Contact</a>
      </div>
    </header>
  );
};

export default Header;
