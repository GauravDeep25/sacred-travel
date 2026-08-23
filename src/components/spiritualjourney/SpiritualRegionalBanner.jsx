import React from 'react';
import { motion } from 'framer-motion';

export default function SpiritualRegionalBanner({ cat }) {
  if (!cat) return null;
  return (
    <div className="relative h-72 overflow-hidden rounded-none">
      <img 
        src={cat.img} 
        alt={cat.bannerTitle} 
        loading="lazy" 
        className="size-full object-cover" 
      />
      <div className="absolute inset-x-0 bottom-0 z-10 p-8 pt-24 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="font-display text-3xl text-white sm:text-4xl">
          {cat.bannerTitle}
        </h3>
        <p className="mt-2 max-w-xl text-sm text-white/80">
          {cat.bannerDesc}
        </p>
      </div>
    </div>
  );
}
