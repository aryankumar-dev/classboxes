import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { clients } from "@/data/home";

/** Text wordmarks stand in for client logos until the image files are exported. */
function LogoChip({ name }: { name: string }) {
  return (
    <div className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl bg-white px-6 shadow-[0_1px_2px_rgba(50,55,67,0.05)] ring-1 ring-line/70 transition hover:ring-brand/30">
      <span className="font-heading text-lg font-bold tracking-tight text-navy/45 transition hover:text-navy">{name}</span>
    </div>
  );
}

export default function Clients() {
  const half = Math.ceil(clients.logos.length / 2);
  const rows = [clients.logos.slice(0, half), clients.logos.slice(half)];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-x-[-10%] inset-y-6 -skew-y-2 rounded-[60px] bg-mist" />
      <div className="container-x relative">
        <Reveal>
          <SectionHeading align="center" eyebrow={clients.eyebrow} red={clients.titleRed} navy={clients.titleNavy} />
        </Reveal>
      </div>
      <div className="relative mt-14 space-y-5 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        {rows.map((row, r) => (
          <div key={r} className="flex overflow-hidden">
            <div
              className="flex w-max animate-marquee gap-5 pr-5 hover:[animation-play-state:paused]"
              style={r === 1 ? { animationDirection: "reverse" } : undefined}
            >
              {[...row, ...row].map((name, i) => (
                <LogoChip key={`${name}-${i}`} name={name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
