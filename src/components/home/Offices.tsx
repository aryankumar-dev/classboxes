import { Building2, MapPinned, Mail, PhoneCall } from "lucide-react";
import Illustration from "@/components/ui/Illustration";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { offices } from "@/data/home";

const icons = { building: Building2, map: MapPinned, mail: Mail, phone: PhoneCall };

export default function Offices() {
  return (
    <section id="offices" className="py-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <Reveal x={-40} y={0}>
          <SectionHeading eyebrow={offices.eyebrow} red={offices.titleRed} navy={offices.titleNavy} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {offices.items.map((o) => {
              const Icon = icons[o.icon];
              const body = (
                <>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-sans text-[19px] font-extrabold text-navy">{o.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                    {o.lines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </p>
                </>
              );
              const cls = "group block h-full rounded-3xl border border-line p-7 transition hover:border-transparent hover:shadow-card";
              return "href" in o ? (
                <a key={o.title} href={o.href} className={cls}>{body}</a>
              ) : (
                <div key={o.title} className={cls}>{body}</div>
              );
            })}
          </div>
        </Reveal>
        <Reveal x={40} y={0} delay={0.1}>
          <Illustration variant="question" />
        </Reveal>
      </div>
    </section>
  );
}
