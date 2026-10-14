# Corporate Accounting & Tax Returns — integration notes

Status: **preview / draft only**. Not published. Pages carry `noindex`.

## Preview
- English: `/services/corporate-accounting-tax-returns` (also `/` redirects here)
- French: `/fr/services/corporate-accounting-tax-returns`
- The header language switch opens the equivalent page.

## Files
| File | Purpose |
| --- | --- |
| `src/components/service-page/CorporateAccountingPage.tsx` | Page body (sections A–J). No global chrome. **Port this.** |
| `src/components/service-page/PreviewChrome.tsx` | Preview-only header/footer. **Do not port** — use FINMA's shared layout. |
| `src/content/corporate-accounting/types.ts` | TypeScript content interface (`ServicePage`). |
| `src/content/corporate-accounting/en.json`, `fr.json` | Versioned content records (schemaVersion 1). |
| `src/content/corporate-accounting/adapter.ts` | Validation, allow-listed route keys/anchors/icons, media map, UI strings. CMS boundary. |
| `src/lib/service-head.ts` | Title/description, canonical, en-CA/fr-CA/x-default hreflang, Service + FAQPage JSON-LD. |
| `src/styles.css` | FINMA tokens (exact HSL), `.card-finma`, gold buttons, hero overlay, textures. |
| `src/assets/finma/*.asset.json` | Original FINMA logo, Gold badge, valuations hero, architecture/library textures (copied from finma.ca). |

## CMS adapter boundary
`getServicePage(locale)` → `loadRecord(locale)` → `validateServicePage()`.
Replace `loadRecord` with a fetch of the CMS record. Validation rejects unknown
icon keys, non-allow-listed CTA destinations and missing alt text. `editorial`
is stripped before render. **No CMS is connected yet.** Use the existing CMS
auth/draft workflow; do not add an unauthenticated admin endpoint.

Field mapping follows `types.ts` 1:1 (servicePage → hero, overview, services,
filing, quickbooks, process, whyFinma, faq, relatedServices, finalCta, editorial).

## Links and enquiry routing
- Pages not in this preview (booking, contact, other services) point to
  `https://finma.ca` via `SITE_ORIGIN` in `adapter.ts`. Set it to `""` on integration.
- French booking uses `/booking` (as the live French header does).
- QuickBooks CTA links to `/contact?service=accounting` (`/fr/contact?...`).
  **Outstanding:** the existing contact form must read `service` and preselect
  its accounting category; this preview cannot add that receiver.
- No form, upload or submission endpoint is included on this page.

## finma.ca link audit (Oct 2026)
All page destinations exist on the live site: `/booking` (EN + FR), `/contact`,
`/fr/contact` (form anchor `#contact-form`), `/services/corporate-finance`,
`/services/ma-advisory`, `/services/our-approach` and their `/fr/` versions.
Preview header/footer now mirror the live menus, footer columns, legal paths
(`/privacy-policy`, `/terms-of-service`) and disclaimer text.

## Navigation changes still to apply in the FINMA repo
- Footer "Corporate Accounting/Tax returns" currently points to `/financial-advisory`
  (EN) and `/fr` (FR) → change to the new EN/FR routes.
- Optionally add a card linking to this page in the `/financial-advisory#services` grid.
- Header has no dropdown on finma.ca; the page sits under "Financial Advisory".
- Add both routes to the sitemap only at release; set `seo.noIndex` to `false` then.
- Register `/services/corporate-accounting-tax-returns` and the `/fr/` route in the
  site's language switcher map so EN↔FR opens the matching page.

## Review items
- Related-service card descriptions (one line each) are proposed copy — please confirm.
- Confirm the Gold ProAdvisor credential is current before publishing.
- FAQPage JSON-LD is included; remove it if it conflicts with FINMA's SEO approach.
- Non-React CMS: an HTML export / scoped CSS bundle is not included yet — request it if needed.
