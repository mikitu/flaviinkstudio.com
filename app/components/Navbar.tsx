"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, social } from "@/app/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10">
        <Link href="#home" aria-label="Flavi Ink Studio — home">
          <Image
            src="/logo.png"
            alt="Flavi Ink Studio"
            width={160}
            height={64}
            priority
            className="h-auto w-28 sm:w-32"
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-300 transition hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-accent/60 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-accent transition hover:bg-accent hover:text-black sm:inline-flex"
          >
            Book a Consultation
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-200 transition hover:border-accent hover:text-accent lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-background/95 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col px-6 py-4 sm:px-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-300 transition hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-black"
                >
                  Book a Consultation
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
