import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle2, AlertCircle, Loader2, Mail } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
          message: form.message || 'No additional message',
          _subject: `New Journey Enquiry: ${form.destination || 'Website'} - ${form.name}`,
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
      console.error('Submission error:', err);
      setStatus('error');
      setStatusMessage('Could not connect to the email service. You can send your enquiry via mail or WhatsApp below.');
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

  const whatsappMsg = `Namaste ${siteConfig.company.name},%0AMy name is ${encodeURIComponent(form.name || '')}.%0AEmail: ${encodeURIComponent(form.email || '')}%0APhone: ${encodeURIComponent(form.phone || '')}%0ADestination: ${encodeURIComponent(form.destination || '')}%0AMessage: ${encodeURIComponent(form.message || '')}`;

  const inputClass =
    'bg-transparent border-b border-dark/15 py-3 w-full focus:outline-none focus:border-primary transition-all duration-500 font-serif text-dark text-base placeholder:font-sans placeholder:text-[10px] placeholder:uppercase placeholder:tracking-widest placeholder:text-charcoal/30 disabled:opacity-50';
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
                  <span className="font-serif text-base font-semibold">{siteConfig.company.email}</span>
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
          {status === 'success' ? (
            <div className="rounded-sm border border-emerald-200 bg-emerald-50/50 p-8 sm:p-12 text-center flex flex-col items-center gap-5">
              <CheckCircle2 size={48} className="text-emerald-700" />
              <h3 className="text-3xl font-serif text-dark">Thank you, {form.name}.</h3>
              <p className="text-charcoal/70 text-sm max-w-md leading-relaxed">
                Your enquiry has been delivered to <strong>info@yugatirtha.com</strong>. We will review your request and get back to you within 24 hours.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <button
                  onClick={handleReset}
                  className="rounded-sm bg-primary px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] text-white hover:bg-dark transition-colors font-semibold"
                >
                  Send another enquiry
                </button>
                <a
                  href={`https://wa.me/${siteConfig.company.whatsapp}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm border border-emerald-600 text-emerald-800 px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] hover:bg-emerald-100 transition-colors flex items-center gap-2 font-semibold"
                >
                  <MessageCircle size={14} /> WhatsApp us
                </a>
              </div>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
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
                      <Mail size={14} /> Open Email App
                    </a>
                    <a
                      href={`https://wa.me/${siteConfig.company.whatsapp}?text=${whatsappMsg}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 border border-red-700 text-red-800 px-4 py-2 text-xs uppercase tracking-wider rounded-sm hover:bg-red-100"
                    >
                      <MessageCircle size={14} /> WhatsApp
                    </a>
                  </div>
                </div>
              )}
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
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 hover:bg-dark active:scale-95 shadow-lg shadow-primary/10 disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={13} className="animate-spin" />
                      Sending to info@yugatirtha.com...
                    </>
                  ) : (
                    <>
                      Send Enquiry <ArrowRight size={13} />
                    </>
                  )}
                </button>
                <a
                  href={`https://wa.me/${siteConfig.company.whatsapp}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noreferrer"
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