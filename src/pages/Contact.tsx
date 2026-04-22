import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

const channels = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
    name: "WhatsApp",
    desc: "Chat langsung dengan tim SMCI",
    detail: "Respons dalam 1-2 jam",
    href: "https://wa.me/6281234567890?text=Halo%20SMCI%2C%20saya%20ingin%20bertanya%20tentang%20program",
    color: "#25D366",
    label: "Chat di WhatsApp",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>,
    name: "Telegram",
    desc: "Bergabung komunitas Telegram SMCI",
    detail: "10,000+ anggota aktif",
    href: "https://t.me/smciindonesia",
    color: "#229ED9",
    label: "Gabung Telegram",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>,
    name: "Instagram",
    desc: "Follow untuk update & analisa market",
    detail: "@smci_edu",
    href: "https://instagram.com/smci_edu",
    color: "#E1306C",
    label: "Follow Instagram",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
    name: "YouTube",
    desc: "Tonton konten edukasi trading gratis",
    detail: "Video analisa & tutorial",
    href: "https://youtube.com/@SMCI",
    color: "#FF0000",
    label: "Subscribe YouTube",
  },
];

const interests = [
  "Private Mentoring Elite",
  "Private Mentoring Ultimate",
  "Mentoring Per Mentor — Oscar (SMCI Strategy)",
  "Mentoring Per Mentor — James (Volume Profile)",
  "Mentoring Per Mentor — Wahyudi (Psikologi & Propfirm)",
  "Mentoring Per Mentor — Albert (News & Fundamental)",
  "SMCI All-in-One Indicator",
  "SMCI Simple Entry",
  "SMCI Ebook",
  "Konsultasi dulu (belum tahu pilih apa)",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", wa: "", interest: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const msg = encodeURIComponent(
      `Halo SMCI Community!\n\nNama: ${form.name}\nNo. WA: ${form.wa}\nMinat: ${form.interest}\n\nPesan:\n${form.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/6281234567890?text=${msg}`, "_blank");
      setSending(false);
      setSent(true);
      setForm({ name: "", wa: "", interest: "", message: "" });
    }, 800);
  };

  return (
    <div style={{ paddingTop: 100, paddingBottom: 96, padding: "100px clamp(1.5rem,5vw,3.5rem) 96px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <FadeIn>
          <span className="tag" style={{ marginBottom: 20, display: "inline-block" }}>Hubungi Kami</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 20 }}>
            Mulai Perjalanan<br />
            <span className="gradient-text">Trading Kamu</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 480, marginBottom: 64 }}>
            Tim SMCI siap membantu kamu memilih program yang tepat. Hubungi kami melalui channel favorit kamu.
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          {/* Left: channels + info */}
          <FadeIn direction="left">
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 20 }}>Channel Kontak</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 48 }}>
                {channels.map((ch, i) => (
                  <motion.a
                    key={ch.name}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    className="glass glass-hover"
                    style={{ borderRadius: 16, padding: "20px 24px", display: "flex", alignItems: "center", gap: 18, textDecoration: "none", borderColor: "var(--border-subtle)", cursor: "pointer" }}
                  >
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: `rgba(${ch.color.replace("#", "").match(/../g)?.map(x => parseInt(x, 16)).join(",")},0.12)`, border: `1px solid rgba(${ch.color.replace("#", "").match(/../g)?.map(x => parseInt(x, 16)).join(",")},0.25)`, display: "flex", alignItems: "center", justifyContent: "center", color: ch.color, flexShrink: 0 }}>
                      {ch.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, color: "#fff", marginBottom: 4 }}>{ch.name}</div>
                      <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{ch.desc}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: "13px", color: ch.color, fontWeight: 600, marginBottom: 4 }}>{ch.detail}</div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Office hours */}
              <div className="glass" style={{ borderRadius: 18, padding: "28px", borderColor: "rgba(0,201,177,0.1)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan)", marginBottom: 16 }}>Jam Operasional</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { day: "Senin – Jumat", time: "09.00 – 21.00 WIB" },
                    { day: "Sabtu", time: "09.00 – 17.00 WIB" },
                    { day: "Minggu & Libur", time: "Komunitas aktif, CS terbatas" },
                  ].map(r => (
                    <div key={r.day} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 12, borderBottom: "1px solid var(--border-subtle)" }}>
                      <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>{r.day}</span>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: "#fff" }}>{r.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="right">
            <div className="glass" style={{ borderRadius: 24, padding: "40px", position: "relative", overflow: "hidden", borderColor: "rgba(0,201,177,0.12)" }}>
              <div className="card-accent-top" />

              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "48px 24px" }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(0,201,177,0.1)", border: "1px solid rgba(0,201,177,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, marginBottom: 12 }}>Pesan Terkirim!</h3>
                  <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 28 }}>Tim SMCI akan segera menghubungimu melalui WhatsApp. Biasanya dalam 1-2 jam kerja.</p>
                  <button onClick={() => setSent(false)} className="btn-outline">Kirim Pesan Lain</button>
                </motion.div>
              ) : (
                <>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, marginBottom: 8 }}>Kirim Pesan</h3>
                  <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: 28 }}>Isi form ini dan kami akan menghubungimu via WhatsApp.</p>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    {/* Name */}
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 10 }}>Nama Lengkap *</label>
                      <input
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Nama kamu"
                        style={{ width: "100%", padding: "13px 16px", borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff", fontSize: "14px", outline: "none", transition: "border-color 0.2s", fontFamily: "var(--font-body)" }}
                        onFocus={e => (e.target.style.borderColor = "var(--cyan)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                      />
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 10 }}>Nomor WhatsApp *</label>
                      <input
                        required
                        value={form.wa}
                        onChange={e => setForm(f => ({ ...f, wa: e.target.value }))}
                        placeholder="0812xxxxxxxx"
                        type="tel"
                        style={{ width: "100%", padding: "13px 16px", borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff", fontSize: "14px", outline: "none", transition: "border-color 0.2s", fontFamily: "var(--font-body)" }}
                        onFocus={e => (e.target.style.borderColor = "var(--cyan)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                      />
                    </div>

                    {/* Interest */}
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 10 }}>Minat Produk</label>
                      <select
                        value={form.interest}
                        onChange={e => setForm(f => ({ ...f, interest: e.target.value }))}
                        style={{ width: "100%", padding: "13px 16px", borderRadius: 12, background: "rgba(8,65,80,0.92)", border: "1px solid rgba(255,255,255,0.08)", color: form.interest ? "#fff" : "var(--text-muted)", fontSize: "14px", outline: "none", transition: "border-color 0.2s", fontFamily: "var(--font-body)", cursor: "pointer" }}
                        onFocus={e => (e.target.style.borderColor = "var(--cyan)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                      >
                        <option value="" style={{ background: "#050D14" }}>Pilih produk yang diminati</option>
                        {interests.map(i => <option key={i} value={i} style={{ background: "#050D14" }}>{i}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 10 }}>Pesan</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        placeholder="Ceritakan tujuan trading dan pertanyaan kamu..."
                        style={{ width: "100%", padding: "13px 16px", borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff", fontSize: "14px", outline: "none", transition: "border-color 0.2s", fontFamily: "var(--font-body)", resize: "vertical", minHeight: 100 }}
                        onFocus={e => (e.target.style.borderColor = "var(--cyan)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                      />
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "15px", opacity: sending ? 0.7 : 1 }} disabled={sending}>
                      {sending ? "Mengirim..." : (
                        <>
                          Kirim via WhatsApp
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </>
                      )}
                    </button>
                    <p style={{ fontSize: "13px", color: "var(--text-muted)", textAlign: "center" }}>Kamu akan diarahkan ke WhatsApp untuk melanjutkan percakapan.</p>
                  </form>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
