import { useEffect } from "react";
import { useI18n } from "@/i18n";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

const SEOHead = ({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  ogType,
  ogImage,
  twitterTitle,
  twitterDescription,
}: SEOHeadProps) => {
  const { locale } = useI18n();

  useEffect(() => {
    document.title = title;

    const setMetaName = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setMetaProperty = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMetaName("description", description);

    const origin = window.location.origin;
    const canonicalUrl = `${origin}${path === "/" ? "" : path}`;

    // Reset OG/Twitter title & description per route to avoid sticky metadata in SPA
    setMetaProperty("og:title", ogTitle || title);
    setMetaProperty("og:description", ogDescription || description);
    if (ogType) setMetaProperty("og:type", ogType);
    if (ogImage) setMetaProperty("og:image", ogImage);
    setMetaProperty("og:url", canonicalUrl);

    setMetaName("twitter:title", twitterTitle || ogTitle || title);
    setMetaName("twitter:description", twitterDescription || ogDescription || description);

    // Self-referencing canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // hreflang tags
    const removeOldHreflang = () => {
      document.querySelectorAll('link[hreflang]').forEach(el => el.remove());
    };
    removeOldHreflang();

    const addHreflang = (lang: string, href: string) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang;
      link.href = href;
      document.head.appendChild(link);
    };

    const basePath = path === "/" ? "" : path;
    addHreflang("en", `${origin}${basePath || "/"}`);
    addHreflang("fr", `${origin}/fr${basePath}`);
    addHreflang("x-default", `${origin}${basePath || "/"}`);

    // Update html lang
    document.documentElement.lang = locale;

    return () => removeOldHreflang();
  }, [
    title,
    description,
    path,
    locale,
    ogTitle,
    ogDescription,
    ogType,
    ogImage,
    twitterTitle,
    twitterDescription,
  ]);

  return null;
};

export default SEOHead;
