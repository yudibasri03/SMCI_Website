import FadeIn from "../components/FadeIn";

const sections = [
  {
    title: "1. Informasi yang Kami Kumpulkan",
    content: `Ketika kamu menggunakan website SMCI Community (smci.co.id) dan melakukan pembelian produk, kami mengumpulkan informasi berikut:

• Nama lengkap
• Alamat email
• Nomor WhatsApp
• Data transaksi (produk yang dibeli, jumlah pembayaran, waktu transaksi)
• Informasi teknis (alamat IP, jenis browser, halaman yang dikunjungi)

Kami tidak menyimpan data kartu kredit atau informasi pembayaran sensitif. Seluruh proses pembayaran diproses langsung oleh Mayar.id sebagai payment gateway kami.`,
  },
  {
    title: "2. Penggunaan Informasi",
    content: `Informasi yang kami kumpulkan digunakan untuk:

• Memproses dan mengkonfirmasi pesanan pembelian produk
• Mengirimkan informasi akses produk (materi, jadwal mentoring)
• Menghubungi kamu melalui WhatsApp atau email terkait pesanan
• Memberikan dukungan pelanggan
• Meningkatkan layanan dan pengalaman pengguna website
• Mengirimkan informasi update produk dan promo (dengan persetujuanmu)

Kami tidak akan menggunakan informasimu untuk tujuan lain di luar yang disebutkan di atas tanpa persetujuanmu.`,
  },
  {
    title: "3. Berbagi Informasi dengan Pihak Ketiga",
    content: `SMCI Community tidak menjual, menyewakan, atau memperdagangkan informasi pribadimu kepada pihak ketiga untuk kepentingan komersial mereka.

Kami hanya membagikan informasi kepada:

• Mayar.id — sebagai payment gateway untuk memproses pembayaran
• Mentor SMCI — nama dan kontak kamu untuk keperluan akses mentoring yang kamu beli
• Penyedia layanan teknis — yang membantu operasional website (Vercel sebagai hosting)

Semua pihak ketiga diwajibkan menjaga kerahasiaan informasimu dan hanya menggunakannya sesuai dengan tujuan yang telah disepakati.`,
  },
  {
    title: "4. Keamanan Data",
    content: `Kami menerapkan langkah-langkah keamanan teknis dan operasional untuk melindungi informasimu, termasuk:

• Enkripsi HTTPS (SSL) pada seluruh komunikasi website
• API key dan kredensial disimpan di server, tidak pernah terekspos ke browser
• Rate limiting untuk mencegah akses tidak sah
• Webhook signature verification untuk validasi notifikasi pembayaran

Meskipun kami berusaha semaksimal mungkin, tidak ada sistem yang 100% aman. Kami akan memberitahumu jika terjadi pelanggaran keamanan yang berdampak pada datamu.`,
  },
  {
    title: "5. Cookie dan Teknologi Pelacakan",
    content: `Website kami menggunakan cookie dan teknologi serupa untuk:

• Menjaga sesi pengguna agar tetap aktif
• Menganalisis pola penggunaan website (melalui analytics anonim)
• Mengingat preferensi pengguna

Kamu dapat menonaktifkan cookie melalui pengaturan browser, namun beberapa fitur website mungkin tidak berfungsi optimal.

Kami tidak menggunakan cookie pihak ketiga untuk iklan bertarget.`,
  },
  {
    title: "6. Retensi Data",
    content: `Kami menyimpan informasi pribadimu selama:

• Data transaksi — disimpan selama 5 tahun untuk keperluan akuntansi dan audit
• Data kontak — selama kamu masih aktif sebagai pelanggan atau komunitas SMCI
• Data teknis (log) — maksimal 90 hari

Kamu dapat meminta penghapusan datamu kapan saja dengan menghubungi kami, kecuali data yang wajib kami simpan berdasarkan ketentuan hukum yang berlaku.`,
  },
  {
    title: "7. Hak-hak Kamu",
    content: `Sebagai pengguna, kamu memiliki hak untuk:

• Mengakses informasi pribadi yang kami simpan tentang kamu
• Meminta koreksi data yang tidak akurat
• Meminta penghapusan datamu (right to be forgotten)
• Menolak penggunaan datamu untuk keperluan pemasaran
• Mengajukan keluhan jika merasa privasi dilanggar

Untuk menggunakan hak-hak tersebut, hubungi kami melalui WhatsApp atau email yang tersedia di halaman Kontak.`,
  },
  {
    title: "8. Perubahan Kebijakan Privasi",
    content: `Kami dapat memperbarui Kebijakan Privasi ini sewaktu-waktu. Perubahan signifikan akan kami komunikasikan melalui:

• Pemberitahuan di website
• Email kepada pelanggan aktif

Tanggal pembaruan terakhir akan selalu tertera di bagian bawah halaman ini. Penggunaan berkelanjutan atas layanan kami setelah perubahan dianggap sebagai persetujuanmu terhadap kebijakan yang diperbarui.`,
  },
  {
    title: "9. Kontak",
    content: `Jika kamu memiliki pertanyaan, kekhawatiran, atau permintaan terkait privasi data, silakan hubungi kami:

• WhatsApp: Tersedia di halaman Kontak
• Email: Tersedia di halaman Kontak
• Alamat: Indonesia

Kami berkomitmen untuk merespons setiap pertanyaan privasi dalam waktu 3 hari kerja.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "clamp(80px, 12vw, 120px)", paddingBottom: 80 }}>
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)" }}>

        <FadeIn>
          {/* Header */}
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Legal</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              Kebijakan Privasi
            </h1>
            <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.7 }}>
              SMCI Community berkomitmen untuk melindungi privasi dan keamanan data pribadi kamu.
            </p>
            <p style={{ fontSize: "13px", color: "var(--text-subtle)", marginTop: 12 }}>
              Terakhir diperbarui: April 2025
            </p>
          </div>
        </FadeIn>

        {/* Intro box */}
        <FadeIn delay={0.1}>
          <div className="glass" style={{ borderRadius: 16, padding: "20px 24px", marginBottom: 32, borderColor: "rgba(0,201,177,0.2)" }}>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.75 }}>
              Kebijakan Privasi ini menjelaskan bagaimana <strong style={{ color: "var(--text-primary)" }}>SMCI Community</strong> mengumpulkan, menggunakan, dan melindungi informasi pribadi kamu saat menggunakan website{" "}
              <span style={{ color: "var(--cyan)" }}>smci.co.id</span> dan layanan yang kami tawarkan. Dengan menggunakan website dan layanan kami, kamu menyetujui praktik yang dijelaskan dalam kebijakan ini.
            </p>
          </div>
        </FadeIn>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {sections.map((s, i) => (
            <FadeIn key={s.title} delay={0.05 * i}>
              <div className="glass" style={{ borderRadius: 16, padding: "24px 28px" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, color: "var(--cyan)", marginBottom: 14 }}>
                  {s.title}
                </h2>
                <div style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.8, whiteSpace: "pre-line" }}>
                  {s.content}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Footer note */}
        <FadeIn delay={0.3}>
          <div style={{ marginTop: 32, padding: "16px 20px", borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-subtle)", textAlign: "center" }}>
            <p style={{ fontSize: "13px", color: "var(--text-subtle)", lineHeight: 1.7 }}>
              Kebijakan ini berlaku untuk website smci.co.id dan seluruh layanan SMCI Community.<br />
              Dengan melanjutkan penggunaan layanan kami, kamu menyetujui kebijakan ini.
            </p>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
