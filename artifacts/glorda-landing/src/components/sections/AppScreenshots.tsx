import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

function AppScreen({ title, index }: { title: string; index: number }) {
  const palettes = [
    { bg: "bg-primary", accent: "#FDF8F5" },
    { bg: "bg-[#FDF8F5]", accent: "#A51245" },
    { bg: "bg-[#1A1A2E]", accent: "#C8963E" },
    { bg: "bg-[#FEF9EC]", accent: "#A51245" },
    { bg: "bg-[#F0EBF8]", accent: "#6B3FA0" },
  ];
  const p = palettes[index % palettes.length];
  const isDark = p.bg === "bg-primary" || p.bg === "bg-[#1A1A2E]";

  return (
    <div className={`w-full h-full ${p.bg} flex flex-col overflow-hidden`}>
      {/* Status bar */}
      <div className={`h-10 flex items-end px-4 pb-2 gap-2 ${isDark ? "bg-black/10" : "bg-black/5"}`}>
        <div className={`h-1.5 w-1/3 rounded ${isDark ? "bg-white/30" : "bg-black/20"}`} />
        <div className={`h-1.5 w-4 rounded ${isDark ? "bg-white/20" : "bg-black/10"}`} />
      </div>

      {index === 0 && (
        <div className="flex-1 p-3 flex flex-col gap-3">
          <div className="h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center px-4 gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/20" />
            <div className="flex-1">
              <div className="h-2 w-3/4 bg-white/50 rounded mb-1.5" />
              <div className="h-1.5 w-1/2 bg-white/30 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 flex-1">
            {[0,1,2,3].map(i => (
              <div key={i} className="rounded-xl bg-white/10 border border-white/10 overflow-hidden">
                <div className="h-2/3 bg-white/5" />
                <div className="p-2">
                  <div className="h-1.5 w-full bg-white/30 rounded mb-1" />
                  <div className="h-1.5 w-2/3 bg-white/20 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {index === 1 && (
        <div className="flex-1 p-3 flex flex-col gap-3">
          <div className="h-24 rounded-2xl overflow-hidden relative" style={{ background: `linear-gradient(135deg, ${p.accent}22, ${p.accent}44)` }}>
            <div className="absolute inset-0 flex items-center p-3 gap-3">
              <div className="w-16 h-16 rounded-xl" style={{ background: `${p.accent}33` }} />
              <div className="flex-1">
                <div className="h-2.5 w-3/4 rounded mb-2" style={{ background: p.accent, opacity: 0.5 }} />
                <div className="h-2 w-1/2 rounded" style={{ background: p.accent, opacity: 0.3 }} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 flex-1">
            {[0,1,2,3].map(i => (
              <div key={i} className="rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-2/3" style={{ background: `linear-gradient(135deg, ${p.accent}15, ${p.accent}30)` }} />
                <div className="p-2">
                  <div className="h-1.5 w-full bg-gray-200 rounded mb-1" />
                  <div className="h-1.5 w-2/3 rounded" style={{ background: p.accent, opacity: 0.3 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {index === 2 && (
        <div className="flex-1 p-3 flex flex-col gap-3">
          <div className="h-28 rounded-2xl overflow-hidden" style={{ background: `linear-gradient(135deg, ${p.accent}15, ${p.accent}30)` }} />
          <div>
            <div className="h-2.5 w-2/3 rounded mb-2" style={{ background: "#1A1A1A", opacity: 0.7 }} />
            <div className="h-2 w-full rounded bg-gray-200 mb-1" />
            <div className="h-2 w-4/5 rounded bg-gray-200 mb-3" />
            <div className="flex gap-2">
              <div className="h-8 flex-1 rounded-xl" style={{ background: p.accent }} />
              <div className="w-8 h-8 rounded-xl bg-gray-100" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1">
            {[0,1,2,3].map(i => (
              <div key={i} className="aspect-square rounded-lg" style={{ background: `${p.accent}${20 + i * 10}` }} />
            ))}
          </div>
        </div>
      )}

      {index === 3 && (
        <div className="flex-1 p-3 flex flex-col gap-3">
          <div className="h-2.5 w-1/2 rounded bg-gray-300 mx-auto" />
          <div className="flex-1 space-y-2">
            {[0,1,2].map(i => (
              <div key={i} className="h-10 rounded-xl bg-white border border-gray-200 flex items-center px-3 gap-2">
                <div className="w-5 h-5 rounded bg-gray-100" />
                <div className="h-2 flex-1 bg-gray-200 rounded" />
                <div className="h-2 w-10 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
          <div className="h-12 rounded-2xl flex items-center justify-center" style={{ background: p.accent }}>
            <div className="h-2.5 w-24 rounded bg-white/60" />
          </div>
        </div>
      )}

      {index === 4 && (
        <div className="flex-1 p-3 flex flex-col items-center justify-center gap-3">
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: `${p.accent}20` }}>
            <div className="w-10 h-10 rounded-full" style={{ background: p.accent, opacity: 0.8 }} />
          </div>
          <div className="text-center space-y-1.5">
            <div className="h-3 w-28 rounded mx-auto" style={{ background: p.accent, opacity: 0.7 }} />
            <div className="h-2 w-20 rounded bg-gray-300 mx-auto" />
          </div>
          <div className="w-full space-y-2 mt-2">
            {[0,1].map(i => (
              <div key={i} className="h-9 rounded-xl bg-white border border-gray-100 flex items-center px-3 gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: i === 0 ? "#22C55E" : "#F59E0B" }} />
                <div className="h-2 flex-1 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function AppScreenshots() {
  const { t, isRtl } = useI18n();

  const screens = [
    { title: isRtl ? "الرئيسية" : "Home" },
    { title: isRtl ? "المتجر" : "Store" },
    { title: isRtl ? "المنتج" : "Product" },
    { title: isRtl ? "الدفع" : "Payment" },
    { title: isRtl ? "الطلبات" : "Orders" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center mb-14">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">{isRtl ? "واجهة المستخدم" : "App UI"}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">{t("screenshots.title")}</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="flex justify-center items-end gap-4 flex-wrap">
          {screens.map((screen, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y: i % 2 === 0 ? 40 : 60 }}
              whileInView={{ opacity:1, y: i % 2 === 0 ? 0 : 20 }}
              viewport={{ once:true }}
              transition={{ delay: i * 0.1, type:"spring", bounce: 0.35 }}
              className="flex flex-col items-center gap-3 group"
            >
              {/* Phone */}
              <div className="relative w-[130px] h-[265px] hover:-translate-y-2 transition-transform duration-300">
                {/* Frame */}
                <div className="absolute inset-0 rounded-[2rem] bg-[#1A1A1A] shadow-xl overflow-hidden border-[2.5px] border-[#2A2A2A]">
                  {/* Dynamic island */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-full z-20" />
                  {/* Screen */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 rounded-[1.7rem] overflow-hidden">
                    <AppScreen title={screen.title} index={i} />
                  </div>
                </div>
                {/* Reflection */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-10" />
              </div>
              {/* Label */}
              <span className="text-xs font-semibold text-gray-500 tracking-wide">{screen.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
