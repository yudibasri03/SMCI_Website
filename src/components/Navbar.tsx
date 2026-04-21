import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/mentors", label: "Mentor" },
  { href: "/testimonials", label: "Testimoni" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
  const [location, navigate] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
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
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          padding: "0 clamp(1.5rem, 5vw, 3.5rem)",
          height: "72px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: scrolled ? "rgba(6,42,53,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(29,223,184,0.1)" : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo */}
        <button onClick={() => handleNav("/")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: 38, height: 38, borderRadius: "10px",
            background: "linear-gradient(135deg, rgba(34,193,220,0.2) 0%, rgba(34,193,220,0.05) 100%)",
            border: "1px solid rgba(34,193,220,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C1DC" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>SMCI</div>
            <div style={{ fontSize: "9px", letterSpacing: "0.2em", color: "var(--cyan)", fontWeight: 600 }}>COMMUNITY</div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "8px" }} className="hidden md:flex">
          {navLinks.map(({ href, label }) => {
            const active = location === href;
            return (
              <button
                key={href}
                onClick={() => handleNav(href)}
                style={{
                  background: active ? "rgba(34,193,220,0.1)" : "transparent",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  color: active ? "var(--cyan)" : "var(--text-muted)",
                  fontFamily: "var(--font-display)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)"; }}
              >
                {label}
              </button>
            );
          })}
          <button onClick={() => handleNav("/contact")} className="btn-primary" style={{ padding: "10px 24px", marginLeft: "8px" }}>
            Mulai Sekarang
          </button>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(p => !p)}
          style={{
            background: menuOpen ? "rgba(34,193,220,0.12)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${menuOpen ? "rgba(34,193,220,0.3)" : "rgba(255,255,255,0.08)"}`,
            borderRadius: "10px", width: 40, height: 40,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5,
            cursor: "pointer", transition: "all 0.2s",
          }}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: 18, height: 1.5, background: menuOpen ? "var(--cyan)" : "var(--text-muted)", transition: "all 0.3s", transform: menuOpen ? "translateY(3.25px) rotate(45deg)" : "none" }} />
          <span style={{ display: "block", width: 18, height: 1.5, background: menuOpen ? "var(--cyan)" : "var(--text-muted)", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 18, height: 1.5, background: menuOpen ? "var(--cyan)" : "var(--text-muted)", transition: "all 0.3s", transform: menuOpen ? "translateY(-5.25px) rotate(-45deg)" : "none" }} />
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed", inset: 0, zIndex: 40,
              background: "rgba(6,42,53,0.98)",
              backdropFilter: "blur(24px)",
              paddingTop: "72px",
              display: "flex", flexDirection: "column",
            }}
          >
            <div style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--cyan), transparent)" }} />
            <nav style={{ flex: 1, padding: "24px 24px 0", display: "flex", flexDirection: "column", gap: 4 }}>
              {navLinks.map(({ href, label }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(href)}
                  style={{
                    background: location === href ? "rgba(34,193,220,0.08)" : "transparent",
                    border: "none",
                    borderRadius: "14px",
                    padding: "18px 20px",
                    textAlign: "left", cursor: "pointer",
                    borderLeft: `3px solid ${location === href ? "var(--cyan)" : "transparent"}`,
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    transition: "all 0.2s",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, color: location === href ? "var(--cyan)" : "#fff" }}>
                    {label}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" opacity={0.5}>
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </motion.button>
              ))}
            </nav>
            <div style={{ padding: "24px" }}>
              <button onClick={() => handleNav("/contact")} className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px" }}>
                Mulai Sekarang
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
