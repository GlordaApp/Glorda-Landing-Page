import { useI18n } from "@/lib/i18n";
import { AppNavbar } from "@/components/AppNavbar";
import { AppFooter } from "@/components/AppFooter";
import { motion } from "framer-motion";

const sectionsAr = [
  {
    title: "قبول الشروط",
    body: "باستخدامك لتطبيق غلوردا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يُرجى عدم استخدام التطبيق.",
  },
  {
    title: "استخدام التطبيق",
    body: "يُمنع استخدام التطبيق لأغراض غير مشروعة أو للإضرار بالآخرين. يُحظر أي محاولة للوصول غير المصرح به إلى أنظمة التطبيق أو بيانات المستخدمين الآخرين.",
  },
  {
    title: "الطلبات والمدفوعات",
    body: "جميع الطلبات تخضع لموافقة المتجر المعني. يتحمل المستخدم مسؤولية صحة معلومات التوصيل المدخلة. في حالة الإلغاء، تُطبَّق سياسة الاسترداد الخاصة بكل متجر.",
  },
  {
    title: "مسؤولية المتاجر",
    body: "تتحمل المتاجر المسجلة على المنصة المسؤولية الكاملة عن جودة منتجاتها، ومطابقتها للمواصفات المعلنة، والتزامها بأوقات التسليم المحددة.",
  },
  {
    title: "الملكية الفكرية",
    body: "جميع المحتويات والتصاميم والعلامات التجارية المنشورة في تطبيق غلوردا هي ملك حصري لمؤسسة علي لافي الحسناني، ولا يجوز استخدامها أو نسخها دون إذن صريح.",
  },
  {
    title: "تعديل الشروط",
    body: "يحق لغلوردا تعديل هذه الشروط في أي وقت. سيتم إعلام المستخدمين بأي تعديلات جوهرية قبل نفاذها بوقت كافٍ. استمرارك في استخدام التطبيق بعد التعديل يُعدّ قبولاً للشروط الجديدة.",
  },
];

const sectionsEn = [
  {
    title: "Acceptance of Terms",
    body: "By using the Glorda app, you agree to comply with these Terms and Conditions. If you do not agree with any of these terms, please do not use the app.",
  },
  {
    title: "Use of the App",
    body: "The app must not be used for unlawful purposes or to harm others. Any attempt to gain unauthorised access to the app's systems or other users' data is strictly prohibited.",
  },
  {
    title: "Orders and Payments",
    body: "All orders are subject to the relevant store's approval. The user is responsible for the accuracy of the delivery information provided. In the case of cancellations, each store's own refund policy applies.",
  },
  {
    title: "Store Responsibility",
    body: "Stores registered on the platform bear full responsibility for the quality of their products, compliance with advertised specifications, and adherence to specified delivery times.",
  },
  {
    title: "Intellectual Property",
    body: "All content, designs, and trademarks published on Glorda are the exclusive property of Ali Lafi Al-Hasnani Foundation and may not be used or reproduced without explicit permission.",
  },
  {
    title: "Amendment of Terms",
    body: "Glorda reserves the right to amend these terms at any time. Users will be notified of any material amendments with sufficient notice before they take effect. Continued use of the app after amendment constitutes acceptance of the new terms.",
  },
];

export default function TermsPage() {
  const { isRtl } = useI18n();
  const sections = isRtl ? sectionsAr : sectionsEn;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AppNavbar />

      <main className="flex-1 py-10">
        <div className="max-w-xl mx-auto px-5">

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-extrabold text-gray-900 text-center mb-2"
          >
            {isRtl ? "الشروط والأحكام" : "Terms & Conditions"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-sm text-center mb-8"
          >
            {isRtl ? "آخر تحديث: أبريل 2026" : "Last updated: April 2026"}
          </motion.p>

          <div className="space-y-4">
            {sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="text-base font-bold text-primary mb-2 text-start">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-loose text-start">{s.body}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <AppFooter />
    </div>
  );
}
