import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

const stepIcons = [
  // Choose category
  <svg key="s1" width="24" height="24" viewBox="0 0 48 48" fill="none">
    <rect x="6" y="6" width="16" height="16" rx="4" fill="white" opacity="0.9"/>
    <rect x="26" y="6" width="16" height="16" rx="4" fill="white" opacity="0.6"/>
    <rect x="6" y="26" width="16" height="16" rx="4" fill="white" opacity="0.6"/>
    <rect x="26" y="26" width="16" height="16" rx="4" fill="white" opacity="0.9"/>
  </svg>,
  // Browse stores
  <svg key="s2" width="24" height="24" viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="5" fill="white" opacity="0.2"/>
    <rect x="6" y="10" width="36" height="8" rx="5" fill="white" opacity="0.7"/>
    <rect x="12" y="24" width="10" height="2" rx="1" fill="white" opacity="0.8"/>
    <rect x="12" y="29" width="14" height="2" rx="1" fill="white" opacity="0.5"/>
    <circle cx="35" cy="28" r="5" fill="white" opacity="0.9"/>
    <path d="M33 28h4M35 26v4" stroke="#A51245" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  // Choose product
  <svg key="s3" width="24" height="24" viewBox="0 0 48 48" fill="none">
    <path d="M24 4L8 12v20l16 8 16-8V12L24 4z" fill="white" opacity="0.2"/>
    <path d="M24 4L8 12l16 8 16-8-16-8z" fill="white" opacity="0.8"/>
    <path d="M8 12l16 8v16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 12l-16 8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <circle cx="24" cy="22" r="3" fill="white"/>
  </svg>,
  // Pay securely
  <svg key="s4" width="24" height="24" viewBox="0 0 48 48" fill="none">
    <rect x="6" y="14" width="36" height="24" rx="5" fill="white" opacity="0.2"/>
    <rect x="6" y="14" width="36" height="7" rx="5" fill="white" opacity="0.7"/>
    <rect x="12" y="28" width="8" height="4" rx="2" fill="white" opacity="0.9"/>
    <rect x="24" y="28" width="10" height="4" rx="2" fill="white" opacity="0.5"/>
  </svg>,
  // Receive
  <svg key="s5" width="24" height="24" viewBox="0 0 48 48" fill="none">
    <path d="M24 4L28 16H40L30 24L34 36L24 28L14 36L18 24L8 16H20L24 4Z" fill="white" opacity="0.3"/>
    <path d="M24 8L27 18H37L29 23.5L32 33L24 27.5L16 33L19 23.5L11 18H21L24 8Z" fill="white" opacity="0.7"/>
    <circle cx="24" cy="20" r="4" fill="white"/>
  </svg>,
];

export function HowItWorks() {
  const { t, isRtl } = useI18n();

  const steps = [
    { title: t("step.1.title"), desc: t("step.1.desc") },
    { title: t("step.2.title"), desc: t("step.2.desc") },
    { title: t("step.3.title"), desc: t("step.3.desc") },
    { title: t("step.4.title"), desc: t("step.4.desc") },
    { title: t("step.5.title"), desc: t("step.5.desc") },
  ];

  return (
    <section className="py-24 bg-[#FDF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">{isRtl ? "الخطوات" : "Steps"}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">{t("howitworks.title")}</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Desktop: horizontal steps */}
        <div className={`hidden lg:flex items-start justify-between relative gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
          {/* Connecting dashed line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-px z-0">
            <div className="w-full border-t-2 border-dashed border-primary/30" />
          </div>

          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.12 }}
              className="relative z-10 flex flex-col items-center text-center w-44 group">
              {/* Icon circle */}
              <div className="w-20 h-20 rounded-full bg-primary shadow-lg shadow-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                {stepIcons[i]}
                <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-secondary text-white text-xs font-extrabold flex items-center justify-center shadow-sm">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5">{step.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed px-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical steps */}
        <div className={`flex lg:hidden flex-col gap-0 relative ${isRtl ? "items-end" : "items-start"}`}>
          <div className={`absolute top-0 bottom-0 w-px bg-primary/20 ${isRtl ? "right-10" : "left-10"}`} />
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity:0, x: isRtl ? 20 : -20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}
              className={`flex gap-5 pb-8 relative z-10 ${isRtl ? "flex-row-reverse" : ""}`}>
              <div className="w-20 h-20 rounded-full bg-primary shadow-md shadow-primary/30 flex items-center justify-center flex-shrink-0 relative">
                {stepIcons[i]}
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-secondary text-white text-[10px] font-extrabold flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
              <div className={`pt-2 ${isRtl ? "text-right" : ""}`}>
                <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
