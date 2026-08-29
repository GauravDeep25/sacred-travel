import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

// Each category card links to the right page
const categoryLinks = [
  { path: '/spiritualjourney', eyebrow: 'Our heart' },
  { path: '/domestic',         eyebrow: 'North to South' },
  { path: '/international',    eyebrow: 'Beyond India' },
  { path: '/experiences',      eyebrow: 'Beyond sightseeing' },
];

export default function HomeGrid() {
  const cats = siteConfig.home.categories;

  return (
    <section className="py-28 px-6 bg-base">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="eyebrow">What we curate</span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark max-w-sm leading-tight">
            Four ways to cross.
          </h2>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark/10">
          {cats.map((cat, i) => {
            const linkMeta = categoryLinks[i] || { path: '/', eyebrow: '' };
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-charcoal"
              >
                {/* Background Image */}
                <div className="relative h-[420px] md:h-[500px] overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-10">
                    <span className="text-accent text-[10px] uppercase tracking-[0.45em] font-bold block mb-3">
                      {linkMeta.eyebrow || cat.eyebrow}
                    </span>
                    <h3 className="text-white text-3xl md:text-4xl font-serif leading-tight mb-3">
                      {cat.label}
                    </h3>
                    <p className="text-white/65 text-sm leading-relaxed max-w-sm mb-6 font-sans">
                      {cat.desc}
                    </p>

                    <Link
                      to={linkMeta.path}
                      className="inline-flex items-center gap-2 text-accent text-[10px] uppercase tracking-[0.35em] font-bold 
                                 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                                 transition-all duration-500"
                    >
                      Explore <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}