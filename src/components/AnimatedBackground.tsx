export default function AnimatedBackground() {
  return (
    <div className="bg-canvas">
      <div className="bg-grid" />
      {/* Subtle orbs for non-hero sections */}
      <div className="orb orb-3" />
      <div className="orb orb-4" />
      <div className="scanlines" />
    </div>
  );
}
