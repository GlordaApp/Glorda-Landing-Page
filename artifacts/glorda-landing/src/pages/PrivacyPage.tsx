import { useI18n } from "@/lib/i18n";
import { AppNavbar } from "@/components/AppNavbar";
import { AppFooter } from "@/components/AppFooter";
import { motion } from "framer-motion";

type Section = {
  title: string;
  intro?: string;
  bullets?: string[];
  note?: string;
};

const sectionsAr: Section[] = [
  {
    title: "مقدمة",
    intro: "تقدّم هذه السياسة شرحًا لكيفية جمع واستخدام وحماية بيانات المستخدمين في تطبيق غلوردا، المملوك لـ شركة أعماق الريادة للتجارة، والمسجلة في وزارة التجارة السعودية برقم 7052888539، وموثقة في منصة التجارة الإلكترونية برقم 0000209355.",
    note: "يلتزم التطبيق بالامتثال لأحكام نظام حماية البيانات الشخصية السعودي (PDPL) وجميع الأنظمة ذات العلاقة داخل المملكة العربية السعودية.",
  },
  {
    title: "البيانات التي يتم جمعها",
    intro: "يجمع تطبيق غلوردا البيانات التالية عند تسجيل المستخدم أو استخدامه للخدمات:",
    bullets: [
      "الاسم الكامل.",
      "رقم الجوال.",
      "البريد الإلكتروني.",
      "لا يتم جمع أي بيانات إضافية غير المذكورة أعلاه.",
    ],
  },
  {
    title: "طريقة جمع البيانات",
    intro: "يتم جمع البيانات مباشرة من المستخدم عبر:",
    bullets: [
      "نموذج التسجيل داخل التطبيق.",
      "تحديث بيانات الحساب.",
      "استخدام خدمات التطبيق (مثل الطلبات والتواصل).",
      "لا يتم جمع البيانات من أي أطراف خارجية باستثناء ما يقتضيه تنفيذ الخدمات مثل بوابات الدفع.",
    ],
  },
  {
    title: "الغرض من جمع البيانات",
    intro: "يتم استخدام بيانات المستخدم للأغراض التالية:",
    bullets: [
      "إنشاء حساب المستخدم وإدارة ملفه الشخصي.",
      "تنفيذ الطلبات ومعالجة عمليات الشراء.",
      "توصيل الطلبات عبر المتاجر أو مقدمي الخدمة.",
      "تحسين تجربة المستخدم داخل التطبيق.",
      "تمكين التواصل بين العميل والمتجر عبر الرسائل الداخلية.",
      "تمكين نظام التقييم للمتاجر والمنتجات.",
    ],
  },
  {
    title: "مشاركة البيانات مع أطراف أخرى",
    intro: "قد تتم مشاركة بيانات المستخدم مع الأطراف التالية فقط:",
    bullets: [
      "المتاجر داخل التطبيق لتنفيذ الطلبات والتواصل.",
      "مزودي خدمات الدفع مثل بوابة الدفع TAP Payment.",
      "جهات حكومية عند الطلب الرسمي أو الامتثال للأنظمة.",
    ],
  },
  {
    title: "موقع تخزين البيانات",
    intro: "يتم تخزين بيانات المستخدم داخل المملكة العربية السعودية وفق المتطلبات التنظيمية المحلية.",
  },
  {
    title: "مدة الاحتفاظ بالبيانات",
    bullets: [
      "يحتفظ التطبيق ببيانات المستخدم طوال فترة استخدام الحساب.",
      "وفي حال حذف الحساب، يتم حذف البيانات أو إخفاؤها خلال مدة زمنية معقولة وفقًا للأنظمة السعودية.",
    ],
  },
  {
    title: "حقوق المستخدم",
    intro: "وفق نظام حماية البيانات الشخصية السعودي، يحق للمستخدم:",
    bullets: [
      "الوصول إلى بياناته الشخصية.",
      "طلب تعديل أو تحديث بياناته.",
      "طلب حذف الحساب والبيانات المرتبطة به.",
      "سحب الموافقة على معالجة البيانات (مع العلم أن بعض الخدمات قد تتوقف).",
      "يمكن للمستخدم ممارسة هذه الحقوق عبر التواصل معنا.",
    ],
  },
  {
    title: "حماية البيانات",
    intro: "تتخذ شركة أعماق السوق للتجارة الإجراءات الأمنية اللازمة لحماية بيانات المستخدم من:",
    bullets: [
      "الوصول غير المصرح به.",
      "الاستخدام أو التعديل غير القانوني.",
      "الفقد أو التلف.",
      "كما يتم استخدام بروتوكولات تشفير عند تبادل البيانات الحساسة مثل عمليات الدفع.",
    ],
  },
  {
    title: "خدمات وأدوات خارجية",
    intro: "يعتمد التطبيق على خدمات خارجية ضرورية لتشغيله، وتشمل:",
    bullets: [
      "بوابة الدفع TAP Payment لمعالجة المدفوعات.",
      "خدمات التقييم للمتاجر والمنتجات.",
      "خدمات تقنية مساعدة لتشغيل التطبيق (إن وجدت).",
      "تلتزم هذه الجهات بسياسات الخصوصية الخاصة بها وبالأنظمة السعودية عند التعامل مع البيانات.",
    ],
  },
  {
    title: "الفئة العمرية المسموح لها باستخدام التطبيق",
    bullets: [
      "التطبيق مخصص للمستخدمين من عمر 18 سنة فما فوق.",
      "ولا يُسمح للأطفال باستخدام التطبيق دون إشراف ولي الأمر.",
    ],
  },
  {
    title: "التواصل والدعم",
    intro: "للاستفسارات المتعلقة بالخصوصية أو لممارسة حقوقك، يمكن التواصل عبر:",
    bullets: [
      "البريد الإلكتروني: info@glorda.com",
      "الواتساب: 966542400331+",
    ],
  },
  {
    title: "التعديلات على سياسة الخصوصية",
    bullets: [
      "قد يتم تحديث هذه السياسة من وقت لآخر بما يتوافق مع الأنظمة السعودية أو لتطوير خدمات التطبيق.",
      "وسيتم إشعار المستخدمين عند إجراء أي تغييرات جوهرية.",
    ],
  },
];

