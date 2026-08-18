import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

export default function Testimonials() {
  return (
    <section className="bg-base py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-[10px] block mb-2">Voices from the road</span>
          <h2 className="text-4xl font-serif text-dark">Traveler Stories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {siteData.testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/50 p-10 rounded-sm border border-dark/5 italic text-charcoal/80"
            >
              <p className="mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="text-[10px] uppercase tracking-widest font-bold not-italic text-primary">
                {t.name} · {t.city}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}