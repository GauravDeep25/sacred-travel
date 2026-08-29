import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';

export default function ExperiencesProcess() {
  const steps = siteConfig.experiences.process;

  return (
    <section className="bg-dark py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
            How it works
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight max-w-lg">
            From a message<br />
            <span className="italic text-accent">to a memory.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="relative group"
            >
              {/* Connector line (not last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-full h-px bg-white/8 z-0" />
              )}

              <div className="relative z-10 pr-12 pb-12 border-b border-white/5 lg:border-b-0 lg:border-r lg:border-white/5 last:border-r-0 last:border-b-0 px-0 lg:px-8 first:lg:pl-0">
                {/* Number */}
                <div className="text-7xl font-serif text-white/6 leading-none mb-6 select-none -ml-1">
                  {step.number}
                </div>

                {/* Small dot above title */}
                <div className="w-1.5 h-1.5 rounded-full bg-primary mb-5" />

                <h3 className="text-white text-lg md:text-xl font-serif leading-snug mb-4">
                  {step.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
