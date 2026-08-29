import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';

function AnimatedStat({ value, suffix, label, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.8 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-serif text-white mb-3 leading-none">
        {value}{suffix}
      </div>
      <p className="text-white/40 uppercase tracking-[0.25em] text-[10px] font-bold">
        {label}
      </p>
    </motion.div>
  );
}

export default function StatsStrip() {
  const stats = siteConfig.home.stats;

  return (
    <section className="bg-dark py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((s, i) => (
            <AnimatedStat
              key={i}
              value={s.value.toLocaleString()}
              suffix={s.suffix}
              label={s.label}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}