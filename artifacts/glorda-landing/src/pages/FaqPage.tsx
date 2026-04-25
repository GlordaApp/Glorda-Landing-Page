import { useI18n } from "@/lib/i18n";
import { AppNavbar } from "@/components/AppNavbar";
import { AppFooter } from "@/components/AppFooter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const customersAr = [
  {
    q: "كيف يمكنني طلب بوكيه ورد أو هدية عبر Glorda؟",
    a: "يمكنك تصفح المنتجات عبر الموقع أو التطبيق، اختيار الباقة المناسبة، ثم إتمام الطلب بخطوات بسيطة.",
  },
  {
    q: "ما هي طرق الدفع المتاحة؟",
    a: "نوفر مدى، فيزا، ماستركارد، Apple Pay، STC Pay بالإضافة إلى خدمات الدفع بالتقسيط مثل تابي.",
  },
  {
    q: "هل يمكنني استلام الطلب من المحل مباشرة؟",
    a: "نعم، يمكنك اختيار الاستلام بنفسك من المحل.",
  },
  {
    q: "هل يمكنني استلام الطلب عبر خدمة المتجر؟",
    a: "نعم، يمكنك استخدام خدمة التسليم الخاصة بالمتجر.",
  },
  {
    q: "هل يمكنني تحديد وقت معين للاستلام؟",
    a: "نعم، يمكنك اختيار الوقت المناسب أثناء إتمام الطلب.",
  },
  {
    q: "هل يمكنني إرسال هدية لشخص في مدينة أخرى؟",
    a: "نعم، يمكنك اختيار المدينة والمتجر المتاح فيها، وسيتم تجهيز الطلب من هناك.",
  },
  {
    q: "هل يمكنني متابعة حالة الطلب؟",
    a: "نعم، ستصلك إشعارات عبر التطبيق.",
  },
  {
    q: "هل يمكنني تخصيص البوكيه أو الهدية؟",
    a: "نعم، يمكنك إضافة بطاقة معايدة أو اختيار تصميم خاص حسب المناسبة.",
  },
  {
    q: "هل تتوفر منتجات موسمية أو عروض خاصة؟",
    a: "نعم، نقدم باقات مميزة في المناسبات مثل الأعياد، اليوم الوطني، ويوم الأم، عيد الحب وغيرها من المناسبات.",
  },
  {
    q: "هل المنتجات معروضة بأسعار شاملة؟",
    a: "نعم، الأسعار تشمل جميع الرسوم ما لم يُذكر غير ذلك.",
  },
  {
    q: "هل هناك منتجات حصرية في Glorda؟",
    a: "نعم، بعض الباقات متوفرة حصريًا عبر التطبيق.",
  },
  {
    q: "هل خدمة العملاء متاحة على مدار الساعة؟",
    a: "نعم، نوفر دعمًا على مدار 24/7.",
  },
  {
    q: "هل يمكنني التواصل مع المتجر مباشرة داخل التطبيق؟",
    a: "نعم، يمكنك استخدام خاصية الرسائل داخل التطبيق للتواصل مع المتجر بشكل مباشر، سواء للاستفسار عن المنتجات أو لتوضيح أي تفاصيل خاصة بالطلب.",
  },
  {
    q: "هل يمكنني جدولة الطلب لموعد لاحق؟",
    a: "نعم، يمكنك تحديد موعد التوصيل عند إتمام الطلب لتصل الورود أو الهدايا أو الكيك أو الشوكولاتة في الوقت المحدد.",
  },
];

