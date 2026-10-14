import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useI18n } from "@/i18n";
import { toast } from "sonner";
import contactHeroBg from "@/assets/bg-architecture.jpg";
import contactHeroHeritage from "@/assets/bg-heritage.jpg";
import contactHeroLibrary from "@/assets/bg-library.jpg";

const CONTACT_HERO_SLIDES = [contactHeroBg, contactHeroHeritage, contactHeroLibrary];

const Contact = () => {
  const { t } = useI18n();
  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setHeroIdx((i) => (i + 1) % CONTACT_HERO_SLIDES.length),
      6500,
    );
    return () => clearInterval(id);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false,
  });
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.consent) {
    toast.error(t.contact.consentError);
    return;
  }

  try {
    const response = await fetch("/send-contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Unable to send message");
    }

    toast.success(t.contact.successMessage);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      consent: false,
    });
  } catch (error) {
    console.error(error);
    toast.error("Your message could not be sent. Please try again.");
  }
};

  return (
    <Layout>
      <SEOHead
        title={t.seoPages.contact.title}
        description={t.seoPages.contact.description}
        path="/contact"
        ogTitle={t.seoPages.contact.title}
        ogDescription={t.seoPages.contact.description}
      />

      <section className="relative overflow-hidden bg-primary pt-44 pb-20 md:pt-48">
        {CONTACT_HERO_SLIDES.map((src, i) => (
          <div
            key={src}
            aria-hidden={i !== heroIdx}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${i === heroIdx ? "opacity-100" : "opacity-0"}`}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--navy-dark) / 0.88) 0%, hsl(var(--navy) / 0.82) 60%, hsl(var(--navy-dark) / 0.92) 100%)",
          }}
        />
        <div className="relative container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <div className="section-divider mb-6" />
            <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl">{t.contact.heroTitle}</h1>
            <p className="mt-4 font-sans text-lg text-primary-foreground/80">{t.contact.heroSubtitle}</p>
            <div className="mt-8">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-sm gold-gradient px-8 py-3.5 font-sans text-sm font-semibold tracking-wide text-accent-foreground transition-all hover:opacity-90 hover:shadow-lg"
              >
                {t.contact.sendMessage}
                <span aria-hidden>↓</span>
              </a>
            </div>
          </motion.div>
          <div className="mt-10 flex items-center gap-3">
            {CONTACT_HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setHeroIdx(i)}
                aria-label={`Slide ${i + 1}`}
                className="group flex items-center gap-2"
              >
                <span
                  className={`block h-px transition-all duration-500 ${i === heroIdx ? "w-10 bg-accent" : "w-6 bg-primary-foreground/40 group-hover:bg-primary-foreground/70"}`}
                />
                <span className={`font-sans text-[10px] uppercase tracking-widest transition-colors ${i === heroIdx ? "text-accent" : "text-primary-foreground/70"}`}>
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="bg-background bg-texture-grid py-24 scroll-mt-24">
        <div className="container mx-auto grid gap-16 px-6 lg:grid-cols-5 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.contact.fullName}</label>
                  <input type="text" required maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border-b border-border bg-transparent py-3 font-sans text-sm text-foreground outline-none transition-colors focus:border-secondary" />
                </div>
                <div>
                  <label className="mb-2 block font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.contact.email}</label>
                  <input type="email" required maxLength={255} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border-b border-border bg-transparent py-3 font-sans text-sm text-foreground outline-none transition-colors focus:border-secondary" />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.contact.phone}</label>
                  <input type="tel" maxLength={20} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border-b border-border bg-transparent py-3 font-sans text-sm text-foreground outline-none transition-colors focus:border-secondary" />
                </div>
                <div>
                  <label className="mb-2 block font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.contact.areaOfInterest}</label>
                  <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full border-b border-border bg-transparent py-3 font-sans text-sm text-foreground outline-none transition-colors focus:border-secondary">
                    <option value="">{t.contact.selectService}</option>
                    {t.contact.services.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-2 block font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.contact.messageDetails}</label>
                <textarea required maxLength={1000} rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full border-b border-border bg-transparent py-3 font-sans text-sm text-foreground outline-none transition-colors focus:border-secondary resize-none" />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={formData.consent} onChange={(e) => setFormData({ ...formData, consent: e.target.checked })} className="mt-1 h-4 w-4 rounded border-border accent-secondary" />
                <span className="font-sans text-xs text-muted-foreground leading-relaxed">{t.contact.consent}</span>
              </label>
              <button type="submit" className="gold-gradient rounded-sm px-10 py-4 font-sans text-sm font-semibold tracking-wide text-accent-foreground transition-all hover:opacity-90 hover:shadow-lg">
                {t.contact.sendMessage}
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground">{t.contact.directContact}</h2>
              <div className="section-divider mt-3" />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 flex-shrink-0 text-secondary" />
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">{t.contact.office}</p>
                  <p className="whitespace-pre-line font-sans text-sm text-muted-foreground">{t.contact.officeAddress}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="h-5 w-5 flex-shrink-0 text-secondary" />
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">{t.contact.emailLabel}</p>
                  <p className="font-sans text-sm text-muted-foreground">{t.contact.emailValue}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-5 w-5 flex-shrink-0 text-secondary" />
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">{t.contact.phoneLabel}</p>
                  <p className="font-sans text-sm text-muted-foreground">{t.contact.phoneValue}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-5 w-5 flex-shrink-0 text-secondary" />
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">{t.contact.phoneDirect}</p>
                  <p className="font-sans text-sm text-muted-foreground">{t.contact.phoneDirectValue}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="h-5 w-5 flex-shrink-0 text-secondary" />
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">{t.contact.responseTime}</p>
                  <p className="font-sans text-sm text-muted-foreground">{t.contact.responseValue}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
