import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import CTABlock from "@/components/CTABlock";
import SEOHead from "@/components/SEOHead";
import { useI18n } from "@/i18n";

const ALL_PROPERTY_SERVICES = [
  { path: "/services/syndicate-management", labelKey: "syndicateManagement" },
] as const;

interface Capability {
  title: string;
  desc: string;
}

interface WhyItem {
  title: string;
  desc: string;
}

interface PropertyDetailLayoutProps {
  seoTitle: string;
  seoDescription: string;
  seoPath: string;
  heroImage: string;
  heroImages?: string[];
  heroTitle: string;
  heroSubtitle: string;
  ctaPrimaryLabel: string;
  overviewLabel: string;
  overviewTitle: string;
  overviewDesc: string;
  capabilities: Capability[];
  whyTitle: string;
  whyItems: WhyItem[];
  ctaTitle: string;
  ctaButton: string;
}

const PropertyDetailLayout = ({
  seoTitle,
  seoDescription,
  seoPath,
  heroImage,
  heroImages,
  heroTitle,
  heroSubtitle,
  ctaPrimaryLabel,
  overviewLabel,
  overviewTitle,
  overviewDesc,
  capabilities,
  whyTitle,
  whyItems,
  ctaTitle,
  ctaButton,
}: PropertyDetailLayoutProps) => {
  const { t, localePath } = useI18n();

  return (
    <Layout>
      <SEOHead title={seoTitle} description={seoDescription} path={seoPath} />
      <HeroBanner
        backgroundImage={heroImage}
        backgroundImages={heroImages}
        title={heroTitle}
        subtitle={heroSubtitle}
        primaryCta={{ label: ctaPrimaryLabel, href: localePath("/contact") }}
        secondaryCta={{ label: overviewLabel, href: "#overview" }}
      />

      {/* Overview */}
      <section id="overview" className="relative bg-background bg-texture-pinstripe bg-texture-corner tx--bold tx-pos--top py-24 scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-ink">
              {overviewLabel}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              {overviewTitle}
            </h2>
            <div className="section-divider mt-4" />
            <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground">
              {overviewDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-muted bg-texture-dots py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-sm card-finma p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {cap.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FINMA */}
      <section className="bg-background bg-texture-vignette tx--quiet py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              {whyTitle}
            </h2>
            <div className="section-divider mt-4" />
          </motion.div>
          <div className="grid gap-12 md:grid-cols-3">
            {whyItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="mb-3 h-1 w-8 rounded-full bg-accent" />
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Property Services */}
      <section className="bg-muted bg-texture-grid py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-ink">
              {t.nav.propertyManagement}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              {t.nav.relatedServices}
            </h2>
            <div className="section-divider mt-4" />
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_PROPERTY_SERVICES.filter((s) => s.path !== seoPath).map((service, i) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  to={localePath(service.path)}
                  className="group flex items-center justify-between rounded-sm card-finma p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <span className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {t.nav[service.labelKey]}
                  </span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title={ctaTitle} buttonLabel={ctaButton} buttonHref={localePath("/contact")} />
    </Layout>
  );
};

export default PropertyDetailLayout;
