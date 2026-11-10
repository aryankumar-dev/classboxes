import {
  Handshake,
  Briefcase,
  ClipboardCheck,
  MessagesSquare,
  CircleHelp,
  Megaphone,
  CheckCircle2,
  Star,
  type LucideIcon,
} from "lucide-react";

/**
 * Placeholder for the flat illustrations from the live site.
 * Swap for <Image src="/illustrations/xxx.svg" … /> once exported.
 */
const variants: Record<string, { icon: LucideIcon; chipA: string; chipB: string }> = {
  handshake: { icon: Handshake, chipA: "Candidate matched", chipB: "48h shortlist" },
  job: { icon: Briefcase, chipA: "New openings", chipB: "Apply in minutes" },
  skills: { icon: ClipboardCheck, chipA: "Score: 92%", chipB: "Offer received" },
  chat: { icon: MessagesSquare, chipA: "4.9 / 5 rating", chipB: "Verified review" },
  question: { icon: CircleHelp, chipA: "We reply fast", chipB: "Mon – Fri" },
  megaphone: { icon: Megaphone, chipA: "Monthly digest", chipB: "No spam" },
};

export default function Illustration({ variant }: { variant: keyof typeof variants }) {
  const { icon: Icon, chipA, chipB } = variants[variant];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      {/* grey blob */}
      <div className="absolute inset-[6%] rounded-[42%_58%_55%_45%/48%_42%_58%_52%] bg-mist" />
      {/* stripe accent */}
      <div className="stripes absolute right-[4%] top-[6%] h-24 w-24 rounded-full opacity-25" />
      <div className="stripes-navy absolute bottom-[8%] left-[2%] h-16 w-16 rounded-full opacity-15" />

      {/* center badge */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-[46%] w-[46%] items-center justify-center rounded-full bg-white shadow-soft">
          <div className="flex h-[70%] w-[70%] items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark">
            <Icon className="h-[46%] w-[46%] text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* floating chips */}
      <div className="absolute left-[2%] top-[22%] flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-navy shadow-card">
        <CheckCircle2 className="h-5 w-5 text-brand" />
        {chipA}
      </div>
      <div className="absolute bottom-[18%] right-[0%] flex items-center gap-2 rounded-2xl bg-navy px-4 py-3 text-sm font-semibold text-white shadow-card">
        <Star className="h-4 w-4 fill-brand text-brand" />
        {chipB}
      </div>
    </div>
  );
}
