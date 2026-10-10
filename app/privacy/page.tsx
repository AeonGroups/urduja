import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: `How ${site.name} uses the details you send through the contact form.`,
};

export default function PrivacyPage() {
  return (
    <article className="bg-paper">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-xs uppercase tracking-[0.32em] text-brass">Privacy</p>
        <h1 className="mt-4 font-display text-5xl leading-[0.95] text-navy sm:text-6xl">Privacy notice</h1>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink">
          <p>
            {site.name}, 138 Matalava Center, Lingayen, Philippines 2401, collects the name, phone
            number, email address, and message you send through the contact form.
          </p>
          <p>
            We use those details to read your inquiry and reply. Messages are stored in a private
            database. Visitors cannot browse other people’s messages.
          </p>
          <p>
            To ask about a message you sent, or to request that it be deleted, email{" "}
            <a href={`mailto:${site.email}`} className="text-navy underline decoration-brass underline-offset-4">
              {site.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:${site.phoneTel}`} className="text-navy underline decoration-brass underline-offset-4">
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
        <Link
          href="/#contact"
          className="mt-12 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-navy"
        >
          <span className="h-px w-8 bg-brass" />
          Back to contact
        </Link>
      </div>
    </article>
  );
}
