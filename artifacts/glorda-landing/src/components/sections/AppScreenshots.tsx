import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

import screenHome from "@assets/55626544-e2c3-4b50-9fd7-6cf13dad9ecf_1776482044919.jpeg";
import screenProduct1 from "@assets/a917228f-6c09-429a-badc-f10a3116f015_1776482044919.jpeg";
import screenProduct2 from "@assets/cc530233-8d4d-404b-8041-85957a1a52f1_1776482044919.jpeg";
import screenProduct3 from "@assets/36729288-66d0-4b4c-bf46-ff21e710ac48_1776482044919.jpeg";
import screenOccasions from "@assets/d6e90815-2c73-42bb-97ce-9c7fa668bfbe_1776482044919.jpeg";

const screens = [
  { src: screenHome,       labelAr: "الرئيسية",   labelEn: "Home" },
  { src: screenProduct1,   labelAr: "المنتج",     labelEn: "Product" },
  { src: screenProduct2,   labelAr: "الورود",     labelEn: "Flowers" },
  { src: screenProduct3,   labelAr: "التفاصيل",   labelEn: "Details" },
  { src: screenOccasions,  labelAr: "المناسبات",  labelEn: "Occasions" },
];

export function AppScreenshots() {
  const { t, isRtl } = useI18n();

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase">
            {isRtl ? "واجهة التطبيق" : "App Interface"}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            {t("screenshots.title")}
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="flex justify-center items-end gap-5 flex-wrap">
          {screens.map((screen, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: i % 2 === 0 ? 40 : 60 }}
              whileInView={{ opacity: 1, y: i % 2 === 0 ? 0 : 20 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.3 }}
              className="flex flex-col items-center gap-3 group"
            >
              {/* Phone frame */}
              <div className="relative w-[150px] h-[305px] hover:-translate-y-2 transition-transform duration-300">
                {/* Shadow glow */}
                <div className="absolute inset-2 rounded-[2rem] bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Outer frame */}
                <div className="absolute inset-0 rounded-[2.2rem] bg-[#1A1A1A] shadow-2xl border-[2.5px] border-[#2a2a2a] overflow-hidden">
                  {/* Dynamic island */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20" />

                  {/* Real screenshot */}
                  <img
                    src={screen.src}
                    alt={isRtl ? screen.labelAr : screen.labelEn}
                    className="absolute inset-0 w-full h-full object-cover object-top rounded-[1.8rem]"
                  />

                  {/* Subtle glass reflection */}
                  <div className="absolute inset-0 rounded-[1.8rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10" />
                </div>
              </div>

              {/* Label */}
              <span className="text-xs font-semibold text-gray-400 tracking-wide">
                {isRtl ? screen.labelAr : screen.labelEn}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
