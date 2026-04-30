import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.features": "Features",
    "nav.merchants": "Merchants",
    "nav.contact": "Contact",

    "hero.badge": "Saudi Arabia's #1 Gift App",
    "hero.title": "The stores closest to you,\nright in your hands",
    "hero.subtitle": "Glorda shows you the best flower, cake, gift, and sweet stores near you across Riyadh, Jeddah, Dammam and all of Saudi Arabia — buy for yourself or send a gift for any occasion.",
    "hero.cta.apple": "Download on the App Store",
    "hero.cta.google": "Get it on Google Play",

    "about.title": "About Us",
    "about.desc1": "Glorda is a modern, specialized platform offering the finest flowers, gifts, chocolates, and cakes from the best stores across Saudi Arabia.",
    "about.intro.desc": "Glorda is a modern, specialized platform offering the finest flowers, gifts, chocolates, and cakes from the best stores across Saudi Arabia.",
    "about.what.title": "What We Offer",
    "about.what.desc": "The app aims to facilitate customer access to trusted stores offering premium products for various occasions, with the option to order for delivery or pick up from branches depending on the store type.",
    "about.vision.title": "Our Vision",
    "about.vision.desc": "Glorda was founded to be an innovative digital solution combining quality and ease — delivering a fully integrated shopping experience built on speed, precision, and reliability. The app lets users browse products, choose the perfect gift, communicate with stores via in-app messaging, and pay securely through multiple payment options.",
    "about.operator.title": "The Operating Entity",
    "about.operator.desc": "The app is operated and managed by Ali Lafi Al-Hasnani Foundation, officially registered with the Saudi Ministry of Commerce under registration number 7052888539, and verified on the e-commerce platform under number 0000209355.",
    "about.local.title": "Supporting Local Stores",
    "about.local.desc": "Since its founding, Glorda has sought to support local stores and empower them to reach a wider customer base, while ensuring a smooth and trustworthy user experience.",
    "about.feature.1": "Discover nearby stores instantly",
    "about.feature.2": "Set the delivery location precisely",
    "about.feature.3": "Browse products from specialized boutiques",
    "about.feature.4": "Buy for yourself or gift someone you love",
    "about.feature.5": "Fast, secure electronic payments",

    "features.title": "Why Glorda?",

    "feature.1.title": "Stores Near You",
    "feature.1.desc": "The app automatically shows you the nearest stores to your location or any delivery address you choose — no wasted time searching.",

    "feature.2.title": "Buy or Send a Gift",
    "feature.2.desc": "Order for yourself or enter any address to send a gift to a friend or loved one — straight from the store closest to them.",

    "feature.3.title": "Huge Variety in One Place",
    "feature.3.desc": "Flowers, cakes, gifts, and sweets — all categories, hundreds of specialized boutiques, one seamless app.",

    "feature.4.title": "Fast & Secure Payments",
    "feature.4.desc": "Pay in seconds with trusted payment gateways and top-tier encryption. Your data is always protected.",

    "feature.5.title": "Smooth Shopping Experience",
    "feature.5.desc": "A beautifully crafted interface designed to make finding and ordering the perfect gift effortless.",

    "howitworks.title": "How does it work?",
    "step.1.title": "Set your location",
    "step.1.desc": "Choose your location or the recipient's address.",
    "step.2.title": "Browse nearby stores",
    "step.2.desc": "Explore top-rated boutiques closest to you.",
    "step.3.title": "Choose a product",
    "step.3.desc": "Pick the perfect item from the store.",
    "step.4.title": "Pay securely",
    "step.4.desc": "Checkout in seconds, safely.",
    "step.5.title": "Receive or deliver",
    "step.5.desc": "Get it yourself or send it as a gift.",

    "screenshots.title": "See Glorda in Action",

    "testimonials.title": "What Our Customers Say",
    "review.1.name": "Noura Al-Qahtani",
    "review.1.role": "Customer – Riyadh",
    "review.1.text": "I surprised my mother on Mother's Day with a bouquet from a store right next to her. Her reaction was priceless. Glorda made it so easy.",
    "review.2.name": "Faisal Al-Otaibi",
    "review.2.role": "Customer – Jeddah",
    "review.2.text": "My friend's graduation gift arrived beautifully packaged from a top boutique near his university. Everyone was asking where I ordered from!",
    "review.3.name": "Rana Boutique",
    "review.3.role": "Merchant – Riyadh",
    "review.3.text": "Since joining Glorda, customers from our neighbourhood have been discovering us daily. Our Valentine's Day orders tripled this year.",
    "review.4.name": "Dana Al-Zahrani",
    "review.4.role": "Customer – Dammam",
    "review.4.text": "I sent a Valentine's gift to my sister in Jeddah without leaving Dammam. Found a stunning arrangement from a store near her. Absolutely seamless.",
    "review.5.name": "Al-Munasabat Bakery",
    "review.5.role": "Merchant – Jeddah",
    "review.5.text": "Ramadan, Eid, graduations — Glorda keeps our store busy all year round. The best decision we made was joining the platform.",

    "download.title": "Download Glorda Now",
    "download.subtitle": "Discover the best stores in Riyadh, Jeddah, Dammam and all of Saudi Arabia. Perfect for every occasion — Valentine's, Mother's Day, graduation, weddings, and Ramadan.",

    "join.badge": "Are you a merchant?",
    "join.title": "List your products on Glorda",
    "join.desc": "Join hundreds of specialized stores and reach customers who are looking for exactly what you offer — right in their neighborhood.",
    "join.feature.1": "Free & easy store setup",
    "join.feature.2": "Reach customers near your location",
    "join.feature.3": "Manage orders from one simple dashboard",
    "join.feature.4": "Grow your sales from day one",
    "join.cta": "Open Your Store for Free Now",

    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.contact": "Contact Us",
    "footer.rights": "© 2025 Glorda. All rights reserved."
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "عن التطبيق",
    "nav.features": "المميزات",
    "nav.merchants": "للتجار",
    "nav.contact": "اتصل بنا",

    "hero.badge": "تطبيق الهدايا الأول في السعودية",
    "hero.title": "أقرب المتاجر إليك،\nفي راحة يدك",
    "hero.subtitle": "غلوردا يعرض لك أفضل متاجر الورود والكيك والهدايا والحلويات في الرياض وجدة والدمام وجميع مناطق المملكة — اشترِ لنفسك أو أهدِ من تحب في أي مناسبة.",
    "hero.cta.apple": "حمّل من App Store",
    "hero.cta.google": "احصل عليه من Google Play",

    "about.title": "من نحن",
    "about.desc1": "تطبيق غلوردا هو منصة حديثة ومتخصصة في تقديم أجمل خيارات الورود والهدايا والشوكولاتة والكيك من أفضل المتاجر داخل المملكة العربية السعودية.",
    "about.intro.desc": "تطبيق غلوردا هو منصة حديثة ومتخصصة في تقديم أجمل خيارات الورود والهدايا والشوكولاتة والكيك من أفضل المتاجر داخل المملكة العربية السعودية.",
    "about.what.title": "ما نقدمه",
    "about.what.desc": "يهدف التطبيق إلى تسهيل وصول العملاء إلى المتاجر الموثوقة التي تقدم منتجات مميزة لمختلف المناسبات، مع إمكانية الطلب والتوصيل أو استلام الطلب من الفروع حسب نوع كل متجر.",
    "about.vision.title": "رؤيتنا",
    "about.vision.desc": "تأسس تطبيق غلوردا ليكون حلاً رقمياً مبتكراً يجمع بين الجودة والسهولة، ويقدم تجربة تسوق متكاملة تعتمد على السرعة والدقة والموثوقية. يتيح التطبيق للمستخدمين تصفح المنتجات، اختيار الهدايا المناسبة، التواصل مع المتجر عبر الرسائل الداخلية، والدفع المتعدد والآمن.",
    "about.operator.title": "الجهة المشغلة",
    "about.operator.desc": "يُدار التطبيق ويُشغَّل بواسطة شركة أعماق الريادة للتجارة، المسجلة رسميًا في وزارة التجارة السعودية برقم 7052888539، وموثقة في منصة التجارة الإلكترونية برقم 0000209355.",
    "about.local.title": "دعم المتاجر المحلية",
    "about.local.desc": "منذ تأسيسه، يسعى غلوردا إلى دعم المتاجر المحلية وتمكينها من الوصول إلى شريحة أكبر من العملاء، مع ضمان تجربة استخدام سلسة وموثوقة.",
    "about.feature.1": "اكتشف المتاجر القريبة منك فوراً",
    "about.feature.2": "حدد موقع التسليم بدقة",
    "about.feature.3": "تصفح المنتجات من متاجر متخصصة",
    "about.feature.4": "اشترِ لنفسك أو أهدِ من تحب",
    "about.feature.5": "دفع إلكتروني سريع وآمن",

    "features.title": "لماذا غلوردا؟",

    "feature.1.title": "متاجر قريبة منك",
    "feature.1.desc": "يعرض لك التطبيق تلقائياً المتاجر الأقرب لموقعك أو لعنوان التسليم الذي تحدده — بدون تضييع وقت في البحث.",

    "feature.2.title": "اشترِ أو أرسل هدية",
    "feature.2.desc": "اطلب لنفسك أو أدخل أي عنوان لترسل هدية لصديق أو من تحب — مباشرة من المتجر الأقرب إليهم.",

    "feature.3.title": "تنوع هائل في مكان واحد",
    "feature.3.desc": "ورود وكيك وهدايا وحلويات — كل الفئات، مئات المتاجر المتخصصة، تطبيق واحد متكامل.",

    "feature.4.title": "دفع سريع وآمن",
    "feature.4.desc": "ادفع في ثوانٍ عبر بوابات دفع موثوقة وتشفير عالي المستوى. بياناتك محمية دائماً.",

    "feature.5.title": "تجربة تسوق سلسة",
    "feature.5.desc": "واجهة مصممة بعناية لتجعل إيجاد الهدية المثالية والطلب أمراً سهلاً ومبهجاً.",

    "howitworks.title": "كيف يعمل غلوردا؟",
    "step.1.title": "حدد الموقع",
    "step.1.desc": "اختر موقعك أو عنوان الشخص المهدى إليه.",
    "step.2.title": "استعرض المتاجر القريبة",
    "step.2.desc": "اكتشف أفضل المتاجر الأقرب إليك.",
    "step.3.title": "اختر المنتج",
    "step.3.desc": "اختر الهدية المثالية من المتجر.",
    "step.4.title": "ادفع بأمان",
    "step.4.desc": "أتمم الدفع في ثوانٍ بكل أمان.",
    "step.5.title": "استلم أو وصّل",
    "step.5.desc": "استلم بنفسك أو أرسلها كهدية.",

    "screenshots.title": "شوف غلوردا بنفسك",

    "testimonials.title": "قالوا عن غلوردا",
    "review.1.name": "نورة القحطاني",
    "review.1.role": "عميلة — الرياض",
    "review.1.text": "فاجأت أمي بيوم الأم ببوكيه من متجر قريب منها تماماً. ردة فعلها كانت لا تُوصف. غلوردا جعل اللحظة أسهل وأجمل.",
    "review.2.name": "فيصل العتيبي",
    "review.2.role": "عميل — جدة",
    "review.2.text": "هدية تخرج صديقي وصلت بتغليف رائع من أفضل بوتيك قريب من جامعته. الكل سأل من أين اشتريتها!",
    "review.3.name": "بوتيك رنا",
    "review.3.role": "تاجر — الرياض",
    "review.3.text": "منذ انضمامنا لغلوردا، العملاء من حينا يكتشفوننا يومياً. طلبات عيد الحب تضاعفت ثلاث مرات هذا العام.",
    "review.4.name": "دانة الزهراني",
    "review.4.role": "عميلة — الدمام",
    "review.4.text": "أرسلت هدية عيد الحب لأختي في جدة وأنا في الدمام. وجدت تنسيقاً رائعاً من متجر قريب منها. تجربة سلسة تماماً.",
    "review.5.name": "مخبز المناسبات",
    "review.5.role": "تاجر — جدة",
    "review.5.text": "رمضان، العيد، التخرج — غلوردا يبقي متجرنا مشغولاً طوال العام. أفضل قرار اتخذناه كان الانضمام للمنصة.",

    "download.title": "حمّل غلوردا الآن",
    "download.subtitle": "اكتشف أفضل المتاجر في الرياض وجدة والدمام وجميع مناطق المملكة. مثالي لكل مناسبة — عيد الحب، عيد الأم، التخرج، الزواج، ورمضان.",

    "join.badge": "هل أنت صاحب متجر؟",
    "join.title": "اعرض منتجاتك في غلوردا",
    "join.desc": "انضم إلى مئات المتاجر المتخصصة وابدأ بالوصول للعملاء الباحثين عن منتجاتك — في حيّهم ومنطقتهم.",
    "join.feature.1": "إنشاء متجرك مجاناً وبسهولة",
    "join.feature.2": "وصّل منتجاتك للعملاء القريبين منك",
    "join.feature.3": "أدر طلباتك من لوحة تحكم بسيطة",
    "join.feature.4": "ابدأ بتنمية مبيعاتك من اليوم الأول",
    "join.cta": "افتح متجرك مجاناً الآن",

    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الاستخدام",
    "footer.contact": "اتصل بنا",
    "footer.rights": "© 2025 غلوردا. جميع الحقوق محفوظة."
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const LANG_KEY = "glorda_lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY) as Language | null;
      const lang = saved === "en" || saved === "ar" ? saved : "ar";
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
      return lang;
    } catch {
      return "ar";
    }
  });

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    try { localStorage.setItem(LANG_KEY, lang); } catch {}
    window.location.reload();
  };

  const t = (key: string): string => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  const isRtl = language === "ar";

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, isRtl }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
