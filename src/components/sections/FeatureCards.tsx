import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { icons } from "@/components/ui/icons";

type Block = {
  eyebrow: string;
  titleRed: string;
  titleNavy: string;
  cards: readonly { icon: string; title: string; text: string }[];
};

/** Centered heading + 4 icon cards (alternating red / navy icons). */
export default function FeatureCards({ block, tinted = false }: { block: Block; tinted?: boolean }) {
  return (
    <section className={`py-24 ${tinted ? "bg-mist/60" : ""}`}>
      <div className="container-x">
        <Reveal>
          <SectionHeading align="center" eyebrow={block.eyebrow} red={block.titleRed} navy={block.titleNavy} />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {block.cards.map((c, i) => {
            const Icon = icons[c.icon];
            const navy = i % 2 === 1;
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-line bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-card">
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white ring-8 ${navy ? "bg-navy ring-navy/5" : "bg-brand ring-brand/10"}`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-7 font-sans text-[21px] font-extrabold text-navy">{c.title}</h3>
                  <span className="mt-3 block h-[3px] w-10 rounded-full bg-brand transition-all group-hover:w-16" />
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">{c.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
