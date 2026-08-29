import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, Globe } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Contact() {
  const [index, setIndex] = useState(0);
  const contactData = siteConfig.contact || {
    hero: [
      {
        img: "/assets/hero-temple-south.jpg",
        eyebrow: "Contact",
        h1: "Let's plan your crossing",
        alt: "Illuminated South Indian temple at dusk"
      }
    ],
    enquiry: {
      eyebrow: "Enquiry",
      title: "Tell us about your journey",
      buttonText: "Send Enquiry"
    },
    sidebar: {
      title: "Reach us directly",
      note: "We reply to every enquiry within 24 hours, and we're happy to talk through a route before you commit to anything."
    }
  };

  const heroSlides = Array.isArray(contactData.hero) ? contactData.hero : [contactData.hero];
  const staticHero = heroSlides[0] || {};

  const company = siteConfig.company || {
    name: "Yugatirtha",
    whatsapp: "+91 85912 62424",
    email: "hello@yugatirtha.com",
    website: "www.yugatirtha.com"
  };

  useEffect(() => {
    if (heroSlides.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-base">
      <section className="relative min-h-[70vh] md:h-[65vh] w-full flex items-end overflow-hidden bg-dark">
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img
                src={slide.img}
                className="w-full h-full object-cover ken-burns"
                alt={slide.alt || "Contact Hero"}
                crossOrigin="anonymous"
              />
            </motion.div>
          ))}
        </div>

        <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-32 pb-14 sm:px-8">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="eyebrow text-gold text-accent!"
          >
            {staticHero.eyebrow || "Contact"}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="mt-4 font-serif text-4xl text-white sm:text-6xl"
          >
            {staticHero.h1 || "Let's plan your crossing"}
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_380px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="eyebrow">{contactData.enquiry?.eyebrow || "Enquiry"}</p>
              <h2 className="mt-3 font-serif text-4xl text-dark">
                {contactData.enquiry?.title || "Tell us about your journey"}
              </h2>
              <div className="gold-rule my-6 max-w-40 h-[1px] bg-accent/40"></div>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="eyebrow">Name</label>
                    <input 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Your full name" 
                      className="w-full border-b border-dark/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-charcoal/40 focus:border-primary font-sans text-dark" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="eyebrow">Email</label>
                    <input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="you@email.com" 
                      className="w-full border-b border-dark/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-charcoal/40 focus:border-primary font-sans text-dark" 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="eyebrow">Phone</label>
                    <input 
                      id="phone" 
                      name="phone" 
                      placeholder="+91 ..." 
                      className="w-full border-b border-dark/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-charcoal/40 focus:border-primary font-sans text-dark" 
                    />
                  </div>
                  <div>
                    <label htmlFor="destination" className="eyebrow">Destination Interest</label>
                    <input 
                      id="destination" 
                      name="destination" 
                      placeholder="Char Dham, Kashmir, Kerala..." 
                      className="w-full border-b border-dark/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-charcoal/40 focus:border-primary font-sans text-dark" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="eyebrow">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="3" 
                    placeholder="Tell us about the journey you have in mind." 
                    className="w-full border-b border-dark/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-charcoal/40 focus:border-primary font-sans text-dark resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="rounded-sm bg-primary px-8 py-3.5 text-[0.72rem] uppercase tracking-[0.22em] text-white transition-colors hover:bg-dark cursor-pointer font-medium"
                >
                  {contactData.enquiry?.buttonText || "Send Enquiry"}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <aside className="rounded-sm border border-dark/10 bg-white/60 p-8 shadow-sm">
              <h2 className="font-serif text-2xl text-dark">
                {contactData.sidebar?.title || "Reach us directly"}
              </h2>
              <div className="gold-rule my-5 max-w-16 h-[1px] bg-accent/40"></div>
              
              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <Phone className="mt-0.5 size-5 text-primary shrink-0" />
                  <a href={`tel:${company.whatsapp}`} className="hover:text-primary transition-colors text-charcoal/90">
                    {company.whatsapp}
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <MessageCircle className="mt-0.5 size-5 text-primary shrink-0" />
                  <a 
                    href={`https://wa.me/${company.whatsapp?.replace(/[^0-9]/g, '')}?text=Namaste%20${encodeURIComponent(company.name || 'Yugatirtha')}%2C%20I%20would%20like%20to%20plan%20a%20journey.`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-primary transition-colors text-charcoal/90"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="mt-0.5 size-5 text-primary shrink-0" />
                  <a href={`mailto:${company.email}`} className="hover:text-primary transition-colors text-charcoal/90">
                    {company.email}
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <Globe className="mt-0.5 size-5 text-primary shrink-0" />
                  <span className="text-charcoal/60">
                    {company.website}
                  </span>
                </li>
              </ul>

              <p className="mt-8 text-xs leading-relaxed text-charcoal/60">
                {contactData.sidebar?.note || "We reply to every enquiry within 24 hours, and we're happy to talk through a route before you commit to anything."}
              </p>
            </aside>
          </motion.div>
        </div>
      </section>
    </div>
  );
}