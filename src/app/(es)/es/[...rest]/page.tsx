import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = { title: "Página no encontrada | William Puma", alternates: { canonical: null, languages: {} } };

export default function UnknownSpanishRoute() {
  notFound();
}
