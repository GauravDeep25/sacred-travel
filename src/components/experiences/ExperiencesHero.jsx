import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';

export default function ExperiencesHero() {
  const [index, setIndex] = useState(0);
  const slides = siteConfig.experiences.hero;

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  const current = slides[index];

  return (
    <section className="relative h-[85vh] w-full flex items-end justify-start overflow-hidden bg-dark">
      {/* BG LAYERS */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15 z-10" />
            <img
              src={slide.img}
              className="w-full h-full object-cover ken-burns"
              alt=""
              crossOrigin="anonymous"
            />
          </motion.div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-20 px-8 md:px-16 pb-24 md:pb-32 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <span className="text-accent text-[10px] uppercase tracking-[0.55em] font-bold block mb-5">
              {current.eyebrow}
            </span>
            <h1 className="text-white text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.04] mb-6">
              {current.h1} <br />
              <span className="italic text-accent">{current.h1Italic}</span>
            </h1>
            <p className="text-white/60 max-w-md font-sans text-sm md:text-base leading-relaxed">
              {current.sub}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SLIDE DOTS */}
      <div className="absolute z-30 bottom-10 right-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-500 rounded-full ${
              i === index ? 'w-8 h-1.5 bg-primary' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* SCROLL CUE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-white/25 text-[9px] uppercase tracking-[0.45em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-px h-8 bg-gradient-to-b from-white/35 to-transparent"
        />
      </motion.div>
    </section>
  );
}
