## Goal
Mirror all content from finma.ca (your site) into this Lovable project in both English and French, restructuring routes and components to match the source site's information architecture.

## Source pages discovered (sitemap)
EN + FR each:
1. Home
2. About Us
3. Who We Are
4. Financial Advisory (hub)
5. Financial Advisory → Corporate Finance
6. Financial Advisory → Mergers & Acquisitions
7. Financial Advisory → Our Approach (the FINMA Advantage)
8. Financial Advisory → TEKIS (FINMA's Operating System)
9. Property Management (hub)
10. Property Management → Syndicate Management
11. Client Testimonials
12. Contact Us

## Route restructure

| Current route | Action | New content source |
|---|---|---|
| `/` | Keep, rewrite | finma.ca home |
| `/about` | Keep, rewrite | finma.ca/about-us |
| (new) `/who-we-are` | **Add** | finma.ca/who-we-are |
| `/financial-advisory` | Keep, rewrite | finma.ca/financial-advisory |
| `/services/corporate-finance` | Keep, rewrite | source |
| `/services/ma-advisory` | Keep, rewrite | source |
| (new) `/services/our-approach` | **Add** | source |
| (new) `/services/tekis` | **Add** | source |
| `/services/strategic-advisory` | **Remove** | not on source |
| `/services/valuations` | **Remove** | not on source (covered inside Corporate Finance) |
| `/services/transaction-services` | **Remove** | not on source |
| `/services/restructuring` | **Remove** | not on source |
| `/property-management` | Keep, rewrite | source |
| `/services/syndicate-management` | Keep, rewrite | source |
| `/services/residential-commercial` | **Remove** | not on source (covered inside Property Management hub) |
| `/services/capital-planning` | **Remove** | not on source |
| (new) `/testimonials` | **Add** | finma.ca/client-testimonials |
| `/contact` | Keep, rewrite | source |

## Implementation steps
1. Rewrite `src/i18n/en.ts` and `src/i18n/fr.ts` with the full source copy (home, about, who-we-are, financial-advisory hub + 4 sub-pages, property-management hub + syndicate, testimonials, contact, nav, footer).
2. Update `src/components/Header.tsx` nav menu — Financial Advisory dropdown becomes: Corporate Finance, M&A, Our Approach, TEKIS. Property Management dropdown becomes: Syndicate Management. Add About → submenu (About Us, Who We Are). Add Testimonials top-level item.
3. Update `src/components/Footer.tsx` link list to match new routes.
4. Create new page files: `WhoWeAre.tsx`, `OurApproach.tsx`, `Tekis.tsx`, `Testimonials.tsx`. Delete the four removed advisory sub-pages and two removed property sub-pages.
5. Update `src/App.tsx` routes — add new routes (EN + `/fr/` mirrors), remove deleted ones.
6. Rewrite existing pages (`Index`, `About`, `FinancialAdvisory`, `CorporateFinance`, `MAAdvisory`, `PropertyManagement`, `SyndicateManagement`, `Contact`) to consume the new i18n keys and section structure (extra sections like "Our Clients", "Diversified Experience", "How We Work", "Credentials", "Stats counters" on home; "Our Identity", "What Sets Us Apart", "Property Management & Asset Oversight", "Why Clients Choose FINMA" on About; etc.).
7. Keep the existing visual design language (textures, typography, hero/CTA components, layouts) — only content and section composition change.
8. CTA buttons across the site continue to point to your booking link (Cal.com URL from source). Add it as a constant.
9. Preserve SEO heads with updated titles/descriptions per page; update hreflang via existing `SEOHead`.

## What stays the same
- Visual design system (colors, fonts, textures, components).
- i18n framework, language toggle, `/fr/` route prefix.
- Hero, CTA block, and service card components (content swapped, not styles).

## What I will not touch unless you ask
- Booking integration (continues to deep-link to the same Cal.com URL).
- Newsletter / contact form backend (still client-only, no backend wired).
- Cookie consent banner (not present here; can be added later if desired).
- Stats counters animation — will display the same labels (Years of Experience: M&A / Entrepreneurship / Property Mgmt / Corporate Strategy) with placeholder numbers you can edit later.

## Confirm or adjust
- OK to **remove** Strategic Advisory, Valuations, Transaction Services, Restructuring, Residential/Commercial, and Capital Planning sub-pages (they don't exist on finma.ca)?
- OK to **add** Who We Are, Our Approach, TEKIS, and Testimonials pages?
- Use the same Cal.com booking link from finma.ca for all CTAs?

Approve and I'll execute end-to-end.