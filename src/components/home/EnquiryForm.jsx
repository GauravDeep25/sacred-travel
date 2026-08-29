import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp message as fallback / primary action
    const msg = `Namaste ${siteConfig.company.name},%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ADestination: ${form.destination}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${siteConfig.company.whatsapp}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const inputClass =
    'bg-transparent border-b border-dark/15 py-3 w-full focus:outline-none focus:border-primary transition-all duration-500 font-serif text-dark text-base placeholder:font-sans placeholder:text-[10px] placeholder:uppercase placeholder:tracking-widest placeholder:text-charcoal/30';
  const labelClass = 'text-[10px] uppercase tracking-[0.25em] text-primary/70 mb-1 block';

  return (
    <section className="bg-base py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 lg:gap-32 items-start">

        {/* LEFT — heading + contact details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="eyebrow">Enquire</span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark leading-tight mb-6">
            Begin your journey
          </h2>
          <div className="w-16 h-px bg-primary/25 mb-8" />
          <p className="text-charcoal/60 text-sm leading-relaxed max-w-sm mb-14">
            Tell us where your heart is pointing. We will craft the route, the timing and the access.
          </p>

          {/* Reach us sidebar */}
          <div>
            <h3 className="text-dark text-[11px] uppercase tracking-[0.3em] font-bold mb-6">
              Reach us directly
            </h3>
            <ul className="flex flex-col gap-5">
              <li>
                <a
                  href={`tel:${siteConfig.company.whatsapp}`}
                  className="flex items-center gap-4 text-charcoal/70 hover:text-primary transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary text-xs group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    ✆
                  </span>
                  <span className="font-serif text-base">+{siteConfig.company.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.company.whatsapp}`}
                  className="flex items-center gap-4 text-charcoal/70 hover:text-primary transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MessageCircle size={14} />
                  </span>
                  <span className="font-serif text-base">WhatsApp us</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="flex items-center gap-4 text-charcoal/70 hover:text-primary transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary text-xs group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    @
                  </span>
                  <span className="font-serif text-base">{siteConfig.company.email}</span>
                </a>
              </li>
            </ul>

            <p className="mt-10 text-[11px] text-charcoal/40 italic leading-relaxed max-w-xs border-l border-primary/20 pl-4">
              We reply to every enquiry within 24 hours, and we're happy to talk through a route before you commit to anything.
            </p>
          </div>
        </motion.div>

        {/* RIGHT — form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
              <div className="text-5xl text-primary">✓</div>
              <h3 className="text-2xl font-serif text-dark">Thank you, {form.name}.</h3>
              <p className="text-charcoal/60 text-sm max-w-sm">
                Your message has been sent via WhatsApp. We'll be in touch within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-[10px] uppercase tracking-[0.3em] text-primary font-bold border-b border-primary/30 hover:border-primary transition-colors"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 ..."
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="destination" className={labelClass}>Destination interest</label>
                  <input
                    id="destination"
                    name="destination"
                    type="text"
                    placeholder="Char Dham, Kashmir, Kerala..."
                    value={form.destination}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Tell us about the journey you have in mind."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-start">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 hover:bg-dark active:scale-95 shadow-lg shadow-primary/10"
                >
                  Send Enquiry <ArrowRight size={13} />
                </button>
                <a
                  href={`https://wa.me/${siteConfig.company.whatsapp}?text=Namaste%20${encodeURIComponent(siteConfig.company.name)}%2C%20I%20would%20like%20to%20plan%20a%20journey.`}
                  className="inline-flex items-center gap-3 border border-dark/15 text-dark px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  <MessageCircle size={13} /> WhatsApp
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}