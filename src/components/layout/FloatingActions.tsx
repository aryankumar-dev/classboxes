"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp, MessageCircle } from "lucide-react";
import { routes } from "@/lib/routes";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white shadow-card transition hover:bg-brand"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
      <Link
        href={routes.contact}
        className="inline-flex items-center gap-2 rounded-full bg-[#25a55f] py-3 pl-4 pr-5 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-[#1f8f52]"
      >
        <MessageCircle className="h-5 w-5" />
        Send message
      </Link>
    </div>
  );
}
