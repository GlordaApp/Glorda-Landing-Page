import { useI18n } from "@/lib/i18n";
import whiteLogo from "@assets/IMG_7564_1776480165426.png";
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
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.merchants"), href: "#merchants" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-primary/97 backdrop-blur-xl shadow-lg shadow-primary/20"
        : "bg-primary/80 backdrop-blur-md"
    } border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className={`flex items-center h-18 py-3 gap-6 ${isRtl ? "flex-row-reverse" : ""}`}>

          {/* Logo */}
          <a href="#home" className="flex-shrink-0 flex items-center">
            <img src={whiteLogo} alt="Glorda" className="h-9 w-auto object-contain" data-testid="navbar-logo" />
          </a>

          {/* Desktop Nav */}
          <div className={`hidden md:flex flex-1 items-center justify-between ${isRtl ? "flex-row-reverse" : ""}`}>
            <div className={`flex items-center gap-1 ${isRtl ? "flex-row-reverse" : ""}`}>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  className="text-white/80 hover:text-white font-medium text-sm transition-colors duration-200 px-3.5 py-2 rounded-xl hover:bg-white/10">
                  {link.label}
                </a>
              ))}
            </div>

            <div className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
              <button onClick={toggleLang}
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors border border-white/20 rounded-lg px-3 py-1.5 hover:bg-white/10"
                data-testid="lang-toggle">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                {language === "en" ? "AR" : "EN"}
              </button>

              <DownloadButton variant="light" size="sm" isRtl={isRtl} />
            </div>
          </div>

          {/* Mobile right side */}
          <div className={`flex md:hidden items-center gap-2 ${isRtl ? "" : "ms-auto"} ${isRtl ? "me-auto" : ""}`}>
            <button onClick={toggleLang}
              className="text-white/70 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors border border-white/20 rounded-lg px-2.5 py-1.5">
              {language === "en" ? "AR" : "EN"}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors" data-testid="mobile-menu-btn">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:"auto" }} exit={{ opacity:0, height:0 }}
            className="md:hidden bg-primary border-t border-white/10 overflow-hidden">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors ${isRtl ? "text-right" : ""}`}>
                  {link.label}
                </a>
              ))}
              <div className={`pt-3 flex gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                <DownloadButton variant="light" size="sm" isRtl={isRtl} className="w-full justify-center" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
