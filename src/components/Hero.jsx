import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Github, Linkedin } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0b0b12]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to enhance contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b12]/60 via-[#0b0b12]/50 to-[#0b0b12]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0b0b12] to-transparent" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-24 flex min-h-screen flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
            <Rocket className="h-4 w-4 text-violet-400" />
            <span>Futuristic. Clean. Professional.</span>
          </div>

          <h1 className="mt-6 bg-gradient-to-br from-white via-violet-200 to-violet-400 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-6xl">
            Crafting immersive digital experiences
          </h1>
          <p className="mt-4 text-lg text-white/70 md:text-xl">
            I design and build modern interfaces with a focus on clarity, motion, and delightful details.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/30 transition hover:translate-y-[-2px] hover:bg-violet-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur transition hover:border-violet-400/40 hover:text-white"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-violet-400/40 hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-violet-400/40 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
