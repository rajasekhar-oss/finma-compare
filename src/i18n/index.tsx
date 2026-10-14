import { createContext, useContext, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { en } from "./en";
import { useSiteContent } from "@/hooks/useSiteContent";

export type Locale = "en" | "fr";
export type Translations = typeof en;

interface I18nContextType {
  locale: Locale;
  t: Translations;
  switchLocale: (locale: Locale) => void;
  localePath: (path: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const translations = useSiteContent();

  const locale: Locale = location.pathname.startsWith("/fr") ? "fr" : "en";
  const t = translations[locale];

  const localePath = (path: string) => {
    return locale === "fr" ? `/fr${path === "/" ? "" : path}` : path;
  };

  const switchLocale = (newLocale: Locale) => {
    const currentPath = location.pathname;
    let basePath: string;

    if (locale === "fr") {
      basePath = currentPath.replace(/^\/fr/, "") || "/";
    } else {
      basePath = currentPath;
    }

    if (newLocale === "fr") {
      navigate(`/fr${basePath === "/" ? "" : basePath}`);
    } else {
      navigate(basePath);
    }
  };

  return (
    <I18nContext.Provider value={{ locale, t, switchLocale, localePath }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
