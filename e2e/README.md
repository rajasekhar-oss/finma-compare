# End-to-end tests (Playwright)

Run locally:

```bash
# 1) Install browsers (first time only)
bunx playwright install --with-deps chromium

# 2) Run the suite — auto-builds the app and serves it on http://localhost:4173
bun run test:e2e
```

Run against an already-running server (e.g. the Lovable preview):

```bash
PLAYWRIGHT_BASE_URL="https://your-preview.lovable.app" bun run test:e2e
```

## What's covered

`booking-modal.spec.ts` opens the Booking modal from the homepage in both
English (`/`) and French (`/fr`) and asserts:

- Dialog has `role="dialog"`, `aria-modal="true"`, localized accessible name and `lang`
- Initial focus lands on the Close button
- Tab and Shift+Tab keep focus inside the dialog (focus trap)
- Escape closes the dialog and restores focus to the trigger
- Enter on the focused Close button dismisses the dialog
- `document.body` scroll lock is applied while open and released on close

`booking-entry-points.spec.ts` opens the modal from every homepage entry
point in EN and FR, and verifies focus is trapped from each:

- Header CTA (compact `BookingButton`)
- Hero slider CTA
- In-page CTA block (`CTABlock`)
- Sticky bottom-right CTA (after scrolling past 600 px)

It also drives the header language toggle to verify the modal renders in
the new locale after `/` → `/fr` and `/fr` → `/`.

`booking-close-mechanisms.spec.ts` opens the modal from the header in EN
and FR and asserts each close path behaves consistently:

- Escape, overlay click, and Close button each dismiss the dialog
- Focus is restored to the originating trigger after each close path
- `document.body` overflow is `hidden` while open and released on close
- Reopening after close re-locks body scroll

`booking-focus-restoration.spec.ts` runs the full matrix of
`{header, hero, ctaBlock, sticky} × {escape, overlay, closeButton}` for both
EN and FR (24 tests total). For each combination it captures the originating
trigger DOM node, opens the modal, closes via the chosen path, and asserts
`document.activeElement` is the exact same node — not another matching CTA
elsewhere on the page.

`booking-focus-restoration-cycles.spec.ts` repeats the open/close sequence
6 times per entry point (header, hero, ctaBlock, sticky) in both EN and FR,
rotating through Escape → overlay click → Close button → Escape → overlay
→ Close button. After every cycle it re-asserts:

- Dialog opens with the correct `lang`
- Body scroll lock is applied while open
- Focus is restored to the **exact same originating DOM node** (not just a
  matching CTA elsewhere on the page)
- Body scroll lock is released after close