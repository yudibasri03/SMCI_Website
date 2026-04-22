export default function AnimatedBackground() {
  return (
    <div className="bg-canvas">
      <div className="bg-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
      <div className="orb orb-5" />
      <div className="scanlines" />
      {/* Top vignette - blue side */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "40%",
        background: "linear-gradient(to bottom, rgba(10,26,53,0.5) 0%, transparent 100%)",
        pointerEvents: "none",
      }} />
    </div>
  );
}
