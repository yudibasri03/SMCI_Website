export default function AnimatedBackground() {
  return (
    <div className="bg-canvas">
      <div className="bg-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
      <div className="scanlines" />
      {/* Radial center glow — lighter than before */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 120% 80% at 50% 0%, rgba(8,80,95,0.5) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Bottom darkening */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
        background: "linear-gradient(to bottom, transparent, rgba(4,30,38,0.5))",
        pointerEvents: "none",
      }} />
    </div>
  );
}
