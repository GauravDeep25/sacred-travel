import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-dark text-base/80 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-white text-3xl font-serif font-bold mb-1">
                {siteConfig.company.name}
              </div>
              <div className="text-accent text-[10px] uppercase tracking-[0.4em]">
                {siteConfig.company.tagline}
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-base/50 italic">
              Experience the world through a lens of reverence and ancient wisdom.
            </p>
            <div className="flex gap-5 text-[10px] uppercase tracking-widest text-white/40">
              <a href="#" className="hover:text-accent transition-colors flex items-center gap-1">
                Instagram <ArrowUpRight size={10} />
              </a>
              <a href="#" className="hover:text-accent transition-colors flex items-center gap-1">
                Facebook <ArrowUpRight size={10} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-[11px] uppercase tracking-[0.3em] font-bold mb-8">Explore</h4>
            <ul className="flex flex-col gap-4 text-sm">
              {siteConfig.navigation.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[11px] uppercase tracking-[0.3em] font-bold mb-8">Reach Us</h4>
            <ul className="flex flex-col gap-6 text-sm">
              <li className="flex items-start gap-4">
                <Mail size={16} className="text-primary mt-1" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-white/30">Email</span>
                  <a href={`mailto:${siteConfig.company.email}`} className="hover:text-white transition-colors underline underline-offset-4 decoration-white/10">
                    {siteConfig.company.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MessageCircle size={16} className="text-primary mt-1" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-white/30">WhatsApp</span>
                  <a href={`https://wa.me/${siteConfig.company.whatsapp}`} className="hover:text-white transition-colors">
                    {siteConfig.company.whatsapp}
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[11px] uppercase tracking-[0.3em] font-bold mb-8">Presence</h4>
            <div className="flex flex-col gap-4 text-sm">
              <p className="leading-relaxed text-base/50">
                [OFFICE ADDRESS] <br />
                [CITY, PINCODE]
              </p>
              <div className="mt-4 border-l border-primary/30 pl-4 py-1 italic text-xs text-white/40">
                Private consultations available by appointment.
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            © {new Date().getFullYear()} {siteConfig.company.name}.
          </div>
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] text-white/40">
            <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
      <a 
        href={`https://wa.me/${siteConfig.company.whatsapp}`}
        className="whatsapp-float group"
      >
        <MessageCircle size={28} fill="currentColor" />
      </a>
    </footer>
  );
}
