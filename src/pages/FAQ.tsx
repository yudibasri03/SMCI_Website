import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import FadeIn from "../components/FadeIn";

const faqs = [
  { category: "Umum", items: [
    { q: "Apa itu SMCI Community?", a: "SMCI Community adalah komunitas trading Indonesia yang berfokus pada metode Smart Money Concept (SMC). Kami menyediakan program private mentoring, indicator eksklusif, ebook, dan komunitas aktif untuk membantu trader Indonesia berkembang." },
    { q: "Apa itu Smart Money Concept (SMC)?", a: "Smart Money Concept adalah pendekatan analisis pasar yang berfokus pada jejak pergerakan 'uang besar' seperti institusi, bank, dan hedge fund. Metode ini meliputi analisis Market Structure, Supply & Demand, Liquidity, dan Order Flow untuk mengidentifikasi posisi entry dengan probabilitas tinggi." },
    { q: "Apakah SMCI cocok untuk pemula?", a: "Ya! Kami memiliki program dan materi yang disesuaikan untuk berbagai level trader — dari pemula yang baru mengenal forex hingga trader berpengalaman yang ingin meningkatkan konsistensi profit." },
    { q: "Di mana komunitas SMCI bisa diakses?", a: "Komunitas SMCI aktif di Telegram dan Discord. Setelah bergabung dengan program kami, kamu akan mendapat akses ke grup eksklusif sesuai level program yang diikuti." },
  ]},
  { category: "Program Mentoring", items: [
    { q: "Apa perbedaan paket Elite, Ultimate, dan Per Mentor?", a: "Paket Elite: akses semua 4 mentor SMCI (Oscar, James, Wahyudi, Albert) dengan sesi 1-on-1 terjadwal, materi eksklusif, dan support grup. Paket Ultimate: semua dari Elite ditambah akses ke 1 mentor tamu eksklusif, sesi tak terbatas, panduan Prop Firm, dan priority support 24/7. Per Mentor: opsi fleksibel untuk fokus pada 1 mentor dan bidang spesifik — bisa dikombinasikan sesuai kebutuhan." },
    { q: "Bagaimana cara memilih mentor yang tepat?", a: "Tergantung tujuanmu: ingin fondasi SMC → Oscar. Ingin baca pergerakan institusi → James. Punya kendala psikologi atau ingin Prop Firm → Wahyudi. Ingin integrasikan analisis berita/fundamental → Albert. Kamu juga bisa konsultasikan dulu secara gratis dengan tim kami." },
    { q: "Berapa lama program mentoring berlangsung?", a: "Durasi program bervariasi sesuai paket yang dipilih. Untuk informasi detail tentang durasi, jadwal, dan harga, silakan hubungi tim kami melalui halaman Kontak." },
    { q: "Apakah ada garansi dalam program mentoring?", a: "SMCI berkomitmen memberikan edukasi berkualitas tinggi. Namun hasil trading sangat bergantung pada implementasi dan konsistensi masing-masing trader. Tidak ada sistem yang bisa menjamin profit di trading." },
    { q: "Bagaimana cara mendaftar program mentoring?", a: "Kamu bisa mendaftar melalui halaman Kontak kami. Tim akan menghubungimu untuk konsultasi gratis dan menjelaskan detail program yang paling sesuai dengan kebutuhan dan tujuan tradingmu." },
  ]},
  { category: "Indicator & Ebook", items: [
    { q: "Platform apa yang didukung indicator SMCI?", a: "SMCI All-in-One dan SMCI Simple Entry tersedia untuk platform TradingView. Pastikan kamu memiliki akun TradingView (free atau berbayar) untuk menggunakannya." },
    { q: "Berapa lama lisensi indicator berlaku?", a: "Durasi lisensi bervariasi tergantung paket yang dipilih — ada yang per bulan, 3 bulan, 6 bulan, hingga seumur hidup. Hubungi kami untuk informasi lebih lanjut." },
    { q: "Apakah SMCI Ebook cocok untuk pemula?", a: "Sangat cocok! Ebook SMCI ditulis dalam bahasa Indonesia yang mudah dipahami, dimulai dari konsep dasar SMC hingga setup trading advanced. Tidak perlu background khusus untuk memulai." },
    { q: "Apakah ada update untuk indicator?", a: "Ya, SMCI Indicator mendapat update berkala untuk meningkatkan performa dan akurasi. Update tersedia otomatis untuk pengguna aktif tanpa biaya tambahan." },
  ]},
  { category: "Trading & Risiko", items: [
    { q: "Apakah trading forex aman?", a: "Trading forex memiliki risiko tinggi dan tidak cocok untuk semua orang. Selalu gunakan manajemen risiko yang ketat, hanya trading dengan dana yang siap kamu tanggung risikonya." },
    { q: "Apa itu Prop Firm dan apakah SMCI membantu?", a: "Prop Firm adalah perusahaan yang menyediakan modal untuk trader yang lulus challenge. Paket Ultimate SMCI mencakup panduan khusus untuk mempersiapkan dan melewati challenge Prop Firm bersama mentor Wahyudi." },
    { q: "Berapa modal minimal untuk mulai trading?", a: "SMCI tidak merekomendasikan jumlah modal spesifik karena setiap trader memiliki situasi finansial yang berbeda. Yang terpenting adalah manajemen risiko yang baik — jangan pernah trading dengan dana yang tidak siap kamu tanggung risikonya." },
  ]},
];

