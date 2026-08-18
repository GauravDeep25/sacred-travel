import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

export default function Stats() {
  return (
    <section className="bg-white border-y border-dark/5 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {siteData.stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl md:text-5xl font-serif text-primary mb-2">
              {stat.value}{stat.suffix}
            </div>
            <p className="text-charcoal/60 uppercase tracking-widest text-[10px]">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}