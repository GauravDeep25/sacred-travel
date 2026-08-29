import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function ExperiencesGrid() {
  const categories = siteConfig.experiences.categories;
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="py-28 px-6 bg-base">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="eyebrow">Six ways in</span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark max-w-xl leading-tight">
            Choose your depth.
          </h2>
        </div>

        {/* 3-column grid — alternating card heights for visual rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/8">
          {categories.map((cat, i) => {
            const isActive = activeId === cat.id;
            // Alternate tall/normal heights for rhythm
            const heights = ['h-[500px]', 'h-[420px]', 'h-[500px]', 'h-[420px]', 'h-[500px]', 'h-[420px]'];
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden bg-dark cursor-pointer ${heights[i]}`}
                onClick={() => setActiveId(isActive ? null : cat.id)}
                onMouseEnter={() => setActiveId(cat.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                {/* Background Image */}
                <motion.img
                  src={cat.img}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{ scale: isActive ? 1.08 : 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />

                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                {/* Hover overlay tint */}
                <motion.div
                  className="absolute inset-0 bg-dark/20"
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/* Always visible */}
                  <span className="text-accent text-[10px] uppercase tracking-[0.45em] font-bold block mb-2">
                    {cat.eyebrow}
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl font-serif leading-tight mb-3">
                    {cat.title}
                  </h3>

                  {/* Revealed on hover */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.35 }}
                      >
                        <p className="text-white/70 text-sm leading-relaxed mb-5 font-sans">
                          {cat.desc}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {cat.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] uppercase tracking-[0.2em] border border-white/20 text-white/60 px-2 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 text-accent text-[10px] uppercase tracking-[0.35em] font-bold"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Enquire about this <ArrowRight size={12} />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card number badge — top right */}
                <div className="absolute top-6 right-6 text-white/15 font-serif text-5xl leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
