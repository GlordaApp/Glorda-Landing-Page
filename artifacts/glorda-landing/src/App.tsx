import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { I18nProvider } from "@/lib/i18n";

const Home        = lazy(() => import("@/pages/Home"));
const AboutPage   = lazy(() => import("@/pages/AboutPage"));
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"));
const TermsPage   = lazy(() => import("@/pages/TermsPage"));
const SupportPage = lazy(() => import("@/pages/SupportPage"));
const FaqPage     = lazy(() => import("@/pages/FaqPage"));
const NotFound    = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
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
  return (
    <I18nProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </I18nProvider>
  );
}

export default App;
