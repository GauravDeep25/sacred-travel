import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Founder() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img src={siteConfig.founder.photo} className="rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl" alt="Founder" />
        <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary/10 -z-10" />
      </motion.div>
      <div>
        <span className="text-primary uppercase tracking-[0.3em] text-[10px] block mb-2">The Visionary</span>
        <h2 className="text-4xl md:text-5xl font-serif text-dark mb-6">Meet {siteConfig.founder.name}</h2>
        <p className="text-charcoal/70 leading-relaxed mb-8">{siteConfig.founder.bio}</p>
        <button className="flex items-center gap-3 text-primary text-[10px] uppercase tracking-[0.2em] font-bold group">
          Read the full story <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>
  );
}