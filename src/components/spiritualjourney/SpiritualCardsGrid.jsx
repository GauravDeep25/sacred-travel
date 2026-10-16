import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, CalendarDays } from 'lucide-react';
import { getDestinationPackages, getPackageSlug, extractDurationShort } from '../../data/itineraryRegistry';

export default function SpiritualCardsGrid({ cards }) {
  if (!cards || cards.length === 0) return null;
  return (
    <div className="mt-8 space-y-6">
      {cards.map((card, i) => {
        const pkgs = card.itineraryId ? getDestinationPackages(card.itineraryId) : [];

        return (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <article className="rounded-none border border-[#E5E3DB] bg-[#FCFBF8] p-8 sm:p-10">
              <h4 className="font-serif text-2xl text-gray-900">{card.cardTitle}</h4>
              <div className="h-[1px] w-12 bg-accent my-6"></div>
              <p className="mt-5 text-sm leading-relaxed text-gray-600">
                {card.cardDesc}
              </p>
              <div className="mt-6">
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

              <div className="mt-8 flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-4">
                  {card.itineraryId && (
                    <Link
                      to={`/itinerary/${card.itineraryId}`}
                      className="inline-flex items-center justify-center gap-2 border border-accent rounded-md px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-white"
                    >
                      View Itinerary {pkgs.length > 1 && <span className="opacity-80 font-normal">({pkgs.length} circuits)</span>}
                    </Link>
                  )}
                  <a
                    href={`https://wa.me/918591262424?text=I'm%20interested%20in%20the%20${encodeURIComponent(card.cardTitle)}%20journey.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block border-b border-gray-300 pb-1 text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500 hover:text-primary hover:border-primary transition-colors"
                  >
                    Enquire via WhatsApp
                  </a>
                </div>

                {pkgs.length > 1 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold mr-1">Circuits:</span>
                    {pkgs.map((p, pIdx) => {
                      const slug = getPackageSlug(p, card.itineraryId, pIdx);
                      const dur = extractDurationShort(p.duration);
                      return (
                        <Link
                          key={p.id || pIdx}
                          to={`/itinerary/${card.itineraryId}/${slug}`}
                          className="text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[#F5F3EF] hover:bg-[#D4A373]/20 text-[#332D29] hover:text-[#b8864e] border border-gray-200 transition-colors"
                        >
                          {dur}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </article>
          </motion.div>
        );
      })}
    </div>
  );
}
