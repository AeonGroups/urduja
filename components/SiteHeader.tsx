"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "recognition", label: "Recognition" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function hrefFor(id: string) {
    return pathname === "/" ? `#${id}` : `/#${id}`;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-brass/40 bg-navy text-card">
      <div className="mx-auto flex h-[4.75rem] max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href={hrefFor("home")}
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center gap-3"
        >
          <Image
            src="/images/urduja-mark.png"
            alt=""
            width={561}
            height={445}
            priority
            className="h-12 w-auto sm:h-14"
          />
          <span className="leading-none">
            <span className="block font-display text-lg tracking-wide text-card sm:text-xl">Urduja</span>
            <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.18em] text-brass sm:text-[0.65rem] sm:tracking-[0.22em]">
              Security Services
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={hrefFor(link.id)}
              className="group relative text-sm text-card/80 transition-colors duration-200 hover:text-card"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brass transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center text-card md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
            <span className={`h-px bg-card transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px bg-brass transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-px bg-card transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-white/10 bg-navy px-5 py-3 md:hidden">
          <ul>
            {links.map((link) => (
              <li key={link.id} className="border-b border-white/10 last:border-b-0">
                <a
                  href={hrefFor(link.id)}
                  className="block py-3 text-lg text-card transition-colors duration-200 hover:text-brass"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
