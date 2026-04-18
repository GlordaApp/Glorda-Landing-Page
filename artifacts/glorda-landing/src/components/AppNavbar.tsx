import { useI18n } from "@/lib/i18n";
import glordaIconCrimson from "@assets/glorda_icon_crimson.webp";
import { useState } from "react";

export function AppNavbar() {
  const { language, setLanguage, isRtl } = useI18n();
  const [open, setOpen] = useState(false);
  const toggleLang = () => setLanguage(language === "en" ? "ar" : "en");

  const links = isRtl
    ? [
        { label: "الرئيسية",         href: "/"        },
        { label: "من نحن",           href: "/about"   },
        { label: "سياسة الخصوصية",  href: "/privacy" },
        { label: "الشروط والأحكام",  href: "/terms"   },
      ]
    : [
        { label: "Home",             href: "/"        },
        { label: "About Us",         href: "/about"   },
        { label: "Privacy Policy",   href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms" },
      ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-3xl mx-auto px-5 flex items-center justify-between h-14">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={glordaIconCrimson} alt="Glorda" className="h-9 w-auto object-contain" />
        </a>

        {/* Lang toggle + menu */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-gray-500 hover:text-primary text-[11px] font-bold tracking-wider border border-gray-200 rounded-xl px-3 py-1.5 hover:bg-primary/5 hover:border-primary/30 transition-all"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
            </svg>
            {language === "ar" ? "EN" : "عربي"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-gray-500 hover:text-primary rounded-lg hover:bg-gray-100 transition-colors md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></> : <><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-5 pb-4">
          {links.map((l, i) => (
            <a key={i} href={l.href}
              className="block py-3 text-sm font-medium text-gray-700 hover:text-primary border-b border-gray-50 last:border-0 text-start">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
