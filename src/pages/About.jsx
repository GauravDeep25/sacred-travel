import SectionHeader from '../components/SectionHeader';

export default function About() {
  return (
    <div className="pt-40 pb-24 px-6 bg-base min-h-screen">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Our Story" title="The Heart" italicTitle="of the Journey" />
        <div className="grid md:grid-cols-2 gap-16 mt-12">
          <div className="aspect-[4/5] bg-dark/10 shadow-xl">
             <img src="https://placehold.co/800x1000?text=Founder+Photo" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-charcoal/70 text-lg leading-relaxed mb-6 italic">"[FOUNDER BIO QUOTE]"</p>
            <p className="text-charcoal/60 leading-relaxed mb-6">[FULL BIO PARAGRAPH 1]</p>
            <p className="text-charcoal/60 leading-relaxed">[FULL BIO PARAGRAPH 2]</p>
          </div>
        </div>
      </div>
    </div>
  );
}