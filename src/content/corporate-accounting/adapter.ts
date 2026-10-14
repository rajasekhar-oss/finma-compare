/**
 * Content adapter boundary. Today it returns the bundled, versioned JSON
 * records. To connect a CMS later, replace `loadRecord` with a fetch of the
 * CMS record and keep `validateServicePage` in front of rendering.
 */
import en from "./en.json";
import fr from "./fr.json";
import type { AnchorKey, Cta, IconKey, Locale, RouteKey, ServicePage, UiStrings } from "./types";

import logo from "@/assets/finma/finma-full-logo.webp.asset.json";
import badge from "@/assets/finma/quickbooks-gold-badge.png.asset.json";
import hero from "@/assets/finma/valuations-hero.jpg.asset.json";
import architecture from "@/assets/finma/bg-architecture.jpg.asset.json";
import library from "@/assets/finma/bg-library.jpg.asset.json";

export const MEDIA: Record<ServicePage["hero"]["image"]["assetKey"], string> = {
  finmaLogo: logo.url,
  quickbooksGoldBadge: badge.url,
  valuationsHero: hero.url,
  bgArchitecture: architecture.url,
  bgLibrary: library.url,
};

/**
 * Pages that exist on finma.ca but not in this preview resolve to the live
 * site. On integration, set SITE_ORIGIN to "" so they become local paths.
 */
export const SITE_ORIGIN = "https://finma.ca";

/** French booking stays on /booking — the live French header links there. */
const ROUTES: Record<Locale, Record<RouteKey, string>> = {
  "en-CA": {
    booking: "/booking",
    contact: "/contact",
    contactAccounting: "/contact?service=accounting",
    corporateFinance: "/services/corporate-finance",
    maAdvisory: "/services/ma-advisory",
    ourApproach: "/services/our-approach",
  },
  "fr-CA": {
    booking: "/booking",
    contact: "/fr/contact",
    contactAccounting: "/fr/contact?service=accounting",
    corporateFinance: "/fr/services/corporate-finance",
    maAdvisory: "/fr/services/ma-advisory",
    ourApproach: "/fr/services/our-approach",
  },
};

export const PAGE_PATHS: Record<Locale, string> = {
  "en-CA": "/services/corporate-accounting-tax-returns",
  "fr-CA": "/fr/services/corporate-accounting-tax-returns",
};

/** Routes that exist locally in this preview; all others go to the live site. */
const LOCAL_KEYS = new Set<RouteKey>(["contact", "contactAccounting"]);

export function resolveCta(cta: Cta, locale: Locale): string {
  if (cta.anchor) return `#${cta.anchor}`;
  const key = cta.routeKey as RouteKey;
  return LOCAL_KEYS.has(key) ? ROUTES[locale][key] : `${SITE_ORIGIN}${ROUTES[locale][key]}`;
}
export function resolveRoute(key: RouteKey, locale: Locale): string {
  return LOCAL_KEYS.has(key) ? ROUTES[locale][key] : `${SITE_ORIGIN}${ROUTES[locale][key]}`;
}

const ROUTE_KEYS = new Set(Object.keys(ROUTES["en-CA"]));
const ANCHORS = new Set<AnchorKey>(["accounting-services", "overview", "corporate-tax-filing", "quickbooks", "our-process", "frequently-asked-questions"]);
const ICONS = new Set<IconKey>(["bookOpen", "calendarCheck", "landmark", "monitorCog", "lineChart", "eraser", "briefcase", "messageSquare", "languages", "link"]);

function assertCta(c: Cta, where: string) {
  if (!c?.label) throw new Error(`${where}: CTA label missing`);
  if (c.anchor ? !ANCHORS.has(c.anchor) : !ROUTE_KEYS.has(c.routeKey as string))
    throw new Error(`${where}: destination not allow-listed`);
}

/** Structural validation for any record (bundled or CMS) before render. */
export function validateServicePage(raw: unknown): ServicePage {
  const p = raw as ServicePage;
  if (p?.schemaVersion !== 1) throw new Error("Unsupported schemaVersion");
  if (!p.hero?.title || !p.seo?.title) throw new Error("Missing title fields");
  if (!p.hero.image?.alt || !p.quickbooks.badgeAsset?.alt) throw new Error("Media alt text required");
  [p.hero.primaryCta, p.hero.secondaryCta, p.quickbooks.cta, p.process.cta, p.finalCta.primaryCta, p.finalCta.secondaryCta].forEach((c, i) => assertCta(c, `cta[${i}]`));
  [...p.services.cards, ...p.whyFinma.items].forEach((c) => {
    if (!ICONS.has(c.iconKey)) throw new Error(`Unknown iconKey ${c.iconKey}`);
  });
  p.relatedServices.items.forEach((r) => {
    if (!ROUTE_KEYS.has(r.routeKey)) throw new Error(`Unknown routeKey ${r.routeKey}`);
  });
  return p;
}

function loadRecord(locale: Locale): unknown {
  return locale === "fr-CA" ? fr : en;
}

/** Returns the page content with internal editorial notes stripped. */
export function getServicePage(locale: Locale): Omit<ServicePage, "editorial"> {
  const { editorial: _editorial, ...pub } = validateServicePage(loadRecord(locale));
  return pub;
}

export const UI: Record<Locale, UiStrings> = {
  "en-CA": {
    skipToContent: "Skip to main content",
    languageSwitchLabel: "FR",
    languageSwitchTarget: "Voir cette page en français",
    primaryNavLabel: "Main navigation",
    financialAdvisory: "Financial Advisory",
    stepLabel: "Step",
    menu: "Open menu",
    close: "Close menu",
  },
  "fr-CA": {
    skipToContent: "Passer au contenu principal",
    languageSwitchLabel: "EN",
    languageSwitchTarget: "View this page in English",
    primaryNavLabel: "Navigation principale",
    financialAdvisory: "Conseil financier",
    stepLabel: "Étape",
    menu: "Ouvrir le menu",
    close: "Fermer le menu",
  },
};
