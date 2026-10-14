import { describe, it, expect, beforeAll, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nProvider } from "@/i18n";
import { BookingProvider } from "@/components/BookingModal";
import Index from "@/pages/Index";
import About from "@/pages/About";
import FinancialAdvisory from "@/pages/FinancialAdvisory";
import { fr } from "@/i18n/fr";
import { en } from "@/i18n/en";

// Headlines often contain inline <span>s for color emphasis, so the literal
// string is split across elements. This matcher collapses whitespace on each
// element's textContent and looks for an exact match.
const byText = (text: string) => (_: string, node: Element | null) => {
  if (!node) return false;
  const normalize = (s: string) => s.replace(/\s+/g, " ").trim();
  const own = normalize(node.textContent ?? "");
  if (own !== normalize(text)) return false;
  // Only match the leaf-most element to avoid duplicate hits on ancestors.
  const childMatch = Array.from(node.children).some(
    (c) => normalize(c.textContent ?? "") === normalize(text),
  );
  return !childMatch;
};

const getAll = (text: string) => screen.getAllByText(byText(text));
const queryOne = (text: string) => screen.queryByText(byText(text));

beforeAll(() => {
  // IntersectionObserver is used by motion reveals; stub it.
  class IO {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  }
  // @ts-expect-error test stub
  window.IntersectionObserver = IO;
  window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;
});

const renderAt = (path: string) => {
  const qc = new QueryClient();
  return render(
    <QueryClientProvider client={qc}>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route
            path="/fr/*"
            element={
              <I18nProvider>
                <BookingProvider>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/financial-advisory" element={<FinancialAdvisory />} />
                  </Routes>
                </BookingProvider>
              </I18nProvider>
            }
          />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  );
};

describe("French routes render localized content", () => {
  it("/fr/ home renders hero and capabilities in French (not English)", () => {
    renderAt("/fr/");
    expect(getAll(fr.home.heroSlides[0].title).length).toBeGreaterThan(0);
    expect(getAll(fr.home.capabilitiesTitle).length).toBeGreaterThan(0);
    expect(queryOne(en.home.capabilitiesTitle)).toBeNull();
  });

  it("/fr/ home renders additional section headlines in French", () => {
    renderAt("/fr/");
    const headlines = [
      fr.home.clientsTitle,
      fr.home.howWeWorkTitle,
      fr.home.credentialsTitle,
      fr.home.diffTitle,
      fr.home.statsTitle,
      fr.home.ctaTitle,
    ];
    for (const h of headlines) {
      expect(
        getAll(h).length,
        `expected FR home headline to render: ${h}`,
      ).toBeGreaterThan(0);
    }
    for (const key of ["clientsTitle", "howWeWorkTitle", "credentialsTitle", "diffTitle", "statsTitle", "ctaTitle"] as const) {
      if (fr.home[key] !== en.home[key]) {
        expect(queryOne(en.home[key])).toBeNull();
      }
    }
  });

  it("/fr/ home renders client + experience list items in French", () => {
    renderAt("/fr/");
    for (const item of fr.home.clients) {
      expect(getAll(item).length, `client item: ${item}`).toBeGreaterThan(0);
    }
    for (const item of fr.home.experienceItems) {
      expect(getAll(item).length, `experience item: ${item}`).toBeGreaterThan(0);
    }
    for (const item of fr.home.credentials) {
      expect(getAll(item).length, `credential item: ${item}`).toBeGreaterThan(0);
    }
  });

  it("/fr/about renders About hero in French", () => {
    renderAt("/fr/about");
    expect(getAll(fr.about.heroTitle).length).toBeGreaterThan(0);
    expect(queryOne(en.about.heroTitle)).toBeNull();
  });

  it("/fr/about renders core practice sections + list items in French", () => {
    renderAt("/fr/about");
    const headlines = [
      fr.about.identityTitle,
      fr.about.setsApartTitle,
      fr.about.practicesTitle,
      fr.about.practiceFinanceTitle,
      fr.about.practicePropertyTitle,
      fr.about.whyTitle,
    ];
    for (const h of headlines) {
      expect(getAll(h).length, `about headline: ${h}`).toBeGreaterThan(0);
    }
    for (const item of fr.about.practiceFinanceList) {
      expect(getAll(item).length, `finance list: ${item}`).toBeGreaterThan(0);
    }
    for (const item of fr.about.practicePropertyList) {
      expect(getAll(item).length, `property list: ${item}`).toBeGreaterThan(0);
    }
    for (const card of fr.about.setsApart) {
      expect(getAll(card.title).length, `setsApart: ${card.title}`).toBeGreaterThan(0);
    }
  });

  it("/fr/financial-advisory renders every service card title in French", () => {
    const { container } = renderAt("/fr/financial-advisory");

    expect(getAll(fr.financial.servicesTitle).length).toBeGreaterThan(0);

    for (const service of fr.financial.services) {
      expect(
        getAll(service.title).length,
        `expected FR service title to render: ${service.title}`,
      ).toBeGreaterThan(0);
    }

    for (const service of en.financial.services) {
      const matchingFr = fr.financial.services.find((s) => s.id === service.id);
      if (matchingFr && matchingFr.title !== service.title) {
        expect(
          within(container).queryByText(service.title),
          `English service title leaked on /fr/financial-advisory: ${service.title}`,
        ).toBeNull();
      }
    }
  });

  it("/fr/financial-advisory renders intro, why-choose, and service descriptions in French", () => {
    renderAt("/fr/financial-advisory");
    const headlines = [
      fr.financial.heroTitle,
      fr.financial.introTitle,
      fr.financial.whyTitle,
      fr.financial.servicesTitle,
      fr.financial.ctaTitle,
    ];
    for (const h of headlines) {
      expect(getAll(h).length, `financial headline: ${h}`).toBeGreaterThan(0);
    }
    for (const service of fr.financial.services) {
      expect(
        getAll(service.description).length,
        `service description not in FR: ${service.id}`,
      ).toBeGreaterThan(0);
    }
  });
});
