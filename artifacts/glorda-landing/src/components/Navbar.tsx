import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import whiteLogo from "@assets/IMG_7564_1776480165426.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { language, setLanguage, t, isRtl } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const navLinks = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.merchants"), href: "#merchants" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home">
              <img src={whiteLogo} alt="Glorda" className="h-10 w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white font-medium text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4 border-s border-white/20 ps-4">
              <button
                onClick={toggleLang}
                className="text-white/90 hover:text-white font-bold text-sm tracking-wide uppercase transition-colors"
                aria-label="Toggle Language"
              >
                {language === "en" ? "العربية" : "EN"}
              </button>
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold rounded-full px-6">
                {t("nav.contact")}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleLang}
              className="text-white/90 hover:text-white font-bold text-sm tracking-wide uppercase transition-colors"
            >
              {language === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold rounded-full">
                  {t("nav.contact")}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}