import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function FounderAbout() {
  const { name, photo, bio } = siteConfig.founder;
  const companyName = siteConfig.company.name;

  return (
    <section className="py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* IMAGE COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative overflow-hidden aspect-[3/4] max-w-md mx-auto md:mx-0">
            <img
              src={photo}
              alt={`${name} — Founder, ${companyName}`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Decorative corner frame */}
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-primary/20 -z-10 pointer-events-none" />
          </div>
        </motion.div>

        {/* TEXT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <span className="eyebrow">Meet the founder</span>

          <h2 className="text-4xl md:text-5xl font-serif text-dark leading-tight mb-6">
            A mountain guide who kept
            <br />
            <span className="italic text-accent">walking toward the temples</span>
          </h2>

          <div className="w-16 h-px bg-primary/25 mb-8" />

          <p className="text-charcoal/70 leading-relaxed text-base mb-10 max-w-lg">
            {bio}
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-3 text-primary text-[10px] uppercase tracking-[0.35em] font-bold group"
          >
            Read the full story{' '}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-2 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}