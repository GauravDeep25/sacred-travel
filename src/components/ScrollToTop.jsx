import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    // Single fixed container for BOTH floating buttons ensuring perfect vertical alignment
    <div className="fixed bottom-8 right-6 z-50 flex flex-col items-center gap-4">
      
      {/* 1. Scroll To Top Button (Pops in/out based on scroll) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-dark active:scale-95 cursor-pointer border border-white/20"
            >
              <ArrowUp size={20} strokeWidth={2.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. WhatsApp Button (Always visible) */}
      <a 
        href={`https://wa.me/${siteConfig.company.whatsapp}`}
        className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
      
    </div>
  );
}
