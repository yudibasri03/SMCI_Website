import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../components/FadeIn";

const testimonials = [
  {
    name: "Rizky Firmansyah",
    role: "Peserta Mentoring Per Mentor — Oscar",
    location: "Jakarta",
    initial: "R",
    color: "var(--cyan)",
    rating: 5,
    text: "Sebelum ikut SMCI, saya sudah 2 tahun trading tanpa arah yang jelas. Setelah mentoring langsung dengan Oscar, akhirnya saya paham fondasi SMC dan bisa konsisten profit selama 3 bulan berturut-turut. Worth it banget!",
    product: "Per Mentor · Oscar (SMCI Strategy)",
    result: "+23% dalam 3 bulan",
  },
  {
    name: "Dewi Anggraini",
    role: "Peserta Mentoring Per Mentor — James",
    location: "Surabaya",
    initial: "D",
    color: "var(--gold)",
    rating: 5,
    text: "James menjelaskan Volume Profile dengan sangat detail dan mudah dipahami. Saya yang awalnya hanya paham price action, sekarang bisa membaca order flow dengan lebih akurat. Saya pilih per mentor karena ingin fokus ke bidang ini dulu.",
    product: "Per Mentor · James (Volume Profile)",
    result: "Lulus Prop Firm Challenge",
  },
  {
    name: "Budi Santoso",
    role: "Pengguna SMCI All-in-One Indicator",
    location: "Bandung",
    initial: "B",
    color: "var(--cyan)",
    rating: 5,
    text: "Indikator SMCI All-in-One sangat membantu memetakan market structure secara otomatis. Tidak perlu gambar manual, semuanya sudah terdeteksi. Sinyal yang muncul sangat relevan dengan kondisi pasar nyata.",
    product: "SMCI All-in-One Indicator",
    result: "Win rate meningkat 15%",
  },
  {
    name: "Sari Rahayu",
    role: "Peserta Mentoring Per Mentor — Wahyudi",
    location: "Yogyakarta",
    initial: "S",
    color: "var(--gold)",
    rating: 5,
    text: "Saya pilih mentoring Wahyudi karena selalu cut loss terlambat dan overtrading. Setelah sesi psikologi bersamanya, mindset saya berubah total. Saya juga lulus Prop Firm pertama kali dengan panduan strategi dari dia.",
    product: "Per Mentor · Wahyudi (Psikologi & Propfirm)",
    result: "Lulus Prop Firm, mindset lebih disiplin",
  },
  {
    name: "Andi Kurniawan",
    role: "Peserta Paket Mentoring Ultimate",
    location: "Medan",
    initial: "A",
    color: "var(--cyan)",
    rating: 5,
    text: "Ambil Ultimate karena mau akses semua mentor. Ternyata sinerginya luar biasa — strategy dari Oscar, volume profile dari James, psikologi dari Wahyudi, lalu Albert ajarkan cara baca news. Paket terlengkap yang pernah saya ikuti.",
    product: "Paket Mentoring Ultimate",
    result: "Profit konsisten multi-strategi",
  },
  {
    name: "Fitriani Nasution",
    role: "Peserta Mentoring Per Mentor — Albert",
    location: "Makassar",
    initial: "F",
    color: "var(--gold)",
    rating: 5,
    text: "Dulunya saya selalu hindari trading saat news. Setelah mentoring dengan Albert, saya justru jadikan news event sebagai peluang utama. Cara Albert menjelaskan korelasi makro ke chart SMC benar-benar eye-opening.",
    product: "Per Mentor · Albert (News & Fundamental)",
    result: "Konsisten profit saat high-impact news",
  },
];