export default function FAQ() {
  const [, navigate] = useLocation();
  const [activeCategory, setActiveCategory] = useState("Umum");
  const [openItem, setOpenItem] = useState<string | null>(null);

  const categories = faqs.map(f => f.category);
  const currentFaqs = faqs.find(f => f.category === activeCategory)?.items || [];

  return (
    <div style={{ padding: "100px clamp(1.25rem,5vw,3.5rem) 80px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        <FadeIn>
          <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>FAQ</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,6vw,4rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 16 }}>
            Pertanyaan<br /><span className="gradient-text">yang Sering Ditanya</span>
          </h1>
          <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 460, marginBottom: 40 }}>
            Temukan jawaban dari pertanyaan yang paling sering ditanyakan seputar SMCI Community, produk, dan trading.
          </p>
        </FadeIn>

        {/* Category tabs — horizontal scroll on mobile */}
        <FadeIn delay={0.1}>
          <div style={{ display: "flex", gap: 8, marginBottom: 32, overflowX: "auto", paddingBottom: 4, WebkitOverflowScrolling: "touch" as any }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => { setActiveCategory(cat); setOpenItem(null); }}
                style={{ padding: "9px 18px", borderRadius: 100, border: `1px solid ${activeCategory === cat ? "var(--cyan)" : "var(--border-subtle)"}`, background: activeCategory === cat ? "rgba(0,201,177,0.15)" : "transparent", color: activeCategory === cat ? "var(--cyan)" : "var(--text-muted)", fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap", flexShrink: 0 }}>
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* FAQ accordion */}
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.28 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {currentFaqs.map((item, i) => {
                const id = `${activeCategory}-${i}`;
                const isOpen = openItem === id;
                return (
                  <div key={id} className="glass" style={{ borderRadius: 14, overflow: "hidden", borderColor: isOpen ? "rgba(0,201,177,0.25)" : "var(--border-subtle)", transition: "border-color 0.3s" }}>
                    <button onClick={() => setOpenItem(isOpen ? null : id)}
                      style={{ width: "100%", padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 14 }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(14px,3vw,15px)", fontWeight: 600, color: isOpen ? "var(--cyan)" : "#fff", transition: "color 0.2s", lineHeight: 1.4 }}>{item.q}</span>
                      <div style={{ width: 26, height: 26, borderRadius: "50%", border: `1px solid ${isOpen ? "var(--cyan)" : "var(--border-subtle)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.3s", background: isOpen ? "rgba(0,201,177,0.12)" : "transparent" }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "var(--cyan)" : "var(--text-muted)"} strokeWidth="2.5" style={{ transition: "transform 0.3s", transform: isOpen ? "rotate(45deg)" : "none" }}><path d="M12 5v14M5 12h14"/></svg>
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}>
                          <div style={{ padding: "0 20px 20px", borderTop: "1px solid var(--border-subtle)" }}>
                            <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--text-muted)", paddingTop: 14 }}>{item.a}</p>
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

        {/* Quick contact + risk warning */}
        <FadeIn delay={0.15}>
          <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px,100%), 1fr))", gap: 16 }}>
            <div className="glass" style={{ borderRadius: 16, padding: "22px", borderColor: "rgba(0,201,177,0.12)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 700, marginBottom: 8 }}>Tidak menemukan jawaban?</p>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 16 }}>Tim kami siap membantu menjawab pertanyaanmu.</p>
              <button onClick={() => navigate("/contact")} className="btn-primary" style={{ padding: "10px 20px", fontSize: "12px", width: "100%", justifyContent: "center" }}>Hubungi Kami</button>
            </div>
            <div className="glass" style={{ borderRadius: 16, padding: "22px", borderColor: "rgba(245,200,66,0.15)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, color: "var(--gold)", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>⚠ Peringatan Risiko</p>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.7 }}>
                Trading forex & instrumen keuangan mengandung risiko tinggi. Pastikan Anda memahami risiko sebelum memulai. Edukasi bukan jaminan profit.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
