import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../components/FadeIn";

const products = [
  {
    id: "elite",
    category: "Private Mentoring",
    name: "Elite",
    tag: "POPULER",
    tagColor: "var(--cyan)",
    accentColor: "var(--cyan)",
    description: "Program mentoring intensif untuk trader yang ingin menguasai metode SMC dengan panduan langsung dari mentor.",
    features: [
      "Sesi 1-on-1 dengan mentor",
      "Akses materi eksklusif Elite",
      "Review chart & trade setup",
      "Feedback & koreksi strategi",
      "Akses grup komunitas Elite",
      "Live trading session",
      "Support via WhatsApp",
      "Sertifikat kelulusan",
    ],
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  },
  {
    id: "ultimate",
    category: "Private Mentoring",
    name: "Ultimate",
    tag: "PREMIUM",
    tagColor: "var(--gold)",
    accentColor: "var(--gold)",
    description: "Paket mentoring terlengkap untuk trader serius yang ingin mencapai konsistensi profit dan siap prop firm.",
    features: [
      "Semua fitur paket Elite",
      "Sesi mentoring tak terbatas",
      "Panduan Prop Firm challenge",
      "Psikologi trading mendalam",
      "Analisis news & fundamental",
      "Volume Profile & Order Flow",
      "Priority support 24/7",
      "Akses seumur hidup ke materi",
    ],
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  },
  {
    id: "all-in-one",
    category: "Trading Indicator",
    name: "SMCI All-in-One",
    tag: "POWERFUL",
    tagColor: "var(--cyan)",
    accentColor: "var(--cyan)",
    description: "Indicator lengkap mencakup 3 aspek utama SMC: Market Structure, Supply & Demand, dan Liquidity zones dalam satu tool.",
    features: [
      "Market Structure mapping otomatis",
      "Supply & Demand area marking",
      "Liquidity zone detection",
      "Multi-timeframe analysis",
      "Kompatibel TradingView",
      "Update otomatis",
      "Video panduan penggunaan",
      "Support teknis eksklusif",
    ],
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    id: "simple-entry",
    category: "Trading Indicator",
    name: "SMCI Simple Entry",
    tag: "SIMPEL",
    tagColor: "var(--gold)",
    accentColor: "var(--gold)",
    description: "Versi ringan yang menampilkan Market Structure dan area SnD terbaru, dengan setup trading SMC basic yang high probability.",
    features: [
      "Market Structure sederhana",
      "Area SnD terkini",
      "Setup SMC high probability",
      "Tampilan bersih tanpa noise",
      "Cocok untuk pemula",
      "Kompatibel TradingView",
      "Panduan setup trading",
      "Komunitas pengguna",
    ],
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>,
  },
  {
    id: "ebook",
    category: "Ebook",
    name: "SMCI Ebook",
    tag: "WAJIB BACA",
    tagColor: "var(--cyan)",
    accentColor: "var(--cyan)",
    description: "Panduan komprehensif metode Smart Money Concept dalam bahasa Indonesia, dari mindset dasar hingga setup trading advanced.",
    features: [
      "Teori Smart Money Concept",
      "Market structure & BOS/CHOCH",
      "Supply, Demand & FVG",
      "Liquidity & trap setup",
      "Manajemen risiko & psikologi",
      "Contoh setup trading nyata",
      "Bahasa Indonesia yang jelas",
      "Akses seumur hidup (PDF)",
    ],
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  },
];

const categories = ["Semua", "Private Mentoring", "Trading Indicator", "Ebook"];

export default function Products() {
  const [, navigate] = useLocation();
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered = activeCategory === "Semua" ? products : products.filter(p => p.category === activeCategory);

  return (
    <div style={{ paddingTop: 100, paddingBottom: 96, padding: "100px clamp(1.5rem,5vw,3.5rem) 96px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <FadeIn>
          <span className="tag" style={{ marginBottom: 20, display: "inline-block" }}>Produk Kami</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 20 }}>
            Tools & Program<br />
            <span className="gradient-text">untuk Trader SMC</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 520, marginBottom: 48 }}>
            Dari private mentoring hingga indicator eksklusif — semua yang kamu butuhkan untuk menguasai metode Smart Money Concept.
          </p>
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={0.1}>
          <div style={{ display: "flex", gap: 8, marginBottom: 56, flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "9px 20px",
                  borderRadius: 100,
                  border: `1px solid ${activeCategory === cat ? "var(--cyan)" : "var(--border-subtle)"}`,
                  background: activeCategory === cat ? "var(--cyan-dim)" : "transparent",
                  color: activeCategory === cat ? "var(--cyan)" : "var(--text-muted)",
                  fontFamily: "var(--font-display)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`glass glass-hover ${product.accentColor === "var(--gold)" ? "glass-gold" : ""}`}
                style={{ borderRadius: 22, padding: "32px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${product.accentColor} 0%, transparent 100%)` }} />

                {/* Category + tag */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>{product.category}</span>
                  <span style={{
                    fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em",
                    padding: "4px 10px", borderRadius: 100,
                    color: product.tagColor,
                    border: `1px solid ${product.tagColor === "var(--gold)" ? "rgba(240,180,41,0.3)" : "rgba(34,193,220,0.3)"}`,
                    background: product.tagColor === "var(--gold)" ? "rgba(240,180,41,0.08)" : "rgba(34,193,220,0.08)",
                  }}>
                    {product.tag}
                  </span>
                </div>

                {/* Icon + Name */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 16,
                    background: `rgba(${product.accentColor === "var(--gold)" ? "240,180,41" : "34,193,220"},0.1)`,
                    border: `1px solid rgba(${product.accentColor === "var(--gold)" ? "240,180,41" : "34,193,220"},0.2)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: product.accentColor, flexShrink: 0,
                  }}>
                    {product.icon}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, lineHeight: 1.2 }}>{product.name}</h3>
                </div>

                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--text-muted)", marginBottom: 24 }}>{product.description}</p>

                {/* Features */}
                <div style={{ flex: 1, marginBottom: 28 }}>
                  <div style={{ height: 1, background: "var(--border-subtle)", marginBottom: 20 }} />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 8px" }}>
                    {product.features.map(f => (
                      <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={product.accentColor} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12"/></svg>
                        <span style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => navigate("/contact")}
                  className={product.accentColor === "var(--gold)" ? "btn-outline" : "btn-primary"}
                  style={{ width: "100%", justifyContent: "center", ...(product.accentColor === "var(--gold)" ? { color: "var(--gold)", borderColor: "rgba(240,180,41,0.4)" } : {}) }}
                >
                  Tanya & Daftar
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <FadeIn delay={0.2} className="">
          <div className="glass" style={{ borderRadius: 22, padding: "40px 40px", marginTop: 64, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24, borderColor: "rgba(34,193,220,0.15)" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, marginBottom: 8 }}>Bingung pilih produk yang tepat?</h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)" }}>Konsultasikan kebutuhan kamu dengan tim kami — gratis, tanpa komitmen.</p>
            </div>
            <button onClick={() => navigate("/contact")} className="btn-primary" style={{ flexShrink: 0 }}>
              Konsultasi Gratis
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
