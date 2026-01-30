"use client";

import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      const engine = await loadSlim;
      setInit(true);
    };

    initParticles();
  }, []);

  if (!init) return null;

  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Particles
        options={{
          fullScreen: false,
          fpsLimit: 60,
          background: {
            color: "transparent",
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "bubble",
              },
              onClick: {
                enable: false,
              },
            },
            modes: {
              bubble: {
                distance: 140,
                size: 3,
                duration: 2,
                opacity: 0.8,
              },
            },
          },
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
              },
            },
            color: {
              value: "#38bdf8",
            },
            opacity: {
              value: {
                min: 0.3,
                max: 0.5,
              },
            },
            size: {
              value: { min: 1, max: 3 },
            },
            move: {
              enable: true,
              speed: 0.5,
              random: true,
              outModes: {
                default: "out",
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
