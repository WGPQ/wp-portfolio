import type { Locale } from "@/locales";

export default function JsonLd({ locale }: { locale: Locale }) {
  const pageUrl = locale === "es" ? "https://williampuma.dev/es" : "https://williampuma.dev";
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "William Puma",
      jobTitle: "Software Engineer",
      url: "https://williampuma.dev",
      sameAs: ["https://github.com/WGPQ/", "https://www.linkedin.com/in/william-puma-dev/"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "William Puma",
      url: pageUrl,
      inLanguage: locale,
    },
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />;
}
