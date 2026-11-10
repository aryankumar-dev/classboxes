"use client";

import { useState, type FormEvent } from "react";
import { Mail, ShieldCheck, ArrowRight } from "lucide-react";
import Illustration from "@/components/ui/Illustration";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { newsletter } from "@/data/home";

export default function Newsletter() {
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: verify Cloudflare Turnstile token + call subscribe API.
    setDone(true);
  };

  return (
    <section className="py-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <Reveal x={-40} y={0}>
          <SectionHeading eyebrow={newsletter.eyebrow} red={newsletter.titleRed} navy={newsletter.titleNavy} />
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-ink/75">{newsletter.text}</p>

          {done ? (
            <p className="mt-8 rounded-2xl bg-brand-soft px-6 py-4 font-semibold text-navy">
              Thanks for subscribing — check your inbox to confirm.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-4">
              <div className="flex flex-col gap-3 rounded-full bg-white p-2 shadow-card ring-1 ring-line sm:flex-row max-sm:rounded-3xl">
                <label className="flex flex-1 items-center gap-3 px-4">
                  <Mail className="h-5 w-5 shrink-0 text-muted" />
                  <span className="sr-only">Email address</span>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="h-12 w-full bg-transparent text-[15px] text-navy outline-none placeholder:text-muted/80"
                  />
                </label>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-brand-dark"
                >
                  {newsletter.cta}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </div>
              {/* Placeholder slot for the Cloudflare Turnstile widget */}
              <div className="inline-flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm text-muted" data-turnstile-slot>
                <ShieldCheck className="h-5 w-5 text-[#f38020]" />
                Protected by Cloudflare Turnstile
              </div>
            </form>
          )}
        </Reveal>
        <Reveal x={40} y={0} delay={0.1}>
          <Illustration variant="megaphone" />
        </Reveal>
      </div>
    </section>
  );
}
