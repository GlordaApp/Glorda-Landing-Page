import { useI18n } from "@/lib/i18n";
import { AppNavbar } from "@/components/AppNavbar";
import { AppFooter } from "@/components/AppFooter";
import { motion } from "framer-motion";
import glordaIconCrimson from "@assets/glorda_icon_crimson.webp";

const cardSections = [
  {
    key: "what",
    icon: (
      <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
        <path d="M24 44s-18-10-18-22a10 10 0 0120 0 10 10 0 0120 0c0 12-22 22-22 22z" fill="#A51245" opacity="0.2"/>
        <path d="M24 42s-16-9-16-20a8 8 0 0116 0 8 8 0 0116 0c0 11-16 20-16 20z" fill="#A51245" opacity="0.5"/>
        <path d="M24 40s-14-8-14-18a7 7 0 0114 0 7 7 0 0114 0c0 10-14 18-14 18z" fill="#A51245"/>
        <circle cx="24" cy="14" r="3" fill="white" opacity="0.9"/>
      </svg>
    ),
    iconBg: "bg-rose-100",
    border: "border-rose-100",
  },
  {
    key: "vision",
    icon: (
      <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" fill="#C8963E" opacity="0.15"/>
        <circle cx="24" cy="24" r="10" fill="#C8963E" opacity="0.3"/>
        <circle cx="24" cy="24" r="5" fill="#C8963E"/>
        <path d="M24 8v4M24 36v4M8 24h4M36 24h4" stroke="#C8963E" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    iconBg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    key: "operator",
    icon: (
      <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="16" width="32" height="24" rx="4" fill="#6B3FA0" opacity="0.15"/>
        <rect x="8" y="16" width="32" height="7" rx="4" fill="#6B3FA0" opacity="0.5"/>
        <rect x="14" y="10" width="20" height="8" rx="3" fill="#6B3FA0" opacity="0.3"/>
        <rect x="20" y="4" width="8" height="8" rx="2" fill="#6B3FA0" opacity="0.5"/>
        <rect x="14" y="29" width="8" height="4" rx="2" fill="#6B3FA0" opacity="0.8"/>
        <rect x="26" y="29" width="8" height="4" rx="2" fill="#6B3FA0" opacity="0.5"/>
      </svg>
    ),
    iconBg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    key: "local",
    icon: (
      <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
        <path d="M8 30 Q16 20 24 28 Q32 36 40 26" stroke="#2A7D4F" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <circle cx="12" cy="18" r="6" fill="#2A7D4F" opacity="0.2"/>
        <circle cx="36" cy="18" r="6" fill="#2A7D4F" opacity="0.2"/>
        <path d="M10 20 Q12 14 16 16 Q14 10 20 12 Q18 6 24 8 Q30 6 28 12 Q34 10 32 16 Q36 14 38 20" fill="#2A7D4F" opacity="0.5"/>
        <path d="M12 22 Q14 16 18 18 Q16 12 22 14 Q20 8 24 10 Q28 8 26 14 Q32 12 30 18 Q34 16 36 22" fill="#2A7D4F"/>
      </svg>
    ),
    iconBg: "bg-emerald-50",
    border: "border-emerald-100",
  },
];

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AppNavbar />

      <main className="flex-1 py-10 bg-white">
        <div className="max-w-xl mx-auto px-5">

          {/* Page title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-extrabold text-gray-900 text-center mb-8"
          >
            {t("about.title")}
          </motion.h1>

          {/* Intro card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#fdf0f4] rounded-3xl p-7 mb-4 border border-rose-100 text-center"
          >
            <div className="flex justify-center mb-4">
              <img src={glordaIconCrimson} alt="Glorda" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-gray-700 text-sm leading-loose">{t("about.intro.desc")}</p>
          </motion.div>

          {/* 4 content cards */}
          <div className="space-y-4">
            {cardSections.map((section, i) => (
              <motion.div
                key={section.key}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08 }}
                className={`bg-white rounded-3xl p-6 border ${section.border} shadow-sm`}
              >
                <div className="flex items-center gap-3 mb-3 justify-end">
                  <h3 className="text-base font-bold text-gray-900">{t(`about.${section.key}.title`)}</h3>
                  <div className={`w-9 h-9 rounded-xl ${section.iconBg} flex items-center justify-center flex-shrink-0`}>
                    {section.icon}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-loose text-start">{t(`about.${section.key}.desc`)}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <AppFooter />
    </div>
  );
}
