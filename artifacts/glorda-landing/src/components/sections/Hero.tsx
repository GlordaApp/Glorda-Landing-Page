import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

export function Hero() {
  const { t, isRtl } = useI18n();

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary text-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`lg:w-1/2 text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'}`}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight mb-6"
            >
              {t("hero.title")}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              {t("hero.subtitle")}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`flex flex-col sm:flex-row items-center justify-center ${isRtl ? 'lg:justify-start' : 'lg:justify-start'} gap-4`}
            >
              <Button size="lg" className="w-full sm:w-auto h-14 bg-white text-primary hover:bg-white/90 rounded-2xl gap-3 text-base font-bold shadow-lg shadow-white/10 transition-transform hover:-translate-y-1">
                <FaApple className="text-2xl" />
                <div className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
                  <span className="text-[10px] leading-none text-primary/70 mb-1">{isRtl ? 'حمل من' : 'Download on the'}</span>
                  <span className="leading-none">App Store</span>
                </div>
              </Button>
              <Button size="lg" className="w-full sm:w-auto h-14 bg-black text-white hover:bg-black/90 rounded-2xl gap-3 text-base font-bold shadow-lg shadow-black/20 transition-transform hover:-translate-y-1">
                <FaGooglePlay className="text-xl" />
                <div className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
                  <span className="text-[10px] leading-none text-white/70 mb-1">{isRtl ? 'احصل عليه من' : 'GET IT ON'}</span>
                  <span className="leading-none">Google Play</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.4 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full max-w-sm mx-auto aspect-[1/2] perspective-[1000px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-white/10 rounded-[3rem] blur-2xl transform rotate-6 scale-95" />
              <div className="relative h-full w-full bg-white rounded-[2.5rem] p-2 shadow-2xl border-4 border-white/20 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 ease-out">
                {/* Phone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
                  <div className="w-32 h-6 bg-black rounded-b-3xl"></div>
                </div>
                {/* Screen content placeholder */}
                <div className="h-full w-full rounded-[2rem] overflow-hidden bg-background relative flex flex-col">
                  <div className="h-1/3 bg-primary/10 rounded-b-3xl p-6 flex flex-col justify-end">
                    <div className="w-2/3 h-6 bg-primary/20 rounded-md mb-2"></div>
                    <div className="w-1/2 h-4 bg-primary/10 rounded-md"></div>
                  </div>
                  <div className="flex-1 p-4 grid grid-cols-2 gap-4 auto-rows-max">
                    <div className="aspect-square bg-muted rounded-xl"></div>
                    <div className="aspect-square bg-muted rounded-xl"></div>
                    <div className="aspect-square bg-muted rounded-xl"></div>
                    <div className="aspect-square bg-muted rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}