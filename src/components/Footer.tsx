import { useLocation } from "wouter";

const socials = [
  { label: "Instagram", href: "https://instagram.com/smci_edu", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg> },
  { label: "Telegram", href: "https://t.me/smciindonesia", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg> },
  { label: "YouTube", href: "https://youtube.com/@SMCI", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { label: "TikTok", href: "https://tiktok.com/@smcindonesia", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.28 8.28 0 0 0 4.83 1.56V6.86a4.84 4.84 0 0 1-1.07-.17z"/></svg> },
];

const links = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Mentor", href: "/mentors" },
  { label: "Testimoni", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/contact" },
];

export default function Footer() {
  const [, navigate] = useLocation();

  return (
    <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(255,255,255,0.12)", background: "rgba(8,18,40,0.80)", padding: "64px clamp(1.25rem,4vw,2.5rem) 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px,100%), 1fr))", gap: "clamp(28px,4vw,48px)", marginBottom: "48px" }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <img
                src="/logo-smci.png"
                alt="SMCI Community"
                style={{
                  height: 38,
                  width: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 8px rgba(0,201,177,0.5)) drop-shadow(0 0 20px rgba(0,201,177,0.25)) brightness(1.1)",
                }}
              />
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--text-muted)", marginBottom: 20 }}>
              Komunitas trading SMC terpercaya di Indonesia. Belajar, berkembang, dan profit bersama.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ color: "var(--text-muted)", transition: "color 0.2s", display: "flex" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--cyan)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", color: "var(--cyan)", marginBottom: 20, textTransform: "uppercase" }}>Navigasi</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {links.map(l => (
                <button key={l.href} onClick={() => { navigate(l.href); window.scrollTo({ top: 0 }); }}
                  style={{ background: "none", border: "none", textAlign: "left", cursor: "pointer", fontSize: "13px", color: "var(--text-muted)", transition: "color 0.2s", padding: 0 }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", color: "var(--cyan)", marginBottom: 20, textTransform: "uppercase" }}>Produk</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Private Mentoring Elite", "Private Mentoring Ultimate", "SMCI All-in-One Indicator", "SMCI Simple Entry", "SMCI Ebook"].map(p => (
                <span key={p} style={{ fontSize: "13px", color: "var(--text-muted)" }}>{p}</span>
              ))}
            </div>
          </div>

          {/* Warning */}
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", color: "#F0B429", marginBottom: 16, textTransform: "uppercase" }}>⚠ Peringatan Risiko</p>
            <p style={{ fontSize: "12px", lineHeight: 1.7, color: "var(--text-muted)" }}>
              Trading forex & instrumen keuangan mengandung risiko tinggi. Pastikan Anda memahami risiko sebelum memulai. Edukasi bukan jaminan profit.
            </p>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: 24 }} />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <p style={{ fontSize: "13px", color: "var(--text-subtle)" }}>
            &copy; {new Date().getFullYear()} SMCI Community. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <button
              onClick={() => { navigate("/privacy-policy"); window.scrollTo({ top: 0 }); }}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "13px", color: "var(--text-subtle)", padding: 0, transition: "color 0.2s", fontFamily: "var(--font-body)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--cyan)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-subtle)")}
            >
              Kebijakan Privasi
            </button>
            <p style={{ fontSize: "13px", color: "var(--text-subtle)" }}>
              Smart Money Concept Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
