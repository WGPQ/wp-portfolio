import type { Dictionary } from "@/locales/en";

export default function Footer({ dictionary: t }: { dictionary: Dictionary }) {
  return <footer className="border-t border-white/10 bg-[#0b1020] py-8 text-sm text-slate-400"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 sm:flex-row sm:px-6"><p>© {new Date().getFullYear()} William Puma. {t.footer.rights}</p><a href="#top" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">{t.footer.backToTop}</a></div></footer>;
}
