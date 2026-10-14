import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import CTABlock from "@/components/CTABlock";
import SEOHead from "@/components/SEOHead";
import { useI18n } from "@/i18n";
import heroImage from "@/assets/ma-advisory-hero.jpg";
import transactionHero from "@/assets/transaction-services-hero.jpg";
import valuationsHero from "@/assets/valuations-hero.jpg";

const RELATED_SERVICES = [
  { path: "/services/corporate-finance", labelKey: "corporateFinance" },
  { path: "/services/our-approach", labelKey: "ourApproach" },
  { path: "/services/tekis", labelKey: "tekis" },
] as const;

const MAAdvisory = () => {
  const { t, localePath } = useI18n();
  const p = t.maPage;

  const renderItems = (items: { title: string; desc: string }[]) =>
    items.map((item, i) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="rounded-sm card-finma p-8 shadow-sm transition-shadow hover:shadow-md"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10">
          <CheckCircle className="h-5 w-5 text-secondary" />
        </div>
        <h3 className="font-serif text-lg font-semibold text-foreground">{item.title}</h3>
        <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
      </motion.div>
    ));

  return (
    <Layout>
      <SEOHead
        title={t.seoPages.maAdvisory.title}
        description={t.seoPages.maAdvisory.description}
        path="/services/ma-advisory"
        ogTitle={t.seoPages.maAdvisory.title}
        ogDescription={t.seoPages.maAdvisory.description}
      />
      <HeroBanner
        backgroundImages={[heroImage, transactionHero, valuationsHero]}
        title={p.heroTitle}
        subtitle={p.heroSubtitle}
        primaryCta={{ label: p.ctaPrimary, href: localePath("/contact") }}
        secondaryCta={{ label: p.overviewLabel, href: "#overview" }}
      />

      {/* Overview */}
      <section id="overview" className="relative bg-background bg-texture-pinstripe bg-texture-corner tx--bold tx-pos--top py-24 scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-ink">{p.overviewLabel}</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">{p.overviewTitle}</h2>
            <div className="section-divider mt-4" />
            <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground">{p.overviewDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Sell-Side */}
      <section className="bg-muted bg-texture-dots py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{p.sellSideTitle}</h2>
            <div className="section-divider mt-4" />
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">{renderItems(p.sellSideItems)}</div>
        </div>
      </section>

      {/* Buy-Side */}
      <section className="bg-background bg-texture-grid py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{p.buySideTitle}</h2>
            <div className="section-divider mt-4" />
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">{renderItems(p.buySideItems)}</div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-muted bg-texture-dots tx--soft py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-ink">{t.nav.financialAdvisory}</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">{t.nav.relatedServices}</h2>
            <div className="section-divider mt-4" />
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RELATED_SERVICES.map((service, i) => (
              <motion.div key={service.path} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <Link to={localePath(service.path)} className="group flex items-center justify-between rounded-sm card-finma p-6 shadow-sm transition-all hover:shadow-md">
                  <span className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{t.nav[service.labelKey]}</span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title={p.ctaTitle} buttonLabel={p.ctaButton} buttonHref={localePath("/contact")} />
    </Layout>
  );
};

export default MAAdvisory;
