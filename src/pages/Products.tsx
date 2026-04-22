import { useState, useEffect } from "react";
import { useLocation, useSearch } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../components/FadeIn";

function isGold(c: string) { return c === "var(--gold)"; }
function rgb(c: string) { return isGold(c) ? "240,180,41" : "0,201,177"; }

const mentorProducts = [
  { id: "oscar",   initial: "O", name: "Oscar",   role: "SMCI Strategy",              specialty: "Core SMC Method",       color: "var(--cyan)",
    description: "Kuasai fondasi SMC langsung dari mentor utama SMCI. Cocok untuk trader yang ingin membangun sistem trading yang simpel, terarah, dan konsisten.",
    topics: ["SMCI Core Strategy","Market Structure & BOS/CHOCH","High Probability Entry","Supply & Demand Setup","Risk Management Framework","Trade Management"],
    suitable: "Semua level trader" },
  { id: "james",   initial: "J", name: "James",   role: "Volume Profile & Order Flow", specialty: "Institutional Analysis", color: "var(--gold)",
    description: "Pahami pergerakan institusi lewat Volume Profile dan Order Flow. Memberi edge lebih dalam membaca 'siapa' yang menggerakkan pasar.",
    topics: ["Volume Profile (VPVR, VWAP)","Order Flow & Delta","Point of Control (POC)","Institutional Footprint","High Volume Node Analysis","DOM & Tape Reading"],
    suitable: "Trader intermediate – advanced" },
  { id: "wahyudi", initial: "W", name: "Wahyudi", role: "Psikologi & Propfirm",        specialty: "Mindset & Prop Firm",   color: "var(--cyan)",
    description: "Atasi hambatan mental dan siapkan diri untuk Prop Firm challenge. Membangun disiplin, konsistensi, dan ketahanan emosional dalam trading.",
    topics: ["Trading Psychology","Emotional Discipline","Prop Firm Strategy & Rules","Drawdown Recovery","Consistency Building","Mindset Reprogramming"],
    suitable: "Semua level, fokus Prop Firm" },
  { id: "albert",  initial: "A", name: "Albert",  role: "News & Fundamental",          specialty: "Macro & Sentiment",     color: "var(--gold)",
    description: "Integrasikan analisis fundamental dan news ke dalam strategi SMC. Cara membaca sentimen pasar dan memanfaatkan momen high-impact news.",
    topics: ["Fundamental Analysis","High-Impact News Trading","Central Bank Policy","COT Report Reading","Economic Calendar","Macro-Micro Correlation"],
    suitable: "Trader yang ingin edge fundamental" },
];

