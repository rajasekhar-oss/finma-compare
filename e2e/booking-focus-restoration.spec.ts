import { test, expect, type Page, type Locator } from "@playwright/test";

type LocaleKey = "en" | "fr";
type EntryKey = "header" | "hero" | "ctaBlock" | "sticky";
type ClosePath = "escape" | "overlay" | "closeButton";

const L: Record<LocaleKey, { path: string; triggerName: RegExp; closeName: RegExp }> = {
  en: {
    path: "/",
    triggerName: /Book a Free Consultation/i,
    closeName: /^Close$/,
  },
  fr: {
    path: "/fr",
    triggerName: /Réservez une consultation gratuite/i,
    closeName: /^Fermer$/,
  },
};

/** Returns a Locator for the specific trigger element on the homepage. */
const triggerFor = (page: Page, locale: LocaleKey, entry: EntryKey): Locator => {
  const name = L[locale].triggerName;
  switch (entry) {
    case "header":
      return page.locator("header").getByRole("button", { name }).first();
    case "hero":
      // Hero is the first <section> on the homepage; its CTA persists across slide changes.
      return page.locator("section").first().getByRole("button", { name }).first();
    case "ctaBlock":
      // CTABlock uses a primary-bg section below the fold.
      return page.locator("section.bg-primary").getByRole("button", { name }).last();
    case "sticky":
      // StickyBookingButton is a fixed bottom-right FAB rendered after scrollY > 600.
      return page
        .locator('div.fixed.bottom-5.right-5, div.fixed.bottom-8.right-8')
        .getByRole("button", { name });
  }
};

const prepareEntry = async (page: Page, entry: EntryKey, trigger: Locator) => {
  if (entry === "sticky") {
    await page.evaluate(() => window.scrollTo(0, 1400));
  } else {
    await trigger.scrollIntoViewIfNeeded();
  }
  await expect(trigger).toBeVisible();
};

const closeVia = async (page: Page, path: ClosePath, locale: LocaleKey) => {
  switch (path) {
    case "escape":
      await page.keyboard.press("Escape");
      return;
    case "overlay":
      // Backdrop is the parent of [role=dialog]; click a corner well outside the dialog content.
      await page.mouse.click(8, 8);
      return;
    case "closeButton":
      await page
        .getByRole("dialog")
        .getByRole("button", { name: L[locale].closeName })
        .click();
      return;
  }
};

const ENTRIES: EntryKey[] = ["header", "hero", "ctaBlock", "sticky"];
const CLOSES: ClosePath[] = ["escape", "overlay", "closeButton"];

for (const locale of ["en", "fr"] as const) {
  test.describe(`Focus restoration matrix — ${locale}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(L[locale].path);
    });

    for (const entry of ENTRIES) {
      for (const close of CLOSES) {
        test(`${entry} CTA → close via ${close} → focus returns to the same ${entry} CTA`, async ({ page }) => {
          const trigger = triggerFor(page, locale, entry);
          await prepareEntry(page, entry, trigger);

          // Capture the exact DOM node so we can compare against document.activeElement
          const triggerHandle = await trigger.elementHandle();
          expect(triggerHandle, "trigger element handle resolved").not.toBeNull();

          await trigger.click();
          const dialog = page.getByRole("dialog");
          await expect(dialog).toBeVisible();
          await expect(dialog).toHaveAttribute("lang", locale);

          await closeVia(page, close, locale);
          await expect(dialog).toBeHidden();

          // Playwright's toBeFocused on the same Locator confirms focus is on a matching element,
          // but we also assert it's the *exact* DOM node we clicked, not another matching CTA.
          await expect(trigger).toBeFocused();
          const isSameNode = await page.evaluate(
            (el) => el === document.activeElement,
            triggerHandle,
          );
          expect(isSameNode, `focus restored to the original ${entry} trigger node`).toBe(true);

          await triggerHandle?.dispose();
        });
      }
    }
  });
}