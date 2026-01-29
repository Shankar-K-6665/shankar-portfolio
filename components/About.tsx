"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT – ABOUT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About Me
          </h2>

          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            I’m Shankar K, a Full Stack Developer and AI & ML Engineer. I build
            scalable web applications using Next.js, FastAPI, PostgreSQL, and
            cloud platforms.
          </p>

          <p className="mt-4 text-white/60">
            Location: Bengaluru, India
          </p>

          {/* LANGUAGES */}
          <div className="mt-6 flex flex-wrap gap-3">
            {["English", "Kannada", "Telugu", "Hindi"].map((lang) => (
              <span
                key={lang}
                className="
                  px-4 py-1 rounded-full text-sm
                  border border-sky-400/30
                  text-sky-300
                  hover:bg-sky-400/10
                  transition
                "
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT – PROFILE IMAGE (BELOW LANGUAGES STYLE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group">
            {/* Soft Glow */}
            <div className="
              absolute inset-0 rounded-full
              bg-sky-500/20 blur-3xl
              opacity-60 group-hover:opacity-90 transition
            " />

            {/* Profile Image */}
            <Image
              src="/images/profile.jpg"
              alt="Shankar Profile"
              width={260}
              height={260}
              className="
                relative rounded-full
                border border-sky-400/30
                object-cover
                transition-transform duration-300
                group-hover:scale-105
              "
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
