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
    "hero.subtitle": "Glorda shows you the best flower, cake, gift, and sweet stores near you — or near any address you choose. Buy for yourself or send a gift to someone special.",
    "hero.cta.apple": "Download on the App Store",
    "hero.cta.google": "Get it on Google Play",

    "about.title": "What is Glorda?",
    "about.desc1": "Glorda is a location-based marketplace that connects you with the finest specialized stores near your location or near any address you choose — so every gift arrives fresh and on time.",
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
    "review.1.name": "Sarah A.",
    "review.1.role": "Customer",
    "review.1.text": "I sent a flower arrangement to my sister in Riyadh from Jeddah — it arrived fresh within the hour. Glorda made it effortless.",
    "review.2.name": "Ahmed M.",
    "review.2.role": "Customer",
    "review.2.text": "The location feature is brilliant. I set the address and the app showed me the nearest cake boutiques immediately. Ordered and delivered in no time.",
    "review.3.name": "Layan Boutique",
    "review.3.role": "Merchant",
    "review.3.text": "Listing our products on Glorda brought us a whole new stream of local customers we never reached before.",
    "review.4.name": "Nouf",
    "review.4.role": "Customer",
    "review.4.text": "Perfect for gifting. I typed my friend's address and found incredible gift options nearby. Felt like a personal shopper was doing it for me.",
    "review.5.name": "Sweet Delights Bakery",
    "review.5.role": "Merchant",
    "review.5.text": "The simplest way to reach customers in our area. Our sales have grown significantly since joining Glorda.",

    "download.title": "Download Glorda Now",
    "download.subtitle": "Discover the stores closest to you and start ordering the finest gifts, cakes, flowers, and sweets.",

    "join.badge": "Are you a merchant?",
    "join.title": "List your products on Glorda",
    "join.desc": "Join hundreds of specialized stores and reach customers who are looking for exactly what you offer — right in their neighborhood.",
    "join.feature.1": "Free & easy store setup",
    "join.feature.2": "Reach customers near your location",
    "join.feature.3": "Manage orders from one simple dashboard",
    "join.feature.4": "Grow your sales from day one",
    "join.cta": "Join as a Merchant",

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
    "hero.subtitle": "غلوردا يعرض لك أفضل متاجر الورود والكيك والهدايا والحلويات القريبة منك أو من أي عنوان تختاره — اشترِ لنفسك أو أهدِ من تحب.",
    "hero.cta.apple": "حمّل من App Store",
    "hero.cta.google": "احصل عليه من Google Play",

    "about.title": "ما هو غلوردا؟",
    "about.desc1": "غلوردا هو سوق إلكتروني يربطك بأفضل المتاجر المتخصصة القريبة من موقعك أو من أي عنوان تحدده — لأن كل هدية تستحق أن تصل طازجة وفي الوقت المناسب.",
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
    "review.1.name": "سارة أ.",
    "review.1.role": "عميلة",
    "review.1.text": "أرسلت تنسيق ورود لأختي في الرياض وأنا في جدة — وصل طازجاً خلال ساعة. غلوردا جعل الأمر في غاية السهولة.",
    "review.2.name": "أحمد م.",
    "review.2.role": "عميل",
    "review.2.text": "ميزة الموقع رائعة جداً. حددت العنوان وظهرت لي أقرب متاجر الكيك فوراً. طلبت وتسلمت في وقت قياسي.",
    "review.3.name": "بوتيك ليان",
    "review.3.role": "تاجر",
    "review.3.text": "عرض منتجاتنا على غلوردا جلب لنا شريحة جديدة من العملاء المحليين لم نكن نصلهم من قبل.",
    "review.4.name": "نوف",
    "review.4.role": "عميلة",
    "review.4.text": "مثالي للإهداء. كتبت عنوان صديقتي وظهرت لي خيارات هدايا رائعة قريبة منها. شعرت كأن لدي متسوق شخصي.",
    "review.5.name": "مخبز سويت ديلايتس",
    "review.5.role": "تاجر",
    "review.5.text": "أسهل طريقة للوصول للعملاء في منطقتنا. مبيعاتنا ارتفعت بشكل ملحوظ منذ انضمامنا لغلوردا.",

    "download.title": "حمّل غلوردا الآن",
    "download.subtitle": "اكتشف المتاجر الأقرب إليك وابدأ بطلب أجمل الهدايا والكيك والورود والحلويات.",

    "join.badge": "هل أنت صاحب متجر؟",
    "join.title": "اعرض منتجاتك في غلوردا",
    "join.desc": "انضم إلى مئات المتاجر المتخصصة وابدأ بالوصول للعملاء الباحثين عن منتجاتك — في حيّهم ومنطقتهم.",
    "join.feature.1": "إنشاء متجرك مجاناً وبسهولة",
    "join.feature.2": "وصّل منتجاتك للعملاء القريبين منك",
    "join.feature.3": "أدر طلباتك من لوحة تحكم بسيطة",
    "join.feature.4": "ابدأ بتنمية مبيعاتك من اليوم الأول",
    "join.cta": "انضم كتاجر الآن",

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
