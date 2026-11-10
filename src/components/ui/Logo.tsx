import Link from "next/link";

/**
 * Recreated ClassBoxes wordmark. To use the official file instead, drop it at
 * public/logo.png and replace the markup below with <Image src="/logo.png" … />.
 */
export default function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="ClassBoxes home" className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" aria-hidden>
        {/* book */}
        <path d="M33 4.5l4.5 2v6.5L33 11z M37.5 6.5L42 4.5V11l-4.5 2z" fill="#ED4C59" />
        {/* head */}
        <circle cx="17" cy="11" r="5" fill={light ? "#fff" : "#323743"} />
        {/* raised arm + body */}
        <path
          d="M10 22c4-3 10-4 15-6 4-1.5 7-4 9-8.5l3 1.5c-2 6-6 10-11 12l-3 1.2c1 6 0 12-3 19l-5-1c2-5 3-10 2.5-15L12 26z"
          fill={light ? "#fff" : "#323743"}
        />
        {/* red swoosh figure */}
        <path d="M6 30c3-2 6-2 8 0 1.5 2 1 5-1.5 6.5L9 45l-4-1 3.2-7.6C5 35.5 4 32 6 30z" fill="#ED4C59" />
        <circle cx="9" cy="33" r="1.6" fill="#fff" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[26px] font-extrabold italic tracking-tight">
          <span className="text-brand">Class</span>
          <span className={light ? "text-white" : "text-navy"}>Boxes</span>
        </span>
        <span className={`mt-0.5 text-[9.5px] font-semibold uppercase tracking-[0.18em] ${light ? "text-white/60" : "text-muted"}`}>
          Learning &amp; Development Center
        </span>
      </span>
    </Link>
  );
}
