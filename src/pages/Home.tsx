import { motion } from "framer-motion";
import { useLocation } from "wouter";
import FadeIn from "../components/FadeIn";

const stats = [
  { val: "2022", label: "Berdiri Sejak" },
  { val: "4+", label: "Expert Mentor" },
  { val: "5", label: "Produk Unggulan" },
  { val: "SMC", label: "Metode Trading" },
];

const highlights = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: "Private Mentoring",
    desc: "Program mentoring intensif 1-on-1 dengan mentor berpengalaman. Pilih paket Elite atau Ultimate sesuai kebutuhan.",
    color: "var(--cyan)",
    href: "/products",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: "Trading Indicators",
    desc: "SMCI All-in-One dan SMCI Simple Entry — tools eksklusif untuk membantu analisis pasar dengan metode SMC.",
    color: "var(--gold)",
    href: "/products",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
    title: "SMCI Ebook",
    desc: "Panduan lengkap metode Smart Money Concept dari dasar hingga mahir. Dirancang untuk trader Indonesia.",
    color: "var(--cyan)",
    href: "/products",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Komunitas Aktif",
    desc: "Bergabung dengan ribuan trader di komunitas Telegram & Discord. Diskusi, analisis, dan belajar bersama.",
    color: "var(--gold)",
    href: "/contact",
  },
];

const mentorPreview = [
  { name: "Oscar", role: "SMCI Strategy", initial: "O" },
  { name: "James", role: "Volume Profile & Order Flow", initial: "J" },
  { name: "Wahyudi", role: "Psikologi & Propfirm", initial: "W" },
  { name: "Albert", role: "News & Fundamental", initial: "A" },
];

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px clamp(1.5rem,5vw,3.5rem) 80px", position: "relative" }}>
        {/* Hero glow */}
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(34,193,220,0.12) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", zIndex: 1 }}>
          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", gap: "clamp(24px, 4vw, 56px)", marginBottom: 56, borderBottom: "1px solid var(--border-subtle)", paddingBottom: 32, flexWrap: "wrap" }}
          >
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.5 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--cyan)", lineHeight: 1.1 }}>{s.val}</div>
                <div style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main content */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center" }}>
            <div style={{ maxWidth: 780 }}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
                <span className="tag" style={{ marginBottom: 24, display: "inline-block" }}>Smart Money Concept Indonesia</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 800, lineHeight: 1.03, letterSpacing: "-0.02em", marginBottom: 28 }}
              >
                <span style={{ display: "block", color: "#fff" }}>Trading Lebih</span>
                <span className="gradient-text" style={{ display: "block" }}>Terarah &</span>
                <span style={{ display: "block", color: "#fff" }}>Konsisten.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: 40, maxWidth: 560 }}
              >
                SMCI Community hadir sebagai ekosistem lengkap untuk trader Indonesia — dari private mentoring, indicator eksklusif, hingga komunitas aktif berbasis <strong style={{ color: "#fff", fontWeight: 500 }}>Smart Money Concept</strong>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}
              >
                <button onClick={() => navigate("/products")} className="btn-primary">
                  Lihat Produk
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button onClick={() => navigate("/mentors")} className="btn-outline">
                  Kenali Mentor
                </button>
              </motion.div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginTop: 80 }}
          >
            {[
              { label: "Market Structure", icon: "📊" },
              { label: "Supply & Demand", icon: "⚡" },
              { label: "Liquidity Zones", icon: "💡" },
              { label: "Order Flow", icon: "🔄" },
              { label: "Risk Management", icon: "🛡️" },
              { label: "Prop Firm Ready", icon: "🏆" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.06, duration: 0.5 }}
                className="glass glass-hover"
                style={{ borderRadius: 14, padding: "14px 16px", display: "flex", alignItems: "center", gap: 10 }}
              >
                <span style={{ fontSize: 16 }}>{item.icon}</span>
                <span style={{ fontSize: "12px", fontWeight: 500, color: "var(--text-muted)" }}>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section style={{ padding: "96px clamp(1.5rem,5vw,3.5rem)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <span className="tag" style={{ marginBottom: 20, display: "inline-block" }}>Apa yang Kami Tawarkan</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, marginBottom: 16, letterSpacing: "-0.02em" }}>
              Ekosistem Lengkap<br />untuk Trader SMC
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 56, maxWidth: 500, lineHeight: 1.7 }}>
              Satu platform, semua yang kamu butuhkan untuk berkembang sebagai trader Smart Money Concept.
            </p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {highlights.map((h, i) => (
              <FadeIn key={h.title} delay={i * 0.08}>
                <div
                  className="glass glass-hover"
                  style={{ borderRadius: 20, padding: "32px 28px", height: "100%", position: "relative", overflow: "hidden", cursor: "pointer" }}
                  onClick={() => navigate(h.href)}
                >
                  <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${h.color} 0%, transparent 100%)` }} />
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: `rgba(${h.color === "var(--cyan)" ? "34,193,220" : "240,180,41"},0.1)`, border: `1px solid rgba(${h.color === "var(--cyan)" ? "34,193,220" : "240,180,41"},0.2)`, display: "flex", alignItems: "center", justifyContent: "center", color: h.color, marginBottom: 20 }}>
                    {h.icon}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, marginBottom: 12 }}>{h.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--text-muted)" }}>{h.desc}</p>
                  <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 6, color: h.color, fontSize: "12px", fontWeight: 600, fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}>
                    Selengkapnya
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── MENTOR PREVIEW ── */}
      <section style={{ padding: "96px clamp(1.5rem,5vw,3.5rem)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <FadeIn direction="left">
              <span className="tag" style={{ marginBottom: 20, display: "inline-block" }}>Tim Mentor</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, marginBottom: 20, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Belajar dari<br />
                <span className="gradient-text">Para Ahlinya</span>
              </h2>
              <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 32 }}>
                4 mentor berpengalaman dengan spesialisasi berbeda, siap membimbing perjalanan trading kamu dari fundamental hingga mahir.
              </p>
              <button onClick={() => navigate("/mentors")} className="btn-primary">
                Lihat Semua Mentor
              </button>
            </FadeIn>

            <FadeIn direction="right">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {mentorPreview.map((m, i) => (
                  <div key={m.name} className="glass glass-hover" style={{ borderRadius: 18, padding: "24px 20px", position: "relative", overflow: "hidden" }}>
                    <div className="card-accent-top" />
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, rgba(34,193,220,0.2), rgba(34,193,220,0.05))", border: "1px solid rgba(34,193,220,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--cyan)", marginBottom: 14 }}>
                      {m.initial}
                    </div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, marginBottom: 4 }}>{m.name}</div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)", lineHeight: 1.5 }}>{m.role}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── CTA SECTION ── */}
      <section style={{ padding: "120px clamp(1.5rem,5vw,3.5rem)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(34,193,220,0.1) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <FadeIn>
          <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <span className="tag" style={{ marginBottom: 24, display: "inline-block" }}>Mulai Perjalanan Kamu</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.08, marginBottom: 20 }}>
              Siap Menjadi Trader<br />
              <span className="gradient-text">Smart Money?</span>
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 40 }}>
              Bergabung dengan komunitas SMCI dan mulai perjalanan trading kamu dengan metode yang teruji dan mentor yang berpengalaman.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => navigate("/products")} className="btn-primary">
                Lihat Semua Produk
              </button>
              <button onClick={() => navigate("/contact")} className="btn-outline">
                Hubungi Kami
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
