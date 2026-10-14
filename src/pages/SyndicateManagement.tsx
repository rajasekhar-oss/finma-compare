import PropertyDetailLayout from "@/components/PropertyDetailLayout";
import { useI18n } from "@/i18n";
import heroImage from "@/assets/syndicate-hero.jpg";
import propertyHero from "@/assets/property-hero.jpg";
import capitalPlanningHero from "@/assets/capital-planning-hero.jpg";

const SyndicateManagement = () => {
  const { t } = useI18n();
  const p = t.syndicatePage;

  return (
    <PropertyDetailLayout
      seoTitle="Syndicate & Condo Management Québec | FINMA"
      seoDescription="Professional condominium syndicate management with fiduciary-grade governance, financial reporting, and reserve fund planning across Québec."
      seoPath="/services/syndicate-management"
      heroImage={heroImage}
      heroImages={[heroImage, propertyHero, capitalPlanningHero]}
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

export default SyndicateManagement;
