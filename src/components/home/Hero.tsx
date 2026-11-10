"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { BadgeCheck, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { heroSlides } from "@/data/home";
import { routes } from "@/lib/routes";

export default function Hero() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 7000, stopOnInteraction: true })]);
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
    <section id="top" className="relative overflow-hidden">
      {/* large grey curved shape */}
      <div className="absolute -right-[18%] -top-[30%] h-[130%] w-[75%] rounded-full bg-mist max-lg:hidden" />

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((s, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full">
              <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
                <motion.div
                  key={`t-${selected === i}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <SectionHeading as="h1" eyebrow={s.eyebrow} red={s.titleRed} navy={s.titleNavy} />
                  <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-ink/75">{s.text}</p>
                  <div className="mt-9 flex flex-wrap gap-4">
                    <Button href={routes.shareRequirement} variant="red" arrow>Share Your Requirements</Button>
                    <Button href={routes.contact} variant="navy">Contact Us Now</Button>
                  </div>
                  <div className="mt-10 flex items-center gap-6 text-sm text-muted">
                    <span className="inline-flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-brand" />Pre-screened talent</span>
                    <span className="inline-flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-brand" />USA &amp; Canada</span>
                  </div>
                </motion.div>

                <div className="relative mx-auto w-full max-w-[480px]">
                  <div className="stripes absolute -left-6 top-6 h-32 w-32 rounded-full opacity-30" />
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full border-[10px] border-brand/15" />
                  <div className="relative aspect-square overflow-hidden rounded-full border-[10px] border-white bg-mist shadow-soft">
                    <Image src={s.image} alt={s.imageAlt} fill priority={i === 0} sizes="(max-width: 1024px) 90vw, 480px" className="object-cover" />
                  </div>
                  <div className="absolute -left-2 bottom-10 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-card sm:-left-10">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white">
                      <Users className="h-5 w-5" />
                    </span>
                    <span className="leading-tight">
                      <span className="block font-heading text-xl font-extrabold text-navy">1500+</span>
                      <span className="text-xs text-muted">Candidates placed</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-x relative -mt-6 flex gap-2 pb-10 lg:-mt-12">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${selected === i ? "w-8 bg-brand" : "w-2.5 bg-navy/20 hover:bg-navy/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
