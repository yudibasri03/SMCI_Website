export default function AnimatedBackground() {
  return (
    <div className="bg-canvas">
      <div className="bg-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
      <div className="scanlines" />
      {/* Soft top highlight */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "45%",
        background: "linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, transparent 100%)",
        pointerEvents: "none",
      }} />
      {/* Subtle bottom depth */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "35%",
        background: "linear-gradient(to bottom, transparent, rgba(5,40,50,0.4))",
        pointerEvents: "none",
      }} />
    </div>
  );
}
