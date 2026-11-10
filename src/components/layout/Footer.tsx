import Link from "next/link";
import { MapPin, Phone, Mail, Globe, ChevronRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import SocialIcon from "@/components/ui/SocialIcon";
import { contact, footer } from "@/data/home";

function WorldMap() {
  // Dotted world map approximation with office pins (NJ + Montréal).
  return (
    <div className="relative mt-2 overflow-hidden rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/10">
      <svg viewBox="0 0 200 100" className="w-full text-white/15" aria-label="Map showing offices in New Jersey and Montréal">
        <defs>
          <pattern id="dots" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.9" fill="currentColor" />
          </pattern>
        </defs>
        {/* simplified continents */}
        <path fill="url(#dots)" d="M18 18c10-6 28-8 40-4 6 2 8 8 4 14-3 5-8 6-10 12-2 5-6 6-9 3-4-4-6-3-9-8-3-6-12-9-16-17z" />
        <path fill="url(#dots)" d="M52 52c6-2 12 2 13 9 1 8-3 16-7 24-2 3-5 2-6-2-2-8-6-12-6-19 0-5 2-10 6-12z" />
        <path fill="url(#dots)" d="M92 16c8-4 18-2 22 3 3 4-2 7-6 9-5 2-10 0-14 3-3 2-6-1-6-5 0-4 1-8 4-10z" />
        <path fill="url(#dots)" d="M94 36c8-3 18 0 22 8 3 7-1 17-6 24-3 4-7 4-9-1-3-6-8-11-9-18-1-6 0-11 2-13z" />
        <path fill="url(#dots)" d="M116 14c18-6 42-6 58 2 8 4 9 12 3 16-6 4-14 2-18 8-4 6-10 6-14 2-4-5-12-3-18-8-6-4-14-6-14-12 0-4 1-7 3-8z" />
        <path fill="url(#dots)" d="M160 64c6-3 14-2 18 3 3 4 0 9-5 10-6 2-12 0-14-4-1-4-1-7 1-9z" />
      </svg>
      {[
        { left: "29%", top: "27%", label: "New Jersey" },
        { left: "28%", top: "17%", label: "Montréal" },
      ].map((p) => (
        <span key={p.label} className="group absolute -translate-x-1/2 -translate-y-1/2" style={{ left: p.left, top: p.top }}>
          <span className="absolute inset-0 animate-ping rounded-full bg-brand/60" />
          <MapPin className="relative h-4 w-4 fill-brand text-white" />
          <span className="pointer-events-none absolute left-5 top-0 whitespace-nowrap rounded bg-white px-2 py-0.5 text-[10px] font-bold text-navy opacity-0 transition group-hover:opacity-100">
            {p.label}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white/70">
      <div className="stripes absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-[0.08]" />
      <div className="container-x relative grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <h3 className="mt-7 mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white">Headquarters</h3>
          <ul className="space-y-3 text-[15px]">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />{contact.hq}</li>
            <li><a href={contact.phoneHref} className="flex gap-3 hover:text-white"><Phone className="mt-0.5 h-4 w-4 text-brand" />{contact.phone}</a></li>
            <li><a href={`mailto:${contact.email}`} className="flex gap-3 hover:text-white"><Mail className="mt-0.5 h-4 w-4 text-brand" />{contact.email}</a></li>
            <li className="flex gap-3"><Globe className="mt-0.5 h-4 w-4 text-brand" />{contact.website}</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white">Where to find us</h3>
          <WorldMap />
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white">Business Solutions</h3>
          <ul className="space-y-3 text-[15px]">
            {footer.solutions.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="group inline-flex items-center gap-2 transition hover:text-white">
                  <ChevronRight className="h-4 w-4 text-brand transition group-hover:translate-x-0.5" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white">Follow us</h3>
          <p className="text-[15px]">Hiring news, openings and career tips — follow ClassBoxes on social.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {footer.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-brand"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
          <p>© 2026 ClassBoxes Technologies. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {footer.bottomLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
