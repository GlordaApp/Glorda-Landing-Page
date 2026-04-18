import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { FaApple } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
import whiteLogo from "@assets/IMG_7564_1776480165426.png";

function PhoneMockup() {
  return (
    <div className="relative w-[260px] h-[520px] mx-auto">
      {/* Glow behind */}
      <div className="absolute inset-0 rounded-[2.8rem] bg-white/20 blur-2xl scale-110" />
      {/* Phone frame */}
      <div className="relative w-full h-full bg-white rounded-[2.8rem] shadow-2xl overflow-hidden border-[3px] border-white/30">
        {/* Dynamic island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#111] rounded-full z-20" />
        {/* Screen content */}
        <div className="w-full h-full bg-[#FDF8F5] flex flex-col overflow-hidden">
          {/* App header */}
          <div className="pt-14 pb-3 px-5 bg-primary flex items-center justify-between">
            <img src={whiteLogo} alt="Glorda" className="h-6 w-auto object-contain" />
            <div className="w-7 h-7 rounded-full bg-white/20" />
          </div>
          {/* Search bar */}
          <div className="px-4 pt-4 pb-2">
            <div className="h-9 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center px-3 gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gray-400"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <div className="h-3 w-24 bg-gray-200 rounded" />
            </div>
          </div>
          {/* Category chips */}
          <div className="flex gap-2 px-4 py-2 overflow-hidden">
            {["#A51245","#C8963E","#6B3FA0","#2A7D4F"].map((c, i) => (
              <div key={i} className="flex-shrink-0 h-8 px-3 rounded-full flex items-center gap-1.5 shadow-sm" style={{backgroundColor: c + "20", border: `1px solid ${c}40`}}>
                <div className="w-2 h-2 rounded-full" style={{backgroundColor: c}} />
                <div className="h-2.5 w-10 rounded" style={{backgroundColor: c + "60"}} />
              </div>
            ))}
          </div>
          {/* Featured banner */}
          <div className="mx-4 h-24 rounded-2xl bg-primary overflow-hidden relative flex items-end p-3">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-2 right-2 w-14 h-14 rounded-full bg-white/30" />
              <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-white/20" />
            </div>
            <div className="relative">
              <div className="h-2.5 w-20 bg-white rounded mb-1" />
              <div className="h-2 w-14 bg-white/60 rounded" />
            </div>
          </div>
          {/* Products grid */}
          <div className="px-4 pt-3">
            <div className="h-3 w-20 bg-gray-300 rounded mb-3" />
            <div className="grid grid-cols-2 gap-2">
              {[0,1,2,3].map((i) => (
                <div key={i} className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100">
                  <div className="h-16" style={{background: i % 2 === 0 ? "linear-gradient(135deg,#FCEEF3,#FBD5E2)" : "linear-gradient(135deg,#FEF9EC,#FCF0CC)"}} />
                  <div className="p-2">
                    <div className="h-2 w-full bg-gray-200 rounded mb-1" />
                    <div className="h-2 w-2/3 bg-primary/20 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Decorative floating elements */}
      <motion.div animate={{ y: [-6,6,-6], rotate: [0,10,0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-5 -right-4 w-12 h-12 rounded-2xl bg-secondary/90 flex items-center justify-center shadow-lg">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="white"/></svg>
      </motion.div>
      <motion.div animate={{ y: [6,-6,6], rotate: [0,-8,0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-4 -left-5 w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-gray-100">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" fill="#A51245"/></svg>
      </motion.div>
      <motion.div animate={{ y: [-4,4,-4] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 -right-6 w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center border border-gray-100">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#A51245"/></svg>
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
              {isRtl ? "الوجهة الأولى للهدايا في السعودية" : "Saudi Arabia's #1 Gift Marketplace"}
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
              className={`flex flex-col sm:flex-row gap-3 justify-center ${isRtl ? "lg:justify-end" : "lg:justify-start"}`}>
              <a href="#" className="group flex items-center gap-3 bg-white text-primary rounded-2xl px-5 py-3.5 font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                <FaApple className="text-2xl flex-shrink-0" />
                <div className={`flex flex-col ${isRtl ? "items-end" : "items-start"}`}>
                  <span className="text-[10px] text-primary/60 leading-none">{isRtl ? "حمل من" : "Download on the"}</span>
                  <span className="text-sm leading-tight">App Store</span>
                </div>
              </a>
              <a href="#" className="group flex items-center gap-3 bg-black/80 border border-white/10 text-white rounded-2xl px-5 py-3.5 font-bold hover:bg-black hover:-translate-y-0.5 transition-all duration-200">
                <SiGoogleplay className="text-xl flex-shrink-0 text-secondary" />
                <div className={`flex flex-col ${isRtl ? "items-end" : "items-start"}`}>
                  <span className="text-[10px] text-white/50 leading-none">{isRtl ? "احصل عليه من" : "GET IT ON"}</span>
                  <span className="text-sm leading-tight">Google Play</span>
                </div>
              </a>
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
