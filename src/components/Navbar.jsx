import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Tracks mobile menu state
  const location = useLocation();
  
  // List of all routes that should start with a transparent navbar
  const heroRoutes = [
    "/", 
    "/domestic", 
    "/international", 
    "/spiritualjourney", 
    "/experiences", 
    "/about",
    "/contact",
  ];
  
  const isPageTop = heroRoutes.includes(location.pathname);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu automatically when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // If the menu is open, force the navbar to be solid and text to be dark
  const isSolid = !isPageTop || isScrolled || isOpen;
  const textColor = isSolid ? 'text-dark' : 'text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isSolid ? 'bg-base/95 shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex flex-col relative z-50">
          <span className={`text-2xl font-serif font-bold transition-colors ${textColor}`}>
            {siteConfig.company.name}
          </span>
          <span className={`text-[9px] uppercase tracking-[0.3em] transition-colors ${isSolid ? 'text-primary' : 'text-accent'}`}>
            {siteConfig.company.tagline}
          </span>
        </Link>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-medium">
          <Link to="/domestic" className={`${textColor} hover:text-accent transition-colors`}>Domestic</Link>
          <Link to="/international" className={`${textColor} hover:text-accent transition-colors`}>International</Link>
          <Link to="/spiritualjourney" className={`${textColor} hover:text-accent transition-colors`}>Spiritual Journey</Link>
          <Link to="/experiences" className={`${textColor} hover:text-accent transition-colors`}>Experiences</Link>
          <Link to="/about" className={`${textColor} hover:text-accent transition-colors`}>About</Link>
          <Link to="/contact" className={`${textColor} hover:text-accent transition-colors`}>Contact Us</Link>
        </div>

        {/* ENQUIRE BUTTON & HAMBURGER TOGGLE */}
        <div className="flex items-center gap-4 relative z-50">
          <a href={`https://wa.me/${siteConfig.company.whatsapp}`} className="hidden md:block rounded-sm bg-primary text-white px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-dark transition-all">
            Enquire
          </a>

          {/* ANIMATED HAMBURGER BUTTON (Mobile Only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden relative w-6 h-[18px] flex flex-col justify-between focus:outline-none transition-colors ${textColor}`}
            aria-label="Toggle Menu"
          >
            {/* Top Line */}
            <span className={`block w-full h-[2px] bg-current transform transition duration-300 ease-in-out origin-center ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
            {/* Middle Line */}
            <span className={`block w-full h-[2px] bg-current transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            {/* Bottom Line */}
            <span className={`block w-full h-[2px] bg-current transform transition duration-300 ease-in-out origin-center ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-base border-t border-dark/10 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 py-8 shadow-2xl' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-[11px] uppercase tracking-widest font-medium text-dark">
          <Link to="/domestic" className="hover:text-accent transition-colors">Domestic</Link>
          <Link to="/international" className="hover:text-accent transition-colors">International</Link>
          <Link to="/spiritualjourney" className="hover:text-accent transition-colors">Spiritual Journey</Link>
          <Link to="/experiences" className="hover:text-accent transition-colors">Experiences</Link>
          <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          <Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
          
          <a href={`https://wa.me/${siteConfig.company.whatsapp}`} className="mt-4 rounded-sm bg-primary text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-dark transition-all">
            Enquire Now
          </a>
        </div>
      </div>
    </nav>
  );
}
