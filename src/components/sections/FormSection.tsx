import LeadForm from "@/components/forms/LeadForm";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Field } from "@/data/forms";
import ContactInfoList from "./ContactInfoList";

type InfoItem = Parameters<typeof ContactInfoList>[0]["items"];

type Copy = { eyebrow?: string; titleRed: string; titleNavy: string; text: string; submit?: string };

/** Heading + contact info on the left, form card on the right. Used at the bottom of inner pages. */
export default function FormSection({
  id,
  copy,
  fields,
  tinted = true,
  info,
}: {
  id?: string;
  copy: Copy;
  fields: Field[];
  tinted?: boolean;
  info?: InfoItem;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 ${tinted ? "bg-mist/60" : ""}`}>
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.35fr]">
        <Reveal x={-40} y={0}>
          <SectionHeading eyebrow={copy.eyebrow} red={copy.titleRed} navy={copy.titleNavy} />
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink/75">{copy.text}</p>
          <div className="mt-9">
            <ContactInfoList items={info} />
          </div>
        </Reveal>
        <Reveal x={40} y={0} delay={0.1}>
          <div className="rounded-[28px] bg-white p-6 shadow-card ring-1 ring-line sm:p-10">
            <LeadForm fields={fields} submitLabel={copy.submit} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
