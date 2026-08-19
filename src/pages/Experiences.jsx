import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import JourneyGrid from '../components/JourneyGrid';
import { siteConfig } from '../data/siteConfig';

export default function Experiences() {
  // State for the background image slider
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        // Cycles through the images in your siteConfig
        return (prevIndex + 1) % siteConfig.home.hero.length;
      });
    }, 5000); 

    return () => clearInterval(timer);
  }, []); 

  // Fallback for static text elements 
  const staticContent = siteConfig.home.hero[0];

  return (
    <div className="bg-base min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden bg-white">
        {/* Background Image Layer */}
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
                alt="Hero background"
                crossOrigin="anonymous"
              />
            </motion.div>
          ))}
        </div>

        {/* Text Content Layer */}
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
            Curated <br />
            <span className="italic text-accent">Experiences</span>
          </motion.h1>
        </div>
      </section>

      {/* --- SECOND SECTION (Content Grid) --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            eyebrow="Discover Our" 
            title="Signature" 
            italicTitle="Experiences" 
          />
          <JourneyGrid items={siteConfig.placeholders} />
        </div>
      </section>

    </div>
  );
}
