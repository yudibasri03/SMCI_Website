import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/",             label: "Home" },
  { href: "/products",     label: "Products" },
  { href: "/mentors",      label: "Mentor" },
  { href: "/testimonials", label: "Testimoni" },
  { href: "/faq",          label: "FAQ" },
  { href: "/contact",      label: "Kontak" },
];

export default function Navbar() {
  const [location, navigate] = useLocation();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [isMobile,  setIsMobile]  = useState(window.innerWidth < 768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    navigate(href);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(10,22,48,0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.11)" : "1px solid transparent",
        transition: "all 0.35s ease",
        height: "68px",
        display: "flex", alignItems: "center",
      }}>
        {/* Inner container — same padding as hero content, no maxWidth so left edge is identical */}
        <div style={{ width: "100%", padding: "0 clamp(1.25rem,5vw,3.5rem)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <button onClick={() => handleNav("/")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: 0 }}>
          <img
            src="/logo-smci.png"
            alt="SMCI Community"
            style={{
              height: 44,
              width: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 0 10px rgba(0,201,177,0.6)) drop-shadow(0 0 24px rgba(0,201,177,0.3)) brightness(1.15)",
            }}
          />
        </button>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {navLinks.map(({ href, label }) => {
              const active = location === href;
              return (
                <button key={href} onClick={() => handleNav(href)} style={{
                  background: active ? "rgba(0,201,177,0.12)" : "transparent",
                  border: "none", borderRadius: "8px", padding: "8px 15px",
                  color: active ? "var(--cyan)" : "rgba(255,255,255,0.6)",
                  fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600,
                  cursor: "pointer", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { if (!active) (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
                  onMouseLeave={e => { if (!active) (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)"; }}>
                  {label}
                </button>
              );
            })}
            <button onClick={() => handleNav("/contact")} className="btn-primary" style={{ padding: "9px 22px", marginLeft: "8px", fontSize: "12px" }}>
              Mulai Sekarang
            </button>
          </nav>
        )}

        {/* Hamburger */}
        {isMobile && (
          <button onClick={() => setMenuOpen(p => !p)} aria-label="Toggle menu"
            style={{ background: menuOpen ? "rgba(0,201,177,0.14)" : "rgba(255,255,255,0.07)", border: `1px solid ${menuOpen ? "rgba(0,201,177,0.35)" : "rgba(255,255,255,0.12)"}`, borderRadius: "10px", width: 42, height: 42, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, cursor: "pointer", transition: "all 0.2s" }}>
            <span style={{ display: "block", width: 18, height: 1.5, background: menuOpen ? "var(--cyan)" : "rgba(255,255,255,0.7)", transition: "all 0.3s", transform: menuOpen ? "translateY(3.25px) rotate(45deg)" : "none" }} />
            <span style={{ display: "block", width: 18, height: 1.5, background: menuOpen ? "var(--cyan)" : "rgba(255,255,255,0.7)", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: 18, height: 1.5, background: menuOpen ? "var(--cyan)" : "rgba(255,255,255,0.7)", transition: "all 0.3s", transform: menuOpen ? "translateY(-5.25px) rotate(-45deg)" : "none" }} />
          </button>
        )}
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}
            style={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(10,20,42,0.97)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", paddingTop: "68px", display: "flex", flexDirection: "column" }}>
            <div style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--cyan), transparent)" }} />
            <nav style={{ flex: 1, padding: "20px clamp(1.25rem,5vw,2rem) 0", display: "flex", flexDirection: "column", gap: 3, overflowY: "auto" }}>
              {navLinks.map(({ href, label }, i) => (
                <motion.button key={href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
                  onClick={() => handleNav(href)}
                  style={{ background: location === href ? "rgba(0,201,177,0.1)" : "transparent", border: "none", borderRadius: "14px", padding: "17px 20px", textAlign: "left", cursor: "pointer", borderLeft: `3px solid ${location === href ? "var(--cyan)" : "transparent"}`, display: "flex", justifyContent: "space-between", alignItems: "center", transition: "all 0.18s" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, color: location === href ? "var(--cyan)" : "#fff" }}>{label}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={location === href ? "var(--cyan)" : "rgba(255,255,255,0.3)"} strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </motion.button>
              ))}
            </nav>
            <div style={{ padding: "20px clamp(1.25rem,5vw,2rem) 36px" }}>
              <button onClick={() => handleNav("/contact")} className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: "14px" }}>
                Mulai Sekarang
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
