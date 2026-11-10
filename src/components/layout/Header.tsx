"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Mail, ArrowUpRight, Search } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import SearchForm from "@/components/search/SearchForm";
import { contact, navLinks } from "@/data/site";
import { routes } from "@/lib/routes";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-white/80">
        <div className="container-x flex h-10 items-center justify-between text-[13px]">
          <a href={contact.phoneHref} className="inline-flex items-center gap-2 hover:text-white">
            <Phone className="h-3.5 w-3.5 text-brand" />
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="hidden items-center gap-2 hover:text-white sm:inline-flex">
            <Mail className="h-3.5 w-3.5 text-brand" />
            {contact.email}
          </a>
        </div>
      </div>

      {/* Sticky header */}
      <header
        className={`sticky top-0 z-40 bg-white/90 backdrop-blur transition-shadow duration-300 ${scrolled ? "shadow-[0_6px_30px_-18px_rgba(50,55,67,0.45)]" : ""}`}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy transition hover:border-brand hover:text-brand"
            >
              <Menu className="h-5 w-5" />
            </button>
            <Logo />
          </div>
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`relative py-2 text-[15px] font-semibold transition hover:text-brand after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-brand after:transition-transform ${isActive(l.href) ? "text-brand after:scale-x-100" : "text-navy after:scale-x-0"}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              aria-controls="header-search"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy transition hover:border-brand hover:text-brand"
            >
              {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </button>
            <span className="hidden md:block">
              <Button href={routes.findTalent}>Hire Talent</Button>
            </span>
          </div>
        </div>

        {/* Search bar that drops down below the header */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              id="header-search"
              className="absolute inset-x-0 top-full border-t border-line bg-white shadow-[0_16px_30px_-20px_rgba(50,55,67,0.45)]"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="container-x py-5">
                <SearchForm autoFocus onSubmit={() => setSearchOpen(false)} className="mx-auto max-w-2xl" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-navy-deep/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="fixed inset-y-0 left-0 z-50 flex w-[86%] max-w-sm flex-col bg-white p-7"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-navy hover:bg-brand hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <SearchForm onSubmit={() => setOpen(false)} className="mt-8" />
              <nav className="mt-6 flex flex-col">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className={`group flex items-center justify-between border-b border-line py-4 font-heading text-xl font-bold hover:text-brand ${isActive(l.href) ? "text-brand" : "text-navy"}`}
                    >
                      {l.label}
                      <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:text-brand" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto space-y-2 rounded-2xl bg-mist p-5 text-sm text-navy">
                <p className="font-bold uppercase tracking-[0.18em] text-brand text-xs">Get in touch</p>
                <a href={contact.phoneHref} className="block font-semibold">{contact.phone}</a>
                <a href={`mailto:${contact.email}`} className="block font-semibold">{contact.email}</a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
