import { Marquee } from "@/components/Marquee";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh flex-col overflow-hidden bg-navy text-card">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 size-[28rem] rounded-full bg-brass/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-24 size-80 rounded-full bg-navy-soft blur-2xl"
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] flex-1 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:py-20">
        <div>
          <p className="hero-rise text-xs uppercase tracking-[0.16em] text-brass sm:tracking-[0.32em]">
            {site.place}, Pangasinan · Since {site.since}
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[3.4rem] leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="hero-rise hero-delay-1 block">The watch</span>
            <span className="hero-rise hero-delay-2 block italic text-brass">that stays</span>
            <span className="hero-rise hero-delay-3 block">in the room.</span>
          </h1>
          <p className="hero-rise hero-delay-3 mt-8 max-w-md text-lg leading-relaxed text-card/75">
            {site.name} keeps a trained presence on the places you cannot leave unattended.
          </p>
          <div className="hero-rise hero-delay-4 mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-brass px-6 py-3.5 text-sm font-semibold text-navy transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brass-deep"
            >
              Request a conversation
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-card transition-colors duration-300 hover:border-brass hover:text-brass"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="hero-rise hero-delay-4 relative mx-auto hidden size-72 lg:block" aria-hidden="true">
          <div className="pulse-ring absolute inset-0 rounded-full border border-brass/30" />
          <div className="absolute inset-8 rounded-full border border-white/15" />
          <div className="orbit absolute inset-3">
            <span className="absolute left-1/2 top-0 size-3 -translate-x-1/2 rounded-full bg-brass shadow-[0_0_18px_#c4a46a]" />
          </div>
          <div className="orbit-slow absolute inset-12">
            <span className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full bg-card" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-[0.65rem] uppercase tracking-[0.28em] text-brass">Based in</span>
            <span className="mt-2 font-display text-4xl">{site.place}</span>
            <span className="mt-3 text-xs uppercase tracking-[0.22em] text-card/60">Since {site.since}</span>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}
