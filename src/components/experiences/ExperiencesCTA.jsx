import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';

export default function ExperiencesCTA() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={containerRef}
      className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center"
    >
      {/* PARALLAX BG */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
        <div className="absolute inset-0 bg-dark/60 z-10" />
        <img
          src="/assets/hero-spiti.jpg"
          className="w-full h-full object-cover"
          alt="Sacred Himalayan landscape"
        />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-20 text-center px-6 max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-accent text-[10px] uppercase tracking-[0.55em] font-bold block mb-6"
        >
          Every journey begins with a conversation
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-serif italic leading-tight mb-4"
        >
          Which experience<br />calls to you?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-white/55 font-sans text-sm leading-relaxed mb-12 max-w-md mx-auto"
        >
          Tell us what you're looking for. We'll research the real access and come back with a proposal that's honest about what's possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="bg-primary border border-primary text-white px-12 py-4 text-[10px] uppercase tracking-[0.35em] font-bold transition-all duration-300 hover:bg-dark hover:border-dark"
          >
            Plan My Experience
          </Link>
          <a
            href={`https://wa.me/${siteConfig.company.whatsapp}?text=Namaste%20${encodeURIComponent(siteConfig.company.name)}%2C%20I%20am%20interested%20in%20a%20curated%20experience.`}
            className="border border-white/30 text-white px-12 py-4 text-[10px] uppercase tracking-[0.35em] font-bold backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-dark"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
