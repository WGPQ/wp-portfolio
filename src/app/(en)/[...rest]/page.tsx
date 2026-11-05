import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = { title: "Page not found | William Puma", alternates: { canonical: null, languages: {} } };

export default function UnknownEnglishRoute() {
  notFound();
}
