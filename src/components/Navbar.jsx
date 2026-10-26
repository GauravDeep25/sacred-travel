import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, MessageCircle, Phone, Mail, Compass } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { trackWhatsAppClick } from '../utils/analytics';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Controls side drawer state
  const location = useLocation();

  const heroRoutes = [
    "/", 
    "/group-trips",
    "/grouptrips",
    "/group-tours",
    "/grouptours",
    "/domestic", 
    "/international", 
    "/spiritualjourney", 
    "/experiences", 
    "/about",
    "/contact",
    "/enquiry",
    "/enquire",
    "/thank-you",
    "/thankyou",
  ];
  
  const isPageTop = heroRoutes.includes(location.pathname) || location.pathname.startsWith('/itinerary') || location.pathname.startsWith('/itenary');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key to close drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isSolid = !isPageTop || isScrolled;
  const textColor = isSolid ? 'text-dark' : 'text-white';

  const navLinks = [
    { name: "Home", path: "/", num: "01" },
    { name: "Group Trips", path: "/group-trips", num: "02",},
    { name: "Domestic", path: "/domestic", num: "03" },
    { name: "International", path: "/international", num: "04" },
    { name: "Spiritual Journey", path: "/spiritualjourney", num: "05" },
    { name: "Experiences", path: "/experiences", num: "06" },
    { name: "About", path: "/about", num: "07" },
    { name: "Contact Us", path: "/contact", num: "08" },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isSolid ? 'bg-base/95 shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo on Left */}
          <Link to="/" className="flex flex-col relative z-50">
            <span className="text-2xl font-serif font-bold transition-colors">
              <span className="text-primary">Yuga</span>
              <span className={isSolid ? 'text-dark' : 'text-white'}>tirtha</span>
            </span>
            <span className={`text-[9px] uppercase tracking-[0.3em] transition-colors ${isSolid ? 'text-primary' : 'text-white'}`}>
              {siteConfig.company.tagline}
            </span>
          </Link>

          {/* Right Controls: Enquire button followed directly by 3-line hamburger menu */}
          <div className="flex items-center gap-3 sm:gap-4 relative z-50">
            <a 
              href={`https://wa.me/${siteConfig.company.whatsapp}`} 
              onClick={() => trackWhatsAppClick('navbar_enquire')}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-primary text-white px-5 sm:px-6 py-2 sm:py-2.5 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold hover:bg-dark transition-all shadow-xs"
            >
              Enquire
            </a>

            {/* 3-line hamburger button just after Enquire */}
            <button
              onClick={() => setIsOpen(true)}
              className={`group flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-lg border transition-all duration-300 cursor-pointer ${
                isSolid 
                  ? 'border-dark/20 text-dark hover:border-primary hover:text-primary hover:bg-dark/5' 
                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
              }`}
              aria-label="Open Navigation Menu"
              aria-expanded={isOpen}
            >
              <span className="hidden sm:inline text-[10px] uppercase tracking-[0.2em] font-semibold pl-1">
                Menu
              </span>
              <div className="w-5 h-[14px] flex flex-col justify-between items-center">
                <span className="block w-5 h-[2px] bg-current rounded-full transition-transform duration-300 group-hover:scale-x-110" />
                <span className="block w-3.5 h-[2px] bg-current rounded-full self-end transition-all duration-300 group-hover:w-5" />
                <span className="block w-5 h-[2px] bg-current rounded-full transition-transform duration-300 group-hover:scale-x-110" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Side Navigation Drawer opening from the Right */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex justify-end">
            
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Slide-out Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative w-full max-w-md sm:max-w-lg bg-[#14100c] text-[#F5F3EF] h-full shadow-2xl flex flex-col z-10 border-l border-[#2b2219] overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="p-6 sm:p-8 flex items-center justify-between border-b border-white/10">
                <div className="flex flex-col">
                  <div className="text-xl font-serif font-bold">
                    <span className="text-white">Yuga</span>
                    <span className="text-primary">tirtha</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4A373]">
                    {siteConfig.company.tagline}
                  </span>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#D4A373] hover:rotate-90 transition-all duration-300 cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="flex-1 px-6 sm:px-10 py-8">
                <p className="text-[#D4A373] text-[9px] font-semibold uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                  <Compass size={12} className="text-[#D4A373]" />
                  <span>Explore Pilgrimages & Journeys</span>
                </p>

                <ul className="space-y-4">
                  {navLinks.map((link, i) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + i * 0.04 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`group flex items-center justify-between py-2 text-lg sm:text-2xl font-serif transition-colors ${
                            isActive ? 'text-[#D4A373]' : 'text-white/90 hover:text-[#D4A373]'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-xs font-sans tracking-widest text-white/40 group-hover:text-[#D4A373] transition-colors">
                              {link.num}
                            </span>
                            <span>{link.name}</span>
                            {link.badge && (
                              <span className="text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#D4A373]/20 text-[#D4A373] border border-[#D4A373]/30">
                                {link.badge}
                              </span>
                            )}
                          </div>

                          <ArrowRight 
                            size={16} 
                            className={`transform transition-transform duration-300 group-hover:translate-x-1 ${
                              isActive ? 'text-[#D4A373] opacity-100' : 'text-white/30 opacity-0 group-hover:opacity-100'
                            }`}
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* Drawer Footer & Direct Concierge */}
              <div className="p-6 sm:p-8 bg-black/40 border-t border-white/10 space-y-5">
                <a
                  href={`https://wa.me/${siteConfig.company.whatsapp}`}
                  onClick={() => {
                    trackWhatsAppClick('drawer_cta');
                    setIsOpen(false);
                  }}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-[#c97524] text-white py-3.5 px-6 rounded-md text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] transition-all shadow-md cursor-pointer"
                >
                  <MessageCircle size={16} />
                  <span>Chat with Travel Concierge</span>
                </a>

                <div className="grid grid-cols-2 gap-4 pt-2 text-xs text-white/60">
                  <div className="flex items-start gap-2">
                    <Phone size={13} className="text-[#D4A373] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-white/40">Helpline</span>
                      <a href={`tel:${siteConfig.company.whatsapp}`} className="hover:text-white transition-colors">
                        {siteConfig.company.whatsapp}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Mail size={13} className="text-[#D4A373] mt-0.5 flex-shrink-0" />
                    <div className="min-w-0">
                      <span className="block text-[9px] uppercase tracking-wider text-white/40">Email</span>
                      <a href={`mailto:${siteConfig.company.email}`} className="hover:text-white transition-colors truncate block">
                        {siteConfig.company.email}
                      </a>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-white/30 text-center tracking-wider pt-1">
                  Prompt travel coordination within 24 hours
                </p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
