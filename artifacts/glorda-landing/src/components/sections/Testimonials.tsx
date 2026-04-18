import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

const avatarColors = [
  { bg: "from-rose-400 to-primary", initials: ["س","S"] },
  { bg: "from-amber-400 to-orange-500", initials: ["أ","A"] },
  { bg: "from-violet-500 to-purple-600", initials: ["ب","L"] },
  { bg: "from-emerald-400 to-teal-500", initials: ["ن","N"] },
  { bg: "from-sky-400 to-blue-500", initials: ["م","S"] },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < count ? "#C8963E" : "#E5E7EB"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

const QuoteIcon = () => (
  <svg width="36" height="28" viewBox="0 0 36 28" fill="none" className="text-primary/15">
    <path d="M0 28V16.8C0 7.5 5.6 2.1 16.8 0L18.4 3.6C13.6 4.8 10.4 7.4 8.8 11.4H14V28H0ZM22 28V16.8C22 7.5 27.6 2.1 38.8 0L40.4 3.6C35.6 4.8 32.4 7.4 30.8 11.4H36V28H22Z" fill="currentColor"/>
  </svg>
);

export function Testimonials() {
  const { t, isRtl } = useI18n();

  const reviews = [
    { key: 1, stars: 5 },
    { key: 2, stars: 5 },
    { key: 3, stars: 5 },
    { key: 4, stars: 5 },
    { key: 5, stars: 5 },
  ];

  return (
    <section className="py-24 bg-[#FDF8F5] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center mb-14">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">{isRtl ? "شهادات العملاء" : "Testimonials"}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">{t("testimonials.title")}</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Featured review */}
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="bg-primary rounded-3xl p-8 md:p-10 text-white mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-secondary/10 blur-3xl -translate-x-1/3 translate-y-1/3" />
          <div className="relative flex flex-col md:flex-row items-start gap-6">
            <div className="hidden md:flex w-16 h-16 rounded-2xl bg-white/15 items-center justify-center flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white" opacity="0.9">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            </div>
            <div className="flex-1">
              <Stars count={5} />
              <p className={`text-xl font-medium text-white/90 mt-4 mb-6 leading-relaxed ${isRtl ? "text-right" : "text-left"}`}>
                "{t("review.1.text")}"
              </p>
              <div className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse justify-end" : ""}`}>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[0].bg} flex items-center justify-center text-white font-bold text-base shadow`}>
                  {avatarColors[0].initials[isRtl ? 0 : 1]}
                </div>
                <div className={isRtl ? "text-right" : ""}>
                  <div className="font-bold text-white">{t("review.1.name")}</div>
                  <div className="text-white/60 text-sm">{t("review.1.role")}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid of reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.slice(1).map((r, i) => (
            <motion.div key={r.key} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-20">
                <QuoteIcon />
              </div>
              <Stars count={r.stars} />
              <p className={`text-gray-700 text-sm leading-relaxed mt-4 mb-5 italic ${isRtl ? "text-right" : "text-left"}`}>
                "{t(`review.${r.key}.text`)}"
              </p>
              <div className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarColors[i+1].bg} flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0`}>
                  {avatarColors[i+1].initials[isRtl ? 0 : 1]}
                </div>
                <div className={isRtl ? "text-right" : ""}>
                  <div className="font-semibold text-gray-900 text-sm">{t(`review.${r.key}.name`)}</div>
                  <div className="text-gray-400 text-xs">{t(`review.${r.key}.role`)}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
