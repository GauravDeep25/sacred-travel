import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';

export default function HomeGrid() {
  return (
    <section className="py-24 px-6 bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="eyebrow">the crossing</span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark">Four ways to cross</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.home.categories.map((cat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="journey-card rounded-sm overflow-hidden">
                <div className="relative h-125">
                  <img 
                    src={cat.img} 
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-dark/20 to-transparent" />
                  
                  <div className="absolute bottom-10 left-10 right-10">
                    {/* Line 1: Eyebrow */}
                    <span className="text-accent text-[14px] uppercase tracking-[0.3em] font-bold block mb-2">
                      {cat.eyebrow}
                    </span>
                    
                    {/* Line 2: Label */}
                    <h3 className="text-white text-3xl md:text-4xl font-serif mb-3">
                      {cat.label}
                    </h3>

                    {/* Line 3: Description */}
                    <p className="text-white/70 text-sm font-sans max-w-md leading-relaxed transition-opacity duration-500">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}