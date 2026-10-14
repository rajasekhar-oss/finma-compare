import { motion } from "framer-motion";
import { Target, Handshake, Landmark, Scale, Search, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import ServiceCard from "@/components/ServiceCard";
import CTABlock from "@/components/CTABlock";
import SEOHead from "@/components/SEOHead";
import { useI18n } from "@/i18n";
import useScrollToHash from "@/hooks/useScrollToHash";
import financialHero from "@/assets/financial-hero.jpg";
import maHero from "@/assets/ma-advisory-hero.jpg";
import corporateHero from "@/assets/corporate-finance-hero.jpg";

const ICONS = [Target, Handshake, Landmark, Scale, Search, AlertTriangle];

const FinancialAdvisory = () => {
  const { t, localePath } = useI18n();
  useScrollToHash();

  const services = t.financial.services.map((s, i) => {
    const Icon = ICONS[i] ?? Target;
    return { id: s.id, icon: <Icon className="h-8 w-8" />, title: s.title, description: s.description };
  });

  return (
    <Layout>
      <SEOHead
        title={t.seoPages.financialAdvisory.title}
        description={t.seoPages.financialAdvisory.description}
        path="/financial-advisory"
      />
      <HeroBanner
        backgroundImages={[financialHero, corporateHero, maHero]}
        title={t.financial.heroTitle}
        subtitle={t.financial.heroSubtitle}
        primaryCta={{ label: t.financial.ctaPrimary, href: localePath("/contact") }}
        secondaryCta={{ label: t.financial.servicesLabel, href: "#services" }}
      />

      {/* Intro */}
      <section className="bg-background bg-texture-pinstripe tx--bold tx-pos--top py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{t.financial.introTitle}</h2>
            <div className="section-divider mt-4" />
            <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground">{t.financial.introDesc}</p>
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-background bg-texture-pinstripe tx--soft py-24 scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-ink">{t.financial.servicesLabel}</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">{t.financial.servicesTitle}</h2>
            <div className="section-divider mt-4" />
          </motion.div>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FINMA */}
      <section className="bg-muted bg-texture-dots py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{t.financial.whyTitle}</h2>
            <div className="section-divider mt-4" />
            <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground">{t.financial.whyDesc}</p>
          </motion.div>
        </div>
      </section>

      <CTABlock title={t.financial.ctaTitle} buttonLabel={t.financial.ctaButton} buttonHref={localePath("/contact")} />
    </Layout>
  );
};

export default FinancialAdvisory;
