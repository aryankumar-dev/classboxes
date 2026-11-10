import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogs } from "@/data/home";

export default function Blogs() {
  return (
    <section id="blogs" className="bg-mist/60 py-24">
      <div className="container-x">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow={blogs.eyebrow} red={blogs.titleRed} navy={blogs.titleNavy} />
          <Button href="#" variant="navy" arrow>{blogs.cta}</Button>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {blogs.items.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={b.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="inline-flex items-center gap-2 text-sm text-muted">
                    <CalendarDays className="h-4 w-4 text-brand" />
                    {b.date}
                  </p>
                  <h3 className="mt-3 font-sans text-[20px] font-extrabold leading-snug text-navy transition group-hover:text-brand">
                    <Link href="#">{b.title}</Link>
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{b.excerpt}</p>
                  <Link href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand">
                    Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
