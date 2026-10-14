import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { I18nProvider } from "@/i18n";
import { BookingProvider } from "@/components/BookingModal";
import Index from "./pages/Index";
import FinancialAdvisory from "./pages/FinancialAdvisory";
import PropertyManagement from "./pages/PropertyManagement";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MAAdvisory from "./pages/MAAdvisory";
import CorporateFinance from "./pages/CorporateFinance";
import SyndicateManagement from "./pages/SyndicateManagement";
import WhoWeAre from "./pages/WhoWeAre";
import OurApproach from "./pages/OurApproach";
import Tekis from "./pages/Tekis";
import Testimonials from "./pages/Testimonials";
import Booking from "@/pages/Booking";
import NotFound from "./pages/NotFound";
import LegacyServiceRedirect from "./components/LegacyServiceRedirect";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const LocalizedRoutes = () => (
  <I18nProvider>
    <BookingProvider>
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/financial-advisory" element={<FinancialAdvisory />} />
      <Route path="/property-management" element={<PropertyManagement />} />
      <Route path="/about" element={<About />} />
      <Route path="/who-we-are" element={<WhoWeAre />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services/ma-advisory" element={<MAAdvisory />} />
      <Route path="/services/corporate-finance" element={<CorporateFinance />} />
      <Route path="/services/our-approach" element={<OurApproach />} />
      <Route path="/services/tekis" element={<Tekis />} />
      <Route path="/services/syndicate-management" element={<SyndicateManagement />} />
      <Route path="/testimonials" element={<Testimonials />} />
      {/* Legacy nested service routes → /services/* */}
      <Route path="/financial-advisory/*" element={<LegacyServiceRedirect />} />
      <Route path="/property-management/*" element={<LegacyServiceRedirect />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BookingProvider>
  </I18nProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* French routes */}
          <Route path="/fr/*" element={<LocalizedRoutes />} />
          {/* English routes (default) */}
          <Route path="/*" element={<LocalizedRoutes />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
