import { contactInfo } from "@/data/site";
import { icons } from "@/components/ui/icons";

/** Address / email / phone list shown next to forms. */
type Item = { icon: string; title: string; lines: readonly string[]; href?: string };

export default function ContactInfoList({ items = contactInfo }: { items?: readonly Item[] }) {
  return (
    <ul className="space-y-4">
      {items.map((c) => {
        const Icon = icons[c.icon];
        const body = (
          <>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-[0.18em] text-brand">{c.title}</span>
              {c.lines.map((l) => (
                <span key={l} className="block text-[15px] font-semibold leading-relaxed text-navy">{l}</span>
              ))}
            </span>
          </>
        );
        const cls = "group flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition hover:border-transparent hover:shadow-card";
        return (
          <li key={c.title}>
            {c.href ? <a href={c.href} className={cls}>{body}</a> : <div className={cls}>{body}</div>}
          </li>
        );
      })}
    </ul>
  );
}
