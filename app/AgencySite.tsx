"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from "react";

type Lang = "fr" | "tn" | "en";

const instagramProfile = "https://www.instagram.com/aimarketingagencytn/";
const trendCaseUrl = "https://www.instagram.com/p/DYVANyKC1O5/";
const ugcCaseUrl = "https://www.instagram.com/p/DZYIbyDuWxz/";

const staticAds = [
  { src: "/work/static-ads/tunisian-rocking-chair-comparison-ad.webp", angle: "Comparison", alt: "Publicité comparative tunisienne pour une chaise basculante en bois massif et cuir capitonné" },
  { src: "/work/static-ads/rocking-chair-comfort-comparison-ad.webp", angle: "Problem / solution", alt: "Publicité problème solution comparant une chaise basculante confortable à une chaise ordinaire" },
  { src: "/work/static-ads/luxury-rocking-chair-back-comfort-ad.webp", angle: "Benefit", alt: "Publicité tunisienne mettant en avant le confort du dos d'une chaise basculante de luxe" },
  { src: "/work/static-ads/tunisian-rocking-chair-lifestyle-ad.webp", angle: "Lifestyle", alt: "Publicité lifestyle tunisienne montrant une femme détendue dans une chaise basculante" },
  { src: "/work/static-ads/rocking-chair-cat-comfort-ad.webp", angle: "Emotion", alt: "Publicité émotionnelle avec un chat dormant dans une chaise basculante confortable" },
  { src: "/work/static-ads/solid-wood-tufted-leather-rocking-chair-ad.webp", angle: "Product detail", alt: "Gros plan publicitaire sur le bois massif et le cuir capitonné d'une chaise basculante" },
] as const;

