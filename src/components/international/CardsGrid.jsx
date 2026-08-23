import React from 'react';
import { motion } from 'framer-motion';

export default function CardsGrid({ cards }) {
  // Prevent rendering if there are no cards
  if (!cards || cards.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((card, j) => (
        <motion.div 
          key={j} 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: j * 0.1 }}
          viewport={{ once: true }}
          className="group cursor-pointer flex"
        >
          <div className="bg-white border border-gray-200 flex flex-col group w-full">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={card.img}
                alt={card.label || card.cardTitle}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif text-gray-900 mb-3">{card.cardTitle}</h3>
              <p className="text-gray-600 text-sm font-sans mb-8 flex-grow leading-relaxed">
                {card.cardDesc}
              </p>
              <hr className="border-gray-200 mb-4" />
              
              {/* --- UPDATED MODULAR SECTION --- */}
              <div className="flex justify-between items-center text-[10px] tracking-widest font-semibold uppercase mb-5">
                <span className="text-gray-500">{card.duration}</span>
                <span className="text-emerald-700">{card.price}</span>
              </div>
              
              <a 
                href={`https://wa.me/918591262424?text=I'd%20like%20the%20itinerary%20for%3A%20${encodeURIComponent(card.cardTitle)}`} 
                target="_blank" 
                rel="noreferrer" 
                className="mt-5 inline-block border-b border-primary pb-1 text-[0.72rem] uppercase tracking-[0.22em] text-primary transition-colors hover:text-accent hover:border-accent">
                View Itinerary
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
