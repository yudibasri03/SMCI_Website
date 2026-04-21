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

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
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
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
