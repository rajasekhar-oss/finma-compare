import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import CTABlock from "@/components/CTABlock";
import SEOHead from "@/components/SEOHead";
import { BookingButton } from "@/components/BookingModal";
import { useI18n } from "@/i18n";
import aboutHero from "@/assets/about-hero.jpg";
import financialHero from "@/assets/financial-hero.jpg";
import propertyHero from "@/assets/property-hero.jpg";
import corporateHero from "@/assets/corporate-finance-hero.jpg";

const About = () => {
  const { t, localePath } = useI18n();
  const p = t.about;
  const heroSlides = [aboutHero, financialHero, propertyHero];
  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setHeroIdx((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearInterval(id);
  }, [heroSlides.length]);

  return (
    <Layout>
      <SEOHead
        title={p.seo.title}
        description={p.seo.description}
        path="/about"
        ogTitle={p.seo.ogTitle}
        ogDescription={p.seo.ogDescription}
        twitterTitle={p.seo.ogTitle}
        twitterDescription={p.seo.ogDescription}
      />

      {/* HERO — split editorial */}
      <section className="relative overflow-hidden bg-primary">
        <div className="grid min-h-[78vh] grid-cols-1 lg:grid-cols-12">
          {/* Copy panel */}
          <div className="relative z-10 col-span-1 flex items-center bg-primary px-6 py-24 lg:col-span-7 lg:px-16 xl:px-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
                {p.introLabel}
              </p>
              <div className="mt-6 h-px w-16 bg-accent" />
              <h1 className="mt-8 font-serif text-4xl font-semibold leading-[1.05] text-primary-foreground md:text-5xl lg:text-6xl">
                {p.heroTitle}
              </h1>
              <p className="mt-8 max-w-xl font-serif text-xl leading-relaxed text-primary-foreground/80 md:text-2xl">
                {p.heroSubtitle}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <BookingButton variant="gold" />
                <a
                  href="#identity"
                  className="group inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  {p.identityTitle}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Image panel — rotating */}
          <div className="relative col-span-1 min-h-[420px] overflow-hidden lg:col-span-5">
            {heroSlides.map((src, i) => (
              <div
                key={src}
                aria-hidden={i !== heroIdx}
                className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${i === heroIdx ? "opacity-100" : "opacity-0"}`}
              >
                <img src={src} alt={i === 0 ? t.ui.partnersAlt : ""} className="h-full w-full object-cover" />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/20 to-transparent lg:from-primary lg:via-primary/40 lg:to-transparent" />
            <div className="absolute bottom-8 right-8 hidden lg:block">
              <div className="border-l-2 border-accent pl-4">
                <p className="font-serif text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
                  {t.ui.locations}
                </p>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setHeroIdx(i)}
                  aria-label={`${t.ui.slideLabel} ${i + 1}`}
                  className="group flex items-center gap-2"
                >
                  <span
                    className={`block h-px transition-all duration-500 ${i === heroIdx ? "w-10 bg-accent" : "w-6 bg-primary-foreground/50 group-hover:bg-primary-foreground/80"}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IDENTITY — split image + long-form */}
      <section id="identity" className="relative bg-background bg-texture-pinstripe tx--bold tx-pos--top py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Left: sticky title + image stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="lg:sticky lg:top-32">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
                  {p.introLabel}
                </p>
                <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-[2.75rem]">
                  {p.introTitle}
                </h2>
                <div className="mt-6 h-px w-16 bg-accent" />
                <div className="relative mt-10 aspect-[4/5] overflow-hidden">
                  <img
                    src={financialHero}
                    alt={t.ui.advisoryAlt}
                    className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Right: prose */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-7"
            >
              <p className="font-sans text-lg leading-[1.8] text-foreground/85">
                {p.introDesc}
              </p>
              <div className="my-10 h-px w-full bg-border" />
              <h3 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
                {p.identityTitle}
              </h3>
              <p className="mt-6 font-sans text-base leading-[1.85] text-muted-foreground">
                {p.identityDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART — numbered editorial grid on navy */}
      <section className="relative overflow-hidden bg-primary py-24 md:py-32">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 25% 30%, hsl(var(--accent)) 0, transparent 50%)" }} />
        <div className="container relative mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20 max-w-2xl"
          >
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
              Differentiation
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-primary-foreground md:text-5xl">
              {p.setsApartTitle}
            </h2>
            <div className="mt-6 h-px w-16 bg-accent" />
          </motion.div>

          <div className="grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {p.setsApart.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-2xl font-light text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-primary-foreground/15 transition-colors group-hover:bg-accent/60" />
                </div>
                <h4 className="mt-6 font-serif text-xl font-semibold text-primary-foreground md:text-2xl">
                  {a.title}
                </h4>
                <p className="mt-4 font-sans text-sm leading-[1.85] text-primary-foreground/70">
                  {a.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PRACTICES — premium split cards */}
      <section className="bg-background py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 max-w-2xl"
          >
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
              Practice Areas
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground md:text-5xl">
              {p.practicesTitle}
            </h2>
            <div className="mt-6 h-px w-16 bg-accent" />
          </motion.div>

          <div className="space-y-10">
            {[
              {
                title: p.practiceFinanceTitle,
                desc: p.practiceFinanceDesc,
                items: p.practiceFinanceList,
                image: corporateHero,
                index: "01",
              },
              {
                title: p.practicePropertyTitle,
                desc: p.practicePropertyDesc,
                items: p.practicePropertyList,
                image: propertyHero,
                index: "02",
              },
            ].map((practice, i) => (
              <motion.article
                key={practice.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`group grid overflow-hidden border border-border card-finma shadow-elegant lg:grid-cols-12 ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[320px] lg:col-span-5">
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/10 to-transparent" />
                  <span className="absolute left-8 top-8 font-serif text-5xl font-light text-primary-foreground/80">
                    {practice.index}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-10 lg:col-span-7 lg:p-14">
                  <h3 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
                    {practice.title}
                  </h3>
                  <div className="mt-4 h-px w-12 bg-accent" />
                  <p className="mt-6 font-sans text-base leading-[1.8] text-muted-foreground">
                    {practice.desc}
                  </p>
                  <ul role="list" className="mt-8 grid gap-3 sm:grid-cols-2">
                    {practice.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <Check className="mt-1 h-4 w-4 flex-shrink-0 text-accent" aria-hidden />
                        <span className="font-sans text-sm leading-relaxed text-foreground/85">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE FINMA — quiet split with quote treatment */}
      <section className="relative overflow-hidden bg-muted py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={aboutHero}
                  alt="FINMA leadership"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
                Why FINMA
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-foreground md:text-5xl">
                {p.whyTitle}
              </h2>
              <div className="mt-6 h-px w-16 bg-accent" />
              <p className="mt-8 font-serif text-xl leading-[1.7] text-foreground/85 md:text-2xl">
                {p.whyDesc}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <BookingButton variant="gold" />
                <a
                  href={localePath("/who-we-are")}
                  className="group inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-accent"
                >
                  {p.identityTitle}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABlock title={p.ctaTitle} buttonLabel={p.ctaButton} buttonHref={localePath("/contact")} />
    </Layout>
  );
};

export default About;
