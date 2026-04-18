import { useI18n } from "@/lib/i18n";
import { AppNavbar } from "@/components/AppNavbar";
import { AppFooter } from "@/components/AppFooter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const customersAr = [
  {
    q: "كيف يمكنني طلب بوكيه ورد أو هدية عبر Glorda؟",
    a: "حمّل التطبيق، اختر موقعك أو عنوان التوصيل، ثم تصفّح المتاجر القريبة واختر المنتج الذي يناسبك وأكمل الطلب.",
  },
  {
    q: "ما هي طرق الدفع المتاحة؟",
    a: "يدعم التطبيق عدة طرق دفع إلكترونية آمنة تشمل البطاقات الائتمانية، Apple Pay، mada، وغيرها.",
  },
  {
    q: "هل يمكنني استلام الطلب من المحل مباشرة؟",
    a: "نعم، يمكنك اختيار خيار الاستلام من المتجر عند إتمام طلبك إذا أتاحه المتجر.",
  },
  {
    q: "هل يمكنني استلام الطلب عبر خدمة المتجر؟",
    a: "نعم، يوفر كثير من المتاجر خدمة التوصيل المباشر. تظهر الخيارات المتاحة عند اختيار المتجر.",
  },
  {
    q: "هل يمكنني تحديد وقت معين للاستلام؟",
    a: "يتيح بعض المتاجر تحديد وقت مفضّل للاستلام أو التوصيل. يمكنك الاطلاع على الخيارات المتاحة أثناء إتمام الطلب.",
  },
  {
    q: "هل يمكنني إرسال هدية لشخص في مدينة أخرى؟",
    a: "نعم، ما عليك إلا إدخال عنوان المُهدى إليه وسيعرض التطبيق المتاجر القريبة منه.",
  },
  {
    q: "هل يمكنني متابعة حالة الطلب؟",
    a: "نعم، يمكنك متابعة حالة طلبك لحظةً بلحظة من خلال قسم \"طلباتي\" داخل التطبيق.",
  },
  {
    q: "هل يمكنني تخصيص البوكيه أو الهدية؟",
    a: "يتيح بعض المتاجر إضافة ملاحظات أو طلبات خاصة عند الطلب. يرجى مراجعة خيارات المتجر المختار.",
  },
  {
    q: "هل تتوفر منتجات موسمية أو عروض خاصة؟",
    a: "نعم، يعرض التطبيق العروض الموسمية والمناسبات الخاصة بشكل بارز على الصفحة الرئيسية.",
  },
  {
    q: "هل المنتجات معروضة بأسعار شاملة؟",
    a: "نعم، الأسعار المعروضة شاملة لجميع الرسوم المتعلقة بالمنتج، وقد تُضاف رسوم توصيل حسب المتجر.",
  },
  {
    q: "هل هناك منتجات حصرية في Glorda؟",
    a: "نعم، يوفر بعض المتاجر منتجات وتصاميم حصرية لا تجدها إلا عبر Glorda.",
  },
  {
    q: "هل خدمة العملاء متاحة على مدار الساعة؟",
    a: "فريق الدعم متاح خلال ساعات العمل. يمكنك التواصل معنا عبر البريد الإلكتروني أو واتساب في أي وقت وسيُردّ عليك في أقرب فرصة.",
  },
  {
    q: "هل يمكنني التواصل مع المتجر مباشرة داخل التطبيق؟",
    a: "نعم، يتيح التطبيق التواصل مع المتجر مباشرة لأي استفسار قبل أو بعد تقديم الطلب.",
  },
  {
    q: "هل يمكنني جدولة الطلب لموعد لاحق؟",
    a: "يدعم بعض المتاجر جدولة الطلبات المسبقة. تحقق من خيارات المتجر أثناء إتمام طلبك.",
  },
];

const partnersAr = [
  {
    q: "هل إنشاء متجر في غلوردا مجاني؟",
    a: "نعم، التسجيل وإنشاء المتجر مجاني تماماً. تواصل معنا لمعرفة تفاصيل الشراكة.",
  },
  {
    q: "كيف أسجل كتاجر في Glorda؟",
    a: "تواصل مع فريقنا عبر البريد الإلكتروني أو واتساب وسيرشدك أحد ممثلينا خلال خطوات التسجيل.",
  },
  {
    q: "هل يمكنني إدارة المنتجات وتعديلها؟",
    a: "نعم، يتيح النظام للتجار إضافة المنتجات وتعديل الأسعار والتوفر بسهولة من لوحة التحكم.",
  },
  {
    q: "هل يمكنني تحديد أوقات الاستلام أو التسليم للطلبات؟",
    a: "نعم، يمكنك ضبط أوقات عمل المتجر وخيارات التوصيل أو الاستلام المتاحة بمرونة كاملة.",
  },
  {
    q: "كيف أستلم أرباحي؟",
    a: "تُحوَّل الأرباح إلى حسابك البنكي المسجّل وفق دورة دفع منتظمة يتم الاتفاق عليها عند التعاقد.",
  },
  {
    q: "هل يمكنني التواصل مع العملاء داخل التطبيق؟",
    a: "نعم، يوفر التطبيق قناة تواصل مباشر بين المتجر والعميل لإتمام أي تنسيق قبل التوصيل.",
  },
  {
    q: "هل هناك دعم فني للتجار؟",
    a: "نعم، يوفر فريق غلوردا دعماً فنياً متخصصاً للتجار للمساعدة في أي مشكلة تقنية أو استفسار.",
  },
];

