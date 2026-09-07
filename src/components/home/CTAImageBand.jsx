import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';

export default function CTAImageBand() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax: image drifts subtly as user scrolls
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={containerRef}
      className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden flex items-center justify-center"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
        <div className="absolute inset-0 bg-dark/55 z-10" />
        <img
          src="/assets/hero-aarti.jpg"
          className="w-full h-full object-cover"
          alt="Sacred aarti ceremony"
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      {/* TEXT + CTA */}
      <div className="relative z-20 text-center px-6 max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold block mb-6"
        >
          Every journey begins with a conversation
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-white text-3xl md:text-5xl lg:text-6xl font-serif italic leading-tight mb-12"
        >
          Plan my journey
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="bg-primary border border-primary text-white px-12 py-4 text-[10px] uppercase tracking-[0.35em] font-bold transition-all duration-300 hover:bg-dark hover:border-dark"
          >
            Plan My Journey
          </Link>
          <a
            href={`https://wa.me/${siteConfig.company.whatsapp}?text=Namaste%20${encodeURIComponent(siteConfig.company.name)}%2C%20I%20would%20like%20to%20plan%20a%20journey.`}
            className="border border-white/30 text-white px-12 py-4 text-[10px] uppercase tracking-[0.35em] font-bold backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-dark"
          >
            Enquire on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
