import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';

export default function HomeGrid() {
  const cats = siteConfig.home.categories;

  return (
    <section className="py-24 md:py-28 px-6 bg-base">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="eyebrow">What we curate</span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark max-w-sm leading-tight">
            Four ways to cross.
          </h2>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cats.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Link
                to={cat.path}
                className="group relative block overflow-hidden bg-charcoal h-[360px] sm:h-[400px] md:h-[420px] lg:h-[450px] w-full"
              >
                {/* Background Image */}
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500 group-hover:opacity-95" />

                {/* Content aligned to bottom-left */}
                <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-9 md:p-10 z-10">
                  <span className="text-[#D4A373] text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] block mb-2.5 font-sans">
                    {cat.eyebrow}
                  </span>
                  <h3 className="text-white text-3xl sm:text-4xl font-serif font-normal leading-tight mb-3">
                    {cat.label}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-xl font-sans">
                    {cat.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}