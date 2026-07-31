"use client";

import { useEffect, useMemo, useState } from "react";

type Lang = "fr" | "tn" | "en";

const copy = {
  fr: {
    nav: ["Services", "Réalisations", "Méthode", "FAQ"],
    start: "Démarrer un projet",
    eyebrow: "Studio créatif IA · Nabeul, Tunisie",
    heroA: "Des pubs IA qui", heroB: "ne ressemblent pas à de l’IA.",
    heroText: "Concept, storytelling, voix et production : nous transformons vos produits en contenus qui arrêtent le scroll — avec une vraie touche tunisienne.",
    audit: "Recevoir mon mini-audit", work: "Voir les réalisations",
    visualLabel: "Créé en Tunisie. Pensé pour performer partout.",
    strip: ["UGC hyper-réaliste", "Publicités produit", "Voix off Darja", "Storytelling social", "Production IA"],
    problemTag: "Le vrai problème",
    problemTitle: "Votre audience ne manque pas de contenu. Elle manque d’une raison de s’arrêter.",
    problemText: "Nous combinons l’intelligence des outils IA avec la compréhension des codes locaux pour produire plus vite, sans sacrifier l’idée, l’émotion ou la crédibilité.",
    pillars: [["01", "Attirer", "Des concepts visuels forts, pensés pour gagner les trois premières secondes."], ["02", "Convaincre", "Des démonstrations, histoires et UGC qui rendent votre produit évident."], ["03", "Convertir", "Des variations créatives adaptées à votre offre, votre canal et votre audience."]],
    serviceTag: "Ce que nous créons", serviceTitle: "Un studio agile, de l’idée au dernier cut.",
    services: [["AI UGC", "Des personnages et scènes hyper-réalistes pour présenter votre produit naturellement.", "Casting virtuel · Script · Voix · Montage"], ["Product ads", "Révélations produit, démonstrations et visuels cinématiques conçus pour les réseaux.", "Concept · Images · Animation · Sound design"], ["Contenu localisé", "Des histoires qui parlent vraiment à votre marché, en français, Darja ou anglais.", "Adaptation culturelle · Voice-over · Sous-titres"]],
    selected: "Sélection récente", workTitle: "Des idées qui prennent vie, image après image.",
    workNote: "Extraits de Reels publiés sur notre Instagram. Cliquez pour voir le contenu original.",
    projects: [["Produit → Reel", "Une image produit transformée en vidéo de vente hyper-réaliste."], ["Culture & sport", "Création visuelle forte autour d’un moment qui rassemble."], ["Hyper Reel", "Un contenu ordinaire repensé pour gagner en valeur perçue."], ["UGC tunisien", "Une histoire locale racontée avec des personnages générés par IA."], ["Démo produit", "Une situation d’usage simple, claire et immédiatement compréhensible."]],
    allInstagram: "Explorer notre Instagram", methodTag: "Notre méthode",
    methodTitle: "Moins de friction. Plus d’idées en mouvement.",
    steps: [["01", "Diagnostic", "On clarifie l’offre, l’audience et le résultat attendu."], ["02", "Concept", "On construit l’angle, le script et la direction visuelle."], ["03", "Production", "On génère, anime, donne une voix et monte chaque scène."], ["04", "Optimisation", "On décline les meilleurs angles pour vos canaux."]],
    diagTag: "Mini-brief interactif", diagTitle: "Quel contenu peut débloquer votre croissance ?",
    diagText: "Trois choix. Une recommandation claire. Aucun formulaire interminable.",
    questions: ["Votre priorité aujourd’hui ?", "Quel format vous intéresse ?", "Quand voulez-vous lancer ?"],
    options: [["Faire connaître ma marque", "Vendre un produit", "Créer régulièrement"], ["UGC / témoignage", "Pub produit", "Série de contenus"], ["Dès que possible", "Ce mois-ci", "Je prépare mon projet"]],
    resultTag: "Votre piste créative", resultTitle: "Commencez par un concept pilote, puis déclinez ce qui capte le mieux l’attention.",
    resultText: "Votre mini-brief est prêt. Envoyez-le-nous : nous reviendrons avec un premier angle créatif adapté.",
    send: "Envoyer mon brief par Gmail", restart: "Recommencer", copyEmail: "Copier l’adresse email", copied: "Adresse copiée !",
    faqTag: "Questions fréquentes", faqTitle: "Clair avant de créer.",
    faqs: [["Est-ce que tout est généré par IA ?", "L’IA accélère la production. La stratégie, l’idée, la sélection et la finition restent dirigées humainement."], ["Pouvez-vous créer en Darja ?", "Oui. La localisation tunisienne, les voix et les codes culturels font partie de notre approche."], ["Quels produits pouvez-vous mettre en scène ?", "Produits physiques, applications, services et concepts de marque. Le brief nous aide à choisir le bon format."], ["Comment démarre un projet ?", "Envoyez le mini-brief ou un DM Instagram. Nous clarifions ensuite le besoin, les livrables et le calendrier."]],
    finalEyebrow: "Une idée en tête ?", finalTitle: "Faisons-en le contenu que votre audience n’oubliera pas.",
    finalText: "Écrivez-nous avec votre produit, votre objectif et une référence que vous aimez.",
    email: "Écrire par email", dm: "Envoyer un DM", based: "Basé à Nabeul · Disponible partout", rights: "AI Marketing Tunisia — Tous droits réservés.",
  },
  tn: {
    nav: ["الخدمات", "خدمتنا", "كيفاش نخدمو", "أسئلة"], start: "نبداو مشروع",
    eyebrow: "ستوديو إبداع بالـAI · نابل، تونس", heroA: "إشهار بالـAI", heroB: "ما يبانش مصنوع بالـAI.",
    heroText: "من الفكرة والستوري للـvoice-over والمونتاج: نحوّلو البرودوي متاعك لكونتنو يوقّف السكرول، بلمسة تونسية صحيحة.",
    audit: "نحب mini-audit", work: "نشوف خدمتكم", visualLabel: "مصنوع في تونس. يخدم وين ما كان.",
    strip: ["UGC واقعي", "إشهار برودوي", "Voice-over بالدارجة", "ستوري تعيش", "Production بالـAI"],
    problemTag: "المشكل الحقيقي", problemTitle: "الناس ما ينقصهاش كونتنو. ينقصها سبب باش توقف وتتفرّج.",
    problemText: "نخلطو قوة أدوات الـAI مع فهمنا للسوق والكودات التونسية، باش ننتجو أسرع من غير ما نضيّعو الفكرة والإحساس والمصداقية.",
    pillars: [["01", "نجبدو", "أفكار وصور قوية تشدّ الانتباه من أول 3 ثواني."], ["02", "نقنعو", "ديمو، حكايات وUGC يورّيو قيمة البرودوي بوضوح."], ["03", "نحوّلو", "نسخ كرياتيف متأقلمة مع العرض، القنال والجمهور."]],
    serviceTag: "شنوة نصنعو", serviceTitle: "ستوديو سريع، من الفكرة للـfinal cut.",
    services: [["AI UGC", "شخصيات ومشاهد واقعية تقدّم البرودوي بطريقة طبيعية.", "Casting virtuel · Script · Voix · Montage"], ["Product ads", "كشف برودوي، ديمو وصور سينمائية معمولة للسوشيال.", "Concept · Images · Animation · Sound design"], ["كونتنو محلّي", "حكايات تحكي بلغة السوق: بالدارجة، بالفرنسي ولا بالإنقليزي.", "Adaptation · Voice-over · Sous-titres"]],
    selected: "آخر الإبداعات", workTitle: "أفكار تولّي حقيقة، صورة بصورة.", workNote: "لقطات من Reels منشورين على Instagram. إضغط باش تشوف الأصل.",
    projects: [["من برودوي لـReel", "تصويرة برودوي تولّي فيديو بيع واقعي."], ["ثقافة وسبور", "Visual قوي على لحظة تجمع التوانسة."], ["Hyper Reel", "كونتنو عادي نطلّعولو القيمة."], ["UGC تونسي", "حكاية من ثقافتنا بشخصيات معمولة بالـAI."], ["Démo produit", "استعمال واضح وساهل يتفهم من أول نظرة."]],
    allInstagram: "نشوفو الكل على Instagram", methodTag: "كيفاش نخدمو", methodTitle: "تعطيل أقل. أفكار أكثر تتحرّك.",
    steps: [["01", "Diagnostic", "نفهمو العرض، الجمهور والنتيجة المطلوبة."], ["02", "Concept", "نبنيو الزاوية، السكريبت والـdirection visuelle."], ["03", "Production", "نصنعو، نحرّكو، نعطيو صوت ونركّبو المشاهد."], ["04", "Optimisation", "نخرّجو variations من أحسن الأفكار."]],
    diagTag: "Mini-brief تفاعلي", diagTitle: "شنوة الكونتنو اللي ينجم يحرّك مشروعك؟", diagText: "3 إختيارات. توصية واضحة. بلا فورمولار طويل.",
    questions: ["شنية الأولوية توّة؟", "شنوة الفورما اللي تحب عليه؟", "وقتاش تحب تطلق؟"],
    options: [["نعرّف بالبراند", "نبيع برودوي", "نصنع كونتنو بانتظام"], ["UGC / تجربة", "إشهار برودوي", "سلسلة كونتنو"], ["في أقرب وقت", "الشهر هذا", "مازلت نحضّر"]],
    resultTag: "الفكرة الأنسب ليك", resultTitle: "نبداو بكونسبت pilot، وبعد نطوّرو الزاوية اللي تشدّ أكثر.", resultText: "الـmini-brief حاضر. ابعثهولنا ونرجعولك بأول زاوية كرياتيف تناسب مشروعك.",
    send: "نبعث الـbrief بـGmail", restart: "نعاود", copyEmail: "ننسخ الإيميل", copied: "الإيميل تنسخ !", faqTag: "أسئلة تتعاود", faqTitle: "نفهمو كل شي قبل ما نبدعو.",
    faqs: [["كل شي مصنوع بالـAI؟", "الـAI يسرّع الإنتاج. أما الستراتيجي، الفكرة والـfinition يقودهم إنسان."], ["تنجموا تصنعوا بالدارجة؟", "إي. الدارجة، الصوت والكودات التونسية في قلب خدمتنا."], ["شنوة تنجموا تحطّو في الإشهار؟", "برودويات، applications، services وأفكار براند. الـbrief يحدّد أحسن فورما."], ["كيفاش نبداو؟", "ابعث الـmini-brief ولا DM على Instagram، وبعد نوضحو الخدمة والوقت."]],
    finalEyebrow: "عندك فكرة؟", finalTitle: "نحوّلوها لكونتنو جمهورك ما ينساهش.", finalText: "ابعثلنا البرودوي، الهدف وreference يعجبك.",
    email: "إيميل", dm: "DM على Instagram", based: "من نابل · نخدمو في كل بلاصة", rights: "AI Marketing Tunisia — الحقوق محفوظة.",
  },
  en: {
    nav: ["Services", "Work", "Process", "FAQ"], start: "Start a project",
    eyebrow: "AI creative studio · Nabeul, Tunisia", heroA: "AI ads that", heroB: "don’t look AI-made.",
    heroText: "Concept, storytelling, voice and production: we turn your products into scroll-stopping content—with an authentic Tunisian touch.",
    audit: "Get my mini-audit", work: "See our work", visualLabel: "Made in Tunisia. Built to perform anywhere.",
    strip: ["Hyper-real UGC", "Product ads", "Tunisian voice-over", "Social storytelling", "AI production"],
    problemTag: "The real problem", problemTitle: "Your audience doesn’t need more content. It needs a reason to stop.",
    problemText: "We combine the speed of AI tools with a sharp understanding of local culture to produce faster—without losing the idea, emotion or credibility.",
    pillars: [["01", "Attract", "Strong visual concepts designed to win the first three seconds."], ["02", "Persuade", "Demos, stories and UGC that make your product feel obvious."], ["03", "Convert", "Creative variations shaped around your offer, channel and audience."]],
    serviceTag: "What we create", serviceTitle: "One agile studio, from idea to final cut.",
    services: [["AI UGC", "Hyper-real characters and scenes that introduce your product naturally.", "Virtual casting · Script · Voice · Edit"], ["Product ads", "Product reveals, demos and cinematic visuals designed for social.", "Concept · Images · Animation · Sound"], ["Localized content", "Stories that speak your market’s language in Tunisian, French or English.", "Cultural adaptation · Voice-over · Subtitles"]],
    selected: "Recent selection", workTitle: "Ideas brought to life, frame by frame.", workNote: "Still frames from Reels published on our Instagram. Click to see the original.",
    projects: [["Product → Reel", "One product image transformed into a hyper-real sales video."], ["Culture & sport", "A bold visual built around a moment that brings people together."], ["Hyper Reel", "Ordinary content reworked to increase perceived value."], ["Tunisian UGC", "A local story told with AI-generated characters."], ["Product demo", "A simple use case that is instantly easy to understand."]],
    allInstagram: "Explore our Instagram", methodTag: "Our process", methodTitle: "Less friction. More ideas in motion.",
    steps: [["01", "Diagnose", "We clarify the offer, audience and desired outcome."], ["02", "Concept", "We build the angle, script and visual direction."], ["03", "Produce", "We generate, animate, voice and edit every scene."], ["04", "Optimize", "We turn the strongest angles into channel-ready variations."]],
    diagTag: "Interactive mini-brief", diagTitle: "What content could unlock your next growth step?", diagText: "Three choices. One clear recommendation. No endless form.",
    questions: ["What is your priority?", "Which format interests you?", "When do you want to launch?"],
    options: [["Build brand awareness", "Sell a product", "Create consistently"], ["UGC / testimonial", "Product ad", "Content series"], ["As soon as possible", "This month", "I’m still planning"]],
    resultTag: "Your creative direction", resultTitle: "Start with one pilot concept, then scale the angle that earns the most attention.", resultText: "Your mini-brief is ready. Send it and we’ll return with an initial creative angle for your brand.",
    send: "Send my brief with Gmail", restart: "Start again", copyEmail: "Copy email address", copied: "Email copied!", faqTag: "Frequently asked", faqTitle: "Clarity before creativity.",
    faqs: [["Is everything AI-generated?", "AI accelerates production. Strategy, ideas, selection and final craft remain human-directed."], ["Can you create in Tunisian Derja?", "Yes. Local language, voices and cultural codes are central to how we work."], ["What can you advertise?", "Physical products, apps, services and brand concepts. Your brief helps us pick the right format."], ["How does a project start?", "Send the mini-brief or an Instagram DM. We’ll clarify the need, deliverables and timing."]],
    finalEyebrow: "Have an idea?", finalTitle: "Let’s turn it into content your audience remembers.", finalText: "Send us your product, your goal and one reference you love.",
    email: "Email us", dm: "Send a DM", based: "Based in Nabeul · Available everywhere", rights: "AI Marketing Tunisia — All rights reserved.",
  },
} as const;

