import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n";
import finmaLogo from "@/assets/finma-full-logo.webp";
import { BookingButton } from "./BookingModal";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { locale, t, switchLocale, localePath } = useI18n();

  const navItems = [
    { label: t.nav.about, href: localePath("/about") },
    { label: t.nav.whoWeAre, href: localePath("/who-we-are") },
    {
      label: t.nav.financialAdvisory,
      href: localePath("/financial-advisory"),
      children: [
        { label: t.nav.corporateFinance, href: localePath("/services/corporate-finance") },
        { label: t.nav.maAdvisory, href: localePath("/services/ma-advisory") },
        { label: t.nav.ourApproach, href: localePath("/services/our-approach") },
        { label: t.nav.tekis, href: localePath("/services/tekis") },
      ],
    },
    {
      label: t.nav.propertyManagement,
      href: localePath("/property-management"),
      children: [
        { label: t.nav.syndicateManagement, href: localePath("/services/syndicate-management") },
      ],
    },
    { label: t.nav.testimonials, href: localePath("/testimonials") },
    { label: t.nav.contact, href: localePath("/contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setLangOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-500 ease-out-expo ${
        scrolled ? "shadow-lg backdrop-blur-xl" : "backdrop-blur-[2px]"
      }`}
      style={{
        willChange: "background, box-shadow, backdrop-filter",
        background: scrolled
          ? "linear-gradient(135deg, hsl(216 62% 15% / 0.72) 0%, hsl(216 56% 23% / 0.68) 50%, hsl(200 45% 35% / 0.62) 100%)"
          : "linear-gradient(180deg, hsl(216 62% 15% / 0.28) 0%, hsl(216 62% 15% / 0.10) 70%, hsl(216 62% 15% / 0) 100%)",
        borderBottom: scrolled ? "1px solid hsl(var(--accent) / 0.15)" : "1px solid transparent",
      }}
    >
        <nav className="container mx-auto flex items-center justify-between px-4 py-5 md:px-6 lg:px-10 lg:py-5">
        <a href={localePath("/")} className="flex items-center">
          <img src={finmaLogo} alt="FINMA" className="h-24 w-auto object-contain md:h-28 lg:h-32" />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.href}
                className="flex items-center gap-1 text-[10px] font-sans font-medium uppercase tracking-wider text-primary-foreground/90 transition-colors hover:text-accent"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>

              <AnimatePresence>
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-2 w-56 rounded-md border border-border bg-card p-2 shadow-xl"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block rounded px-4 py-2.5 text-sm font-sans text-card-foreground transition-colors hover:bg-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Language dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 rounded-md bg-primary-foreground/10 px-3 py-1.5 text-xs font-sans font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{locale === "en" ? t.ui.english : t.ui.french}</span>
              <ChevronDown className={`h-3 w-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 w-36 overflow-hidden rounded-md border border-border bg-card shadow-xl"
                >
                  <button
                    onClick={() => { switchLocale("en"); setLangOpen(false); }}
                    className={`flex w-full items-center gap-2 px-4 py-2.5 text-sm font-sans transition-colors hover:bg-muted ${locale === "en" ? "font-semibold text-primary bg-muted/50" : "text-card-foreground"}`}
                  >
                    {t.ui.english}
                  </button>
                  <button
                    onClick={() => { switchLocale("fr"); setLangOpen(false); }}
                    className={`flex w-full items-center gap-2 px-4 py-2.5 text-sm font-sans transition-colors hover:bg-muted ${locale === "fr" ? "font-semibold text-primary bg-muted/50" : "text-card-foreground"}`}
                  >
                    {t.ui.french}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <BookingButton variant="compact" />
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-primary-foreground lg:hidden"
          aria-label={t.ui.toggleMenu}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden lg:hidden"
            style={{
              background: "linear-gradient(180deg, hsl(216 56% 23%) 0%, hsl(216 62% 15%) 100%)",
            }}
          >
            <div className="container mx-auto space-y-1 px-6 pb-6">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block py-3 text-sm font-sans font-medium text-primary-foreground/90 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block py-2 pl-4 text-sm font-sans text-primary-foreground/60 hover:text-primary-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={() => switchLocale("en")}
                  className={`rounded-md px-3 py-1.5 text-xs font-sans font-medium transition-colors ${locale === "en" ? "bg-primary-foreground/20 text-primary-foreground" : "text-primary-foreground/60 hover:text-primary-foreground"}`}
                >
                  {t.ui.english}
                </button>
                <button
                  onClick={() => switchLocale("fr")}
                  className={`rounded-md px-3 py-1.5 text-xs font-sans font-medium transition-colors ${locale === "fr" ? "bg-primary-foreground/20 text-primary-foreground" : "text-primary-foreground/60 hover:text-primary-foreground"}`}
                >
                  {t.ui.french}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
