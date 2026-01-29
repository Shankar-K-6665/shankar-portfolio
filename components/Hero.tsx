"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { useEffect, useState } from "react";
import CursorGlow from "@/components/CursorGlow";
import NoiseOverlay from "@/components/NoiseOverlay";
import BackgroundDots from "@/components/BackgroundDots";

const roles = [
  "Full Stack Developer (Next.js, FastAPI)",
  "AI & ML Engineer",
  "Backend Engineer (FastAPI, PostgreSQL)",
  "Frontend Developer (React, Tailwind)",
];


export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  /* typing effect */
  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const t = setTimeout(() => {
        setText(roles[roleIndex].slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCharIndex(0);
        setRoleIndex((r) => (r + 1) % roles.length);
        setText("");
      }, 1200);
      return () => clearTimeout(t);
    }
  }, [charIndex, roleIndex]);

  /* cursor glow */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `
          radial-gradient(
            600px at ${mouse.x}% ${mouse.y}%,
            rgba(56,189,248,0.18),
            transparent 60%
          ),
          linear-gradient(to bottom, #000000, #020617, #000000)
        `,
      }}
    >
      <BackgroundDots />
      <CursorGlow />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6 min-h-screen">

{/* LEFT – ROBOT IMAGE WITH CIRCULAR BACKGROUND */}
<div className="flex items-center justify-center relative">

  {/* CIRCULAR BACKGROUND */}
  <div
    className="
      absolute
      w-[360px] h-[360px]
      rounded-full
      bg-sky-500/5
      blur-3xl
    "
  />

  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative z-10"
  >
    <Image
      src="/images/robot.png"
      alt="AI Robot"
      width={340}
      height={500}
      className="object-contain"
      priority
    />
  </motion.div>
</div>





        {/* RIGHT – CONTENT */}
<div className="flex flex-col items-center md:items-start">

  {/* Heading (left aligned on desktop) */}
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-4xl md:text-6xl font-bold text-white text-center md:text-left"
  >
    Hi, I’m <span className="text-sky-400">Shankar K</span>
  </motion.h1>

  {/* CENTERED CONTENT BLOCK */}
  <div className="mt-6 flex flex-col items-center w-full">

    {/* Typing text */}
    <p className="text-xl text-sky-400 h-8 text-center">
      {text}
      <span className="animate-pulse">|</span>
    </p>

    {/* Social Links */}
    <div className="mt-6 flex gap-4 justify-center">
      <a className="pill" href="https://github.com/Shankar-K-6665" target="_blank">
        <FaGithub /> GitHub
      </a>
      <a className="pill" href="https://www.linkedin.com/in/shankar-k6665" target="_blank">
        <FaLinkedin /> LinkedIn
      </a>
      <a className="pill" href="mailto:shankaraiml6665@gmail.com">
        <FaEnvelope /> Email
      </a>
    </div>

    {/* Buttons */}
    <div className="mt-8 flex gap-4 justify-center">
      <a href="#projects" className="btn-primary">
        View Projects
      </a>
      <a
        href="/resume/Shankar_K_Resume.pdf"
        download
        className="btn-outline flex items-center gap-2"
      >
        <FaDownload /> Resume
      </a>
    </div>

  </div>
</div>


      </div>
    </section>
  );
}