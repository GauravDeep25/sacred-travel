import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';
import SpiritualGrid from '../components/spiritualjourney/SpiritualGrid';

export default function SpiritualJourney() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % siteConfig.spiritualjourney.hero.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []); 

  const staticContent = siteConfig.spiritualjourney.hero[0];

  return (
    <div className="bg-base min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="veil relative flex min-h-[62vh] items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          {siteConfig.spiritualjourney.hero.map((slide, i) => (
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

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-16 sm:px-8">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
            className="eyebrow text-gold"
          >
            {staticContent.eyebrow}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.7 }} 
            className="mt-4 max-w-3xl font-display text-4xl text-ivory sm:text-6xl"
          >
            {staticContent.h1} <span className="italic text-accent">{staticContent.h1Italic}</span>
          </motion.h1>

          <div className="h-[1px] w-48 bg-gradient-to-r from-accent to-transparent my-8"></div>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5, delay: 1 }} 
            className="max-w-2xl text-sm leading-relaxed text-ivory/85 sm:text-base"
          >
            {staticContent.sub}
          </motion.p>
        </div>
      </section>

      {/* --- WHEEL SELECTOR & GRID COMPONENT --- */}
      <SpiritualGrid />

      {/* --- PAN-INDIA FLAGSHIPS SECTION --- */}
      <section className="bg-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-accent">
              Pan-India flagships
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-white">
              The great cross-regional circuits
            </h2>
            {/* The fading gradient line under the heading */}
            <div className="h-[1px] w-48 bg-gradient-to-r from-accent to-transparent my-8"></div>
          </motion.div>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {siteConfig.spiritualjourney.flagships?.map((flag, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Sharp corners, thin transparent white border, transparent background */}
                <div className="h-full rounded-none border border-white/20 bg-transparent p-10">
                  <h3 className="font-serif text-3xl text-[#E5D3B3]">
                    {flag.title || flag.cardTitle}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-white/80">
                    {flag.desc || flag.cardDesc}
                  </p>
                  
                  {/* Footer details aligned to bottom with proper spacing */}
                  <div className="mt-12 flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium">
                    <span>{flag.duration}</span>
                    <span>{flag.season || flag.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* --- ENQUIRE FORM SECTION --- */}
      <section className="bg-muted/60 py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">Enquire</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Plan a pilgrimage</h2>
            <div className="gold-rule my-6 max-w-40"></div>
            <p className="mb-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Share the circuit, the travellers and any ritual requirements — we will handle priests, timings and access.
            </p>

            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow">Name</label>
                  <input id="name" required placeholder="Your full name" className="w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary" name="name" />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow">Email</label>
                  <input id="email" type="email" required placeholder="you@email.com" className="w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary" name="email" />
                </div>
                <div>
                  <label htmlFor="phone" className="eyebrow">Phone</label>
                  <input id="phone" placeholder="+91 ..." className="w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary" name="phone" />
                </div>
                <div>
                  <label htmlFor="destination" className="eyebrow">Destination Interest</label>
                  <input id="destination" placeholder="Char Dham, Kashmir, Kerala..." className="w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary" name="destination" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow">Message</label>
                <textarea id="message" name="message" rows="3" placeholder="Tell us about the journey you have in mind." className="w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"></textarea>
              </div>

              <button type="submit" className="rounded-sm bg-primary px-8 py-3.5 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground">
                Send Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
