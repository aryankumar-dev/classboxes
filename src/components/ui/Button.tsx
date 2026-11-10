import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "red" | "navy" | "outline" | "white";

const styles: Record<Variant, string> = {
  red: "bg-brand text-white hover:bg-brand-dark shadow-[0_10px_24px_-10px_rgba(237,76,89,0.7)]",
  navy: "bg-navy text-white hover:bg-navy-deep shadow-[0_10px_24px_-12px_rgba(50,55,67,0.7)]",
  outline: "border border-navy/20 text-navy hover:border-brand hover:text-brand",
  white: "bg-white text-navy hover:bg-mist",
};

export default function Button({
  href = "#",
  variant = "red",
  children,
  arrow = false,
  className = "",
}: {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </Link>
  );
}
