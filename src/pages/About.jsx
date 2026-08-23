import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, HandHeart, Users, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import EnquiryForm from '../components/home/EnquiryForm';
import { Link } from 'react-router-dom';

export default function About() {
  const [index, setIndex] = useState(0);
  const aboutData = siteConfig.about;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % aboutData.hero.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [aboutData.hero.length]);

  const staticHero = aboutData.hero[0];

  return (
    <div className="bg-base">
      <section className="relative h-[70vh] w-full flex items-end overflow-hidden bg-dark">
        <div className="absolute inset-0 z-0">
          {aboutData.hero.map((slide, i) => (
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
                alt="About Hero"
                crossOrigin="anonymous"
              />
            </motion.div>
          ))}
        </div>

        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
            className="eyebrow text-accent!"
          >
            {staticHero.eyebrow}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.7 }}
            className="mt-4 text-white text-5xl md:text-7xl font-serif leading-tight"
          >
            {staticHero.h1} <br />
            <span className="italic text-accent">{staticHero.h1Italic}</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-24 bg-white/50 border-b border-dark/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[400px_1fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src={siteConfig.founder.photo} 
              alt="Founder" 
              className="rounded-sm shadow-2xl aspect-4/5 object-cover" 
            />
            <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-charcoal/40">
              {siteConfig.founder.name} · Founder & Curator
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">The curator's story</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif text-dark leading-tight">
              From high passes to <br /> <span className="italic text-accent">ancient sanctums</span>
            </h2>
            <div className="w-20 h-px bg-accent my-8" />
            <div className="space-y-6 text-charcoal/70 leading-relaxed text-lg">
              <p>{siteConfig.founder.bio}</p>
              <p className="font-serif text-2xl text-dark italic leading-relaxed">
                "{siteConfig.founder.quote}"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-base/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow">Our values</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif text-dark leading-tight">
              What we hold to
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3 ">
            <ValueCard 
              Icon={Landmark}
              title="Authenticity"
              text="Real places, real priests, real villages. No staged encounters and no borrowed itineraries."
            />
            <ValueCard 
              Icon={HandHeart}
              title="Cultural respect"
              text="We brief every traveller on custom and etiquette, and we never treat a living shrine as a photo stop."
            />
            <ValueCard 
              Icon={Users}
              title="Small groups, personal care"
              text="Journeys are kept intimate so pace, prayer and rest can bend around the people travelling."
            />
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-dark/5 bg-white/50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow">Our mission</p>
            <p className="mt-8 font-serif text-3xl md:text-4xl leading-relaxed text-dark">
              To open India's sacred geography to travellers who want more than a sight — and to do it with the care the places themselves deserve.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Link 
                to="/contact" 
                className="bg-primary text-white px-10 py-4 rounded-sm text-[10px] uppercase tracking-[0.22em] font-bold hover:bg-dark transition-all inline-block"
              >
                Connect with us
              </Link>
              <a 
                href={`https://wa.me/${siteConfig.company.whatsapp}`}
                className="flex items-center gap-3 border border-dark/10 px-10 py-4 rounded-sm text-[10px] uppercase tracking-[0.22em] font-bold hover:border-primary hover:text-primary transition-all"
              >
                <MessageCircle size={14} /> WhatsApp {siteConfig.founder.name.split(' ')[0]}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnquiryForm />
    </div>
  );
}

// Helper Sub-component
function ValueCard({ Icon, title, text }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-dark/5 p-10 rounded-sm hover:shadow-xl transition-all duration-500"
    >
      <Icon className="size-8 text-primary" strokeWidth={1.5} />
      <h3 className="mt-8 font-serif text-2xl text-dark">{title}</h3>
      <div className="w-12 h-px bg-accent/30 my-5" />
      <p className="text-sm leading-relaxed text-charcoal/60">{text}</p>
    </motion.div>
  );
}