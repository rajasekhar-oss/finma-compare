import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/service-page/ContactForm";
import { PreviewChrome } from "@/components/service-page/PreviewChrome";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    service: typeof search["service"] === "string" ? (search["service"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact FINMA | Preview" },
      { name: "description", content: "Contact FINMA about corporate accounting, tax returns, and advisory services." },
      { property: "og:title", content: "Contact FINMA | Preview" },
      { property: "og:description", content: "Contact FINMA about corporate accounting, tax returns, and advisory services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PreviewChrome locale="en-CA">
      <ContactForm locale="en-CA" />
    </PreviewChrome>
  );
}
