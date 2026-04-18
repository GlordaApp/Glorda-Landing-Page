import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Gift, Store, CreditCard } from "lucide-react";

export function About() {
  const { t, isRtl } = useI18n();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t("about.title")}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("about.desc1")}
          </p>
        </motion.div>

        <div className={`flex flex-col md:flex-row gap-8 lg:gap-12 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 bg-card rounded-3xl p-8 lg:p-10 shadow-lg border border-card-border relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-transform group-hover:scale-110" />
            <Gift className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">{isRtl ? 'تجربة إهداء متكاملة' : 'Complete Gifting Experience'}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("about.desc1")}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 bg-card rounded-3xl p-8 lg:p-10 shadow-lg border border-card-border relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full transition-transform group-hover:scale-110" />
            <Store className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">{isRtl ? 'منصة متكاملة للتجار' : 'Full Marketplace Platform'}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("about.desc2")}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}