import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ProductCheckout {
  id: string;
  name: string;
  price: string;
  desc: string;
  color: string;
  mayarLink: string;
  originalPrice?: string;
}

interface Props {
  product: ProductCheckout | null;
  onClose: () => void;
}

const paymentMethods = [
  { label: "Transfer Bank", icon: "🏦" },
  { label: "QRIS",          icon: "📱" },
  { label: "E-Wallet",      icon: "💳" },
  { label: "Kartu Kredit",  icon: "💰" },
  { label: "Minimarket",    icon: "🏪" },
];

export default function CheckoutModal({ product, onClose }: Props) {
  const [step, setStep] = useState<"detail" | "pay">("detail");

  // Reset step when product changes
  useEffect(() => { if (product) setStep("detail"); }, [product]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = product ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [product]);

  const proceed = () => {
    // Redirect to Mayar payment link
    window.open(product!.mayarLink, "_blank", "noopener,noreferrer");
    onClose();
  };

  const rgb = product?.color === "var(--gold)" ? "240,180,41" : "0,201,177";

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{ position: "fixed", inset: 0, background: "rgba(5,12,30,0.85)", backdropFilter: "blur(8px)", zIndex: 200 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{  opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed", inset: 0, zIndex: 201,
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "16px", pointerEvents: "none",
            }}
          >
            <div style={{
              width: "100%", maxWidth: 480,
              background: "linear-gradient(135deg, #0d1f3c 0%, #0a1a32 100%)",
              border: `1px solid rgba(${rgb},0.25)`,
              borderRadius: 24, overflow: "hidden",
              boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(${rgb},0.1)`,
              pointerEvents: "all",
            }}>

              {/* Accent top */}
              <div style={{ height: 3, background: `linear-gradient(90deg, ${product.color} 0%, transparent 100%)` }} />

              {/* Header */}
              <div style={{ padding: "24px 28px 0", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: product.color }} />
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: `rgba(${rgb},0.8)` }}>
                      Checkout
                    </span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>
                    {product.name}
                  </h2>
                </div>
                <button onClick={onClose} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "rgba(255,255,255,0.6)", flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
                </button>
              </div>

              {/* Body */}
              <div style={{ padding: "20px 28px 28px" }}>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 20 }}>
                  {product.desc}
                </p>

                {/* Price */}
                <div style={{ padding: "16px 20px", borderRadius: 14, background: `rgba(${rgb},0.08)`, border: `1px solid rgba(${rgb},0.18)`, marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: product.originalPrice ? 4 : 0 }}>
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)" }}>Total Pembayaran</span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: product.color }}>
                      {product.price}
                    </span>
                  </div>
                  {product.originalPrice && (
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", textDecoration: "line-through" }}>{product.originalPrice}</span>
                      <span style={{ fontSize: "12px", color: "#22c55e", fontWeight: 700, marginLeft: 8 }}>Hemat!</span>
                    </div>
                  )}
                </div>

                {/* Payment methods */}
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>
                  Metode Pembayaran
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                  {paymentMethods.map(m => (
                    <div key={m.label} style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 10px", borderRadius: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}>
                      <span style={{ fontSize: 13 }}>{m.icon}</span>
                      <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button onClick={proceed}
                  style={{ width: "100%", padding: "15px", borderRadius: 14, border: "none", background: `linear-gradient(135deg, ${product.color} 0%, ${product.color === "var(--cyan)" ? "#00a896" : "#d4a017"} 100%)`, color: product.color === "var(--cyan)" ? "#003D38" : "#1a0f00", fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "opacity 0.2s", letterSpacing: "0.02em" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Lanjut Pembayaran
                </button>

                {/* Trust */}
                <div style={{ marginTop: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
                    Pembayaran diproses secara aman · PCI DSS · Enkripsi RSA
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
