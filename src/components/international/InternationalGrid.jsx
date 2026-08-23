import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';
import RegionalBanner from './RegionalBanner';
import CardsGrid from './CardsGrid';

export default function InternationalGrid() {
  return (
    <>
      {/* --- CATEGORY NAVIGATION BAR --- */}
      {/* Updated to be responsive and fixed the pxpx typo */}
      <div className="border-b border-gray-200 bg-[#f5f3ef] sticky top-0 md:top-[55px] z-40">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center md:justify-start gap-6 px-5 py-5 sm:px-8">
          {siteConfig.international.categories?.map((cat, i) => {
            const sectionId = cat.bannerTitle.toLowerCase().replace(/\s+/g, '-');
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

      {/* --- GRID SECTION --- */}
      <section className="pt-24 px-6 pb-0">
        {siteConfig.international.categories?.map((cat, i) => {
          const sectionId = cat.bannerTitle.toLowerCase().replace(/\s+/g, '-');
          
          return (
            <motion.div 
              key={i} 
              id={sectionId}
              className="scroll-mt-32" /* Adds top margin for scroll targeting */
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
