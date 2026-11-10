import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { portfolio } from "@/data/home";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container-x">
        <Reveal>
          <SectionHeading align="center" eyebrow={portfolio.eyebrow} red={portfolio.titleRed} navy={portfolio.titleNavy} />
        </Reveal>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {portfolio.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <a href="#" className="group block overflow-hidden rounded-3xl bg-white shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                    {p.tag}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <h3 className="font-sans text-lg font-extrabold leading-snug text-navy">{p.title}</h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist text-navy transition group-hover:bg-brand group-hover:text-white">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
