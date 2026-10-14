import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/service-page/ContactForm";
import { PreviewChrome } from "@/components/service-page/PreviewChrome";

export const Route = createFileRoute("/fr/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    service: typeof search["service"] === "string" ? (search["service"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contactez FINMA | Aperçu" },
      { name: "description", content: "Contactez FINMA au sujet de la comptabilité d'entreprise, des déclarations de revenus et des services-conseils." },
      { property: "og:title", content: "Contactez FINMA | Aperçu" },
      { property: "og:description", content: "Contactez FINMA au sujet de la comptabilité d'entreprise, des déclarations de revenus et des services-conseils." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: FrContactPage,
});

function FrContactPage() {
  return (
    <PreviewChrome locale="fr-CA">
      <ContactForm locale="fr-CA" />
    </PreviewChrome>
  );
}