const partnersAr = [
  {
    q: "كيف أسجل كتاجر في Glorda؟",
    a: "يمكنك التسجيل عبر صفحة \"انضم كشريك\" في التطبيق وأدخل بيانات المتجر، وسيتم مراجعتها خلال وقت قصير ويتم قبولك.",
  },
  {
    q: "كيف أستلم أرباحي؟",
    a: "يتم تحويل الأرباح إلى حسابك البنكي بشكل دوري، ويمكنك تتبع التفاصيل من خلال لوحة التاجر.",
  },
  {
    q: "هل هناك دعم فني للتجار؟",
    a: "نعم، نوفر دعمًا متواصلًا عبر الواتساب أو البريد الإلكتروني.",
  },
  {
    q: "هل يمكنني إدارة المنتجات وتعديلها؟",
    a: "نعم، يمكنك إضافة أو تعديل المنتجات والصور والأسعار بكل سهولة من خلال لوحة التاجر.",
  },
  {
    q: "هل يمكنني التواصل مع العملاء داخل التطبيق؟",
    a: "نعم، يمكنك الرد على استفسارات العملاء عبر الرسائل المخصصة داخل التطبيق.",
  },
  {
    q: "هل يمكنني تحديد أوقات الاستلام أو التسليم للطلبات؟",
    a: "نعم، يمكنك ضبط الأوقات المتاحة حسب ساعات عمل متجرك، لتناسب جدولك التشغيلي.",
  },
  {
    q: "هل إنشاء متجر في غلوردا مجاني؟",
    a: "نعم، فتح متجر وعرض منتجاتك بالكامل مجاني.",
  },
];

const customersEn = [
  { q: "How can I order flowers or a gift through Glorda?", a: "Browse products via the website or app, choose the right package, then complete the order in a few simple steps." },
  { q: "What payment methods are available?", a: "We support mada, Visa, Mastercard, Apple Pay, STC Pay, as well as instalment services such as Tabby." },
  { q: "Can I pick up my order directly from the store?", a: "Yes, you can choose to collect your order in person from the store." },
  { q: "Can I receive delivery through the store's delivery service?", a: "Yes, you can use the store's own delivery service." },
  { q: "Can I choose a specific pickup or delivery time?", a: "Yes, you can select the time that suits you when completing your order." },
  { q: "Can I send a gift to someone in another city?", a: "Yes, you can choose the city and an available store there, and the order will be prepared from that location." },
  { q: "Can I track my order status?", a: "Yes, you will receive notifications through the app." },
  { q: "Can I customise the bouquet or gift?", a: "Yes, you can add a greeting card or choose a special design for the occasion." },
  { q: "Are there seasonal products or special offers?", a: "Yes, we offer special packages for occasions such as Eid, National Day, Mother's Day, Valentine's Day, and more." },
  { q: "Are prices shown inclusive of all fees?", a: "Yes, prices include all fees unless stated otherwise." },
  { q: "Are there exclusive products on Glorda?", a: "Yes, some packages are available exclusively through the app." },
  { q: "Is customer support available 24/7?", a: "Yes, we provide support around the clock, 24/7." },
  { q: "Can I contact the store directly inside the app?", a: "Yes, you can use the messaging feature inside the app to communicate directly with the store, whether to enquire about products or clarify any details related to your order." },
  { q: "Can I schedule an order for a later date?", a: "Yes, you can set a delivery time when completing your order so that flowers, gifts, cakes or chocolates arrive at the specified time." },
];

const partnersEn = [
  { q: "How do I register as a merchant on Glorda?", a: "You can register via the 'Join as Partner' page in the app, enter your store details, and they will be reviewed within a short time before approval." },
  { q: "How do I receive my earnings?", a: "Earnings are transferred to your bank account on a regular basis, and you can track the details through the merchant dashboard." },
  { q: "Is there technical support for merchants?", a: "Yes, we provide continuous support via WhatsApp or email." },
  { q: "Can I manage and edit my products?", a: "Yes, you can add or edit products, images, and prices easily through the merchant dashboard." },
  { q: "Can I communicate with customers inside the app?", a: "Yes, you can respond to customer enquiries via the dedicated messaging feature inside the app." },
  { q: "Can I set pickup or delivery times for orders?", a: "Yes, you can configure available times according to your store's working hours to suit your operational schedule." },
  { q: "Is creating a store on Glorda free?", a: "Yes, opening a store and listing all your products is completely free." },
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

  useEffect(() => {
    const allQA = [...customersAr, ...partnersAr];
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allQA.map(({ q, a }) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": { "@type": "Answer", "text": a },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById("faq-schema")?.remove(); };
  }, []);

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
