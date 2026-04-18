import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import screenHome from "@assets/55626544-e2c3-4b50-9fd7-6cf13dad9ecf_1776482044919.webp";
import { DownloadButton } from "@/components/DownloadButton";

function PhoneMockup() {
  return (
    <div className="relative w-[260px] h-[520px] mx-auto">
      {/* Glow behind */}
      <div className="absolute inset-0 rounded-[2.8rem] bg-white/20 blur-2xl scale-110" />

      {/* Main phone */}
      <div className="relative w-full h-full bg-[#111] rounded-[2.8rem] shadow-2xl overflow-hidden border-[3px] border-white/20">
        {/* Dynamic island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
        {/* Real screenshot */}
        <img
          src={screenHome}
          alt="Glorda App"
          className="w-full h-full object-cover object-top"
        />
        {/* Glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Floating badge — location */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-8 -left-14 bg-white rounded-2xl px-3 py-2 shadow-xl border border-gray-100 flex items-center gap-2 z-20"
      >
        <div className="w-7 h-7 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#A51245"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        </div>
        <div>
          <div className="text-[9px] text-gray-400 leading-none">التوصيل إلى</div>
          <div className="text-[11px] font-bold text-gray-800 leading-tight mt-0.5">وين ماودّك</div>
        </div>
      </motion.div>

      {/* Floating badge — cart */}
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-24 -left-12 bg-primary rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2 z-20"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5.17 5H20l-1.68 8.39c-.16.8-.87 1.61-1.7 1.61H8.33c-.8 0-1.55-.7-1.7-1.5L5.17 5zM3 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h14v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03L23.7 6H5.21L4.27 2H3z"/></svg>
        <div>
          <div className="text-[9px] text-white/70 leading-none">أضف للسلة</div>
          <div className="text-[11px] font-bold text-white leading-tight mt-0.5">190 ر.س</div>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const { t, isRtl } = useI18n();

  const stats = [
    { num: "500+", label: isRtl ? "متجر" : "Stores" },
    { num: "50K+", label: isRtl ? "عميل" : "Customers" },
    { num: "4.9", label: isRtl ? "تقييم" : "Rating" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Layered background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#7a0d35]" />
        <div className="absolute top-0 right-0 w-[70%] h-[70%] rounded-full bg-white/5 blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[60%] rounded-full bg-secondary/10 blur-3xl -translate-x-1/4 translate-y-1/4" />
        {/* Subtle dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="white"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20 w-full">
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-20 ${isRtl ? "lg:flex-row-reverse" : ""}`}>

          {/* Text side */}
          <div className={`lg:w-1/2 text-white text-center ${isRtl ? "lg:text-right" : "lg:text-left"}`}>
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              {t("hero.badge")}
            </motion.div>

            <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6">
              {t("hero.title")}
            </motion.h1>

            <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.35 }}
              className="text-lg text-white/75 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {t("hero.subtitle")}
            </motion.p>

            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.5 }}
              className={`flex justify-center ${isRtl ? "lg:justify-end" : "lg:justify-start"}`}>
              <DownloadButton variant="light" size="md" isRtl={isRtl} />
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.7 }}
              className={`flex items-center gap-8 mt-12 justify-center ${isRtl ? "lg:justify-end" : "lg:justify-start"}`}>
              {stats.map((s, i) => (
                <div key={i} className={`text-center ${isRtl ? "text-right" : "text-left"}`}>
                  <div className="text-2xl font-extrabold text-white">{s.num}</div>
                  <div className="text-xs text-white/60 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Phone side */}
          <motion.div initial={{ opacity:0, scale:0.85, y:30 }} animate={{ opacity:1, scale:1, y:0 }} transition={{ duration:0.9, delay:0.3, type:"spring", bounce:0.3 }}
            className="lg:w-1/2 flex justify-center">
            <PhoneMockup />
          </motion.div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#FDF8F5"/>
        </svg>
      </div>
    </section>
  );
}
