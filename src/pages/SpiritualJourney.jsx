import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import SpiritualGrid from '../components/spiritualjourney/SpiritualGrid';

export default function SpiritualJourney() {
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % siteConfig.spiritualjourney.hero.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []); 

  const staticContent = siteConfig.spiritualjourney.hero[0];

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@yugatirtha.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          destination: form.destination || 'Spiritual Pilgrimage',
          message: form.message || 'No additional notes',
          _subject: `New Pilgrimage Enquiry: ${form.destination || 'Spiritual Journey'} - ${form.name}`,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok || data.success === "true" || data.success === true || (data.message && data.message.includes("Activation"))) {
        setStatus('success');
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Enquiry submission error:', err);
      setStatus('error');
      setStatusMessage('Could not connect to the email service. You can send your enquiry via mail or WhatsApp below.');
    }
  };

  const handleReset = () => {
    setForm({ name: '', email: '', phone: '', destination: '', message: '' });
    setStatus('idle');
    setStatusMessage('');
  };

  const mailtoUrl = `mailto:info@yugatirtha.com?subject=${encodeURIComponent(`Pilgrimage Enquiry - ${form.name || 'Seeker'}`)}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCircuit / Destination: ${form.destination}\n\nMessage:\n${form.message}`
  )}`;

  const whatsappMsg = `Namaste ${siteConfig.company.name},%0AMy name is ${encodeURIComponent(form.name || '')}.%0AEmail: ${encodeURIComponent(form.email || '')}%0APhone: ${encodeURIComponent(form.phone || '')}%0APilgrimage Circuit: ${encodeURIComponent(form.destination || '')}%0AMessage: ${encodeURIComponent(form.message || '')}`;

  return (
    <div className="bg-base min-h-screen">
      
      <section className="veil relative flex min-h-[62vh] items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          {siteConfig.spiritualjourney.hero.map((slide, i) => (
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
                alt="Hero background"
                crossOrigin="anonymous"
              />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-16 sm:px-8">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
            className="eyebrow text-gold"
          >
            {staticContent.eyebrow}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.7 }} 
            className="mt-4 max-w-3xl font-display text-4xl text-white sm:text-6xl"
          >
            {staticContent.h1} <span className="italic text-accent">{staticContent.h1Italic}</span>
          </motion.h1>

          <div className="h-[1px] w-48 bg-gradient-to-r from-accent to-transparent my-8"></div>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5, delay: 1 }} 
            className="max-w-2xl text-sm leading-relaxed text-ivory/85 sm:text-base"
          >
            {staticContent.sub}
          </motion.p>
        </div>
      </section>

      <SpiritualGrid />

      <section className="bg-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-accent">
              Pan-India flagships
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-white">
              The great cross-regional circuits
            </h2>
            <div className="h-[1px] w-48 bg-gradient-to-r from-accent to-transparent my-8"></div>
          </motion.div>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {siteConfig.spiritualjourney.flagships?.map((flag, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full rounded-none border border-white/20 bg-transparent p-10">
                  <h3 className="font-serif text-3xl text-[#E5D3B3]">
                    {flag.title || flag.cardTitle}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-white/80">
                    {flag.desc || flag.cardDesc}
                  </p>
                  
                  <div className="mt-12 flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium">
                    <span>{flag.duration}</span>
                    <span>{flag.season || flag.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ef] py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase mb-3">Enquiry</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-gray-900">Plan a pilgrimage</h2>
            <hr className="border-t border-[#D4A373] w-12 my-8" />
            <p className="mb-10 max-w-xl text-sm leading-relaxed text-gray-600">
              Share the circuit, the travellers and any ritual requirements — we will handle priests, timings and access.
            </p>

            {status === 'success' ? (
              <div className="rounded-none border border-emerald-200 bg-white p-8 sm:p-10 shadow-sm">
                <div className="flex items-center gap-3 text-emerald-700 mb-3">
                  <CheckCircle2 size={26} />
                  <h3 className="font-serif text-2xl font-semibold">Enquiry Sent to info@yugatirtha.com</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Thank you, <strong>{form.name}</strong>. Your pilgrimage details have been delivered to <strong>info@yugatirtha.com</strong>.
                  Our team will review your circuit requirements and respond within 24 hours.
                </p>
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                  <button
                    onClick={handleReset}
                    className="bg-[#E2852B] text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#c97524] transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                  <a
                    href={`https://wa.me/${siteConfig.company.whatsapp}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-emerald-600 text-emerald-800 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-emerald-50 transition-colors flex items-center gap-2"
                  >
                    <MessageCircle size={14} /> WhatsApp Us
                  </a>
                </div>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                    <div className="flex items-center gap-2 font-semibold mb-2">
                      <AlertCircle size={16} />
                      <span>Notice</span>
                    </div>
                    <p className="mb-3 text-xs leading-relaxed">{statusMessage}</p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={mailtoUrl}
                        className="bg-red-700 text-white px-4 py-2 text-xs uppercase tracking-wider hover:bg-red-800"
                      >
                        <Mail size={13} className="inline mr-1" /> Open Email App
                      </a>
                      <a
                        href={`https://wa.me/${siteConfig.company.whatsapp}?text=${whatsappMsg}`}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-red-700 text-red-800 px-4 py-2 text-xs uppercase tracking-wider hover:bg-red-100"
                      >
                        <MessageCircle size={13} className="inline mr-1" /> WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">Name *</label>
                    <input 
                      id="name" 
                      name="name"
                      required 
                      value={form.name}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="Your full name" 
                      className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373] text-gray-900 disabled:opacity-50" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">Email *</label>
                    <input 
                      id="email" 
                      name="email"
                      type="email" 
                      required 
                      value={form.email}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="you@email.com" 
                      className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373] text-gray-900 disabled:opacity-50" 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">Phone</label>
                    <input 
                      id="phone" 
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="+91 ..." 
                      className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373] text-gray-900 disabled:opacity-50" 
                    />
                  </div>
                  <div>
                    <label htmlFor="destination" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">Circuit / Destination</label>
                    <input 
                      id="destination" 
                      name="destination"
                      value={form.destination}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="Char Dham, Panch Kedar, Jyotirlinga..." 
                      className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373] text-gray-900 disabled:opacity-50" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-[#D4A373] text-[10px] tracking-widest font-semibold uppercase block mb-3">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="3" 
                    value={form.message}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder="Tell us about the journey and any sacred rituals you have in mind." 
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#D4A373] text-gray-900 resize-none disabled:opacity-50"
                  ></textarea>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="bg-[#E2852B] text-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-[#c97524] cursor-pointer disabled:opacity-60 flex items-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={13} className="animate-spin" />
                        Sending to info@yugatirtha.com...
                      </>
                    ) : (
                      "Send Enquiry"
                    )}
                  </button>
                  <span className="text-xs text-gray-500">
                    Delivered directly to <strong className="text-gray-700">info@yugatirtha.com</strong>
                  </span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
