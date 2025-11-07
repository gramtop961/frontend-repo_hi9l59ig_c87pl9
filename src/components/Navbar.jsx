import React from 'react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 h-14 flex items-center justify-between">
        <a href="#home" className="text-sm font-bold tracking-tight">IE Portfolio</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 text-white text-xs font-semibold px-3 py-2 hover:bg-blue-700">
          Hire Me
        </a>
      </div>
    </header>
  );
}

export default Navbar;
