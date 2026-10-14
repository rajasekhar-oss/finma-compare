/**
 * Content model for the Corporate Accounting & Tax Returns service page.
 * CMS-ready: any CMS record must satisfy this interface and pass
 * `validateServicePage` (see adapter.ts) before it is rendered.
 */

export type Locale = "en-CA" | "fr-CA";

/** Allow-listed destinations. CMS records may only reference these keys. */
export type RouteKey =
  | "booking"
  | "contact"
  | "contactAccounting"
  | "corporateFinance"
  | "maAdvisory"
  | "ourApproach";

/** Allow-listed in-page anchors. */
export type AnchorKey = "accounting-services" | "overview" | "corporate-tax-filing" | "quickbooks" | "our-process" | "frequently-asked-questions";

export type Cta = { label: string } & ({ routeKey: RouteKey; anchor?: never } | { anchor: AnchorKey; routeKey?: never });

/** Limited icon mapping — CMS supplies a key, never code. */
export type IconKey = "bookOpen" | "calendarCheck" | "landmark" | "monitorCog" | "lineChart" | "eraser" | "briefcase" | "messageSquare" | "languages" | "link";

export interface MediaAsset {
  assetKey: "valuationsHero" | "quickbooksGoldBadge" | "finmaLogo" | "bgArchitecture" | "bgLibrary";
  alt: string;
  width: number;
  height: number;
}

export interface ServicePage {
  id: string;
  schemaVersion: 1;
  status: "draft" | "review" | "published";
  locale: Locale;
  slug: string;
  translationGroupId: string;
  navigationLabel: string;
  seo: { title: string; description: string; canonicalPath: string; ogImage: string | null; noIndex: boolean };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    body: string;
    image: MediaAsset;
    primaryCta: Cta;
    secondaryCta: Cta;
    credentialLine: string;
  };
  overview: { eyebrow: string; heading: string; paragraphs: string[] };
  services: { eyebrow: string; heading: string; cards: { id: string; iconKey: IconKey; title: string; body: string }[]; scopeNote: string };
  filing: { eyebrow: string; heading: string; intro: string; jurisdictions: { id: string; title: string; body: string }[]; closingNote: string };
  quickbooks: { eyebrow: string; heading: string; body: string; badgeAsset: MediaAsset; bullets: string[]; cta: Cta };
  process: { eyebrow: string; heading: string; steps: { id: string; title: string; body: string }[]; principlesText: string; cta: Cta };
  whyFinma: { eyebrow: string; heading: string; items: { id: string; iconKey: IconKey; title: string; body: string }[] };
  faq: { heading: string; items: { id: string; question: string; answer: string }[] };
  relatedServices: { eyebrow: string; heading: string; items: { label: string; body: string; routeKey: RouteKey }[] };
  finalCta: { eyebrow: string; heading: string; body: string; primaryCta: Cta; secondaryCta: Cta };
  /** Internal only — never rendered on the public page. */
  editorial: { reviewedAt: string; sourceReferences: string[]; credentialReviewNote: string };
}

/** Shared UI strings (preview chrome, labels) per locale. */
export interface UiStrings {
  skipToContent: string;
  languageSwitchLabel: string;
  languageSwitchTarget: string;
  primaryNavLabel: string;
  financialAdvisory: string;
  stepLabel: string;
  menu: string;
  close: string;
}
