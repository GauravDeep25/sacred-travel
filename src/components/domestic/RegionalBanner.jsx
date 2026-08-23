import React from 'react';

export default function RegionalBanner({ cat }) {
  return (
    <div className="relative h-[220px] w-full mb-12 overflow-hidden shadow-sm">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
        <img
          src={cat.img}
          alt={cat.label}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12">
        <h2 className="text-white text-4xl md:text-5xl font-serif mb-3">
          {cat.bannerTitle}
        </h2>
        <p className="text-white/80 text-sm md:text-base font-sans max-w-3xl leading-relaxed">
          {cat.bannerDesc}
        </p>
      </div>
    </div>
  );
}
