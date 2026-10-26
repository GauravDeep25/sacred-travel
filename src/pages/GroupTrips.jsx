import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2, Users, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import { groupToursSiteConfig } from '../data/groupTours';
import GroupTripsGrid from '../components/group/GroupTripsGrid';

export default function GroupTrips() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', phone: '', departureCity: '', tourInterest: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const slides = groupToursSiteConfig.hero;

  // Preload slides for instant transitions
  useEffect(() => {
    slides?.forEach((slide) => {
      const img = new Image();
      img.src = slide.img;
    });
  }, [slides]);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5500); 
    return () => clearInterval(timer);
  }, [slides]); 

  const staticContent = slides[0];

  const handleFormChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setIsSubmitting(true);
    try {
      let response;
      let data = {};
      let useFallback = false;

      try {
        response = await fetch("https://formsubmit.co/ajax/info@yugatirtha.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone || 'Not provided',
            departureCity: form.departureCity || 'Not specified',
            tourInterest: form.tourInterest || 'Group Trips Enquiry',
            message: form.message || 'No additional message',
            _subject: `New Group Trip Enquiry: ${form.tourInterest || 'Group Tours'} - ${form.name}`,
            _template: "table",
            _captcha: "false"
          })
        });
        data = await response.json();
        if (!response.ok && data.success !== "true" && data.success !== true && !(data.message && data.message.includes("Activation"))) {
          useFallback = true;
        }
      } catch (err) {
        useFallback = true;
      }

      if (useFallback) {
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: "7072b3d5-b4da-4be8-8ca6-8b89991604a1",
            name: form.name,
            email: form.email,
            phone: form.phone || 'Not provided',
            departureCity: form.departureCity || 'Not specified',
            tourInterest: form.tourInterest || 'Group Trips Enquiry',
            message: form.message || 'No additional message',
            subject: `New Group Trip Enquiry: ${form.tourInterest || 'Group Tours'} - ${form.name}`
          })
        });
        data = await response.json();
      }

      navigate('/thank-you', {
        state: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          destination: form.tourInterest || 'Group Departures',
          message: form.message,
          activationNotice: Boolean(data.message && data.message.includes("Activation"))
        }
      });
    } catch (err) {
      navigate('/thank-you', {
        state: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          destination: form.tourInterest || 'Group Departures'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-base min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70 z-10" />
              <img
                src={slide.img}
                className="w-full h-full object-cover ken-burns"
                alt="Group Trips Hero"
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                decoding="async"
              />
            </motion.div>
          ))}
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-4xl text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-[#D4A373] text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold mb-4"
            >
              {staticContent.eyebrow}
            </motion.p>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1.2, delay: 0.6 }} 
              className="text-white text-5xl md:text-8xl font-serif leading-[1.1]"
            >
              Group <br />
              <span className="italic text-accent text-[#D4A373]">Trips</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1.5, delay: 0.9 }} 
              className="text-white/80 mt-6 md:mt-8 max-w-xl font-sans text-sm md:text-base leading-relaxed"
            >
              {staticContent.sub}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Feature Highlights Banner */}
      <section className="bg-white border-b border-gray-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#D4A373]/15 flex items-center justify-center flex-shrink-0 text-primary">
              <Users size={18} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-900">Dedicated Captain</p>
              <p className="text-[11px] text-gray-700 font-sans">Full trip coordination & support</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#D4A373]/15 flex items-center justify-center flex-shrink-0 text-primary">
              <Calendar size={18} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-900">Fixed Departures</p>
              <p className="text-[11px] text-gray-700 font-sans">Weekend & scheduled dates</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#D4A373]/15 flex items-center justify-center flex-shrink-0 text-primary">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-900">VIP Darshan</p>
              <p className="text-[11px] text-gray-700 font-sans">Pre-arranged temple access</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#D4A373]/15 flex items-center justify-center flex-shrink-0 text-primary">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-900">All-Inclusive Transit</p>
              <p className="text-[11px] text-gray-700 font-sans">AC Volvo / Tempo Travellers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Group Trips Grid */}
      <GroupTripsGrid 
        categories={groupToursSiteConfig.categories} 
        itineraries={groupToursSiteConfig.itineraries} 
      />

      {/* Enquiry Section */}
      <section className="bg-[#f5f3ef] py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase mb-3">
              Fixed Departures Enquiry
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-gray-900">
              Join a Group Yatra
            </h2>
            
            <hr className="border-t border-[#D4A373] w-12 my-8" />
            
            <p className="mb-12 max-w-xl text-sm leading-relaxed text-gray-600">
              Let us know your preferred departure city, dates, and package. Our team will share available seat inventory, boarding schedules, and pickup points.
            </p>

            <form className="space-y-10" onSubmit={handleFormSubmit}>
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">
                    Name *
                  </label>
                  <input 
                    id="name" 
                    name="name"
                    required 
                    value={form.name}
                    onChange={handleFormChange}
                    disabled={isSubmitting}
                    placeholder="Your full name" 
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373] disabled:opacity-50" 
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">
                    Email *
                  </label>
                  <input 
                    id="email" 
                    name="email"
                    type="email" 
                    required 
                    value={form.email}
                    onChange={handleFormChange}
                    disabled={isSubmitting}
                    placeholder="you@email.com" 
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373] disabled:opacity-50" 
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">
                    Phone / WhatsApp Number *
                  </label>
                  <input 
                    id="phone" 
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleFormChange}
                    disabled={isSubmitting}
                    placeholder="+91 ..." 
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373] disabled:opacity-50" 
                  />
                </div>

                <div>
                  <label htmlFor="tourInterest" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">
                    Group Tour Interest
                  </label>
                  <select
                    id="tourInterest"
                    name="tourInterest"
                    value={form.tourInterest}
                    onChange={handleFormChange}
                    disabled={isSubmitting}
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors text-gray-700 focus:border-[#D4A373] disabled:opacity-50 cursor-pointer"
                  >
                    <option value="">Select a Group Tour...</option>
                    <option value="Maharashtra 3 Jyotirlinga Yatra">Maharashtra 3 Jyotirlinga Yatra (Mumbai / Pune)</option>
                    <option value="Nainital • Kainchi Dham • Bhimtal Getaway">Nainital • Kainchi Dham • Bhimtal (Delhi)</option>
                    <option value="Gujarat Jyotirlinga Yatra">Gujarat Jyotirlinga Yatra (Mumbai / Pune)</option>
                    <option value="Ujjain & Omkareshwar Jyotirlinga Yatra">Ujjain & Omkareshwar Jyotirlinga Yatra (Mumbai)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="departureCity" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">
                  Preferred Boarding City (e.g. Mumbai, Pune, Delhi)
                </label>
                <input 
                  id="departureCity" 
                  name="departureCity"
                  value={form.departureCity}
                  onChange={handleFormChange}
                  disabled={isSubmitting}
                  placeholder="e.g. Mumbai / Pune / Delhi / Akshardham" 
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373] disabled:opacity-50" 
                />
              </div>

              <div>
                <label htmlFor="message" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">
                  Message / Number of Travellers
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="3" 
                  value={form.message}
                  onChange={handleFormChange}
                  disabled={isSubmitting}
                  placeholder="Tell us number of travellers, travel month, or special requests." 
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373] resize-none disabled:opacity-50" 
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-[#E2852B] text-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-[#c97524] disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting && <Loader2 size={14} className="animate-spin" />}
                  {isSubmitting ? 'Sending...' : 'Send Group Enquiry'}
                </button>

                <a
                  href="https://wa.me/918591262424?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20upcoming%20group%20trip%20departures"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-[#25D366] text-[#128C7E] hover:bg-[#25D366] hover:text-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors cursor-pointer"
                >
                  Quick Chat on WhatsApp
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
