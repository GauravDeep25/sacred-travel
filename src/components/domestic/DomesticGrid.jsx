import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';
import RegionalBanner from './RegionalBanner';
import CardsGrid from './CardsGrid';

export default function DomesticGrid() {
  return (
    <section className="pt-24 px-6 pb-0">
      {siteConfig.domestic.categories.map((cat, i) => (
        <motion.div 
          key={i} 
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
      ))}
    </section>
  );
}
