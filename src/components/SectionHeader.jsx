export default function SectionHeader({ eyebrow, title, italicTitle }) {
  return (
    <div className="mb-16">
      <span className="text-primary uppercase tracking-[0.4em] text-[10px] block mb-4">{eyebrow}</span>
      <h2 className="text-5xl md:text-7xl font-serif text-dark leading-tight">
        {title} <br/> <span className="italic text-accent">{italicTitle}</span>
      </h2>
    </div>
  );
}