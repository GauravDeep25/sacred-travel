import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';

export default function Testimonials() {
  const reviews = siteConfig.home.testimonials;

  return (
    <section className="py-28 px-6 bg-base">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="eyebrow">Voices from the road</span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark">
            Travellers on {siteConfig.company.name}
          </h2>
        </div>

        {/* Cards */}
        {/* Adjusted gap slightly so the boxes sit well next to each other */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              // Added background, border, and padding here to render the box
              className="flex flex-col items-center text-center bg-white border border-[#E5E3DB] p-8 md:p-10 rounded-sm h-full"
            >
              {/* Big quote mark */}
              <div className="text-accent/50 text-6xl font-serif leading-none mb-4 select-none">
                "
              </div>

              {/* Added flex-grow so the dividing line and names align at the bottom */}
              <p className="flex-grow text-charcoal/80 italic leading-relaxed mb-8 font-serif text-lg md:text-xl">
                {item.quote}
              </p>

              <div className="w-10 h-px bg-primary/25 mb-5" />

              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-dark">
                {item.name}
              </div>
              <div className="text-[9px] uppercase tracking-[0.15em] text-charcoal/40 mt-1">
                {item.city}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
