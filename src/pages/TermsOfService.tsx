import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useI18n } from "@/i18n";

const TermsOfService = () => {
  const { locale } = useI18n();

  const isEn = locale === "en";

  return (
    <Layout>
      <SEOHead
        title={isEn ? "Terms of Service - FINMA Canada" : "Conditions d'utilisation - FINMA Canada"}
        description={
          isEn
            ? "Read the Terms of Use governing your access to and use of the website finma.ca operated by Finma Inc. / Finma Canada Inc."
            : "Lisez les conditions d'utilisation régissant votre accès et votre utilisation du site Web finma.ca exploité par Finma Inc. / Finma Canada Inc."
        }
        path="/terms-of-service"
      />

      <section className="relative overflow-hidden bg-primary pt-36 pb-12 md:pt-40 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.08),transparent_70%)]" />
        <div className="relative container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-4 h-px w-12 bg-accent" />
            <h1 className="font-serif text-3xl font-bold text-primary-foreground md:text-5xl">
              {isEn ? "Terms of Service" : "Conditions d'utilisation"}
            </h1>
            <p className="mt-4 font-sans text-sm text-primary-foreground/60">
              {isEn ? "Effective Date: August 20, 2026" : "Date d'entrée en vigueur : 20 août 2026"}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-3xl prose prose-slate dark:prose-invert font-sans text-foreground/80 leading-relaxed space-y-8">
            {isEn ? (
              <>
                <p>
                  These Terms of Use (<strong>“Terms”</strong>) govern your access to and use of the website <a href="https://finma.ca" className="text-secondary hover:underline">finma.ca</a> and any affiliated sub-domains, tools, documents, calculators, portals or downloadable materials (collectively the <strong>“Site”</strong>) operated by Finma Inc. / Finma Canada Inc. (<strong>“FINMA”</strong>, <strong>“we”</strong>, <strong>“us”</strong>, <strong>“our”</strong>).
                </p>
                <p>
                  By accessing or using any part of the Site, you confirm that you have read, understood and agree to be bound by these Terms and by our Privacy Policy. If you do not agree, you must discontinue use of the Site immediately.
                </p>

                <hr className="border-border my-8" />

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.1 Nature of Services; Non-Affiliation with Swiss FINMA
                </h2>
                <p>
                  FINMA is a Canada-based boutique firm offering corporate finance and M&A advisory, managerial accounting, and full-service property-management solutions primarily to Canadian small and medium-sized businesses and syndicates of co-ownership. Services are delivered from our office in Laval, Québec, and across Canada.
                </p>
                <p>
                  <strong>Not the Swiss regulator:</strong> Finma Inc. has no affiliation whatsoever with the Swiss Financial Market Supervisory Authority (commonly known as “FINMA”). References to “FINMA” on this Site mean Finma Inc. / Finma Canada Inc., a Canadian private company. We are not regulated by, endorsed by, or connected to the Swiss authority.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.2 No Advice, Offer or Solicitation
                </h2>
                <p>
                  All content on the Site is provided for general informational and educational purposes only. It does not constitute:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personalized financial, investment, legal, tax, accounting or property-management advice;</li>
                  <li>An offer to buy or sell securities or any other financial instrument;</li>
                  <li>A solicitation to enter into any transaction or engagement; or</li>
                  <li>The creation of a client–advisor or fiduciary relationship.</li>
                </ul>
                <p className="mt-4">
                  Any professional engagement with FINMA requires a separate written mandate or engagement letter. You should seek independent professional advice tailored to your specific circumstances before making any decision.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.3 Intellectual Property
                </h2>
                <p>
                  All content on the Site (text, graphics, logos, images, downloadable documents, design and software) is the property of Finma Inc. or its licensors and is protected by Canadian and international copyright, trademark and other intellectual-property laws. You may view and print limited portions for your personal, non-commercial use only. Any other reproduction, distribution, modification, public display or commercial exploitation without our prior written consent is prohibited.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.4 Acceptable Use
                </h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Site for any unlawful purpose or in violation of these Terms;</li>
                  <li>Attempt to gain unauthorized access to any portion of the Site, servers or networks;</li>
                  <li>Scrape, harvest, or use automated means to collect data from the Site without our prior written consent;</li>
                  <li>Transmit any virus, malware or other harmful code;</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation with FINMA.</li>
                </ul>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.5 Disclaimer of Warranties
                </h2>
                <p>
                  THE SITE AND ALL CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, COMPLETENESS, NON-INFRINGEMENT OR AVAILABILITY. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.6 Limitation of Liability
                </h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, FINMA INC., ITS DIRECTORS, OFFICERS, EMPLOYEES AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE OR EXEMPLARY DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF (OR INABILITY TO USE) THE SITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THE SITE SHALL NOT EXCEED ONE HUNDRED CANADIAN DOLLARS (CAD $100).
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.7 Indemnification
                </h2>
                <p>
                  You agree to indemnify, defend and hold harmless Finma Inc. and its officers, directors, employees and agents from and against any claims, liabilities, damages, losses and expenses (including reasonable legal fees) arising out of or related to your use of the Site, your violation of these Terms, or your violation of any rights of a third party.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.8 Governing Law and Jurisdiction
                </h2>
                <p>
                  These Terms are governed by the laws of the Province of Québec and the federal laws of Canada applicable therein, without regard to conflict-of-law principles. Any dispute arising out of or relating to these Terms or the Site shall be submitted to the exclusive jurisdiction of the courts of the Province of Québec sitting in the District of Montréal or Laval.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.9 Changes to the Terms
                </h2>
                <p>
                  We may revise these Terms at any time by posting an updated version on the Site. The “Effective Date” will be revised accordingly. Your continued use of the Site after the posting of changes constitutes acceptance of the revised Terms.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.10 Contact
                </h2>
                <p>
                  Questions about these Terms may be directed to: Finma Inc., 3030 Curé-Labelle, Suite 300, Laval, QC H7P 0H9, Tel: 1.877.FINMA.CA / 1.438.228.1139.
                </p>
              </>
            ) : (
              <>
                <p>
                  Les présentes conditions d'utilisation (<strong>« Conditions »</strong>) régissent votre accès et votre utilisation du site Web <a href="https://finma.ca" className="text-secondary hover:underline">finma.ca</a> et de tous les sous-domaines, outils, documents, calculateurs, portails ou documents téléchargeables associés (collectivement le <strong>« Site »</strong>) exploités par Finma Inc. / Finma Canada Inc. (<strong>« FINMA »</strong>, <strong>« nous »</strong>, <strong>« notre »</strong>).
                </p>
                <p>
                  En accédant au Site ou en l'utilisant, vous confirmez que vous avez lu, compris et accepté d'être lié par ces Conditions et par notre politique de confidentialité. Si vous n'acceptez pas ces conditions, vous devez cesser immédiatement d'utiliser le Site.
                </p>

                <hr className="border-border my-8" />

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.1 Nature des services; Non-affiliation avec la FINMA suisse
                </h2>
                <p>
                  FINMA est un cabinet-boutique basé au Canada qui offre des solutions de finance d'entreprise, de conseil en fusions et acquisitions, de comptabilité de gestion et de gestion immobilière complète, principalement aux petites et moyennes entreprises canadiennes et aux syndicats de copropriété. Les services sont fournis à partir de nos bureaux de Laval, au Québec, et partout au Canada.
                </p>
                <p>
                  <strong>Pas le régulateur suisse :</strong> Finma Inc. n'a aucune affiliation de quelque nature que ce soit avec l'Autorité fédérale de surveillance des marchés financiers de Suisse (communément appelée « FINMA »). Les références à « FINMA » sur ce site désignent Finma Inc. / Finma Canada Inc., une société privée canadienne. Nous ne sommes pas réglementés, approuvés ou liés à l'autorité suisse.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.2 Absence de conseils, d'offres ou de sollicitation
                </h2>
                <p>
                  Tout le contenu du Site est fourni uniquement à des fins d'information générale et d'éducation. Il ne constitue pas :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Des conseils personnalisés en matière financière, d'investissement, juridique, fiscale, comptable ou de gestion immobilière ;</li>
                  <li>Une offre d'achat ou de vente de titres ou de tout autre instrument financier ;</li>
                  <li>Une sollicitation pour conclure une transaction ou un engagement ; ou</li>
                  <li>La création d'une relation client-conseiller ou fiduciaire.</li>
                </ul>
                <p className="mt-4">
                  Tout engagement professionnel avec FINMA nécessite un mandat écrit ou une lettre d'engagement distincts. Vous devriez obtenir des conseils professionnels indépendants et adaptés à votre situation particulière avant de prendre toute décision.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.3 Propriété intellectuelle
                </h2>
                <p>
                  Tout le contenu du Site (textes, graphiques, logos, images, documents téléchargeables, conception et logiciels) est la propriété de Finma Inc. ou de ses concédants de licence et est protégé par les lois canadiennes et internationales sur le droit d'auteur, les marques de commerce et autres lois sur la propriété intellectuelle. Vous pouvez consulter et imprimer des parties limitées pour votre usage personnel et non commercial uniquement. Toute autre reproduction, distribution, modification, affichage public ou exploitation commerciale sans notre consentement écrit préalable est interdit.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.4 Utilisation acceptable
                </h2>
                <p>Vous acceptez de ne pas :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Utiliser le Site à des fins illégales ou en violation des présentes Conditions ;</li>
                  <li>Tenter d'obtenir un accès non autorisé à une partie du Site, aux serveurs ou aux réseaux ;</li>
                  <li>Extraire des données (scraping), moissonner ou utiliser des moyens automatisés pour collecter des données du Site sans notre consentement écrit préalable ;</li>
                  <li>Transmettre des virus, logiciels malveillants ou tout autre code nuisible ;</li>
                  <li>Usurper l'identité d'une personne ou d'une entité ou présenter faussement votre affiliation avec la FINMA.</li>
                </ul>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.5 Exclusion de garanties
                </h2>
                <p>
                  LE SITE ET TOUT SON CONTENU SONT FOURNIS « TELS QUELS » ET « TELS QU'ILS SONT DISPONIBLES », SANS AUCUNE GARANTIE D'AUCUNE SORTE, EXPRESSE OU IMPLICITE, Y COMPRIS, SANS S'Y LIMITER, LES GARANTIES DE QUALITÉ MARCHANDE, D'ADAPTATION À UN USAGE PARTICULIER, D'EXACTITUDE, D'EXHAUSTIVITÉ, D'ABSENCE DE CONTREFAÇON OU DE DISPONIBILITÉ. NOUS NE GARANTISSONS PAS QUE LE SITE SERA SANS INTERRUPTION, EXEMPT D'ERREURS OU DE VIRUS OU D'AUTRES COMPOSANTS NUISIBLES.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.6 Limitation de responsabilité
                </h2>
                <p>
                  DANS LA MESURE MAXIMALE PERMISE PAR LA LOI APPLICABLE, FINMA INC., SES ADMINISTRATEURS, DIRIGEANTS, EMPLOYÉS ET AGENTS NE SERONT PAS RESPONSABLES DES DOMMAGES INDIRECTS, ACCESSOIRES, SPÉCIAUX, CONSÉCUTIFS, PUNITIFS OU EXEMPLAIRES, OU DES PERTES DE PROFITS, DE REVENUS, DE DONNÉES OU DE CLIENTÈLE, DÉCOULANT DE OU LIÉS À VOTRE UTILISATION (OU INCAPACITÉ D'UTILISATION) DU SITE. NOTRE RESPONSABILITÉ TOTALE POUR TOUTE RÉCLAMATION DÉCOULANT DE OU LIÉE AU SITE NE DÉPASSERA PAS CENT DOLLARS CANADIENS (100 $ CAD).
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.7 Indemnisation
                </h2>
                <p>
                  Vous acceptez d'indemniser, de défendre et de dégager de toute responsabilité Finma Inc. ainsi que ses dirigeants, administrateurs, employés et agents contre toute réclamation, responsabilité, dommage, perte et dépense (y compris les frais juridiques raisonnables) découlant de ou liés à votre utilisation du Site, votre violation des présentes Conditions, ou votre violation de tout droit d'un tiers.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.8 Droit applicable et juridiction
                </h2>
                <p>
                  Ces Conditions sont régies par les lois de la province de Québec et les lois fédérales du Canada qui y sont applicables, sans égard aux principes de conflit de lois. Tout litige découlant de ou lié à ces Conditions ou au Site sera soumis à la juridiction exclusive des tribunaux de la province de Québec siégeant dans le district de Montréal ou de Laval.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.9 Modifications des conditions
                </h2>
                <p>
                  Nous pouvons réviser ces Conditions à tout moment en publiant une version mise à jour sur le Site. Votre utilisation continue du Site après la publication des modifications constitue votre acceptation des Conditions révisées.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  3.10 Contact
                </h2>
                <p>
                  Les questions concernant ces Conditions peuvent être adressées à : Finma Inc., 3030 Curé-Labelle, Bureau 300, Laval, QC H7P 0H9, Tél : 1.877.FINMA.CA / 1.438.228.1139.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
