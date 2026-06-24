import Image from "next/image";
import { navLinks } from "@/app/lib/site";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:px-10 md:grid-cols-3">
        <div>
          <Image
            src="/logo.png"
            alt="Flavi Ink Studio"
            width={160}
            height={64}
            className="h-auto w-32"
          />
          <p className="mt-4 text-sm text-zinc-400">Custom Tattoos &amp; Design</p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-600">
            © {year} Flavi Ink Studio. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Quick Links
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-400 transition hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Follow Me
          </h3>
          <SocialIcons className="mt-4" />
          <div className="mt-6 space-y-1 text-sm text-zinc-400">
            <p>Craiova, Romania &amp; UK</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