const projectLinks = ["https://www.instagram.com/reel/DYsN4QcufaY/", "https://www.instagram.com/reel/DaLVVZpNgA_/", "https://www.instagram.com/reel/DaGkOlOOqCT/", "https://www.instagram.com/reel/DZnBZNJNh1j/", "https://www.instagram.com/reel/DZX2LpDOfUX/"];
const projectImages = ["/work/reel-01.jpg", "/work/reel-02.jpg", "/work/reel-03.jpg", "/work/reel-04.jpg", "/work/reel-05.jpg"];

export default function AgencySite() {
  const [lang, setLang] = useState<Lang>("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "tn" ? "ar-TN" : lang;
    document.documentElement.dir = lang === "tn" ? "rtl" : "ltr";
  }, [lang]);

  const emailHref = useMemo(() => {
    const subject = lang === "tn" ? "Mini-brief — مشروع جديد" : lang === "en" ? "Mini-brief — New project" : "Mini-brief — Nouveau projet";
    const body = `${t.questions.map((q, i) => `${q}\n${answers[i] || "—"}`).join("\n\n")}\n\nInstagram / site : `;
    return `https://mail.google.com/mail/?view=cm&fs=1&to=aimarketingagencytn@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [answers, lang, t.questions]);

  const directEmailHref = useMemo(() => {
    const subject = lang === "tn" ? "مشروع جديد" : lang === "en" ? "New project inquiry" : "Demande de nouveau projet";
    return `https://mail.google.com/mail/?view=cm&fs=1&to=aimarketingagencytn@gmail.com&su=${encodeURIComponent(subject)}`;
  }, [lang]);

  function choose(answer: string) { const next = [...answers]; next[step] = answer; setAnswers(next); setStep(step + 1); }
  function resetQuiz() { setAnswers([]); setStep(0); }
  async function copyEmailAddress() {
    const email = "aimarketingagencytn@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const field = document.createElement("textarea");
      field.value = email;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  }
  function trackPointer(event: React.PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <main onPointerMove={trackPointer}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AI Marketing Tunisia"><img src="/brand/instagram-logo.jpg" alt="Logo AI Marketing Tunisia" /><span>AI Marketing<br /><b>Tunisia</b></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Menu">{menuOpen ? "×" : "＋"}</button>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Navigation principale">
          {t.nav.map((item, i) => <a key={item} href={["#services", "#realisations", "#methode", "#faq"][i]} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <div className="lang-switch" aria-label="Langue">{(["fr", "tn", "en"] as Lang[]).map(code => <button key={code} className={lang === code ? "active" : ""} onClick={() => setLang(code)} aria-pressed={lang === code}>{code === "tn" ? "تونسي" : code.toUpperCase()}</button>)}</div>
          <a className="button button-dark header-cta" href="#diagnostic">{t.start} <span>↗</span></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span></span>{t.eyebrow}</p><h1>{t.heroA}<br /><em>{t.heroB}</em></h1><p className="hero-text">{t.heroText}</p>
          <div className="hero-actions"><a className="button button-accent" href="#diagnostic">{t.audit} <span>↘</span></a><a className="text-link" href="#realisations">{t.work} <span>↗</span></a></div>
          <div className="proof-row"><span><b>FR</b> / تونسي / EN</span><span>Nabeul · Tunisia</span><span>Social-first</span></div>
        </div>
        <div className="hero-visual" aria-label="Sélection de créations AI Marketing Tunisia">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <figure className="frame frame-main"><img src="/work/product-reel-volcano.png" alt="Publicité produit avec une créatrice devant un volcan" /></figure>
          <figure className="frame frame-top"><img src="/work/reel-04.jpg" alt="Création UGC tunisienne" /></figure>
          <figure className="frame frame-bottom"><img src="/work/reel-05.jpg" alt="Démonstration produit" /></figure>
          <div className="made-stamp"><span>AI</span><small>MADE IN<br />NABEUL</small></div><p className="visual-caption">{t.visualLabel}</p>
        </div>
      </section>
      <div className="ticker" aria-label="Expertises"><div>{[...t.strip, ...t.strip].map((item, i) => <span key={`${item}-${i}`}>{item}<b>✦</b></span>)}</div></div>

      <section className="problem section-pad">
        <div className="section-heading"><p className="section-tag">{t.problemTag}</p><h2>{t.problemTitle}</h2></div>
        <div className="problem-side"><p>{t.problemText}</p><a href="#services" className="round-link" aria-label={t.serviceTag}>↓</a></div>
        <div className="pillars">{t.pillars.map(([num, title, text]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading split-heading"><div><p className="section-tag">{t.serviceTag}</p><h2>{t.serviceTitle}</h2></div><div className="service-orb">AI<br /><small>× HUMAN</small></div></div>
        <div className="service-list">{t.services.map(([title, text, details], i) => <article key={title} className="service-card"><span className="service-num">0{i + 1}</span><h3>{title}</h3><p>{text}</p><small>{details}</small><span className="service-arrow">↗</span></article>)}</div>
      </section>

      <section className="work section-pad" id="realisations">
        <div className="work-intro"><p className="section-tag">{t.selected}</p><h2>{t.workTitle}</h2><p>{t.workNote}</p></div>
        <div className="work-grid">{t.projects.map(([title, description], i) => <a key={title} className={`work-card work-${i + 1}`} href={projectLinks[i]} target="_blank" rel="noreferrer"><img src={projectImages[i]} alt={title} /><span className="work-index">0{i + 1}</span><div className="work-overlay"><h3>{title}</h3><p>{description}</p><b>↗</b></div></a>)}</div>
        <a className="instagram-link" href="https://www.instagram.com/aimarketingagencytn/" target="_blank" rel="noreferrer">@aimarketingagencytn <span>{t.allInstagram} ↗</span></a>
      </section>

      <section className="method section-pad" id="methode">
        <div className="section-heading"><p className="section-tag light">{t.methodTag}</p><h2>{t.methodTitle}</h2></div>
        <div className="steps">{t.steps.map(([num, title, text]) => <article key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="diagnostic section-pad" id="diagnostic">
        <div className="diag-copy"><p className="section-tag">{t.diagTag}</p><h2>{t.diagTitle}</h2><p>{t.diagText}</p><div className="diag-progress" aria-label={`${Math.min(step, 3)} / 3`}><span style={{ width: `${Math.min(step, 3) * 33.333}%` }}></span></div></div>
        <div className="quiz-card">
          {step < 3 ? <><span className="quiz-count">0{step + 1} / 03</span><h3>{t.questions[step]}</h3><div className="quiz-options">{t.options[step].map(option => <button key={option} onClick={() => choose(option)}><span></span>{option}<b>→</b></button>)}</div></> :
          <div className="quiz-result"><span className="result-check">✓</span><p className="section-tag">{t.resultTag}</p><h3>{t.resultTitle}</h3><p>{t.resultText}</p><div className="answer-chips">{answers.map(answer => <span key={answer}>{answer}</span>)}</div><div className="email-actions"><a className="button button-accent" href={emailHref} target="_blank" rel="noreferrer">{t.send} <span>↗</span></a><button className="copy-email" type="button" onClick={copyEmailAddress}>{copied ? t.copied : t.copyEmail}</button></div><button className="restart" onClick={resetQuiz}>{t.restart}</button></div>}
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="faq-title"><p className="section-tag">{t.faqTag}</p><h2>{t.faqTitle}</h2></div>
        <div className="faq-list">{t.faqs.map(([question, answer], i) => <details key={question} open={i === 0}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="final-cta"><p className="eyebrow light"><span></span>{t.finalEyebrow}</p><h2>{t.finalTitle}</h2><p>{t.finalText}</p><div><a className="button button-accent" href={directEmailHref} target="_blank" rel="noreferrer">{t.email} ↗</a><button className="button button-outline" type="button" onClick={copyEmailAddress}>{copied ? t.copied : t.copyEmail}</button><a className="button button-outline" href="https://www.instagram.com/aimarketingagencytn/" target="_blank" rel="noreferrer">{t.dm} ↗</a></div></section>
      <footer>
        <a className="brand footer-brand" href="#top"><img src="/brand/instagram-logo.jpg" alt="" /><span>AI Marketing<br /><b>Tunisia</b></span></a>
        <div className="footer-contact"><a href={directEmailHref} target="_blank" rel="noreferrer">aimarketingagencytn@gmail.com</a><button className="footer-copy" type="button" onClick={copyEmailAddress}>{copied ? t.copied : t.copyEmail}</button><p>{t.based}</p></div>
        <p className="copyright">© {new Date().getFullYear()} {t.rights}</p>
      </footer>
      <a className="mobile-cta" href="#diagnostic">{t.audit} ↗</a>
    </main>
  );
}
