import { motion } from "framer-motion";
import { useLocation } from "wouter";
import FadeIn from "../components/FadeIn";

const stats = [
  { val: "2022", label: "Berdiri Sejak" },
  { val: "4+",   label: "Expert Mentor" },
  { val: "5",    label: "Produk Unggulan" },
  { val: "SMC",  label: "Metode Trading" },
];

const highlights = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    title: "Paket Mentoring",
    badge: "Elite & Ultimate",
    desc: "Elite: akses 4 mentor SMCI. Ultimate: 4 mentor SMCI + 1 mentor tamu eksklusif.",
    color: "var(--cyan)",
    href: "/products",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Mentoring Per Mentor",
    badge: "Pilih Spesialisasi",
    desc: "Mulai dari 1 mentor spesifik — Oscar, James, Wahyudi, atau Albert. Fleksibel.",
    color: "var(--gold)",
    href: "/products?tab=permentor",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: "Trading Indicators",
    badge: "All-in-One & Simple Entry",
    desc: "Indicator eksklusif SMCI untuk TradingView — Market Structure, S&D, Liquidity.",
    color: "var(--cyan)",
    href: "/products?tab=tools",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
    title: "SMCI Ebook",
    badge: "PDF · Seumur Hidup",
    desc: "Panduan lengkap SMC dalam Bahasa Indonesia — dari mindset dasar hingga advanced.",
    color: "var(--gold)",
    href: "/products?tab=tools",
  },
];

const mentorPreview = [
  { id: "oscar",   name: "Oscar",   role: "SMCI Strategy",              initial: "O", color: "var(--cyan)" },
  { id: "james",   name: "James",   role: "Volume Profile & Order Flow", initial: "J", color: "var(--gold)" },
  { id: "wahyudi", name: "Wahyudi", role: "Psikologi & Propfirm",        initial: "W", color: "var(--cyan)" },
  { id: "albert",  name: "Albert",  role: "News & Fundamental",          initial: "A", color: "var(--gold)" },
];

const tickerItems = [
  { label: "Market Structure", icon: "📊" },
  { label: "Supply & Demand",  icon: "⚡" },
  { label: "Liquidity Zones",  icon: "💡" },
  { label: "Order Flow",       icon: "🔄" },
  { label: "Risk Management",  icon: "🛡️" },
  { label: "Prop Firm Ready",  icon: "🏆" },
  { label: "BOS & CHOCH",      icon: "📈" },
  { label: "Smart Money",      icon: "💎" },
  { label: "Volume Profile",   icon: "📉" },
  { label: "News Trading",     icon: "📰" },
];