const stats = [
  { val: "500+", label: "Member Aktif" },
  { val: "95%", label: "Kepuasan Member" },
  { val: "4.9/5", label: "Rating Rata-rata" },
  { val: "3+", label: "Tahun Berpengalaman" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % total), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ paddingTop: 100, paddingBottom: 96, padding: "100px clamp(1.5rem,5vw,3.5rem) 96px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <FadeIn>
          <span className="tag" style={{ marginBottom: 20, display: "inline-block" }}>Testimoni</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 20 }}>
            Kata Member<br />
            <span className="gradient-text">SMCI Community</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 480, marginBottom: 64 }}>
            Ribuan trader telah membuktikan efektivitas metode dan program SMCI Community. Ini adalah cerita mereka.
          </p>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.1}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, marginBottom: 72 }}>
            {stats.map((s, i) => (
              <div key={s.label} className="glass" style={{ borderRadius: 18, padding: "28px 24px", position: "relative", overflow: "hidden", textAlign: "center" }}>
                <div className="card-accent-top" />
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 900, color: i % 2 === 0 ? "var(--cyan)" : "var(--gold)", lineHeight: 1.1, marginBottom: 8 }}>{s.val}</div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)", letterSpacing: "0.06em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Featured Testimonial Slider */}
        <FadeIn delay={0.15}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 20 }}>Testimoni Unggulan</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="glass"
                style={{ borderRadius: 24, padding: "48px", position: "relative", overflow: "hidden", borderColor: `rgba(${testimonials[active].color === "var(--cyan)" ? "0,201,177" : "240,180,41"},0.2)` }}
              >
                <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${testimonials[active].color} 0%, transparent 60%)` }} />

                {/* Quote mark */}
                <div style={{ fontSize: 80, lineHeight: 1, color: `rgba(${testimonials[active].color === "var(--cyan)" ? "0,201,177" : "240,180,41"},0.12)`, fontFamily: "Georgia, serif", position: "absolute", top: 24, right: 40 }}>"</div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(60px,100%), 1fr))", gap: 32, alignItems: "start" }}>
                  {/* Avatar */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 72, height: 72, borderRadius: "50%",
                      background: `linear-gradient(135deg, rgba(${testimonials[active].color === "var(--cyan)" ? "0,201,177" : "240,180,41"},0.2), transparent)`,
                      border: `2px solid rgba(${testimonials[active].color === "var(--cyan)" ? "0,201,177" : "240,180,41"},0.35)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 28, color: testimonials[active].color,
                    }}>
                      {testimonials[active].initial}
                    </div>
                    {/* Stars */}
                    <div style={{ display: "flex", gap: 2 }}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div style={{ marginBottom: 16 }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, marginBottom: 4 }}>{testimonials[active].name}</h3>
                      <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>{testimonials[active].role} · {testimonials[active].location}</p>
                    </div>
                    <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(255,255,255,0.8)", marginBottom: 24, fontStyle: "italic" }}>
                      "{testimonials[active].text}"
                    </p>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                      <span style={{ fontSize: "13px", padding: "5px 12px", borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}>
                        📦 {testimonials[active].product}
                      </span>
                      <span style={{ fontSize: "13px", padding: "5px 12px", borderRadius: 8, background: `rgba(${testimonials[active].color === "var(--cyan)" ? "0,201,177" : "240,180,41"},0.08)`, border: `1px solid rgba(${testimonials[active].color === "var(--cyan)" ? "0,201,177" : "240,180,41"},0.2)`, color: testimonials[active].color }}>
                        ✓ {testimonials[active].result}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider controls */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 24 }}>
              <button onClick={() => setActive(i => (i - 1 + total) % total)} style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--border-subtle)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--cyan)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--cyan)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-subtle)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)"; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <div style={{ display: "flex", gap: 8 }}>
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} style={{ height: 6, width: active === i ? 28 : 6, borderRadius: 3, background: active === i ? "var(--cyan)" : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all 0.3s" }} />
                ))}
              </div>
              <button onClick={() => setActive(i => (i + 1) % total)} style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--border-subtle)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--cyan)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--cyan)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-subtle)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)"; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </FadeIn>

        <div className="divider" style={{ marginBottom: 56 }} />

        {/* Grid testimonials */}
        <FadeIn delay={0.2}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 24 }}>Semua Testimoni</p>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.07}>
              <div
                className="glass glass-hover"
                style={{ borderRadius: 20, padding: "28px", height: "100%", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", cursor: "pointer" }}
                onClick={() => setActive(i)}
              >
                <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${t.color} 0%, transparent 100%)` }} />
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: `rgba(${t.color === "var(--cyan)" ? "0,201,177" : "240,180,41"},0.12)`, border: `1px solid rgba(${t.color === "var(--cyan)" ? "0,201,177" : "240,180,41"},0.25)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: t.color, flexShrink: 0 }}>
                    {t.initial}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 700 }}>{t.name}</div>
                    <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>{t.location}</div>
                  </div>
                  <div style={{ marginLeft: "auto", display: "flex", gap: 1 }}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="10" height="10" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--text-muted)", flex: 1, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  "{t.text}"
                </p>
                <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>{t.product}</span>
                  <span style={{ fontSize: "13px", color: t.color, fontWeight: 600 }}>{t.result}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
