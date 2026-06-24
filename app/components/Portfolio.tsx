import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { portfolioItems, social } from "@/app/lib/site";

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6 text-center sm:px-10">
        <span className="text-xs font-medium uppercase tracking-[0.4em] text-accent">
          Portfolio
        </span>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">
          Latest Work
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          A selection of recent pieces — realism, black &amp; grey and fine line.
          Every tattoo is custom designed and made to last. Follow along for new
          work and behind-the-scenes.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-2 px-2 sm:grid-cols-3 sm:gap-3 sm:px-3">
        {portfolioItems.map((item, i) => (
          <Reveal
            key={item.src}
            delay={(i % 3) * 0.08}
            className="group relative aspect-square overflow-hidden rounded-sm bg-zinc-900"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent transition-opacity duration-300 group-hover:from-black/85" />
            <Reveal
              as="div"
              direction="up"
              delay={(i % 3) * 0.08 + 0.18}
              className="absolute inset-x-0 bottom-0 p-5 sm:p-6"
            >
              <h3 className="font-script text-4xl italic leading-none text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-5xl">
                {item.title}
              </h3>
            </Reveal>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href={social.facebookPhotos}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-accent hover:text-accent"
        >
          View Full Portfolio
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
