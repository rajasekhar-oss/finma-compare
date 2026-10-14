/**
 * PREVIEW-ONLY header and footer, mirroring finma.ca's live menus and footer
 * (audited Oct 2026). On integration, delete this file and render
 * CorporateAccountingPage inside FINMA's existing global layout.
 */
import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { MEDIA, PAGE_PATHS, SITE_ORIGIN, UI } from "@/content/corporate-accounting/adapter";
import type { Locale } from "@/content/corporate-accounting/types";

type L = readonly [string, string | null];

const NAV: Record<Locale, {
  home: string; main: readonly L[]; book: L; services: readonly L[]; company: readonly L[]; resources: readonly L[];
  hServices: string; hCompany: string; hResources: string; tagline: string; disclaimer: string; rights: string;
}> = {
  "en-CA": {
    home: "/",
    main: [["About Us", "/about"], ["Who We Are", "/who-we-are"], ["Financial Advisory", "/financial-advisory"], ["Property Management", "/property-management"], ["Testimonials", "/testimonials"], ["Contact", "/contact"]],
    book: ["Book a Free Consultation", "/booking"],
    services: [["Mergers & Acquisitions", "/services/ma-advisory"], ["Corporate Finance", "/services/corporate-finance"], ["Corporate Accounting & Tax Returns", null], ["Management of Syndicates of Co-ownerships", "/services/syndicate-management"], ["Property Management", "/property-management"], ["Our Approach", "/services/our-approach"], ["TEKIS Framework", "/services/tekis"]],
    company: [["About FINMA", "/about"], ["Who We Are", "/who-we-are"], ["Testimonials", "/testimonials"], ["Contact Us", "/contact"]],
    resources: [["Privacy Policy", "/privacy-policy"], ["Terms of Service", "/terms-of-service"]],
    hServices: "Services", hCompany: "Company", hResources: "Resources",
    tagline: "Corporate finance, M&A, and Accounting solutions for Canadian SMBs as well as Property Management solutions for Syndicates of co-ownerships in Quebec. Partner-led, hands-on execution from strategy to closing — practical accounting, rigorous finance, clear advice.",
    disclaimer: "Finma Canada Inc. is an independent Canadian advisory and management firm. Content is for information purposes and does not constitute legal, tax, or investment advice. We are not affiliated with, nor regulated by, the Swiss Financial Market Supervisory Authority (FINMA).",
    rights: "All rights reserved.",
  },
  "fr-CA": {
    home: "/fr",
    main: [["À propos", "/fr/about"], ["Qui nous sommes", "/fr/who-we-are"], ["Conseil financier", "/fr/financial-advisory"], ["Gestion immobilière", "/fr/property-management"], ["Témoignages", "/fr/testimonials"], ["Contact", "/fr/contact"]],
    book: ["Réservez une consultation gratuite", "/booking"],
    services: [["Fusions & acquisitions", "/fr/services/ma-advisory"], ["Finance d'entreprise", "/fr/services/corporate-finance"], ["Comptabilité d’entreprise et déclarations de revenus", null], ["Gestion de syndicats de copropriétés", "/fr/services/syndicate-management"], ["Gestion immobilière", "/fr/property-management"], ["Notre approche", "/fr/services/our-approach"], ["Cadre TEKIS", "/fr/services/tekis"]],
    company: [["À propos de FINMA", "/fr/about"], ["Qui nous sommes", "/fr/who-we-are"], ["Témoignages", "/fr/testimonials"], ["Nous joindre", "/fr/contact"]],
    resources: [["Politique de confidentialité", "/fr/privacy-policy"], ["Conditions d'utilisation", "/fr/terms-of-service"]],
    hServices: "Services", hCompany: "Société", hResources: "Ressources",
    tagline: "Corporate finance, M&A, and Accounting solutions for Canadian SMBs as well as Property Management solutions for Syndicates of co-ownerships in Quebec. Partner-led, hands-on execution from strategy to closing — practical accounting, rigorous finance, clear advice.",
    disclaimer: "Finma Canada Inc. est une société canadienne indépendante de conseil et de gestion. Nous ne sommes ni affiliés ni régis par l'Autorité fédérale de surveillance des marchés financiers de Suisse (FINMA).",
    rights: "Tous droits réservés.",
  },
};

/** Contact pages exist locally in the preview; everything else lives on finma.ca. */
function href(path: string | null, locale: Locale) {
  if (path === null) return PAGE_PATHS[locale];
  if (path === "/contact" || path === "/fr/contact") return path;
  return `${SITE_ORIGIN}${path}`;
}

