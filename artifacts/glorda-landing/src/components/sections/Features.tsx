import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Zap, LayoutDashboard, ShieldCheck, Grid, Sparkles } from "lucide-react";

export function Features() {
  const { t, isRtl } = useI18n();

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: t("feature.1.title"),
      desc: t("feature.1.desc"),
    },
    {
      icon: <LayoutDashboard className="w-8 h-8 text-secondary" />,
      title: t("feature.2.title"),
      desc: t("feature.2.desc"),
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: t("feature.3.title"),
      desc: t("feature.3.desc"),
    },
    {
      icon: <Grid className="w-8 h-8 text-secondary" />,
      title: t("feature.4.title"),
      desc: t("feature.4.desc"),
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: t("feature.5.title"),
      desc: t("feature.5.desc"),
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("features.title")}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isRtl ? 'rtl' : 'ltr'}`}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 border border-border hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}