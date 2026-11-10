import type { ReactNode } from "react";
import { Check } from "lucide-react";
import Illustration from "@/components/ui/Illustration";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type Intro = {
  eyebrow: string;
  titleRed: string;
  titleNavy: string;
  paragraphs: readonly string[];
  points?: readonly string[];
};

/** Heading + paragraphs (+ optional checklist and action) beside an illustration. */
export default function IntroSection({
  intro,
  illustration,
  action,
  reverse = false,
}: {
  intro: Intro;
  illustration: Parameters<typeof Illustration>[0]["variant"];
  action?: ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="py-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <Reveal x={reverse ? 40 : -40} y={0} className={reverse ? "lg:order-2" : ""}>
          <SectionHeading eyebrow={intro.eyebrow} red={intro.titleRed} navy={intro.titleNavy} />
          <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-ink/75">
            {intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {intro.points && (
            <ul className="mt-6 space-y-3">
              {intro.points.map((p) => (
                <li key={p} className="flex items-center gap-3 font-semibold text-navy">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-soft">
                    <Check className="h-3.5 w-3.5 text-brand" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          )}
          {action && <div className="mt-9">{action}</div>}
        </Reveal>
        <Reveal x={reverse ? -40 : 40} y={0} delay={0.1} className={reverse ? "lg:order-1" : ""}>
          <Illustration variant={illustration} />
        </Reveal>
      </div>
    </section>
  );
}
