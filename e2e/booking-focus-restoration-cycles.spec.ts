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

const triggerFor = (page: Page, locale: LocaleKey, entry: EntryKey): Locator => {
  const name = L[locale].triggerName;
  switch (entry) {
    case "header":
      return page.locator("header").getByRole("button", { name }).first();
    case "hero":
      return page.locator("section").first().getByRole("button", { name }).first();
    case "ctaBlock":
      return page.locator("section.bg-primary").getByRole("button", { name }).last();
    case "sticky":
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
// Rotate close paths so every cycle exercises a different dismissal mechanism
const CYCLE_ORDER: ClosePath[] = [
  "escape",
  "overlay",
  "closeButton",
  "escape",
  "overlay",
  "closeButton",
];

for (const locale of ["en", "fr"] as const) {
  test.describe(`Focus restoration across repeated open/close cycles — ${locale}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(L[locale].path);
    });

    for (const entry of ENTRIES) {
      test(`${entry} CTA — focus returns to the same node across ${CYCLE_ORDER.length} open/close cycles`, async ({
        page,
      }) => {
        const trigger = triggerFor(page, locale, entry);
        await prepareEntry(page, entry, trigger);

        // Snapshot the originating DOM node once — it must remain the focus target after every cycle
        const triggerHandle = await trigger.elementHandle();
        expect(triggerHandle, "trigger element handle resolved").not.toBeNull();

        const dialog = page.getByRole("dialog");

        for (let i = 0; i < CYCLE_ORDER.length; i++) {
          const close = CYCLE_ORDER[i];

          await trigger.click();
          await expect(dialog, `dialog visible on cycle ${i + 1}`).toBeVisible();
          await expect(dialog).toHaveAttribute("lang", locale);
          await expect
            .poll(() => page.evaluate(() => document.body.style.overflow))
            .toBe("hidden");

          await closeVia(page, close, locale);
          await expect(dialog, `dialog hidden on cycle ${i + 1} via ${close}`).toBeHidden();

          // Focus must return to the originating CTA — the exact same DOM node, every cycle
          await expect(trigger, `focused on cycle ${i + 1} via ${close}`).toBeFocused();
          const isSameNode = await page.evaluate(
            (el) => el === document.activeElement,
            triggerHandle,
          );
          expect(
            isSameNode,
            `cycle ${i + 1} via ${close}: focus restored to the original ${entry} trigger node`,
          ).toBe(true);

          // Body scroll lock must release between cycles
          await expect
            .poll(
              () => page.evaluate(() => document.body.style.overflow),
              { message: `body unlocked after cycle ${i + 1}` },
            )
            .not.toBe("hidden");
        }

        await triggerHandle?.dispose();
      });
    }
  });
}