export function PreviewChrome({ locale, children }: { locale: Locale; children: ReactNode }) {
  const ui = UI[locale];
  const n = NAV[locale];
  const other: Locale = locale === "en-CA" ? "fr-CA" : "en-CA";
  const [mobile, setMobile] = useState(false);
  // This service sits under Financial Advisory on finma.ca.
  const isCurrentSection = (p: string | null) => p === "/financial-advisory" || p === "/fr/financial-advisory";

  const FooterList = ({ title, items }: { title: string; items: readonly L[] }) => (
    <div>
      <h2 className="eyebrow mb-4 font-sans text-gold">{title}</h2>
      <ul className="space-y-2 text-sm">
        {items.map(([label, p]) => (
          <li key={label}><a href={href(p, locale)} aria-current={p === null ? "page" : undefined} className="hover:text-gold-light aria-[current=page]:text-gold-light">{label}</a></li>
        ))}
      </ul>
    </div>
  );

  return (
    <div lang={locale}>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-cream focus:px-4 focus:py-2 focus:text-primary">
        {ui.skipToContent}
      </a>
      <header className="fixed inset-x-0 top-0 z-50 h-[var(--header-h)] border-b border-gold/15 bg-navy-dark/90 backdrop-blur">
        <div className="container flex h-full items-center justify-between px-6 lg:px-12">
          <a href={`${SITE_ORIGIN}${n.home}`} className="flex h-full items-center">
            <img src={MEDIA.finmaLogo} alt="FINMA" width={591} height={394} className="h-20 w-auto object-contain" />
          </a>
          <nav aria-label={ui.primaryNavLabel} className="hidden items-center gap-6 xl:flex">
            {n.main.map(([label, p]) => (
              <a key={label} href={href(p, locale)} className={`text-sm font-medium hover:text-gold-light ${isCurrentSection(p) ? "text-gold-light" : "text-cream/90"}`}>{label}</a>
            ))}
            <Link to={PAGE_PATHS[other]} hrefLang={other} aria-label={ui.languageSwitchTarget} className="text-sm font-semibold text-gold-light hover:text-cream">
              {ui.languageSwitchLabel}
            </Link>
            <a href={href(n.book[1], locale)} className="btn-gold rounded-full px-6 py-2.5 text-sm font-semibold">{n.book[0]}</a>
          </nav>
          <button type="button" className="inline-flex h-11 w-11 items-center justify-center text-cream xl:hidden" aria-expanded={mobile} aria-controls="mobile-nav" aria-label={mobile ? ui.close : ui.menu} onClick={() => setMobile(!mobile)}>
            {mobile ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>
        {mobile && (
          <nav id="mobile-nav" aria-label={ui.primaryNavLabel} className="max-h-[calc(100vh-var(--header-h))] overflow-y-auto border-t border-gold/15 bg-navy-dark px-6 pb-6 xl:hidden">
            <ul className="mt-2">
              {n.main.map(([label, p]) => (
                <li key={label}><a href={href(p, locale)} className="block py-3 text-cream/90">{label}</a></li>
              ))}
              <li><Link to={PAGE_PATHS[other]} hrefLang={other} className="block py-3 font-semibold text-gold-light">{ui.languageSwitchTarget}</Link></li>
            </ul>
            <a href={href(n.book[1], locale)} className="btn-gold mt-4 inline-flex rounded-full px-6 py-3 text-sm font-semibold">{n.book[0]}</a>
          </nav>
        )}
      </header>

      <main id="main">{children}</main>

      <footer className="bg-navy-dark text-cream/80">
        <div className="container grid gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img src={MEDIA.finmaLogo} alt="FINMA" width={591} height={394} loading="lazy" className="h-24 w-auto object-contain" />
              <img src={MEDIA.quickbooksGoldBadge} alt="QuickBooks Gold Tier ProAdvisor" loading="lazy" className="h-16 w-auto object-contain" />
            </div>
            <address className="space-y-1 text-sm not-italic">
              <p>3030 Curé-Labelle, suite 300<br />Laval, PQ H7P 0H9</p>
              <p>T: <a href="tel:+18773466222" className="hover:text-gold-light">1-877-FINMA-CA</a></p>
              <p>F: 1-438-228-1139</p>
              <p><a href="mailto:info@finma.ca" className="hover:text-gold-light">info@finma.ca</a></p>
            </address>
            <p className="flex gap-4 text-sm">
              <a href="https://www.facebook.com/Finma.Ca" rel="noopener" target="_blank" className="hover:text-gold-light">Facebook</a>
              <a href="https://www.linkedin.com/company/finma-canada/" rel="noopener" target="_blank" className="hover:text-gold-light">LinkedIn</a>
            </p>
          </div>
          <FooterList title={n.hServices} items={n.services} />
          <FooterList title={n.hCompany} items={n.company} />
          <FooterList title={n.hResources} items={n.resources} />
        </div>
        <div className="border-t border-cream/10">
          <div className="container space-y-3 px-6 py-6 text-xs text-cream/60 lg:px-12">
            <p>{n.tagline}</p>
            <p>{n.disclaimer}</p>
            <p>© {new Date().getFullYear()} Finma Canada Inc. {n.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
