import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Product thinking',
  'Design systems',
  'Micro-interactions',
  'Performance tuning',
  'API design',
  '3D on the web',
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About Me</h2>
            <p className="mt-4 text-white/70">
              I craft interfaces that feel effortless. My approach blends strategy, design, and engineering to deliver
              experiences that are fast, accessible, and visually distinct.
            </p>
            <p className="mt-4 text-white/70">
              When building, I obsess over motion, feedback, and the smallest details that make products intuitive and
              delightful to use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-lg font-medium">Core Skills</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {skills.map((s) => (
                <div
                  key={s}
                  className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent px-4 py-3 text-sm text-white/80"
                >
                  {s}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
