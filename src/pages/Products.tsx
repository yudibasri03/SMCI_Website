import { useState, useEffect } from "react";
import { useLocation, useSearch } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../components/FadeIn";

// ── DATA ──────────────────────────────────────────────────────────────────────

const mentorProducts = [
  {
    id: "oscar",
    initial: "O",
    name: "Oscar",
    role: "SMCI Strategy",
    specialty: "Core SMC Method",
    color: "var(--cyan)",
    description:
      "Kuasai fondasi Smart Money Concept langsung dari mentor utama SMCI. Cocok untuk trader yang ingin membangun sistem trading yang simpel, terarah, dan konsisten.",
    topics: [
      "SMCI Core Strategy",
      "Market Structure & BOS/CHOCH",
      "High Probability Entry",
      "Supply & Demand Setup",
      "Risk Management Framework",
      "Trade Management",
    ],
    suitable: "Semua level trader",
  },
  {
    id: "james",
    initial: "J",
    name: "James",
    role: "Volume Profile & Order Flow",
    specialty: "Institutional Analysis",
    color: "var(--gold)",
    description:
      "Pahami pergerakan institusi lewat Volume Profile dan Order Flow. Mentoring ini memberi kamu edge lebih dalam membaca 'siapa' yang menggerakkan pasar.",
    topics: [
      "Volume Profile (VPVR, VWAP)",
      "Order Flow & Delta",
      "Point of Control (POC)",
      "Institutional Footprint",
      "High Volume Node Analysis",
      "DOM & Tape Reading",
    ],
    suitable: "Trader intermediate – advanced",
  },
  {
    id: "wahyudi",
    initial: "W",
    name: "Wahyudi",
    role: "Psikologi & Propfirm",
    specialty: "Mindset & Prop Firm",
    color: "var(--cyan)",
    description:
      "Atasi hambatan mental dan siapkan diri untuk Prop Firm challenge. Wahyudi membantu kamu membangun disiplin, konsistensi, dan ketahanan emosional dalam trading.",
    topics: [
      "Trading Psychology",
      "Emotional Discipline",
      "Prop Firm Strategy & Rules",
      "Drawdown Recovery",
      "Consistency Building",
      "Mindset Reprogramming",
    ],
    suitable: "Semua level, fokus Prop Firm",
  },
  {
    id: "albert",
    initial: "A",
    name: "Albert",
    role: "News & Fundamental",
    specialty: "Macro & Sentiment",
    color: "var(--gold)",
    description:
      "Integrasikan analisis fundamental dan news ke dalam strategi SMC kamu. Albert mengajarkan cara membaca sentimen pasar dan memanfaatkan momen high-impact news.",
    topics: [
      "Fundamental Analysis",
      "High-Impact News Trading",
      "Central Bank Policy",
      "COT Report Reading",
      "Economic Calendar",
      "Macro-Micro Correlation",
    ],
    suitable: "Trader yang ingin edge fundamental",
  },
];

