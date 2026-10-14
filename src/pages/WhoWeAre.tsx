import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import CTABlock from "@/components/CTABlock";
import SEOHead from "@/components/SEOHead";
import { useI18n } from "@/i18n";
import heroImage from "@/assets/about-hero.jpg";
import ourApproachHero from "@/assets/our-approach-hero.jpg";
import financialHero from "@/assets/financial-hero.jpg";

const WhoWeAre = () => {
  const { t, localePath } = useI18n();
  const p = t.whoWeArePage;

  return (
    <Layout>
      <SEOHead title={t.seoPages.whoWeAre.title} description={t.seoPages.whoWeAre.description} path="/who-we-are" />
      <HeroBanner
        backgroundImages={[heroImage, ourApproachHero, financialHero]}
        title={p.heroTitle}
        subtitle={p.heroSubtitle}
        primaryCta={{ label: p.ctaPrimary, href: localePath("/contact") }}
        secondaryCta={{ label: p.introTitle, href: "#intro" }}
      />

      <section id="intro" className="bg-background bg-texture-pinstripe tx--bold tx-pos--top py-24 scroll-mt-24">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{p.introTitle}</h2>
            <div className="section-divider mt-4" />
            <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground">{p.introDesc}</p>

            <h3 className="mt-12 font-serif text-2xl font-semibold text-foreground">{p.missionTitle}</h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-muted-foreground">{p.missionDesc}</p>

            <h3 className="mt-10 font-serif text-2xl font-semibold text-foreground">{p.insightTitle}</h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-muted-foreground">{p.insightDesc}</p>

            <h3 className="mt-10 font-serif text-2xl font-semibold text-foreground">{p.visionTitle}</h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-muted-foreground">{p.visionDesc}</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted bg-texture-dots tx--soft py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{p.sopTitle}</h2>
          <div className="section-divider mt-4 mb-12" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {p.sopItems.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="rounded-sm card-finma p-8 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background bg-texture-vignette tx--quiet py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.32em] text-accent-ink">{p.distinctionLabel}</p>
              <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">{p.setsApartTitle}</h2>
              <motion.div initial={{ scaleX: 0, originX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="mt-5 h-px w-24 bg-accent" />
            </div>
            <p className="max-w-sm font-serif text-base italic leading-relaxed text-muted-foreground">
              {p.distinctionIntro}
            </p>
          </motion.div>

          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {p.setsApartItems.map((item, i) => {
              const [head, ...rest] = item.split(":");
              const desc = rest.join(":").trim();
              return (
                <motion.article
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.06 }}
                  whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
                  className="group relative flex flex-col gap-4 card-finma p-8 transition-colors duration-300 hover:brightness-110 md:p-10"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="inline-block font-serif text-2xl italic text-accent-ink transition-transform duration-300 group-hover:scale-110">{String(i + 1).padStart(2, "0")}</span>
                    <span className="h-px flex-1 bg-border transition-colors duration-300 group-hover:bg-accent/60" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground md:text-2xl">{head}</h3>
                  {desc && (
                    <p className="font-sans text-sm leading-relaxed text-muted-foreground md:text-base">{desc}</p>
                  )}
                </motion.article>
              );
            })}
            {p.setsApartItems.length % 2 === 1 && (
              <div className="hidden card-finma md:block" />
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-24 overflow-hidden rounded-sm border border-accent/20 bg-primary text-primary-foreground shadow-2xl"
            style={{ background: "linear-gradient(135deg, hsl(216 62% 15%) 0%, hsl(212 55% 22%) 60%, hsl(216 62% 15%) 100%)" }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 14px)" }} />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative grid gap-12 p-10 md:grid-cols-[1fr_1.4fr] md:p-16">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.32em] text-accent-ink">{p.pledgeLabel}</p>
                <h3 className="mt-4 font-serif text-3xl font-bold leading-tight md:text-4xl">{p.commitmentTitle}</h3>
                <div className="mt-5 h-px w-16 bg-accent" />
                <p className="mt-6 font-serif text-lg italic leading-relaxed text-primary-foreground/90">
                  {p.commitmentSubtitle}
                </p>
              </div>
              <ul className="space-y-5 md:border-l md:border-accent/25 md:pl-12">
                {p.commitmentItems.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    whileHover={{ x: 6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                    className="group flex items-start gap-4 font-sans text-base leading-relaxed text-primary-foreground/85"
                  >
                    <span className="mt-2 inline-block h-px w-6 flex-none bg-accent transition-all duration-300 group-hover:w-10" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABlock title={p.ctaTitle} buttonLabel={p.ctaButton} buttonHref={localePath("/contact")} />
    </Layout>
  );
};

export default WhoWeAre;
