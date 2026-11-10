import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { icons } from "@/components/ui/icons";

type Stat = { value: number; suffix: string; label: string; icon: string };

/** Row of animated counters on a light red band. */
export default function StatsStrip({ stats }: { stats: readonly Stat[] }) {
  return (
    <section className="relative overflow-hidden bg-brand-soft py-16">
      <div className="stripes absolute -left-12 -top-12 h-44 w-44 rounded-full opacity-15" />
      <div className="container-x relative grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        {stats.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className={`flex flex-col items-center text-center ${i > 0 ? "lg:border-l lg:border-brand/15" : ""}`}>
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand shadow-soft">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <p className="mt-4 font-heading text-[40px] font-extrabold leading-none text-navy">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-[15px] font-semibold text-muted">{s.label}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
