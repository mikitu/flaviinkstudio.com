"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  PenTool,
  Lightbulb,
  ShieldCheck,
  Heart,
  type LucideIcon,
} from "lucide-react";

type Trait = { Icon: LucideIcon; title: string; text: string };

const traits: Trait[] = [
  { Icon: PenTool, title: "Precision", text: "Attention to detail in every line." },
  { Icon: Lightbulb, title: "Creativity", text: "Unique designs, created together with you." },
  { Icon: ShieldCheck, title: "Hygiene & Safety", text: "High standards for a safe experience." },
  { Icon: Heart, title: "Passion", text: "Every tattoo made with passion and respect." },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden border-y border-white/5 bg-zinc-950"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Full-bleed photo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-110 overflow-hidden lg:min-h-full"
        >
          <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
            <Image
              src="/about.png"
              alt="Flavi — tattoo artist at Flavi Ink Studio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-transparent to-zinc-950 lg:via-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent lg:bg-none" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:py-24 lg:pr-16"
        >
          <div className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-accent">
              About the Artist
            </span>
            <h2 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">
              <span className="text-white">Hi, I&apos;m </span>
              <span className="bg-linear-to-r from-accent-strong via-accent to-accent-strong bg-clip-text text-transparent">
                Flavi
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              <p>
                I&apos;m a tattoo artist and designer, passionate
                about art, detail and the stories behind every tattoo. Every piece
                I create is the result of a collaboration — an idea transformed
                into something unique.
              </p>
              <p>
                I love realism, black &amp; grey and custom design, but I&apos;m
                always open to creating something new, tailored to each client.
              </p>
              <p>
                My goal is simple: to create tattoos that look great today,
                tomorrow and for a lifetime.
              </p>
            </div>

            <Image
              src="/flavi-ink.png"
              alt="Flavi Ink signature"
              width={220}
              height={78}
              className="mt-8 h-auto w-44 opacity-90"
            />

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4">
              {traits.map(({ Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="group text-center"
                >
                  <Icon
                    className="mx-auto h-7 w-7 text-accent transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.4}
                  />
                  <h3 className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
