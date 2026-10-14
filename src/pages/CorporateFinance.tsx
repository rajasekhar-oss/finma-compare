import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { useI18n } from "@/i18n";
import heroImage from "@/assets/corporate-finance-hero.jpg";
import valuationsHero from "@/assets/valuations-hero.jpg";
import restructuringHero from "@/assets/restructuring-hero.jpg";

const CorporateFinance = () => {
  const { t } = useI18n();
  const p = t.corporateFinancePage;

  return (
    <ServiceDetailLayout
      seoTitle="Corporate Finance & Capital Raising | FINMA"
      seoDescription="Secure the right capital structure for your business with FINMA's corporate finance advisory practice."
      seoPath="/services/corporate-finance"
      seoOgTitle="Corporate Finance Advisory — FINMA"
      seoOgDescription="Capital raising, structuring, and strategic financing for Canadian mid-market companies — senior-led by FINMA."
      heroImage={heroImage}
      heroImages={[heroImage, valuationsHero, restructuringHero]}
      heroTitle={p.heroTitle}
      heroSubtitle={p.heroSubtitle}
      ctaPrimaryLabel={p.ctaPrimary}
      overviewLabel={p.overviewLabel}
      overviewTitle={p.overviewTitle}
      overviewDesc={p.overviewDesc}
      capabilities={p.capabilities}
      whyTitle={p.whyTitle}
      whyItems={p.whyItems}
      ctaTitle={p.ctaTitle}
      ctaButton={p.ctaButton}
    />
  );
};

export default CorporateFinance;
