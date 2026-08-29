import React from 'react';
import { motion } from 'framer-motion';

const ITEMS = [
  'Darshan Access',
  'Sunrise Rituals',
  'Storytelling Walks',
  'Yoga & Meditation',
  'Heritage Stays',
  'Culinary Immersion',
  'Wilderness Camps',
  'Monastery Visits',
  'Ganga Aarti',
  'Desert Nights',
];

export default function ExperiencesMarquee() {
  // Duplicate for seamless loop
  const items = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-primary overflow-hidden py-4 select-none">
      <motion.div
        className="flex gap-12 whitespace-nowrap w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="text-white text-[10px] uppercase tracking-[0.4em] font-bold inline-flex items-center gap-12"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-white/40 inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
