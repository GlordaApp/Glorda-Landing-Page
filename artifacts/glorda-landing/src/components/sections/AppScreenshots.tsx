import { useI18n } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

import screenHome      from "@assets/55626544-e2c3-4b50-9fd7-6cf13dad9ecf_1776482044919.jpeg";
import screenProduct1  from "@assets/a917228f-6c09-429a-badc-f10a3116f015_1776482044919.jpeg";
import screenProduct2  from "@assets/cc530233-8d4d-404b-8041-85957a1a52f1_1776482044919.jpeg";
import screenProduct3  from "@assets/36729288-66d0-4b4c-bf46-ff21e710ac48_1776482044919.jpeg";
import screenOccasions from "@assets/d6e90815-2c73-42bb-97ce-9c7fa668bfbe_1776482044919.jpeg";
import screenExtra     from "@assets/7a7be72c-3110-44af-bf0c-f27ce80e3549_1776482044919.jpeg";

const screens = [
  {
    src: screenHome,
    labelAr: "الرئيسية",
    labelEn: "Home",
    descAr: "تصفح أفضل المنتجات القريبة منك لحظةً بلحظة",
    descEn: "Browse the best nearby products in real time",
    accent: "#A51245",
  },
  {
    src: screenProduct1,
    labelAr: "تفاصيل المنتج",
    labelEn: "Product Detail",
    descAr: "اختر بسهولة واشترِ لنفسك أو أرسل هدية",
    descEn: "Easily buy for yourself or send as a gift",
    accent: "#C8963E",
  },
  {
    src: screenProduct2,
    labelAr: "متجر الورود",
    labelEn: "Flower Store",
    descAr: "أجمل الورود من أقرب المتاجر إليك",
    descEn: "Beautiful flowers from stores near you",
    accent: "#A51245",
  },
  {
    src: screenProduct3,
    labelAr: "استعراض المنتج",
    labelEn: "Product View",
    descAr: "صور عالية الجودة وتفاصيل كاملة قبل الطلب",
    descEn: "High-quality images and full details before ordering",
    accent: "#C8963E",
  },
  {
    src: screenOccasions,
    labelAr: "نذكرك بمناسبتك",
    labelEn: "Occasion Reminders",
    descAr: "لا تنسَ أي مناسبة — غلوردا تذكرك وتوصل هديتك",
    descEn: "Never miss an occasion — we remind you and deliver",
    accent: "#A51245",
  },
  {
    src: screenExtra,
    labelAr: "تجربة التسوق",
    labelEn: "Shopping Experience",
    descAr: "تجربة تسوق سلسة وسريعة من أي مكان",
    descEn: "A smooth and fast shopping experience anywhere",
    accent: "#C8963E",
  },
];

const INTERVAL = 3800;

const phoneVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 320 : -320,
    rotateY: dir > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.82,
    filter: "blur(6px)",
  }),
  center: {
    x: 0,
    rotateY: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 320,
      damping: 30,
      mass: 0.9,
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -320 : 320,
    rotateY: dir > 0 ? -40 : 40,
    opacity: 0,
    scale: 0.82,
    filter: "blur(6px)",
    transition: { duration: 0.28, ease: "easeIn" },
  }),
};

const textVariants = {
  enter: { opacity: 0, y: 18 },
  center: { opacity: 1, y: 0, transition: { delay: 0.18, duration: 0.45 } },
  exit: { opacity: 0, y: -14, transition: { duration: 0.2 } },
};

