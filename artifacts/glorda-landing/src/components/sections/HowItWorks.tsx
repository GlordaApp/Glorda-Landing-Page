import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export function HowItWorks() {
  const { t, isRtl } = useI18n();

  const steps = [
    { num: "1", title: t("step.1.title"), desc: t("step.1.desc") },
    { num: "2", title: t("step.2.title"), desc: t("step.2.desc") },
    { num: "3", title: t("step.3.title"), desc: t("step.3.desc") },
    { num: "4", title: t("step.4.title"), desc: t("step.4.desc") },
    { num: "5", title: t("step.5.title"), desc: t("step.5.desc") },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("howitworks.title")}</h2>
        </motion.div>

        <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-center relative gap-8 lg:gap-0 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-border z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative z-10 flex flex-col items-center text-center w-full lg:w-48 ${isRtl ? 'lg:text-center' : 'lg:text-center'}`}
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-primary shadow-lg flex items-center justify-center mb-6 relative group">
                <span className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">{step.num}</span>
                <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}