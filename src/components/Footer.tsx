import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";
import finmaLogo from "@/assets/finma-full-logo.webp";
import goldTierBadge from "@/assets/Gold Tier Badge.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Share2 } from "lucide-react";

const Footer = () => {
  const { t, localePath } = useI18n();
  const handleShare = async () => {
  if (navigator.share) {
    await navigator.share({
      title: "FINMA Canada",
      url: window.location.href,
    });
  } else {
    await navigator.clipboard.writeText(window.location.href);
    alert("Website link copied.");
  }
};

  const footerLinks = [
    {
      title: t.footer.servicesTitle,
      links: [
        { label: t.footer.maAdvisory, href: localePath("/services/ma-advisory") },
        { label: t.footer.corporateFinance, href: localePath("/services/corporate-finance") },
        { label: t.footer.corporateAccounting, href: localePath("/services/corporate-accounting-tax-returns") },
        { label: t.footer.syndicateManagement, href: localePath("/services/syndicate-management") },
        { label: t.footer.propertyManagement, href: localePath("/property-management") },
        { label: t.footer.ourApproach, href: localePath("/services/our-approach") },
        { label: t.footer.tekis, href: localePath("/services/tekis") },
      ],
      colClass: "lg:col-span-4",
    },
    {
      title: t.footer.companyTitle,
      links: [
        { label: t.footer.aboutFinma, href: localePath("/about") },
        { label: t.footer.whoWeAre, href: localePath("/who-we-are") },
        { label: t.footer.testimonials, href: localePath("/testimonials") },
        { label: t.footer.contactUs, href: localePath("/contact") },
      ],
      colClass: "lg:col-span-2",
    },
    {
      title: t.footer.resourcesTitle,
      links: [
        { label: t.footer.privacyPolicy, href: localePath("/privacy-policy"), target: "_blank" },
        { label: t.footer.termsOfService, href: localePath("/terms-of-service"), target: "_blank" },
      ],
      colClass: "lg:col-span-3",
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-3">
            <div className="flex w-fit flex-col items-start">
              <img src={finmaLogo} alt="FINMA" className="h-32 w-auto object-contain md:h-40 lg:h-48" />
              <img src={goldTierBadge} alt="Gold Tier" className="ml-4 -mt-6 h-16 w-auto object-contain md:ml-6 md:-mt-8 md:h-20 lg:ml-8 lg:-mt-10 lg:h-24" />
            </div>
            <p className="whitespace-pre-line text-sm font-sans leading-relaxed text-primary-foreground/85">{t.footer.address}</p>
           <div className="space-y-2 text-sm font-sans leading-relaxed text-primary-foreground/85">
  <p>
    <span className="font-semibold">
      {t.footer.telephoneLabel}{" "}
    </span>

    <a
      href={`tel:${t.footer.telephoneHref}`}
      className="transition-colors hover:text-accent hover:underline"
      aria-label={`Call FINMA at ${t.footer.telephoneDisplay}`}
    >
      {t.footer.telephoneDisplay}
    </a>
  </p>

  <p>
    <span className="font-semibold">
      {t.footer.faxLabel}{" "}
    </span>

    <span>{t.footer.faxDisplay}</span>
  </p>

  <p>
    <a
      href={`mailto:${t.footer.email}`}
      className="transition-colors hover:text-accent hover:underline"
      aria-label={`Email FINMA at ${t.footer.email}`}
    >
      {t.footer.email}
    </a>
  </p>
</div>
          </div>
          {footerLinks.map((col) => (
            <div key={col.title} className={col.colClass}>
              <h4 className="mb-5 font-sans text-sm font-semibold uppercase tracking-widest text-accent">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} target={(link as any).target} className="text-base font-sans leading-snug text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
               {col.title === t.footer.resourcesTitle && (
  <div className="mt-6 flex items-center gap-3">
    <a
      href="https://www.facebook.com/Finma.Ca"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit FINMA on Facebook"
     className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1877F2]/40 text-[#1877F2] transition-colors hover:bg-[#1877F2] hover:text-white"
    >
      <FaFacebookF size={17} />
    </a>

    <a
      href="https://www.linkedin.com/company/finma-canada/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit FINMA on LinkedIn"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0A66C2]/40 text-[#0A66C2] transition-colors hover:bg-[#0A66C2] hover:text-white"
    >
      <FaLinkedinIn size={18} />
    </a>

    <button
      type="button"
      onClick={handleShare}
      aria-label="Share FINMA website"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-primary"
    >
      <Share2 size={18} />
    </button>
  </div>
)}
            </div>
          ))}
        </div>
        
        <div className="mt-8 w-full">
          <p className="text-sm font-sans leading-relaxed text-primary-foreground/70">
            Corporate finance, M&A, and Accounting solutions for Canadian SMBs as well as Property Management solutions for Syndicates of co-ownerships in Quebec. Partner-led, hands-on execution from strategy to closing — practical accounting, rigorous finance, clear advice.
          </p>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-12">
          <p className="text-sm font-sans leading-relaxed text-primary-foreground/85">{t.footer.disclaimer}</p>
          <p className="mt-4 text-sm font-sans leading-relaxed text-primary-foreground/70">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
