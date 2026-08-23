import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CardsGrid({ cards }) {
  // State to track which card is currently clicked/open
  const [selectedCard, setSelectedCard] = useState(null);

  // Prevent background scrolling when the modal is open
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCard]);

  if (!cards || cards.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, j) => (
          <motion.div 
            key={j} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: j * 0.1 }}
            viewport={{ once: true }}
            className="group flex"
          >
            {/* The card acts as a button to open the modal */}
            <div 
              onClick={() => setSelectedCard(card)}
              className="bg-white border border-gray-200 flex flex-col group w-full cursor-pointer hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={card.img}
                  alt={card.label || card.cardTitle}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-gray-900 mb-3">{card.cardTitle}</h3>
                
                {/* Use line-clamp-3 to keep grid uniform before clicking */}
                <p className="8ext-gray-600 text-sm font-sans mb-8 flex-grow leading-relaxed line-clamp-3">
                  {card.cardDesc}
                </p>
                
                <hr className="border-gray-200 mb-4" />
                <div className="flex justify-between items-center text-[10px] tracking-widest font-semibold uppercase mb-5">
                  <span className="text-gray-500">{card.duration}</span>
                  <span className="text-emerald-700">{card.price}</span>
                </div>
                
                <a 
                  href={`https://wa.me/918591262424?text=I'd%20like%20the%20itinerary%20for%3A%20${encodeURIComponent(card.cardTitle)}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  // Stop click event from bubbling up and opening the modal
                  onClick={(e) => e.stopPropagation()}
                  className="mt-auto inline-block border-b border-primary pb-1 text-[0.72rem] uppercase tracking-[0.22em] text-primary transition-colors hover:text-accent hover:border-accent w-max"
                >
                  View Itinerary
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- MODAL POPUP --- */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Content Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
            >
              {/* Close 'X' Button (Background Removed) */}
              <button 
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-900 transition-colors p-2"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              </button>

              {/* Sized Up Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto shrink-0 relative">
                <img 
                  src={selectedCard.img} 
                  alt={selectedCard.cardTitle} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Text & Details Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                <div className="flex justify-between items-center text-[10px] tracking-widest font-semibold uppercase mb-4 text-gray-500">
                  <span>{selectedCard.duration}</span>
                  <span className="text-emerald-700">{selectedCard.price}</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-6 leading-tight">
                  {selectedCard.cardTitle}
                </h3>
                
                <div className="h-[1px] w-12 bg-primary mb-6"></div>

                {/* Description Text (Darkened) */}
                <p className="text-gray-800 text-sm font-sans mb-8 flex-grow leading-relaxed line-clamp-3">
                  {selectedCard.cardDesc}
                </p>

                <a 
                  href={`https://wa.me/918591262424?text=I'd%20like%20the%20itinerary%20for%3A%20${encodeURIComponent(selectedCard.cardTitle)}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="rounded-sm bg-primary text-white px-8 py-4 text-center text-[0.72rem] uppercase tracking-[0.22em] transition-colors hover:bg-dark"
                >
                  Enquire via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
