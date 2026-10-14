import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import CTABlock from "@/components/CTABlock";
import SEOHead from "@/components/SEOHead";
import { useI18n } from "@/i18n";
import heroImage from "@/assets/our-approach-hero.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import financialHero from "@/assets/financial-hero.jpg";

const OurApproach = () => {
  const { t, localePath } = useI18n();
  const p = t.ourApproachPage;

  return (
    <Layout>
      <SEOHead title={t.seoPages.ourApproach.title} description={t.seoPages.ourApproach.description} path="/services/our-approach" />
      <HeroBanner
        backgroundImages={[heroImage, aboutHero, financialHero]}
        title={p.heroTitle}
        subtitle={p.heroSubtitle}
        primaryCta={{ label: p.ctaPrimary, href: localePath("/contact") }}
        secondaryCta={{ label: p.howWeWorkTitle, href: "#how-we-work" }}
      />

      <section className="bg-background bg-texture-pinstripe tx--bold py-24">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{p.introTitle}</h2>
            <div className="section-divider mt-4" />
            <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground">{p.introDesc}</p>

            <h3 className="mt-10 font-serif text-2xl font-semibold text-foreground">{p.globalTitle}</h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-muted-foreground">{p.globalDesc}</p>

            <h3 className="mt-10 font-serif text-2xl font-semibold text-foreground">{p.focusedTitle}</h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-muted-foreground">{p.focusedDesc}</p>
          </motion.div>
        </div>
      </section>

      <section id="how-we-work" className="bg-muted bg-texture-dots tx--soft py-24 scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{p.howWeWorkTitle}</h2>
          <div className="section-divider mt-4 mb-12" />
          <div className="grid gap-8 md:grid-cols-2">
            {p.phases.map((phase, i) => (
              <motion.div key={phase.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-sm card-finma p-8 shadow-sm">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-ink">Phase {i + 1}</span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">{phase.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background bg-texture-vignette tx--quiet py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{p.integratedTitle}</h2>
          <div className="section-divider mt-4 mb-12" />
          <div className="grid gap-8 md:grid-cols-3">
            {p.integrated.map((item) => (
              <div key={item.title} className="border-t border-border pt-6">
                <h3 className="font-serif text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-16 font-serif text-2xl font-semibold text-foreground">{p.whyTitle}</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {p.whyItems.map((item) => (
              <div key={item.title}>
                <h4 className="font-serif text-lg font-semibold text-foreground">{item.title}</h4>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title={p.ctaTitle} buttonLabel={p.ctaButton} buttonHref={localePath("/contact")} />
    </Layout>
  );
};

export default OurApproach;
