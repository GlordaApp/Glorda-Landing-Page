import { useI18n } from "@/lib/i18n";
import { AppNavbar } from "@/components/AppNavbar";
import { AppFooter } from "@/components/AppFooter";
import { motion } from "framer-motion";

type Section = {
  num: string;
  title: string;
  intro?: string;
  bullets?: string[];
};

const sectionsAr: Section[] = [
  {
    num: "",
    title: "مقدمة",
    intro: "مرحبًا بك في تطبيق غلوردا. باستخدامك للتطبيق أو تسجيلك فيه، فإنك توافق على الالتزام بهذه الشروط والأحكام. يرجى قراءة هذه الشروط بعناية قبل استخدام التطبيق.",
    bullets: [
      "تطبيق غلوردا مملوك لـ مؤسسة علي لافي الحسناني، المسجلة في وزارة التجارة السعودية برقم 7052888539، وموثقة في منصة التجارة الإلكترونية برقم 0000209355.",
    ],
  },
  {
    num: "1",
    title: "التعريفات",
    bullets: [
      "التطبيق: تطبيق غلوردا على الأجهزة الذكية.",
      "المستخدم: أي شخص يقوم بإنشاء حساب أو يستخدم خدمات التطبيق.",
      "المتجر: أي جهة تجارية مسجلة داخل التطبيق لعرض منتجاتها أو خدماتها.",
      "الخدمة: جميع الخدمات المقدمة عبر التطبيق، بما في ذلك عرض المنتجات، الطلبات، التوصيل، والتواصل.",
    ],
  },
  {
    num: "2",
    title: "أهلية الاستخدام",
    bullets: [
      "يجب أن يكون المستخدم بعمر 18 سنة أو أكثر.",
      "باستخدام التطبيق، يقر المستخدم بأنه يتمتع بالأهلية القانونية الكاملة لإبرام العقود.",
    ],
  },
  {
    num: "3",
    title: "إنشاء الحساب",
    bullets: [
      "يتطلب إنشاء الحساب إدخال بيانات صحيحة تشمل: الاسم الكامل، رقم الجوال، البريد الإلكتروني.",
      "يلتزم المستخدم بالحفاظ على سرية بيانات الدخول وعدم مشاركتها مع أي طرف آخر.",
      "يحق للتطبيق تعليق أو حذف أي حساب يخالف الشروط.",
    ],
  },
  {
    num: "4",
    title: "استخدام التطبيق",
    intro: "يوافق المستخدم على:",
    bullets: [
      "استخدام التطبيق للأغراض المشروعة فقط.",
      "عدم إساءة استخدام الخدمات أو محاولة اختراق النظام.",
      "عدم نشر أي محتوى مسيء أو مخالف للأنظمة.",
      "عدم استخدام التطبيق للإضرار بالمتاجر أو المستخدمين الآخرين.",
    ],
  },
  {
    num: "5",
    title: "الطلبات والدفع",
    bullets: [
      "يتم تنفيذ الطلبات من خلال المتاجر المسجلة داخل التطبيق.",
      "الدفع يتم عبر بوابة الدفع TAP Payment داخل التطبيق.",
      "الأسعار والمنتجات مسؤولية المتاجر بالكامل.",
      "التطبيق غير مسؤول عن أي خطأ ناتج عن إدخال بيانات دفع غير صحيحة.",
    ],
  },
  {
    num: "6",
    title: "التوصيل",
    bullets: [
      "تختلف خدمات التوصيل حسب نوع المتجر (توصيل – فروع – كلاهما).",
      "مسؤولية التوصيل تقع على المتجر أو مزود الخدمة المعتمد.",
      "قد تختلف مدة التوصيل حسب الموقع ونوع الخدمة.",
    ],
  },
  {
    num: "7",
    title: "التواصل داخل التطبيق",
    bullets: [
      "يتيح التطبيق نظام رسائل بين العميل والمتجر.",
      "يجب استخدام الرسائل بطريقة محترمة وغير مخالفة للأنظمة.",
      "يحق للتطبيق مراقبة الرسائل عند الضرورة لحل النزاعات أو الامتثال للأنظمة.",
    ],
  },
  {
    num: "8",
    title: "تقييم المتاجر والمنتجات",
    bullets: [
      "يحق للمستخدم تقييم المتاجر والمنتجات بعد إتمام الطلب.",
      "يجب أن يكون التقييم صادقًا وغير مسيء أو مضلل.",
      "يحق للتطبيق حذف أي تقييم مخالف.",
    ],
  },
  {
    num: "9",
    title: "مسؤوليات التطبيق",
    intro: "يعمل التطبيق كمنصة لربط العملاء بالمتاجر. لا يتحمل التطبيق أي مسؤولية عن:",
    bullets: [
      "جودة المنتجات أو الخدمات المقدمة من المتاجر.",
      "التأخير في التوصيل.",
      "أي تعاملات مالية خارج التطبيق.",
      "مسؤولية المتاجر كاملة عن منتجاتها وأسعارها وسياساتها.",
    ],
  },
  {
    num: "10",
    title: "حقوق الملكية الفكرية",
    bullets: [
      "جميع حقوق التصميم، الشعار، المحتوى، والبرمجيات مملوكة لمؤسسة علي لافي الحسناني.",
      "يمنع نسخ أو إعادة استخدام أي جزء من التطبيق دون إذن خطي.",
    ],
  },
  {
    num: "11",
    title: "إيقاف أو إنهاء الخدمة",
    intro: "يحق للتطبيق:",
    bullets: [
      "تعليق أو حذف حساب المستخدم عند مخالفة الشروط.",
      "إيقاف التطبيق مؤقتًا أو دائمًا لأسباب تقنية أو تشغيلية.",
      "تعديل أو تحديث الخدمات دون إشعار مسبق.",
    ],
  },
  {
    num: "12",
    title: "التعديلات على الشروط",
    bullets: [
      "قد يتم تحديث شروط الاستخدام من وقت لآخر.",
      "يُعد استمرار استخدام التطبيق بعد التعديل موافقة ضمنية على الشروط الجديدة.",
    ],
  },
  {
    num: "13",
    title: "القانون والاختصاص القضائي",
    bullets: [
      "تخضع هذه الشروط لأنظمة المملكة العربية السعودية.",
      "وتختص المحاكم السعودية بالنظر في أي نزاع ينشأ عنها.",
    ],
  },
  {
    num: "14",
    title: "التواصل والدعم",
    intro: "للاستفسارات أو الشكاوى:",
    bullets: [
      "البريد الإلكتروني: info@glorda.com",
      "الواتساب: 966542400331+",
    ],
  },
];

