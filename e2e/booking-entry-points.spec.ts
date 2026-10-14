import { test, expect, type Page, type Locator } from "@playwright/test";

type LocaleKey = "en" | "fr";

const L = {
  en: {
    path: "/",
    triggerName: /Book a Free Consultation/i,
    closeName: /^Close$/,
    title: /Book a Free Consultation/i,
    switcherLabel: /^English$/,
    switcherOption: "Français",
  },
  fr: {
    path: "/fr",
    triggerName: /Réservez une consultation gratuite/i,
    closeName: /^Fermer$/,
    title: /Réservez une consultation gratuite/i,
    switcherLabel: /^Français$/,
    switcherOption: "English",
  },
} as const;

const focusStillInDialog = (page: Page) =>
  page.evaluate(() => !!(document.activeElement as HTMLElement | null)?.closest('[role="dialog"]'));

const assertFocusTrapped = async (page: Page, dialog: Locator, locale: LocaleKey) => {
  const close = dialog.getByRole("button", { name: L[locale].closeName });
  await expect(close).toBeFocused();
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press("Tab");
    expect(await focusStillInDialog(page), `Tab #${i + 1} stayed in dialog`).toBe(true);
  }
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press("Shift+Tab");
    expect(await focusStillInDialog(page), `Shift+Tab #${i + 1} stayed in dialog`).toBe(true);
  }
};

const openAndVerify = async (page: Page, trigger: Locator, locale: LocaleKey) => {
  await trigger.scrollIntoViewIfNeeded();
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveAttribute("lang", locale);
  await expect(dialog).toHaveAccessibleName(L[locale].title);
  await assertFocusTrapped(page, dialog, locale);
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
};

for (const locale of ["en", "fr"] as const) {
  test.describe(`Booking entry points — ${locale}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(L[locale].path);
    });

    test("opens from the header CTA", async ({ page }) => {
      const trigger = page.locator("header").getByRole("button", { name: L[locale].triggerName }).first();
      await openAndVerify(page, trigger, locale);
    });

    test("opens from the hero slider CTA", async ({ page }) => {
      // Hero section is the first full-bleed section on the homepage; scope by section role/landmark.
      const hero = page.locator("section").first();
      const trigger = hero.getByRole("button", { name: L[locale].triggerName }).first();
      await openAndVerify(page, trigger, locale);
    });

    test("opens from the in-page CTA block", async ({ page }) => {
      // CTABlock is a primary-bg section below the fold; pick the last in-page trigger that is not the sticky FAB.
      const inPageTriggers = page
        .locator("main, body")
        .first()
        .getByRole("button", { name: L[locale].triggerName });
      // Header is index 0; sticky is hidden until scroll. The CTABlock trigger sits in the middle of the page.
      const cta = page.locator("section.bg-primary").getByRole("button", { name: L[locale].triggerName }).last();
      await expect(cta).toBeVisible();
      void inPageTriggers; // (kept for documentation of locator search)
      await openAndVerify(page, cta, locale);
    });

    test("opens from the sticky bottom-right CTA after scrolling", async ({ page }) => {
      // StickyBookingButton appears once window.scrollY > 600
      await page.evaluate(() => window.scrollTo(0, 1200));
      const sticky = page
        .locator('div.fixed.bottom-5.right-5, div.fixed.bottom-8.right-8')
        .getByRole("button", { name: L[locale].triggerName });
      await expect(sticky).toBeVisible();
      await openAndVerify(page, sticky, locale);
    });
  });
}

test.describe("Booking modal across locale switches", () => {
  test("EN → switch to FR via header toggle → modal renders in FR", async ({ page }) => {
    await page.goto("/");
    // Open language dropdown (button shows current locale label "English")
    const langButton = page.locator("header").getByRole("button", { name: L.en.switcherLabel }).first();
    await langButton.click();
    await page.getByRole("button", { name: L.en.switcherOption, exact: true }).click();
    await expect(page).toHaveURL(/\/fr\b/);

    const trigger = page.locator("header").getByRole("button", { name: L.fr.triggerName }).first();
    await openAndVerify(page, trigger, "fr");
  });

  test("FR → switch to EN via header toggle → modal renders in EN", async ({ page }) => {
    await page.goto("/fr");
    const langButton = page.locator("header").getByRole("button", { name: L.fr.switcherLabel }).first();
    await langButton.click();
    await page.getByRole("button", { name: L.fr.switcherOption, exact: true }).click();
    await expect(page).toHaveURL(/\/(?!fr)/);

    const trigger = page.locator("header").getByRole("button", { name: L.en.triggerName }).first();
    await openAndVerify(page, trigger, "en");
  });
});