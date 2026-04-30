/**
 * Smart download button — detects iOS/Android and redirects to the right store.
 * Shows both store logos in one button.
 */

const DOWNLOAD_URL = "https://jmgyuw.short.gy/";

function handleDownload() {
  window.open(DOWNLOAD_URL, "_blank");
}

/* Real Apple logo SVG */
const AppleIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 814 1000" fill="currentColor">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.6-49 192.7-49 31.1 0 108.2 2.6 168.6 71.4zm-234.3-105.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.4 33.7-145.8 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 134.2-71.3z"/>
  </svg>
);

/* Real Google Play 4-color logo */
const GooglePlayIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.22 0c-.338.196-.22.72-.22.72v22.56s-.118.524.22.72l.103.09 12.543-12.543v-.306L1.323-.09 1.22 0z" fill="#32BBFF"/>
    <path d="M17.678 16.02l-3.91-3.912v-.306l3.91-3.91.092.052 4.63 2.63c1.32.748 1.32 1.974 0 2.724l-4.63 2.63-.092.092z" fill="#FFD400"/>
    <path d="M17.77 15.928L13.766 12 1.22 24.546c.437.463 1.155.52 1.965.058l14.585-8.676z" fill="#FF3333"/>
    <path d="M1.22-.546L13.766 12 17.77 8.072 3.185-.604C2.375-1.066 1.657-1.01 1.22-.546z" fill="#00C057"/>
  </svg>
);

type ButtonVariant = "light" | "dark" | "outline-light" | "primary";
type ButtonSize = "sm" | "md";

interface DownloadButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  labelAr?: string;
  labelEn?: string;
  isRtl?: boolean;
  className?: string;
}

export function DownloadButton({
  variant = "light",
  size = "md",
  labelAr = "حمّل التطبيق",
  labelEn = "Download App",
  isRtl = true,
  className = "",
}: DownloadButtonProps) {
  const iconSize = size === "sm" ? 15 : 17;

  const base =
    "inline-flex items-center gap-2.5 rounded-2xl font-bold transition-all duration-200 hover:-translate-y-0.5 cursor-pointer select-none border";

  const sizeClass =
    size === "sm"
      ? "px-3.5 py-2 text-xs"
      : "px-5 py-3 text-sm";

  const variantClass: Record<ButtonVariant, string> = {
    light: "bg-white text-primary border-white/20 shadow-md hover:bg-gray-50",
    dark: "bg-[#111] text-white border-white/10 hover:bg-[#222]",
    "outline-light": "bg-white/10 text-white border-white/20 hover:bg-white/20",
    primary: "bg-primary text-white border-primary shadow-md hover:bg-primary/90",
  };

  return (
    <button
      onClick={handleDownload}
      className={`${base} ${sizeClass} ${variantClass[variant]} ${className}`}
    >
      {/* Apple icon */}
      <AppleIcon size={iconSize} />

      {/* Divider */}
      <span className={`w-px h-4 ${variant === "light" ? "bg-gray-200" : "bg-white/20"}`} />

      {/* Google Play icon */}
      <GooglePlayIcon size={iconSize} />

      {/* Label */}
      <span className="ms-0.5">{isRtl ? labelAr : labelEn}</span>
    </button>
  );
}
