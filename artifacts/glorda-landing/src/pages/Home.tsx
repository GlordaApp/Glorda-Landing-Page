import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Merchants } from "@/components/sections/Merchants";
import { AppScreenshots } from "@/components/sections/AppScreenshots";
import { Testimonials } from "@/components/sections/Testimonials";
import { Download } from "@/components/sections/Download";
import { Footer } from "@/components/sections/Footer";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { isRtl } = useI18n();

  return (
    <div className={`min-h-screen bg-background font-sans selection:bg-primary/20 ${isRtl ? 'rtl' : 'ltr'}`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <AppScreenshots />
        <Testimonials />
        <Merchants />
        <Download />
      </main>
      <Footer />
    </div>
  );
}