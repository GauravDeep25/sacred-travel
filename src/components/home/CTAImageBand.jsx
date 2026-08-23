import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function CTAImageBand() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center"
    >
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-dark/40 z-10" />
        <img 
          src="https://placehold.co/1920x1080/2A1F1A/FAF6F0?text=[FULL+BLEED+CTA+IMAGE]" 
          className="w-full h-full object-cover scale-110" 
          alt="Sacred landscape"
        />
      </motion.div>

      <div className="relative z-20 text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-5xl font-serif mb-10 italic max-w-3xl leading-tight"
        >
          Every journey begins with a single conversation.
        </motion.h2>
        <motion.button 
          className="rounded-sm bg-primary text-white pill-button border border-accent hover:bg-accent"
        >
          Plan My Journey
        </motion.button>
      </div>
    </section>
  );
}
