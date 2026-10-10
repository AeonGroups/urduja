import Image from "next/image";
import Link from "next/link";
import { mapsUrl, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-paper text-ink">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/urduja-mark.png"
              alt=""
              width={561}
              height={445}
              className="h-16 w-auto"
            />
            <span className="leading-none">
              <span className="block font-display text-xl tracking-wide text-navy">Urduja</span>
              <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.22em] text-brass-deep">
                Security Services
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
            Security services from Lingayen since {site.since}.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-brass">Visit</p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-sm leading-relaxed transition-colors duration-200 hover:text-brass-deep"
          >
            {site.addressLines[0]}
            <br />
            {site.addressLines[1]}
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-brass">Reach</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`tel:${site.phoneTel}`} className="transition-colors duration-200 hover:text-brass-deep">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all transition-colors duration-200 hover:text-brass-deep">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-brass-deep"
              >
                Facebook
              </a>
            </li>
            <li>
              <Link href="/privacy" className="transition-colors duration-200 hover:text-brass-deep">
                Privacy notice
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy/10">
        <p className="px-5 py-4 text-center text-xs text-mist">© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
