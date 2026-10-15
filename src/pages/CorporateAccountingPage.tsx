import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, BookOpen, Briefcase, CalendarCheck, Check, ChevronDown, Eraser,
  Landmark, Languages, LineChart, Link2, MessageSquare, MonitorCog,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/i18n";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import valuationsHeroImg from "@/assets/valuations-hero.jpg";
import goldTierBadgeImg from "@/assets/Gold Tier Badge.png";
import bgArchitectureImg from "@/assets/bg-architecture.jpg";
import bgLibraryImg from "@/assets/bg-library.jpg";

type IconKey = "bookOpen" | "calendarCheck" | "landmark" | "monitorCog" | "lineChart" | "eraser" | "briefcase" | "messageSquare" | "languages" | "link";

const ICONS: Record<IconKey, LucideIcon> = {
  bookOpen: BookOpen, calendarCheck: CalendarCheck, landmark: Landmark, monitorCog: MonitorCog,
  lineChart: LineChart, eraser: Eraser, briefcase: Briefcase, messageSquare: MessageSquare,
  languages: Languages, link: Link2,
};

function CtaLink({ label, href, variant }: { label: string; href: string; variant: "gold" | "cream" | "navy" | "goldPill" | "creamPill" }) {
  const cls = {
    gold: "btn-gold rounded-sm px-8 py-3.5",
    cream: "btn-outline-cream rounded-sm px-8 py-3.5",
    navy: "btn-outline-navy rounded-sm px-7 py-3",
    goldPill: "btn-gold rounded-full px-8 py-3.5",
    creamPill: "btn-outline-cream rounded-full px-8 py-3.5",
  }[variant];

  if (href.startsWith("#")) {
    return (
      <a href={href} className={`inline-flex min-h-11 items-center justify-center gap-2 text-sm font-semibold tracking-wide ${cls}`}>
        {label}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </a>
    );
  }

  return (
    <Link to={href} className={`inline-flex min-h-11 items-center justify-center gap-2 text-sm font-semibold tracking-wide ${cls}`}>
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}

function Eyebrow({ children, dark }: { children: string; dark?: boolean }) {
  return (
    <p className={`eyebrow mb-4 flex items-center gap-3 ${dark ? "text-gold" : "text-accent-ink"}`}>
      <span className={`h-px w-8 ${dark ? "bg-gold" : "bg-accent-ink"}`} aria-hidden />
      {children}
    </p>
  );
}

function Faq({ items, idPrefix }: { items: { id: string; question: string; answer: string }[]; idPrefix: string }) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);
  return (
    <div className="divide-y divide-border rounded-sm border border-border bg-card shadow-soft">
      {items.map((item) => {
        const isOpen = open === item.id;
        const btnId = `${idPrefix}-q-${item.id}`;
        const panelId = `${idPrefix}-a-${item.id}`;
        return (
          <div key={item.id}>
            <h3 className="font-sans">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="flex min-h-14 w-full items-center justify-between gap-6 px-6 py-5 text-left font-serif text-lg font-semibold text-primary transition-colors hover:text-accent-ink"
              >
                {item.question}
                <ChevronDown className={`h-5 w-5 shrink-0 text-accent-ink transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen} className="px-6 pb-6">
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function CorporateAccountingPage() {
  const { t, localePath, locale } = useI18n();
  const c = t.corporateAccountingPage;

  return (
    <Layout>
      <SEOHead
        title={c.seo.title}
        description={c.seo.description}
        path={localePath("/services/corporate-accounting-tax-returns")}
        ogTitle={c.seo.title}
        ogDescription={c.seo.description}
      />

      {/* A. Hero */}
      <section className="relative isolate flex min-h-[75vh] md:min-h-[80vh] items-center overflow-hidden bg-navy-dark pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16">
        <img
          src={valuationsHeroImg}
          alt={c.hero.title}
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 -z-10" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden />
        <div className="container px-6 py-8 md:py-12 lg:px-12">
          <div className="reveal max-w-3xl">
            <Eyebrow dark>{c.hero.eyebrow}</Eyebrow>
            <h1 className="text-4xl font-bold leading-tight text-cream md:text-5xl lg:text-6xl">{c.hero.title}</h1>
            <p className="mt-6 font-serif text-xl italic text-gold-light md:text-2xl">{c.hero.subtitle}</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/85">{c.hero.body}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <CtaLink label={c.hero.primaryCta} href={localePath("/booking")} variant="gold" />
              <CtaLink label={c.hero.secondaryCta} href="#accounting-services" variant="cream" />
            </div>
            <p className="mt-8 flex items-center gap-3 text-sm text-cream/75">
              <span className="h-px w-6 bg-gold" aria-hidden />
              {c.hero.credentialLine}
            </p>
          </div>
        </div>
      </section>

      {/* B. Overview */}
      <section id="overview" className="relative isolate overflow-hidden bg-card py-24">
        <img src={bgArchitectureImg} alt="" aria-hidden width={1920} height={1280} loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover tx--quiet" />
        <div className="bg-texture-pinstripe-light absolute inset-0 -z-10" aria-hidden />
        <div className="container grid gap-12 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-5">
            <Eyebrow>{c.overview.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">{c.overview.heading}</h2>
            <div className="mt-8 h-0.5 w-16 bg-gold" aria-hidden />
          </div>
          <div className="space-y-6 lg:col-span-7">
            {c.overview.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* C. Services */}
      <section id="accounting-services" className="relative bg-muted py-24">
        <div className="bg-texture-dots absolute inset-0 opacity-60" aria-hidden />
        <div className="container relative px-6 lg:px-12">
          <div className="mb-14 max-w-3xl">
            <Eyebrow>{c.services.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">{c.services.heading}</h2>
          </div>
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {c.services.cards.map((card) => {
              const Icon = ICONS[card.iconKey as IconKey];
              return (
                <li key={card.id} className="card-finma p-8">
                  <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm border border-gold/40 bg-gold/10">
                    <Icon className="h-6 w-6 text-gold-light" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-[var(--card-text)]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--card-muted)]">{card.body}</p>
                </li>
              );
            })}
          </ul>
          <p className="mt-10 text-sm italic text-muted-foreground">{c.services.scopeNote}</p>
        </div>
      </section>

      {/* D. Filing */}
      <section id="corporate-tax-filing" className="py-24">
        <div className="container px-6 lg:px-12">
          <div className="mb-14 max-w-3xl">
            <Eyebrow>{c.filing.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">{c.filing.heading}</h2>
            <p className="mt-6 text-base leading-relaxed text-foreground">{c.filing.intro}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {c.filing.jurisdictions.map((j) => (
              <article key={j.id} aria-labelledby={`fil-${j.id}`} className="rounded-sm border border-border border-t-2 border-t-gold bg-card p-8 shadow-soft">
                <h3 id={`fil-${j.id}`} className="text-lg font-semibold text-primary">{j.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{j.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl border-l-2 border-gold pl-5 text-sm leading-relaxed text-muted-foreground">{c.filing.closingNote}</p>
        </div>
      </section>

      {/* E. QuickBooks */}
      <section id="quickbooks" className="bg-muted py-24">
        <div className="container grid items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <Eyebrow>{c.quickbooks.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">{c.quickbooks.heading}</h2>
            <p className="mt-6 text-base leading-relaxed text-foreground">{c.quickbooks.body}</p>
            <div className="mt-8">
              <CtaLink label={c.quickbooks.cta} href={localePath("/contact?service=accounting")} variant="navy" />
            </div>
          </div>
          <div className="card-finma flex flex-col gap-8 p-8 sm:flex-row sm:items-center md:p-10">
            <img
              src={goldTierBadgeImg}
              alt="QuickBooks ProAdvisor Gold tier badge"
              width={372}
              height={420}
              loading="lazy"
              className="h-24 w-auto shrink-0 object-contain md:h-28"
            />
            <ul className="space-y-4">
              {c.quickbooks.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-[var(--card-muted)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* F. Process */}
      <section id="our-process" className="relative isolate overflow-hidden bg-navy py-24 text-cream">
        <img src={bgLibraryImg} alt="" aria-hidden width={1920} height={1280} loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover tx--soft" />
        <div className="bg-texture-grid absolute inset-0 -z-10" aria-hidden />
        <div className="container px-6 lg:px-12">
          <div className="mb-14 max-w-3xl">
            <Eyebrow dark>{c.process.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold text-cream md:text-4xl">{c.process.heading}</h2>
          </div>
          <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {c.process.steps.map((s, i) => (
              <li key={s.id} className="border-t border-gold/40 pt-6">
                <span className="font-serif text-4xl font-bold text-gold" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-lg font-semibold text-cream">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/75">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 flex flex-col gap-6 border-t border-cream/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="font-serif text-lg italic text-gold-light">{c.process.principlesText}</p>
            <Link to={localePath("/services/our-approach")} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold-light hover:text-cream">
              {c.process.cta} <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* G. Why FINMA */}
      <section className="py-24" aria-labelledby="why-finma-heading">
        <div className="container grid gap-12 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <Eyebrow>{c.whyFinma.eyebrow}</Eyebrow>
            <h2 id="why-finma-heading" className="text-3xl font-bold text-primary md:text-4xl">{c.whyFinma.heading}</h2>
          </div>
          <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {c.whyFinma.items.map((it) => {
              const Icon = ICONS[it.iconKey as IconKey];
              return (
                <li key={it.id} className="flex gap-4">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-accent-ink" aria-hidden />
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{it.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* H. FAQ */}
      <section id="frequently-asked-questions" className="bg-muted py-24">
        <div className="container px-6 lg:px-12">
          <h2 className="mb-12 max-w-3xl text-3xl font-bold text-primary md:text-4xl">{c.faq.heading}</h2>
          <Faq items={c.faq.items} idPrefix={locale} />
        </div>
      </section>

      {/* I. Related */}
      <section className="py-24" aria-labelledby="related-heading">
        <div className="container px-6 lg:px-12">
          <div className="mb-12 max-w-3xl">
            <Eyebrow>{c.relatedServices.eyebrow}</Eyebrow>
            <h2 id="related-heading" className="text-3xl font-bold text-primary md:text-4xl">{c.relatedServices.heading}</h2>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.relatedServices.items.map((r) => {
              const routeMap: Record<string, string> = {
                corporateFinance: "/services/corporate-finance",
                maAdvisory: "/services/ma-advisory",
                ourApproach: "/services/our-approach",
              };
              const href = localePath(routeMap[r.routeKey] || "/");
              return (
                <li key={r.routeKey}>
                  <Link to={href} className="group block h-full rounded-sm border border-border bg-card p-8 shadow-soft transition-shadow hover:shadow-elegant">
                    <h3 className="flex items-center justify-between gap-4 text-lg font-semibold text-primary">
                      {r.label}
                      <ArrowRight className="h-5 w-5 text-accent-ink transition-transform group-hover:translate-x-1" aria-hidden />
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* J. Final CTA */}
      <section className="relative isolate overflow-hidden bg-navy-dark py-28 text-center md:py-32">
        <div className="bg-texture-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="container px-6 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-4 text-gold">{c.finalCta.eyebrow}</p>
            <h2 className="text-3xl font-bold text-cream md:text-4xl">{c.finalCta.heading}</h2>
            <p className="mt-6 text-base leading-relaxed text-cream/80">{c.finalCta.body}</p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <CtaLink label={c.finalCta.primaryCta} href={localePath("/booking")} variant="goldPill" />
              <CtaLink label={c.finalCta.secondaryCta} href={localePath("/contact")} variant="creamPill" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
