import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import FadeIn from "../components/FadeIn";

const faqs = [
  {
    category: "Umum",
    items: [
      {
        q: "Apa itu SMCI Community?",
        a: "SMCI Community adalah komunitas trading Indonesia yang berfokus pada metode Smart Money Concept (SMC). Kami menyediakan program private mentoring, indicator eksklusif, ebook, dan komunitas aktif untuk membantu trader Indonesia berkembang.",
      },
      {
        q: "Apa itu Smart Money Concept (SMC)?",
        a: "Smart Money Concept adalah pendekatan analisis pasar yang berfokus pada jejak pergerakan 'uang besar' seperti institusi, bank, dan hedge fund. Metode ini meliputi analisis Market Structure, Supply & Demand, Liquidity, dan Order Flow untuk mengidentifikasi posisi entry dengan probabilitas tinggi.",
      },
      {
        q: "Apakah SMCI Community cocok untuk pemula?",
        a: "Ya! Kami memiliki program dan materi yang disesuaikan untuk berbagai level trader — dari pemula yang baru mengenal forex hingga trader berpengalaman yang ingin meningkatkan konsistensi profit.",
      },
      {
        q: "Di mana komunitas SMCI bisa diakses?",
        a: "Komunitas SMCI aktif di Telegram dan Discord. Setelah bergabung dengan program kami, kamu akan mendapat akses ke grup eksklusif sesuai level program yang diikuti.",
      },
    ],
  },
  {
    category: "Program Mentoring",
    items: [
      {
        q: "Apa perbedaan paket Elite, Ultimate, dan Per Mentor?",
        a: "Paket Elite: akses semua 4 mentor SMCI (Oscar, James, Wahyudi, Albert) dengan sesi 1-on-1 terjadwal, materi eksklusif, dan support grup. Paket Ultimate: semua dari Elite ditambah akses ke 1 mentor tamu eksklusif, sesi tak terbatas, panduan Prop Firm, dan priority support 24/7. Per Mentor: opsi fleksibel untuk fokus pada 1 mentor dan bidang spesifik — bisa dikombinasikan sesuai kebutuhan.",
      },
      {
        q: "Bagaimana cara memilih mentor yang tepat untuk saya?",
        a: "Tergantung tujuanmu: ingin fondasi SMC → Oscar. Ingin baca pergerakan institusi → James. Punya kendala psikologi atau ingin Prop Firm → Wahyudi. Ingin integrasikan analisis berita/fundamental → Albert. Kamu juga bisa konsultasikan dulu secara gratis dengan tim kami.",
      },
      {
        q: "Berapa lama program mentoring berlangsung?",
        a: "Durasi program mentoring bervariasi sesuai paket yang dipilih. Untuk informasi detail tentang durasi, jadwal, dan harga, silakan hubungi tim kami melalui halaman Kontak.",
      },
      {
        q: "Apakah ada garansi dalam program mentoring?",
        a: "SMCI Community berkomitmen memberikan edukasi trading berkualitas tinggi. Namun perlu dipahami bahwa hasil trading sangat bergantung pada implementasi dan konsistensi masing-masing trader. Tidak ada sistem yang bisa menjamin profit di trading.",
      },
      {
        q: "Bagaimana cara mendaftar program mentoring?",
        a: "Kamu bisa mendaftar melalui halaman Kontak kami. Tim akan menghubungimu untuk konsultasi gratis dan menjelaskan detail program yang paling sesuai dengan kebutuhan dan tujuan tradingmu.",
      },
    ],
  },
  {
    category: "Indicator & Ebook",
    items: [
      {
        q: "Platform apa yang didukung oleh SMCI Indicator?",
        a: "SMCI All-in-One dan SMCI Simple Entry tersedia untuk platform TradingView. Pastikan kamu memiliki akun TradingView (free atau berbayar) untuk menggunakannya.",
      },
      {
        q: "Berapa lama lisensi indicator berlaku?",
        a: "Durasi lisensi indicator bervariasi tergantung paket yang dipilih. Ada yang per bulan, 3 bulan, 6 bulan, hingga seumur hidup. Hubungi kami untuk informasi lebih lanjut tentang pilihan yang tersedia.",
      },
      {
        q: "Apakah SMCI Ebook cocok untuk pemula?",
        a: "Sangat cocok! Ebook SMCI ditulis dalam bahasa Indonesia yang mudah dipahami, dimulai dari konsep dasar Smart Money hingga setup trading advanced. Kamu tidak perlu background khusus untuk memulai.",
      },
      {
        q: "Apakah ada update untuk indicator?",
        a: "Ya, SMCI Indicator mendapat update berkala untuk meningkatkan performa dan akurasi. Update tersedia otomatis untuk pengguna aktif tanpa biaya tambahan.",
      },
    ],
  },
  {
    category: "Trading & Risiko",
    items: [
      {
        q: "Apakah trading forex aman?",
        a: "Trading forex memiliki risiko tinggi dan tidak cocok untuk semua orang. Selalu gunakan manajemen risiko yang ketat, hanya trading dengan dana yang siap kamu tanggung risikonya, dan pastikan kamu memahami produk yang diperdagangkan.",
      },
      {
        q: "Apa itu Prop Firm dan apakah SMCI membantu untuk itu?",
        a: "Prop Firm (Proprietary Trading Firm) adalah perusahaan yang menyediakan modal untuk trader yang lulus challenge/evaluasi mereka. Paket Ultimate SMCI mencakup panduan khusus untuk mempersiapkan dan melewati challenge Prop Firm dengan mentor Wahyudi.",
      },
      {
        q: "Berapa modal minimal yang dibutuhkan untuk memulai trading?",
        a: "SMCI tidak merekomendasikan jumlah modal spesifik karena setiap trader memiliki situasi finansial yang berbeda. Yang terpenting adalah manajemen risiko yang baik — jangan pernah trading dengan dana yang tidak siap kamu tanggung risikonya.",
      },
    ],
  },
];

