import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { DownloadButton } from "@/components/DownloadButton";

export function Download() {
  const { t, isRtl } = useI18n();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="bg-primary rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute top-0 end-0 w-64 h-64 rounded-full bg-white/5 blur-2xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 start-0 w-48 h-48 rounded-full bg-secondary/10 blur-2xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

          {/* Direction-aware: text at inline-start, QR at inline-end */}
          <div className="relative p-10 md:p-14 flex flex-col md:flex-row items-center gap-10">
            {/* Text */}
            <div className="flex-1 text-white text-center md:text-start">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-sm font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                {isRtl ? "متاح على جميع الأجهزة" : "Available on all devices"}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">{t("download.title")}</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-sm">{t("download.subtitle")}</p>
              <div className="flex justify-center md:justify-start">
                <DownloadButton variant="light" size="md" isRtl={isRtl} />
              </div>
            </div>

            {/* QR visual */}
            <div className="flex-shrink-0 hidden md:block">
              <div className="w-48 h-48 relative">
                <div className="w-full h-full bg-white rounded-2xl p-4 shadow-xl">
                  <div className="w-full h-full grid grid-cols-7 gap-0.5">
                    {Array.from({ length: 49 }).map((_, i) => {
                      const corners = [0,1,2,3,4,5,6,7,13,14,20,21,27,28,34,35,41,42,43,44,45,46,48];
                      const pattern = [16,18,22,24,26,30,32,36,38];
                      const isCorner = corners.includes(i);
                      const isPat = pattern.includes(i);
                      return (
                        <div key={i} className={`rounded-sm ${isCorner ? "bg-primary" : isPat ? "bg-primary/60" : i % 3 === 0 ? "bg-gray-200" : "bg-transparent"}`} />
                      );
                    })}
                  </div>
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/60 text-xs font-medium whitespace-nowrap">
                  {isRtl ? "امسح للتحميل" : "Scan to download"}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
