import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { technologies } from "@/data/site";

type Block = { eyebrow?: string; titleRed: string; titleNavy: string; text?: string };

/** Pill list of the technologies ClassBoxes trains and tests. */
export default function TechChips({
  block,
  tinted = false,
  items = technologies,
  showMore = true,
}: {
  block: Block;
  tinted?: boolean;
  items?: readonly string[];
  showMore?: boolean;
}) {
  return (
    <section className={`py-24 ${tinted ? "bg-mist/60" : ""}`}>
      <div className="container-x">
        <Reveal>
          <SectionHeading align="center" eyebrow={block.eyebrow} red={block.titleRed} navy={block.titleNavy} />
          {block.text && <p className="mx-auto mt-5 max-w-xl text-center text-[16px] leading-relaxed text-ink/75">{block.text}</p>}
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {items.map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-[15px] font-semibold text-navy transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              >
                <CheckCircle2 className="h-4 w-4 text-brand" />
                {t}
              </li>
            ))}
            {showMore && (
              <li className="inline-flex items-center rounded-full bg-brand-soft px-5 py-3 text-[15px] font-semibold text-brand">
                and more…
              </li>
            )}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