const packageProducts = [
  { id: "elite",   name: "Elite",   tag: "POPULER",    tagColor: "var(--cyan)", accentColor: "var(--cyan)",
    description: "Akses ke semua 4 mentor SMCI dengan sesi terjadwal. Kuasai SMC secara menyeluruh.",
    mentors: ["Oscar","James","Wahyudi","Albert"], guestMentor: false,
    features: ["Akses 4 mentor SMCI","Sesi 1-on-1 terjadwal","Materi eksklusif Elite","Review chart & setup","Feedback strategi","Grup komunitas Elite","Support WhatsApp","Sertifikat kelulusan"],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
  { id: "ultimate", name: "Ultimate", tag: "TERLENGKAP", tagColor: "var(--gold)", accentColor: "var(--gold)",
    description: "Semua keunggulan Elite + akses 1 mentor tamu eksklusif. Untuk trader serius yang siap Prop Firm.",
    mentors: ["Oscar","James","Wahyudi","Albert"], guestMentor: true,
    features: ["Akses 4 mentor SMCI","+ 1 mentor tamu eksklusif","Sesi tak terbatas","Panduan Prop Firm","Volume Profile & Order Flow","Psikologi mendalam","Priority support 24/7","Akses seumur hidup"],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
];

const toolProducts = [
  { id: "all-in-one", category: "Trading Indicator", name: "SMCI All-in-One", tag: "POWERFUL", tagColor: "var(--cyan)", accentColor: "var(--cyan)",
    description: "Indicator lengkap: Market Structure, Supply & Demand, dan Liquidity dalam satu tool.",
    features: ["Market Structure otomatis","Supply & Demand marking","Liquidity zone detection","Multi-timeframe","TradingView compatible","Auto-update","Video panduan","Support teknis"],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { id: "simple-entry", category: "Trading Indicator", name: "SMCI Simple Entry", tag: "SIMPEL", tagColor: "var(--gold)", accentColor: "var(--gold)",
    description: "Versi ringan tanpa noise — Market Structure dan SnD terkini dengan setup SMC high probability.",
    features: ["Market Structure sederhana","Area SnD terkini","Setup high probability","Tampilan bersih","Cocok pemula","TradingView compatible","Panduan setup","Komunitas pengguna"],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 20V10M12 20V4M6 20v-6"/></svg> },
  { id: "ebook", category: "Ebook", name: "SMCI Ebook", tag: "WAJIB BACA", tagColor: "var(--cyan)", accentColor: "var(--cyan)",
    description: "Panduan komprehensif SMC dalam Bahasa Indonesia — dari mindset dasar hingga setup advanced.",
    features: ["Teori Smart Money Concept","Market Structure & BOS/CHOCH","Supply, Demand & FVG","Liquidity & trap setup","Manajemen risiko","Contoh setup nyata","Bahasa Indonesia","PDF seumur hidup"],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> },
];

const tabs = ["Paket Mentoring", "Per Mentor", "Indicator & Ebook"];

export default function Products() {
  const [, navigate] = useLocation();
  const search = useSearch();
  const params = new URLSearchParams(search);

  const initialTab = params.get("tab") === "permentor" ? 1 : params.get("tab") === "tools" ? 2 : 0;
  const initialMentor = params.get("mentor") ?? null;

  const [activeTab, setActiveTab] = useState(initialTab);
  const [selectedMentor, setSelectedMentor] = useState<string | null>(initialMentor);

  useEffect(() => {
    const p = new URLSearchParams(search);
    const t = p.get("tab") === "permentor" ? 1 : p.get("tab") === "tools" ? 2 : 0;
    const m = p.get("mentor") ?? null;
    setActiveTab(t);
    setSelectedMentor(m);
    if (m) {
      setTimeout(() => {
        const el = document.getElementById("products-tabs");
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: "smooth" });
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [search]);

  const selected = mentorProducts.find(m => m.id === selectedMentor);

  return (
    <div style={{ padding: "100px clamp(1.25rem,4vw,2.5rem) 80px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <FadeIn>
          <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Produk Kami</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,6vw,4rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 16 }}>
            Tools & Program<br /><span className="gradient-text">untuk Trader SMC</span>
          </h1>
          <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 500, marginBottom: 40 }}>
            Pilih paket mentoring lengkap, belajar per mentor spesifik, atau lengkapi setup dengan indicator & ebook eksklusif SMCI.
          </p>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1}>
          <div id="products-tabs" style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
            {tabs.map((tab, i) => (
              <button key={tab} onClick={() => { setActiveTab(i); setSelectedMentor(null); }}
                style={{ padding: "9px 18px", borderRadius: 100, border: `1px solid ${activeTab === i ? "var(--cyan)" : "var(--border-subtle)"}`, background: activeTab === i ? "rgba(0,201,177,0.15)" : "transparent", color: activeTab === i ? "var(--cyan)" : "var(--text-muted)", fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}>
                {tab}
              </button>
            ))}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">

          {/* ── TAB 0: PAKET ── */}
          {activeTab === 0 && (
            <motion.div key="packages" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <div className="glass" style={{ borderRadius: 14, padding: "14px 18px", marginBottom: 28, display: "flex", alignItems: "flex-start", gap: 12, borderColor: "rgba(0,201,177,0.15)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
                  <strong style={{ color: "#fff" }}>Elite</strong> — 4 mentor SMCI, sesi terjadwal.&nbsp;
                  <strong style={{ color: "#fff" }}>Ultimate</strong> — Elite + 1 mentor tamu eksklusif &amp; sesi tak terbatas.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(320px,100%), 1fr))", gap: 20 }}>
                {packageProducts.map((product, i) => (
                  <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="glass glass-hover" style={{ borderRadius: 20, padding: "clamp(22px,4vw,32px)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                    <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${product.accentColor} 0%, transparent 100%)` }} />

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                      <div style={{ width: 50, height: 50, borderRadius: 14, background: `rgba(${rgb(product.accentColor)},0.12)`, border: `1px solid rgba(${rgb(product.accentColor)},0.22)`, display: "flex", alignItems: "center", justifyContent: "center", color: product.accentColor }}>
                        {product.icon}
                      </div>
                      <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", padding: "4px 12px", borderRadius: 100, color: product.tagColor, border: `1px solid rgba(${rgb(product.tagColor)},0.35)`, background: `rgba(${rgb(product.tagColor)},0.1)` }}>
                        {product.tag}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px,4vw,24px)", fontWeight: 800, marginBottom: 10 }}>{product.name}</h3>
                    <p style={{ fontSize: "14px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: 16 }}>{product.description}</p>

                    {/* Mentor chips */}
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
                      {product.mentors.map(n => (
                        <span key={n} style={{ fontSize: "12px", padding: "3px 10px", borderRadius: 6, background: `rgba(${rgb(product.accentColor)},0.1)`, border: `1px solid rgba(${rgb(product.accentColor)},0.22)`, color: product.accentColor, fontWeight: 600 }}>{n}</span>
                      ))}
                      {product.guestMentor && (
                        <span style={{ fontSize: "12px", padding: "3px 10px", borderRadius: 6, background: "rgba(245,200,66,0.1)", border: "1px solid rgba(245,200,66,0.35)", color: "var(--gold)", fontWeight: 700 }}>+ Mentor Tamu ✦</span>
                      )}
                    </div>

                    <div style={{ height: 1, background: "var(--border-subtle)", marginBottom: 16 }} />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px 8px", flex: 1, marginBottom: 24 }}>
                      {product.features.map(f => (
                        <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 7 }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={product.accentColor} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12"/></svg>
                          <span style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.5 }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => navigate("/contact")} className="btn-primary"
                      style={{ width: "100%", justifyContent: "center", ...(isGold(product.accentColor) ? { background: "transparent", color: "var(--gold)", border: "1px solid rgba(245,200,66,0.4)" } : {}) }}>
                      Tanya &amp; Daftar
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── TAB 1: PER MENTOR ── */}
          {activeTab === 1 && (
            <motion.div id="mentor-section" key="permentor" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24, lineHeight: 1.75 }}>
                Pilih mentor sesuai bidang yang ingin kamu dalami. Bisa mulai dari satu, atau kombinasikan beberapa.
              </p>

              {/* Mentor grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(220px,calc(50% - 6px)), 1fr))", gap: 12, marginBottom: 24 }}>
                {mentorProducts.map((m, i) => (
                  <motion.button key={m.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06, duration: 0.4 }}
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
                    style={{ background: selectedMentor === m.id ? `rgba(${rgb(m.color)},0.12)` : "rgba(255,255,255,0.07)", border: `1.5px solid ${selectedMentor === m.id ? m.color : "rgba(255,255,255,0.12)"}`, borderRadius: 16, padding: "18px 16px", cursor: "pointer", textAlign: "left", transition: "all 0.22s", position: "relative", overflow: "hidden" }}>
                    {selectedMentor === m.id && <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${m.color} 0%, transparent 100%)` }} />}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                      <img src={`/${m.name}.png`} alt={m.name} style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", flexShrink: 0, filter: `drop-shadow(0 0 6px rgba(${rgb(m.color)},0.45))` }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, color: "#fff" }}>{m.name}</div>
                        <div style={{ fontSize: "11px", color: m.color, fontWeight: 600, marginTop: 1 }}>{m.specialty}</div>
                      </div>
                      {selectedMentor === m.id && (
                        <div style={{ width: 20, height: 20, borderRadius: "50%", background: m.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#003D38" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                      )}
                    </div>
                    <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.5 }}>{m.role}</p>
                  </motion.button>
                ))}
              </div>

              {/* Detail panel */}
              <AnimatePresence>
                {selected && (
                  <motion.div id="mentor-detail" key={selected.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="glass" style={{ borderRadius: 20, padding: "clamp(20px,4vw,32px)", borderColor: `rgba(${rgb(selected.color)},0.28)`, position: "relative", overflow: "hidden" }}>
                    <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${selected.color} 0%, transparent 60%)` }} />

                    {/* Header */}
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                      <img src={`/${selected.name}.png`} alt={selected.name} style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", flexShrink: 0, filter: `drop-shadow(0 0 10px rgba(${rgb(selected.color)},0.5))` }} />
                      <div>
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px,4vw,22px)", fontWeight: 800, marginBottom: 2 }}>Mentoring dengan {selected.name}</h3>
                        <span style={{ fontSize: "13px", color: selected.color, fontWeight: 600 }}>{selected.role}</span>
                      </div>
                    </div>

                    <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: 22 }}>{selected.description}</p>

                    <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12 }}>Yang akan dipelajari</p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(200px,100%), 1fr))", gap: "10px 16px", marginBottom: 20 }}>
                      {selected.topics.map(t => (
                        <div key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={selected.color} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                          <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>{t}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 16px", borderRadius: 10, background: `rgba(${rgb(selected.color)},0.08)`, border: `1px solid rgba(${rgb(selected.color)},0.15)`, marginBottom: 20 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={selected.color} strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                      <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>Cocok untuk: <strong style={{ color: "#fff" }}>{selected.suitable}</strong></span>
                    </div>

                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      <button onClick={() => navigate("/contact")} className="btn-primary" style={{ flex: 1, minWidth: 140, justifyContent: "center" }}>Daftar Sekarang</button>
                      <button onClick={() => { window.scrollTo({ top: 0 }); navigate("/mentors"); }} className="btn-outline" style={{ flex: 1, minWidth: 120, justifyContent: "center" }}>Lihat Profil</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!selectedMentor && (
                <p style={{ textAlign: "center", padding: "28px", color: "var(--text-muted)", fontSize: 14 }}>
                  ↑ Pilih salah satu mentor di atas untuk melihat detail program
                </p>
              )}
            </motion.div>
          )}

          {/* ── TAB 2: TOOLS ── */}
          {activeTab === 2 && (
            <motion.div key="tools" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px,100%), 1fr))", gap: 20 }}>
                {toolProducts.map((product, i) => (
                  <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="glass glass-hover" style={{ borderRadius: 20, padding: "clamp(20px,4vw,28px)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                    <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${product.accentColor} 0%, transparent 100%)` }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 13, background: `rgba(${rgb(product.accentColor)},0.12)`, border: `1px solid rgba(${rgb(product.accentColor)},0.22)`, display: "flex", alignItems: "center", justifyContent: "center", color: product.accentColor }}>
                        {product.icon}
                      </div>
                      <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", padding: "4px 11px", borderRadius: 100, color: product.tagColor, border: `1px solid rgba(${rgb(product.tagColor)},0.3)`, background: `rgba(${rgb(product.tagColor)},0.1)` }}>
                        {product.tag}
                      </span>
                    </div>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6, fontWeight: 500 }}>{product.category}</span>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "19px", fontWeight: 800, marginBottom: 10 }}>{product.name}</h3>
                    <p style={{ fontSize: "14px", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: 18 }}>{product.description}</p>
                    <div style={{ height: 1, background: "var(--border-subtle)", marginBottom: 16 }} />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px 8px", flex: 1, marginBottom: 22 }}>
                      {product.features.map(f => (
                        <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 7 }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={product.accentColor} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12"/></svg>
                          <span style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.5 }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => navigate("/contact")} className="btn-primary"
                      style={{ width: "100%", justifyContent: "center", ...(isGold(product.accentColor) ? { background: "transparent", color: "var(--gold)", border: "1px solid rgba(245,200,66,0.4)" } : {}) }}>
                      Tanya &amp; Dapatkan
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <FadeIn delay={0.15}>
          <div className="glass" style={{ borderRadius: 18, padding: "clamp(22px,4vw,36px)", marginTop: 48, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20, borderColor: "rgba(0,201,177,0.15)" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(17px,3vw,20px)", fontWeight: 700, marginBottom: 6 }}>Bingung pilih produk yang tepat?</h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)" }}>Konsultasikan kebutuhan kamu — gratis, tanpa komitmen.</p>
            </div>
            <button onClick={() => navigate("/contact")} className="btn-primary" style={{ flexShrink: 0, whiteSpace: "nowrap" }}>Konsultasi Gratis</button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
