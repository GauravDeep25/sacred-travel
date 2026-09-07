import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, MapPin, ArrowDown } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import IndiaMap from '../IndiaMap';
import RegionalBanner from '../domestic/RegionalBanner';
import CardsGrid from '../domestic/CardsGrid';

export default function SpiritualGrid() {
  const [selectedDirection, setSelectedDirection] = useState('north');
  const directions = siteConfig.spiritualjourney.directions;
  const directionKeys = ['north', 'south', 'east', 'west'];

  const handleMapRegionClick = (region) => {
    setSelectedDirection(region);
    const targetElement = document.getElementById(region);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const directionSummaries = {
    north: {
      name: 'North India',
      label: 'Himalayan Seats',
      circuits: 'Char Dham · Panch Kedar · Kashi & Ayodhya',
      iconColor: 'text-[#D4A373]'
    },
    south: {
      name: 'South India',
      label: 'Granite Sanctuaries',
      circuits: 'Panch Bhoota Stalam · Chola Temples · Tirupati',
      iconColor: 'text-[#D4A373]'
    },
    east: {
      name: 'East India',
      label: 'Shakti & Sacred Rivers',
      circuits: 'Shakti Peeths · Puri Jagannath · Gaya & Bodh Gaya',
      iconColor: 'text-[#D4A373]'
    },
    west: {
      name: 'West India',
      label: 'Jyotirlinga & Ocean Coast',
      circuits: 'Western Jyotirlingas · Dwarka · Ashtavinayak',
      iconColor: 'text-[#D4A373]'
    }
  };

  return (
    <>
      {/* ── INDIA MAP INTERACTIVE FEATURE SECTION ───────────── */}
      <section id="sacred-map" className="pt-20 pb-14 bg-[#faf8f5] border-b border-gray-200/80 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="eyebrow text-[#D4A373]">Sacred Geography · Four Directions</span>
            <h2 className="mt-2 font-serif text-4xl sm:text-5xl text-gray-900">
              Explore by region on the map
            </h2>
            <div className="h-[1px] w-12 bg-accent my-6"></div>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
              India's consecrated circuits are deeply tied to cardinal geography. Tap any quadrant on the map to jump directly to its consecrated journeys below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Map Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-none border border-gray-200 shadow-sm"
            >
              <div className="max-w-md mx-auto">
                <IndiaMap onRegionClick={handleMapRegionClick} />
              </div>
              <p className="mt-6 text-center text-xs text-gray-500 font-sans leading-relaxed">
                Click a region on the map (North, South, East, West) to navigate to its sacred circuit cards.
              </p>
            </motion.div>

            {/* Direction Quick Navigation Cards (Desktop only) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:flex lg:col-span-6 flex-col gap-4"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-gray-500 mb-2">
                <Compass size={16} className="text-[#D4A373]" />
                <span>Select a sacred quadrant</span>
              </div>

              {directionKeys.map((key) => {
                const info = directionSummaries[key];
                const isSelected = selectedDirection === key;
                return (
                  <a
                    key={key}
                    href={`#${key}`}
                    onClick={() => setSelectedDirection(key)}
                    className={`group p-5 border transition-all duration-300 flex items-center justify-between ${
                      isSelected 
                        ? 'border-[#D4A373] bg-white shadow-md' 
                        : 'border-gray-200 bg-white/70 hover:bg-white hover:border-[#D4A373]/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b8864e]">
                          {info.label}
                        </span>
                        <span className="text-xs text-gray-400">·</span>
                        <span className="font-serif text-lg text-gray-900 group-hover:text-primary transition-colors">
                          {info.name}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1 font-sans">
                        {info.circuits}
                      </p>
                    </div>
                    <span className="text-[#D4A373] group-hover:translate-y-1 transition-transform pl-4">
                      <ArrowDown size={16} />
                    </span>
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STICKY DIRECTION NAVIGATION BAR (LIKE DOMESTIC PAGE) ── */}
      <div className="border-b border-gray-200 bg-[#f5f3ef] sticky top-[55.5px] z-40">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center md:justify-start gap-6 px-5 py-5 sm:px-8">
          {directionKeys.map((key) => {
            const data = directions[key];
            if (!data) return null;
            return (
              <a 
                key={key}
                href={`#${key}`} 
                onClick={() => setSelectedDirection(key)}
                className={`text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                  selectedDirection === key 
                    ? 'text-[#D4A373] border-b-2 border-[#D4A373] pb-0.5' 
                    : 'text-gray-500 hover:text-[#D4A373]'
                }`}
              >
                {data.bannerTitle.replace('· Sacred circuits', '').trim()}
              </a>
            );
          })}
          <a 
            href="#sacred-map"
            className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-primary hover:text-[#D4A373] transition-colors flex items-center gap-1.5 ml-auto hidden md:flex"
          >
            <MapPin size={13} /> Sacred Map
          </a>
        </div>
      </div>

      {/* ── 3-COLUMN REGIONAL CIRCUIT GRIDS (LIKE DOMESTIC PAGE) ── */}
      <section className="pt-24 px-6 pb-0">
        {directionKeys.map((key, i) => {
          const cat = directions[key];
          if (!cat) return null;
          return (
            <motion.div 
              key={key} 
              id={key}
              className="scroll-mt-32"
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="max-w-7xl mx-auto px-6 mb-24">
                <RegionalBanner cat={cat} />
                <CardsGrid cards={cat.cards} />
              </div>
            </motion.div>
          );
        })}
      </section>
    </>
  );
}
