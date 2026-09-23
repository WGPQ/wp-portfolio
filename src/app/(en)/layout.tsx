import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://williampuma.dev"),
  title: "William Puma | Software Engineer - Web & Mobile",
  description: "Software Engineer specializing in web and mobile applications using Flutter, React, Angular and TypeScript.",
  alternates: { canonical: "/", languages: { en: "/", es: "/es", "x-default": "/" } },
  authors: [{ name: "William Puma", url: "https://williampuma.dev" }],
  openGraph: { type: "website", url: "/", title: "William Puma | Software Engineer - Web & Mobile", description: "Software Engineer specializing in web and mobile applications using Flutter, React, Angular and TypeScript.", siteName: "William Puma", locale: "en_US", images: [{ url: "/images/william.jpg", width: 2048, height: 2048, alt: "William Puma, Software Engineer" }] },
  twitter: { card: "summary_large_image", title: "William Puma | Software Engineer - Web & Mobile", description: "Software Engineer specializing in web and mobile applications using Flutter, React, Angular and TypeScript.", images: ["/images/william.jpg"] },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${geist.variable} antialiased`}>{children}</body></html>; }
