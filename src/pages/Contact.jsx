import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, Globe, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Contact() {
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

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
    email: "info@yugatirtha.com",
    website: "www.yugatirtha.com"
  };

  useEffect(() => {
    if (heroSlides.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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
          destination: form.destination || 'General Enquiry',
          message: form.message || 'No additional notes',
          _subject: `New Journey Enquiry: ${form.destination || 'Yugatirtha'} - ${form.name}`,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok || data.success === "true" || data.success === true || (data.message && data.message.includes("Activation"))) {
        setStatus('success');
        if (data.message && data.message.includes("Activation")) {
          setStatusMessage("Enquiry received! If this is your first time using this address, please check info@yugatirtha.com for the one-time FormSubmit confirmation email.");
        }
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Enquiry submission error:', err);
      setStatus('error');
      setStatusMessage('Could not connect to email service. You can send your enquiry directly via mail or WhatsApp below.');
    }
  };

  const handleReset = () => {
    setForm({ name: '', email: '', phone: '', destination: '', message: '' });
    setStatus('idle');
    setStatusMessage('');
  };

  const mailtoUrl = `mailto:info@yugatirtha.com?subject=${encodeURIComponent(`Journey Enquiry - ${form.name || 'Traveler'}`)}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nDestination Interest: ${form.destination}\n\nMessage:\n${form.message}`
  )}`;

  const whatsappMsg = `Namaste ${company.name},%0AMy name is ${encodeURIComponent(form.name || '')}.%0AEmail: ${encodeURIComponent(form.email || '')}%0APhone: ${encodeURIComponent(form.phone || '')}%0ADestination: ${encodeURIComponent(form.destination || '')}%0AMessage: ${encodeURIComponent(form.message || '')}`;

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

        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-32 pb-14">
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
              
              {status === 'success' ? (
                <div className="rounded-sm border border-emerald-200 bg-emerald-50/50 p-8 sm:p-10">
                  <div className="flex items-center gap-3 text-emerald-700 mb-3">
                    <CheckCircle2 size={28} />
                    <h3 className="font-serif text-2xl font-semibold">Enquiry Sent to info@yugatirtha.com</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Thank you, <strong>{form.name}</strong>. Your enquiry has been received and forwarded to <strong>info@yugatirtha.com</strong>.
                    Our team will review your destination interests and get back to you within 24 hours.
                  </p>
                  {statusMessage && (
                    <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 p-3 rounded mb-6">
                      {statusMessage}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-emerald-200/60">
                    <button
                      onClick={handleReset}
                      className="rounded-sm bg-primary px-6 py-3 text-[0.72rem] uppercase tracking-[0.22em] text-white hover:bg-dark transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                    <a
                      href={`https://wa.me/${company.whatsapp?.replace(/[^0-9]/g, '')}?text=${whatsappMsg}`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-sm border border-emerald-600 text-emerald-800 px-6 py-3 text-[0.72rem] uppercase tracking-[0.22em] hover:bg-emerald-100 transition-colors flex items-center gap-2"
                    >
                      <MessageCircle size={15} /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {status === 'error' && (
                    <div className="rounded-sm border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                      <div className="flex items-center gap-2 font-semibold mb-2">
                        <AlertCircle size={18} />
                        <span>Submission Notice</span>
                      </div>
                      <p className="mb-3 text-xs leading-relaxed">{statusMessage}</p>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={mailtoUrl}
                          className="inline-flex items-center gap-1.5 bg-red-700 text-white px-4 py-2 text-xs uppercase tracking-wider rounded-sm hover:bg-red-800"
                        >
                          <Mail size={14} /> Open in Email App
                        </a>
                        <a
                          href={`https://wa.me/${company.whatsapp?.replace(/[^0-9]/g, '')}?text=${whatsappMsg}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 border border-red-700 text-red-800 px-4 py-2 text-xs uppercase tracking-wider rounded-sm hover:bg-red-100"
                        >
                          <MessageCircle size={14} /> Send via WhatsApp
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="eyebrow">Name *</label>
                      <input 
                        id="name" 
                        name="name" 
                        required 
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name" 
                        disabled={status === 'submitting'}
                        className="w-full border-b border-dark/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-charcoal/40 focus:border-primary font-sans text-dark disabled:opacity-50" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="eyebrow">Email *</label>
                      <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@email.com" 
                        disabled={status === 'submitting'}
                        className="w-full border-b border-dark/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-charcoal/40 focus:border-primary font-sans text-dark disabled:opacity-50" 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="eyebrow">Phone</label>
                      <input 
                        id="phone" 
                        name="phone" 
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 ..." 
                        disabled={status === 'submitting'}
                        className="w-full border-b border-dark/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-charcoal/40 focus:border-primary font-sans text-dark disabled:opacity-50" 
                      />
                    </div>
                    <div>
                      <label htmlFor="destination" className="eyebrow">Destination Interest</label>
                      <input 
                        id="destination" 
                        name="destination" 
                        value={form.destination}
                        onChange={handleChange}
                        placeholder="Char Dham, Kashmir, Kerala..." 
                        disabled={status === 'submitting'}
                        className="w-full border-b border-dark/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-charcoal/40 focus:border-primary font-sans text-dark disabled:opacity-50" 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="eyebrow">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="3" 
                      value={form.message}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="Tell us about the journey you have in mind." 
                      className="w-full border-b border-dark/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-charcoal/40 focus:border-primary font-sans text-dark resize-none disabled:opacity-50"
                    ></textarea>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="rounded-sm bg-primary px-8 py-3.5 text-[0.72rem] uppercase tracking-[0.22em] text-white transition-colors hover:bg-dark cursor-pointer font-medium disabled:opacity-60 flex items-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          Sending to info@yugatirtha.com...
                        </>
                      ) : (
                        contactData.enquiry?.buttonText || "Send Enquiry"
                      )}
                    </button>
                  </div>
                </form>
              )}
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
                  <a href={`mailto:${company.email}`} className="hover:text-primary transition-colors text-charcoal/90 font-medium">
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