const copy = {
  fr: {
    nav: ["Offres", "Résultats", "Créations", "Méthode", "FAQ"],
    dm: "Envoyer mon produit",
    eyebrow: "Performance creative agency · Tunisie",
    heroA: "Des pubs qui arrêtent le scroll.",
    heroB: "Et donnent envie d’acheter.",
    heroText: "Vidéos publicitaires, UGC en Derja et visuels statiques pour les commerces, services et marques e-commerce tunisiennes.",
    heroNote: "Pas de script ? Pas de stratégie ? Envoyez une photo. Nous trouvons l’angle.",
    seeCases: "Voir nos concepts",
    visualTag: "Vidéo + statique",
    visualText: "Pensé pour attirer. Construit pour convaincre.",
    proofTrend: "sur une création trend originale",
    proofComments: "commentaires organiques",
    proofLanguages: "Français · Derja · English",
    problemTag: "Votre point de départ",
    problemTitle: "Vous avez le produit. Pas encore l’angle qui peut le vendre.",
    problemText: "La plupart de nos clients arrivent avec une photo, une référence concurrente ou simplement l’envie de publier. Nous transformons ce point de départ en concept, hook, script et création prête à lancer.",
    situations: [
      ["01", "Je ne sais pas quoi publier", "Nous construisons la stratégie créative autour de l’offre, du public et de l’objection principale."],
      ["02", "Je veux utiliser une tendance", "Nous adaptons le mécanisme de la trend à votre produit et aux codes tunisiens."],
      ["03", "Je veux un contenu comme celui-ci", "Nous décodons pourquoi la référence fonctionne, puis créons un angle original pour votre marque."],
    ],
    offersTag: "Ce que nous produisons",
    offersTitle: "Un produit. Plusieurs façons de le rendre désirable.",
    offersNote: "Production créative uniquement — nous ne gérons pas l’achat média.",
    offers: [
      ["Performance video ads", "Hooks, démonstrations, objections, bénéfices et mises en situation conçus pour vendre le produit.", "UGC · Product demo · B-roll · Voice-over"],
      ["Trend-to-brand content", "Des tendances transformées en histoires de marque naturelles, rapides et culturellement justes.", "Trend scouting · Concept · Derja · Montage"],
      ["Static ad systems", "Plusieurs angles visuels pour tester ce qui attire, rassure et déclenche le clic.", "Comparaison · Bénéfice · Lifestyle · Offre"],
    ],
    caseTag: "Creative case 01",
    caseTitle: "Une trend tunisienne transformée en conversation de marque.",
    caseText: "Concept, storytelling et exécution créés de zéro autour de Fraisita et Bananito, avec une adaptation naturelle en Derja.",
    caseSteps: ["Trend repérée", "Twist tunisien", "Marque intégrée", "Conversation déclenchée"],
    viewPost: "Voir la création originale",
    likes: "J’aime",
    comments: "Commentaires",
    staticTag: "Static creative system",
    staticTitle: "Six angles. Un seul produit. Zéro répétition.",
    staticText: "Ces créations partent d’une simple photo produit. Chaque visuel attaque une motivation différente : comparer, rassurer, projeter, émouvoir ou prouver la qualité.",
    ugcTag: "Creative case 02",
    ugcTitle: "Un produit fonctionnel vendu par l’émotion.",
    ugcText: "UGC tunisien en Derja avec B-roll cuts : le produit devient une idée de cadeau liée au Hajj et à la Omra, pas seulement un objet à présenter.",
    ugcChips: ["Derja naturelle", "Hook émotionnel", "B-roll produit", "Format social"],
    viewUgc: "Voir le UGC",
    methodTag: "Comment ça marche",
    methodTitle: "De la photo au concept prêt à lancer.",
    steps: [
      ["01", "Envoyez le produit", "Une photo, votre objectif et une référence si vous en avez une."],
      ["02", "Nous trouvons l’angle", "Framework, hook, émotion et structure adaptés à votre audience."],
      ["03", "Nous produisons", "Vidéo, UGC, voix, B-roll ou visuels statiques selon le concept."],
      ["04", "Vous lancez", "Vous recevez des créations prêtes pour vos réseaux et campagnes."],
    ],
    starterTag: "Premier angle offert",
    starterTitle: "Envoyez une photo. Recevez une piste créative.",
    starterText: "Pas de formulaire. Ouvrez Instagram, envoyez votre produit et dites-nous ce que vous voulez vendre. Nous vous répondons avec un premier angle à explorer.",
    starterItems: ["Une photo produit", "Votre objectif", "Une référence, si vous en avez une"],
    starterCta: "Démarrer en DM Instagram",
    faqTag: "Questions fréquentes",
    faqTitle: "Clair avant de créer.",
    faqs: [
      ["Gérez-vous les campagnes publicitaires ?", "Non. Nous sommes spécialisés dans la stratégie et la production créative : vidéos et visuels statiques prêts à utiliser dans vos campagnes."],
      ["Je n’ai ni script ni stratégie. Je peux quand même vous contacter ?", "Oui. C’est précisément notre rôle : transformer votre produit et votre objectif en angles, hooks et concepts publicitaires."],
      ["Une photo du produit suffit-elle ?", "Oui pour démarrer. Selon le concept, nous pouvons construire une création complète à partir de votre photo et des informations essentielles sur l’offre."],
      ["Pouvez-vous créer en Derja tunisienne ?", "Oui. La langue, le ton et les références culturelles tunisiennes sont au cœur de notre différence."],
      ["Pouvez-vous reproduire une publicité que j’aime ?", "Nous utilisons votre référence pour comprendre le mécanisme qui vous plaît, puis nous créons une exécution originale adaptée à votre marque."],
    ],
    finalTag: "Votre produit mérite un meilleur angle",
    finalTitle: "Vous envoyez la photo. Nous imaginons la pub.",
    finalText: "DM avec votre produit, votre objectif et une référence. Nous revenons avec une première piste créative.",
    based: "Basé à Nabeul · Créations disponibles partout",
    rights: "AI Marketing Tunisia — Tous droits réservés.",
  },
  tn: {
    nav: ["شنوة نصنعو", "النتائج", "الكرياتيف", "كيفاش نخدمو", "أسئلة"],
    dm: "ابعث البرودوي",
    eyebrow: "Performance creative agency · تونس",
    heroA: "إشهار يوقّف السكرول.",
    heroB: "ويخلّي الناس تحب تشري.",
    heroText: "Video ads، UGC بالدارجة وstatic visuals للتجار، الخدمات والـe-commerce التونسي.",
    heroNote: "ما عندكش script ولا stratégie؟ ابعث تصويرة وإحنا نلقاو الزاوية.",
    seeCases: "شوف الكونسبتات",
    visualTag: "Video + Static",
    visualText: "يشدّ الانتباه. يقنع. يبيع.",
    proofTrend: "على trend creative أصلية",
    proofComments: "تعليقات طبيعية",
    proofLanguages: "Français · Derja · English",
    problemTag: "منين نبدأو",
    problemTitle: "عندك البرودوي. أما مازلت ما لقيتش الزاوية اللي تبيعو.",
    problemText: "أغلب الحرفاء يجيونا بتصويرة، reference لمنافس ولا حتى فكرة بسيطة. إحنا نحوّلوها لconcept، hook، script وكرياتيف حاضر للإطلاق.",
    situations: [
      ["01", "ما نعرفش شنوة نهبّط", "نبنيو stratégie créative على العرض، الجمهور وأهم اعتراض عند الحريف."],
      ["02", "نحب نستعمل trend", "نأقلمو الـtrend مع البرودوي والكودات التونسية بطريقة طبيعية."],
      ["03", "نحب كونتنو كيف هذا", "نفهمو علاش الـreference تخدم ونصنعو زاوية أصلية للبراند متاعك."],
    ],
    offersTag: "شنوة ننتجو",
    offersTitle: "برودوي واحد. برشة طرق باش نخليوه مرغوب.",
    offersNote: "نصنعو الكرياتيف فقط — ما نسيّروشوش الإعلانات المدفوعة.",
    offers: [
      ["Performance video ads", "Hooks، demos، objections وbenefits معمولين باش يورّيو قيمة البرودوي.", "UGC · Product demo · B-roll · Voice-over"],
      ["Trend-to-brand content", "Trends نردّوها حكايات براند طبيعية وسريعة وتحكي تونسي صحيح.", "Trend scouting · Concept · Derja · Montage"],
      ["Static ad systems", "زوايا بصرية مختلفة باش تختبر شنوة يشدّ، يطمّن ويجيب الكليك.", "Comparaison · Bénéfice · Lifestyle · Offre"],
    ],
    caseTag: "Creative case 01",
    caseTitle: "Trend تونسية ولّت conversation حول البراند.",
    caseText: "Concept، storytelling وتنفيذ من الصفر حول Fraisita وBananito مع adaptation طبيعية بالدارجة.",
    caseSteps: ["لقينا الـtrend", "زدنا twist تونسي", "دخلنا البراند", "خلقنا conversation"],
    viewPost: "شوف الكرياتيف الأصلية",
    likes: "J’aime",
    comments: "تعليقات",
    staticTag: "Static creative system",
    staticTitle: "6 زوايا. برودوي واحد. بلا تكرار.",
    staticText: "الكل بدا بتصويرة برودوي. كل visual يخدم motivation مختلفة: نقارنو، نطمّنو، نخليو الحريف يتخيّل، نحركو الإحساس ولا نورّيو الجودة.",
    ugcTag: "Creative case 02",
    ugcTitle: "برودوي عملي بعناه بالإحساس.",
    ugcText: "UGC تونسي بالدارجة مع B-roll cuts: البرودوي ولّى هدية مرتبطة بالحج والعمرة، موش مجرد حاجة نعرضوها.",
    ugcChips: ["دارجة طبيعية", "Hook عاطفي", "B-roll برودوي", "Format social"],
    viewUgc: "شوف الـUGC",
    methodTag: "كيفاش نخدمو",
    methodTitle: "من التصويرة لكونسبت حاضر للإطلاق.",
    steps: [
      ["01", "ابعث البرودوي", "تصويرة، الهدف وreference كان عندك."],
      ["02", "نلقاو الزاوية", "Framework، hook، emotion وstructure يناسبو جمهورك."],
      ["03", "ننتجو", "Video، UGC، صوت، B-roll ولا static visuals حسب الكونسبت."],
      ["04", "إنت تطلق", "تاخو كرياتيف حاضر للسوشيال والحملات."],
    ],
    starterTag: "أول زاوية علينا",
    starterTitle: "ابعث تصويرة. خذ piste créative.",
    starterText: "بلا formulaire. ابعث البرودوي على Instagram وقلنا شنوة تحب تبيع. نرجعولك بأول زاوية تنجم تخدم.",
    starterItems: ["تصويرة برودوي", "الهدف متاعك", "Reference كان عندك"],
    starterCta: "نبدأو بـDM Instagram",
    faqTag: "أسئلة تتعاود",
    faqTitle: "كل شي واضح قبل ما نبدعو.",
    faqs: [
      ["تسيّرو الإعلانات المدفوعة؟", "لا. إحنا متخصصين في stratégie والproduction créative: videos وstatic visuals حاضرين للحملات."],
      ["ما عنديش script ولا stratégie، نجم نكلمكم؟", "إي. هذا بالضبط دورنا: نحوّلو البرودوي والهدف لزوايا، hooks وconcepts إشهارية."],
      ["تصويرة برودوي تكفي؟", "تكفي باش نبدأو. حسب الكونسبت، ننجمو نبنيو الكرياتيف من التصويرة والمعلومات الأساسية على العرض."],
      ["تنجموا تصنعوا بالدارجة؟", "إي. اللغة، الtone والكودات الثقافية التونسية في قلب خدمتنا."],
      ["تنجموا تعاودوا إشهار عجبني؟", "نستعملو الـreference باش نفهمو علاش خدم، وبعد نصنعو execution أصلية تناسب البراند متاعك."],
    ],
    finalTag: "البرودوي يستحق زاوية أقوى",
    finalTitle: "إنت تبعث التصويرة. إحنا نتخيّلو الإشهار.",
    finalText: "ابعث البرودوي، الهدف وreference في DM. نرجعولك بأول piste créative.",
    based: "من نابل · نخدمو وين ما كان",
    rights: "AI Marketing Tunisia — الحقوق محفوظة.",
  },
  en: {
    nav: ["Offers", "Results", "Creative", "Process", "FAQ"],
    dm: "Send your product",
    eyebrow: "Performance creative agency · Tunisia",
    heroA: "Ads that stop the scroll.",
    heroB: "And make people want the product.",
    heroText: "Video ads, Tunisian UGC and static creatives for local shops, service businesses and ecommerce brands.",
    heroNote: "No script? No strategy? Send a product photo. We will find the angle.",
    seeCases: "See our concepts",
    visualTag: "Video + static",
    visualText: "Built to attract. Structured to persuade.",
    proofTrend: "on one original trend creative",
    proofComments: "organic comments",
    proofLanguages: "French · Derja · English",
    problemTag: "Your starting point",
    problemTitle: "You have the product. Not yet the angle that can sell it.",
    problemText: "Most clients arrive with a photo, a competitor reference or simply the need to post. We turn that starting point into a concept, hook, script and launch-ready creative.",
    situations: [
      ["01", "I don’t know what to post", "We build the creative strategy around your offer, audience and biggest objection."],
      ["02", "I want to use a trend", "We adapt the trend’s mechanism to your product and Tunisian culture."],
      ["03", "I want content like this", "We decode why the reference works, then create an original angle for your brand."],
    ],
    offersTag: "What we produce",
    offersTitle: "One product. Many ways to make it desirable.",
    offersNote: "Creative production only — we do not manage media buying.",
    offers: [
      ["Performance video ads", "Hooks, demonstrations, objections, benefits and scenarios designed to sell the product.", "UGC · Product demo · B-roll · Voice-over"],
      ["Trend-to-brand content", "Trends transformed into fast, natural and culturally relevant brand stories.", "Trend scouting · Concept · Derja · Edit"],
      ["Static ad systems", "Multiple visual angles to test what attracts, reassures and earns the click.", "Comparison · Benefit · Lifestyle · Offer"],
    ],
    caseTag: "Creative case 01",
    caseTitle: "A Tunisian trend turned into a brand conversation.",
    caseText: "Concept, storytelling and execution built from scratch around Fraisita and Bananito, naturally adapted in Tunisian Derja.",
    caseSteps: ["Trend spotted", "Tunisian twist", "Brand integrated", "Conversation created"],
    viewPost: "View the original creative",
    likes: "Likes",
    comments: "Comments",
    staticTag: "Static creative system",
    staticTitle: "Six angles. One product. Zero repetition.",
    staticText: "Every creative started with a simple product photo. Each visual targets a different motivation: comparison, reassurance, aspiration, emotion or quality proof.",
    ugcTag: "Creative case 02",
    ugcTitle: "A functional product sold through emotion.",
    ugcText: "Tunisian Derja UGC with B-roll cuts: the product becomes a meaningful Hajj and Umrah gift rather than an object to display.",
    ugcChips: ["Natural Derja", "Emotional hook", "Product B-roll", "Social format"],
    viewUgc: "Watch the UGC",
    methodTag: "How it works",
    methodTitle: "From product photo to launch-ready concept.",
    steps: [
      ["01", "Send the product", "One photo, your objective and a reference if you have one."],
      ["02", "We find the angle", "Framework, hook, emotion and structure adapted to your audience."],
      ["03", "We produce", "Video, UGC, voice, B-roll or static visuals depending on the concept."],
      ["04", "You launch", "Receive creatives ready for social channels and campaigns."],
    ],
    starterTag: "First angle on us",
    starterTitle: "Send a photo. Receive a creative direction.",
    starterText: "No form. Open Instagram, send your product and tell us what you want to sell. We will reply with a first angle to explore.",
    starterItems: ["One product photo", "Your objective", "A reference, if you have one"],
    starterCta: "Start in Instagram DM",
    faqTag: "Frequently asked",
    faqTitle: "Clarity before creativity.",
    faqs: [
      ["Do you manage advertising campaigns?", "No. We specialize in creative strategy and production: video and static creatives ready to use in your campaigns."],
      ["I have no script or strategy. Can I still contact you?", "Yes. That is exactly our role: turning your product and objective into advertising angles, hooks and concepts."],
      ["Is one product photo enough?", "It is enough to start. Depending on the concept, we can build a complete creative from your photo and the essential offer details."],
      ["Can you create in Tunisian Derja?", "Yes. Tunisian language, tone and cultural codes are central to our difference."],
      ["Can you reproduce an ad I like?", "We use your reference to understand the mechanism you like, then create an original execution adapted to your brand."],
    ],
    finalTag: "Your product deserves a stronger angle",
    finalTitle: "You send the photo. We imagine the ad.",
    finalText: "DM your product, objective and one reference. We will return with a first creative direction.",
    based: "Based in Nabeul · Creating everywhere",
    rights: "AI Marketing Tunisia — All rights reserved.",
  },
} as const;

