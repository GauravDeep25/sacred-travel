import React from 'react';
import SpiritualRegionalBanner from './SpiritualRegionalBanner';
import SpiritualCardsGrid from './SpiritualCardsGrid';
import { siteConfig } from '../../data/siteConfig';
import { motion } from 'framer-motion';

export default function EastDirection() {
  const data = siteConfig.spiritualjourney.directions.east;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <SpiritualRegionalBanner cat={data} />
      <SpiritualCardsGrid cards={data.cards} />
    </motion.div>
  );
}
