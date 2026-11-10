import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type Block = {
  eyebrow: string;
  titleRed: string;
  titleNavy: string;
  steps: readonly { title: string; text: string }[];
};

/** Numbered steps joined by a dashed line on wide screens. */
export default function ProcessSteps({ block, tinted = false }: { block: Block; tinted?: boolean }) {
  const cols = block.steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";
  return (
    <section className={`py-24 ${tinted ? "bg-mist/60" : ""}`}>
      <div className="container-x">
        <Reveal>
          <SectionHeading align="center" eyebrow={block.eyebrow} red={block.titleRed} navy={block.titleNavy} />
        </Reveal>
        <div className="relative mt-16">
          <span aria-hidden className="absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dashed border-brand/30 lg:block" />
          <ol className={`relative grid gap-10 sm:grid-cols-2 ${cols}`}>
            {block.steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 0.1} className="flex flex-col items-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white font-heading text-2xl font-extrabold text-brand shadow-card ring-8 ring-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-sans text-[20px] font-extrabold text-navy">{s.title}</h3>
                  <p className="mt-2 max-w-[240px] text-[15px] leading-relaxed text-muted">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