export default function AgencySite() {
  const [lang, setLang] = useState<Lang>("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "tn" ? "ar-TN" : lang;
    document.documentElement.dir = lang === "tn" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    const update = () => {
      const starter = document.querySelector("#starter");
      const rect = starter?.getBoundingClientRect();
      const starterVisible = rect ? rect.top < window.innerHeight && rect.bottom > 0 : false;
      setShowMobileCta(window.scrollY > 560 && !starterVisible);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const navIds = ["offers", "results", "creative", "method", "faq"];
  const year = useMemo(() => new Date().getFullYear(), []);

  function chooseLang(next: Lang) {
    setLang(next);
    setMenuOpen(false);
  }

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AI Marketing Tunisia">
          <img src="/brand/instagram-logo.jpg" alt="" width="46" height="46" />
          <span>AI Marketing<br /><b>Tunisia</b></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Menu">{menuOpen ? "×" : "＋"}</button>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Navigation principale">
          {t.nav.map((label, i) => <a key={navIds[i]} href={`#${navIds[i]}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <div className="lang-switch" aria-label="Langue">
            {(["fr", "tn", "en"] as Lang[]).map(code => <button key={code} className={lang === code ? "active" : ""} onClick={() => chooseLang(code)} aria-pressed={lang === code}>{code === "tn" ? "تونسي" : code.toUpperCase()}</button>)}
          </div>
          <a className="button button-dark header-cta" href={instagramProfile} target="_blank" rel="noreferrer">{t.dm} <span>↗</span></a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span />{t.eyebrow}</p>
          <h1>{t.heroA}<em>{t.heroB}</em></h1>
          <p className="hero-text">{t.heroText}</p>
          <div className="hero-actions">
            <a className="button button-accent" href={instagramProfile} target="_blank" rel="noreferrer">{t.dm} <span>↗</span></a>
            <a className="text-link" href="#results">{t.seeCases} <span>↓</span></a>
          </div>
          <p className="hero-note"><span>✓</span>{t.heroNote}</p>
        </div>
        <div className="hero-visual" aria-label="Sélection de créations AI Marketing Tunisia">
          <div className="hero-disc" />
          <figure className="hero-frame hero-frame-main"><img src="/work/reel-01.jpg" alt="Création publicitaire produit" /></figure>
          <figure className="hero-frame hero-frame-left"><img src="/work/reel-04.jpg" alt="UGC tunisien" /></figure>
          <figure className="hero-frame hero-frame-right"><img src="/work/static-ads/tunisian-rocking-chair-lifestyle-ad.webp" alt="Publicité statique lifestyle" /></figure>
          <div className="hero-stamp"><b>AI</b><small>× HUMAN</small></div>
          <div className="hero-visual-label"><span>{t.visualTag}</span><b>{t.visualText}</b></div>
        </div>
      </section>

      <section className="proof-band" aria-label="Résultats et capacités">
        <a href={trendCaseUrl} target="_blank" rel="noreferrer"><strong>34.5K</strong><span>{t.likes}<br />{t.proofTrend}</span></a>
        <a href={trendCaseUrl} target="_blank" rel="noreferrer"><strong>638</strong><span>{t.proofComments}<br />Fraisita × Bananito</span></a>
        <div><strong>3</strong><span>{t.proofLanguages}<br />Local-first creative</span></div>
      </section>

      <section className="problem section-pad">
        <div className="section-heading">
          <p className="section-tag">{t.problemTag}</p>
          <div><h2>{t.problemTitle}</h2><p className="section-lead">{t.problemText}</p></div>
        </div>
        <div className="situation-grid">
          {t.situations.map(([num, title, text]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="offers section-pad" id="offers">
        <div className="section-heading compact">
          <p className="section-tag">{t.offersTag}</p>
          <div><h2>{t.offersTitle}</h2><p className="production-note">{t.offersNote}</p></div>
        </div>
        <div className="offer-list">
          {t.offers.map(([title, text, deliverables], i) => <article key={title}><span className="offer-num">0{i + 1}</span><h3>{title}</h3><p>{text}</p><small>{deliverables}</small><b>↗</b></article>)}
        </div>
      </section>

      <section className="trend-case section-pad" id="results">
        <div className="case-copy">
          <p className="section-tag light">{t.caseTag}</p>
          <h2>{t.caseTitle}</h2>
          <p>{t.caseText}</p>
          <div className="case-path">{t.caseSteps.map((step, i) => <span key={step}>{step}{i < t.caseSteps.length - 1 && <b>→</b>}</span>)}</div>
          <a className="button button-accent" href={trendCaseUrl} target="_blank" rel="noreferrer">{t.viewPost} <span>↗</span></a>
        </div>
        <div className="metric-stage" aria-label="Résultats de la création">
          <div className="metric-orbit orbit-a" />
          <div className="metric-orbit orbit-b" />
          <div className="metric-card metric-large"><strong>34.5K</strong><span>{t.likes}</span></div>
          <div className="metric-card metric-small"><strong>638</strong><span>{t.comments}</span></div>
          <p>FRAISITA<br /><b>×</b> BANANITO</p>
        </div>
      </section>

      <section className="static-showcase section-pad" id="creative">
        <div className="static-intro">
          <p className="section-tag">{t.staticTag}</p>
          <h2>{t.staticTitle}</h2>
          <p>{t.staticText}</p>
        </div>
        <div className="static-grid">
          {staticAds.map((ad, i) => <figure key={ad.src} className={`static-ad static-ad-${i + 1}`}><img src={ad.src} alt={ad.alt} loading={i > 1 ? "lazy" : "eager"} width="1122" height="1402" /><figcaption><span>0{i + 1}</span>{ad.angle}</figcaption></figure>)}
        </div>
      </section>

      <section className="ugc-case section-pad">
        <div className="ugc-visual"><img src="/work/reel-04.jpg" alt="Exemple de création UGC tunisienne" loading="lazy" /><span>UGC<br />DERJA</span></div>
        <div className="ugc-copy">
          <p className="section-tag">{t.ugcTag}</p>
          <h2>{t.ugcTitle}</h2>
          <p>{t.ugcText}</p>
          <div className="chip-row">{t.ugcChips.map(chip => <span key={chip}>{chip}</span>)}</div>
          <a className="text-link" href={ugcCaseUrl} target="_blank" rel="noreferrer">{t.viewUgc} <span>↗</span></a>
        </div>
      </section>

      <section className="method section-pad" id="method">
        <div className="section-heading compact">
          <p className="section-tag light">{t.methodTag}</p>
          <h2>{t.methodTitle}</h2>
        </div>
        <div className="method-grid">{t.steps.map(([num, title, text]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="starter section-pad" id="starter">
        <div className="starter-copy">
          <p className="section-tag">{t.starterTag}</p>
          <h2>{t.starterTitle}</h2>
          <p>{t.starterText}</p>
          <a className="button button-dark" href={instagramProfile} target="_blank" rel="noreferrer">{t.starterCta} <span>↗</span></a>
        </div>
        <div className="starter-card">
          <div className="dm-top"><span className="dm-avatar">AI</span><div><b>@aimarketingagencytn</b><small>Instagram Direct</small></div><i>•••</i></div>
          <div className="dm-bubble">{t.starterItems.map((item, i) => <p key={item}><span>0{i + 1}</span>{item}</p>)}</div>
          <div className="dm-reply"><span>＋</span><b>{t.dm}…</b><i>➤</i></div>
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="faq-title"><p className="section-tag">{t.faqTag}</p><h2>{t.faqTitle}</h2></div>
        <div className="faq-list">{t.faqs.map(([question, answer], i) => <details key={question} open={i === 0}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="final-cta">
        <p className="eyebrow light"><span />{t.finalTag}</p>
        <h2>{t.finalTitle}</h2>
        <p>{t.finalText}</p>
        <a className="button button-accent" href={instagramProfile} target="_blank" rel="noreferrer">{t.starterCta} <span>↗</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><img src="/brand/instagram-logo.jpg" alt="" width="50" height="50" /><span>AI Marketing<br /><b>Tunisia</b></span></a>
        <div className="footer-contact"><a href={instagramProfile} target="_blank" rel="noreferrer">@aimarketingagencytn ↗</a><p>{t.based}</p></div>
        <p className="copyright">© {year} {t.rights}</p>
      </footer>

      <a className={`mobile-cta ${showMobileCta ? "visible" : ""}`} href={instagramProfile} target="_blank" rel="noreferrer">{t.dm} <span>↗</span></a>
    </main>
  );
}
