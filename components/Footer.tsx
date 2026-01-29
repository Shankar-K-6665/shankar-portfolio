"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        
        {/* LEFT → COPYRIGHT */}
        <p className="text-sm text-white/60">
          © 2026 <span className="text-white">Shankar K</span>. All rights reserved.
        </p>

        {/* RIGHT → SOCIAL LINKS */}
        <div className="flex items-center gap-5 text-white/70">
          <a
            href="https://github.com/Shankar-K-6665"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/shankar-k6665"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="mailto:shankaraiml6665@gmail.com"
            className="hover:text-sky-400 transition"
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}
