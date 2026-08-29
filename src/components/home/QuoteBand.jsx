import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';

export default function QuoteBand() {
  const { quote } = siteConfig.founder;
  const founderName = siteConfig.founder.name;

  return (
    <section className="bg-white py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Large decorative open-quote */}
        <div className="text-accent/30 text-[8rem] font-serif leading-none mb-2 -mt-8 select-none">
          "
        </div>

        <p className="text-dark/90 text-xl md:text-2xl lg:text-3xl font-serif italic leading-relaxed -mt-10">
          {quote}
        </p>

        <div className="w-12 h-px bg-accent mx-auto mt-10 mb-6" />

        <p className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">
          {founderName} · Founder, {siteConfig.company.name}
        </p>
      </motion.div>
    </section>
  );
}