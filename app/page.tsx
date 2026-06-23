import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-between overflow-hidden px-6 py-10 sm:px-10 sm:py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <header className="flex w-full max-w-6xl items-center justify-center">
        <Image
          src="/logo.png"
          alt="Flavi Ink Studio"
          width={220}
          height={88}
          priority
          className="h-auto w-40 sm:w-48 md:w-56"
        />
      </header>

      <section className="flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-8 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-accent">
          Custom Tattoos &amp; Design
        </span>

        <h1 className="font-display text-6xl leading-[0.95] tracking-wide text-white sm:text-7xl md:text-8xl lg:text-9xl">
          Coming
          <br />
          <span className="font-script text-7xl font-normal italic tracking-normal text-accent sm:text-8xl md:text-9xl lg:text-[10rem]">
            Soon
          </span>
        </h1>

        <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          We&apos;re inking something special. The new home of{" "}
          <span className="text-zinc-200">Flavi Ink Studio</span> — realism,
          black &amp; grey and fine line tattoos — is on the way.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/flaviinkstudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition hover:border-accent hover:text-accent"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-5 w-5"
              aria-hidden
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://facebook.com/FlaviInk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition hover:border-accent hover:text-accent"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.6H7.7V14h2.6v8h3.2Z" />
            </svg>
          </a>
          <a
            href="https://wa.me/447379678336"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-medium uppercase tracking-widest text-black transition hover:bg-accent-strong"
          >
            Book a consultation
          </a>
        </div>
      </section>

      <footer className="flex w-full max-w-6xl flex-col items-center justify-between gap-3 text-xs uppercase tracking-[0.25em] text-zinc-500 sm:flex-row">
        <span>© {new Date().getFullYear()} Flavi Ink Studio</span>
        <span className="text-zinc-400">Craiova · Romania &amp; UK</span>
      </footer>
    </main>
  );
}
