import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [1, 2, 3]; // Placeholder array for 3 cards

  return (
    <section className="py-24 px-6 bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.4em] text-[10px] block mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark">Voices from the road</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-accent text-3xl font-serif mb-6">“</div>
              <p className="text-charcoal/80 italic leading-relaxed mb-8 font-serif text-lg">
                [INSERT TESTIMONIAL QUOTE: A poetic reflection on the transformative nature of their specific journey.]
              </p>
              <div className="w-8 h-[1px] bg-primary/20 mb-4" />
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-dark">
                [NAME PLACEHOLDER]
              </div>
              <div className="text-[9px] uppercase tracking-[0.1em] text-charcoal/40 mt-1">
                [CITY / COUNTRY]
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}