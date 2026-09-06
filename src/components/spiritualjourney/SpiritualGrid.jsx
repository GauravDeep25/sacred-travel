import React, { useState } from 'react';
import { motion } from 'framer-motion';
import IndiaMap from '../IndiaMap'; 

import NorthDirection from './NorthDirection';
import SouthDirection from './SouthDirection';
import EastDirection from './EastDirection';
import WestDirection from './WestDirection';

export default function SpiritualGrid() {
  const [activeDirection, setActiveDirection] = useState('north');

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">The four directions</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Choose a direction</h2>
          <div className="my-8 h-[1px] w-12 bg-accent"></div>
        </motion.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[450px_1fr]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="self-start"
          >
            <div className="rounded-none border border-[#E5E3DB] bg-[#FCFBF8] p-8">
              <IndiaMap onRegionClick={setActiveDirection} />
              <p className="mt-8 text-center text-xs leading-relaxed text-muted-foreground">
                Select a region on the map to see its sacred circuits, their mythology, ideal duration and best season.
              </p>
            </div>
          </motion.div>
          <div>
            {activeDirection === 'north' && <NorthDirection />}
            {activeDirection === 'south' && <SouthDirection />}
            {activeDirection === 'east' && <EastDirection />}
            {activeDirection === 'west' && <WestDirection />}
          </div>
        </div>
      </div>
    </section>
  );
}
