import { useI18n } from "@/lib/i18n";
import { AppNavbar } from "@/components/AppNavbar";
import { AppFooter } from "@/components/AppFooter";
import { motion } from "framer-motion";

const EmailIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
);

const WhatsappIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function SupportPage() {
  const { isRtl } = useI18n();

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
            {isRtl ? "الدعم" : "Support"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-sm text-center mb-10"
          >
            {isRtl
              ? "فريقنا جاهز للمساعدة. تواصل معنا عبر إحدى القنوات التالية."
              : "Our team is ready to help. Reach us through any of the channels below."}
          </motion.p>

          <div className="space-y-4">

            {/* Email */}
            <motion.a
              href="mailto:info@glorda.com"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex items-center gap-4 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                <EmailIcon />
              </div>
              <div className="text-start">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                <p className="text-gray-900 font-bold text-base" dir="ltr">info@glorda.com</p>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/966542400331"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="flex items-center gap-4 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-[#25D366]/30 transition-all duration-200 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-200">
                <WhatsappIcon />
              </div>
              <div className="text-start">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">WhatsApp</p>
                <p className="text-gray-900 font-bold text-base" dir="ltr">+966 54 240 0331</p>
              </div>
            </motion.a>

          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
