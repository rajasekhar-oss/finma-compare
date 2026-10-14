import { motion } from "framer-motion";
import { Building, Home, Wrench } from "lucide-react";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import ServiceCard from "@/components/ServiceCard";
import CTABlock from "@/components/CTABlock";
import SEOHead from "@/components/SEOHead";
import { useI18n } from "@/i18n";
import useScrollToHash from "@/hooks/useScrollToHash";
import propertyHero from "@/assets/property-hero.jpg";
import syndicateHero from "@/assets/syndicate-hero.jpg";
import residentialHero from "@/assets/residential-hero.jpg";

const PropertyManagement = () => {
  const { t, localePath } = useI18n();
  useScrollToHash();

  const services = [
    { id: "syndicate", icon: <Building className="h-8 w-8" />, title: t.property.syndicateTitle, description: t.property.syndicateDesc },
    { id: "residential", icon: <Home className="h-8 w-8" />, title: t.property.residentialTitle, description: t.property.residentialDesc },
    { id: "capital", icon: <Wrench className="h-8 w-8" />, title: t.property.capitalTitle, description: t.property.capitalDesc },
  ];

  return (
    <Layout>
      <SEOHead
        title={t.seoPages.propertyManagement.title}
        description={t.seoPages.propertyManagement.description}
        path="/property-management"
      />
      <HeroBanner
        backgroundImages={[propertyHero, syndicateHero, residentialHero]}
        title={t.property.heroTitle}
        subtitle={t.property.heroSubtitle}
        primaryCta={{ label: t.property.ctaPrimary, href: localePath("/contact") }}
        secondaryCta={{ label: t.property.introTitle, href: "#services" }}
      />

      <section id="services" className="bg-background bg-texture-pinstripe tx--bold tx-pos--top py-24 scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">{t.nav.propertyManagement}</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">{t.property.introTitle}</h2>
            <div className="section-divider mt-4" />
            <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-muted-foreground">{t.property.introDesc}</p>
          </motion.div>
          <div className="grid gap-12 md:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABlock title={t.property.ctaTitle} buttonLabel={t.property.ctaButton} buttonHref={localePath("/contact")} />
    </Layout>
  );
};

export default PropertyManagement;
