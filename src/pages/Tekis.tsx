import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import CTABlock from "@/components/CTABlock";
import SEOHead from "@/components/SEOHead";
import { useI18n } from "@/i18n";
import heroImage from "@/assets/corporate-finance-hero.jpg";
import financialHero from "@/assets/financial-hero.jpg";
import ourApproachHero from "@/assets/our-approach-hero.jpg";

const Tekis = () => {
  const { t, localePath } = useI18n();
  const p = t.tekisPage;

  return (
    <Layout>
      <SEOHead title={t.seoPages.tekis.title} description={t.seoPages.tekis.description} path="/services/tekis" />
      <HeroBanner
        backgroundImages={[heroImage, financialHero, ourApproachHero]}
        title={p.heroTitle}
        subtitle={p.heroSubtitle}
        primaryCta={{ label: p.ctaPrimary, href: localePath("/contact") }}
        secondaryCta={{ label: p.pillarsTitle, href: "#pillars" }}
      />

      <section className="bg-background bg-texture-pinstripe tx--bold py-24">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{p.introTitle}</h2>
          <div className="section-divider mt-4" />
          <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground">{p.introDesc}</p>
        </div>
      </section>

      <section id="pillars" className="bg-muted bg-texture-dots tx--soft py-24 scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{p.pillarsTitle}</h2>
          <div className="section-divider mt-4 mb-12" />
          <div className="space-y-8">
            {p.pillars.map((pillar, i) => (
              <motion.div key={pillar.letter} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="flex gap-6 rounded-sm card-finma p-8 shadow-sm">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-sm bg-primary font-serif text-3xl font-bold text-primary-foreground">{pillar.letter}</div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
                  <ul className="mt-4 space-y-1">
                    {pillar.practice.map((pr) => (
                      <li key={pr} className="font-sans text-sm text-muted-foreground"><span className="text-accent-ink mr-2" aria-hidden="true">•</span>{pr}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background bg-texture-vignette tx--quiet py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{p.actionTitle}</h2>
          <div className="section-divider mt-4 mb-12" />
          <div className="grid gap-8 md:grid-cols-3">
            {p.actionItems.map((item) => (
              <div key={item.title} className="border-t border-border pt-6">
                <h3 className="font-serif text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title={p.ctaTitle} buttonLabel={p.ctaButton} buttonHref={localePath("/contact")} />
    </Layout>
  );
};

export default Tekis;
