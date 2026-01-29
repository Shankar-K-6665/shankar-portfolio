"use client";

export default function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.035]"
      style={{
        backgroundImage: "url('/noise.png')",
        backgroundRepeat: "repeat",
      }}
    />
  );
}