function rgb(color: string) { return color === "var(--cyan)" ? "0,201,177" : "240,180,41"; }

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px clamp(1.25rem,5vw,3.5rem) 64px", position: "relative", overflow: "hidden" }}>

        {/* Aurora wave ribbons — inside hero only */}
        <div className="aurora-canvas">
          <div className="aurora-dark aurora-d1" />
          <div className="aurora-dark aurora-d2" />
          <div className="aurora-wave aurora-w3" />
          <div className="aurora-wave aurora-w2" />
          <div className="aurora-wave aurora-w1" />
          <div className="aurora-wave aurora-w4" />
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", zIndex: 1 }}>
          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ display: "flex", gap: "clamp(20px,5vw,56px)", marginBottom: 48, borderBottom: "1px solid var(--border-subtle)", paddingBottom: 28, flexWrap: "wrap" }}>
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.5 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem,4vw,2.2rem)", fontWeight: 800, color: "var(--cyan)", lineHeight: 1.1 }}>{s.val}</div>
                <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tag */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
            <span className="tag" style={{ marginBottom: 20, display: "inline-block" }}>Smart Money Concept Indonesia</span>
          </motion.div>

          {/* H1 */}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,8vw,5.5rem)", fontWeight: 800, lineHeight: 1.03, letterSpacing: "-0.02em", marginBottom: 24 }}>
            <span style={{ display: "block" }}>Trading Lebih</span>
            <span className="gradient-text" style={{ display: "block" }}>Terarah &</span>
            <span style={{ display: "block" }}>Konsisten.</span>
          </motion.h1>

          {/* Desc */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}
            style={{ fontSize: "clamp(0.95rem,2vw,1.1rem)", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: 36, maxWidth: 540 }}>
            SMCI Community hadir sebagai ekosistem lengkap untuk trader Indonesia — dari private mentoring, indicator eksklusif, hingga komunitas aktif berbasis{" "}
            <strong style={{ color: "#fff", fontWeight: 500 }}>Smart Money Concept</strong>.
          </motion.p>

          {/* CTA buttons */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
            <button onClick={() => navigate("/products")} className="btn-primary">
              Lihat Produk
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button onClick={() => navigate("/mentors")} className="btn-outline">Kenali Mentor</button>
          </motion.div>

          {/* ── TICKER — constrained to content width ── */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.8 }}>
            {/* Label */}
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 14, opacity: 0.6 }}>
              Yang kami ajarkan
            </div>
            {/* Ticker strip */}
            <div className="ticker-wrapper" style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.09)", background: "rgba(255,255,255,0.04)", padding: "2px 0" }}>
              <div className="ticker-track">
                {[...tickerItems, ...tickerItems].map((item, i) => (
                  <div key={i} className="ticker-item">
                    <span style={{ fontSize: 15 }}>{item.icon}</span>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.72)" }}>{item.label}</span>
                    {/* Dot separator */}
                    <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(0,201,177,0.45)", display: "inline-block", marginLeft: 8, flexShrink: 0 }} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </section>

      {/* ── HIGHLIGHTS ── */}
      <section style={{ padding: "72px clamp(1.25rem,5vw,3.5rem)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Apa yang Kami Tawarkan</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, marginBottom: 14, letterSpacing: "-0.02em" }}>
              Ekosistem Lengkap<br />untuk Trader SMC
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 44, maxWidth: 480, lineHeight: 1.7 }}>
              Satu platform, semua yang kamu butuhkan untuk berkembang sebagai trader Smart Money Concept.
            </p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px,100%), 1fr))", gap: 16 }}>
            {highlights.map((h, i) => (
              <FadeIn key={h.title} delay={i * 0.07}>
                <div className="glass glass-hover" onClick={() => navigate(h.href)}
                  style={{ borderRadius: 18, padding: "24px 20px", height: "100%", position: "relative", overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "column" }}>
                  <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${h.color} 0%, transparent 100%)` }} />

                  {/* Badge — full width row on top */}
                  <div style={{ marginBottom: 16 }}>
                    <span style={{
                      display: "inline-block",
                      fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em",
                      padding: "4px 12px", borderRadius: 100,
                      color: h.color,
                      border: `1px solid rgba(${rgb(h.color)},0.35)`,
                      background: `rgba(${rgb(h.color)},0.1)`,
                      whiteSpace: "nowrap",
                    }}>
                      {h.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `rgba(${rgb(h.color)},0.12)`, border: `1px solid rgba(${rgb(h.color)},0.22)`, display: "flex", alignItems: "center", justifyContent: "center", color: h.color, marginBottom: 16 }}>
                    {h.icon}
                  </div>

                  {/* Title + desc */}
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 700, marginBottom: 8 }}>{h.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--text-muted)", flex: 1 }}>{h.desc}</p>

                  {/* Link */}
                  <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 5, color: h.color, fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-display)" }}>
                    Selengkapnya <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── MENTOR PREVIEW ── */}
      <section style={{ padding: "72px clamp(1.25rem,5vw,3.5rem)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Tim Mentor</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, marginBottom: 14, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Belajar dari<br /><span className="gradient-text">Para Ahlinya</span>
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 28, maxWidth: 500 }}>
              4 mentor dengan spesialisasi berbeda. Pilih paket lengkap atau mulai dari 1 mentor spesifik.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
              <button onClick={() => navigate("/mentors")} className="btn-primary">Lihat Semua Mentor</button>
              <button onClick={() => { window.scrollTo({ top: 0 }); navigate("/products?tab=permentor"); }} className="btn-outline">Pilih Per Mentor</button>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(200px,calc(50% - 8px)), 1fr))", gap: 12 }}>
            {mentorPreview.map((m) => (
              <FadeIn key={m.name}>
                <div className="glass glass-hover" style={{ borderRadius: 16, padding: "20px 18px", position: "relative", overflow: "hidden", cursor: "pointer" }}
                  onClick={() => { navigate(`/products?tab=permentor&mentor=${m.id}`); }}>
                  <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${m.color} 0%, transparent 100%)` }} />
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: `rgba(${rgb(m.color)},0.15)`, border: `1px solid rgba(${rgb(m.color)},0.3)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, color: m.color, marginBottom: 12 }}>
                    {m.initial}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, marginBottom: 4 }}>{m.name}</div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: 10 }}>{m.role}</div>
                  <div style={{ fontSize: "12px", color: m.color, fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                    Pilih <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── CTA ── */}
      <section style={{ padding: "80px clamp(1.25rem,5vw,3.5rem)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "min(500px,90vw)", height: 320, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(0,201,177,0.1) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <FadeIn>
          <div style={{ maxWidth: 560, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <span className="tag" style={{ marginBottom: 20, display: "inline-block" }}>Mulai Perjalanan Kamu</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.08, marginBottom: 18 }}>
              Siap Menjadi Trader<br /><span className="gradient-text">Smart Money?</span>
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 36 }}>
              Bergabung dengan komunitas SMCI dan mulai perjalanan trading kamu dengan metode yang teruji dan mentor yang berpengalaman.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => navigate("/products")} className="btn-primary">Lihat Semua Produk</button>
              <button onClick={() => navigate("/contact")} className="btn-outline">Hubungi Kami</button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
