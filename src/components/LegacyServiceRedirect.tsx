import { Navigate, useParams } from "react-router-dom";
import { useI18n } from "@/i18n";

/**
 * Redirects legacy nested service URLs to their new /services/* equivalents.
 * The old IA nested service pages under /financial-advisory/<slug> and
 * /property-management/<slug>. They now live under /services/<slug>.
 *
 * The splat segment is forwarded as-is, preserving any locale prefix.
 */
const LegacyServiceRedirect = () => {
  const params = useParams();
  const { localePath } = useI18n();
  const splat = params["*"] ?? "";

  if (!splat) {
    // No sub-path: send to home as a safe fallback.
    return <Navigate to={localePath("/")} replace />;
  }

  return <Navigate to={localePath(`/services/${splat}`)} replace />;
};

export default LegacyServiceRedirect;