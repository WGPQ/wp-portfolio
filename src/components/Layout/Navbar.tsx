"use client";

import { ArrowDownTrayIcon, Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/locales/en";
import type { Locale } from "@/locales";
import Logo from "../Logo";

interface NavbarProps { locale: Locale; dictionary: Dictionary; cvUrl: string; }

export default function Navbar({ locale, dictionary: t, cvUrl }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const navItems = [{ name: t.nav.about, href: "#about" }, { name: t.nav.experience, href: "#experience" }, { name: t.nav.projects, href: "#projects" }, { name: t.nav.skills, href: "#skills" }, { name: t.nav.contact, href: "#contact" }];
  const switchLocale = (nextLocale: Locale) => { localStorage.setItem("portfolio-locale", nextLocale); router.push(`${nextLocale === "es" ? "/es" : "/"}${window.location.hash}`); setIsOpen(false); };

  useEffect(() => { const savedLocale = localStorage.getItem("portfolio-locale") as Locale | null; if (savedLocale && savedLocale !== locale) router.replace(`${savedLocale === "es" ? "/es" : "/"}${window.location.hash}`); }, [locale, pathname, router]);

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1020]/90 backdrop-blur-lg"><nav aria-label="Primary navigation" className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-6">
    <a href="#top" aria-label={t.common.home} onClick={() => setIsOpen(false)} className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"><Logo /></a>
    <div className="hidden items-center gap-5 lg:flex">{navItems.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">{item.name}</a>)}<a href="https://github.com/WGPQ/" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-300 transition hover:text-white">GitHub</a><a href="https://www.linkedin.com/in/william-puma-dev/" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-300 transition hover:text-white">LinkedIn</a><LanguageSelect locale={locale} t={t} onChange={switchLocale} /><a href={cvUrl} download className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"><ArrowDownTrayIcon className="size-4" aria-hidden="true" /> {t.nav.downloadCv}</a></div>
    <button type="button" aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)} className="rounded-md p-2 text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 lg:hidden">{isOpen ? <XMarkIcon className="size-6" /> : <Bars3Icon className="size-6" />}</button>
  </nav>{isOpen && <div className="border-t border-white/10 bg-[#0b1020] px-5 py-5 lg:hidden"><div className="mx-auto flex max-w-6xl flex-col gap-1">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="rounded-md px-3 py-3 font-medium text-slate-200 transition hover:bg-white/10">{item.name}</a>)}<div className="mt-3 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4"><LanguageSelect locale={locale} t={t} onChange={switchLocale} /><a href="https://github.com/WGPQ/" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white">GitHub</a><a href="https://www.linkedin.com/in/william-puma-dev/" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white">LinkedIn</a><a href={cvUrl} download className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950"><ArrowDownTrayIcon className="size-4" /> {t.nav.downloadCv}</a></div></div></div>}</header>;
}

function LanguageSelect({ locale, t, onChange }: { locale: Locale; t: Dictionary; onChange: (locale: Locale) => void }) {
  return <label className="relative inline-flex items-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white"><span className="sr-only">{t.common.language}</span><select aria-label={t.common.language} value={locale} onChange={(event) => onChange(event.target.value as Locale)} className="appearance-none bg-transparent py-2 pl-3 pr-8 outline-none"><option value="en">EN</option><option value="es">ES</option></select><ChevronDownIcon className="pointer-events-none absolute right-2 size-4" aria-hidden="true" /></label>;
}
