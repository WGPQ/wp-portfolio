import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../../globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://williampuma.dev"),
  title: "William Puma | Ingeniero de Software - Web & Mobile",
  description: "Ingeniero de Software especializado en aplicaciones web y móviles utilizando Flutter, React, Angular y TypeScript.",
  alternates: { canonical: "/es", languages: { en: "/", es: "/es", "x-default": "/" } },
  authors: [{ name: "William Puma", url: "https://williampuma.dev" }],
  openGraph: { type: "website", url: "/es", title: "William Puma | Ingeniero de Software - Web & Mobile", description: "Ingeniero de Software especializado en aplicaciones web y móviles utilizando Flutter, React, Angular y TypeScript.", siteName: "William Puma", locale: "es_ES", images: [{ url: "/images/william.jpg", width: 2048, height: 2048, alt: "William Puma, Ingeniero de Software" }] },
  twitter: { card: "summary_large_image", title: "William Puma | Ingeniero de Software - Web & Mobile", description: "Ingeniero de Software especializado en aplicaciones web y móviles utilizando Flutter, React, Angular y TypeScript.", images: ["/images/william.jpg"] },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

export default function SpanishLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body className={`${geist.variable} antialiased`}>{children}</body></html>; }