const sectionsEn: Section[] = [
  {
    title: "Introduction",
    intro: "This policy explains how Glorda collects, uses, and protects user data. The app is owned by Ali Lafi Al-Hasnani Foundation, registered with the Saudi Ministry of Commerce under number 7052888539 and verified on the e-commerce platform under number 0000209355.",
    note: "The app is committed to complying with the Saudi Personal Data Protection Law (PDPL) and all related regulations within the Kingdom of Saudi Arabia.",
  },
  {
    title: "Data We Collect",
    intro: "Glorda collects the following data when a user registers or uses the services:",
    bullets: [
      "Full name.",
      "Mobile number.",
      "Email address.",
      "No additional data beyond the above is collected.",
    ],
  },
  {
    title: "How Data Is Collected",
    intro: "Data is collected directly from the user via:",
    bullets: [
      "The registration form inside the app.",
      "Updating account information.",
      "Using app services (such as orders and communication).",
      "Data is not collected from any external parties except as required to deliver services, such as payment gateways.",
    ],
  },
  {
    title: "Purpose of Data Collection",
    intro: "User data is used for the following purposes:",
    bullets: [
      "Creating a user account and managing the user profile.",
      "Processing orders and purchase transactions.",
      "Delivering orders through stores or service providers.",
      "Improving the user experience within the app.",
      "Enabling communication between customers and stores via internal messaging.",
      "Enabling the rating system for stores and products.",
    ],
  },
  {
    title: "Sharing Data with Third Parties",
    intro: "User data may be shared only with the following parties:",
    bullets: [
      "Stores within the app to fulfil orders and communicate.",
      "Payment service providers such as TAP Payment.",
      "Government authorities upon official request or regulatory compliance.",
    ],
  },
  {
    title: "Data Storage Location",
    intro: "User data is stored within the Kingdom of Saudi Arabia in accordance with local regulatory requirements.",
  },
  {
    title: "Data Retention Period",
    bullets: [
      "The app retains user data for the duration of account usage.",
      "If an account is deleted, data is deleted or anonymised within a reasonable timeframe in accordance with Saudi regulations.",
    ],
  },
  {
    title: "User Rights",
    intro: "Under the Saudi Personal Data Protection Law, users have the right to:",
    bullets: [
      "Access their personal data.",
      "Request the correction or updating of their data.",
      "Request deletion of their account and associated data.",
      "Withdraw consent to data processing (noting that some services may cease).",
      "Users may exercise these rights by contacting us.",
    ],
  },
  {
    title: "Data Protection",
    intro: "Ali Lafi Al-Hasnani Foundation takes the necessary security measures to protect user data from:",
    bullets: [
      "Unauthorised access.",
      "Unlawful use or modification.",
      "Loss or damage.",
      "Encryption protocols are used when transmitting sensitive data such as payment transactions.",
    ],
  },
  {
    title: "External Services and Tools",
    intro: "The app relies on external services necessary for its operation, including:",
    bullets: [
      "TAP Payment gateway for processing payments.",
      "Rating services for stores and products.",
      "Supporting technical services for running the app (where applicable).",
      "These parties adhere to their own privacy policies and Saudi regulations when handling data.",
    ],
  },
  {
    title: "Eligible Age for Using the App",
    bullets: [
      "The app is intended for users aged 18 and above.",
      "Children are not permitted to use the app without parental supervision.",
    ],
  },
  {
    title: "Contact & Support",
    intro: "For privacy-related enquiries or to exercise your rights, please contact us via:",
    bullets: [
      "Email: info@glorda.com",
      "WhatsApp: +966542400331",
    ],
  },
  {
    title: "Amendments to the Privacy Policy",
    bullets: [
      "This policy may be updated from time to time in line with Saudi regulations or to develop app services.",
      "Users will be notified of any material changes.",
    ],
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
                transition={{ delay: 0.08 + i * 0.04 }}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="text-base font-bold text-primary mb-3 text-start">{s.title}</h3>

                {s.intro && (
                  <p className="text-gray-600 text-sm leading-loose text-start mb-3">{s.intro}</p>
                )}

                {s.bullets && s.bullets.length > 0 && (
                  <ul className="space-y-2">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-start">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-gray-600 text-sm leading-loose">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.note && (
                  <p className="text-gray-500 text-sm leading-loose text-start mt-3 pt-3 border-t border-gray-100 italic">
                    {s.note}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <AppFooter />
    </div>
  );
}
