import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';

export default function ExperiencesIntro() {
  const { intro } = siteConfig.experiences;

  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT – heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="eyebrow">{intro.eyebrow}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark leading-[1.1]">
            Experiences,<br />
            <span className="italic text-accent">not excursions.</span>
          </h2>
        </motion.div>

        {/* RIGHT – body text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <div className="w-12 h-px bg-primary/30 md:hidden" />
          <p className="text-charcoal/70 leading-relaxed text-base md:text-lg">
            {intro.body}
          </p>
          {/* Three micro-callouts */}
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-dark/8 mt-2">
            {['Real access', 'Living guides', 'No package language'].map((item) => (
              <div key={item} className="flex flex-col gap-1">
                <div className="w-4 h-px bg-primary mb-2" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-dark">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
