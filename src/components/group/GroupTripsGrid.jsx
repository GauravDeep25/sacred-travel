import React from 'react';
import { motion } from 'framer-motion';
import { groupToursSiteConfig } from '../../data/groupTours';
import RegionalBanner from '../domestic/RegionalBanner';
import CardsGrid from '../domestic/CardsGrid';

export default function GroupTripsGrid({ 
  categories = groupToursSiteConfig.categories, 
  itineraries = groupToursSiteConfig.itineraries 
}) {
  return (
    <>
      <div className="border-b border-gray-200 bg-[#f5f3ef] sticky top-[55.5px] z-40">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center md:justify-start gap-6 px-5 py-5 sm:px-8">
          {categories.map((cat, i) => {
            const sectionId = cat.bannerTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
              <a 
                key={i}
                href={`#${sectionId}`} 
                className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 hover:text-[#D4A373] transition-colors"
              >
                {cat.bannerTitle}
              </a>
            );
          })}
        </div>
      </div>

      <section className="pt-24 px-6 pb-0">
        {categories.map((cat, i) => {
          const sectionId = cat.bannerTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return (
            <motion.div 
              key={i} 
              id={sectionId}
              className="scroll-mt-32"
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="max-w-7xl mx-auto px-6 mb-24">
                <RegionalBanner cat={cat} />
                <CardsGrid cards={cat.cards} itineraries={itineraries} />
              </div>
            </motion.div>
          );
        })}
      </section>
    </>
  );
}
