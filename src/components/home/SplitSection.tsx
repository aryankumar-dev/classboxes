import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Illustration from "@/components/ui/Illustration";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type Content = {
  eyebrow: string;
  titleRed: string;
  titleNavy: string;
  text: string;
  points: string[];
  cta: string;
};

/** Text + illustration two-column block, used by Need Candidates / Job Openings / Test Skills. */
export default function SplitSection({
  id,
  content,
  illustration,
  reverse = false,
  ctaHref = "#",
  ctaVariant = "red",
  tinted = false,
}: {
  id: string;
  content: Content;
  illustration: Parameters<typeof Illustration>[0]["variant"];
  reverse?: boolean;
  ctaHref?: string;
  ctaVariant?: "red" | "navy";
  tinted?: boolean;
}) {
  return (
    <section id={id} className={`py-24 ${tinted ? "bg-mist/60" : ""}`}>
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal x={reverse ? 40 : -40} y={0} className={reverse ? "lg:order-2" : ""}>
          <SectionHeading eyebrow={content.eyebrow} red={content.titleRed} navy={content.titleNavy} />
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink/75">{content.text}</p>
          <ul className="mt-6 space-y-3">
            {content.points.map((p) => (
              <li key={p} className="flex items-center gap-3 font-semibold text-navy">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-soft">
                  <Check className="h-3.5 w-3.5 text-brand" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Button href={ctaHref} variant={ctaVariant} arrow className="mt-9">
            {content.cta}
          </Button>
        </Reveal>
        <Reveal x={reverse ? -40 : 40} y={0} delay={0.1} className={reverse ? "lg:order-1" : ""}>
          <Illustration variant={illustration} />
        </Reveal>
      </div>
    </section>
  );
}
