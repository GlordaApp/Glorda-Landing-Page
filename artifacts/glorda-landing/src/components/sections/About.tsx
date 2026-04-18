import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

const categories = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <path d="M24 44s-18-10-18-22a10 10 0 0120 0 10 10 0 0120 0c0 12-22 22-22 22z" fill="#A51245" opacity="0.15"/>
        <path d="M24 42s-16-9-16-20a8 8 0 0116 0 8 8 0 0116 0c0 11-16 20-16 20z" fill="#A51245" opacity="0.3"/>
        <path d="M24 40s-14-8-14-18a7 7 0 0114 0 7 7 0 0114 0c0 10-14 18-14 18z" fill="#A51245"/>
        <circle cx="24" cy="14" r="3" fill="white" opacity="0.8"/>
      </svg>
    ),
    color: "from-rose-50 to-pink-100",
    border: "border-rose-200",
    iconBg: "bg-rose-100",
    labelAr: "الورود",
    labelEn: "Flowers",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="28" width="32" height="12" rx="4" fill="#C8963E"/>
        <rect x="12" y="20" width="24" height="10" rx="3" fill="#C8963E" opacity="0.7"/>
        <rect x="16" y="14" width="16" height="8" rx="3" fill="#C8963E" opacity="0.5"/>
        <rect x="22" y="8" width="4" height="8" rx="2" fill="#A51245"/>
        <circle cx="24" cy="7" r="3" fill="#A51245"/>
        <rect x="10" y="26" width="28" height="2" rx="1" fill="white" opacity="0.5"/>
        <rect x="14" y="18" width="20" height="2" rx="1" fill="white" opacity="0.5"/>
      </svg>
    ),
    color: "from-amber-50 to-yellow-100",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    labelAr: "الكيك",
    labelEn: "Cakes",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="18" width="32" height="24" rx="4" fill="#6B3FA0" opacity="0.8"/>
        <path d="M16 18v-4a8 8 0 0116 0v4" stroke="#6B3FA0" strokeWidth="3" strokeLinecap="round"/>
        <rect x="20" y="26" width="8" height="8" rx="2" fill="white" opacity="0.6"/>
        <path d="M24 26v-4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <rect x="8" y="16" width="32" height="4" rx="2" fill="#A51245"/>
        <path d="M24 16V8" stroke="#A51245" strokeWidth="2.5"/>
        <path d="M20 10c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#C8963E" strokeWidth="2" fill="none"/>
      </svg>
    ),
    color: "from-purple-50 to-violet-100",
    border: "border-purple-200",
    iconBg: "bg-purple-100",
    labelAr: "الهدايا",
    labelEn: "Gifts",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="28" r="14" fill="#E8A0A0" opacity="0.4"/>
        <path d="M24 10 Q28 6 30 10 Q36 8 34 14 Q40 14 36 20 Q40 24 34 26 Q36 32 30 30 Q28 36 24 34 Q20 36 18 30 Q12 32 14 26 Q8 24 12 20 Q8 14 14 14 Q12 8 18 10 Q20 6 24 10Z" fill="#A51245" opacity="0.7"/>
        <circle cx="24" cy="22" r="5" fill="#A51245"/>
        <circle cx="21" cy="20" r="2" fill="white" opacity="0.5"/>
      </svg>
    ),
    color: "from-red-50 to-rose-100",
    border: "border-red-200",
    iconBg: "bg-red-100",
    labelAr: "الحلويات",
    labelEn: "Sweets",
  },
];

const features = [
  { ar: "ماركت بليس متكامل", en: "Full Marketplace" },
  { ar: "كل تاجر له متجر خاص", en: "Dedicated Merchant Stores" },
  { ar: "رفع المنتجات بسهولة", en: "Easy Product Uploads" },
  { ar: "إدارة الطلبات", en: "Order Management" },
  { ar: "دفع إلكتروني آمن", en: "Secure E-Payments" },
];

export function About() {
  const { t, isRtl } = useI18n();

  return (
    <section id="about" className="py-24 bg-[#FDF8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
          className="text-center mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">{isRtl ? "من نحن" : "About"}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">{t("about.title")}</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">{t("about.desc1")}</p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {categories.map((cat, i) => (
            <motion.div key={i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1, duration:0.5 }}
              className={`group bg-gradient-to-br ${cat.color} border ${cat.border} rounded-3xl p-6 flex flex-col items-center text-center gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer`}>
              <div className={`w-16 h-16 rounded-2xl ${cat.iconBg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {cat.icon}
              </div>
              <span className="font-bold text-gray-800 text-base">{isRtl ? cat.labelAr : cat.labelEn}</span>
            </motion.div>
          ))}
        </div>

        {/* About detail */}
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${isRtl ? "lg:flex-row-reverse" : ""}`}>
          <motion.div initial={{ opacity:0, x: isRtl ? 30 : -30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
            className="lg:w-1/2">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-secondary/5 rounded-tr-full" />
              <div className="relative">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-6">{isRtl ? "لماذا غلوردا؟" : "Why Glorda?"}</h3>
                <ul className="space-y-4">
                  {features.map((f, i) => (
                    <motion.li key={i} initial={{ opacity:0, x: isRtl ? 10 : -10 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay: i*0.08 }}
                      className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span className="text-gray-700 font-medium">{isRtl ? f.ar : f.en}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, x: isRtl ? -30 : 30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.15 }}
            className="lg:w-1/2">
            <div className="space-y-5">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="#A51245"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{isRtl ? "للعملاء" : "For Customers"}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{isRtl ? "تجربة تسوق سريعة وسهلة تجمع أفضل متاجر الهدايا في مكان واحد" : "Fast and easy shopping experience bringing the best gift stores to one place"}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" fill="#C8963E"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{isRtl ? "للتجار" : "For Merchants"}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{isRtl ? "إدارة بسيطة وواضحة لمتجرك مع تقارير مفصلة ودعم فني على مدار الساعة" : "Simple and clear store management with detailed reports and 24/7 tech support"}</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary rounded-3xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="white"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{isRtl ? "دفع آمن ومحمي" : "Safe & Secure Payments"}</h4>
                    <p className="text-white/75 text-sm leading-relaxed">{isRtl ? "بوابات دفع موثوقة وتشفير عالي المستوى لحماية بياناتك" : "Trusted payment gateways with high-level encryption to protect your data"}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
