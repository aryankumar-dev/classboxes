export default function SectionHeading({
  eyebrow,
  red,
  navy,
  align = "left",
  as: Tag = "h2",
  light = false,
}: {
  eyebrow?: string;
  red: string;
  navy: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  light?: boolean;
}) {
  const center = align === "center";
  const size =
    Tag === "h1"
      ? "text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.05]"
      : "text-[30px] sm:text-[34px] lg:text-[38px] leading-[1.12]";

  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : ""}>
      {eyebrow && (
        <p
          className={`mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-brand ${center ? "justify-center" : ""}`}
        >
          <span className="h-px w-8 bg-brand" />
          {eyebrow}
          {center && <span className="h-px w-8 bg-brand" />}
        </p>
      )}
      <Tag className={`${Tag === "h1" ? "font-heading" : "font-sans"} font-extrabold tracking-tight ${size}`}>
        <span className="block text-brand">{red}</span>
        <span className={`block ${light ? "text-white" : "text-navy"}`}>{navy}</span>
      </Tag>
    </div>
  );
}
