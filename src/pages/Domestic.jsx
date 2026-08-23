import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';
import DomesticGrid from '../components/domestic/DomesticGrid';

export default function Domestic() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % siteConfig.domestic.hero.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []); 

  const staticContent = siteConfig.domestic.hero[0];

  return (
    <div className="bg-base min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          {siteConfig.domestic.hero.map((slide, i) => (
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
                alt="Hero background"
                crossOrigin="anonymous"
              />
            </motion.div>
          ))}
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
            className="eyebrow text-white"
          >
            {staticContent.eyebrow}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.7 }} 
            className="text-white text-5xl md:text-8xl font-serif leading-[1.1] mt-4"
          >
            Domestic <br />
            <span className="italic text-accent">Journeys</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5, delay: 1 }} 
            className="text-white/70 mt-8 max-w-xl mx-auto font-sans text-sm md:text-base leading-relaxed"
          >
            {staticContent.sub}
          </motion.p>
        </div>
      </section>

      {/* --- IMPORTED GRID COMPONENT --- */}
      <DomesticGrid />
      
    </div>
  );
}
