import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
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
          <div className="h-[1px] w-12 bg-accent my-8"></div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[320px_1fr] mt-10">
          
          {/* Wheel Selector Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="self-start sticky top-32"
          >
            <div className="rounded-none border border-[#E5E3DB] bg-[#FCFBF8] p-8 sticky top-32">
              <div className="relative mx-auto aspect-square w-full max-w-64">
              <div className="absolute inset-0 rounded-full border border-[#E5E3DB]"></div>
              <div className="absolute inset-8 rounded-full border border-[#E5E3DB]"></div>
                <div className="absolute inset-0 grid place-items-center">
                  <Sparkles className="size-5 text-gold" />
                </div>
                {/* NORTH */}
                <button 
                  onClick={() => setActiveDirection('north')}
                  className={`absolute top-0 left-1/2 -translate-x-1/2 rounded-full border px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] transition-colors z-10 ${
                    activeDirection === 'north' 
                      ? 'border-primary bg-primary text-primary-foreground' 
                      : 'border-[#E5E3DB] bg-[#FCFBF8] text-muted-foreground hover:border-primary hover:text-primary'
                  }`}
                >
                  north
                </button>
                
                {/* SOUTH */}
                <button 
                  onClick={() => setActiveDirection('south')}
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] transition-colors z-10 ${
                    activeDirection === 'south' 
                      ? 'border-primary bg-primary text-primary-foreground' 
                      : 'border-[#E5E3DB] bg-[#FCFBF8] text-muted-foreground hover:border-primary hover:text-primary'
                  }`}
                >
                  south
                </button>
                
                {/* EAST */}
                <button 
                  onClick={() => setActiveDirection('east')}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 rounded-full border px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] transition-colors z-10 ${
                    activeDirection === 'east' 
                      ? 'border-primary bg-primary text-primary-foreground' 
                      : 'border-[#E5E3DB] bg-[#FCFBF8] text-muted-foreground hover:border-primary hover:text-primary'
                  }`}
                >
                  east
                </button>
                
                {/* WEST */}
                <button 
                  onClick={() => setActiveDirection('west')}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-full border px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] transition-colors z-10 ${
                    activeDirection === 'west' 
                      ? 'border-primary bg-primary text-primary-foreground' 
                      : 'border-[#E5E3DB] bg-[#FCFBF8] text-muted-foreground hover:border-primary hover:text-primary'
                  }`}
                >
                  west
                </button>
              </div>
              <p className="mt-8 text-center text-xs leading-relaxed text-muted-foreground">
                Select a direction to see its sacred circuits, their mythology, ideal duration and best season.
              </p>
            </div>
          </motion.div>

          {/* Dynamic Render Based on Selection */}
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
