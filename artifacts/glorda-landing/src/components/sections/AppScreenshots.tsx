import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export function AppScreenshots() {
  const { t, isRtl } = useI18n();

  const screens = [
    { color: "bg-white", title: "Home" },
    { color: "bg-primary/5", title: "Store" },
    { color: "bg-secondary/10", title: "Product" },
    { color: "bg-background", title: "Payment" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("screenshots.title")}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="flex justify-center flex-wrap gap-8">
          {screens.map((screen, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", bounce: 0.4 }}
              className={`relative w-64 aspect-[1/2] rounded-[2.5rem] border-8 border-gray-900 shadow-2xl overflow-hidden ${screen.color} transform ${index % 2 === 0 ? 'translate-y-8' : '-translate-y-8'} hover:translate-y-0 hover:z-10 transition-all duration-500`}
            >
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                <div className="w-24 h-5 bg-gray-900 rounded-b-xl"></div>
              </div>
              <div className="w-full h-full flex items-center justify-center text-muted-foreground font-bold tracking-widest opacity-30 rotate-[-90deg] whitespace-nowrap text-3xl">
                {screen.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}