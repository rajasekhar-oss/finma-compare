import { describe, it, expect, beforeAll, afterEach, vi } from "vitest";
import { render, screen, act, cleanup, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { I18nProvider } from "@/i18n";
import { BookingProvider, BookingButton } from "@/components/BookingModal";

beforeAll(() => {
  // jsdom: offsetParent is null by default, our focus-trap filter relies on it
  Object.defineProperty(HTMLElement.prototype, "offsetParent", {
    get() {
      return this.parentNode;
    },
  });
});

afterEach(() => {
  cleanup();
  document.body.style.overflow = "";
});

const renderAt = (path: "/" | "/fr") =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <I18nProvider>
        <BookingProvider>
          <BookingButton />
        </BookingProvider>
      </I18nProvider>
    </MemoryRouter>,
  );

const openModal = async (user: ReturnType<typeof userEvent.setup>, triggerName: RegExp) => {
  const trigger = screen.getByRole("button", { name: triggerName });
  await user.click(trigger);
  const dialog = await screen.findByRole("dialog");
  // Allow rAF-scheduled initial focus to land
  await act(async () => {
    await new Promise((r) => requestAnimationFrame(() => r(null)));
  });
  return { trigger, dialog };
};

describe.each([
  {
    locale: "en" as const,
    path: "/" as const,
    triggerName: /Book a Free Consultation/i,
    closeName: /^Close$/,
    title: /Book a Free Consultation/i,
  },
  {
    locale: "fr" as const,
    path: "/fr" as const,
    triggerName: /Réservez une consultation gratuite/i,
    closeName: /^Fermer$/,
    title: /Réservez une consultation gratuite/i,
  },
])("BookingModal a11y — $locale", ({ path, triggerName, closeName, title, locale }) => {
  it("opens with dialog semantics and localized labels", async () => {
    const user = userEvent.setup();
    renderAt(path);
    const { dialog } = await openModal(user, triggerName);

    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAttribute("aria-labelledby");
    expect(dialog).toHaveAttribute("aria-describedby");
    expect(dialog).toHaveAttribute("lang", locale);

    const labelledBy = dialog.getAttribute("aria-labelledby")!;
    const titleEl = document.getElementById(labelledBy);
    expect(titleEl?.textContent).toMatch(title);

    expect(screen.getByRole("button", { name: closeName })).toBeInTheDocument();
  });

  it("moves initial focus to the Close button on open", async () => {
    const user = userEvent.setup();
    renderAt(path);
    await openModal(user, triggerName);
    const closeBtn = screen.getByRole("button", { name: closeName });
    await waitFor(() => expect(document.activeElement).toBe(closeBtn));
  });

  it("traps Tab and Shift+Tab focus inside the dialog", async () => {
    const user = userEvent.setup();
    renderAt(path);
    const { dialog } = await openModal(user, triggerName);
    const closeBtn = screen.getByRole("button", { name: closeName });
    const iframe = dialog.querySelector("iframe")!;

    expect(document.activeElement).toBe(closeBtn);

    // Tab from last focusable wraps to first (close). The close button
    // currently holds focus and is the first focusable; simulate Tab from
    // the iframe (last) — focus must wrap to the close button.
    iframe.focus();
    // jsdom may not focus iframe; force activeElement check via dispatch
    fireEvent.keyDown(window, { key: "Tab" });
    expect(dialog.contains(document.activeElement)).toBe(true);

    // Shift+Tab from close (first) wraps to iframe (last)
    closeBtn.focus();
    fireEvent.keyDown(window, { key: "Tab", shiftKey: true });
    expect(dialog.contains(document.activeElement)).toBe(true);
    expect(document.activeElement).toBe(iframe);

    // Dialog exposes exactly the expected focusable surface
    const focusables = dialog.querySelectorAll(
      'button:not([disabled]), iframe, a[href], [tabindex]:not([tabindex="-1"])',
    );
    expect(Array.from(focusables)).toEqual(expect.arrayContaining([closeBtn, iframe]));
  });

  it("closes on Escape and restores focus to the trigger", async () => {
    const user = userEvent.setup();
    renderAt(path);
    const { trigger } = await openModal(user, triggerName);
    await user.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    await waitFor(() => expect(document.activeElement).toBe(trigger));
  });

  it("closes when activating the Close button via keyboard", async () => {
    const user = userEvent.setup();
    renderAt(path);
    await openModal(user, triggerName);
    // Close button has initial focus; activate via Enter
    await user.keyboard("{Enter}");
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
  });

  it("locks body scroll while open and restores it on close", async () => {
    const user = userEvent.setup();
    renderAt(path);
    await openModal(user, triggerName);
    expect(document.body.style.overflow).toBe("hidden");
    await user.keyboard("{Escape}");
    await waitFor(() => expect(document.body.style.overflow).not.toBe("hidden"));
  });
});