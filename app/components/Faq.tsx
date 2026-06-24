"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

// Placeholder FAQ — final content to be confirmed.
const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Reach out via WhatsApp or Instagram with your idea, reference images and placement. I'll get back to you to arrange a consultation.",
  },
  {
    q: "Do you create custom designs?",
    a: "Yes — every tattoo is designed specifically for you based on your story and ideas.",
  },
  {
    q: "Is a deposit required?",
    a: "A small deposit secures your appointment and goes towards the final price of your tattoo.",
  },
  {
    q: "How should I prepare for my session?",
    a: "Get a good night's sleep, stay hydrated, eat beforehand and wear comfortable clothing that gives access to the area.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="border-y border-white/5 bg-zinc-950/60"
    >
      <div className="mx-auto max-w-3xl px-6 py-24 sm:px-10">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-accent">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">
            Good to Know
          </h2>
        </div>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm font-medium text-white sm:text-base">
                    {item.q}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-zinc-400">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
