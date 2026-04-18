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
    
    "hero.title": "Order the best gifts from the finest stores",
    "hero.subtitle": "Glorda – Your premier destination for flowers, cakes, gifts, and sweets.",
    "hero.cta.apple": "Download on the App Store",
    "hero.cta.google": "Get it on Google Play",

    "about.title": "What is Glorda?",
    "about.desc1": "A marketplace that unites the best specialized stores in one place. Every purchase is an occasion.",
    "about.desc2": "With full marketplace features, each merchant has their own store. Enjoy easy product uploads, seamless order management, and secure e-payment support.",

    "features.title": "Glorda Features",
    "feature.1.title": "Ultra-fast customer experience",
    "feature.1.desc": "Find and order the perfect gift in seconds with our optimized app.",
    "feature.2.title": "Simple merchant dashboard",
    "feature.2.desc": "Manage products, track orders, and view sales with a tap.",
    "feature.3.title": "Secure e-payments",
    "feature.3.desc": "Pay with confidence using top-tier encryption and trusted gateways.",
    "feature.4.title": "Diverse stores in one place",
    "feature.4.desc": "Browse hundreds of premium boutiques without leaving the app.",
    "feature.5.title": "Elegant design",
    "feature.5.desc": "A luxurious interface crafted specifically for gifts and occasions.",

    "howitworks.title": "How it works?",
    "step.1.title": "Choose category",
    "step.1.desc": "Flowers, Cakes, Gifts, or Sweets.",
    "step.2.title": "Browse stores",
    "step.2.desc": "Explore top-rated boutiques.",
    "step.3.title": "Choose product",
    "step.3.desc": "Select the perfect item.",
    "step.4.title": "Pay securely",
    "step.4.desc": "Checkout with ease.",
    "step.5.title": "Receive quickly",
    "step.5.desc": "Fast & reliable delivery.",

    "merchants.title": "For Merchants",
    "merchants.subtitle": "Grow your business with Glorda",
    "merchants.desc": "Open your store in minutes, upload products easily, manage orders, view clear reports, and get 24/7 tech support.",
    "merchants.cta": "Open Your Store Now",

    "screenshots.title": "App Screenshots",

    "testimonials.title": "Customer Reviews",
    "review.1.name": "Sarah A.",
    "review.1.role": "Customer",
    "review.1.text": "Glorda made my sister's birthday unforgettable. The flower arrangement was stunning and arrived right on time.",
    "review.2.name": "Ahmed M.",
    "review.2.role": "Customer",
    "review.2.text": "The best app for ordering cakes. The variety of stores is amazing and the checkout process is flawless.",
    "review.3.name": "Layan Flower Boutique",
    "review.3.role": "Merchant",
    "review.3.text": "Since joining Glorda, our sales have doubled. The merchant dashboard is incredibly intuitive.",
    "review.4.name": "Nouf",
    "review.4.role": "Customer",
    "review.4.text": "A truly premium experience. It feels like shopping in a luxury boutique right from my phone.",
    "review.5.name": "Sweet Delights Bakery",
    "review.5.role": "Merchant",
    "review.5.text": "Uploading products and managing orders has never been easier. Glorda is the perfect partner.",

    "download.title": "Download Glorda Now",
    "download.subtitle": "Join thousands of happy customers and discover the joy of giving.",

    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.contact": "Contact Us",
    "footer.rights": "© 2024 Glorda. All rights reserved."
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "عن التطبيق",
    "nav.features": "المميزات",
    "nav.merchants": "للتجار",
    "nav.contact": "اتصل بنا",
    
    "hero.title": "اطلب أفضل الهدايا من أفضل المتاجر",
    "hero.subtitle": "غلوردا – وجهتك الأولى للورود والكيك والهدايا والحلويات",
    "hero.cta.apple": "حمل من App Store",
    "hero.cta.google": "احصل عليه من Google Play",

    "about.title": "ما هو غلوردا؟",
    "about.desc1": "سوق يجمع أفضل المتاجر المتخصصة في مكان واحد. كل عملية شراء هي مناسبة بحد ذاتها.",
    "about.desc2": "بفضل ميزات السوق الكاملة، يمتلك كل تاجر متجره الخاص. استمتع برفع المنتجات بسهولة، وإدارة الطلبات بسلاسة، ودعم الدفع الإلكتروني الآمن.",

    "features.title": "مميزات غلوردا",
    "feature.1.title": "تجربة عميل فائقة السرعة",
    "feature.1.desc": "ابحث واطلب الهدية المثالية في ثوانٍ مع تطبيقنا المحسن.",
    "feature.2.title": "لوحة تحكم بسيطة للتاجر",
    "feature.2.desc": "إدارة المنتجات وتتبع الطلبات وعرض المبيعات بنقرة واحدة.",
    "feature.3.title": "مدفوعات إلكترونية آمنة",
    "feature.3.desc": "ادفع بثقة باستخدام أعلى مستويات التشفير وبوابات الدفع الموثوقة.",
    "feature.4.title": "متاجر متنوعة في مكان واحد",
    "feature.4.desc": "تصفح مئات البوتيكات الفاخرة دون مغادرة التطبيق.",
    "feature.5.title": "تصميم أنيق",
    "feature.5.desc": "واجهة فاخرة مصممة خصيصاً للهدايا والمناسبات.",

    "howitworks.title": "كيف يعمل غلوردا؟",
    "step.1.title": "اختر الفئة",
    "step.1.desc": "ورود، كيك، هدايا، أو حلويات.",
    "step.2.title": "تصفح المتاجر",
    "step.2.desc": "استكشف أفضل البوتيكات.",
    "step.3.title": "اختر المنتج",
    "step.3.desc": "اختر الهدية المثالية.",
    "step.4.title": "ادفع بأمان",
    "step.4.desc": "إتمام الدفع بكل سهولة.",
    "step.5.title": "استلم بسرعة",
    "step.5.desc": "توصيل سريع وموثوق.",

    "merchants.title": "للتجار",
    "merchants.subtitle": "نمّي عملك مع غلوردا",
    "merchants.desc": "افتح متجرك في دقائق، ارفع المنتجات بسهولة، أدر الطلبات، اعرض تقارير واضحة، واحصل على دعم فني على مدار الساعة.",
    "merchants.cta": "افتح متجرك الآن",

    "screenshots.title": "لقطات من التطبيق",

    "testimonials.title": "آراء العملاء",
    "review.1.name": "سارة أ.",
    "review.1.role": "عميل",
    "review.1.text": "جعل تطبيق غلوردا عيد ميلاد أختي لا يُنسى. تنسيق الورود كان مذهلاً ووصل في الوقت المحدد تماماً.",
    "review.2.name": "أحمد م.",
    "review.2.role": "عميل",
    "review.2.text": "أفضل تطبيق لطلب الكيك. تنوع المتاجر مذهل وعملية الدفع خالية من العيوب.",
    "review.3.name": "بوتيك ليان للورود",
    "review.3.role": "تاجر",
    "review.3.text": "منذ انضمامنا لغلوردا، تضاعفت مبيعاتنا. لوحة تحكم التاجر بديهية وسهلة الاستخدام.",
    "review.4.name": "نوف",
    "review.4.role": "عميل",
    "review.4.text": "تجربة فاخرة حقاً. يبدو الأمر وكأنني أتسوق في بوتيك فاخر من خلال هاتفي.",
    "review.5.name": "مخبز سويت ديلايتس",
    "review.5.role": "تاجر",
    "review.5.text": "لم يكن رفع المنتجات وإدارة الطلبات أسهل من أي وقت مضى. غلوردا هو الشريك المثالي.",

    "download.title": "حمّل غلوردا الآن",
    "download.subtitle": "انضم إلى آلاف العملاء السعداء واكتشف متعة العطاء.",

    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الاستخدام",
    "footer.contact": "اتصل بنا",
    "footer.rights": "© 2024 غلوردا. جميع الحقوق محفوظة."
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar"); // Default to Arabic as requested

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

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