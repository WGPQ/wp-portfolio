import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://williampuma.dev"),
  title: "William Puma | Senior Software Engineer | React, TypeScript & Flutter",
  description: "Senior Software Engineer specializing in React, TypeScript, Flutter, and NestJS. Frontend, full-stack and mobile development, software architecture, and technical leadership.",
  alternates: { canonical: "/", languages: { en: "/", es: "/es", "x-default": "/" } },
  authors: [{ name: "William Puma", url: "https://williampuma.dev" }],
  openGraph: { type: "website", url: "/", title: "William Puma | Senior Software Engineer | React, TypeScript & Flutter", description: "Senior Software Engineer specializing in React, TypeScript, Flutter, and NestJS. Frontend, full-stack and mobile development, software architecture, and technical leadership.", siteName: "William Puma", locale: "en_US", alternateLocale: ["es_ES"], images: [{ url: "https://williampuma.dev/images/logo-social.jpg", secureUrl: "https://williampuma.dev/images/logo-social.jpg", type: "image/jpeg", width: 800, height: 800, alt: "William Puma — W logo" }] },
  twitter: { card: "summary_large_image", title: "William Puma | Senior Software Engineer | React, TypeScript & Flutter", description: "Senior Software Engineer specializing in React, TypeScript, Flutter, and NestJS. Frontend, full-stack and mobile development, software architecture, and technical leadership.", images: ["https://williampuma.dev/images/logo-social.jpg"] },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className="antialiased">{children}</body></html>; }
