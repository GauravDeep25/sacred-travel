import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, ArrowRight, Compass, ShieldCheck, Clock, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function ThankYou() {
  const location = useLocation();
  const state = location.state || {};
  const name = state.name ? state.name.trim() : '';
  const destination = state.destination ? state.destination.trim() : '';
  const email = state.email ? state.email.trim() : '';
  const activationNotice = Boolean(state.activationNotice);

  const company = siteConfig.company || {
    name: "Yugatirtha",
    whatsapp: "+91 85912 62424",
    email: "info@yugatirtha.com"
  };

  const slides = siteConfig.home?.hero || [
    {
      img: "/assets/hero-spiti.jpg",
      h1: "Find Peace among Peaks"
    }
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  // Preload slides for smooth transitions
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.img;
    });
  }, [slides]);

  // Rotate hero slides matching the home page
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Thank You | Yugatīrtha";

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.yugatirtha.com/thank-you');
  }, []);

  const whatsappMsg = encodeURIComponent(
    `Hello Yugatirtha team, I just submitted an enquiry${name ? ` for ${name}` : ''}${destination ? ` regarding ${destination}` : ''}. I would like to connect with a journey specialist.`
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* ── Hero Banner with Home Page Background ── */}
      <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-28 overflow-hidden bg-dark">
        {/* BACKGROUND IMAGE LAYERS — same as home page */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: i === heroIndex ? 1 : 0 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/45 md:via-black/60 md:to-black/35 z-10" />
              <img
                src={slide.img}
                className="w-full h-full object-cover ken-burns"
                alt={slide.h1 || "Thank you hero background"}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                decoding="async"
              />
            </motion.div>
          ))}
        </div>

        {/* Subtle decorative background glow */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4A373] blur-[140px] rounded-full" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#D4A373]/20 border border-[#D4A373]/40 flex items-center justify-center text-[#D4A373] mb-6 shadow-lg shadow-[#D4A373]/10"
          >
            <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#D4A373] text-[11px] uppercase tracking-[0.3em] font-semibold mb-3"
          >
            Enquiry Received · Yugatīrtha
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-white leading-tight"
          >
            {name ? `Thank you, ${name}.` : 'Thank you for reaching out.'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-white/80 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed"
          >
            Your request{destination ? <> for <strong>{destination}</strong></> : ''} has been safely forwarded to our curation team. We treat every itinerary as a sacred, unhurried journey.
          </motion.p>

          {activationNotice && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 inline-block text-left bg-amber-500/15 border border-amber-500/30 text-amber-200 px-4 py-3 rounded text-xs max-w-xl"
            >
              <strong>Notice:</strong> If this is your first enquiry from this address, please check your inbox for any one-time email confirmation.
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Main Content Cards ── */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-12 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: What to Expect Next (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 p-8 sm:p-10 shadow-xs">
              <p className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase mb-2">
                The Next Steps
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-6">
                What happens now?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4A373]/15 text-[#b8864e] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    01
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-gray-900 mb-1">
                      Dedicated Specialist Review
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our regional curator reviews your group dynamics, dates, accessibility needs, and temple/circuit preferences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4A373]/15 text-[#b8864e] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    02
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-gray-900 mb-1">
                      Tailored Circuit Blueprint
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Rather than a rigid package, we prepare a day-by-day plan with vetted accommodations, private transport, and darshan or experience timings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4A373]/15 text-[#b8864e] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    03
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-gray-900 mb-1">
                      Direct Touchpoint Within 24 Hours
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We will contact you via email {email ? <>at <strong>{email}</strong></> : ''} or WhatsApp with your customized itinerary.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enquiry Summary Pill if user submitted info */}
              {(destination || email) && (
                <div className="mt-8 pt-6 border-t border-gray-100 bg-[#FAF9F6] p-4 rounded-sm">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Enquiry Summary
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                    {destination && (
                      <div className="flex items-center gap-2">
                        <Compass size={14} className="text-[#D4A373]" />
                        <span>Destination: <strong>{destination}</strong></span>
                      </div>
                    )}
                    {email && (
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-[#D4A373]" />
                        <span>Email: <strong>{email}</strong></span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-[#D4A373]" />
                      <span>Response SLA: <strong>Within 24 Hours</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-[#D4A373]" />
                      <span>Direct Assistance: <strong>Available</strong></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation links to continue exploring */}
            <div className="bg-white border border-gray-200 p-8 sm:p-10">
              <p className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase mb-2">
                Continue Exploring
              </p>
              <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-5">
                Discover more of our curated journeys
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                  to="/domestic"
                  className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#D4A373] hover:bg-[#FAF9F6] transition-colors group"
                >
                  <span className="font-serif text-base text-gray-900 group-hover:text-[#b8864e] flex items-center justify-between">
                    Domestic <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="text-[11px] text-gray-500 mt-1">Kashmir, Ladakh, Himachal & Northeast</span>
                </Link>

                <Link
                  to="/spiritualjourney"
                  className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#D4A373] hover:bg-[#FAF9F6] transition-colors group"
                >
                  <span className="font-serif text-base text-gray-900 group-hover:text-[#b8864e] flex items-center justify-between">
                    Spiritual <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="text-[11px] text-gray-500 mt-1">Char Dham, Jyotirlingas & Panch Kedar</span>
                </Link>

                <Link
                  to="/international"
                  className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#D4A373] hover:bg-[#FAF9F6] transition-colors group"
                >
                  <span className="font-serif text-base text-gray-900 group-hover:text-[#b8864e] flex items-center justify-between">
                    International <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="text-[11px] text-gray-500 mt-1">Bali, Japan, Georgia & Vietnam</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Instant Contact & WhatsApp */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#1a1209] text-white p-8">
              <div className="w-10 h-10 rounded-full bg-[#E2852B]/20 text-[#E2852B] flex items-center justify-center mb-5">
                <MessageCircle size={20} />
              </div>

              <p className="text-[#D4A373] text-[10px] tracking-widest uppercase font-semibold mb-2">
                Need Instant Help?
              </p>
              <h3 className="font-serif text-2xl mb-3 leading-snug">
                Connect Directly on WhatsApp
              </h3>
              <p className="text-white/70 text-xs leading-relaxed mb-6">
                If your journey is coming up soon or you wish to speak directly with an expedition lead right away, message our desk directly.
              </p>

              <a
                href={`https://wa.me/${company.whatsapp?.replace(/[^0-9]/g, '')}?text=${whatsappMsg}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#E2852B] text-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#c97524] transition-colors shadow-md"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>

              <div className="mt-6 pt-6 border-t border-white/10 text-xs text-white/50 space-y-2">
                <p><strong>Desk Hours:</strong> 9:00 AM – 9:00 PM IST</p>
                <p><strong>Direct Helpline:</strong> {company.whatsapp}</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 text-center">
              <p className="text-gray-500 text-xs mb-4">Want to browse the homepage?</p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-primary hover:text-white transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
