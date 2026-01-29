"use client";

import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Particles
        init={particlesInit}
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
                mode: "bubble",   // bubble effect on hover
              },
              onClick: {
                enable: false,
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 150,
                size: 3,
                duration: 2,
                opacity: 0.8,
              },
              repulse: {
                distance: 120,
                duration: 0.4,
              },
            },
          },
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                area: 900,
              },
            },
            color: {
              value: "#38bdf8", // sky-blue like theme
            },
            opacity: {
              value: 0.5,
              random: { enable: true, minimumValue: 0.3 },
            },
            size: {
              value: { min: 1, max: 3 },
            },
            move: {
              enable: true,
              speed: 0.5,         // very smooth slow motion
              direction: "none",
              random: true,       // gentle direction randomness
              straight: false,
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
