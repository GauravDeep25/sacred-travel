import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';
import InternationalGrid from '../components/international/InternationalGrid';

export default function International() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        return (prevIndex + 1) % siteConfig.international.hero.length;
      });
    }, 5000); 

    return () => clearInterval(timer);
  }, []); 

  const staticContent = siteConfig.international.hero[0];

  return (
    <div className="bg-base min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden bg-white">
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

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
            className="eyebrow text-white tracking-widest text-[10px] uppercase"
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
            <span className="italic text-accent text-[#D4A373]">Journeys</span>
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

      {/* --- IMPORTED GRID COMPONENT (Contains the sticky navigation bar & grids) --- */}
      <InternationalGrid />

      {/* --- ENQUIRE FORM SECTION --- */}
      <section className="bg-[#f5f3ef] py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase mb-3">
              Enquire
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-gray-900">
              Ask about a region
            </h2>
            
            <hr className="border-t border-[#D4A373] w-12 my-8" />
            
            <p className="mb-12 max-w-xl text-sm leading-relaxed text-gray-600">
              Tell us the region, the dates and who is travelling — we'll send a considered itinerary, not a template.
            </p>

            <form className="space-y-10">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">
                    Name
                  </label>
                  <input 
                    id="name" 
                    required 
                    placeholder="Your full name" 
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373]" 
                    name="name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">
                    Email
                  </label>
                  <input 
                    id="email" 
                    required 
                    placeholder="you@email.com" 
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373]" 
                    type="email" 
                    name="email" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">
                    Phone
                  </label>
                  <input 
                    id="phone" 
                    placeholder="+91 ..." 
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373]" 
                    name="phone" 
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">
                    Destination Interest
                  </label>
                  <input 
                    id="destination" 
                    placeholder="Bhutan, Bali, Uzbekistan..." 
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373]" 
                    name="destination" 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="3" 
                  placeholder="Tell us about the journey you have in mind." 
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373] resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="bg-[#E2852B] text-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-[#c97524] mt-4"
              >
                Send Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
