import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useI18n } from "@/i18n";

const PrivacyPolicy = () => {
  const { locale } = useI18n();

  const isEn = locale === "en";

  return (
    <Layout>
      <SEOHead
        title={isEn ? "Privacy Policy - FINMA Canada" : "Politique de confidentialité - FINMA Canada"}
        description={
          isEn
            ? "Read the Privacy Policy for Finma Inc. and Finma Canada Inc. (FINMA) outlining our compliance with PIPEDA and Quebec Law 25."
            : "Lisez la politique de confidentialité de Finma Inc. et Finma Canada Inc. (FINMA) décrivant notre conformité avec la LPRPDE et la Loi 25 du Québec."
        }
        path="/privacy-policy"
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
              {isEn ? "Privacy Policy" : "Politique de confidentialité"}
            </h1>
            <p className="mt-4 font-sans text-sm text-primary-foreground/60">
              {isEn ? "Effective Date: August 20, 2026" : "Date d'entrée en vigueur : 20 août 2026"} &bull; {isEn ? "Version 1.0" : "Version 1.0"}
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
                  Finma Inc. and Finma Canada Inc. (collectively <strong>“FINMA”</strong>, <strong>“we”</strong>, <strong>“us”</strong>, or <strong>“our”</strong>) are committed to protecting the privacy and personal information of individuals who visit our website at <a href="https://finma.ca" className="text-secondary hover:underline">finma.ca</a> (and any sub-domains), contact us, or engage our services. This Privacy Policy explains how we collect, use, disclose, retain, safeguard, and otherwise handle personal information in the course of our commercial activities.
                </p>
                <p>
                  This Policy is designed to comply with the federal Personal Information Protection and Electronic Documents Act (<strong>“PIPEDA”</strong>) and the Quebec Act respecting the protection of personal information in the private sector, as amended by Law 25 (the <strong>“Quebec Privacy Act”</strong>).
                </p>

                <hr className="border-border my-8" />

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.1 Privacy Officer / Person Responsible for the Protection of Personal Information
                </h2>
                <p>
                  In accordance with Quebec Law 25, Finma Inc. has designated a person responsible for the protection of personal information. Unless otherwise designated in writing, this responsibility rests with the most senior officer of the organization.
                </p>
                <div className="bg-muted p-6 rounded border border-border mt-4 font-sans text-sm">
                  <p className="font-semibold text-foreground">Privacy Officer</p>
                  <p>Finma Inc.</p>
                  <p>3030 Curé-Labelle, Suite 300</p>
                  <p>Laval, Québec H7P 0H9 Canada</p>
                  <p className="mt-2">
                    <strong>Telephone:</strong> 1.877.FINMA.CA / 1.438.228.1139
                  </p>
                  <p>
                    <strong>Email:</strong> <a href="mailto:privacy@finma.ca" className="text-secondary hover:underline">privacy@finma.ca</a>
                  </p>
                </div>
                <p className="mt-4">
                  You may contact the Privacy Officer to exercise your rights, ask questions about this Policy, or submit a complaint regarding our handling of personal information.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.2 Scope of this Policy
                </h2>
                <p>This Policy applies to personal information collected through:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our website <a href="https://finma.ca" className="text-secondary hover:underline">finma.ca</a> and any related sub-domains or portals;</li>
                  <li>Online contact forms, consultation request forms, and email communications;</li>
                  <li>Telephone or in-person interactions that are linked to our website presence; and</li>
                  <li>Any other technological means by which we collect personal information in the course of commercial activity.</li>
                </ul>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.3 Categories of Personal Information We Collect
                </h2>
                <p>Depending on how you interact with us, we may collect the following categories of personal information:</p>
                
                <h3 className="font-serif text-lg font-semibold text-foreground mt-4">Identity and Contact Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full name, job title, company or organization name;</li>
                  <li>Email address, telephone number, mailing address;</li>
                  <li>Any other information you voluntarily provide in a message or form.</li>
                </ul>

                <h3 className="font-serif text-lg font-semibold text-foreground mt-4">Technical and Usage Data (collected automatically)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address, browser type and version, operating system, device type;</li>
                  <li>Pages visited, time and date of visit, time spent on pages, referring URL;</li>
                  <li>Approximate geolocation derived from IP address (city/region level);</li>
                  <li>Cookie identifiers and similar tracking technologies.</li>
                </ul>

                <h3 className="font-serif text-lg font-semibold text-foreground mt-4">Information Related to Professional Engagements</h3>
                <p>
                  When you engage our corporate finance, M&A advisory, managerial accounting, or property-management services, we may collect additional information necessary to perform the mandate (e.g., business financial information, ownership details, property records). Such information is handled under separate engagement letters and professional confidentiality obligations and is outside the pure website scope of this Policy, although the same protective principles apply.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.4 Purposes for Collection, Use and Disclosure
                </h2>
                <p>We collect and use personal information only for purposes that a reasonable person would consider appropriate in the circumstances, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Responding to inquiries and providing requested information or free consultations;</li>
                  <li>Delivering our professional services (corporate finance, M&A advisory, managerial accounting, property management);</li>
                  <li>Managing client relationships and fulfilling contractual obligations;</li>
                  <li>Improving the functionality, security and user experience of our website (analytics);</li>
                  <li>Sending service-related communications and, with your express consent, marketing or educational content;</li>
                  <li>Complying with legal, regulatory, tax or accounting obligations;</li>
                  <li>Protecting our rights, detecting and preventing fraud or security incidents.</li>
                </ul>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.5 Consent
                </h2>
                <p>
                  We obtain meaningful consent before collecting, using or disclosing personal information, except where the law permits or requires collection without consent (e.g., certain legal investigations or emergencies).
                </p>
                <p>
                  Express consent is required for non-essential cookies, online behavioural advertising, and marketing communications under CASL and Quebec Law 25.
                </p>
                <p>
                  Consent must be free, informed, specific to the purpose, and given in a clear manner. Pre-checked boxes or vague “by continuing you agree” statements do not constitute valid consent for non-essential processing under Quebec Law 25.
                </p>
                <p>
                  You may withdraw consent at any time, subject to legal or contractual restrictions and reasonable notice. Withdrawal of consent for non-essential cookies or marketing will not affect the lawfulness of processing based on consent before its withdrawal, nor will it prevent you from using the core informational content of the website.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.6 Disclosure and Sharing of Personal Information
                </h2>
                <p>
                  We do not sell, rent or trade personal information. We may disclose personal information to the following categories of recipients only as necessary for the purposes stated above:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers who perform services on our behalf (website hosting, email delivery, analytics platforms, CRM systems, cloud storage). These providers are contractually required to protect the information and use it only for the purposes we specify;</li>
                  <li>Professional advisors (lawyers, accountants, consultants) when necessary to perform a mandate or protect our legal interests;</li>
                  <li>Regulatory or law-enforcement authorities when required by law, court order, or to protect rights, property or safety;</li>
                  <li>Successors in the event of a merger, acquisition or sale of assets, subject to appropriate confidentiality protections.</li>
                </ul>
                <p className="mt-4">
                  <strong>Cross-border transfers:</strong> Some of our service providers may process or store personal information outside Québec or outside Canada. When personal information of Québec residents is communicated outside Québec, we conduct a privacy impact assessment (PIA) as required by Law 25 and implement contractual and technical safeguards to ensure a level of protection comparable to that required in Québec.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.7 Retention and Destruction
                </h2>
                <p>
                  We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law (including limitation periods for potential claims and professional record-keeping obligations).
                </p>
                <p>Typical retention periods:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Website inquiry / contact-form data: up to 24 months after last contact, unless a client relationship is established;</li>
                  <li>Client engagement files: duration of the mandate plus applicable limitation periods (generally 3–7 years or longer if required by professional rules);</li>
                  <li>Server logs and analytics data: typically 12–26 months, depending on the tool.</li>
                </ul>
                <p className="mt-4">
                  When personal information is no longer required, we securely destroy it or irreversibly anonymize it so that it can no longer be associated with an identifiable individual.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.8 Security Safeguards
                </h2>
                <p>
                  We implement reasonable administrative, technical and physical safeguards appropriate to the sensitivity of the information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit (HTTPS/TLS);</li>
                  <li>Access controls and least-privilege principles for staff and contractors;</li>
                  <li>Secure hosting environments and regular software updates;</li>
                  <li>Staff awareness of confidentiality obligations;</li>
                  <li>Incident-response procedures for confidentiality breaches.</li>
                </ul>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.9 Your Rights
                </h2>
                <p>
                  Under PIPEDA and the Quebec Privacy Act (Law 25), you have the following rights with respect to your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> to be informed of the existence, use and disclosure of your personal information and to obtain a copy;</li>
                  <li><strong>Correction:</strong> to request correction of inaccurate, incomplete or ambiguous information;</li>
                  <li><strong>Deletion / Destruction:</strong> to request deletion or destruction when the information is no longer needed or consent is withdrawn (subject to legal retention requirements);</li>
                  <li><strong>Withdrawal of consent:</strong> at any time, with reasonable notice;</li>
                  <li><strong>Data portability:</strong> (Quebec Law 25) to receive computerized personal information in a structured, commonly used format, or to have it transmitted to another organization, where applicable;</li>
                  <li><strong>De-indexing:</strong> (Quebec Law 25) in certain circumstances relating to search-engine results;</li>
                  <li><strong>Complaint:</strong> to lodge a complaint with us, with the Commission d’accès à l’information du Québec (CAI), or with the Office of the Privacy Commissioner of Canada.</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, contact the Privacy Officer using the coordinates in section 1.1. We will respond within the time limits prescribed by law (generally 30 days under PIPEDA, with possible extensions under the Quebec Privacy Act).
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.10 Changes to this Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. Material changes will be posted on this page with a revised “Last Updated” date. Where required by law, we will notify affected individuals of significant changes. Continued use of the website after the effective date of changes constitutes acceptance of the revised Policy to the extent permitted by applicable law.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.11 Contact Us
                </h2>
                <p>
                  For any questions, requests or complaints regarding this Privacy Policy or our personal-information practices, please contact the Privacy Officer at the address, telephone number or email indicated in section 1.1.
                </p>
              </>
            ) : (
              <>
                <p>
                  Finma Inc. et Finma Canada Inc. (collectivement <strong>« FINMA »</strong>, <strong>« nous »</strong>, ou <strong>« notre »</strong>) s'engagent à protéger la vie privée et les renseignements personnels des personnes qui visitent notre site Web à l'adresse <a href="https://finma.ca" className="text-secondary hover:underline">finma.ca</a> (et tout sous-domaine), nous contactent ou retiennent nos services. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons, conservons, protégeons et traitons de toute autre manière les renseignements personnels dans le cadre de nos activités commerciales.
                </p>
                <p>
                  Cette politique est conçue pour se conformer à la Loi fédérale sur la protection des renseignements personnels et les documents électroniques (<strong>« LPRPDE »</strong>) et à la Loi sur la protection des renseignements personnels dans le secteur privé du Québec, telle que modifiée par la Loi 25 (la <strong>« Loi sur la protection de la vie privée du Québec »</strong>).
                </p>

                <hr className="border-border my-8" />

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.1 Responsable de la protection des renseignements personnels
                </h2>
                <p>
                  Conformément à la Loi 25 du Québec, Finma Inc. a désigné une personne responsable de la protection des renseignements personnels. Sauf désignation écrite contraire, cette responsabilité incombe au dirigeant le plus haut gradé de l'organisation.
                </p>
                <div className="bg-muted p-6 rounded border border-border mt-4 font-sans text-sm">
                  <p className="font-semibold text-foreground">Responsable de la protection des renseignements personnels</p>
                  <p>Finma Inc.</p>
                  <p>3030 Curé-Labelle, Bureau 300</p>
                  <p>Laval, Québec H7P 0H9 Canada</p>
                  <p className="mt-2">
                    <strong>Téléphone :</strong> 1.877.FINMA.CA / 1.438.228.1139
                  </p>
                  <p>
                    <strong>Courriel :</strong> <a href="mailto:privacy@finma.ca" className="text-secondary hover:underline">privacy@finma.ca</a>
                  </p>
                </div>
                <p className="mt-4">
                  Vous pouvez contacter le responsable de la protection des renseignements personnels pour exercer vos droits, poser des questions sur cette politique ou déposer une plainte concernant notre traitement des renseignements personnels.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.2 Portée de cette politique
                </h2>
                <p>Cette politique s'applique aux renseignements personnels collectés via :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Notre site Web <a href="https://finma.ca" className="text-secondary hover:underline">finma.ca</a> et tout sous-domaine ou portail connexe ;</li>
                  <li>Les formulaires de contact en ligne, les formulaires de demande de consultation et les communications par courriel ;</li>
                  <li>Les interactions téléphoniques ou en personne liées à notre présence sur le Web ; et</li>
                  <li>Tout autre moyen technologique par lequel nous collectons des renseignements personnels dans le cadre d'une activité commerciale.</li>
                </ul>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.3 Catégories de renseignements personnels que nous collectons
                </h2>
                <p>Selon vos interactions avec nous, nous pouvons collecter les catégories de renseignements personnels suivantes :</p>
                
                <h3 className="font-serif text-lg font-semibold text-foreground mt-4">Informations d'identité et de contact</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nom complet, titre du poste, nom de l'entreprise ou de l'organisation ;</li>
                  <li>Adresse courriel, numéro de téléphone, adresse postale ;</li>
                  <li>Toute autre information que vous fournissez volontairement dans un message ou un formulaire.</li>
                </ul>

                <h3 className="font-serif text-lg font-semibold text-foreground mt-4">Données techniques et d'utilisation (collectées automatiquement)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Adresse IP, type et version du navigateur, système d'exploitation, type d'appareil ;</li>
                  <li>Pages visitées, heure et date de la visite, temps passé sur les pages, URL de référence ;</li>
                  <li>Géolocalisation approximative dérivée de l'adresse IP (niveau ville/région) ;</li>
                  <li>Identifiants de fichiers témoins (cookies) et technologies de suivi similaires.</li>
                </ul>

                <h3 className="font-serif text-lg font-semibold text-foreground mt-4">Informations liées aux engagements professionnels</h3>
                <p>
                  Lorsque vous retenez nos services en finance d'entreprise, conseil en fusions et acquisitions, comptabilité de gestion ou gestion immobilière, nous pouvons collecter des informations supplémentaires nécessaires à l'exécution du mandat (ex. informations financières de l'entreprise, détails de propriété, registres fonciers). Ces informations sont traitées dans le cadre de lettres d'engagement distinctes et d'obligations de confidentialité professionnelle et sortent du cadre de cette politique.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.4 Finalités de la collecte, de l'utilisation et de la divulgation
                </h2>
                <p>Nous collectons et utilisons les renseignements personnels uniquement à des fins qu'une personne raisonnable considérerait comme appropriées dans les circonstances, notamment :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Répondre aux demandes de renseignements et fournir les informations demandées ou des consultations gratuites ;</li>
                  <li>Fournir nos services professionnels (finance d'entreprise, conseil en fusions et acquisitions, comptabilité de gestion, gestion immobilière) ;</li>
                  <li>Gérer les relations clients et remplir les obligations contractuelles ;</li>
                  <li>Améliorer la fonctionnalité, la sécurité et l'expérience utilisateur de notre site Web (analyses) ;</li>
                  <li>Envoyer des communications liées au service et, avec votre consentement exprès, du contenu marketing ou éducatif ;</li>
                  <li>Se conformer aux obligations légales, réglementaires, fiscales ou comptables ;</li>
                  <li>Protéger nos droits, détecter et prévenir les fraudes ou les incidents de sécurité.</li>
                </ul>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.5 Consentement
                </h2>
                <p>
                  Nous obtenons un consentement valable avant de collecter, d'utiliser ou de divulguer des renseignements personnels, sauf si la loi permet ou exige la collecte sans consentement (ex. certaines enquêtes judiciaires ou urgences).
                </p>
                <p>
                  Un consentement exprès est requis pour les cookies non essentiels, la publicité comportementale en ligne et les communications marketing en vertu de la LCAP et de la Loi 25 du Québec.
                </p>
                <p>
                  Le consentement doit être libre, éclairé, spécifique à la finalité et donné de manière claire. Les cases pré-cochées ou les déclarations vagues du type « en continuant, vous acceptez » ne constituent pas un consentement valide pour le traitement non essentiel en vertu de la Loi 25 du Québec.
                </p>
                <p>
                  Vous pouvez retirer votre consentement à tout moment, sous réserve de restrictions légales ou contractuelles et d'un préavis raisonnable. Le retrait du consentement pour les cookies non essentiels ou le marketing n'affectera pas la légalité du traitement basé sur le consentement avant son retrait.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.6 Divulgation et partage des renseignements personnels
                </h2>
                <p>
                  Nous ne vendons, ne louons ni n'échangeons de renseignements personnels. Nous pouvons divulguer des renseignements personnels aux catégories de destinataires suivantes uniquement dans la mesure nécessaire aux fins énoncées ci-dessus :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Les prestataires de services qui effectuent des services en notre nom (hébergement Web, envoi de courriels, plateformes d'analyse, systèmes CRM, stockage infonuagique). Ces prestataires sont contractuellement tenus de protéger les informations et de les utiliser uniquement aux fins que nous spécifions ;</li>
                  <li>Les conseillers professionnels (avocats, comptables, consultants) lorsque cela est nécessaire pour exécuter un mandat ou protéger nos intérêts légaux ;</li>
                  <li>Les autorités réglementaires ou d'application de la loi lorsque la loi, une ordonnance d'un tribunal l'exige, ou pour protéger les droits, la propriété ou la sécurité ;</li>
                  <li>Les successeurs en cas de fusion, d'acquisition ou de vente d'actifs, sous réserve de protections de confidentialité appropriées.</li>
                </ul>
                <p className="mt-4">
                  <strong>Transferts transfrontaliers :</strong> Certains de nos prestataires de services peuvent traiter ou stocker des renseignements personnels à l'extérieur du Québec ou du Canada. Lorsque des renseignements personnels de résidents du Québec sont communiqués à l'extérieur du Québec, nous réalisons une évaluation des facteurs relatifs à la vie privée (EFVP) requise par la Loi 25.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.7 Conservation et destruction
                </h2>
                <p>
                  Nous conservons les renseignements personnels uniquement pendant la durée nécessaire aux fins pour lesquelles ils ont été collectés, ou tel que requis par les lois applicables.
                </p>
                <p>Périodes de conservation typiques :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Données du formulaire de contact : jusqu'à 24 mois après le dernier contact, sauf si une relation client est établie ;</li>
                  <li>Dossiers des clients : durée du mandat plus les délais de prescription applicables (généralement de 3 à 7 ans ou plus selon les règles professionnelles) ;</li>
                  <li>Journaux de serveur et données analytiques : généralement 12 à 26 mois, selon l'outil.</li>
                </ul>
                <p className="mt-4">
                  Lorsque les renseignements personnels ne sont plus nécessaires, nous les détruisons de manière sécurisée ou les anonymisons de manière irréversible.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.8 Mesures de sécurité
                </h2>
                <p>
                  Nous mettons en œuvre des mesures de protection administratives, techniques et physiques raisonnables et adaptées à la sensibilité des renseignements, notamment :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Chiffrement des données en transit (HTTPS/TLS) ;</li>
                  <li>Contrôles d'accès et principes de moindre privilège pour le personnel et les sous-traitants ;</li>
                  <li>Environnements d'hébergement sécurisés et mises à jour logicielles régulières ;</li>
                  <li>Sensibilisation du personnel aux obligations de confidentialité ;</li>
                  <li>Procédures de réponse aux incidents en cas de violation de la confidentialité.</li>
                </ul>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.9 Vos droits
                </h2>
                <p>
                  En vertu de la LPRPDE et de la Loi sur la protection du consommateur et de la Loi 25 du Québec, vous disposez des droits suivants concernant vos renseignements personnels :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Accès :</strong> être informé de l'existence, de l'utilisation et de la divulgation de vos renseignements personnels et en obtenir copie ;</li>
                  <li><strong>Rectification :</strong> demander la correction d'informations inexactes, incomplètes ou équivoques ;</li>
                  <li><strong>Suppression / Destruction :</strong> demander la suppression ou la destruction lorsque les informations ne sont plus nécessaires ou que le consentement est retiré ;</li>
                  <li><strong>Retrait du consentement :</strong> à tout moment, sous réserve d'un préavis raisonnable ;</li>
                  <li><strong>Portabilité des données :</strong> (Loi 25 du Québec) recevoir les renseignements personnels informatisés dans un format structuré et couramment utilisé ;</li>
                  <li><strong>Désindexation :</strong> (Loi 25 du Québec) dans certaines circonstances concernant les résultats des moteurs de recherche ;</li>
                  <li><strong>Plainte :</strong> déposer une plainte auprès de nous, de la Commission d'accès à l'information du Québec (CAI) ou du Commissariat à la protection de la vie privée du Canada.</li>
                </ul>
                <p className="mt-4">
                  Pour exercer l'un de ces droits, contactez le responsable de la protection des renseignements personnels en utilisant les coordonnées de la section 1.1.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.10 Modifications de cette politique de confidentialité
                </h2>
                <p>
                  Nous pouvons mettre à jour cette politique de confidentialité de temps à ordre pour refléter les changements dans nos pratiques, la technologie ou les exigences légales. Les modifications importantes seront publiées sur cette page.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8">
                  1.11 Nous contacter
                </h2>
                <p>
                  Pour toute question, demande ou plainte concernant cette politique de confidentialité, veuillez contacter le responsable de la protection des renseignements personnels à la section 1.1.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