const sectionsEn: Section[] = [
  {
    num: "",
    title: "Introduction",
    intro: "Welcome to Glorda. By using or registering on the app, you agree to comply with these Terms and Conditions. Please read them carefully before using the app.",
    bullets: [
      "Glorda is owned by Ali Lafi Al-Hasnani Foundation, registered with the Saudi Ministry of Commerce under number 7052888539 and verified on the e-commerce platform under number 0000209355.",
    ],
  },
  {
    num: "1",
    title: "Definitions",
    bullets: [
      "App: Glorda on smart devices.",
      "User: Any person who creates an account or uses the app's services.",
      "Store: Any commercial entity registered in the app to list its products or services.",
      "Service: All services provided through the app, including product listings, orders, delivery, and communication.",
    ],
  },
  {
    num: "2",
    title: "Eligibility",
    bullets: [
      "Users must be 18 years of age or older.",
      "By using the app, the user confirms they have full legal capacity to enter into contracts.",
    ],
  },
  {
    num: "3",
    title: "Account Creation",
    bullets: [
      "Creating an account requires entering accurate information including: full name, mobile number, and email address.",
      "The user is responsible for maintaining the confidentiality of their login credentials and must not share them with any other party.",
      "The app reserves the right to suspend or delete any account that violates these terms.",
    ],
  },
  {
    num: "4",
    title: "Use of the App",
    intro: "The user agrees to:",
    bullets: [
      "Use the app for lawful purposes only.",
      "Not misuse the services or attempt to breach the system.",
      "Not post any offensive or unlawful content.",
      "Not use the app to harm stores or other users.",
    ],
  },
  {
    num: "5",
    title: "Orders and Payment",
    bullets: [
      "Orders are fulfilled through stores registered within the app.",
      "Payment is processed via the TAP Payment gateway inside the app.",
      "Prices and products are the sole responsibility of the stores.",
      "The app is not responsible for any errors resulting from incorrect payment information entered by the user.",
    ],
  },
  {
    num: "6",
    title: "Delivery",
    bullets: [
      "Delivery services vary depending on the store type (delivery – pickup – both).",
      "Delivery responsibility lies with the store or approved service provider.",
      "Delivery timeframes may vary depending on location and service type.",
    ],
  },
  {
    num: "7",
    title: "In-App Communication",
    bullets: [
      "The app provides a messaging system between the customer and the store.",
      "Messages must be used respectfully and in compliance with regulations.",
      "The app reserves the right to monitor messages when necessary to resolve disputes or comply with regulations.",
    ],
  },
  {
    num: "8",
    title: "Ratings",
    bullets: [
      "Users may rate stores and products after completing an order.",
      "Ratings must be honest, non-offensive, and non-misleading.",
      "The app reserves the right to remove any rating that violates these guidelines.",
    ],
  },
  {
    num: "9",
    title: "App Responsibilities",
    intro: "The app operates as a platform connecting customers with stores. The app bears no responsibility for:",
    bullets: [
      "The quality of products or services provided by stores.",
      "Delays in delivery.",
      "Any financial transactions conducted outside the app.",
      "Stores bear full responsibility for their products, prices, and policies.",
    ],
  },
  {
    num: "10",
    title: "Intellectual Property",
    bullets: [
      "All rights to the design, logo, content, and software are owned by Ali Lafi Al-Hasnani Foundation.",
      "Copying or reusing any part of the app without written permission is prohibited.",
    ],
  },
  {
    num: "11",
    title: "Suspension or Termination of Service",
    intro: "The app reserves the right to:",
    bullets: [
      "Suspend or delete a user's account upon violation of these terms.",
      "Temporarily or permanently suspend the app for technical or operational reasons.",
      "Modify or update services without prior notice.",
    ],
  },
  {
    num: "12",
    title: "Amendments to Terms",
    bullets: [
      "These terms may be updated from time to time.",
      "Continued use of the app following any amendment constitutes implicit acceptance of the new terms.",
    ],
  },
  {
    num: "13",
    title: "Governing Law and Jurisdiction",
    bullets: [
      "These terms are governed by the laws of the Kingdom of Saudi Arabia.",
      "Saudi courts have exclusive jurisdiction over any dispute arising from these terms.",
    ],
  },
  {
    num: "14",
    title: "Contact & Support",
    intro: "For enquiries or complaints:",
    bullets: [
      "Email: info@glorda.com",
      "WhatsApp: +966542400331",
    ],
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
                transition={{ delay: 0.06 + i * 0.03 }}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3 justify-end">
                  <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
                  {s.num && (
                    <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {s.num}
                    </span>
                  )}
                </div>

                {s.intro && (
                  <p className="text-gray-600 text-sm leading-loose text-start mb-3">{s.intro}</p>
                )}

                {s.bullets && s.bullets.length > 0 && (
                  <ul className="space-y-2">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-gray-600 text-sm leading-loose text-start">{b}</span>
                      </li>
                    ))}
                  </ul>
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
