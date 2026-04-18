import { useI18n } from "@/lib/i18n";
import whiteLogo from "@assets/IMG_7564_1776480165426.png";
import { Instagram, Twitter, MessageCircle } from "lucide-react"; // Using MessageCircle as fallback for Snapchat since lucide doesn't have it

export function Footer() {
  const { t, isRtl } = useI18n();

  return (
    <footer className="bg-[#111111] text-white/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          
          <div className={`flex flex-col items-center md:items-start ${isRtl ? 'md:items-end' : ''}`}>
            <img src={whiteLogo} alt="Glorda" className="h-12 w-auto mb-6" />
            <p className="text-sm max-w-xs text-center md:text-start rtl:md:text-end mb-6">
              {t("hero.subtitle")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className={`flex gap-8 md:gap-16 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <div className={`flex flex-col gap-3 ${isRtl ? 'items-end' : 'items-start'}`}>
              <a href="#" className="hover:text-white transition-colors">{t("nav.home")}</a>
              <a href="#" className="hover:text-white transition-colors">{t("nav.about")}</a>
              <a href="#" className="hover:text-white transition-colors">{t("nav.features")}</a>
            </div>
            <div className={`flex flex-col gap-3 ${isRtl ? 'items-end' : 'items-start'}`}>
              <a href="#" className="hover:text-white transition-colors">{t("footer.privacy")}</a>
              <a href="#" className="hover:text-white transition-colors">{t("footer.terms")}</a>
              <a href="#" className="hover:text-white transition-colors">{t("footer.contact")}</a>
            </div>
          </div>

        </div>

        <div className={`pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          <p>{t("footer.rights")}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>SA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}