import { useI18n } from "@/lib/i18n";
import glordaIcon from "@assets/glorda_icon_white.webp";
import { FaInstagram, FaTiktok, FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { DownloadButton } from "@/components/DownloadButton";

const socials = [
  { icon: <FaInstagram size={17} />, label: "Instagram", href: "https://www.instagram.com/glordaapp?igsh=MWZ3bzZnNHE0YXI1Mw%3D%3D&utm_source=qr" },
  { icon: <FaTiktok size={17} />, label: "TikTok", href: "https://www.tiktok.com/@glordaapp?_r=1&_t=ZS-94QLc5WevTA" },
  { icon: <FaFacebook size={17} />, label: "Facebook", href: "https://www.facebook.com/share/1FrLJcr7Xf/?mibextid=wwXIfr" },
  { icon: <FaXTwitter size={17} />, label: "X (Twitter)", href: "https://x.com/glordaapp?s=21" },
  { icon: <FaLinkedin size={17} />, label: "LinkedIn", href: "https://www.linkedin.com/company/glorda/" },
  { icon: <FaPinterest size={17} />, label: "Pinterest", href: "https://pin.it/26k3hxXWj" },
];

const EmailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
);

const WhatsappIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export function Footer() {
  const { isRtl } = useI18n();

  return (
    <footer className="bg-[#0D0D0D] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 end-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* 5-column grid — direction-aware */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4 items-start">
            <img src={glordaIcon} alt="Glorda" className="h-14 w-auto object-contain mix-blend-screen" />
            <p className="text-white/45 text-sm leading-relaxed text-start">
              {isRtl
                ? "تطبيق يوسّع حضور سوق الهدايا والورود بالسعودية، بكل مكان ومع عدة شركاء وآلاف المنتجات."
                : "An app expanding the gifts & flowers market across Saudi Arabia — everywhere, with many partners and thousands of products."}
            </p>
          </div>

          {/* Col 2 — Important links */}
          <div className="flex flex-col gap-3 items-start">
            <h4 className="text-white font-bold text-sm tracking-wide mb-1 text-start">
              {isRtl ? "روابط مهمة" : "Important Links"}
            </h4>
            {[
              { ar: "سياسة الخصوصية",  en: "Privacy Policy",     href: "#privacy" },
              { ar: "الشروط والأحكام", en: "Terms & Conditions", href: "#terms"   },
              { ar: "من نحن",          en: "About Us",           href: "#about"   },
            ].map((l, i) => (
              <a key={i} href={l.href}
                className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors group">
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                {isRtl ? l.ar : l.en}
              </a>
            ))}
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col gap-3 items-start">
            <h4 className="text-white font-bold text-sm tracking-wide mb-1 text-start">
              {isRtl ? "تواصل معنا" : "Contact Us"}
            </h4>
            <a href="mailto:info@glorda.com"
              className="flex items-center gap-2.5 text-white/50 text-sm hover:text-white transition-colors group">
              <span className="w-7 h-7 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200 flex-shrink-0">
                <EmailIcon />
              </span>
              <span dir="ltr">info@glorda.com</span>
            </a>
            <a href="https://wa.me/966542400331" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white/50 text-sm hover:text-white transition-colors group">
              <span className="w-7 h-7 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-200 flex-shrink-0">
                <WhatsappIcon />
              </span>
              <span dir="ltr">+966 54 240 0331</span>
            </a>
          </div>

          {/* Col 4 — Social */}
          <div className="flex flex-col gap-3 items-start">
            <h4 className="text-white font-bold text-sm tracking-wide mb-1 text-start">
              {isRtl ? "تابعنا" : "Follow Us"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-white/55 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 5 — Download */}
          <div className="flex flex-col gap-3 items-start">
            <h4 className="text-white font-bold text-sm tracking-wide mb-1 text-start">
              {isRtl ? "حمّل التطبيق" : "Download App"}
            </h4>
            <p className="text-white/35 text-xs leading-relaxed text-start">
              {isRtl ? "متوفر على iOS وAndroid" : "Available on iOS & Android"}
            </p>
            <DownloadButton variant="outline-light" size="sm" isRtl={isRtl} />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/8 pt-6 flex items-center justify-center">
          <span className="text-white/30 text-xs">
            {isRtl ? "جميع الحقوق محفوظة © Glorda 2026" : "All rights reserved © Glorda 2026"}
          </span>
        </div>

      </div>
    </footer>
  );
}
