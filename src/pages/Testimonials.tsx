import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../components/FadeIn";

const testimonials = [
  { name: "Rizky Firmansyah", role: "Mentoring Per Mentor — Oscar", location: "Jakarta", initial: "R", color: "var(--cyan)", rating: 5,
    text: "Sebelum ikut SMCI, saya sudah 2 tahun trading tanpa arah. Setelah mentoring langsung dengan Oscar, akhirnya saya paham fondasi SMC dan bisa konsisten profit selama 3 bulan berturut-turut.",
    product: "Per Mentor · Oscar", result: "+23% dalam 3 bulan" },
  { name: "Dewi Anggraini", role: "Mentoring Per Mentor — James", location: "Surabaya", initial: "D", color: "var(--gold)", rating: 5,
    text: "James menjelaskan Volume Profile dengan sangat detail dan mudah dipahami. Saya yang awalnya hanya paham price action, sekarang bisa membaca order flow dengan lebih akurat.",
    product: "Per Mentor · James", result: "Lulus Prop Firm Challenge" },
  { name: "Budi Santoso", role: "Pengguna SMCI All-in-One", location: "Bandung", initial: "B", color: "var(--cyan)", rating: 5,
    text: "Indikator SMCI All-in-One sangat membantu memetakan market structure secara otomatis. Tidak perlu gambar manual, semuanya sudah terdeteksi dengan akurat.",
    product: "All-in-One Indicator", result: "Win rate meningkat 15%" },
  { name: "Sari Rahayu", role: "Mentoring Per Mentor — Wahyudi", location: "Yogyakarta", initial: "S", color: "var(--gold)", rating: 5,
    text: "Saya pilih mentoring Wahyudi karena selalu cut loss terlambat dan overtrading. Setelah sesi psikologi bersamanya, mindset saya berubah total dan lulus Prop Firm pertama kali.",
    product: "Per Mentor · Wahyudi", result: "Lulus Prop Firm, lebih disiplin" },
  { name: "Andi Kurniawan", role: "Paket Mentoring Ultimate", location: "Medan", initial: "A", color: "var(--cyan)", rating: 5,
    text: "Ambil Ultimate karena mau akses semua mentor. Sinerginya luar biasa — strategy Oscar, volume profile James, psikologi Wahyudi, lalu Albert ajarkan cara baca news.",
    product: "Paket Ultimate", result: "Profit konsisten multi-strategi" },
  { name: "Fitriani Nasution", role: "Mentoring Per Mentor — Albert", location: "Makassar", initial: "F", color: "var(--gold)", rating: 5,
    text: "Dulunya saya selalu hindari trading saat news. Setelah mentoring dengan Albert, justru news event jadi peluang utama saya. Cara Albert menjelaskan korelasi makro ke chart SMC sangat eye-opening.",
    product: "Per Mentor · Albert", result: "Konsisten profit saat news" },
];

const stats = [
  { val: "500+", label: "Member Aktif" },
  { val: "95%",  label: "Kepuasan Member" },
  { val: "4.9",  label: "Rating Rata-rata" },
  { val: "3+",   label: "Tahun Berpengalaman" },
];

function rgb(c: string) { return c === "var(--cyan)" ? "0,201,177" : "240,180,41"; }

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % total), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ padding: "100px clamp(1.25rem,5vw,3.5rem) 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <FadeIn>
          <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Testimoni</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,6vw,4rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 16 }}>
            Kata Member<br /><span className="gradient-text">SMCI Community</span>
          </h1>
          <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 460, marginBottom: 48 }}>
            Ribuan trader telah membuktikan efektivitas metode dan program SMCI Community.
          </p>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.1}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(140px,calc(50% - 6px)), 1fr))", gap: 12, marginBottom: 48 }}>
            {stats.map((s, i) => (
              <div key={s.label} className="glass" style={{ borderRadius: 16, padding: "22px 18px", position: "relative", overflow: "hidden", textAlign: "center" }}>
                <div className="card-accent-top" />
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,4vw,2rem)", fontWeight: 900, color: i % 2 === 0 ? "var(--cyan)" : "var(--gold)", lineHeight: 1.1, marginBottom: 6 }}>{s.val}</div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Featured slider */}
        <FadeIn delay={0.12}>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>Testimoni Unggulan</p>
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.4 }}
              className="glass" style={{ borderRadius: 20, padding: "clamp(20px,4vw,36px)", marginBottom: 20, borderColor: `rgba(${rgb(testimonials[active].color)},0.22)`, position: "relative", overflow: "hidden" }}>
              <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${testimonials[active].color} 0%, transparent 60%)` }} />

              {/* Big quote mark */}
              <div style={{ fontSize: 60, lineHeight: 1, color: `rgba(${rgb(testimonials[active].color)},0.12)`, fontFamily: "Georgia, serif", position: "absolute", top: 16, right: 24 }}>"</div>

              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: `rgba(${rgb(testimonials[active].color)},0.15)`, border: `2px solid rgba(${rgb(testimonials[active].color)},0.38)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, color: testimonials[active].color, flexShrink: 0 }}>
                  {testimonials[active].initial}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700 }}>{testimonials[active].name}</div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{testimonials[active].role} · {testimonials[active].location}</div>
                  <div style={{ display: "flex", gap: 2, marginTop: 4 }}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="11" height="11" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                </div>
              </div>

              <p style={{ fontSize: "clamp(14px,2.5vw,16px)", lineHeight: 1.8, color: "rgba(255,255,255,0.82)", marginBottom: 18, fontStyle: "italic" }}>"{testimonials[active].text}"</p>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: "12px", padding: "4px 11px", borderRadius: 7, background: "rgba(255,255,255,0.07)", border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}>📦 {testimonials[active].product}</span>
                <span style={{ fontSize: "12px", padding: "4px 11px", borderRadius: 7, background: `rgba(${rgb(testimonials[active].color)},0.1)`, border: `1px solid rgba(${rgb(testimonials[active].color)},0.25)`, color: testimonials[active].color }}>✓ {testimonials[active].result}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 48 }}>
            <button onClick={() => setActive(i => (i - 1 + total) % total)} style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid var(--border-subtle)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", transition: "all 0.2s" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div style={{ display: "flex", gap: 6 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} style={{ height: 5, width: active === i ? 24 : 5, borderRadius: 3, background: active === i ? "var(--cyan)" : "rgba(255,255,255,0.25)", border: "none", cursor: "pointer", transition: "all 0.3s" }} />
              ))}
            </div>
            <button onClick={() => setActive(i => (i + 1) % total)} style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid var(--border-subtle)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", transition: "all 0.2s" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="divider" style={{ marginBottom: 40 }} />
        <p style={{ fontFamily: "var(--font-display)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 20 }}>Semua Testimoni</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(280px,100%), 1fr))", gap: 16 }}>
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.06}>
              <div className="glass glass-hover" style={{ borderRadius: 18, padding: "22px", height: "100%", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", cursor: "pointer" }}
                onClick={() => setActive(i)}>
                <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${t.color} 0%, transparent 100%)` }} />
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: `rgba(${rgb(t.color)},0.14)`, border: `1px solid rgba(${rgb(t.color)},0.28)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, color: t.color, flexShrink: 0 }}>
                    {t.initial}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 700 }}>{t.name}</div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>{t.location}</div>
                  </div>
                  <div style={{ display: "flex", gap: 1, flexShrink: 0 }}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="9" height="9" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--text-muted)", flex: 1, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" as any }}>
                  "{t.text}"
                </p>
                <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>{t.product}</span>
                  <span style={{ fontSize: "11px", color: t.color, fontWeight: 600 }}>{t.result}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
