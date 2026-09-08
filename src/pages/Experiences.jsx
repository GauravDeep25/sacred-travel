import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Experiences() {
  const experiences = siteConfig.experiences;
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [activeId, setActiveId] = useState(null);

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
          destination: form.destination || 'Experiences add-on',
          message: form.message || 'No additional message',
          _subject: `New Experience Enquiry: ${form.destination || 'Bespoke Experience'} - ${form.name}`,
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
      console.warn("Experience form submission error:", err);
      setStatus('error');
      setStatusMessage('Could not connect to the email service. You can send your enquiry directly via mail or WhatsApp below.');
    }
  };

  const mailtoUrl = `mailto:info@yugatirtha.com?subject=${encodeURIComponent(`Experience Enquiry - ${form.name || 'Traveler'}`)}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nDestination / Experience Interest: ${form.destination}\n\nMessage:\n${form.message}`
  )}`;

  const whatsappMsg = `Namaste ${siteConfig.company.name},%0AMy name is ${encodeURIComponent(form.name || '')}.%0AEmail: ${encodeURIComponent(form.email || '')}%0APhone: ${encodeURIComponent(form.phone || '')}%0AExperience Interest: ${encodeURIComponent(form.destination || '')}%0AMessage: ${encodeURIComponent(form.message || '')}`;

  return (
    <div className="bg-base min-h-screen">
      {/* ── 1. HERO SECTION ─────────────────────────────────── */}
      <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-dark">
        <img
          src={experiences.hero.img}
          alt="Evening river aarti with hundreds of floating oil lamps"
          className="absolute inset-0 size-full object-cover ken-burns"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25 z-0" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-16 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="eyebrow text-[#D4A373] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block"
          >
            {experiences.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-4 max-w-3xl font-serif text-4xl text-white sm:text-6xl leading-[1.1]"
          >
            {experiences.hero.h1}
          </motion.h1>

          <div className="h-[1px] w-24 sm:w-48 bg-[#D4A373] my-6" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base font-sans"
          >
            {experiences.hero.sub}
          </motion.p>
        </div>
      </section>

      {/* ── 2. BENTO GRID SECTION ───────────────────────────── */}
      <section className="py-20 bg-base">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid auto-rows-[300px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.items.map((item, i) => {
              const isActive = activeId === item.id;
              return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                viewport={{ once: true }}
                className={`h-full ${item.span || ''}`}
              >
                <article 
                  className="group relative h-full overflow-hidden rounded-sm bg-charcoal cursor-pointer"
                  onClick={() => setActiveId(isActive ? null : item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  onMouseLeave={() => setActiveId(null)}
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className={`size-full object-cover transition-transform duration-[1400ms] ${isActive ? 'scale-110' : 'md:group-hover:scale-110'}`}
                  />
                  {/* Atmospheric gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-80 md:group-hover:opacity-100'}`} />

                  {/* Text positioned at bottom */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                    <div className={`transition-transform duration-500 ease-out ${isActive ? 'translate-y-0' : 'translate-y-4 md:group-hover:translate-y-0'}`}>
                      <h2 className="font-serif text-2xl text-white">
                        {item.title}
                      </h2>
                      <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100'}`}>
                        <div className="overflow-hidden">
                          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80 font-sans">
                            {item.desc}
                          </p>
                          <a
                            href={`https://wa.me/${siteConfig.company.whatsapp}?text=Hi Yugatirtha! I would like to know more about the ${encodeURIComponent(item.title)} experience.`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-[#D4A373] text-[10px] uppercase tracking-[0.35em] font-bold hover:text-white transition-colors mt-4"
                          >
                            <MessageCircle size={13} /> Enquire on WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. ENQUIRE / ADD AN EXPERIENCE SECTION ─────────── */}
      <section className="bg-[#f5f3ef] border-t border-gray-200/80 py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow text-[#D4A373] text-xs font-semibold tracking-[0.25em] uppercase mb-2 block">
              Enquire
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-dark">
              Add an experience
            </h2>
            <div className="h-[1px] w-20 sm:w-40 bg-[#D4A373] my-6" />
            <p className="mb-10 max-w-xl text-sm leading-relaxed text-charcoal/70 font-sans">
              Tell us what you want to feel, and we will find the place and hour for it.
            </p>

            {status === 'success' ? (
              <div className="bg-white border border-emerald-200 rounded-sm p-8 text-center space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900">
                  Enquiry Sent to info@yugatirtha.com
                </h3>
                <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <strong>{form.name}</strong>. Your custom experience request has been received. Our curators will be in touch with you shortly.
                </p>
                <div className="pt-2 flex justify-center gap-4">
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setForm({ name: '', email: '', phone: '', destination: '', message: '' });
                    }}
                    className="text-xs uppercase tracking-widest text-[#D4A373] hover:underline font-bold"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-sm text-sm space-y-3">
                    <div className="flex items-start gap-2">
                      <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                      <span>{statusMessage}</span>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href={mailtoUrl}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-amber-300 rounded-sm text-xs font-semibold text-amber-900 hover:bg-amber-100 transition-colors"
                      >
                        <Mail size={14} /> Send via Email Client
                      </a>
                      <a
                        href={`https://wa.me/${siteConfig.company.whatsapp}?text=${whatsappMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-white rounded-sm text-xs font-semibold hover:bg-[#20ba59] transition-colors"
                      >
                        <MessageCircle size={14} /> WhatsApp Us
                      </a>
                    </div>
                  </div>
                )}

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="eyebrow block text-xs font-semibold tracking-[0.2em] text-gray-500 mb-1">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary font-sans"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="eyebrow block text-xs font-semibold tracking-[0.2em] text-gray-500 mb-1">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary font-sans"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="eyebrow block text-xs font-semibold tracking-[0.2em] text-gray-500 mb-1">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 ..."
                      className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary font-sans"
                    />
                  </div>

                  <div>
                    <label htmlFor="destination" className="eyebrow block text-xs font-semibold tracking-[0.2em] text-gray-500 mb-1">
                      Destination Interest
                    </label>
                    <input
                      id="destination"
                      name="destination"
                      value={form.destination}
                      onChange={handleChange}
                      placeholder="Char Dham, Kashmir, Kerala..."
                      className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="eyebrow block text-xs font-semibold tracking-[0.2em] text-gray-500 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about the journey you have in mind."
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary font-sans"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="rounded-sm bg-primary px-8 py-3.5 text-[0.72rem] uppercase tracking-[0.22em] font-bold text-white transition-colors hover:bg-dark disabled:opacity-50 cursor-pointer inline-flex items-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Enquiry'
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
