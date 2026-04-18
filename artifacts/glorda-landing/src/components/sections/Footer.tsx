import { useI18n } from "@/lib/i18n";
import whiteLogo from "@assets/IMG_7564_1776480165426.png";
import { FaInstagram, FaTwitter, FaSnapchat, FaTiktok } from "react-icons/fa";
import { DownloadButton } from "@/components/DownloadButton";

const socials = [
  { icon: <FaInstagram size={18} />, label: "Instagram", href: "#" },
  { icon: <FaTwitter size={18} />, label: "Twitter / X", href: "#" },
  { icon: <FaSnapchat size={18} />, label: "Snapchat", href: "#" },
  { icon: <FaTiktok size={18} />, label: "TikTok", href: "#" },
];

export function Footer() {
  const { t, isRtl } = useI18n();

  return (
    <footer className="bg-[#0F0F0F] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/4 w-80 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 ${isRtl ? "text-right" : "text-left"}`}>

          {/* Brand */}
          <div className={`md:col-span-1 flex flex-col gap-5 ${isRtl ? "items-end" : "items-start"}`}>
            <img src={whiteLogo} alt="Glorda" className="h-10 w-auto object-contain" />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {isRtl
                ? "وجهتك الأولى للورود والكيك والهدايا والحلويات في السعودية"
                : "Your premier destination for flowers, cakes, gifts & sweets in Saudi Arabia"}
            </p>
            <div className="flex gap-2.5">
              {socials.map((s, i) => (
                <a key={i} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={`flex flex-col gap-3 ${isRtl ? "items-end" : "items-start"}`}>
            <h4 className="text-white font-bold text-sm mb-1">
              {isRtl ? "روابط سريعة" : "Quick Links"}
            </h4>
            {[
              { label: t("nav.home"), href: "#home" },
              { label: t("nav.about"), href: "#about" },
              { label: t("nav.features"), href: "#features" },
              { label: t("nav.merchants"), href: "#merchants" },
            ].map((l, i) => (
              <a key={i} href={l.href} className="text-white/50 text-sm hover:text-white transition-colors">{l.label}</a>
            ))}
          </div>

          {/* Legal */}
          <div className={`flex flex-col gap-3 ${isRtl ? "items-end" : "items-start"}`}>
            <h4 className="text-white font-bold text-sm mb-1">
              {isRtl ? "قانوني" : "Legal"}
            </h4>
            {[
              { label: t("footer.privacy"), href: "#" },
              { label: t("footer.terms"), href: "#" },
              { label: t("footer.contact"), href: "#" },
            ].map((l, i) => (
              <a key={i} href={l.href} className="text-white/50 text-sm hover:text-white transition-colors">{l.label}</a>
            ))}
          </div>

          {/* Download */}
          <div className={`flex flex-col gap-3 ${isRtl ? "items-end" : "items-start"}`}>
            <h4 className="text-white font-bold text-sm mb-1">
              {isRtl ? "حمّل التطبيق" : "Download App"}
            </h4>
            <DownloadButton variant="outline-light" size="sm" isRtl={isRtl} />
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>{t("footer.rights")}</span>
          <div className={`flex items-center gap-1 ${isRtl ? "flex-row-reverse" : ""}`}>
            <span className="text-primary">♥</span>
            <span>{isRtl ? "صُنع بكل الاحترافية في السعودية" : "Crafted with care in Saudi Arabia"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
