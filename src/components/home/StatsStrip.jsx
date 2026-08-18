export default function StatsStrip() {
  const stats = [
    { num: "2,400+", label: "[LABEL 1]" },
    { num: "180+", label: "[LABEL 2]" },
    { num: "40+", label: "[LABEL 3]" },
    { num: "12", label: "[LABEL 4]" },
  ];

  return (
    <section className="bg-dark border-y border-dark/5 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-4xl md:text-5xl font-serif text-primary mb-2">{s.num}</div>
            <p className="text-charcoal/60 uppercase tracking-[0.2em] text-[10px] font-bold">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}