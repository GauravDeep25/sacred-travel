import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function FounderAbout() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <img src="https://placehold.co/800x1000?text=[FOUNDER+PHOTO]" className="rounded-sm grayscale shadow-2xl" />
        <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary/10 -z-10" />
      </div>
      <div>
        <span className="text-primary uppercase tracking-[0.3em] text-[10px] block mb-4">Our Curator</span>
        <h2 className="text-4xl md:text-5xl font-serif text-dark mb-6">The vision behind <br/><span className="italic text-accent">{siteConfig.company.name}</span></h2>
        <p className="text-charcoal/70 leading-relaxed mb-8">[INSERT BIO TEXT: Mention the philosophy of sacred travel and the approach to curation.]</p>
        <button className="flex items-center gap-3 text-primary text-[10px] uppercase tracking-[0.3em] font-bold group">
          The Full Story <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>
  );
}