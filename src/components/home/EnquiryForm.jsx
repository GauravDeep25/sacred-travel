import React from 'react';
import { motion } from 'framer-motion';

export default function EnquiryForm() {
  return (
    <section className="bg-base py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">Enquire</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-dark">
            Begin your journey
          </h2>
          
          <div className="w-40 h-px bg-primary/30 my-8" />
          
          <p className="mb-12 max-w-xl text-sm leading-relaxed text-charcoal/60 font-sans">
            Tell us where your heart is pointing. We will craft the route, the timing and the access.
          </p>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
              
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 mb-1">Name</span>
                <input 
                  id="name" 
                  type="text"
                  required 
                  placeholder="Your full name" 
                  className="bg-transparent border-b border-dark/20 py-2 w-full focus:outline-none focus:border-primary transition-all font-serif text-dark text-base placeholder:text-charcoal/80 placeholder:font-sans placeholder:text-[10px] placeholder:uppercase placeholder:tracking-widest" 
                  name="name" 
                />
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 mb-1">Email</span>
                <input 
                  id="email" 
                  type="email"
                  required 
                  placeholder="you@email.com" 
                  className="bg-transparent border-b border-dark/20 py-2 w-full focus:outline-none focus:border-primary transition-all font-serif text-dark text-base placeholder:text-charcoal/80 placeholder:font-sans placeholder:text-[10px] placeholder:uppercase placeholder:tracking-widest" 
                  name="email" 
                />
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 mb-1">Phone</span>
                <input 
                  id="phone" 
                  type="tel"
                  placeholder="+91 ..." 
                  className="bg-transparent border-b border-dark/20 py-2 w-full focus:outline-none focus:border-primary transition-all font-serif text-dark text-base placeholder:text-charcoal/80 placeholder:font-sans placeholder:text-[10px] placeholder:uppercase placeholder:tracking-widest" 
                  name="phone" 
                />
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 mb-1">Destination Interest</span>
                <input 
                  id="destination" 
                  type="text"
                  placeholder="Char Dham, Kashmir, Kerala..." 
                  className="bg-transparent border-b border-dark/20 py-2 w-full focus:outline-none focus:border-primary transition-all font-serif text-dark text-base placeholder:text-charcoal/80 placeholder:font-sans placeholder:text-[10px] placeholder:uppercase placeholder:tracking-widest" 
                  name="destination" 
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 mb-1">Message</span>
              <textarea 
                id="message" 
                name="message" 
                rows="2" 
                placeholder="Tell us about the journey you have in mind." 
                className="bg-transparent border-b border-dark/20 py-2 w-full focus:outline-none focus:border-primary transition-all font-serif text-dark text-base placeholder:text-charcoal/80 placeholder:font-sans placeholder:text-[10px] placeholder:uppercase placeholder:tracking-widest resize-none"
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="rounded-sm bg-primary px-10 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-dark shadow-lg shadow-primary/10 active:scale-95"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}