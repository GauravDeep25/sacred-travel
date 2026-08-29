import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';

export default function Hero() {
  const [index, setIndex] = useState(0);
  const slides = siteConfig.home.hero;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[index];

  return (
    <section className="relative h-screen w-full flex items-end justify-start overflow-hidden bg-dark">
      {/* BACKGROUND IMAGE LAYERS */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 z-10" />
            <img
              src={slide.img}
              className="w-full h-full object-cover ken-burns"
              alt=""
              crossOrigin="anonymous"
            />
          </motion.div>
        ))}
      </div>

      {/* TEXT CONTENT — bottom-left aligned like the reference */}
      <div className="relative z-20 px-8 md:px-16 pb-24 md:pb-32 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold block mb-5">
              {current.eyebrow}
            </span>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] mb-6">
              {current.h1} <br />
              <span className="italic text-accent">{current.h1Italic}</span>
            </h1>
            <p className="text-white/65 mt-4 max-w-lg font-sans text-sm md:text-base leading-relaxed">
              {current.sub}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/spiritualjourney"
            className="bg-primary border border-primary text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 hover:bg-dark hover:border-dark"
          >
            Explore Sacred India
          </Link>
          <a
            href={`https://wa.me/${siteConfig.company.whatsapp}?text=Namaste%20${encodeURIComponent(siteConfig.company.name)}%2C%20I%20would%20like%20to%20plan%20a%20journey.`}
            className="border border-white/30 text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-dark"
          >
            Talk to Us on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* SLIDE INDICATOR DOTS — bottom right */}
      <div className="absolute z-30 bottom-10 right-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-500 rounded-full ${
              i === index
                ? 'w-8 h-1.5 bg-primary'
                : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[9px] uppercase tracking-[0.4em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}