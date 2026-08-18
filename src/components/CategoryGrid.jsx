import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

export default function CategoryGrid() {
  return (
    <section id="domestic" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary uppercase tracking-[0.3em] text-[10px] block mb-2">The four paths</span>
        <h2 className="text-4xl md:text-5xl font-serif text-dark">Ways to cross</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {siteData.categories.map((cat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative h-[450px] overflow-hidden rounded-sm mb-4">
              <img src={cat.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-accent text-[9px] uppercase tracking-[0.2em]">{cat.eyebrow}</span>
                <h3 className="text-white text-xl font-serif mt-1">{cat.label}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}