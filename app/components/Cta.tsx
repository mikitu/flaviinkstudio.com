import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { social } from "@/app/lib/site";

const cards = [
  {
    title: "Book a Consultation",
    text: "Send me your idea and let's talk through your project.",
    cta: "Book Now",
    href: social.whatsapp,
    Icon: ArrowRight,
  },
  {
    title: "WhatsApp",
    text: "Message me directly on WhatsApp for quick details.",
    cta: "Chat on WhatsApp",
    href: social.whatsapp,
    Icon: MessageCircle,
  },
  {
    title: "Location",
    text: "Studio in Craiova, Romania. Details on request.",
    cta: "Get Directions",
    href: "https://maps.google.com/?q=Craiova,Romania",
    Icon: MapPin,
  },
];

export default function Cta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-linear-to-b from-zinc-950 to-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, var(--accent), transparent 45%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:items-center">
        <Reveal direction="right">
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-accent">
            Ready for your next tattoo?
          </span>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-white sm:text-6xl">
            Let&apos;s Create
            <br />
            Something{" "}
            <span className="font-script text-6xl italic text-accent sm:text-7xl">
              Epic
            </span>
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-1">
          {cards.map(({ title, text, cta, href, Icon }, i) => (
            <Reveal
              key={title}
              direction="left"
              delay={i * 0.1}
              className="flex flex-col gap-3 rounded-lg border border-white/10 bg-white/2 p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">{text}</p>
              </div>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-accent hover:text-accent"
              >
                {cta}
                <Icon className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
