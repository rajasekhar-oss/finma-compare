import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { BookingButton } from "@/components/BookingModal";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";

interface Slide {
  image: string;
  eyebrow: string;
  title: string;
}

interface HeroSliderProps {
  slides: Slide[];
  subtitle: string;
  secondaryCta?: { label: string; href: string };
}

const HeroSlider = ({ slides, subtitle, secondaryCta }: HeroSliderProps) => {
  const [idx, setIdx] = useState(0);
  const { t } = useI18n();

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-dark">
      {/* Slider backgrounds */}
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${i === idx ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== idx}
        >
          <img
            src={s.image}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            decoding="async"
            className={`h-full w-full object-cover ${i === idx ? "animate-ken-burns" : ""}`}
          />
        </div>
      ))}
      {/* Layered overlay — navy top for legibility, warm cream wash at bottom for soft transition into next section */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--navy-dark) / 0.82) 0%, hsl(var(--navy) / 0.55) 45%, hsl(var(--navy-dark) / 0.55) 80%, hsl(var(--navy-dark) / 0.85) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, hsl(var(--navy-dark) / 0.78) 0%, hsl(var(--navy-dark) / 0.4) 40%, hsl(var(--navy-dark) / 0.1) 70%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 25% 45%, hsl(var(--navy-dark) / 0.35) 0%, transparent 60%)",
        }}
      />
      {/* Gold radial glow + editorial hairlines — matches CTA framing */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.18),transparent_55%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto w-full px-6 lg:px-12">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-12 bg-accent" />
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                  {slides[idx].eyebrow}
                </p>
              </div>
              <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-primary-foreground">
                {slides[idx].title}
              </h1>
            </motion.div>
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-2xl font-sans text-base font-normal leading-relaxed text-primary-foreground/85"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <BookingButton className="leading-[1.5]" />
            {secondaryCta && (
              secondaryCta.href.startsWith("#") ? (
                <a
                  href={secondaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/5 px-7 py-3.5 font-sans text-sm font-semibold leading-[1.5] text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:bg-accent/10 hover:text-accent"
                >
                  {secondaryCta.label}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
                </a>
              ) : (
                <Link
                  to={secondaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/5 px-7 py-3.5 font-sans text-sm font-semibold leading-[1.5] text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:bg-accent/10 hover:text-accent"
                >
                  {secondaryCta.label}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              )
            )}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="mt-16 flex items-center gap-3">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className="group flex items-center gap-2"
            >
              <span
                className={`block h-px transition-all duration-500 ${i === idx ? "w-12 bg-accent" : "w-6 bg-primary-foreground/40 group-hover:bg-primary-foreground/70"}`}
              />
              <span className={`font-sans text-[10px] uppercase tracking-widest transition-colors ${i === idx ? "text-accent" : "text-primary-foreground/70"}`}>
                0{i + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden />
        <span className="sr-only">{t.ui.scroll}</span>
      </motion.div>
    </section>
  );
};

export default HeroSlider;
