export const social = {
  instagram: "https://www.instagram.com/flaviinkstudio",
  facebook: "https://facebook.com/FlaviInk",
  facebookPhotos: "https://www.facebook.com/FlaviInk/photos",
  whatsapp: "https://wa.me/447379678336",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const portfolioFilters = [
  "All",
  "Realism",
  "Black & Grey",
  "Fine Line",
  "Large Pieces",
  "Custom Design",
] as const;

export type PortfolioFilter = (typeof portfolioFilters)[number];

export type PortfolioItem = {
  src: string;
  alt: string;
  title: string;
};

export const portfolioItems: PortfolioItem[] = [
  { src: "/portfolio/tatoo-1.jpg", alt: "The Reaper tattoo", title: "The Reaper" },
  { src: "/portfolio/tatoo-2.jpg", alt: "Crowned in Faith tattoo", title: "Crowned in Faith" },
  { src: "/portfolio/tatoo-3.jpg", alt: "Sacred Prayer tattoo", title: "Sacred Prayer" },
  { src: "/portfolio/tatoo-4.jpg", alt: "Family & Strength tattoo", title: "Family & Strength" },
  { src: "/portfolio/tatoo-5.jpg", alt: "Fallen Divinity tattoo", title: "Fallen Divinity" },
  { src: "/portfolio/tatoo-6.jpg", alt: "Wild Spirit tattoo", title: "Wild Spirit" },
  { src: "/portfolio/tatoo-7.jpg", alt: "Rebel Smile tattoo", title: "Rebel Smile" },
  { src: "/portfolio/tatoo-8.jpg", alt: "Ascension tattoo", title: "Ascension" },
  { src: "/portfolio/tatoo-9.jpg", alt: "Loyal Souls tattoo", title: "Loyal Souls" },
  { src: "/portfolio/tatoo-10.jpg", alt: "The Northman tattoo", title: "The Northman" },
  { src: "/portfolio/tatoo-11.jpg", alt: "Blessed tattoo", title: "Blessed" },
  { src: "/portfolio/tatoo-12.jpg", alt: "Roots tattoo", title: "Roots" },
];