const packageProducts = [
  {
    id: "elite",
    name: "Elite",
    tag: "POPULER",
    tagColor: "var(--cyan)",
    accentColor: "var(--cyan)",
    description:
      "Akses ke semua 4 mentor SMCI dengan sesi terjadwal. Kuasai SMC Strategy, Volume Profile, Psikologi, dan Fundamental secara menyeluruh.",
    mentors: ["Oscar", "James", "Wahyudi", "Albert"],
    guestMentor: false,
    features: [
      "Akses 4 mentor SMCI",
      "Sesi 1-on-1 terjadwal",
      "Akses materi eksklusif Elite",
      "Review chart & trade setup",
      "Feedback & koreksi strategi",
      "Akses grup komunitas Elite",
      "Support via WhatsApp",
      "Sertifikat kelulusan",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "ultimate",
    name: "Ultimate",
    tag: "TERLENGKAP",
    tagColor: "var(--gold)",
    accentColor: "var(--gold)",
    description:
      "Semua keunggulan Elite ditambah akses ke 1 mentor tamu eksklusif. Untuk trader serius yang ingin perspektif lebih luas dan siap Prop Firm.",
    mentors: ["Oscar", "James", "Wahyudi", "Albert"],
    guestMentor: true,
    features: [
      "Akses 4 mentor SMCI",
      "Akses 1 mentor tamu eksklusif",
      "Sesi mentoring tak terbatas",
      "Panduan Prop Firm challenge",
      "Volume Profile & Order Flow",
      "Psikologi trading mendalam",
      "Priority support 24/7",
      "Akses seumur hidup ke materi",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const toolProducts = [
  {
    id: "all-in-one",
    category: "Trading Indicator",
    name: "SMCI All-in-One",
    tag: "POWERFUL",
    tagColor: "var(--cyan)",
    accentColor: "var(--cyan)",
    description: "Indicator lengkap mencakup Market Structure, Supply & Demand, dan Liquidity dalam satu tool terintegrasi.",
    features: [
      "Market Structure otomatis",
      "Supply & Demand marking",
      "Liquidity zone detection",
      "Multi-timeframe analysis",
      "TradingView compatible",
      "Auto-update",
      "Video panduan",
      "Support teknis eksklusif",
    ],
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    id: "simple-entry",
    category: "Trading Indicator",
    name: "SMCI Simple Entry",
    tag: "SIMPEL",
    tagColor: "var(--gold)",
    accentColor: "var(--gold)",
    description: "Versi ringan tanpa noise — menampilkan Market Structure dan area SnD terkini dengan setup SMC high probability.",
    features: [
      "Market Structure sederhana",
      "Area SnD terkini",
      "Setup high probability",
      "Tampilan bersih",
      "Cocok untuk pemula",
      "TradingView compatible",
      "Panduan setup trading",
      "Komunitas pengguna",
    ],
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>,
  },
  {
    id: "ebook",
    category: "Ebook",
    name: "SMCI Ebook",
    tag: "WAJIB BACA",
    tagColor: "var(--cyan)",
    accentColor: "var(--cyan)",
    description: "Panduan komprehensif metode SMC dalam bahasa Indonesia — dari mindset dasar hingga setup trading advanced.",
    features: [
      "Teori Smart Money Concept",
      "Market Structure & BOS/CHOCH",
      "Supply, Demand & FVG",
      "Liquidity & trap setup",
      "Manajemen risiko",
      "Contoh setup nyata",
      "Bahasa Indonesia",
      "Akses seumur hidup (PDF)",
    ],
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  },
];

const tabs = ["Paket Mentoring", "Per Mentor", "Indicator & Ebook"];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

function isGold(color: string) { return color === "var(--gold)"; }
function rgb(color: string) { return isGold(color) ? "240,180,41" : "0,201,177"; }

export default function Products() {
  const [, navigate] = useLocation();
  const search = useSearch();
  const params = new URLSearchParams(search);

  const initialTab = params.get("tab") === "permentor" ? 1
    : params.get("tab") === "tools" ? 2 : 0;
  const initialMentor = params.get("mentor") ?? null;

  const [activeTab, setActiveTab] = useState(initialTab);
  const [selectedMentor, setSelectedMentor] = useState<string | null>(initialMentor);

  // Sync when URL changes (e.g. navigating from Home)
  useEffect(() => {
    const p = new URLSearchParams(search);
    const t = p.get("tab") === "permentor" ? 1 : p.get("tab") === "tools" ? 2 : 0;
    const m = p.get("mentor") ?? null;
    setActiveTab(t);
    setSelectedMentor(m);

    if (m) {
      // Scroll to the tab area (showing mentor grid + detail), with offset for navbar
      setTimeout(() => {
        const el = document.getElementById("products-tabs");
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 96;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [search]);

  const selected = mentorProducts.find((m) => m.id === selectedMentor);

  return (
    <div style={{ padding: "100px clamp(1.5rem,5vw,3.5rem) 96px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* ── HEADER ── */}
        <FadeIn>
          <span className="tag" style={{ marginBottom: 20, display: "inline-block" }}>Produk Kami</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 20 }}>
            Tools & Program<br />
            <span className="gradient-text">untuk Trader SMC</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 520, marginBottom: 48 }}>
            Pilih paket mentoring lengkap, belajar per mentor spesifik, atau lengkapi setup tradingmu dengan indicator & ebook eksklusif SMCI.
          </p>
        </FadeIn>

        {/* ── TABS ── */}
        <FadeIn delay={0.1}>
          <div id="products-tabs" style={{ display: "flex", gap: 8, marginBottom: 56, flexWrap: "wrap" }}>
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(i); setSelectedMentor(null); }}
                style={{
                  padding: "10px 22px",
                  borderRadius: 100,
                  border: `1px solid ${activeTab === i ? "var(--cyan)" : "var(--border-subtle)"}`,
                  background: activeTab === i ? "var(--cyan-dim)" : "transparent",
                  color: activeTab === i ? "var(--cyan)" : "var(--text-muted)",
                  fontFamily: "var(--font-display)",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* ── TAB CONTENT ── */}
        <AnimatePresence mode="wait">

          {/* ── TAB 0: PAKET MENTORING ── */}
          {activeTab === 0 && (
            <motion.div key="packages" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
              <div className="glass" style={{ borderRadius: 16, padding: "16px 22px", marginBottom: 36, display: "flex", alignItems: "center", gap: 14, borderColor: "rgba(0,201,177,0.15)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                  <strong style={{ color: "#fff" }}>Elite</strong> — akses 4 mentor SMCI dengan sesi terjadwal.&nbsp;&nbsp;
                  <strong style={{ color: "#fff" }}>Ultimate</strong> — semua dari Elite + 1 mentor tamu eksklusif &amp; sesi tak terbatas.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
                {packageProducts.map((product, i) => (
                  <motion.div key={product.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.55 }}
                    className="glass glass-hover" style={{ borderRadius: 22, padding: "36px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderColor: isGold(product.accentColor) ? "rgba(240,180,41,0.15)" : "rgba(255,255,255,0.1)" }}>
                    <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${product.accentColor} 0%, transparent 100%)` }} />

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                      <div style={{ width: 56, height: 56, borderRadius: 16, background: `rgba(${rgb(product.accentColor)},0.1)`, border: `1px solid rgba(${rgb(product.accentColor)},0.2)`, display: "flex", alignItems: "center", justifyContent: "center", color: product.accentColor }}>
                        {product.icon}
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", padding: "5px 14px", borderRadius: 100, color: product.tagColor, border: `1px solid rgba(${rgb(product.tagColor)},0.35)`, background: `rgba(${rgb(product.tagColor)},0.08)` }}>
                        {product.tag}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 800, marginBottom: 12 }}>{product.name}</h3>
                    <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: 20 }}>{product.description}</p>

                    {/* Mentor chips — show for both Elite and Ultimate */}
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                      {product.mentors.map(n => (
                        <span key={n} style={{ fontSize: "12px", padding: "4px 12px", borderRadius: 8, background: `rgba(${rgb(product.accentColor)},0.08)`, border: `1px solid rgba(${rgb(product.accentColor)},0.2)`, color: product.accentColor, fontWeight: 600 }}>{n}</span>
                      ))}
                      {product.guestMentor && (
                        <span style={{ fontSize: "12px", padding: "4px 12px", borderRadius: 8, background: "rgba(240,180,41,0.1)", border: "1px solid rgba(240,180,41,0.35)", color: "var(--gold)", fontWeight: 700 }}>
                          + 1 Mentor Tamu ✦
                        </span>
                      )}
                    </div>

                    <div style={{ height: 1, background: "var(--border-subtle)", marginBottom: 20 }} />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "11px 8px", flex: 1, marginBottom: 32 }}>
                      {product.features.map(f => (
                        <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={product.accentColor} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12"/></svg>
                          <span style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.5 }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => navigate("/contact")} className="btn-primary"
                      style={{ width: "100%", justifyContent: "center", ...(isGold(product.accentColor) ? { background: "transparent", color: "var(--gold)", border: "1px solid rgba(240,180,41,0.4)" } : {}) }}>
                      Tanya & Daftar
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── TAB 1: PER MENTOR ── */}
          {activeTab === 1 && (
            <motion.div id="mentor-section" key="permentor" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
              <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 32, lineHeight: 1.75, maxWidth: 600 }}>
                Pilih mentor sesuai bidang yang ingin kamu dalami. Setiap mentor punya spesialisasi berbeda — bisa mulai dari satu, atau kombinasikan beberapa sesuai kebutuhanmu.
              </p>

              {/* Mentor selector grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16, marginBottom: 36 }}>
                {mentorProducts.map((m, i) => (
                  <motion.button key={m.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07, duration: 0.45 }}
                    onClick={() => {
                      const next = selectedMentor === m.id ? null : m.id;
                      setSelectedMentor(next);
                      if (next) {
                        setTimeout(() => {
                          const el = document.getElementById("mentor-detail");
                          if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
                        }, 150);
                      }
                    }}
                    style={{
                      background: selectedMentor === m.id ? `rgba(${rgb(m.color)},0.1)` : "rgba(255,255,255,0.08)",
                      border: `1.5px solid ${selectedMentor === m.id ? m.color : "rgba(255,255,255,0.1)"}`,
                      borderRadius: 18, padding: "22px",
                      cursor: "pointer", textAlign: "left", transition: "all 0.25s",
                      position: "relative", overflow: "hidden",
                    }}
                  >
                    {selectedMentor === m.id && <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${m.color} 0%, transparent 100%)` }} />}
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                      <div style={{ width: 52, height: 52, borderRadius: "50%", background: `rgba(${rgb(m.color)},0.12)`, border: `1.5px solid rgba(${rgb(m.color)},0.35)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, color: m.color, flexShrink: 0 }}>
                        {m.initial}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 700, color: "#fff" }}>{m.name}</div>
                        <div style={{ fontSize: "12px", color: m.color, fontWeight: 600, marginTop: 2 }}>{m.specialty}</div>
                      </div>
                      {selectedMentor === m.id && (
                        <div style={{ width: 22, height: 22, borderRadius: "50%", background: m.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#003D38" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                      )}
                    </div>
                    <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.6 }}>{m.role}</p>
                  </motion.button>
                ))}
              </div>

              {/* Detail panel */}
              <AnimatePresence>
                {selected && (
                  <motion.div id="mentor-detail" key={selected.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="glass" style={{ borderRadius: 22, padding: "36px", borderColor: `rgba(${rgb(selected.color)},0.25)`, position: "relative", overflow: "hidden" }}>
                    <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${selected.color} 0%, transparent 60%)` }} />

                    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "start" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
                          <div style={{ width: 64, height: 64, borderRadius: "50%", background: `rgba(${rgb(selected.color)},0.12)`, border: `2px solid rgba(${rgb(selected.color)},0.35)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 28, color: selected.color }}>
                            {selected.initial}
                          </div>
                          <div>
                            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 800, marginBottom: 4 }}>Mentoring dengan {selected.name}</h3>
                            <span style={{ fontSize: "13px", color: selected.color, fontWeight: 600 }}>{selected.role}</span>
                          </div>
                        </div>

                        <p style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: 28 }}>{selected.description}</p>

                        <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>Yang akan dipelajari</p>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 20px", marginBottom: 28 }}>
                          {selected.topics.map(t => (
                            <div key={t} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={selected.color} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                              <span style={{ fontSize: "14px", color: "var(--text-muted)" }}>{t}</span>
                            </div>
                          ))}
                        </div>

                        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 18px", borderRadius: 12, background: `rgba(${rgb(selected.color)},0.07)`, border: `1px solid rgba(${rgb(selected.color)},0.15)` }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={selected.color} strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                          <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>Cocok untuk: <strong style={{ color: "#fff" }}>{selected.suitable}</strong></span>
                        </div>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 180 }}>
                        <button onClick={() => navigate("/contact")} className="btn-primary" style={{ justifyContent: "center" }}>
                          Daftar Sekarang
                        </button>
                        <button onClick={() => navigate("/mentors")} className="btn-outline" style={{ justifyContent: "center" }}>
                          Lihat Profil
                        </button>
                        <div style={{ height: 1, background: "var(--border-subtle)", margin: "4px 0" }} />
                        <p style={{ fontSize: "12px", color: "var(--text-muted)", textAlign: "center", lineHeight: 1.6 }}>
                          Bisa dikombinasikan<br />dengan mentor lain
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!selectedMentor && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "32px", color: "var(--text-muted)", fontSize: 14 }}>
                  ↑ Pilih salah satu mentor di atas untuk melihat detail program
                </motion.p>
              )}
            </motion.div>
          )}

          {/* ── TAB 2: INDICATOR & EBOOK ── */}
          {activeTab === 2 && (
            <motion.div key="tools" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
                {toolProducts.map((product, i) => (
                  <motion.div key={product.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.55 }}
                    className="glass glass-hover" style={{ borderRadius: 22, padding: "32px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderColor: isGold(product.accentColor) ? "rgba(240,180,41,0.15)" : "rgba(255,255,255,0.1)" }}>
                    <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${product.accentColor} 0%, transparent 100%)` }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                      <div style={{ width: 52, height: 52, borderRadius: 16, background: `rgba(${rgb(product.accentColor)},0.1)`, border: `1px solid rgba(${rgb(product.accentColor)},0.2)`, display: "flex", alignItems: "center", justifyContent: "center", color: product.accentColor }}>
                        {product.icon}
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", padding: "5px 12px", borderRadius: 100, color: product.tagColor, border: `1px solid rgba(${rgb(product.tagColor)},0.3)`, background: `rgba(${rgb(product.tagColor)},0.08)` }}>
                        {product.tag}
                      </span>
                    </div>
                    <span style={{ fontSize: "13px", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8, fontWeight: 500 }}>{product.category}</span>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, marginBottom: 12 }}>{product.name}</h3>
                    <p style={{ fontSize: "14px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: 22 }}>{product.description}</p>
                    <div style={{ height: 1, background: "var(--border-subtle)", marginBottom: 20 }} />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 8px", flex: 1, marginBottom: 28 }}>
                      {product.features.map(f => (
                        <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={product.accentColor} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12"/></svg>
                          <span style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.5 }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => navigate("/contact")} className="btn-primary"
                      style={{ width: "100%", justifyContent: "center", ...(isGold(product.accentColor) ? { background: "transparent", color: "var(--gold)", border: "1px solid rgba(240,180,41,0.4)" } : {}) }}>
                      Tanya & Dapatkan
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── BOTTOM CTA ── */}
        <FadeIn delay={0.2}>
          <div className="glass" style={{ borderRadius: 22, padding: "36px 40px", marginTop: 64, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24, borderColor: "rgba(0,201,177,0.15)" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, marginBottom: 8 }}>Bingung pilih produk yang tepat?</h3>
              <p style={{ fontSize: "15px", color: "var(--text-muted)" }}>Konsultasikan kebutuhan kamu dengan tim kami — gratis, tanpa komitmen.</p>
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
