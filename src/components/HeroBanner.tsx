import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface HeroBannerProps {
  /** Single background image (legacy). Provide either this or `backgroundImages`. */
  backgroundImage?: string;
  /** Optional rotation: 2–3 images cross-fade every ~6s. Overrides `backgroundImage`. */
  backgroundImages?: string[];
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

const HeroBanner = ({ backgroundImage, backgroundImages, title, subtitle, primaryCta, secondaryCta }: HeroBannerProps) => {
  const slides = (backgroundImages && backgroundImages.length > 0
    ? backgroundImages
    : backgroundImage
      ? [backgroundImage]
      : []
  ).slice(0, 3);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-navy-dark">
      {/* Backgrounds (cross-fade rotation) */}
      {slides.map((src, i) => (
        <div
          key={src}
          aria-hidden={i !== idx}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${i === idx ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={src}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            decoding="async"
            className={`h-full w-full object-cover ${i === idx && slides.length > 1 ? "animate-ken-burns" : ""}`}
          />
        </div>
      ))}
      <div className="hero-overlay absolute inset-0" />
      {/* Gold radial glow + editorial hairlines — matches CTA framing */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.18),transparent_55%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="section-divider mb-8" />
            <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              {title}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-primary-foreground/80 md:text-xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {primaryCta && (
              <Link
                to={primaryCta.href}
                className="inline-flex items-center rounded-sm gold-gradient px-8 py-3.5 font-sans text-sm font-semibold tracking-wide text-accent-foreground transition-all hover:opacity-90 hover:shadow-lg"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              secondaryCta.href.startsWith("#") ? (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center rounded-sm border border-primary-foreground/30 px-8 py-3.5 font-sans text-sm font-medium tracking-wide text-primary-foreground transition-all hover:border-primary-foreground/60 hover:bg-primary-foreground/5"
                >
                  {secondaryCta.label}
                </a>
              ) : (
                <Link
                  to={secondaryCta.href}
                  className="inline-flex items-center rounded-sm border border-primary-foreground/30 px-8 py-3.5 font-sans text-sm font-medium tracking-wide text-primary-foreground transition-all hover:border-primary-foreground/60 hover:bg-primary-foreground/5"
                >
                  {secondaryCta.label}
                </Link>
              )
            )}
          </motion.div>
        </div>

        {slides.length > 1 && (
          <div className="mt-12 flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
                className="group flex items-center gap-2"
              >
                <span
                  className={`block h-px transition-all duration-500 ${i === idx ? "w-10 bg-accent" : "w-6 bg-primary-foreground/40 group-hover:bg-primary-foreground/70"}`}
                />
                <span className={`font-sans text-[10px] uppercase tracking-widest transition-colors ${i === idx ? "text-accent" : "text-primary-foreground/70"}`}>
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
