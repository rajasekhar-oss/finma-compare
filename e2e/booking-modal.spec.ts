import { test, expect, Page } from "@playwright/test";

const LOCALES = [
  {
    name: "en",
    path: "/",
    triggerName: /Book a Free Consultation/i,
    closeName: /^Close$/,
    title: /Book a Free Consultation/i,
  },
  {
    name: "fr",
    path: "/fr",
    triggerName: /Réservez une consultation gratuite/i,
    closeName: /^Fermer$/,
    title: /Réservez une consultation gratuite/i,
  },
] as const;

const focusedState = (page: Page) =>
  page.evaluate(() => {
    const el = document.activeElement as HTMLElement | null;
    return {
      tag: el?.tagName ?? null,
      label: el?.getAttribute("aria-label") ?? null,
      isInDialog: !!el?.closest('[role="dialog"]'),
    };
  });

for (const L of LOCALES) {
  test.describe(`Booking modal a11y — ${L.name}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(L.path);
      const trigger = page.getByRole("button", { name: L.triggerName }).first();
      await trigger.waitFor({ state: "visible" });
      await trigger.click();
      await expect(page.getByRole("dialog")).toBeVisible();
    });

    test("dialog has accessible name, lang and initial focus on Close", async ({ page }) => {
      const dialog = page.getByRole("dialog");
      await expect(dialog).toHaveAttribute("aria-modal", "true");
      await expect(dialog).toHaveAttribute("lang", L.name);
      await expect(dialog).toHaveAccessibleName(L.title);
      const close = dialog.getByRole("button", { name: L.closeName });
      await expect(close).toBeFocused();
    });

    test("Tab and Shift+Tab keep focus inside the dialog", async ({ page }) => {
      const dialog = page.getByRole("dialog");
      const close = dialog.getByRole("button", { name: L.closeName });
      await expect(close).toBeFocused();

      for (let i = 0; i < 6; i++) {
        await page.keyboard.press("Tab");
        const state = await focusedState(page);
        expect(state.isInDialog, `Tab #${i + 1} kept focus in dialog`).toBe(true);
      }

      for (let i = 0; i < 6; i++) {
        await page.keyboard.press("Shift+Tab");
        const state = await focusedState(page);
        expect(state.isInDialog, `Shift+Tab #${i + 1} kept focus in dialog`).toBe(true);
      }
    });

    test("Escape closes the dialog and restores focus to the trigger", async ({ page }) => {
      await page.keyboard.press("Escape");
      await expect(page.getByRole("dialog")).toBeHidden();
      const trigger = page.getByRole("button", { name: L.triggerName }).first();
      await expect(trigger).toBeFocused();
    });

    test("Enter on Close button dismisses the dialog", async ({ page }) => {
      await page.keyboard.press("Enter");
      await expect(page.getByRole("dialog")).toBeHidden();
    });

    test("body scroll is locked while open and released on close", async ({ page }) => {
      await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("hidden");
      await page.keyboard.press("Escape");
      await expect(page.getByRole("dialog")).toBeHidden();
      await expect
        .poll(() => page.evaluate(() => document.body.style.overflow))
        .not.toBe("hidden");
    });
  });
}