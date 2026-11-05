import type { Locale } from "@/locales";

export default function JsonLd({ locale }: { locale: Locale }) {
  const pageUrl = locale === "es" ? "https://williampuma.dev/es" : "https://williampuma.dev";
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://williampuma.dev/#person",
      name: "William Puma",
      jobTitle: "Software Engineer",
      url: "https://williampuma.dev",
      image: "https://williampuma.dev/images/william.jpg",
      knowsAbout: ["Flutter", "React", "Angular", "TypeScript", "Web development", "Mobile development"],
      sameAs: ["https://github.com/WGPQ/", "https://www.linkedin.com/in/william-puma-dev/"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://williampuma.dev/#website",
      name: "William Puma",
      url: "https://williampuma.dev/",
      publisher: { "@id": "https://williampuma.dev/#person" },
      inLanguage: ["en", "es"],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: locale === "es" ? "William Puma | Ingeniero de Software - Web & Mobile" : "William Puma | Software Engineer - Web & Mobile",
      inLanguage: locale,
      isPartOf: { "@id": "https://williampuma.dev/#website" },
      mainEntity: { "@id": "https://williampuma.dev/#person" },
    },
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />;
}
