"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white"
        >
          Contact Me
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-3 text-white/70"
        >
          Have a project idea or job opportunity? Let’s connect!
        </motion.p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              rounded-2xl border border-sky-400/20
              bg-white/5 p-8
              hover:bg-sky-400/10
              hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]
              transition
            "
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Let’s Talk
            </h3>

            <p className="text-white/80 flex items-center gap-2">
              <FaEnvelope className="text-sky-400" />
              shankaraiml6665@gmail.com
            </p>

            <p className="mt-2 text-white/70">
              📍 Bengaluru, India
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/Shankar-K-6665"
                target="_blank"
                className="
                  flex items-center gap-2 px-4 py-2 rounded-full
                  border border-white/20 text-white/80
                  hover:border-sky-400 hover:text-sky-400
                  transition
                "
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shankar-k6665"
                target="_blank"
                className="
                  flex items-center gap-2 px-4 py-2 rounded-full
                  border border-white/20 text-white/80
                  hover:border-sky-400 hover:text-sky-400
                  transition
                "
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="
                rounded-2xl border border-sky-400/20
                bg-white/5 p-8
                hover:bg-sky-400/10
                hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]
                transition
              "
            >
              <input
                name="name"
                required
                placeholder="Your Name"
                className="input-field"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="input-field mt-4"
              />

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Your Message"
                className="input-field mt-4"
              />

              <button
                className="
                  mt-6 w-full bg-sky-500 text-black
                  py-3 rounded-lg font-medium
                  hover:bg-sky-400 transition
                "
              >
                Send Message
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="
                rounded-2xl border border-sky-400/20
                bg-white/5 p-8
                flex items-center justify-center
              "
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-sky-400">
                  Message Sent 🎉
                </h3>
                <p className="mt-2 text-white/70">
                  I’ll reply very soon.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
