import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* gradient overlay for readability, doesn't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />

      <div className="relative container mx-auto px-6 md:px-10 lg:px-16 py-20">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-blue-600/10 text-blue-700 px-3 py-1 text-xs font-semibold tracking-wide mb-4">
            Informatics Engineering • Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Hi, I’m <span className="text-blue-600">an Informatics Engineering student</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            I design and build modern web applications with a focus on clean code,
            human-centered UX, and delightful interactions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-5 py-3 font-medium hover:bg-blue-700 transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50 transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
