import { Reveal } from "@/components/Reveal";

const services = [
  {
    number: "01",
    title: "Posted security guards",
    body: "Uniformed officers stationed at offices, banks, and commercial properties for the hours you set.",
  },
  {
    number: "02",
    title: "Site security",
    body: "A visible watch for construction and industrial locations, from the gate through the work area.",
  },
  {
    number: "03",
    title: "Coverage built around you",
    body: "A posting plan shaped around your site, your hours, and the risks that belong to that place.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-paper">
      <div className="mx-auto max-w-[1200px] px-5 pb-8 sm:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-brass">Services</p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] text-navy sm:text-6xl">
            Protection with a post, a plan, and a person on it.
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-8 max-w-[1200px] border-b border-navy/15 px-2 sm:px-6">
        {services.map((service) => (
          <Reveal key={service.number}>
            <article className="service-row group relative border-t border-navy/15 px-3 py-8 transition-colors duration-500 hover:bg-navy hover:text-card sm:px-6 sm:py-10">
              <div className="grid items-end gap-4 lg:grid-cols-[7rem_minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-10">
                <span className="service-index font-display text-5xl text-brass sm:text-6xl">
                  {service.number}
                </span>
                <h3 className="font-display text-3xl leading-tight text-navy transition-colors duration-500 group-hover:text-card sm:text-5xl">
                  {service.title}
                </h3>
                <p className="max-w-md leading-relaxed text-mist transition-colors duration-500 group-hover:text-card/75">
                  {service.body}
                </p>
              </div>
              <span className="draw-line absolute bottom-0 left-3 right-3 h-px bg-brass sm:left-6 sm:right-6" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
