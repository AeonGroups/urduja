import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { mapsUrl, site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 bg-paper pb-20 pt-8">
      <div className="mx-auto grid max-w-[1200px] gap-6 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-navy px-7 py-12 text-card sm:px-10 sm:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full border border-brass/30"
          />
          <p className="text-xs uppercase tracking-[0.32em] text-brass">Contact</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] sm:text-6xl">
            Tell us what needs watching.
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-card/70">
            The Lingayen office takes calls, email, and notes from this page.
          </p>
          <dl className="mt-12 space-y-7">
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-brass">Office</dt>
              <dd className="mt-2 text-lg">
                <a href={mapsUrl} className="transition-colors duration-200 hover:text-brass" target="_blank" rel="noopener noreferrer">
                  {site.addressLines[0]}
                  <br />
                  {site.addressLines[1]}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-brass">Phone</dt>
              <dd className="mt-2 font-display text-3xl">
                <a href={`tel:${site.phoneTel}`} className="transition-colors duration-200 hover:text-brass">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-brass">Email</dt>
              <dd className="mt-2 break-all">
                <a href={`mailto:${site.email}`} className="transition-colors duration-200 hover:text-brass">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="rounded-[2rem] bg-card px-7 py-12 shadow-[0_30px_80px_-40px_rgba(11,31,51,0.45)] sm:px-10 sm:py-14">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
