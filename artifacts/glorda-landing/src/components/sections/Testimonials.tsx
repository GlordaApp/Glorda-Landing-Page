import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const { t, isRtl } = useI18n();

  const reviews = [
    { name: t("review.1.name"), role: t("review.1.role"), text: t("review.1.text") },
    { name: t("review.2.name"), role: t("review.2.role"), text: t("review.2.text") },
    { name: t("review.3.name"), role: t("review.3.role"), text: t("review.3.text") },
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("testimonials.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-border flex flex-col"
            >
              <div className="flex gap-1 mb-6 text-secondary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-8 flex-1 italic">"{review.text}"</p>
              <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}