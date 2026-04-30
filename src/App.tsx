import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Mentors from "./pages/Mentors";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function RedirectExternal({ to }: { to: string }) {
  useEffect(() => { window.location.replace(to); }, []);
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
      <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>Mengalihkan...</p>
      <a href={to} style={{ color: "var(--cyan)", fontSize: "13px" }}>Klik di sini jika tidak dialihkan otomatis</a>
    </div>
  );
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    // Don't scroll to top if URL has mentor param — Products page handles its own scroll
    const hasMentor = window.location.search.includes("mentor=");
    if (!hasMentor) {
      window.scrollTo({ top: 0 });
    }
  }, [location]);
  return null;
}

export default function App() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <AnimatedBackground />
      <ScrollToTop />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/mentors" component={Mentors} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/prop-fundism">
            <RedirectExternal to="https://portal.fundism.com/register/trader?link_id=f87rkmv2&referrer_id=SMCI" />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
