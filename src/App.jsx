import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 py-8 text-xs text-gray-500">
          © {new Date().getFullYear()} Informatics Engineering Portfolio — Built with love and clean code.
        </div>
      </footer>
    </div>
  );
}

export default App;
