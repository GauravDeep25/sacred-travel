import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';

export default function ExperiencesTestimonials() {
  const reviews = siteConfig.experiences.testimonials;

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="eyebrow">Voices from the road</span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark">
            Moments that stayed.
          </h2>
        </div>

        {/* Three-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {reviews.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.18, duration: 0.85 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {/* Decorative top rule */}
              <div className="w-full h-px bg-dark/8 mb-10" />

              {/* Quote mark */}
              <div className="text-accent/40 text-5xl font-serif leading-none mb-4 select-none">"</div>

              <p className="text-charcoal/80 italic leading-relaxed font-serif text-lg flex-1 mb-8">
                {item.quote}
              </p>

              <div>
                <div className="w-8 h-px bg-primary/30 mb-4" />
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-dark">
                  {item.name}
                </div>
                <div className="text-[9px] uppercase tracking-[0.15em] text-charcoal/40 mt-1">
                  {item.city}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
