import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
  const timer = setInterval(() => {
    setIndex((prevIndex) => {
      return (prevIndex + 1) % siteConfig.home.hero.length;
    });
  }, 5000); 

  return () => clearInterval(timer);
}, []); 
  const staticContent = siteConfig.home.hero[0];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* BACKGROUND IMAGE LAYER  */}
      <div className="absolute inset-0 z-0">
        {siteConfig.home.hero.map((slide, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={slide.img}
              className="w-full h-full object-cover ken-burns"
              alt=""
              crossOrigin="anonymous"
            />
          </motion.div>
        ))}
      </div>

      {/* TEXT CONTENT LAYER  */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.span 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="eyebrow"
        >
          {staticContent.eyebrow}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, delay: 0.7 }} 
          className="text-white text-5xl md:text-8xl font-serif leading-[1.1]"
        >
          {staticContent.h1} <br />
          <span className="italic text-accent">{staticContent.h1Italic}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5, delay: 1 }} 
          className="text-white/70 mt-8 max-w-xl mx-auto font-sans text-sm md:text-base leading-relaxed"
        >
          {staticContent.sub}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 1.3 }} 
          className="mt-12 flex flex-col md:flex-row gap-4 justify-center"
        >
          <button className="bg-primary text-white px-10 py-4 rounded-sm text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:bg-dark border border-primary">
            Explore Sacred India
          </button>
          <button className="border border-white/30 text-white px-10 py-4 rounded-sm text-[10px] uppercase tracking-[0.3em] font-bold backdrop-blur-sm hover:bg-white hover:text-dark transition-all">
            Talk to a Curator
          </button>
        </motion.div>
      </div>
    </section>
  );
}