import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import JourneyGrid from '../components/JourneyGrid';
import { siteConfig } from '../data/siteConfig';

export default function International() {
  // State for the background image slider
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        // Cycles through the images in your siteConfig
        return (prevIndex + 1) % siteConfig.international.hero.length;
      });
    }, 5000); 

    return () => clearInterval(timer);
  }, []); 

  // Fallback for static text elements 
  const staticContent = siteConfig.international.hero[0];

  return (
    <div className="bg-base min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden bg-white">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          {siteConfig.international.hero.map((slide, i) => (
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
            International <br />
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

      {/* --- SECOND SECTION (Content Grid) --- */}
      <section className="pt-24 px-6 pb-0">
        {siteConfig.international.categories?.map((cat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto px-6 mb-24">
              {/* --- REGIONAL BANNER --- */}
              <div className="relative h-[220px] w-full mb-12 overflow-hidden shadow-sm">
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Banner Text Overlay */}
                <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12">
                  <h2 className="text-white text-4xl md:text-5xl font-serif mb-3">
                    {cat.bannerTitle}
                  </h2>
                  <p className="text-white/80 text-sm md:text-base font-sans max-w-3xl leading-relaxed">
                    {cat.bannerDesc}
                  </p>
                </div>
              </div>
              {/* --- CARDS GRID --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.cards?.map((card, j) => (
                  <motion.div 
                    key={j} 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ delay: j * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer flex"
                  >
                    <div className="bg-white border border-gray-200 flex flex-col group w-full">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={card.img}
                          alt={card.label}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-2xl font-serif text-gray-900 mb-3">{card.cardTitle}</h3>
                        <p className="text-gray-600 text-sm font-sans mb-8 flex-grow leading-relaxed">
                          {card.cardDesc}
                        </p>
                        <hr className="border-gray-200 mb-4" />
                        <div className="flex justify-between items-center text-[10px] tracking-widest font-semibold uppercase mb-5">
                          <span className="text-gray-500">6 Nights / 7 Days</span>
                          <span className="text-emerald-700">From ₹42,000</span>
                        </div>
                        <button className="text-left text-[#D4A373] text-[10px] tracking-widest font-bold uppercase hover:text-[#b88655] transition-colors">
                          View Itinerary
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
