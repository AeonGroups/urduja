import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-28 overflow-hidden bg-paper">
      <div className="relative mx-auto grid max-w-[1200px] gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:py-36">
        <p
          aria-hidden="true"
          className="pointer-events-none absolute -left-6 top-8 font-display text-[9rem] leading-none text-navy/5 sm:text-[14rem]"
        >
          {site.since}
        </p>
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-brass">About</p>
          <h2 className="relative mt-4 font-display text-5xl leading-[0.95] text-navy sm:text-6xl">
            Rooted in Lingayen since {site.since}.
          </h2>
        </Reveal>
        <Reveal className="relative lg:pt-16">
          <p className="text-2xl leading-snug text-ink sm:text-3xl">
            {site.name} provides security services from 138 Matalava Center, with a team that shows
            up for the full shift.
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-mist">
            Offices, worksites, and commercial floors need more than a sign on the gate. We place
            trained officers where your people and property actually are, and we stay reachable
            from the Lingayen office.
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-navy"
          >
            <span className="h-px w-8 bg-brass transition-all duration-300 group-hover:w-14" />
            Facebook
          </a>
        </Reveal>
      </div>
    </section>
  );
}
