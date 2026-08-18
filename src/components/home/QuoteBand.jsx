import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';

export default function QuoteBand() {
  return (
    <section className="bg-white py-24 px-6 text-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="max-w-4xl mx-auto">
        <h2 className="text-black/90 text-2xl md:text-4xl font-serif italic leading-relaxed mb-8">
          "Travel, at its most meaningful, is a pilgrimage — a sacred journey through time and tradition, connecting you not just to places, but to the stories, spirits, and wisdom that make them timeless."
        </h2>
        <div className="w-12 h-px bg-accent mx-auto mb-6" />
        <p className="text-accent uppercase tracking-[0.3em] text-[10px]">
          {siteConfig.founder.name} · FOUNDER
        </p>
      </motion.div>
    </section>
  );
}