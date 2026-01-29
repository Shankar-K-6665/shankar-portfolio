"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    let x = 50;
    let y = 50;

    const move = (e: MouseEvent) => {
      const tx = (e.clientX / window.innerWidth) * 100;
      const ty = (e.clientY / window.innerHeight) * 100;

      // smoothing (lerp)
      x += (tx - x) * 0.06;
      y += (ty - y) * 0.06;

      setPos({ x, y });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
  background: `
    radial-gradient(
      400px at ${pos.x}px ${pos.y}px,
      rgba(56,189,248,0.12),
      transparent 70%
    )
  `,
}}

    />
  );
}
