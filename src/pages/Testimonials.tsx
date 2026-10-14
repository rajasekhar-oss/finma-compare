import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import CTABlock from "@/components/CTABlock";
import SEOHead from "@/components/SEOHead";
import { useI18n } from "@/i18n";
import heroImage from "@/assets/about-hero.jpg";
import ourApproachHero from "@/assets/our-approach-hero.jpg";
import financialHero from "@/assets/financial-hero.jpg";

const Testimonials = () => {
  const { t, localePath } = useI18n();
  const p = t.testimonialsPage;

  return (
    <Layout>
      <SEOHead title={t.seoPages.testimonials.title} description={t.seoPages.testimonials.description} path="/testimonials" />
      <HeroBanner
        backgroundImages={[heroImage, ourApproachHero, financialHero]}
        title={p.heroTitle}
        subtitle={p.heroSubtitle}
        primaryCta={{ label: p.ctaPrimary, href: localePath("/contact") }}
        secondaryCta={{ label: p.sectionTitle, href: "#testimonials" }}
      />

      <section className="bg-background bg-texture-pinstripe tx--bold py-24">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{p.introTitle}</h2>
          <div className="section-divider mt-4" />
          <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground">{p.introDesc}</p>
        </div>
      </section>

      <section id="testimonials" className="bg-muted bg-texture-dots py-24 scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{p.sectionTitle}</h2>
          <div className="section-divider mt-4 mb-12" />
          <div className="grid gap-8 md:grid-cols-3">
            {p.testimonials.map((tst, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-finma rounded-sm p-8"
              >
                <Quote className="h-7 w-7 text-accent" />
                <blockquote className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">{tst.quote}</blockquote>
                <figcaption className="mt-6 font-serif text-base font-semibold text-accent">— {tst.author}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background bg-texture-vignette tx--quiet py-24">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{p.whyTitle}</h2>
          <div className="section-divider mt-4 mb-8" />
          <ul className="space-y-3">
            {p.whyItems.map((item) => (
              <li key={item} className="font-sans text-base text-muted-foreground"><span className="text-accent-ink mr-2" aria-hidden="true">•</span>{item}</li>
            ))}
          </ul>

          <h3 className="mt-12 font-serif text-2xl font-semibold text-foreground">{p.relationshipsTitle}</h3>
          <p className="mt-3 font-sans text-base leading-relaxed text-muted-foreground">{p.relationshipsDesc}</p>
        </div>
      </section>

      <CTABlock title={p.ctaTitle} buttonLabel={p.ctaButton} buttonHref={localePath("/contact")} />
    </Layout>
  );
};

export default Testimonials;
