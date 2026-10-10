import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function Recognition() {
  return (
    <section id="recognition" className="scroll-mt-28 bg-paper">
      <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-brass">Recognition</p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] text-navy sm:text-6xl">
            Best Security Agency, 19 December 2025.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-mist">
            Urduja Security Services, Inc. received a Plaque of Recognition in Makati for performance
            in administration, operations, and security.
          </p>
        </Reveal>

        <div className="relative mt-14 lg:mt-16">
          <Reveal>
            <figure className="overflow-hidden rounded-[2rem] bg-card shadow-[0_30px_80px_-40px_rgba(11,31,51,0.45)]">
              <Image
                src="/images/recognition-ceremony.jpg"
                alt="Urduja Security Services plaque and ceremony trophy on 19 December 2025."
                width={1400}
                height={1050}
                className="aspect-[16/10] w-full object-cover object-center sm:aspect-[16/9]"
              />
            </figure>
          </Reveal>

          <Reveal className="absolute bottom-3 left-3 z-10 w-28 sm:bottom-6 sm:left-6 sm:w-40 lg:bottom-8 lg:left-8 lg:w-52">
            <figure className="overflow-hidden rounded-2xl bg-card p-1.5 shadow-[0_18px_40px_-18px_rgba(11,31,51,0.6)] ring-4 ring-paper sm:rounded-[1.35rem] sm:p-2 sm:ring-[8px]">
              <Image
                src="/images/best-security-agency.jpg"
                alt="Plaque of Recognition awarded to Urduja Security Services, Inc. as Best Security Agency on 19 December 2025."
                width={900}
                height={1200}
                className="h-auto w-full rounded-xl sm:rounded-[1rem]"
              />
            </figure>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 text-sm leading-relaxed text-mist lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p>
              Best Security Agency plaque, given 19 December 2025 at 1782 N. Garcia corner
              Candelaria Street, Barangay Valenzuela, Makati City.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <p>The plaque and trophy from the recognition ceremony.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
