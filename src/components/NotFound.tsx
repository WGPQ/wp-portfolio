import { ArrowLeftIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import type { Locale } from "@/locales";
import Logo from "./Logo";

const copy = {
  en: {
    label: "Page not found", skip: "Skip to main content",
    title: "A little off the beaten path.",
    description: "This page may have moved, or the link may be incorrect. Let’s get you back to something worth exploring.",
    home: "Back to home", projects: "Explore my projects", contact: "Let’s talk",
    hint: "Good things are still one click away.", rights: "All rights reserved.", navigation: "Navigation",
  },
  es: {
    label: "Página no encontrada", skip: "Saltar al contenido principal",
    title: "Esta ruta se salió del mapa.",
    description: "Puede que la página se haya movido o que el enlace sea incorrecto. Volvamos a algo que vale la pena explorar.",
    home: "Volver al inicio", projects: "Explorar mis proyectos", contact: "Hablemos",
    hint: "Las buenas ideas siguen a un clic de distancia.", rights: "Todos los derechos reservados.", navigation: "Navegación",
  },
};

export default function NotFound({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const home = locale === "es" ? "/es" : "/";
  const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300";

  return <div className="flex min-h-svh flex-col bg-[#0b1020] text-slate-100">
    <a href="#top" className="skip-link">{t.skip}</a>
    <header className="border-b border-white/10">
      <nav aria-label={t.navigation} className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a href={home} aria-label={`William Puma — ${t.home}`} className={`rounded-sm ${focus}`}><Logo /></a>
        <a href={`${home}#contact`} className={`inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-200 hover:text-white ${focus}`}>{t.contact}<ArrowUpRightIcon aria-hidden="true" className="size-4" /></a>
      </nav>
    </header>
    <main id="top" tabIndex={-1} className="relative isolate flex flex-1 items-center justify-center overflow-hidden px-5 py-16 sm:px-6 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.12),transparent_65%)]" />
      <div className="w-full max-w-2xl text-center">
        <p className="section-kicker">{t.label}</p>
        <div aria-hidden="true" className="relative mx-auto mt-6 w-fit select-none">
          <span className="block text-[clamp(7rem,25vw,13rem)] leading-none font-semibold tracking-[-0.08em] text-cyan-200">404<span className="ml-1 text-cyan-300">.</span></span>
        </div>
        <h1 className="mt-9 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{t.title}</h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.description}</p>
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a href={home} className={`inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 ${focus}`}><ArrowLeftIcon aria-hidden="true" className="size-4" />{t.home}</a>
          <a href={`${home}#projects`} className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-200 hover:bg-white/5 ${focus}`}>{t.projects}<ArrowUpRightIcon aria-hidden="true" className="size-4" /></a>
        </div>
        <p className="mt-8 text-sm text-slate-500">{t.hint}</p>
      </div>
    </main>
    <footer className="border-t border-white/10 px-5 py-6 text-center text-xs leading-6 text-slate-400 sm:px-6">© {new Date().getFullYear()} William Puma. {t.rights}</footer>
  </div>;
}
