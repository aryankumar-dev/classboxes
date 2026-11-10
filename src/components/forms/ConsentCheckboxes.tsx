import Link from "next/link";
import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { consent } from "@/data/site";
import { routes } from "@/lib/routes";

function Checkbox({ name, required, children }: { name: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="flex cursor-pointer gap-3">
      <span className="relative mt-0.5 flex h-[18px] w-[18px] shrink-0">
        <input
          type="checkbox"
          name={name}
          required={required}
          className="peer h-full w-full cursor-pointer appearance-none rounded border border-navy/30 bg-white transition checked:border-brand checked:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        />
        <Check className="pointer-events-none absolute inset-0 m-auto h-3 w-3 text-white opacity-0 peer-checked:opacity-100" strokeWidth={4} />
      </span>
      <span>{children}</span>
    </label>
  );
}

/** The two consent checkboxes shown under every form. Marketing is optional; privacy is required. */
export default function ConsentCheckboxes() {
  return (
    <div className="space-y-3 text-[13px] leading-relaxed text-muted">
      <Checkbox name="consentMarketing">{consent.marketing}</Checkbox>
      <Checkbox name="consentPrivacy" required>
        {consent.privacyPrefix}
        <Link href={routes.privacy} className="font-semibold text-brand hover:underline">
          {consent.privacyLink}
        </Link>
        {consent.privacySuffix} <span className="text-brand">*</span>
      </Checkbox>
    </div>
  );
}
