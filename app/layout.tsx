import type { Metadata } from "next";
import { Inter, Bebas_Neue, Allura } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = "https://flaviinkstudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Flavi Ink Studio — Custom Tattoos & Design | Coming Soon",
  description:
    "Flavi Ink Studio — Custom tattoos & design in Craiova, Romania. Realism, Black & Grey, Fine Line. Our new website is coming soon.",
  keywords: [
    "Flavi Ink Studio",
    "tattoo Craiova",
    "custom tattoos",
    "realism tattoo",
    "black and grey tattoo",
    "fine line tattoo",
    "tatuaje Craiova",
  ],
  applicationName: "Flavi Ink Studio",
  authors: [{ name: "Flavi Ink Studio" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Flavi Ink Studio",
    title: "Flavi Ink Studio — Coming Soon",
    description:
      "Custom tattoos & design in Craiova, Romania. Our new website is coming soon.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Flavi Ink Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flavi Ink Studio — Coming Soon",
    description:
      "Custom tattoos & design in Craiova, Romania. Our new website is coming soon.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} ${allura.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
