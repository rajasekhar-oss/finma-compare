import { createContext, useContext, useState, useEffect, useRef, useId, ReactNode } from "react";
import { X, Calendar } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/i18n";
import { BOOKING_URL } from "@/lib/constants";

interface BookingCtx {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const Ctx = createContext<BookingCtx | null>(null);

export const useBooking = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useBooking must be used within BookingProvider");
  return c;
};

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setOpen] = useState(false);
  const { locale, t } = useI18n();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    // Move initial focus into the dialog
    requestAnimationFrame(() => closeBtnRef.current?.focus());

    const getFocusable = (): HTMLElement[] => {
      const root = dialogRef.current;
      if (!root) return [];
      return Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], area[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]'
        )
      ).filter((el) => !el.hasAttribute("inert") && el.offsetParent !== null || el.tagName === "IFRAME");
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = getFocusable();
      if (focusables.length === 0) {
        e.preventDefault();
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      const root = dialogRef.current;
      // If focus escaped the dialog (e.g., into iframe content we can't observe), bring it back
      if (!root || !root.contains(active)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
        return;
      }
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      // Restore focus to the element that opened the modal
      lastFocusedRef.current?.focus?.();
    };
  }, [isOpen]);

  const title = t.ui.bookingTitle;
  const subtitle = t.ui.bookingSubtitle;

  return (
    <Ctx.Provider value={{ open: () => setOpen(true), close: () => setOpen(false), isOpen }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-dark/80 p-4 backdrop-blur-sm md:p-8"
            onClick={() => setOpen(false)}
          >
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={descId}
              lang={locale}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-card shadow-elegant"
            >
              <div className="flex items-start justify-between border-b border-border bg-primary px-6 py-5 text-primary-foreground md:px-8">
                <div className="flex items-center gap-4">
                  <div className="hidden h-11 w-11 items-center justify-center rounded-full bg-accent/20 text-accent md:flex">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 id={titleId} className="font-serif text-xl md:text-2xl">{title}</h2>
                    <p id={descId} className="mt-0.5 font-sans text-xs text-primary-foreground/70 md:text-sm">{subtitle}</p>
                  </div>
                </div>
                <button
                  ref={closeBtnRef}
                  onClick={() => setOpen(false)}
                  aria-label={t.ui.close}
                  className="rounded-full p-2 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <iframe
                src={BOOKING_URL}
                title={t.ui.bookingFrameTitle}
                className="h-full w-full flex-1 border-0 bg-card"
                allow="camera; microphone; autoplay; encrypted-media; fullscreen; payment"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
};

interface BookingButtonProps {
  variant?: "gold" | "ghost" | "outline" | "compact";
  label?: string;
  className?: string;
}

export const BookingButton = ({ variant = "gold", label, className = "" }: BookingButtonProps) => {
  // const { open } = useBooking();
  const { t } = useI18n();
  const text = label ?? t.ui.bookingTitle;

  const base = "group inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-wide transition-all duration-300 ease-out-expo whitespace-nowrap";
  const styles: Record<string, string> = {
    gold: "rounded-full gold-gradient px-6 py-2.5 text-xs text-accent-foreground shadow-gold hover:scale-[1.015] hover:shadow-[0_18px_50px_-12px_hsl(37_37%_55%/0.55)]",
    outline: "rounded-full border border-primary-foreground/30 px-8 py-3.5 text-sm text-primary-foreground hover:border-accent hover:bg-accent/10 hover:text-accent",
    ghost: "rounded-full px-5 py-2 text-sm text-primary-foreground hover:text-accent",
    compact: "rounded-full gold-gradient px-4 py-2 text-xs text-accent-foreground shadow-gold hover:scale-[1.02]",
  };
  return (
   <a
  href="/booking"
  target="_blank"
  rel="noopener noreferrer"
  className={`${base} ${styles[variant]} ${className}`}
>
  <Calendar className="h-4 w-4" />
  <span>{text}</span>
</a>
  );
};

export const StickyBookingButton = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 z-40 md:bottom-8 md:right-8"
        >
          <BookingButton />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
