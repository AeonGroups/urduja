const items = [
  "Posted guards",
  "Site security",
  "Lingayen",
  "Since 2002",
  "Matalava Center",
  "Urduja",
];

export function Marquee() {
  const line = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-navy py-4" aria-hidden="true">
      <div className="marquee-track flex w-max items-center gap-8 pr-8">
        {line.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-8">
            <span className="text-xs uppercase tracking-[0.32em] text-card/80">{item}</span>
            <span className="size-1.5 rounded-full bg-brass" />
          </span>
        ))}
      </div>
    </div>
  );
}
