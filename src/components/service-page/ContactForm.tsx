import { useState } from "react";
import { useSearch } from "@tanstack/react-router";
import type { Locale } from "@/content/corporate-accounting/types";

const SERVICES: Record<Locale, { value: string; label: string }[]> = {
  "en-CA": [
    { value: "accounting", label: "Corporate Accounting & Tax Returns" },
    { value: "corporate-finance", label: "Corporate Finance" },
    { value: "ma-advisory", label: "M&A Advisory" },
    { value: "other", label: "Other / Not sure yet" },
  ],
  "fr-CA": [
    { value: "accounting", label: "Comptabilité d'entreprise et déclarations de revenus" },
    { value: "corporate-finance", label: "Finance d'entreprise" },
    { value: "ma-advisory", label: "Conseil en fusions et acquisitions" },
    { value: "other", label: "Autre / Je ne sais pas encore" },
  ],
};

interface ContactStrings {
  heading: string; sub: string; name: string; email: string; company: string;
  service: string; message: string; submit: string; sent: string;
}

const STRINGS: Record<Locale, ContactStrings> = {
  "en-CA": {
    heading: "Contact FINMA",
    sub: "Tell us about your business and we'll get back to you within one business day.",
    name: "Full name",
    email: "Email",
    company: "Company",
    service: "Service you're interested in",
    message: "How can we help?",
    submit: "Send message",
    sent: "Thank you — your message has been noted. This preview does not send email yet.",
  },
  "fr-CA": {
    heading: "Contactez FINMA",
    sub: "Parlez-nous de votre entreprise et nous vous répondrons dans un délai d'un jour ouvrable.",
    name: "Nom complet",
    email: "Courriel",
    company: "Entreprise",
    service: "Service qui vous intéresse",
    message: "Comment pouvons-nous vous aider?",
    submit: "Envoyer le message",
    sent: "Merci — votre message a été noté. Cet aperçu n'envoie pas encore de courriel.",
  },
};

const inputCls =
  "w-full rounded-md border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

export function ContactForm({ locale }: { locale: Locale }) {
  const t = STRINGS[locale];
  const search = useSearch({ strict: false }) as { service?: string };
  const initial = search.service && SERVICES[locale].some((s) => s.value === search.service) ? search.service : "";
  const [service, setService] = useState(initial);
  const [sent, setSent] = useState(false);

  return (
    <section id="contact-form" className="mx-auto max-w-2xl scroll-mt-28 px-6 py-20">
      <h1 className="font-serif text-4xl text-foreground">{t.heading}</h1>
      <p className="mt-3 text-muted-foreground">{t.sub}</p>
      {sent ? (
        <p className="mt-10 rounded-md border border-border bg-secondary p-6 text-sm text-secondary-foreground">{t.sent}</p>
      ) : (
        <form
          className="mt-10 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div>
            <label htmlFor="cf-name" className="mb-2 block text-sm font-medium text-foreground">{t.name}</label>
            <input id="cf-name" name="name" required autoComplete="name" className={inputCls} />
          </div>
          <div>
            <label htmlFor="cf-email" className="mb-2 block text-sm font-medium text-foreground">{t.email}</label>
            <input id="cf-email" name="email" type="email" required autoComplete="email" className={inputCls} />
          </div>
          <div>
            <label htmlFor="cf-company" className="mb-2 block text-sm font-medium text-foreground">{t.company}</label>
            <input id="cf-company" name="company" autoComplete="organization" className={inputCls} />
          </div>
          <div>
            <label htmlFor="cf-service" className="mb-2 block text-sm font-medium text-foreground">{t.service}</label>
            <select id="cf-service" name="service" value={service} onChange={(e) => setService(e.target.value)} className={inputCls}>
              <option value="">—</option>
              {SERVICES[locale].map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="cf-message" className="mb-2 block text-sm font-medium text-foreground">{t.message}</label>
            <textarea id="cf-message" name="message" rows={5} className={inputCls} />
          </div>
          <button
            type="submit"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-gold px-8 text-sm font-semibold tracking-wide text-navy transition-colors hover:bg-gold-light"
          >
            {t.submit}
          </button>
        </form>
      )}
    </section>
  );
}
