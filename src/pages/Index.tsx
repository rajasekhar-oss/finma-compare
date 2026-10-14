import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Shield, UserCheck, Globe, Target, Check, GraduationCap, Award, BadgeCheck } from "lucide-react";
import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import CTABlock from "@/components/CTABlock";
import SEOHead from "@/components/SEOHead";
import { useI18n } from "@/i18n";
import heroBg from "@/assets/hero-bg.jpg";
import heroBoardroom from "@/assets/corporate-finance-hero.jpg";
import heroProperty from "@/assets/residential-hero.jpg";
import heroDeal from "@/assets/ma-advisory-hero.jpg";

type Stat = { value: number; suffix: string; label: string };

const CountUp = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      count.set(to);
      return;
    }
    const controls = animate(count, to, { duration: 1.6, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, to, count]);

  return (
    <span
      ref={ref}
      className="font-serif text-4xl font-bold text-accent md:text-5xl"
      aria-label={`${to}${suffix}`}
    >
      <motion.span aria-hidden>{rounded}</motion.span>
    </span>
  );
};

const Index = () => {
  const { t, localePath } = useI18n();

  const heroSlides = [
    {
      image: heroBoardroom,
      eyebrow: t.home.heroSlides[0].eyebrow,
      title: t.home.heroSlides[0].title,
    },
    {
      image: heroProperty,
      eyebrow: t.home.heroSlides[1].eyebrow,
      title: t.home.heroSlides[1].title,
    },
    {
      image: heroDeal,
      eyebrow: t.home.heroSlides[2].eyebrow,
      title: t.home.heroSlides[2].title,
    },
    {
      image: heroBg,
      eyebrow: t.home.heroSlides[3].eyebrow,
      title: t.home.heroSlides[3].title,
    },
  ];

  const differentiators = [
    { icon: <UserCheck className="h-6 w-6" />, title: t.home.diff1Title, description: t.home.diff1Desc },
    { icon: <Shield className="h-6 w-6" />, title: t.home.diff2Title, description: t.home.diff2Desc },
    { icon: <Target className="h-6 w-6" />, title: t.home.diff3Title, description: t.home.diff3Desc },
    { icon: <Globe className="h-6 w-6" />, title: t.home.diff4Title, description: t.home.diff4Desc },
  ];

  const stats: Stat[] = [
    { value: 25, suffix: "+", label: t.home.stat1 },
    { value: 30, suffix: "+", label: t.home.stat2 },
    { value: 25, suffix: "+", label: t.home.stat3 },
    { value: 30, suffix: "+", label: t.home.stat4 },
  ];

  return (
    <Layout>
      <SEOHead
        title={t.seoPages.home.title}
        description={t.seoPages.home.description}
        path="/"
        
      />
      <HeroSlider
        subtitle={t.home.heroSubtitle}
        secondaryCta={{ label: t.home.ctaSecondary, href: localePath("/financial-advisory") }}
        slides={heroSlides}
      />

      <section className="relative bg-background bg-texture-pinstripe tx--bold tx-pos--top py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">{t.home.capabilitiesLabel}</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">{t.home.capabilitiesTitle}</h2>
            <div className="section-divider mt-4" />
            <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-muted-foreground">{t.home.capabilitiesDesc}</p>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-muted-foreground">{t.home.introDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="bg-muted bg-texture-dots tx--soft py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 max-w-3xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-ink">{t.home.clientsLabel}</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">{t.home.clientsTitle}</h2>
            <div className="section-divider mt-4" />
          </motion.div>
          <ul role="list" className="grid gap-5 md:grid-cols-2">
            {t.home.clients.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-finma group flex items-start gap-4 rounded-sm px-5 py-5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span
                  aria-hidden
                  className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-sm bg-accent/15 text-accent ring-1 ring-accent/30 transition-colors group-hover:bg-accent group-hover:text-primary"
                >
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="font-sans text-sm leading-relaxed text-primary-foreground">{c}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Diversified Experience */}
      <section className="bg-background bg-texture-pinstripe py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 max-w-3xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">{t.home.experienceLabel}</p>
            <div className="section-divider mt-4" />
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2">
            {t.home.experienceItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5"
              >
                <span className="font-serif text-3xl font-bold leading-none text-secondary" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-sans text-base leading-relaxed text-muted-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="relative bg-primary bg-texture-dots tx--quiet tx-pos--bottom py-24">
        <div className="absolute inset-0 bg-primary/90" aria-hidden />
        <div className="container relative mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">{t.home.howWeWorkLabel}</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary-foreground md:text-4xl">{t.home.howWeWorkTitle}</h2>
            <div className="section-divider mt-4" />
            <p className="mt-6 font-sans text-base leading-relaxed text-primary-foreground">{t.home.howWeWorkDesc}</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted bg-texture-dots tx--soft py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 max-w-2xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">{t.home.diffLabel}</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">{t.home.diffTitle}</h2>
            <div className="section-divider mt-4" />
          </motion.div>
          <div className="grid gap-10 md:grid-cols-2">
            {differentiators.map((d, i) => (
              <motion.div key={d.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-5">
                <div className="flex-shrink-0 text-secondary">{d.icon}</div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{d.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-background bg-texture-pinstripe tx--quiet py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 max-w-3xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">{t.home.credentialsLabel}</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">{t.home.credentialsTitle}</h2>
            <div className="section-divider mt-4" />
          </motion.div>
          <ul role="list" className="grid gap-6 md:grid-cols-3">
            {t.home.credentials.map((c, i) => {
              const Icon = [GraduationCap, Award, BadgeCheck][i] ?? BadgeCheck;
              return (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-t-2 border-secondary/70 pt-5"
                >
                  <Icon className="h-6 w-6 text-secondary" aria-hidden />
                  <p className="mt-4 font-sans text-sm leading-relaxed text-foreground">{c}</p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      <section
        className="relative bg-primary py-24 text-primary-foreground"
        aria-labelledby="experience-stats-title"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-3xl"
          >
            <h2
              id="experience-stats-title"
              className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl"
            >
              {t.home.statsTitle}
            </h2>
            <div className="section-divider mt-4" />
          </motion.div>

          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((s, i) => (
              <motion.li
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-sm border border-accent/20 bg-primary-foreground/[0.06] p-6 backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-primary-foreground/[0.09]"
              >
                <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-accent/90">
                  {s.label}
                </p>
                <div className="mt-4">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-12 max-w-3xl text-center font-serif text-base italic leading-relaxed text-primary-foreground/80 md:text-lg"
          >
            {t.home.statsSubtitle}
          </motion.p>
        </div>
      </section>

      <CTABlock title={t.home.ctaTitle} buttonLabel={t.home.ctaButton} buttonHref={localePath("/contact")} />
    </Layout>
  );
};

export default Index;
