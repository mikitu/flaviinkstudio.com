import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { social } from "@/app/lib/site";

type Tier = {
  name: string;
  note: string;
  features: string[];
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Small Piece",
    note: "Fine line & minimal designs",
    features: ["Up to 2 hours", "Single session", "Custom sketch included"],
  },
  {
    name: "Medium Piece",
    note: "Black & grey, detailed work",
    features: ["Half-day session", "Custom design", "Aftercare advice included"],
    featured: true,
  },
  {
    name: "Large / Sleeve",
    note: "Realism & large projects",
    features: ["Multiple sessions", "Full project planning", "Priority booking"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
      <div className="text-center">
        <span className="text-xs font-medium uppercase tracking-[0.4em] text-accent">
          Pricing
        </span>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">
          Investment
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
          Every tattoo is unique, so I don&apos;t work with fixed prices. The
          final quote depends on size, level of detail, placement and the time
          needed. Send me your idea and I&apos;ll get back to you with a
          personalised quote.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((tier, i) => (
          <Reveal
            key={tier.name}
            delay={i * 0.1}
            className={`flex h-full flex-col rounded-lg border p-8 ${
              tier.featured
                ? "border-accent/50 bg-accent/4"
                : "border-white/10 bg-white/2"
            }`}
          >
            <h3 className="font-display text-2xl tracking-wide text-white">
              {tier.name}
            </h3>
            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-accent">
              {tier.note}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-300">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                tier.featured
                  ? "bg-accent text-black hover:bg-accent-strong"
                  : "border border-white/20 text-white hover:border-accent hover:text-accent"
              }`}
            >
              Get a Quote
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
