import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/lib/i18n";
import { useEffect } from "react";
import appIcon from "@assets/glorda_icon_crimson.webp";

const Home       = lazy(() => import("@/pages/Home"));
const AboutPage  = lazy(() => import("@/pages/AboutPage"));
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"));
const TermsPage  = lazy(() => import("@/pages/TermsPage"));
const SupportPage = lazy(() => import("@/pages/SupportPage"));
const FaqPage    = lazy(() => import("@/pages/FaqPage"));
const NotFound   = lazy(() => import("@/pages/not-found"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60_000, retry: 1 },
  },
});

const PageShell = () => (
  <div className="min-h-screen bg-white animate-pulse-once" aria-hidden />
);

function Router() {
  return (
    <Suspense fallback={<PageShell />}>
      <Switch>
        <Route path="/"        component={Home}        />
        <Route path="/about"   component={AboutPage}   />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/terms"   component={TermsPage}   />
        <Route path="/support" component={SupportPage} />
        <Route path="/faq"     component={FaqPage}     />
        <Route                 component={NotFound}    />
      </Switch>
    </Suspense>
  );
}

function App() {
  useEffect(() => {
    const link = document.getElementById("dynamic-favicon") as HTMLLinkElement;
    if (link) {
      link.href = appIcon;
      link.type = "image/webp";
    }
    document.title = "غلوردا - Glorda | ورد هدايا شوكولاته كيك في السعودية";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
}

export default App;
