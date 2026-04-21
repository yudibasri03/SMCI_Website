import { useLocation } from "wouter";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

const mentors = [
  {
    initial: "O",
    name: "Oscar",
    role: "SMCI Strategy",
    specialty: "Lead Mentor",
    color: "var(--cyan)",
    description:
      "Mentor utama SMCI Community yang membangun dan mengembangkan metodologi SMCI Strategy dari nol. Oscar fokus pada pendekatan trading yang simpel, konsisten, dan berbasis logika Smart Money.",
    expertise: [
      "SMCI Core Strategy",
      "Market Structure Analysis",
      "High Probability Setup",
      "Trading Psychology",
      "Risk Management",
      "Consistency Framework",
    ],
    quote: "Trading bukan soal prediksi, tapi soal probabilitas dan manajemen risiko yang tepat.",
    socials: { instagram: "#", telegram: "#" },
  },
  {
    initial: "J",
    name: "James",
    role: "Volume Profile & Order Flow",
    specialty: "Technical Specialist",
    color: "var(--gold)",
    description:
      "Spesialis Volume Profile dan Order Flow yang mengintegrasikan analisis depth-of-market ke dalam framework SMC. James membantu trader memahami 'siapa' yang bergerak di balik harga.",
    expertise: [
      "Volume Profile Analysis",
      "Order Flow Reading",
      "Market Depth (DOM)",
      "Institutional Footprints",
      "VWAP & POC Levels",
      "Delta Analysis",
    ],
    quote: "Volume is the fuel. Order flow is the direction. Smart money always leaves a trail.",
    socials: { instagram: "#", telegram: "#" },
  },
  {
    initial: "W",
    name: "Wahyudi",
    role: "Psikologi & Propfirm",
    specialty: "Mindset Coach",
    color: "var(--cyan)",
    description:
      "Mentor psikologi trading dan spesialis Prop Firm. Wahyudi membantu trader mengatasi hambatan mental, membangun disiplin, dan mempersiapkan diri untuk melewati challenge Prop Firm.",
    expertise: [
      "Trading Psychology",
      "Emotional Discipline",
      "Prop Firm Strategy",
      "Drawdown Management",
      "Consistency Building",
      "Mindset Reprogramming",
    ],
    quote: "Kegagalan terbesar trader bukan pada strategi, tapi pada diri sendiri. Kuasai dirimu dulu.",
    socials: { instagram: "#", telegram: "#" },
  },
  {
    initial: "A",
    name: "Albert",
    role: "News & Fundamental",
    specialty: "Macro Analyst",
    color: "var(--gold)",
    description:
      "Analis makroekonomi dan news trading yang mengombinasikan analisis fundamental dengan SMC. Albert membantu trader memahami konteks besar di balik pergerakan pasar.",
    expertise: [
      "Fundamental Analysis",
      "News Trading",
      "Central Bank Policy",
      "Economic Calendar",
      "COT Report Reading",
      "Macro Market Correlation",
    ],
    quote: "Pasar bergerak karena data dan sentimen. Memahami fundamental memberi kamu keunggulan nyata.",
    socials: { instagram: "#", telegram: "#" },
  },
];

export default function Mentors() {
  const [, navigate] = useLocation();

  return (
    <div style={{ paddingTop: 100, paddingBottom: 96, padding: "100px clamp(1.5rem,5vw,3.5rem) 96px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <FadeIn>
          <span className="tag" style={{ marginBottom: 20, display: "inline-block" }}>Tim Mentor</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 20 }}>
            Belajar dari<br />
            <span className="gradient-text">Para Ahlinya</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 540, marginBottom: 72 }}>
            Empat mentor dengan keahlian berbeda, satu tujuan — membantumu menjadi trader Smart Money Concept yang konsisten dan profitable.
          </p>
        </FadeIn>

        {/* Mentor cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {mentors.map((mentor, i) => (
            <FadeIn key={mentor.name} delay={i * 0.08}>
              <motion.div
                className="glass glass-hover"
                style={{ borderRadius: 24, padding: "clamp(24px,4vw,40px)", position: "relative", overflow: "hidden", display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(20px,3vw,40px)", alignItems: "start" }}
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-accent-top" style={{ background: `linear-gradient(90deg, ${mentor.color} 0%, transparent 60%)` }} />

                {/* Left: Avatar */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, minWidth: 120 }}>
                  <div style={{ position: "relative" }}>
                    <div style={{
                      width: 96, height: 96, borderRadius: "50%",
                      background: `linear-gradient(135deg, rgba(${mentor.color === "var(--cyan)" ? "29,223,184" : "240,180,41"},0.2), rgba(${mentor.color === "var(--cyan)" ? "29,223,184" : "240,180,41"},0.05))`,
                      border: `2px solid rgba(${mentor.color === "var(--cyan)" ? "29,223,184" : "240,180,41"},0.4)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40, color: mentor.color,
                      boxShadow: `0 0 40px rgba(${mentor.color === "var(--cyan)" ? "29,223,184" : "240,180,41"},0.15)`,
                    }}>
                      {mentor.initial}
                    </div>
                    <div style={{ position: "absolute", bottom: 2, right: 2, width: 18, height: 18, borderRadius: "50%", background: "#22c55e", border: "2px solid var(--bg-deep)" }} />
                  </div>
                  <span style={{
                    fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
                    padding: "5px 12px", borderRadius: 100,
                    color: mentor.color,
                    border: `1px solid rgba(${mentor.color === "var(--cyan)" ? "29,223,184" : "240,180,41"},0.3)`,
                    background: `rgba(${mentor.color === "var(--cyan)" ? "29,223,184" : "240,180,41"},0.08)`,
                    textAlign: "center",
                  }}>
                    {mentor.specialty}
                  </span>
                </div>

                {/* Right: Content */}
                <div>
                  <div style={{ marginBottom: 16 }}>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, marginBottom: 4 }}>{mentor.name}</h2>
                    <p style={{ fontSize: "14px", color: mentor.color, fontWeight: 500, letterSpacing: "0.04em" }}>{mentor.role}</p>
                  </div>

                  <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: 24 }}>{mentor.description}</p>

                  {/* Quote */}
                  <blockquote style={{ borderLeft: `3px solid ${mentor.color}`, paddingLeft: 16, marginBottom: 28, fontStyle: "italic", color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
                    "{mentor.quote}"
                  </blockquote>

                  {/* Expertise */}
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12 }}>Keahlian</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {mentor.expertise.map(e => (
                        <span key={e} style={{
                          fontSize: "12px", padding: "5px 12px", borderRadius: 8,
                          background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)",
                          color: "var(--text-muted)",
                        }}>
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div style={{ marginTop: 72, textAlign: "center" }}>
            <div style={{ position: "relative", display: "inline-block", padding: "56px 48px" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: 24, border: "1px solid rgba(29,223,184,0.12)", background: "rgba(29,223,184,0.03)" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 800, marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Siap Belajar dari<br />
                  <span className="gradient-text">Mentor Terbaik?</span>
                </h3>
                <p style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: 32, maxWidth: 420, margin: "0 auto 32px" }}>
                  Mulai dengan 1 mentor spesifik, atau ambil paket Elite / Ultimate untuk akses lebih luas.
                </p>
                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                  <button onClick={() => navigate("/products")} className="btn-primary">
                    Pilih Per Mentor
                  </button>
                  <button onClick={() => navigate("/products")} className="btn-outline">
                    Lihat Paket Mentoring
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
