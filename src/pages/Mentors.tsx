import { useLocation } from "wouter";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

const mentors = [
  {
    initial: "O", name: "Oscar", role: "SMCI Strategy", specialty: "Lead Mentor", color: "var(--cyan)",
    description: "Mentor utama SMCI Community yang membangun dan mengembangkan metodologi SMCI Strategy. Oscar fokus pada pendekatan trading yang simpel, konsisten, dan berbasis logika Smart Money.",
    expertise: ["SMCI Core Strategy", "Market Structure Analysis", "High Probability Setup", "Trading Psychology", "Risk Management", "Consistency Framework"],
    quote: "Trading bukan soal prediksi, tapi soal probabilitas dan manajemen risiko yang tepat.",
  },
  {
    initial: "J", name: "James", role: "Volume Profile & Order Flow", specialty: "Technical Specialist", color: "var(--gold)",
    description: "Spesialis Volume Profile dan Order Flow yang mengintegrasikan analisis depth-of-market ke dalam framework SMC. James membantu trader memahami 'siapa' yang bergerak di balik harga.",
    expertise: ["Volume Profile Analysis", "Order Flow Reading", "Market Depth (DOM)", "Institutional Footprints", "VWAP & POC Levels", "Delta Analysis"],
    quote: "Volume is the fuel. Order flow is the direction. Smart money always leaves a trail.",
  },
  {
    initial: "W", name: "Wahyudi", role: "Psikologi & Propfirm", specialty: "Mindset Coach", color: "var(--cyan)",
    description: "Mentor psikologi trading dan spesialis Prop Firm. Wahyudi membantu trader mengatasi hambatan mental, membangun disiplin, dan mempersiapkan diri untuk challenge Prop Firm.",
    expertise: ["Trading Psychology", "Emotional Discipline", "Prop Firm Strategy", "Drawdown Management", "Consistency Building", "Mindset Reprogramming"],
    quote: "Kegagalan terbesar trader bukan pada strategi, tapi pada diri sendiri. Kuasai dirimu dulu.",
  },
  {
    initial: "A", name: "Albert", role: "News & Fundamental", specialty: "Macro Analyst", color: "var(--gold)",
    description: "Analis makroekonomi dan news trading yang mengombinasikan analisis fundamental dengan SMC. Albert membantu trader memahami konteks besar di balik pergerakan pasar.",
    expertise: ["Fundamental Analysis", "News Trading", "Central Bank Policy", "Economic Calendar", "COT Report Reading", "Macro Market Correlation"],
    quote: "Pasar bergerak karena data dan sentimen. Memahami fundamental memberi kamu keunggulan nyata.",
  },
];

function rgb(color: string) { return color === "var(--cyan)" ? "0,201,177" : "240,180,41"; }

export default function Mentors() {
  const [, navigate] = useLocation();

  return (
    <div style={{ padding: "100px clamp(1.25rem,4vw,2.5rem) 80px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <FadeIn>
          <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Tim Mentor</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,6vw,4rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 16 }}>
            Belajar dari<br /><span className="gradient-text">Para Ahlinya</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 520, marginBottom: 56 }}>
            Empat mentor dengan keahlian berbeda, satu tujuan — membantumu menjadi trader SMC yang konsisten dan profitable.
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(480px,100%), 1fr))", gap: 24 }}>
          {mentors.map((mentor, i) => (
            <FadeIn key={mentor.name} delay={i * 0.07}>
              <div className="glass glass-hover" style={{ borderRadius: 20, overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${mentor.color} 0%, transparent 60%)` }} />

                {/* Header row — always horizontal */}
                <div style={{ padding: "clamp(20px,4vw,32px)", paddingBottom: 20, display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <img
                      src={`/${mentor.name}.png`}
                      alt={mentor.name}
                      style={{ width: 110, height: 110, borderRadius: "50%", objectFit: "cover", objectPosition: "center 15%", display: "block", filter: `drop-shadow(0 0 10px rgba(${rgb(mentor.color)},0.5))` }}
                    />
                    <div style={{ position: "absolute", bottom: 2, right: 2, width: 14, height: 14, borderRadius: "50%", background: "#22c55e", border: "2px solid rgba(10,20,45,0.8)" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px,4vw,24px)", fontWeight: 800, marginBottom: 2 }}>{mentor.name}</h2>
                    <p style={{ fontSize: "13px", color: mentor.color, fontWeight: 600 }}>{mentor.role}</p>
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 100, color: mentor.color, border: `1px solid rgba(${rgb(mentor.color)},0.3)`, background: `rgba(${rgb(mentor.color)},0.08)`, flexShrink: 0, display: "none" }} className="specialty-badge">
                    {mentor.specialty}
                  </span>
                </div>

                {/* Body */}
                <div style={{ padding: "0 clamp(20px,4vw,32px) clamp(20px,4vw,32px)" }}>
                  <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: 20 }}>{mentor.description}</p>

                  <blockquote style={{ borderLeft: `3px solid ${mentor.color}`, paddingLeft: 14, marginBottom: 20, fontStyle: "italic", color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: 1.7 }}>
                    "{mentor.quote}"
                  </blockquote>

                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12 }}>Keahlian</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {mentor.expertise.map(e => (
                      <span key={e} style={{ fontSize: "12px", padding: "5px 11px", borderRadius: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--text-muted)" }}>
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="glass" style={{ borderRadius: 18, padding: "clamp(24px,5vw,40px)", marginTop: 56, textAlign: "center", borderColor: "rgba(0,201,177,0.15)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,4vw,2.2rem)", fontWeight: 800, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Siap Belajar dari <span className="gradient-text">Mentor Terbaik?</span>
            </h3>
            <p style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: 28, maxWidth: 380, margin: "0 auto 28px" }}>
              Mulai dengan 1 mentor spesifik, atau ambil paket Elite / Ultimate untuk akses lebih luas.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => { window.scrollTo({ top: 0 }); navigate("/products?tab=permentor"); }} className="btn-primary">Pilih Per Mentor</button>
              <button onClick={() => { window.scrollTo({ top: 0 }); navigate("/products"); }} className="btn-outline">Lihat Paket</button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
