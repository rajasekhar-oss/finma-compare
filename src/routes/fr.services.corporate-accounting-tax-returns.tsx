import { createFileRoute } from "@tanstack/react-router";
import { getServicePage } from "@/content/corporate-accounting/adapter";
import { CorporateAccountingPage } from "@/components/service-page/CorporateAccountingPage";
import { PreviewChrome } from "@/components/service-page/PreviewChrome";
import { serviceHead } from "@/lib/service-head";

export const Route = createFileRoute("/fr/services/corporate-accounting-tax-returns")({
  head: () => serviceHead("fr-CA"),
  component: FrPage,
});

function FrPage() {
  return (
    <PreviewChrome locale="fr-CA">
      <CorporateAccountingPage content={getServicePage("fr-CA")} locale="fr-CA" />
    </PreviewChrome>
  );
}
