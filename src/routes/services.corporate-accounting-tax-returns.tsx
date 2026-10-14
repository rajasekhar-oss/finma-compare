import { createFileRoute } from "@tanstack/react-router";
import { getServicePage } from "@/content/corporate-accounting/adapter";
import { CorporateAccountingPage } from "@/components/service-page/CorporateAccountingPage";
import { PreviewChrome } from "@/components/service-page/PreviewChrome";
import { serviceHead } from "@/lib/service-head";

export const Route = createFileRoute("/services/corporate-accounting-tax-returns")({
  head: () => serviceHead("en-CA"),
  component: EnPage,
});

function EnPage() {
  return (
    <PreviewChrome locale="en-CA">
      <CorporateAccountingPage content={getServicePage("en-CA")} locale="en-CA" />
    </PreviewChrome>
  );
}
