import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple in-page feedback. Backend can be wired later on request.
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Let's build something great
          </motion.h2>
          <p className="mt-3 text-center text-white/70">
            Have a project in mind or just want to say hello? Drop a message.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/70">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0f0f18] px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-violet-400/50"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/70">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0f0f18] px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-violet-400/50"
                  placeholder="jane@company.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/70">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-xl border border-white/10 bg-[#0f0f18] px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-violet-400/50"
                placeholder="Tell me about your project..."
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/30 transition hover:translate-y-[-2px] hover:bg-violet-400"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
              {sent && (
                <span className="text-sm text-emerald-400">Message sent — I'll be in touch!</span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
