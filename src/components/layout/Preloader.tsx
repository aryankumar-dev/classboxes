"use client";

import { useEffect, useState } from "react";
import { LogoGlyph } from "@/components/ui/Logo";

const FADE_MS = 800; // must match the transition in globals.css (.preloader)
const SAFETY_MS = 5000; // hide even if "load" never fires

/**
 * Full-page loading screen. Rendered in the server HTML so it paints before the
 * page content, then fades out on window "load". Styles live in globals.css.
 * CSS also hides it after 5s on its own, so it can never get stuck if JS fails.
 */
export default function Preloader() {
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible");

  useEffect(() => {
    const hide = () => setPhase((p) => (p === "visible" ? "fading" : p));

    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide, { once: true });
    const safety = window.setTimeout(hide, SAFETY_MS);

    return () => {
      window.removeEventListener("load", hide);
      window.clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    if (phase !== "fading") return;
    const t = window.setTimeout(() => setPhase("gone"), FADE_MS);
    return () => window.clearTimeout(t);
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div className={`preloader${phase === "fading" ? " is-hidden" : ""}`} role="status" aria-live="polite">
      <span className="sr-only">Loading…</span>
      {/* Logo as one SVG so it scales: 100px tall, shrinks to fit narrow screens. */}
      <svg className="preloader__logo" viewBox="0 0 292 52" aria-hidden>
        <g transform="translate(0 2)">
          <LogoGlyph />
        </g>
        <text
          x="56"
          y="31"
          fontSize="30"
          fontWeight="800"
          fontStyle="italic"
          letterSpacing="-0.5"
          style={{ fontFamily: "var(--font-mukta), system-ui, sans-serif" }}
        >
          <tspan fill="#ED4C59">Class</tspan>
          <tspan fill="#323743">Boxes</tspan>
        </text>
        <text
          x="57"
          y="46"
          fontSize="9.5"
          fontWeight="600"
          fill="#6b7080"
          textLength="230"
          lengthAdjust="spacing"
          style={{ fontFamily: "var(--font-mukta-vaani), system-ui, sans-serif" }}
        >
          LEARNING &amp; DEVELOPMENT CENTER
        </text>
      </svg>
      <div className="preloader__dots" aria-hidden>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
