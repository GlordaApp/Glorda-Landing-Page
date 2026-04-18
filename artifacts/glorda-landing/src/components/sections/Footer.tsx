import { useI18n } from "@/lib/i18n";
import whiteLogo from "@assets/IMG_7564_1776480165426.png";
import { FaInstagram, FaTwitter, FaSnapchat, FaTiktok } from "react-icons/fa";

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
            <a href="#" className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 hover:bg-white/10 transition-colors group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" opacity="0.8"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div>
                <div className="text-[9px] text-white/40 leading-none">Download on the</div>
                <div className="text-xs text-white font-semibold">App Store</div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 hover:bg-white/10 transition-colors group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3.18 23.5c.3.17.65.17.95 0l11.45-6.6L12.63 14l-9.45 9.5zM.5 1.26C.19 1.6 0 2.13 0 2.83v18.34c0 .7.19 1.22.5 1.56l.08.08L10.63 12.7v-.24L.58 1.18.5 1.26zM20.54 10.27l-2.87-1.65-3.16 3.16 3.16 3.16 2.9-1.67c.83-.48.83-1.26-.03-1.74v-.26h.0zM4.13.5L15.58 7.1 12.63 10 3.18.5c.3-.17.65-.17.95 0z" fill="#C8963E"/></svg>
              <div>
                <div className="text-[9px] text-white/40 leading-none">GET IT ON</div>
                <div className="text-xs text-white font-semibold">Google Play</div>
              </div>
            </a>
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
