import { en } from "./en";

// French translations. Spreads English as fallback then overrides with FR strings.
export const fr: typeof en = {
  ...en,
  siteTagline: "Conseil & Gestion",

  ui: {
    ...en.ui,
    toggleMenu: "Ouvrir ou fermer le menu",
    close: "Fermer",
    scroll: "Faites défiler",
    bookingTitle: "Réservez une consultation gratuite",
    bookingSubtitle: "30 minutes avec un associé principal — sans engagement.",
    slideLabel: "Diapositive",
    partnersAlt: "Associés FINMA",
    advisoryAlt: "Services-conseils FINMA",
    notFound: "Oups! Page introuvable",
    returnHome: "Retour à l'accueil",
  },

  seoPages: {
    ...en.seoPages,
    home: { title: "FINMA | Finance d'entreprise, F&A et gestion immobilière", description: "Services-conseils dirigés par des associés en finance d'entreprise, F&A, évaluation et gestion immobilière clé en main au Québec." },
    whoWeAre: { title: "Qui sommes-nous | FINMA", description: "Un partenaire de confiance en finance d'entreprise, fusions et acquisitions et gestion immobilière." },
    financialAdvisory: { title: "Services-conseils financiers | Finance d'entreprise et F&A | FINMA", description: "Découvrez les services-conseils financiers de FINMA : finance d'entreprise, F&A, évaluation et services de direction financière." },
    maAdvisory: { title: "Conseil en F&A — Achat et vente | FINMA", description: "Maximisez la valeur de vos transactions grâce aux processus structurés de F&A de FINMA." },
    ourApproach: { title: "Notre approche — L'avantage FINMA", description: "Fiduciaire par essence. Mondiale en perspective. Ciblée dans sa portée." },
    tekis: { title: "TEKIS — Le système d'exploitation de FINMA", description: "Confiance. Expertise. Connaissance. Intégrité. Stratégie." },
    propertyManagement: { title: "Gestion immobilière et de copropriété au Québec | FINMA", description: "Gestion immobilière clé en main pour copropriétés et immeubles résidentiels et commerciaux au Québec." },
    testimonials: { title: "Témoignages clients | FINMA", description: "Ce que nos clients disent des services-conseils et de gestion immobilière de FINMA." },
    contact: { title: "Communiquez avec FINMA | Conseil financier et gestion immobilière", description: "Communiquez avec FINMA pour vos besoins en finance d'entreprise, F&A et gestion immobilière." },
  },

  nav: {
    about: "À propos",
    whoWeAre: "Qui nous sommes",
    portfolio: "Portefeuille",
    financialAdvisory: "Conseil financier",
    corporateFinance: "Finance d'entreprise",
    maAdvisory: "Fusions & acquisitions",
    ourApproach: "Notre approche",
    tekis: "TEKIS",
    propertyManagement: "Gestion immobilière",
    syndicateManagement: "Gestion de syndicats de copropriétés",
    corporateAccounting: "Comptabilité d'entreprise et impôt",
    testimonials: "Témoignages",
    contact: "Contact",
    relatedServices: "Services connexes",
  },

  home: {
    ...en.home,
    heroSlides: [
      { eyebrow: "Finance d'entreprise", title: "Soutenir votre croissance et votre expansion — une transaction de fusions et acquisitions à la fois." },
      { eyebrow: "Gestion immobilière", title: "Vous aider à gérer votre syndicat de copropriété et votre portefeuille immobilier." },
      { eyebrow: "Vision stratégique", title: "Faites de l'expertise de Finma le fondement de votre vision stratégique et de votre croissance financière." },
      { eyebrow: "Excellence", title: "Là où vos objectifs de gestion immobilière se réalisent avec intégrité, innovation et engagement envers l'excellence." },
    ],
    heroTitle: "Finance d'entreprise, F&A et gestion immobilière",
    heroSubtitle:
      "Services de conseil financier, comptabilité de gestion et gestion immobilière clé en main. FINMA offre des solutions intégrées de finance d'entreprise et de gestion immobilière aux PME et syndicats de copropriété du Québec et du Canada.",
    ctaPrimary: "Réserver une consultation gratuite",
    ctaSecondary: "Découvrir nos services",
    introTitle: "Ce qui nous distingue",
    introDesc:
      "FINMA offre des solutions intégrées de finance d'entreprise et de gestion immobilière aux PME et aux syndicats de copropriété à travers le Québec et le Canada. Nous combinons une exécution rigoureuse des transactions à une expertise opérationnelle pour aider les petites et moyennes entreprises — qu'il s'agisse d'acheter, de vendre une entreprise ou de mobiliser du capital de croissance. Nous nous spécialisons également dans la gestion immobilière clé en main pour les syndicats de copropriété. Ce qui nous distingue : l'excellence et l'intégrité. Nous visons l'excellence à chaque étape, combinée à un service personnalisé et ponctuel. Grâce à d'excellentes compétences en négociation et à un haut niveau d'intégrité, nous sommes idéalement positionnés pour maximiser la valeur pour vos actionnaires.",
    capabilitiesLabel: "Capacités intégrées",
    capabilitiesTitle: "Soutenir votre croissance et votre avenir",
    capabilitiesDesc:
      "Chez FINMA, nous offrons des services intégrés de F&A, de finance d'entreprise, de comptabilité de gestion et de gestion immobilière. Notre approche repose sur une analyse rigoureuse, une expertise éprouvée, une vaste expérience et une diligence raisonnable approfondie.",
    clientsLabel: "Nos clients",
    clientsTitle: "Perspectives stratégiques pour la croissance",
    clients: [
      "Propriétaires d'entreprise et PME qui se préparent à une vente ou à l'acquisition d'entreprises complémentaires",
      "Entreprises familiales en transition de propriété",
      "Sociétés cherchant à croître par fusions et acquisitions ou à se scinder",
      "Investisseurs immobiliers et syndicats de copropriété recherchant une gestion immobilière clé en main",
      "PME ayant besoin d'évaluations indépendantes et d'opinions sur l'équité",
    ],
    experienceLabel: "Expérience diversifiée",
    experienceItems: [
      "Plus de 25 ans d'expérience combinée en transactions et en exploitation dans les domaines des F&A, de la mobilisation de capitaux, de la restructuration et de la gestion immobilière",
      "Expérience diversifiée dans les services aux entreprises, la fabrication, les technologies de l'information et l'immobilier",
      "Diligence raisonnable et réflexion stratégique originale qui protègent les intérêts de l'acheteur",
      "Service entièrement bilingue (FR/EN) avec une compréhension approfondie des réalités réglementaires, fiscales et juridiques du Québec",
    ],
    howWeWorkLabel: "Notre méthode",
    howWeWorkTitle: "Exécution disciplinée guidée par TEKIS",
    howWeWorkDesc:
      "Chaque mandat débute par une discussion de cadrage afin de définir les objectifs, les contraintes et les critères de succès. Nous proposons des structures d'honoraires transparentes — fixes, plafonnées ou liées au succès — adaptées à la complexité du mandat et aux préférences du client. Les livrables sont organisés par étapes avec des jalons clairs, et la fréquence des comptes rendus est établie dès le départ. Notre système opérationnel TEKIS (Confiance • Expertise • Connaissance • Intégrité • Stratégie) guide notre analyse, notre communication et notre exécution — ce qui se traduit par des mises à jour en langage clair, des hypothèses documentées, des dossiers prêts à l'audit et des recommandations fondées sur des options plutôt que des directives sans contexte.",
    credentialsLabel: "Accréditations",
    credentialsTitle: "Intégrité absolue. Conseils impartiaux. Concentration sans faille.",
    credentials: [
      "Université McGill (programme MBA) | Université Concordia (B. Comm.)",
      "Ordre des administrateurs agréés du Québec (Adm.A.)",
      "Association des MBA du Québec (AMBAQ)",
    ],
    diffLabel: "Pourquoi FINMA",
    diffTitle: "Ce qui rend FINMA différent",
    diff1Title: "L'intégrité d'abord",
    diff1Desc:
      "Transparence totale dans chaque stratégie et chaque interaction. Aucun frais caché, aucune recommandation conflictuelle, aucun agenda corporatif — uniquement des conseils honnêtes et impartiaux auxquels vous pouvez vous fier.",
    diff2Title: "Engagement fiduciaire",
    diff2Desc:
      "Légalement tenus de placer vos intérêts au premier plan. Chaque recommandation découle de vos objectifs uniques, et non de structures de commissions, de cibles de vente ou d'incitations corporatives.",
    diff3Title: "Indépendance véritable",
    diff3Desc:
      "En tant que firme indépendante, nous sommes entièrement libres de quotas corporatifs et de pressions de vente. Cela se traduit par des conseils véritablement impartiaux, adaptés exclusivement à votre situation financière unique.",
    diff4Title: "Exécution dirigée par les associés",
    diff4Desc:
      "Chaque mandat est géré directement par les associés. Aucun transfert, aucune dilution de la responsabilité, aucune substitution par des juniors — uniquement de la clarté, de la rapidité et de la continuité à chaque étape.",
    statsTitle: "Des décennies d'expérience combinée",
    statsSubtitle:
      "Nous nous engageons à soutenir votre croissance et à maximiser la valeur pour vos actionnaires. Nous gérerons et protégerons vos investissements immobiliers en toute sécurité.",
    stat1: "Années d'expérience en F&A",
    stat2: "Années d'expérience en entrepreneuriat",
    stat3: "Années d'expérience en gestion immobilière",
    stat4: "Années d'expérience en stratégie d'entreprise",
    ctaTitle: "Prêt à avancer avec confiance ?",
    ctaButton: "Réserver une consultation gratuite",
  },

  about: {
    ...en.about,
    heroTitle: "À propos de FINMA",
    heroSubtitle:
      "Fiduciaire par nature. Stratégique par conception. Axé sur les résultats. Nous intégrons expertise financière, vision opérationnelle et soin fiduciaire.",
    ctaPrimary: "Réserver une consultation",
    introLabel: "À propos de FINMA",
    introTitle: "Bâtir des héritages, autonomiser les avenirs financiers",
    introDesc:
      "Chez FINMA, nous existons pour aider les petites et moyennes entreprises à croître et à prospérer en prenant des décisions financièrement disciplinées. Nous aidons également les syndicats de copropriété à gérer leurs actifs avec efficacité tout en réduisant leurs coûts. Établie au Québec, FINMA offre des solutions de finance d'entreprise, de F&A et de gestion immobilière qui intègrent expertise financière, gestion stratégique et soin fiduciaire — garantissant l'exécution réussie de chaque mandat. Nous servons les PME à travers le Québec et le Canada et offrons une combinaison rare de profondeur transactionnelle, d'acuité financière et de gestion immobilière diligente sous un même toit.",
    identityTitle: "Notre identité",
    identityDesc:
      "FINMA a été fondée sur le principe que les services conseils professionnels doivent être dirigés par des associés, transparents et axés sur les résultats. Dans une industrie où les décisions ont des conséquences financières à long terme, nous adhérons à une norme non négociable : agir dans l'intérêt supérieur de nos clients, toujours. Nous réunissons des décennies d'expérience en stratégie d'entreprise, en F&A, en entrepreneuriat et en gestion immobilière.",
    setsApartTitle: "Ce qui distingue FINMA",
    setsApart: [
      {
        title: "Engagement fiduciaire",
        desc: "Nous ne vendons pas de produits — nous concevons des solutions clé en main sur mesure. Nos conseils sont objectifs, indépendants et libres de conflits, structurés entièrement autour des objectifs de nos clients. FINMA opère selon des normes de devoir fiduciaire, alignant chaque recommandation avec votre succès à long terme.",
      },
      {
        title: "Exécution dirigée par les associés",
        desc: "Chaque mandat est géré directement par les associés. Aucun transfert, aucune dilution de la responsabilité, aucune substitution junior. Les professionnels qui cadrent votre projet sont les mêmes qui l'exécutent, assurant clarté, rapidité et continuité à chaque étape.",
      },
      {
        title: "Capacités intégrées",
        desc: "FINMA réunit la finance d'entreprise, le conseil F&A et la gestion immobilière dans un cadre unique. Cela élimine le risque de transfert, aligne les stratégies financières et opérationnelles, et nous permet de superviser à la fois les transactions et les actifs sous-jacents avec une visibilité et un contrôle complets.",
      },
      {
        title: "Mentalité d'opérateur",
        desc: "Nos associés ont possédé, géré et fait croître des entreprises — pas seulement analysées. Cette expérience nourrit des recommandations pratiques qui fonctionnent dans le monde réel, pas seulement sur papier.",
      },
      {
        title: "Expertise du marché québécois",
        desc: "Nous opérons de façon bilingue (FR/EN) avec une connaissance approfondie des cadres réglementaire, fiscal et juridique du Québec — un avantage critique dans un environnement de conformité de plus en plus complexe.",
      },
    ],
    practicesTitle: "Nos pratiques principales",
    practiceFinanceTitle: "Finance d'entreprise & Conseil F&A",
    practiceFinanceDesc:
      "FINMA offre un soutien transactionnel de bout en bout, de l'évaluation et de la stratégie à la diligence raisonnable et à la négociation. Nous aidons nos clients à acheter, vendre, restructurer ou financer leurs entreprises, en les guidant à travers chaque considération financière, juridique et opérationnelle avec précision.",
    practiceFinanceList: [
      "Structuration de transactions et modélisation financière",
      "Conseil côté acheteur et côté vendeur",
      "Examens de qualité des résultats et de diligence",
      "Mobilisation de capitaux (dette, équité, hybride)",
      "Évaluations et opinions sur l'équité",
    ],
    practicePropertyTitle: "Gestion immobilière & supervision d'actifs",
    practicePropertyDesc:
      "Nous appliquons la discipline de la finance d'entreprise à la gestion immobilière, en gérant les actifs avec transparence financière et efficacité opérationnelle. Notre portefeuille comprend des propriétés résidentielles, commerciales et en copropriété à travers le Québec, gérées selon des normes strictes de conformité et de contrôle financier.",
    practicePropertyList: [
      "Budgétisation, planification des réserves et reddition de comptes",
      "Supervision des entrepreneurs et de la maintenance",
      "Coordination des AGA et soutien à la gouvernance",
      "Gestion des assurances et de la conformité",
      "Planification et exécution de grands projets en capital",
    ],
    whyTitle: "Pourquoi les clients choisissent FINMA",
    whyDesc:
      "Nous offrons un historique éprouvé d'exécution transactionnelle et de suivi opérationnel au sein d'un modèle de conseil et de gestion entièrement intégré — une équipe, une vision. En combinant une expertise locale à une perspective globale, nous menons des processus confidentiels et dirigés par les associés, adaptés aux objectifs de chaque client, avec un engagement ferme envers la clarté, l'intégrité et la création de valeur mesurable.",
    ctaTitle: "Prêt à avancer avec confiance ?",
    ctaButton: "Réservez votre consultation gratuite",
    seo: {
      title: "À propos de FINMA | Conseil financier dirigé par les associés",
      description:
        "FINMA aide les PME et syndicats de copropriété à prendre des décisions financières disciplinées : exécution dirigée par les associés, conseil intégré.",
      ogTitle: "À propos de FINMA | Conseil financier dirigé par les associés",
      ogDescription:
        "Dirigé par les associés, fiduciaire, indépendant. Découvrez comment FINMA intègre la finance d'entreprise, le conseil F&A et la gestion immobilière pour maximiser la valeur pour les actionnaires.",
    },
  },

  whoWeArePage: {
    ...en.whoWeArePage,
    heroTitle: "Qui nous sommes",
    ctaPrimary: "Prendre rendez-vous",
    introTitle: "Un partenaire de confiance à travers les disciplines",
    missionTitle: "Notre mission",
    insightTitle: "Perspective stratégique enracinée dans l'exécution",
    visionTitle: "Notre vision",
    sopTitle: "Notre SOP",
    setsApartTitle: "Ce qui nous distingue",
    distinctionLabel: "Distinction",
    distinctionIntro: "Cinq principes qui définissent notre façon de collaborer avec nos clients.",
    commitmentTitle: "Notre engagement",
    commitmentSubtitle: "Indépendant, fiable et transparent.",
    pledgeLabel: "Notre engagement",
    ctaTitle: "Rejoignez-nous dans votre parcours stratégique",
    ctaButton: "Réserver une consultation gratuite",
  },

  financial: {
    ...en.financial,
    heroTitle: "Conseil financier",
    heroSubtitle:
      "Réalisez le potentiel de votre entreprise grâce à nos experts qui apportent une vision globale et une expertise locale. Conseils stratégiques pour PME, investisseurs et dirigeants de marché intermédiaire.",
    ctaPrimary: "Réservez votre consultation",
    introTitle: "Finance d'entreprise et conseil transactionnel intégré",
    introDesc:
      "Chez FINMA, nous offrons des solutions de conseil et de finance d'entreprise de bout en bout aux petites et moyennes entreprises. Notre approche intègre stratégie, gestion stratégique et vision opérationnelle pour aider les propriétaires à acheter, vendre, mobiliser du capital ou restructurer leurs entreprises afin de croître et de maximiser la valeur pour les actionnaires. Nous combinons la rigueur des transactions institutionnelles au pragmatisme d'opérateurs qui comprennent ce qui se passe après la clôture. Chaque mandat est dirigé par les associés, confidentiel et axé sur les résultats.",
    whyTitle: "Pourquoi choisir FINMA ?",
    whyDesc:
      "Avec plus de deux décennies d'expérience combinée en F&A, en finance d'entreprise et en restructuration, nos associés livrent des résultats mesurables grâce à une exécution disciplinée et à une communication transparente. Du positionnement stratégique à la clôture et à l'intégration, nous vous guidons à chaque étape avec un seul objectif — maximiser la valeur pour les actionnaires tout en minimisant les risques.",
    servicesLabel: "Capacités",
    servicesTitle: "Nos services de conseil financier",
    services: [
      {
        id: "strategic",
        title: "Conseil stratégique & consultation financière",
        description:
          "Nous nous associons aux fondateurs, actionnaires et investisseurs pour concevoir des stratégies de croissance et de F&A sur mesure — incluant la stratégie d'entreprise et la planification corporative, l'évaluation de la préparation transactionnelle, l'évaluation et la négociation, ainsi que la stratégie d'intégration.",
      },
      {
        id: "ma",
        title: "Conseil F&A — Côté acheteur & côté vendeur",
        description:
          "Des processus disciplinés, des résultats mesurables. Que vous acquériez, fusionniez ou cédiez une entreprise, FINMA exécute chaque processus de F&A avec intégrité et confidentialité afin de maximiser la valeur pour les actionnaires.",
      },
      {
        id: "corporate",
        title: "Finance d'entreprise & mobilisation de capitaux",
        description:
          "Dette. Équité. Solutions hybrides, structurées pour une croissance à long terme. FINMA structure et exécute des solutions de capital pour la croissance, les acquisitions et les événements de liquidité des actionnaires en utilisant prêts senior, dette mezzanine, capital de croissance, recapitalisations, et plus encore.",
      },
      {
        id: "valuations",
        title: "Évaluations & opinions sur l'équité",
        description:
          "Indépendantes, défendables et transparentes. Nos experts en évaluation livrent des rapports rigoureux pour les transactions, la planification fiscale, l'information financière et les questions actionnariales — conçus pour résister à l'examen des auditeurs, des conseils d'administration et des autorités réglementaires.",
      },
      {
        id: "transaction",
        title: "Services transactionnels & diligence",
        description:
          "Protégez la valeur avant, pendant et après la transaction. Nous offrons la diligence raisonnable côté acheteur et côté vendeur, les examens et normalisations de la qualité des résultats, ainsi que la planification de l'intégration post-fusion.",
      },
      {
        id: "restructuring",
        title: "Restructuration & situations particulières",
        description:
          "Perspective indépendante. Solutions concrètes. Nous offrons des revues d'entreprise indépendantes, des prévisions de trésorerie sur 13 semaines, du conseil en dette, des redressements opérationnels et des F&A en contexte de difficulté financière dans des délais serrés.",
      },
    ],
    ctaTitle: "Vous ne savez pas quel service correspond à vos besoins ?",
    ctaButton: "Planifier un appel exploratoire",
  },

  corporateFinancePage: {
    ...en.corporateFinancePage,
    heroTitle: "Finance d'entreprise",
    ctaPrimary: "Réserver une consultation",
    overviewTitle: "Solutions de capital stratégiques pour entreprises et investisseurs",
    whyTitle: "Pourquoi FINMA en finance d'entreprise ?",
    ctaTitle: "Du capital qui alimente la croissance tout en protégeant la flexibilité.",
    ctaButton: "Discuter de votre stratégie de capital",
  },

  maPage: {
    ...en.maPage,
    heroTitle: "Fusions & acquisitions",
    ctaPrimary: "Discuter de votre transaction",
    overviewTitle: "Exécution F&A bilingue dirigée par les associés",
    whyTitle: "Pourquoi FINMA en conseil F&A",
    sellSideTitle: "Conseil F&A — Côté vendeur",
    buySideTitle: "Conseil F&A — Côté acheteur",
    readinessTitle: "Préparation transactionnelle & diligence financière",
    structuringTitle: "Structuration & soutien à la négociation",
    ctaTitle: "Vous envisagez une transaction ? Discutons de vos objectifs.",
    ctaButton: "Planifier un appel confidentiel",
  },

  ourApproachPage: {
    ...en.ourApproachPage,
    heroTitle: "Notre approche — L'avantage FINMA",
    ctaPrimary: "Réservez votre consultation",
    introTitle: "Agir comme de véritables fiduciaires",
    globalTitle: "Perspective globale",
    focusedTitle: "Exécution ciblée",
    howWeWorkTitle: "Comment nous travaillons",
    integratedTitle: "Expertise intégrée à travers trois disciplines",
    whyTitle: "Pourquoi les clients choisissent FINMA",
    ctaTitle: "Découvrez l'avantage FINMA",
    ctaButton: "Réserver une consultation",
  },

  tekisPage: {
    ...en.tekisPage,
    heroTitle: "TEKIS — Le système opérationnel de FINMA",
    ctaPrimary: "Réservez votre consultation",
    introTitle: "Le SOP de FINMA — TEKIS",
    pillarsTitle: "Ce que TEKIS représente",
    actionTitle: "TEKIS en action dans les pratiques de FINMA",
    ctaTitle: "Vivez la discipline TEKIS dans votre prochain mandat.",
    ctaButton: "Réserver une consultation",
  },

  property: {
    ...en.property,
    heroTitle: "Gestion immobilière",
    ctaPrimary: "Parler à un conseiller",
    introTitle: "Gestion résidentielle et commerciale au Québec",
    syndicateTitle: "Services complets pour syndicats de copropriété",
    syndicateBenefitsTitle: "Avantages clés",
    residentialTitle: "Gestion immobilière commerciale et résidentielle",
    residentialSubtitle: "Maximiser la performance, minimiser les risques",
    capitalTitle: "Grands projets & planification du capital",
    capitalSubtitle: "Une supervision en qui vous pouvez avoir confiance",
    whyTitle: "Pourquoi vous associer à FINMA",
    partnerTitle: "Votre propriété. Notre priorité.",
    ctaTitle: "Prêt à découvrir la gestion immobilière professionnelle ?",
    ctaButton: "Parler à un conseiller FINMA",
  },

  syndicatePage: {
    ...en.syndicatePage,
    heroTitle: "Gestion de syndicats de copropriété",
    ctaPrimary: "Parler à un conseiller",
    overviewLabel: "Solutions de gestion immobilière",
    overviewTitle: "Gouvernance, transparence et discipline financière",
    servicesTitle: "Nos services de gestion de syndicats",
    whyTitle: "Pourquoi FINMA pour la gestion de syndicats",
    ctaTitle: "Une copropriété financièrement solide et bien gouvernée.",
    ctaButton: "Planifier une consultation",
  },

  testimonialsPage: {
    ...en.testimonialsPage,
    heroTitle: "Témoignages clients",
    ctaPrimary: "Réservez votre consultation",
    introTitle: "La confiance gagnée par une exécution constante",
    sectionTitle: "Expériences clients en gestion immobilière",
    whyTitle: "Pourquoi nos clients font confiance à FINMA",
    relationshipsTitle: "Bâtir des relations à long terme",
    ctaTitle: "Prêt à vivre la différence FINMA ?",
    ctaButton: "Réserver une consultation",
  },

  contact: {
    ...en.contact,
    heroTitle: "Contactez-nous",
    heroSubtitle:
      "Engagez-vous avec FINMA. Découvrez comment nos services holistiques peuvent répondre à tous vos besoins en gestion immobilière et vous aider à atteindre vos objectifs d'affaires.",
    fullName: "Nom complet",
    email: "Courriel",
    phone: "Téléphone",
    areaOfInterest: "Domaine d'intérêt",
    selectService: "Sélectionner un service",
    messageDetails: "Détails du message",
    consent:
      "J'accepte que FINMA recueille et traite mes données personnelles aux fins de répondre à cette demande, conformément à notre politique de confidentialité.",
    sendMessage: "Envoyer le message",
    consentError: "Veuillez accepter la politique de confidentialité.",
    successMessage: "Merci de nous avoir contactés. Un associé FINMA vous répondra sous un jour ouvrable.",
    office: "Bureau",
    emailLabel: "Courriel",
    phoneLabel: "Sans frais",
    phoneDirect: "Télécopieur",
    responseTime: "Heures d'ouverture",
    responseValue: "9h00 - 17h00 HNE",
    website: "Site web",
    bookingTitle: "Préférez-vous réserver directement ?",
    bookingDesc: "Planifiez une consultation gratuite de 30 minutes avec un associé FINMA.",
    bookingButton: "Réserver une consultation gratuite",
  },

  corporateAccountingPage: {
    seo: {
      title: "Comptabilité et impôt des sociétés | FINMA",
      description: "Comptabilité d’entreprise, accompagnement QuickBooks et déclarations de revenus fédérales et provinciales des sociétés au Québec et au Canada.",
    },
    hero: {
      eyebrow: "Comptabilité et fiscalité des sociétés",
      title: "Comptabilité d’entreprise et déclarations de revenus",
      subtitle: "Des comptes clairs. Des décisions éclairées.",
      body: "FINMA aide les entreprises constituées en société à tenir une comptabilité fiable, à comprendre leur performance financière et à préparer et transmettre électroniquement leurs déclarations de revenus canadiennes, au fédéral et au provincial, selon le cas. Un accompagnement pratique pour les entreprises du Québec et d’ailleurs au Canada.",
      primaryCta: "Réserver une consultation gratuite",
      secondaryCta: "Découvrir nos services",
      credentialLine: "ProAdvisor QuickBooks certifié de niveau Or · Services en français et en anglais",
    },
    overview: {
      eyebrow: "Une comptabilité au service de votre entreprise",
      heading: "Une base financière solide, tout au long de l’année.",
      paragraphs: [
        "Une bonne comptabilité ne se limite pas à un bilan de fin d’exercice. Elle vous aide à comprendre la situation de votre entreprise, à gérer vos liquidités et à préparer vos prochaines décisions. FINMA réunit la comptabilité d’entreprise, l’information de gestion et la préparation des déclarations de revenus des sociétés dans un service coordonné, adapté à vos besoins.",
        "Que vous recherchiez un accompagnement régulier, une mise en ordre de vos livres avant la fin de l’exercice ou la préparation de vos prochaines déclarations, nous commençons par examiner vos dossiers, vos priorités et vos obligations de production. Vous bénéficiez d’un mandat clairement défini et d’explications concrètes à chaque étape.",
      ],
    },
    services: {
      eyebrow: "Nos services",
      heading: "De la tenue des livres à la production des déclarations de revenus.",
      cards: [
        { id: "bookkeeping", iconKey: "bookOpen", title: "Comptabilité d’entreprise et tenue de livres", body: "Organisez vos dossiers grâce à l’enregistrement des opérations, au rapprochement des comptes et à un plan comptable cohérent. L’accompagnement mensuel ou trimestriel est adapté à vos besoins opérationnels." },
        { id: "year-end", iconKey: "calendarCheck", title: "Préparation comptable de fin d’exercice", body: "Rassemblez vos dossiers de fin d’exercice avec des soldes rapprochés, des tableaux justificatifs et des rapports financiers préparés à des fins de gestion et de production des déclarations. Repérez les renseignements manquants et corrigez les écarts avant la transmission." },
        { id: "tax-returns", iconKey: "landmark", title: "Déclarations de revenus fédérales et provinciales", body: "Préparation et transmission électronique des déclarations fédérales T2 et des déclarations provinciales applicables, notamment la CO-17 au Québec et l’AT1 en Alberta, lorsqu’elles sont requises et comprises dans le mandat convenu." },
        { id: "quickbooks", iconKey: "monitorCog", title: "Configuration et accompagnement QuickBooks", body: "Configurez ou organisez QuickBooks, améliorez vos méthodes de travail et utilisez davantage vos rapports financiers. FINMA est un ProAdvisor QuickBooks certifié de niveau Or." },
        { id: "reporting", iconKey: "lineChart", title: "Information de gestion et trésorerie", body: "Comprenez vos revenus, vos dépenses, vos marges et vos besoins de liquidités grâce à des rapports de gestion, des budgets et des prévisions de trésorerie adaptés à vos priorités." },
        { id: "cleanup", iconKey: "eraser", title: "Mise à jour et régularisation comptables", body: "Traitez les comptes non rapprochés, les dossiers incomplets et les retards de tenue de livres. Nous évaluons le travail requis, convenons des priorités et vous aidons à établir une base comptable utilisable pour le prochain cycle de production ou de reporting." },
      ],
      scopeNote: "L’étendue du mandat, les délais et les honoraires sont convenus après l’examen de votre entreprise et de vos dossiers.",
    },
    filing: {
      eyebrow: "Déclarations fédérales et provinciales",
      heading: "La bonne déclaration pour chaque administration fiscale.",
      intro: "FINMA prépare les déclarations de revenus des sociétés à partir de vos documents comptables et coordonne leur transmission électronique après votre révision et votre autorisation. Les déclarations requises dépendent de la situation de votre société et des endroits où elle exerce ses activités.",
      jurisdictions: [
        { id: "federal-t2", title: "T2 fédérale et impôt provincial administré par l’ARC", body: "Les déclarations T2 sont transmises par le service de transmission par Internet des déclarations des sociétés de l’ARC, au moyen d’un logiciel certifié. La T2 sert aussi généralement à déclarer l’impôt provincial et territorial des sociétés pour les administrations prises en charge par l’ARC." },
        { id: "quebec-co17", title: "CO-17 du Québec", body: "Les sociétés assujetties à une obligation de production au Québec doivent produire une déclaration provinciale distincte. FINMA prépare la CO-17 et organise sa transmission électronique à Revenu Québec au moyen d’un logiciel autorisé, selon le cas." },
        { id: "alberta-at1", title: "AT1 de l’Alberta", body: "Lorsqu’une déclaration albertaine est requise, l’AT1 est produite séparément auprès de Tax and Revenue Administration de l’Alberta. La transmission électronique utilise le service net file de l’Alberta lorsque la déclaration y est admissible." },
      ],
      closingNote: "Nous confirmons les administrations concernées, les renseignements requis et l’étendue des travaux de production au début du mandat. Les obligations de production et de paiement sont examinées séparément.",
    },
    quickbooks: {
      eyebrow: "Expertise QuickBooks",
      heading: "FINMA est un ProAdvisor QuickBooks certifié de niveau Or.",
      body: "Mettez votre logiciel comptable au service de votre entreprise. FINMA vous aide à organiser QuickBooks, à améliorer vos méthodes de tenue de livres et à utiliser vos rapports financiers avec davantage de confiance.",
      bullets: [
        "Configuration de QuickBooks et organisation du plan comptable.",
        "Accompagnement pour la catégorisation des opérations et le rapprochement des comptes.",
        "Mise en ordre des dossiers existants et amélioration des méthodes de travail.",
        "Aide à l’utilisation des rapports pour la gestion et la préparation de fin d’exercice.",
      ],
      cta: "Discuter de vos besoins QuickBooks",
    },
    process: {
      eyebrow: "Notre méthode",
      heading: "Un processus clair, du premier échange à la transmission.",
      steps: [
        { id: "understand", title: "Comprendre votre entreprise", body: "Nous discutons de votre société, de vos besoins d’information financière, de vos outils comptables et des administrations fiscales concernées, puis définissons le mandat et les honoraires." },
        { id: "organise", title: "Organiser et examiner les dossiers", body: "Nous convenons d’une liste de documents, examinons les dossiers disponibles et déterminons les rapprochements à effectuer ainsi que les renseignements manquants." },
        { id: "prepare", title: "Préparer et expliquer", body: "Nous préparons les rapports et les déclarations convenus, expliquons les principaux éléments et obtenons votre révision et votre autorisation avant la transmission." },
        { id: "file", title: "Transmettre et assurer le suivi", body: "Nous transmettons électroniquement les déclarations admissibles par les canaux des administrations concernées et vous remettons les copies et confirmations de production. Tout accompagnement continu est défini dans votre mandat." },
      ],
      principlesText: "Notre travail s’appuie sur les principes TEKIS de FINMA : confiance, expertise, connaissances, intégrité et stratégie.",
      cta: "Découvrir notre approche",
    },
    whyFinma: {
      eyebrow: "Pourquoi FINMA",
      heading: "Une comptabilité concrète. Une vision globale de votre entreprise.",
      items: [
        { id: "context", iconKey: "briefcase", title: "Contexte d’affaires", body: "Un accompagnement comptable enrichi par l’expérience de FINMA en finance d’entreprise et en conseil." },
        { id: "communication", iconKey: "messageSquare", title: "Communication claire", body: "Comprenez les renseignements à fournir, les travaux inclus et les prochaines étapes." },
        { id: "bilingual", iconKey: "languages", title: "Services bilingues", body: "Travaillez avec FINMA en français ou en anglais, en tenant compte des réalités d’affaires québécoises et canadiennes." },
        { id: "continuity", iconKey: "link", title: "Continuité", body: "Reliez la comptabilité courante, la préparation de fin d’exercice et les déclarations de revenus dans le cadre d’un mandat convenu." },
      ],
    },
    faq: {
      heading: "Vos questions sur la comptabilité et la fiscalité des sociétés.",
      items: [
        { id: "federal-provincial", question: "Préparez-vous les déclarations fédérales et provinciales des sociétés?", answer: "Oui. FINMA offre la préparation et la transmission électronique des déclarations fédérales T2 et des déclarations provinciales applicables. La T2 comprend généralement l’impôt des provinces et territoires administrés par l’ARC; le Québec et l’Alberta exigent des déclarations provinciales distinctes lorsque celles-ci sont requises. Nous confirmons l’étendue des travaux pour votre société avant de commencer." },
        { id: "efile", question: "FINMA peut-elle transmettre les déclarations de ma société par voie électronique?", answer: "Oui, pour les déclarations admissibles et après la révision et les autorisations nécessaires. Les déclarations fédérales utilisent le service de transmission par Internet des déclarations des sociétés; les déclarations provinciales distinctes utilisent les systèmes provinciaux appropriés. Une demande envoyée sur ce site amorce une discussion sur nos services; elle ne constitue pas la production d’une déclaration." },
        { id: "quickbooks-required", question: "Dois-je utiliser QuickBooks pour travailler avec FINMA?", answer: "Communiquez avec nous pour discuter de vos outils et de vos dossiers actuels. Nous évaluons les éléments utilisables et l’utilité éventuelle d’une mise en ordre ou d’une transition. FINMA est un ProAdvisor QuickBooks certifié de niveau Or et peut accompagner les entreprises qui utilisent QuickBooks." },
        { id: "information", question: "Quels renseignements dois-je fournir?", answer: "Nous commençons généralement par vos déclarations antérieures et avis de cotisation, votre date de fin d’exercice, vos documents comptables, vos relevés bancaires et de cartes de crédit, vos soldes d’emprunts ainsi que les renseignements pertinents sur les actifs et les actionnaires. Nous fournissons une liste adaptée au mandat et convenons de la méthode d’échange des documents." },
        { id: "cleanup", question: "Pouvez-vous m’aider si ma comptabilité est en retard ou doit être régularisée?", answer: "Oui. Nous évaluons d’abord l’état de vos dossiers et le travail requis, puis convenons des priorités, du mandat et des délais avant d’entreprendre le rattrapage ou la préparation des déclarations." },
        { id: "fees", question: "Comment les honoraires sont-ils établis?", answer: "Ils dépendent notamment du volume d’opérations, de l’état des dossiers, du nombre d’entités et d’administrations fiscales concernées, ainsi que des rapports ou déclarations à préparer. Le mandat et les honoraires sont confirmés avant le début des travaux." },
        { id: "french", question: "Les services sont-ils offerts en français?", answer: "Oui. FINMA offre ses services en français et en anglais." },
      ],
    },
    relatedServices: {
      eyebrow: "Conseil financier",
      heading: "Un accompagnement pour votre prochaine décision d’affaires.",
      items: [
        { label: "Finance d’entreprise", body: "Conseil financier stratégique pour la croissance, le capital et la valeur à long terme.", routeKey: "corporateFinance" },
        { label: "Fusions et acquisitions", body: "Un accompagnement pour acheter, vendre ou regrouper des entreprises.", routeKey: "maAdvisory" },
        { label: "Notre approche", body: "Comment les principes TEKIS orientent chaque mandat de FINMA.", routeKey: "ourApproach" },
      ],
    },
    finalCta: {
      eyebrow: "Parlons de votre entreprise",
      heading: "Clarifiez vos comptes et préparez votre prochaine déclaration de revenus des sociétés.",
      body: "Présentez-nous votre situation et le soutien recherché. Nous vous aiderons à définir les prochaines étapes.",
      primaryCta: "Réserver une consultation gratuite",
      secondaryCta: "Communiquer avec FINMA",
    },
  },

  footer: {
    ...en.footer,
    tagline:
      "Finance d'entreprise, F&A et gestion immobilière pour les PME canadiennes. Exécution dirigée par les associés, de la stratégie à la clôture.",
    servicesTitle: "Services",
    companyTitle: "Société",
    resourcesTitle: "Ressources",
    corporateFinance: "Finance d'entreprise",
    maAdvisory: "Fusions & acquisitions",
    ourApproach: "Notre approche",
    tekis: "Cadre TEKIS",
    propertyManagement: "Gestion immobilière",
    syndicateManagement: "Gestion de syndicats de copropriétés",
    corporateAccounting: "Comptabilité corporative / Déclarations de revenus",
    aboutFinma: "À propos de FINMA",
    whoWeAre: "Qui nous sommes",
    testimonials: "Témoignages",
    contactUs: "Nous joindre",
    privacyPolicy: "Politique de confidentialité",
    termsOfService: "Conditions d'utilisation",
    disclaimer:
      "Finma Canada Inc. est une société canadienne indépendante de conseil et de gestion. Nous ne sommes ni affiliés ni régis par l'Autorité fédérale de surveillance des marchés financiers de Suisse (FINMA).",
    copyright: "© 2026 Finma Canada Inc. Tous droits réservés.",
     telephoneLabel: "T :",
  telephoneDisplay: "1-877-FINMA-CA",
  telephoneHref: "+18773466222",

  faxLabel: "F :",
  faxDisplay: "1-438-228-1139",

  email: "info@finma.ca",
  },
};
