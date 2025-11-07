import React from 'react';

const projects = [
  {
    title: 'Smart Campus Navigator',
    status: 'In Progress',
    description: 'Wayfinding web app using campus POI data, map overlays, and shortest-path routing.',
    tech: ['React', 'Mapbox', 'Node.js'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Realtime Chat Rooms',
    status: 'Completed',
    description: 'Socket-powered chat with rooms, message reactions, and emoji picker.',
    tech: ['Vite', 'Socket.io', 'Express'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Study Planner',
    status: 'Completed',
    description: 'Schedule tasks, track progress, and visualize time blocks with analytics.',
    tech: ['React', 'FastAPI', 'MongoDB'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop'
  }
];

function Projects() {
  return (
    <section id="projects" className="bg-gray-50/60 py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
            <p className="mt-2 text-gray-600">A snapshot of things I’m building and shipping.</p>
          </div>
          <a href="#contact" className="text-blue-600 font-medium hover:underline">Let’s collaborate →</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {p.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{t}</span>
                  ))}
                </div>
                <a href={p.link} className="mt-4 inline-flex text-sm text-blue-600 hover:underline">Preview</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