export function AppScreenshots() {
  const { t, isRtl } = useI18n();
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      setDir(next > index ? 1 : -1);
      setIndex(next);
    },
    [index]
  );

  const prev = () => {
    const next = (index - 1 + screens.length) % screens.length;
    setDir(-1);
    setIndex(next);
  };

  const next = () => {
    const next = (index + 1) % screens.length;
    setDir(1);
    setIndex(next);
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % screens.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  const screen = screens[index];

  return (
    <section
      id="screenshots"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #FDF8F5 0%, #fff 60%, #FDF8F5 100%)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient glow that shifts with accent color */}
      <motion.div
        key={`glow-${index}`}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: `${screen.accent}18` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase">
            {isRtl ? "واجهة التطبيق" : "App Interface"}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            {t("screenshots.title")}
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Carousel */}
        <div className="flex flex-col items-center gap-10">

          {/* Phone + arrows row */}
          <div className="flex items-center gap-6 md:gap-12">

            {/* Left / Prev arrow */}
            <button
              onClick={isRtl ? next : prev}
              className="w-11 h-11 rounded-full border-2 border-gray-200 bg-white shadow-md flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-200 flex-shrink-0"
              aria-label="previous"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Phone wrapper with perspective */}
            <div className="relative" style={{ perspective: "1200px" }}>
              {/* Ghost phones left */}
              <div
                className="absolute -left-[70px] top-1/2 -translate-y-1/2 w-[130px] h-[268px] rounded-[1.6rem] bg-gray-100 overflow-hidden opacity-30 scale-90 blur-[1px] pointer-events-none"
                style={{ transform: "translateY(-50%) rotateY(18deg) scale(0.88)" }}
              >
                <img
                  src={screens[(index - 1 + screens.length) % screens.length].src}
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Ghost phones right */}
              <div
                className="absolute -right-[70px] top-1/2 -translate-y-1/2 w-[130px] h-[268px] rounded-[1.6rem] bg-gray-100 overflow-hidden opacity-30 scale-90 blur-[1px] pointer-events-none"
                style={{ transform: "translateY(-50%) rotateY(-18deg) scale(0.88)" }}
              >
                <img
                  src={screens[(index + 1) % screens.length].src}
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Main phone */}
              <AnimatePresence mode="popLayout" custom={dir}>
                <motion.div
                  key={index}
                  custom={dir}
                  variants={phoneVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-[230px] h-[468px]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Glow under */}
                  <motion.div
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[160px] h-[30px] rounded-full blur-2xl"
                    style={{ background: screen.accent }}
                  />

                  {/* Phone frame */}
                  <div className="absolute inset-0 rounded-[2.6rem] bg-[#111] shadow-2xl border-[3px] border-[#2a2a2a] overflow-hidden">
                    {/* Dynamic island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />

                    {/* Screen */}
                    <img
                      src={screen.src}
                      alt={isRtl ? screen.labelAr : screen.labelEn}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                      draggable={false}
                    />

                    {/* Glass sheen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10" />

                    {/* Side buttons */}
                    <div className="absolute top-20 right-[-3px] w-[3px] h-10 bg-[#2a2a2a] rounded-l" />
                    <div className="absolute top-16 left-[-3px] w-[3px] h-7 bg-[#2a2a2a] rounded-r" />
                    <div className="absolute top-24 left-[-3px] w-[3px] h-7 bg-[#2a2a2a] rounded-r" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right / Next arrow */}
            <button
              onClick={isRtl ? prev : next}
              className="w-11 h-11 rounded-full border-2 border-gray-200 bg-white shadow-md flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-200 flex-shrink-0"
              aria-label="next"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Screen label + description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${index}`}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-center max-w-sm"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-2"
                style={{
                  background: `${screen.accent}15`,
                  color: screen.accent,
                  border: `1px solid ${screen.accent}30`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: screen.accent }}
                />
                {isRtl ? screen.labelAr : screen.labelEn}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {isRtl ? screen.descAr : screen.descEn}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="flex items-center gap-2.5">
            {screens.map((s, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative transition-all duration-300"
                aria-label={`Go to screen ${i + 1}`}
              >
                <motion.div
                  animate={{
                    width: i === index ? 28 : 8,
                    opacity: i === index ? 1 : 0.35,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="h-2 rounded-full"
                  style={{
                    background: i === index ? screen.accent : "#d1d5db",
                  }}
                />
                {/* Progress bar inside active dot */}
                {i === index && !paused && (
                  <motion.div
                    key={`progress-${index}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                    className="absolute inset-0 h-2 rounded-full origin-left"
                    style={{ background: `${screen.accent}60` }}
                  />
                )}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