const customersEn = [
  { q: "How can I order flowers or a gift through Glorda?", a: "Download the app, choose your location or delivery address, browse nearby stores, select the product you like, and complete your order." },
  { q: "What payment methods are available?", a: "The app supports multiple secure payment methods including credit cards, Apple Pay, mada, and more." },
  { q: "Can I pick up my order directly from the store?", a: "Yes, you can choose the in-store pickup option when completing your order if the store offers it." },
  { q: "Can I receive delivery through the store's delivery service?", a: "Yes, many stores offer direct delivery. Available options appear when you select a store." },
  { q: "Can I schedule a specific pickup or delivery time?", a: "Some stores allow you to choose a preferred time. Available options are shown during checkout." },
  { q: "Can I send a gift to someone in another city?", a: "Yes, simply enter the recipient's address and the app will show stores near them." },
  { q: "Can I track my order status?", a: "Yes, you can track your order in real-time from the 'My Orders' section in the app." },
  { q: "Can I customise the bouquet or gift?", a: "Some stores allow special notes or requests during checkout. Check the selected store's options." },
  { q: "Are there seasonal products or special offers?", a: "Yes, the app prominently features seasonal offers and special occasions on the home screen." },
  { q: "Are prices shown inclusive of all fees?", a: "Yes, displayed prices are all-inclusive for the product. Delivery fees may apply depending on the store." },
  { q: "Are there exclusive products on Glorda?", a: "Yes, some stores offer exclusive designs and products only available through Glorda." },
  { q: "Is customer support available 24/7?", a: "Our support team is available during business hours. You can reach us via email or WhatsApp anytime and we will respond as soon as possible." },
  { q: "Can I contact the store directly inside the app?", a: "Yes, the app provides a direct communication channel between the customer and the store." },
  { q: "Can I schedule an order for a later date?", a: "Some stores support advance scheduling. Check the store options during checkout." },
];

const partnersEn = [
  { q: "Is creating a store on Glorda free?", a: "Yes, registration and store creation are completely free. Contact us to learn about partnership details." },
  { q: "How do I register as a merchant on Glorda?", a: "Contact our team via email or WhatsApp and one of our representatives will guide you through the registration steps." },
  { q: "Can I manage and edit my products?", a: "Yes, merchants can add products, update prices, and manage availability easily from the dashboard." },
  { q: "Can I set pickup or delivery times for orders?", a: "Yes, you can configure your store's working hours and delivery/pickup options with full flexibility." },
  { q: "How do I receive my earnings?", a: "Earnings are transferred to your registered bank account on a regular payment cycle agreed upon at contract." },
  { q: "Can I communicate with customers inside the app?", a: "Yes, the app provides a direct communication channel between the store and customer for any coordination." },
  { q: "Is there technical support for merchants?", a: "Yes, the Glorda team provides dedicated technical support to merchants for any technical issue or inquiry." },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-4 text-start"
      >
        <span className="text-gray-800 font-medium text-sm leading-relaxed flex-1">{q}</span>
        <span className={`flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A51245" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-sm leading-loose pb-4 text-start">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  const { isRtl } = useI18n();
  const [tab, setTab] = useState<"customers" | "partners">("customers");

  const customersData = isRtl ? customersAr : customersEn;
  const partnersData  = isRtl ? partnersAr  : partnersEn;
  const items = tab === "customers" ? customersData : partnersData;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AppNavbar />

      <main className="flex-1 py-10">
        <div className="max-w-xl mx-auto px-5">

          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            {isRtl ? "الأسئلة الشائعة" : "FAQ"}
          </h1>

          {/* Tab switcher */}
          <div className="flex rounded-2xl bg-gray-100 p-1 mb-6 gap-1">
            <button
              onClick={() => setTab("customers")}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                tab === "customers"
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {isRtl ? "العملاء" : "Customers"}
            </button>
            <button
              onClick={() => setTab("partners")}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                tab === "partners"
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {isRtl ? "الشركاء" : "Partners"}
            </button>
          </div>

          {/* Accordion */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm px-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
              >
                {items.map((item, i) => (
                  <AccordionItem key={i} q={item.q} a={item.a} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </main>

      <AppFooter />
    </div>
  );
}