export default function FAQ() {
  const [, navigate] = useLocation();
  const [openCategory, setOpenCategory] = useState<string | null>("Umum");
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Umum");

  const categories = faqs.map(f => f.category);
  const currentFaqs = faqs.find(f => f.category === activeCategory)?.items || [];

  return (
    <div style={{ paddingTop: 100, paddingBottom: 96, padding: "100px clamp(1.5rem,5vw,3.5rem) 96px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <FadeIn>
          <span className="tag" style={{ marginBottom: 20, display: "inline-block" }}>FAQ</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 20 }}>
            Pertanyaan<br />
            <span className="gradient-text">yang Sering Ditanya</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 480, marginBottom: 64 }}>
            Temukan jawaban dari pertanyaan yang paling sering ditanyakan seputar SMCI Community, produk, dan trading.
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: 40, alignItems: "start" }}>
          {/* Sidebar categories */}
          <FadeIn direction="left">
            <div style={{ position: "sticky", top: 100 }}>
              <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>Kategori</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setOpenItem(null); }}
                    style={{
                      background: activeCategory === cat ? "rgba(29,223,184,0.1)" : "transparent",
                      border: "none",
                      borderRadius: 10,
                      padding: "10px 14px",
                      textAlign: "left",
                      cursor: "pointer",
                      color: activeCategory === cat ? "var(--cyan)" : "var(--text-muted)",
                      fontFamily: "var(--font-display)",
                      fontSize: "13px",
                      fontWeight: 600,
                      borderLeft: `3px solid ${activeCategory === cat ? "var(--cyan)" : "transparent"}`,
                      transition: "all 0.2s",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Quick contact */}
              <div className="glass" style={{ borderRadius: 16, padding: "24px", marginTop: 32, borderColor: "rgba(29,223,184,0.1)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 700, marginBottom: 10 }}>Tidak menemukan jawaban?</div>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 16 }}>Tim kami siap membantu menjawab pertanyaanmu.</p>
                <button onClick={() => navigate("/contact")} className="btn-primary" style={{ padding: "10px 20px", fontSize: "12px", width: "100%", justifyContent: "center" }}>
                  Hubungi Kami
                </button>
              </div>
            </div>
          </FadeIn>

          {/* FAQ items */}
          <FadeIn direction="right">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, marginBottom: 24, color: "var(--cyan)" }}>{activeCategory}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {currentFaqs.map((item, i) => {
                    const id = `${activeCategory}-${i}`;
                    const isOpen = openItem === id;
                    return (
                      <div
                        key={id}
                        className="glass"
                        style={{ borderRadius: 16, overflow: "hidden", borderColor: isOpen ? "rgba(29,223,184,0.2)" : "var(--border-subtle)", transition: "border-color 0.3s" }}
                      >
                        <button
                          onClick={() => setOpenItem(isOpen ? null : id)}
                          style={{ width: "100%", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
                        >
                          <span style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600, color: isOpen ? "var(--cyan)" : "#fff", transition: "color 0.2s", lineHeight: 1.4 }}>{item.q}</span>
                          <div style={{ width: 28, height: 28, borderRadius: "50%", border: `1px solid ${isOpen ? "var(--cyan)" : "var(--border-subtle)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.3s", background: isOpen ? "rgba(29,223,184,0.1)" : "transparent" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "var(--cyan)" : "var(--text-muted)"} strokeWidth="2.5" style={{ transition: "transform 0.3s", transform: isOpen ? "rotate(45deg)" : "none" }}><path d="M12 5v14M5 12h14"/></svg>
                          </div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                              style={{ overflow: "hidden" }}
                            >
                              <div style={{ padding: "0 24px 24px", borderTop: "1px solid var(--border-subtle)" }}>
                                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--text-muted)", paddingTop: 16 }}>{item.a}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </FadeIn>
        </div>

        {/* Risk warning */}
        <FadeIn delay={0.2}>
          <div className="glass" style={{ borderRadius: 18, padding: "28px 32px", marginTop: 64, borderColor: "rgba(240,180,41,0.15)", display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div style={{ color: "var(--gold)", fontSize: 24, flexShrink: 0 }}>⚠</div>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, color: "var(--gold)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>Peringatan Risiko</p>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.7 }}>
                Trading forex, komoditas, dan instrumen keuangan lainnya mengandung risiko kerugian yang signifikan dan tidak cocok untuk semua investor. Pastikan Anda memahami sepenuhnya risiko yang terlibat dan hanya trading dengan dana yang Anda siap tanggung risikonya. Edukasi dan tools yang kami berikan bukan merupakan jaminan profit.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
