import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex(prev => (prev + 1) % siteData.hero.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
      <AnimatePresence mode="wait">
        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src={siteData.hero[index].img} className="w-full h-full object-cover ken-burns" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 text-center px-6">
        <span className="text-accent uppercase tracking-[0.4em] text-[10px] block mb-4">{siteData.hero[index].eyebrow}</span>
        <h1 className="text-white text-5xl md:text-8xl font-serif leading-[1.1] mb-8">
          {siteData.hero[index].h1} <br />
          <span className="italic text-accent">{siteData.hero[index].h1Italic}</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-primary text-white pill-button">Explore Journeys</button>
          <button className="border border-white/30 text-white pill-button hover:bg-white hover:text-dark">WhatsApp Us</button>
        </div>
      </div>
    </section>
  );
}