import { useI18n } from "@/lib/i18n";
import glordaIcon from "@assets/glorda_icon_white.webp";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DownloadButton } from "@/components/DownloadButton";

export function Navbar() {
  const { language, setLanguage, t, isRtl } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleLang = () => setLanguage(language === "en" ? "ar" : "en");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t("nav.home"),      href: "#home"      },
    { label: t("nav.about"),     href: "#about"     },
    { label: t("nav.features"),  href: "#features"  },
    { label: t("nav.merchants"), href: "#merchants" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-primary/97 backdrop-blur-xl shadow-lg shadow-primary/20"
        : "bg-primary/80 backdrop-blur-md"
    } border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center h-18 py-3 gap-4">

          {/* Logo + Lang toggle — inline-start */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img
                src={glordaIcon}
                alt="Glorda"
                className="h-12 w-auto object-contain mix-blend-screen"
                data-testid="navbar-logo"
              />
            </a>
            <button
              onClick={toggleLang}
              className="hidden md:flex items-center gap-2 text-white/85 hover:text-white text-[11px] font-bold tracking-wider transition-all duration-200 border border-white/25 rounded-xl px-3.5 py-2 hover:bg-white/15 hover:border-white/40 bg-white/5"
              data-testid="lang-toggle"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
              </svg>
              {language === "ar" ? "EN" : "عربي"}
            </button>
          </div>

          {/* Nav links — centre */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="text-white/80 hover:text-white font-medium text-sm transition-colors duration-200 px-3.5 py-2 rounded-xl hover:bg-white/10">
                {link.label}
              </a>
            ))}
          </div>

          {/* Download — inline-end */}
          <div className="hidden md:block flex-shrink-0">
            <DownloadButton variant="light" size="sm" isRtl={isRtl} />
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2 ms-auto">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-white/85 text-[11px] font-bold tracking-wider border border-white/25 rounded-xl px-3 py-1.5 hover:bg-white/15 bg-white/5 transition-all"
              data-testid="lang-toggle"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
              </svg>
              {language === "ar" ? "EN" : "عربي"}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              data-testid="mobile-menu-btn">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-white/10 overflow-hidden">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors text-start">
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <DownloadButton variant="light" size="sm" isRtl={isRtl} className="w-full justify-center" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
