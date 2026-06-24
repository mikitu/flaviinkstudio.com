"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { social } from "@/app/lib/site";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate flex min-h-screen items-center overflow-hidden"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 scale-110">
        <Image
          src="/header-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] sm:object-center"
        />
        {/* Mobile: uniform scrim so text reads anywhere over the photo */}
        <div className="absolute inset-0 bg-background/55 sm:hidden" />
        {/* Desktop: horizontal left scrim */}
        <div className="absolute inset-0 hidden bg-linear-to-r from-background/90 via-background/40 to-transparent sm:block" />
        {/* Both: bottom fade into the page background */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent sm:via-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto w-full max-w-7xl px-6 pt-28 sm:px-10"
      >
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium uppercase tracking-[0.4em] text-accent"
          >
            Custom Tattoos &amp; Design
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-display text-6xl leading-[0.9] tracking-wide text-white sm:text-7xl md:text-8xl"
          >
            Ink Your
            <br />
            <span className="font-script text-7xl font-normal italic tracking-normal text-accent sm:text-8xl md:text-9xl">
              Story
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-md text-sm leading-relaxed text-zinc-300 sm:text-base"
          >
            Realism, Black &amp; Grey, Fine Line.
            <br />
            Custom designs made to last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-accent-strong"
            >
              View Portfolio
            </a>
            <a
              href={social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-accent hover:text-accent"
            >
              Book Now
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10"
          >
            <SocialIcons />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
