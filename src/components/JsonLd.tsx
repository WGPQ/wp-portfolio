import type { Locale } from "@/locales";

export default function JsonLd({ locale }: { locale: Locale }) {
  const pageUrl = locale === "es" ? "https://williampuma.dev/es" : "https://williampuma.dev";
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://williampuma.dev/#person",
      name: "William Puma",
      jobTitle: "Senior Software Engineer",
      url: "https://williampuma.dev",
      image: "https://williampuma.dev/images/william.jpg",
      knowsAbout: ["Flutter", "React", "Angular", "TypeScript", "Web development", "Mobile development", "NestJS", "PostgreSQL", "MongoDB", "Redis", "Software architecture", "Technical leadership"],
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
      name: "William Puma | Senior Software Engineer | React, TypeScript & Flutter",
      inLanguage: locale,
      isPartOf: { "@id": "https://williampuma.dev/#website" },
      mainEntity: { "@id": "https://williampuma.dev/#person" },
    },
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />;
}
