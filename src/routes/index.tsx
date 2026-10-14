import { createFileRoute, redirect } from "@tanstack/react-router";

// Preview entry point: send visitors straight to the new service page.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/services/corporate-accounting-tax-returns" });
  },
  head: () => ({
    meta: [
      { title: "Corporate Accounting & Tax Returns preview | FINMA" },
      { name: "description", content: "Preview of FINMA's Corporate Accounting & Tax Returns service page." },
      { property: "og:title", content: "Corporate Accounting & Tax Returns preview | FINMA" },
      { property: "og:description", content: "Preview of FINMA's Corporate Accounting & Tax Returns service page." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});
