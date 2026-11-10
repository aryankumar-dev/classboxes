import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, ChevronRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import SocialIcon from "@/components/ui/SocialIcon";
import { contact, footer } from "@/data/site";

function WorldMap() {
  return (
    <div className="mt-2 overflow-hidden rounded-2xl bg-white p-4 ring-1 ring-line">
      <Image
        src="/images/footer-map.png"
        alt="World map showing Classboxes office locations"
        width={280}
        height={120}
        className="h-auto w-full"
      />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-mist text-muted">
      <div className="stripes absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-[0.12]" />
      <div className="container-x relative grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <h3 className="mt-7 mb-4 text-sm font-bold uppercase tracking-[0.18em] text-navy">Headquarters</h3>
          <ul className="space-y-3 text-[15px]">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />{contact.hq}</li>
            <li><a href={contact.phoneHref} className="flex gap-3 hover:text-brand"><Phone className="mt-0.5 h-4 w-4 text-brand" />{contact.phone}</a></li>
            <li><a href={`mailto:${contact.email}`} className="flex gap-3 hover:text-brand"><Mail className="mt-0.5 h-4 w-4 text-brand" />{contact.email}</a></li>
            <li className="flex gap-3"><Globe className="mt-0.5 h-4 w-4 text-brand" />{contact.website}</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-navy">Where to find us</h3>
          <WorldMap />
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-navy">Quick Links</h3>
          <ul className="space-y-3 text-[15px]">
            {footer.quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="group inline-flex items-center gap-2 transition hover:text-brand">
                  <ChevronRight className="h-4 w-4 text-brand transition group-hover:translate-x-0.5" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-navy">Follow us</h3>
          <p className="text-[15px]">Hiring news, openings and career tips — follow ClassBoxes on social.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {footer.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition hover:-translate-y-0.5 hover:bg-navy hover:text-white"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
          <p>Copyright © 2026 ClassBoxes Technologies. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {footer.bottomLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-brand">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
