import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CalendarDays } from 'lucide-react';

export default function SpiritualCardsGrid({ cards }) {
  if (!cards || cards.length === 0) return null;
  return (
    <div className="mt-8 space-y-6">
      {cards.map((card, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          {/* Changed to rounded-none, explicit background, and subtle border */}
          <article className="rounded-none border border-[#E5E3DB] bg-[#FCFBF8] p-8 sm:p-10">
            <h4 className="font-serif text-2xl text-gray-900">{card.cardTitle}</h4>
            
            {/* The line below the heading */}
            <div className="h-[1px] w-12 bg-accent my-6"></div>
            
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              {card.cardDesc}
            </p>
            
            <div className="mt-6">
              {/* Styled as a gold eyebrow */}
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-accent">
                The journey includes
              </span>
              <p className="mt-2 text-sm leading-relaxed text-gray-900">
                {card.includes}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.16em] text-gray-500 font-medium">
              <span className="flex items-center gap-2">
                <Clock className="size-4 text-accent" />
                {card.duration}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays className="size-4 text-accent" />
                {card.season}
              </span>
            </div>

            <a 
              href={`https://wa.me/918591262424?text=I'm%20interested%20in%20the%20${encodeURIComponent(card.cardTitle)}%20journey.`} 
              target="_blank" 
              rel="noreferrer" 
              className="mt-8 inline-block border-b border-accent pb-1 text-[10px] uppercase tracking-[0.2em] font-semibold text-accent hover:text-primary hover:border-primary transition-colors"
            >
              Enquire about this yatra
            </a>
          </article>
        </motion.div>
      ))}
    </div>
  );
}
