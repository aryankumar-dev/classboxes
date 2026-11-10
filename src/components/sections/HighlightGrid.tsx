import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { icons } from "@/components/ui/icons";

type Block = {
  eyebrow?: string;
  titleRed: string;
  titleNavy: string;
  items: readonly { icon: string; label: string }[];
};

/** Centered heading + a row of short icon-and-label tiles. */
export default function HighlightGrid({ block, tinted = false }: { block: Block; tinted?: boolean }) {
  return (
    <section className={`py-24 ${tinted ? "bg-mist/60" : ""}`}>
      <div className="container-x">
        <Reveal>
          <SectionHeading align="center" eyebrow={block.eyebrow} red={block.titleRed} navy={block.titleNavy} />
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {block.items.map((it, i) => {
            const Icon = icons[it.icon];
            const navy = i % 2 === 1;
            return (
              <li key={it.label} className={i === block.items.length - 1 ? "col-span-2 sm:col-span-1" : ""}>
                <Reveal delay={i * 0.07} className="h-full">
                  <div className="group flex h-full flex-col items-center rounded-3xl border border-line bg-white px-5 py-8 text-center transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-card">
                    <span
                      className={`flex h-16 w-16 items-center justify-center rounded-full text-white ring-8 ${navy ? "bg-navy ring-navy/5" : "bg-brand ring-brand/10"}`}
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.6} />
                    </span>
                    <span className="mt-6 font-sans text-[18px] font-extrabold leading-snug text-navy">{it.label}</span>
                    <span className="mt-3 block h-[3px] w-8 rounded-full bg-brand transition-all group-hover:w-14" />
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
