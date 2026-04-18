import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

const storeCategories = [
  {
    ar: "متاجر الورود",
    en: "Flower Stores",
    desc_ar: "باقات وتنسيقات من أرقى المحلات",
    desc_en: "Bouquets & arrangements from the finest shops",
    iconPath: "M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67C14.5 20.88 13.38 22 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.47-.63-1.06-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13zm3-4C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 10 17.5 10s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
    bg: "bg-rose-50",
    iconColor: "#A51245",
  },
  {
    ar: "متاجر الكيك",
    en: "Cake Stores",
    desc_ar: "كيك مخصص لكل مناسبة",
    desc_en: "Custom cakes for every occasion",
    iconPath: "M18.5 3H6c-1.1 0-2 .9-2 2v5.71c-1.17.49-2 1.63-2 2.79V19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-5.5c0-1.16-.83-2.3-2-2.79V5c0-1.1-.9-2-1.5-2zM19 19H5v-5.5c0-.28.22-.5.5-.5s.5.22.5.5V15h2v-1.5c0-.28.22-.5.5-.5s.5.22.5.5V15h2v-1.5c0-.28.22-.5.5-.5s.5.22.5.5V15h2v-1.5c0-.28.22-.5.5-.5s.5.22.5.5V15h2v-1.5c0-.28.22-.5.5-.5s.5.22.5.5V19zM17 10H7V5h10v5z",
    bg: "bg-amber-50",
    iconColor: "#C8963E",
  },
  {
    ar: "متاجر الهدايا",
    en: "Gift Stores",
    desc_ar: "هدايا فاخرة لكل مناسبة",
    desc_en: "Luxury gifts for every occasion",
    iconPath: "M20 6h-2.18c.07-.43.18-.86.18-1 0-2.21-1.79-4-4-4-1.05 0-1.96.42-2.66 1.1L10 3.44l-1.34-1.34C7.96 1.42 7.05 1 6 1 3.79 1 2 2.79 2 5c0 .14.11.57.18 1H0v2h20V6zM6 3c1.1 0 2 .9 2 2H4c0-1.1.9-2 2-2zm6 0c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zM2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-9H2v9zm9-8h2v6h-2v-6zM7 11h2v6H7v-6zm8 0h2v6h-2v-6z",
    bg: "bg-violet-50",
    iconColor: "#6B3FA0",
  },
  {
    ar: "متاجر الحلويات",
    en: "Sweet Stores",
    desc_ar: "حلويات شرقية وغربية متنوعة",
    desc_en: "Eastern & Western sweets variety",
    iconPath: "M18 12h-1.55l-.95-4.75A2.007 2.007 0 0013.55 5.5H10.5L9.75 3H7v2h1.25l2 8H18v-1zm.5 4c-.83 0-1.5.67-1.5 1.5S17.67 19 18.5 19s1.5-.67 1.5-1.5S19.33 16 18.5 16zm-9 0c-.83 0-1.5.67-1.5 1.5S8.67 19 9.5 19s1.5-.67 1.5-1.5S10.33 16 9.5 16zM4 7h2v2H4V7zm0 4h2v2H4v-2zm0 4h2v2H4v-2zm0-8h2V5H4v2z",
    bg: "bg-emerald-50",
    iconColor: "#059669",
  },
];

export function Merchants() {
  const { t, isRtl } = useI18n();

  return (
    <section id="merchants" className="py-20 bg-[#FDF8F5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">
            {isRtl ? "اكتشف المتاجر" : "Discover Stores"}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            {t("merchants.customer.title")}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            {t("merchants.customer.desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {storeCategories.map((cat, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center gap-3"
            >
              <div className={`w-14 h-14 rounded-2xl ${cat.bg} flex items-center justify-center`}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill={cat.iconColor}>
                  <path d={cat.iconPath} />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-base">
                  {isRtl ? cat.ar : cat.en}
                </div>
                <div className="text-gray-400 text-sm mt-1 leading-snug">
                  {isRtl ? cat.desc_ar : cat.desc_en}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-10 text-center">
          <p className="text-gray-400 text-sm">
            {isRtl
              ? "أكثر من ٥٠٠ متجر متخصص في انتظارك داخل التطبيق"
              : "Over 500 specialized stores waiting for you inside the app"}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
