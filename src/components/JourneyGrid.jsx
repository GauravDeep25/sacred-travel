import { motion } from 'framer-motion';

export default function JourneyGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {items.map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="group cursor-pointer"
        >
          <div className="relative aspect-\[3/4] overflow-hidden bg-dark/5 mb-6">
            <img src={item.image} alt="placeholder" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
          </div>
          <h3 className="text-2xl font-serif text-dark">{item.title}</h3>
          <p className="text-primary text-[10px] uppercase tracking-widest mt-2">{item.subtitle} · {item.info}</p>
        </motion.div>
      ))}
    </div>
  );
}