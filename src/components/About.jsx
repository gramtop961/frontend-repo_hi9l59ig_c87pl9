import React from 'react';

function About() {
  return (
    <section id="about" className="container mx-auto px-6 md:px-10 lg:px-16 py-20">
      <div className="grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-7">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I’m an Informatics Engineering student passionate about building scalable systems and intuitive interfaces.
            My interests span full‑stack web development, data structures & algorithms, and human‑computer interaction.
            I enjoy turning complex problems into elegant, performant solutions.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border p-4 bg-white/70 backdrop-blur">
              <p className="text-sm font-semibold text-gray-700">Core Skills</p>
              <p className="mt-2 text-sm text-gray-600">JavaScript/TypeScript, React, Node.js, FastAPI, MongoDB, Tailwind CSS</p>
            </div>
            <div className="rounded-xl border p-4 bg-white/70 backdrop-blur">
              <p className="text-sm font-semibold text-gray-700">Focus Areas</p>
              <p className="mt-2 text-sm text-gray-600">Frontend engineering, API design, UI/UX, cloud & DevOps fundamentals</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-700">Personal Summary</p>
            <p className="mt-2 text-sm text-gray-600">
              Curious, detail‑oriented, and collaborative. I love learning new tools, sharing knowledge, and building useful apps that ship.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>• Strong foundation in algorithms and data structures</li>
              <li>• Practical experience with modern web stacks</li>
              <li>• Emphasis on accessibility and performance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
