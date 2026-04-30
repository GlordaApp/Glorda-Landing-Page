import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

const joinFeatureIcons = [
  "M19 3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z",
  "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
  "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
];

export function Merchants() {
  const { t, isRtl } = useI18n();

  const features = [
    t("join.feature.1"),
    t("join.feature.2"),
    t("join.feature.3"),
    t("join.feature.4"),
  ];

  return (
    <section id="merchants" className="py-24 bg-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#FDF8F5] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Direction-aware two-column: visual at inline-start, text at inline-end */}
        <div className="flex flex-col lg:flex-row items-center gap-14">

          {/* Visual panel — inline-start */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-5/12 w-full"
          >
            <div className="relative">
              <div className="absolute inset-6 bg-primary/10 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary to-[#7a0d35] rounded-3xl p-8 text-white overflow-hidden shadow-2xl shadow-primary/30">
                <div className="absolute top-0 end-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
                <div className="absolute bottom-0 start-0 w-32 h-32 rounded-full bg-secondary/10 translate-y-1/3 -translate-x-1/3" />

                <div className="relative space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-7 11h-2V9h2v6zm0-8h-2V5h2v2z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="h-2.5 w-24 bg-white/60 rounded" />
                      <div className="h-2 w-16 bg-white/30 rounded mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { v: "500+", l: isRtl ? "متجر مسجّل" : "Registered Stores" },
                      { v: "50K+", l: isRtl ? "عميل نشط" : "Active Customers" },
                      { v: isRtl ? "مجاني" : "Free", l: isRtl ? "الانضمام" : "To Join" },
                      { v: "24/7", l: isRtl ? "دعم فني" : "Support" },
                    ].map((s, i) => (
                      <div key={i} className="bg-white/10 rounded-2xl p-3 text-center border border-white/10">
                        <div className="text-lg font-extrabold text-white">{s.v}</div>
                        <div className="text-xs text-white/60 mt-0.5">{s.l}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <div className="text-xs text-white/60 mb-3 text-start">{isRtl ? "نمو المبيعات" : "Sales Growth"}</div>
                    <div className="flex items-end gap-1.5 h-14">
                      {[35, 55, 42, 70, 58, 82, 65, 90, 75, 100].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm bg-white/30 hover:bg-secondary/80 transition-colors"
                          style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text — inline-end */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:w-7/12 text-start"
          >
            <span className="inline-block bg-secondary/15 text-secondary text-sm font-bold px-4 py-1.5 rounded-full mb-5">
              {t("join.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              {t("join.title")}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
              {t("join.desc")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((f, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 bg-[#FDF8F5] rounded-2xl px-4 py-3 border border-gray-100"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#A51245">
                      <path d={joinFeatureIcons[i]} />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm text-start">{f}</span>
                </motion.div>
              ))}
            </div>

            <a href="https://jmgyuw.short.gy/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white rounded-2xl px-8 py-4 font-bold text-base shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              {t("join.cta")}
              {/* Chevron flips with direction */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="rtl:rotate-180 transition-transform">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
