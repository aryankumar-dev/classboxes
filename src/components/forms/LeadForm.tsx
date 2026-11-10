"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import type { Field } from "@/data/forms";
import ConsentCheckboxes from "./ConsentCheckboxes";

const control =
  "peer w-full rounded-xl border border-line bg-white px-4 text-[15px] text-navy outline-none transition placeholder:text-muted/80 focus:border-brand focus:ring-4 focus:ring-brand/10";

function FieldInput({ field }: { field: Field }) {
  const id = `f-${field.name}`;
  const placeholder = `${field.label}${field.required ? " *" : ""}`;
  const common = { id, name: field.name, required: field.required, "aria-label": field.label };

  if (field.type === "textarea") {
    return <textarea {...common} rows={5} placeholder={placeholder} className={`${control} resize-y py-3.5`} />;
  }
  if (field.type === "select") {
    return (
      <div className="relative">
        <select {...common} defaultValue="" className={`${control} h-[52px] appearance-none pr-10 invalid:text-muted/80`}>
          <option value="" disabled>
            {placeholder}
          </option>
          {field.options?.map((o) => (
            <option key={o} value={o} className="text-navy">
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
      </div>
    );
  }
  return <input {...common} type={field.type} min={field.type === "number" ? 1 : undefined} placeholder={placeholder} className={`${control} h-[52px]`} />;
}

/** Generic form used by every inner page. Pass a field list from data/forms.ts. */
export default function LeadForm({
  fields,
  submitLabel = "Submit",
  successText = "Thanks! Your message has been sent — our team will get back to you shortly.",
}: {
  fields: Field[];
  submitLabel?: string;
  successText?: string;
}) {
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send new FormData(e.currentTarget) to the backend / email service.
    setDone(true);
  };

  if (done) {
    return (
      <div role="status" className="flex flex-col items-center rounded-2xl bg-brand-soft px-6 py-14 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand" strokeWidth={1.5} />
        <p className="mt-4 max-w-sm font-semibold text-navy">{successText}</p>
        <button onClick={() => setDone(false)} className="mt-5 text-sm font-bold uppercase tracking-wider text-brand hover:underline">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={f.full ? "sm:col-span-2" : ""}>
            <FieldInput field={f} />
          </div>
        ))}
      </div>
      <ConsentCheckboxes />
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_10px_24px_-10px_rgba(237,76,89,0.7)] transition hover:-translate-y-0.5 hover:bg-brand-dark sm:w-auto"
      >
        {submitLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
