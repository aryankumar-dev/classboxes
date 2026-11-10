"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Illustration from "@/components/ui/Illustration";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/home";

export default function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000 })]);
  const [selected, setSelected] = useState(0);
  const onSelect = useCallback(() => embla && setSelected(embla.selectedScrollSnap()), [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  return (
    <section className="bg-mist/60 py-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
        <Reveal x={-40} y={0}>
          <Illustration variant="chat" />
        </Reveal>

        <Reveal x={40} y={0} delay={0.1}>
          <SectionHeading eyebrow={testimonials.eyebrow} red={testimonials.titleRed} navy={testimonials.titleNavy} />

          <div className="relative mt-10 rounded-3xl bg-white p-8 shadow-card sm:p-10">
            <Quote className="absolute -top-5 left-8 h-10 w-10 rounded-full bg-brand p-2.5 text-white" />
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.items.map((t) => (
                  <figure key={t.name} className="min-w-0 shrink-0 grow-0 basis-full">
                    <blockquote className="text-[18px] leading-relaxed text-ink/80">“{t.quote}”</blockquote>
                    <figcaption className="mt-7 flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy font-heading text-lg font-bold text-white">
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                      <span>
                        <span className="block font-sans text-lg font-extrabold text-navy">{t.name}</span>
                        <span className="text-sm text-brand">{t.company}</span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => embla?.scrollTo(i)}
                    aria-label={`Show review ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${selected === i ? "w-7 bg-brand" : "w-2 bg-navy/20"}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={() => embla?.scrollPrev()} aria-label="Previous review" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy transition hover:border-brand hover:bg-brand hover:text-white">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={() => embla?.scrollNext()} aria-label="Next review" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy transition hover:border-brand hover:bg-brand hover:text-white">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
