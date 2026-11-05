"use client";

import { ArrowDownTrayIcon, Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/locales/en";
import type { Locale } from "@/locales";
import Logo from "../Logo";

type NavigationDictionary = Pick<Dictionary, "nav" | "common">;

interface NavbarProps { locale: Locale; dictionary: NavigationDictionary; cvUrl: string; }

export default function Navbar({ locale, dictionary: t, cvUrl }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menuButton = useRef<HTMLButtonElement>(null);
  const navItems = [{ name: t.nav.about, href: "#about" }, { name: t.nav.experience, href: "#experience" }, { name: t.nav.projects, href: "#projects" }, { name: t.nav.skills, href: "#skills" }, { name: t.nav.contact, href: "#contact" }];
  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    router.push(`${nextLocale === "es" ? "/es" : "/"}${window.location.hash}`);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setIsOpen(false);
      menuButton.current?.focus();
    };
    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  const followSection = (href: string) => {
    setIsOpen(false);
    document.querySelector<HTMLElement>(href)?.focus({ preventScroll: true });
  };

  return <header onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false); }} className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1020]/90 backdrop-blur-lg"><nav aria-label={t.common.navigation} className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-6">
    <a href="#top" aria-label={t.common.home} onClick={() => followSection("#top")} className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"><Logo /></a>
    <div className="hidden items-center gap-5 lg:flex">{navItems.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">{item.name}</a>)}<a href="https://github.com/WGPQ/" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-300 transition hover:text-white">GitHub<span className="sr-only"> ({t.common.opensNewTab})</span></a><a href="https://www.linkedin.com/in/william-puma-dev/" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-300 transition hover:text-white">LinkedIn<span className="sr-only"> ({t.common.opensNewTab})</span></a><LanguageSelect locale={locale} t={t} onChange={switchLocale} /><a href={cvUrl} download className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"><ArrowDownTrayIcon className="size-4" aria-hidden="true" /> {t.nav.downloadCv}</a></div>
    <button ref={menuButton} type="button" aria-controls="mobile-navigation" aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)} className="rounded-md p-2 text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 lg:hidden">{isOpen ? <XMarkIcon aria-hidden="true" className="size-6" /> : <Bars3Icon aria-hidden="true" className="size-6" />}</button>
  </nav><div id="mobile-navigation" hidden={!isOpen} className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-[#0b1020] px-5 py-5 lg:hidden"><div className="mx-auto flex max-w-6xl flex-col gap-1">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => followSection(item.href)} className="rounded-md px-3 py-3 font-medium text-slate-200 transition hover:bg-white/10">{item.name}</a>)}<div className="mt-3 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4"><LanguageSelect locale={locale} t={t} onChange={switchLocale} /><a href="https://github.com/WGPQ/" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white">GitHub<span className="sr-only"> ({t.common.opensNewTab})</span></a><a href="https://www.linkedin.com/in/william-puma-dev/" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white">LinkedIn<span className="sr-only"> ({t.common.opensNewTab})</span></a><a href={cvUrl} download className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950"><ArrowDownTrayIcon aria-hidden="true" className="size-4" /> {t.nav.downloadCv}</a></div></div></div></header>;
}

function LanguageSelect({ locale, t, onChange }: { locale: Locale; t: NavigationDictionary; onChange: (locale: Locale) => void }) {
  return <label className="relative inline-flex items-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-cyan-300"><span className="sr-only">{t.common.language}</span><select aria-label={t.common.language} value={locale} onChange={(event) => onChange(event.target.value as Locale)} className="appearance-none bg-transparent py-2 pl-3 pr-8 outline-none"><option className="bg-[#0b1020] text-white" value="en">EN</option><option className="bg-[#0b1020] text-white" value="es">ES</option></select><ChevronDownIcon className="pointer-events-none absolute right-2 size-4" aria-hidden="true" /></label>;
}
