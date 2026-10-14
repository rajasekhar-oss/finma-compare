import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookingButton } from "@/components/BookingModal";
import { useI18n } from "@/i18n";
import ctaBg from "@/assets/bg-architecture.jpg";

interface CTABlockProps {
  title: string;
  buttonLabel: string;
  buttonHref: string;
}

const CTABlock = ({ title, buttonLabel, buttonHref }: CTABlockProps) => {
  const { t } = useI18n();
  return (
    <section className="relative isolate overflow-hidden bg-primary py-28 md:py-32">
      {/* Background photograph */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      {/* Layered overlays for legibility + gold mood */}
      <div aria-hidden className="absolute inset-0 bg-primary/82" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--primary)/0.55)_70%,hsl(var(--primary))_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.18),transparent_55%)]"
      />
      {/* Top + bottom hairlines for editorial framing */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      <div className="container relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.32em] text-accent">
            {t.nav.contact}
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-medium leading-[1.15] text-primary-foreground md:text-5xl">
            {title}
          </h2>
          <div className="mx-auto mt-8 section-divider" />
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BookingButton label={buttonLabel} />
            <Link
              to={buttonHref}
              className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 font-sans text-sm font-medium text-primary-foreground transition-all hover:border-accent hover:text-accent"
            >
              {t.nav.contact}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABlock;
