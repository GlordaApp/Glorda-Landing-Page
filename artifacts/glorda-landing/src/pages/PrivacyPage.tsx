import { useI18n } from "@/lib/i18n";
import { AppNavbar } from "@/components/AppNavbar";
import { AppFooter } from "@/components/AppFooter";
import { motion } from "framer-motion";

const sectionsAr = [
  {
    title: "جمع المعلومات",
    body: "يقوم التطبيق بجمع المعلومات التي تقدمها عند التسجيل، مثل الاسم وعنوان البريد الإلكتروني ورقم الجوال، إضافةً إلى بيانات الموقع الجغرافي اللازمة لعرض المتاجر القريبة منك.",
  },
  {
    title: "استخدام المعلومات",
    body: "تُستخدم بياناتك لتحسين تجربة الاستخدام، ومعالجة الطلبات، وإرسال الإشعارات المتعلقة بحالة طلباتك، ولن يتم مشاركتها مع أطراف خارجية إلا لأغراض تشغيلية ضرورية.",
  },
  {
    title: "حماية البيانات",
    body: "نستخدم أساليب تشفير متقدمة لحماية بياناتك الشخصية وبيانات الدفع. جميع المعاملات المالية تتم عبر بوابات دفع معتمدة وآمنة.",
  },
  {
    title: "ملفات تعريف الارتباط",
    body: "قد يستخدم التطبيق ملفات تعريف الارتباط لتحسين الأداء وتخصيص تجربتك. يمكنك التحكم في إعدادات ملفات الارتباط من إعدادات جهازك.",
  },
  {
    title: "حقوقك",
    body: "يحق لك في أي وقت طلب الاطلاع على بياناتك الشخصية أو تعديلها أو حذفها. للتواصل بشأن أي استفسار يتعلق بالخصوصية، يُرجى التواصل عبر البريد الإلكتروني info@glorda.com.",
  },
  {
    title: "التعديلات على السياسة",
    body: "نحتفظ بالحق في تعديل سياسة الخصوصية في أي وقت. سيتم إشعارك بأي تغييرات جوهرية عبر التطبيق أو البريد الإلكتروني المسجّل.",
  },
];

const sectionsEn = [
  {
    title: "Information Collection",
    body: "The app collects information you provide during registration, such as your name, email address, and phone number, as well as location data necessary to show nearby stores.",
  },
  {
    title: "Use of Information",
    body: "Your data is used to improve your experience, process orders, and send notifications about order status. It will not be shared with third parties except for necessary operational purposes.",
  },
  {
    title: "Data Protection",
    body: "We use advanced encryption to protect your personal and payment data. All financial transactions are processed through certified and secure payment gateways.",
  },
  {
    title: "Cookies",
    body: "The app may use cookies to improve performance and personalise your experience. You can control cookie settings from your device settings.",
  },
  {
    title: "Your Rights",
    body: "You have the right to access, modify, or delete your personal data at any time. For privacy-related inquiries, please contact us at info@glorda.com.",
  },
  {
    title: "Policy Amendments",
    body: "We reserve the right to amend this Privacy Policy at any time. You will be notified of any material changes via the app or your registered email.",
  },
];

export default function PrivacyPage() {
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
            {isRtl ? "سياسة الخصوصية" : "Privacy Policy"}
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
