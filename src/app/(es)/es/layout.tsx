import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://williampuma.dev"),
  title: "William Puma | Senior Software Engineer | Full-Stack y Mobile",
  description: "Ingeniero de Software Senior especializado en Flutter, React, NestJS y aplicaciones web y móviles escalables. Liderazgo técnico, arquitectura y desarrollo integral de productos.",
  alternates: { canonical: "/es", languages: { en: "/", es: "/es", "x-default": "/" } },
  authors: [{ name: "William Puma", url: "https://williampuma.dev" }],
  openGraph: { type: "website", url: "/es", title: "William Puma | Senior Software Engineer | Full-Stack y Mobile", description: "Ingeniero de Software Senior especializado en Flutter, React, NestJS y aplicaciones web y móviles escalables. Liderazgo técnico, arquitectura y desarrollo integral de productos.", siteName: "William Puma", locale: "es_ES", alternateLocale: ["en_US"], images: [{ url: "https://williampuma.dev/images/logo-social.jpg", secureUrl: "https://williampuma.dev/images/logo-social.jpg", type: "image/jpeg", width: 800, height: 800, alt: "William Puma — Logo W" }] },
  twitter: { card: "summary_large_image", title: "William Puma | Senior Software Engineer | Full-Stack y Mobile", description: "Ingeniero de Software Senior especializado en Flutter, React, NestJS y aplicaciones web y móviles escalables. Liderazgo técnico, arquitectura y desarrollo integral de productos.", images: ["https://williampuma.dev/images/logo-social.jpg"] },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

export default function SpanishLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body className="antialiased">{children}</body></html>; }
