import { test, expect, type Page } from "@playwright/test";

const L = {
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
} as const;

const bodyOverflow = (page: Page) => page.evaluate(() => document.body.style.overflow);

const openFromHeader = async (page: Page, locale: keyof typeof L) => {
  const trigger = page.locator("header").getByRole("button", { name: L[locale].triggerName }).first();
  await trigger.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect.poll(() => bodyOverflow(page)).toBe("hidden");
  return trigger;
};

for (const locale of ["en", "fr"] as const) {
  test.describe(`Booking close mechanisms — ${locale}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(L[locale].path);
    });

    test("Escape closes, restores focus to trigger, unlocks body scroll", async ({ page }) => {
      const trigger = await openFromHeader(page, locale);
      await page.keyboard.press("Escape");
      await expect(page.getByRole("dialog")).toBeHidden();
      await expect(trigger).toBeFocused();
      await expect.poll(() => bodyOverflow(page)).not.toBe("hidden");
    });

    test("Close button closes, restores focus to trigger, unlocks body scroll", async ({ page }) => {
      const trigger = await openFromHeader(page, locale);
      const close = page.getByRole("dialog").getByRole("button", { name: L[locale].closeName });
      await close.click();
      await expect(page.getByRole("dialog")).toBeHidden();
      await expect(trigger).toBeFocused();
      await expect.poll(() => bodyOverflow(page)).not.toBe("hidden");
    });

    test("Overlay click closes, restores focus to trigger, unlocks body scroll", async ({ page }) => {
      const trigger = await openFromHeader(page, locale);
      // The backdrop is the parent of [role=dialog]; click a corner well outside the dialog content.
      await page.mouse.click(8, 8);
      await expect(page.getByRole("dialog")).toBeHidden();
      await expect(trigger).toBeFocused();
      await expect.poll(() => bodyOverflow(page)).not.toBe("hidden");
    });

    test("Reopen after close re-locks body scroll", async ({ page }) => {
      const trigger = await openFromHeader(page, locale);
      await page.keyboard.press("Escape");
      await expect(page.getByRole("dialog")).toBeHidden();
      await expect.poll(() => bodyOverflow(page)).not.toBe("hidden");

      await trigger.click();
      await expect(page.getByRole("dialog")).toBeVisible();
      await expect.poll(() => bodyOverflow(page)).toBe("hidden");
    });
  });
}