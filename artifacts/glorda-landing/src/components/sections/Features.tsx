import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

const featureIcons = [
  {
    svg: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" fill="#A51245" opacity="0.15"/>
        <path d="M24 8L8 16v16l16 8 16-8V16L24 8z" fill="#A51245" opacity="0.3"/>
        <path d="M24 44L8 36V20l16 8 16-8v16L24 44z" fill="#A51245" opacity="0.8"/>
        <path d="M24 12L8 20l16 8 16-8-16-8z" fill="#A51245"/>
        <circle cx="24" cy="20" r="3" fill="white"/>
      </svg>
    ),
    gradient: "from-rose-50 to-red-50",
    accent: "#A51245",
  },
  {
    svg: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="6" fill="#C8963E" opacity="0.15"/>
        <rect x="6" y="10" width="36" height="8" rx="6" fill="#C8963E" opacity="0.5"/>
        <rect x="12" y="24" width="12" height="3" rx="1.5" fill="#C8963E"/>
        <rect x="12" y="30" width="8" height="3" rx="1.5" fill="#C8963E" opacity="0.6"/>
        <circle cx="35" cy="30" r="5" fill="#C8963E"/>
        <path d="M33 30l1.5 1.5L37 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    gradient: "from-amber-50 to-yellow-50",
    accent: "#C8963E",
  },
  {
    svg: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        <path d="M24 4L28 16H40L30 24L34 36L24 28L14 36L18 24L8 16H20L24 4Z" fill="#A51245" opacity="0.2"/>
        <path d="M24 8L27 17H36L29 22L32 32L24 26L16 32L19 22L12 17H21L24 8Z" fill="#A51245" opacity="0.5"/>
        <path d="M24 12L26.5 19H34L28 23.5L30.5 31L24 26.5L17.5 31L20 23.5L14 19H21.5L24 12Z" fill="#A51245"/>
      </svg>
    ),
    gradient: "from-pink-50 to-rose-50",
    accent: "#A51245",
  },
  {
    svg: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        <circle cx="18" cy="18" r="10" fill="#6B3FA0" opacity="0.15"/>
        <circle cx="18" cy="18" r="6" fill="#6B3FA0" opacity="0.4"/>
        <circle cx="30" cy="30" r="10" fill="#A51245" opacity="0.15"/>
        <circle cx="30" cy="30" r="6" fill="#A51245" opacity="0.4"/>
        <circle cx="18" cy="18" r="3" fill="#6B3FA0"/>
        <circle cx="30" cy="30" r="3" fill="#A51245"/>
        <path d="M20 20L28 28" stroke="#C8963E" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    gradient: "from-violet-50 to-purple-50",
    accent: "#6B3FA0",
  },
  {
    svg: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="30" width="32" height="10" rx="4" fill="#2A7D4F" opacity="0.15"/>
        <rect x="10" y="32" width="28" height="6" rx="3" fill="#2A7D4F" opacity="0.3"/>
        <path d="M14 32v-8a10 10 0 0120 0v8" stroke="#2A7D4F" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="14" cy="32" r="3" fill="#2A7D4F"/>
        <circle cx="34" cy="32" r="3" fill="#2A7D4F"/>
        <circle cx="24" cy="24" r="4" fill="#2A7D4F"/>
        <path d="M22 24l1.5 1.5L26 22" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    gradient: "from-emerald-50 to-green-50",
    accent: "#2A7D4F",
  },
];

export function Features() {
  const { t, isRtl } = useI18n();

  const features = [
    { title: t("feature.1.title"), desc: t("feature.1.desc") },
    { title: t("feature.2.title"), desc: t("feature.2.desc") },
    { title: t("feature.3.title"), desc: t("feature.3.desc") },
    { title: t("feature.4.title"), desc: t("feature.4.desc") },
    { title: t("feature.5.title"), desc: t("feature.5.desc") },
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center mb-14">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">{isRtl ? "لماذا تختارنا" : "Why Choose Us"}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">{t("features.title")}</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* 3-2 grid layout */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.slice(0, 3).map((f, i) => (
              <motion.div key={i} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}
                className={`group bg-gradient-to-br ${featureIcons[i].gradient} rounded-3xl p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden`}>
                <div className={`absolute top-0 w-24 h-24 rounded-full opacity-30 blur-2xl ${isRtl ? "left-0" : "right-0"}`} style={{ background: featureIcons[i].accent }} />
                <div className={`w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${isRtl ? "mr-0" : "ml-0"}`}>
                  {featureIcons[i].svg}
                </div>
                <h3 className={`text-lg font-bold text-gray-900 mb-2 ${isRtl ? "text-right" : "text-left"}`}>{f.title}</h3>
                <p className={`text-gray-500 text-sm leading-relaxed ${isRtl ? "text-right" : "text-left"}`}>{f.desc}</p>
                <div className={`absolute bottom-5 opacity-0 group-hover:opacity-100 transition-opacity ${isRtl ? "left-5" : "right-5"}`}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: featureIcons[i].accent }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d={isRtl ? "M8 6H4M6 4l-2 2 2 2" : "M4 6h4M6 4l2 2-2 2"} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.slice(3).map((f, i) => (
              <motion.div key={i+3} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: (i+3)*0.1 }}
                className={`group bg-gradient-to-br ${featureIcons[i+3].gradient} rounded-3xl p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex gap-6 items-start ${isRtl ? "flex-row-reverse" : ""}`}>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {featureIcons[i+3].svg}
                </div>
                <div className={`flex-1 ${isRtl ? "text-right" : "text-left"}`}>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
