import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text color logic: On home it starts white, on subpages it stays dark
  const textColor = (!isHome || isScrolled) ? 'text-dark' : 'text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${(!isHome || isScrolled) ? 'bg-base/95 shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className={`text-2xl font-serif font-bold ${textColor}`}>{siteConfig.company.name}</span>
          <span className={`text-[9px] uppercase tracking-[0.3em] ${(!isHome || isScrolled) ? 'text-primary' : 'text-accent'}`}>{siteConfig.company.tagline}</span>
        </Link>
        
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-medium">
          <Link to="/domestic" className={`${textColor} hover:text-accent transition-colors`}>Domestic</Link>
          <Link to="/international" className={`${textColor} hover:text-accent transition-colors`}>International</Link>
          <Link to="/about" className={`${textColor} hover:text-accent transition-colors`}>About</Link>
        </div>

        <a href={`https://wa.me/${siteConfig.company.whatsapp}`} className="rounded-sm bg-primary text-white px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-dark transition-all">
          Enquire
        </a>
      </div>
    </nav>
  );
}