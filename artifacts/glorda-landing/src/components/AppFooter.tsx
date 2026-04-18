import { useI18n } from "@/lib/i18n";
import { FaInstagram, FaTiktok, FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaInstagram size={22} />, label: "Instagram", href: "https://www.instagram.com/glordaapp?igsh=MWZ3bzZnNHE0YXI1Mw%3D%3D&utm_source=qr" },
  { icon: <FaTiktok size={22} />, label: "TikTok", href: "https://www.tiktok.com/@glordaapp?_r=1&_t=ZS-94QLc5WevTA" },
  { icon: <FaFacebook size={22} />, label: "Facebook", href: "https://www.facebook.com/share/1FrLJcr7Xf/?mibextid=wwXIfr" },
  { icon: <FaXTwitter size={22} />, label: "X", href: "https://x.com/glordaapp?s=21" },
  { icon: <FaLinkedin size={22} />, label: "LinkedIn", href: "https://www.linkedin.com/company/glorda/" },
  { icon: <FaPinterest size={22} />, label: "Pinterest", href: "https://pin.it/26k3hxXWj" },
];

export function AppFooter() {
  const { isRtl } = useI18n();

  const links = isRtl
    ? [
        { label: "الأسئلة الشائعة", href: "/faq"     },
        { label: "تواصل معنا",      href: "/#contact" },
        { label: "من نحن",          href: "/about"    },
        { label: "سياسة الخصوصية", href: "/privacy"  },
        { label: "الشروط والأحكام", href: "/terms"    },
        { label: "الدعم",           href: "/support"  },
      ]
    : [
        { label: "FAQ",                href: "/faq"     },
        { label: "Contact Us",         href: "/#contact"},
        { label: "About Us",           href: "/about"   },
        { label: "Privacy Policy",     href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms"   },
        { label: "Support",            href: "/support" },
      ];

  return (
    <footer className="bg-[#f7f7f7] pt-12 pb-8 border-t border-gray-200">
      <div className="max-w-lg mx-auto px-6">

        {/* Links */}
        <nav className="space-y-4 mb-10">
          {links.map((l, i) => (
            <a key={i} href={l.href}
              className="flex items-center gap-3 justify-end group">
              <span className="text-gray-700 text-base font-medium group-hover:text-primary transition-colors">
                {l.label}
              </span>
              <span className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0 group-hover:bg-primary transition-colors" />
            </a>
          ))}
        </nav>

        <div className="border-t border-gray-200 mb-8" />

        {/* Social icons */}
        <div className="flex items-center justify-center gap-6">
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="text-gray-400 hover:text-primary transition-colors duration-200">
              {s.icon}
            </a>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-8">
          {isRtl ? "جميع الحقوق محفوظة © Glorda 2026" : "All rights reserved © Glorda 2026"}
        </p>
      </div>
    </footer>
  );
}
