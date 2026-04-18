import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const merchantFeatures = [
  {
    iconPath: "M13 2.003A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0013 2.003zm1 14.993h-2v-6h2v6zm0-8h-2V7h2v2z",
    ar: "افتح متجرك في دقائق",
    en: "Open your store in minutes",
  },
  {
    iconPath: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z",
    ar: "ارفع منتجاتك بسهولة",
    en: "Upload products easily",
  },
  {
    iconPath: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S14.93 14 13 14s-3.5-1.57-3.5-3.5S11.07 7 13 7zM3 15.99V17h20v-.99l-2.44-2.44c-.52.28-1.07.44-1.56.44-2.76 0-5-2.24-5-5S16.24 7 13 7 7.24 9.24 7 12c0 1.67.78 3.15 2 4.12L3 15.99z",
    ar: "إدارة الطلبات",
    en: "Manage orders",
  },
  {
    iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z",
    ar: "تقارير واضحة",
    en: "Clear reports",
  },
  {
    iconPath: "M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z",
    ar: "دعم فني على مدار الساعة",
    en: "24/7 technical support",
  },
];

export function Merchants() {
  const { t, isRtl } = useI18n();

  return (
    <section id="merchants" className="py-24 bg-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FDF8F5] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className={`flex flex-col lg:flex-row items-center gap-14 ${isRtl ? "lg:flex-row-reverse" : ""}`}>

          {/* Left: Text */}
          <motion.div initial={{ opacity:0, x: isRtl ? 40 : -40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}
            className={`lg:w-1/2 ${isRtl ? "text-right" : "text-left"}`}>
            <span className="inline-block bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              {t("merchants.title")}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
              {t("merchants.subtitle")}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">{t("merchants.desc")}</p>

            <ul className="space-y-3 mb-10">
              {merchantFeatures.map((f, i) => (
                <motion.li key={i} initial={{ opacity:0, x: isRtl ? 10 : -10 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay: i*0.07 }}
                  className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#A51245">
                      <path d={f.iconPath} />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{isRtl ? f.ar : f.en}</span>
                </motion.li>
              ))}
            </ul>

            <a href="#" className={`inline-flex items-center gap-3 bg-primary text-white rounded-2xl px-8 py-4 font-bold text-base shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200 ${isRtl ? "flex-row-reverse" : ""}`}>
              {t("merchants.cta")}
              {isRtl ? <FaArrowLeft className="text-sm" /> : <FaArrowRight className="text-sm" />}
            </a>
          </motion.div>

          {/* Right: Dashboard mockup */}
          <motion.div initial={{ opacity:0, x: isRtl ? -40 : 40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}
            className="lg:w-1/2 w-full">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-4 bg-primary/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Browser top bar */}
                <div className="h-11 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="mx-auto flex-1 max-w-xs mx-4">
                    <div className="h-6 bg-white rounded-lg border border-gray-200 flex items-center px-2">
                      <div className="h-2 w-3/4 bg-gray-200 rounded" />
                    </div>
                  </div>
                </div>
                {/* Dashboard content */}
                <div className={`p-5 flex gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                  {/* Sidebar */}
                  <div className={`w-12 flex flex-col items-center gap-3 py-2 ${isRtl ? "order-last" : ""}`}>
                    {[
                      "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
                      "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z",
                      "M19 9h-4V3H9v6H5l7 7 7-7z",
                      "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
                    ].map((p, i) => (
                      <div key={i} className={`w-9 h-9 rounded-xl flex items-center justify-center ${i === 0 ? "bg-primary" : "bg-gray-100"}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill={i === 0 ? "white" : "#9CA3AF"}>
                          <path d={p} />
                        </svg>
                      </div>
                    ))}
                  </div>
                  {/* Main area */}
                  <div className="flex-1 space-y-3">
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { v: "1,240", l: isRtl ? "الإيرادات" : "Revenue", c: "bg-primary/10 text-primary" },
                        { v: "86", l: isRtl ? "الطلبات" : "Orders", c: "bg-amber-50 text-amber-700" },
                        { v: "42", l: isRtl ? "المنتجات" : "Products", c: "bg-green-50 text-green-700" },
                      ].map((stat, i) => (
                        <div key={i} className={`rounded-xl p-3 ${stat.c.split(" ")[0]} border border-current/10`}>
                          <div className={`text-base font-extrabold ${stat.c.split(" ")[1]}`}>{stat.v}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{stat.l}</div>
                        </div>
                      ))}
                    </div>
                    {/* Chart placeholder */}
                    <div className="h-20 bg-gray-50 rounded-xl border border-gray-100 relative overflow-hidden flex items-end p-3 gap-1">
                      {[40,65,45,70,55,80,60,75,50,85].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm bg-primary/30" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    {/* Recent orders */}
                    <div className="space-y-2">
                      {[
                        { dot: "bg-green-400", ar: "طلب #1024 – ورود", en: "Order #1024 – Flowers", s: isRtl ? "مكتمل" : "Done" },
                        { dot: "bg-amber-400", ar: "طلب #1025 – كيك", en: "Order #1025 – Cake", s: isRtl ? "قيد التنفيذ" : "Processing" },
                      ].map((o, i) => (
                        <div key={i} className={`flex items-center gap-2 text-xs ${isRtl ? "flex-row-reverse" : ""}`}>
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${o.dot}`} />
                          <span className="text-gray-700 flex-1">{isRtl ? o.ar : o.en}</span>
                          <span className="text-gray-400">{o.s}</span>
                        </div>
                      ))}
                    </div>
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
