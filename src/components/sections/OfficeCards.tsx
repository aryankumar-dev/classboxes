import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { icons } from "@/components/ui/icons";
import { officeLocations } from "@/data/site";

type Copy = { eyebrow: string; titleRed: string; titleNavy: string };

/** Office address cards beside the world map. */
export default function OfficeCards({ copy }: { copy: Copy }) {
  return (
    <section className="py-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal x={-40} y={0}>
          <SectionHeading eyebrow={copy.eyebrow} red={copy.titleRed} navy={copy.titleNavy} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {officeLocations.map((o, i) => {
              const Icon = icons[o.icon];
              return (
                <div key={o.title} className="group h-full rounded-3xl border border-line p-7 transition hover:border-transparent hover:shadow-card">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${i % 2 ? "bg-navy" : "bg-brand"}`}>
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-sans text-[19px] font-extrabold text-navy">{o.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                    {o.lines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
        <Reveal x={40} y={0} delay={0.1}>
          <div className="relative rounded-[32px] bg-mist p-8 sm:p-12">
            <div className="stripes absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-25" />
            <Image src="/images/footer-map.png" alt="World map showing ClassBoxes offices" width={280} height={120} className="relative h-auto w-full" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
