import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { domesticSiteConfig } from '../data/siteConfig.domestic';
import DomesticGrid from '../components/domestic/DomesticGrid';

export default function Domestic() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const slides = siteConfig.domestic.hero;

  // Preload slides for instant transitions
  useEffect(() => {
    slides?.forEach((slide) => {
      const img = new Image();
      img.src = slide.img;
    });
  }, [slides]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, [slides.length]); 

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
            destination: form.destination || 'Domestic Region Enquiry',
            message: form.message || 'No additional message',
            _subject: `New Domestic Region Enquiry: ${form.destination || 'Domestic'} - ${form.name}`,
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
            destination: form.destination || 'Domestic Region Enquiry',
            message: form.message || 'No additional message',
            subject: `New Domestic Region Enquiry: ${form.destination || 'Domestic'} - ${form.name}`
          })
        });
        data = await response.json();
      }

      navigate('/thank-you', {
        state: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          destination: form.destination || 'Domestic Circuit',
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
          destination: form.destination || 'Domestic Circuit'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-base min-h-screen">
      <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          {slides.map((slide, i) => (
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
                alt="Domestic Hero"
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                decoding="async"
              />
            </motion.div>
          ))}
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-4xl text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1.2, delay: 0.7 }} 
              className="text-white text-5xl md:text-8xl font-serif leading-[1.1]"
            >
              Domestic <br />
              <span className="italic text-accent text-[#D4A373]">Journeys</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1.5, delay: 1 }} 
              className="text-white/70 mt-8 max-w-xl font-sans text-sm md:text-base leading-relaxed"
            >
              {staticContent.sub}
            </motion.p>
          </div>
        </div>
      </section>
      <DomesticGrid itineraries={domesticSiteConfig.itineraries} />
      <section className="bg-[#f5f3ef] py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase mb-3">
              Enquire
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-gray-900">
              Ask about a region
            </h2>
            
            <hr className="border-t border-[#D4A373] w-12 my-8" />
            
            <p className="mb-12 max-w-xl text-sm leading-relaxed text-gray-600">
              Tell us the region, the dates and who is travelling — we'll send a considered itinerary, not a template.
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
                    Phone
                  </label>
                  <input 
                    id="phone" 
                    name="phone"
                    value={form.phone}
                    onChange={handleFormChange}
                    disabled={isSubmitting}
                    placeholder="+91 ..." 
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373] disabled:opacity-50" 
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">
                    Destination Interest
                  </label>
                  <input 
                    id="destination" 
                    name="destination"
                    value={form.destination}
                    onChange={handleFormChange}
                    disabled={isSubmitting}
                    placeholder="Char Dham, Kashmir, Kerala..." 
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373] disabled:opacity-50" 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="3" 
                  value={form.message}
                  onChange={handleFormChange}
                  disabled={isSubmitting}
                  placeholder="Tell us about the journey you have in mind." 
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373] resize-none disabled:opacity-50" 
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-[#E2852B] text-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-[#c97524] mt-4 disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting && <Loader2 size={14} className="animate-spin" />}
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
