import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

export function Download() {
  const { t, isRtl } = useI18n();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t("download.title")}</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t("download.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto h-14 bg-primary text-white hover:bg-primary/90 rounded-2xl gap-3 text-base font-bold shadow-lg shadow-primary/20 transition-transform hover:-translate-y-1">
              <FaApple className="text-2xl" />
              <div className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
                <span className="text-[10px] leading-none text-white/70 mb-1">{isRtl ? 'حمل من' : 'Download on the'}</span>
                <span className="leading-none">App Store</span>
              </div>
            </Button>
            <Button size="lg" className="w-full sm:w-auto h-14 bg-black text-white hover:bg-black/90 rounded-2xl gap-3 text-base font-bold shadow-lg shadow-black/20 transition-transform hover:-translate-y-1">
              <FaGooglePlay className="text-xl" />
              <div className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
                <span className="text-[10px] leading-none text-white/70 mb-1">{isRtl ? 'احصل عليه من' : 'GET IT ON'}</span>
                <span className="leading-none">Google Play</span>
              </div>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}