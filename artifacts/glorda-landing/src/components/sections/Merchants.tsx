import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function Merchants() {
  const { t, isRtl } = useI18n();

  return (
    <section id="merchants" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
          
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`lg:w-1/2 text-white ${isRtl ? 'text-right' : 'text-left'}`}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-secondary mb-3">{t("merchants.title")}</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">{t("merchants.subtitle")}</h3>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {t("merchants.desc")}
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full h-14 px-8 text-lg font-bold gap-2 group shadow-xl">
              {t("merchants.cta")}
              {isRtl ? 
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> : 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              }
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-white rounded-3xl p-6 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="rounded-2xl border border-border overflow-hidden bg-background">
                {/* Mockup Dashboard */}
                <div className="h-12 border-b border-border bg-muted/50 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className={`p-6 flex gap-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1/4 space-y-4">
                    <div className="h-8 bg-muted rounded-md w-full"></div>
                    <div className="h-8 bg-muted rounded-md w-full"></div>
                    <div className="h-8 bg-muted rounded-md w-full"></div>
                  </div>
                  <div className="w-3/4 space-y-6">
                    <div className="h-24 bg-primary/10 rounded-xl w-full border border-primary/20 flex items-center justify-center text-primary/40 font-medium">Dashboard</div>
                    <div className="flex gap-4">
                      <div className="h-32 bg-secondary/10 rounded-xl flex-1 border border-secondary/20 flex items-center justify-center text-secondary/40 font-medium">Orders</div>
                      <div className="h-32 bg-muted rounded-xl flex-1 border border-border flex items-center justify-center text-muted-foreground font-medium">Products</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}