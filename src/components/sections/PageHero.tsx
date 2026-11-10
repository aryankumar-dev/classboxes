import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { routes } from "@/lib/routes";

type Hero = { eyebrow: string; titleRed: string; titleNavy: string; text: string };

/** Light banner at the top of every inner page, with a breadcrumb. */
export default function PageHero({ hero, crumb, actions }: { hero: Hero; crumb: string; actions?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-mist/70">
      <div className="stripes absolute -right-10 -top-10 h-64 w-64 rounded-full opacity-20" />
      <div className="stripes-navy absolute -bottom-14 left-[8%] h-40 w-40 rounded-full opacity-10" />
      <div className="absolute right-[12%] top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-[42%_58%_55%_45%/48%_42%_58%_52%] bg-white/80 lg:block" />

      <div className="container-x relative py-20 lg:py-24">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm font-semibold text-muted">
              <li>
                <Link href={routes.home} className="hover:text-brand">Home</Link>
              </li>
              <li aria-hidden><ChevronRight className="h-4 w-4" /></li>
              <li aria-current="page" className="text-navy">{crumb}</li>
            </ol>
          </nav>
          <SectionHeading as="h1" eyebrow={hero.eyebrow} red={hero.titleRed} navy={hero.titleNavy} />
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink/75">{hero.text}</p>
          {actions && <div className="mt-9 flex flex-wrap gap-4">{actions}</div>}
        </Reveal>
      </div>
    </section>
  );
}
