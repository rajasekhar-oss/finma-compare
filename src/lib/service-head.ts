import { getServicePage, PAGE_PATHS } from "@/content/corporate-accounting/adapter";
import type { Locale } from "@/content/corporate-accounting/types";

const PROD = "https://finma.ca";

/** Head metadata for the service page: SEO, hreflang, Service + FAQ JSON-LD. */
export function serviceHead(locale: Locale) {
  const c = getServicePage(locale);
  const lang = locale === "fr-CA" ? "fr_CA" : "en_CA";
  return {
    meta: [
      { title: c.seo.title },
      { name: "description", content: c.seo.description },
      { property: "og:title", content: c.seo.title },
      { property: "og:description", content: c.seo.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: lang },
      { property: "og:url", content: `${PROD}${c.seo.canonicalPath}` },
      ...(c.seo.ogImage
        ? [{ property: "og:image", content: c.seo.ogImage }, { name: "twitter:image", content: c.seo.ogImage }]
        : []),
      { name: "twitter:card", content: "summary_large_image" },
      // Preview stays unindexed until release.
      ...(c.seo.noIndex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
    ],
    links: [
      { rel: "canonical", href: `${PROD}${c.seo.canonicalPath}` },
      { rel: "alternate", hrefLang: "en-CA", href: `${PROD}${PAGE_PATHS["en-CA"]}` },
      { rel: "alternate", hrefLang: "fr-CA", href: `${PROD}${PAGE_PATHS["fr-CA"]}` },
      { rel: "alternate", hrefLang: "x-default", href: `${PROD}${PAGE_PATHS["en-CA"]}` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: c.hero.title,
          description: c.seo.description,
          inLanguage: locale,
          url: `${PROD}${c.seo.canonicalPath}`,
          areaServed: { "@type": "Country", name: "Canada" },
          provider: {
            "@type": "Organization",
            name: "Finma Canada Inc.",
            url: PROD,
            email: "info@finma.ca",
            telephone: "+1-877-346-6222",
            address: { "@type": "PostalAddress", streetAddress: "3030 Curé-Labelle, suite 300", addressLocality: "Laval", addressRegion: "QC", postalCode: "H7P 0H9", addressCountry: "CA" },
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: c.services.heading,
            itemListElement: c.services.cards.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: c.faq.items.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
        }),
      },
    ],
  };
}
