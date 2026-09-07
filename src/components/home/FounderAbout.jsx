import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function FounderAbout() {
  const { name, photo, bio } = siteConfig.founder;
  const companyName = siteConfig.company.name;

  return (
    <section className="bg-white px-6 py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl grid items-center gap-16 md:grid-cols-2 lg:gap-24">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden md:mx-0">
            <img
              src={photo}
              alt={`${name} — Founder, ${companyName}`}
<<<<<<< HEAD
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
=======
              className="h-full w-full object-cover"
>>>>>>> 2b80d2c (siteConfig)
            />
            {/* Decorative corner frame */}
            <div className="pointer-events-none absolute -bottom-5 -right-5 -z-10 h-full w-full border border-primary/20" />
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

          <h2 className="mb-6 font-serif text-4xl leading-tight text-dark md:text-5xl">
            A mountain guide who kept
            <br />
            <span className="italic text-accent">walking toward the temples</span>
          </h2>

          <div className="mb-8 h-px w-16 bg-primary/25" />

          <p className="mb-10 max-w-lg text-base leading-relaxed text-charcoal/70">
            {bio}
          </p>

          <Link
            to="/about"
            className="group inline-flex items-center gap-3 font-bold uppercase tracking-[0.35em] text-primary text-[10px]"
          >
            Read the full story{' '}
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
