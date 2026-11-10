"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate, useInView } from "framer-motion";
import { Users, BookOpen, Award, Headset } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { about } from "@/data/home";

const icons = { users: Users, book: BookOpen, award: Award, headset: Headset };

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container-x">
        <Reveal>
          <SectionHeading align="center" eyebrow={about.eyebrow} red={about.titleRed} navy={about.titleNavy} />
          <p className="mx-auto mt-6 max-w-3xl text-center text-[16px] leading-relaxed text-ink/75">
            {about.paragraph.map((p, i) =>
              "href" in p && p.href ? (
                <Link key={i} href={p.href} className="font-semibold text-brand underline-offset-4 hover:underline">
                  {p.text}
                </Link>
              ) : (
                <span key={i}>{p.text}</span>
              ),
            )}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.stats.map((s, i) => {
            const Icon = icons[s.icon];
            const dark = i % 2 === 1;
            return (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-line bg-white p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-card">
                  <span
                    className={`mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full text-white ring-8 transition ${dark ? "bg-navy ring-navy/5" : "bg-brand ring-brand/10"}`}
                  >
                    <Icon className="h-9 w-9" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-sans text-[25px] font-extrabold leading-tight text-navy">
                    {s.value !== null ? <Counter to={s.value} suffix={s.suffix} /> : null} {s.label}
                  </h3>
                  <span className="mx-auto mt-3 block h-[3px] w-10 rounded-full bg-brand transition-all group-hover:w-16" />
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
