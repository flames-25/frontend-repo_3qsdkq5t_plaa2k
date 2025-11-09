import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'NeoDash',
    description:
      'A high-performance analytics dashboard with real-time charts, theming, and a modular widget system.',
    tech: ['React', 'FastAPI', 'Tailwind', 'D3'],
    link: '#',
  },
  {
    title: 'Orbit UI',
    description:
      'A component library built for clarity and motion. Accessible, themeable, and production-ready.',
    tech: ['TypeScript', 'Framer Motion', 'Radix'],
    link: '#',
  },
  {
    title: 'AstraXR',
    description:
      'Experimental 3D interactions on the web, powered by Spline scenes and WebGL shaders.',
    tech: ['Spline', 'Three.js', 'Vite'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected Work</h2>
          <p className="mt-3 text-white/70">
            A snapshot of products and experiments that blend performance, aesthetics, and utility.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.description}</p>
                </div>
                <ExternalLink className="mt-1 h-5 w-5 text-white/40 transition group-hover:text-violet-400" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl transition-opacity group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-white/70">
          <Code className="h-4 w-4" />
          <p className="text-sm">More case studies available upon request.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
