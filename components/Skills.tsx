"use client";

import { motion } from "framer-motion";

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  Backend: ["Python", "FastAPI", "Node.js", "REST APIs"],
  "AI / ML": [
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "NumPy",
    "Scikit-learn",
  ],
  Fundamentals: [
    "DSA",
    "OOPs",
    "Operating Systems",
    "Computer Networks",
  ],
  Database: ["MySQL", "PostgreSQL"],
  "Developer Tools": ["Git", "GitHub", "VS Code"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Skills
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-white/70 text-lg max-w-3xl"
        >
          A comprehensive overview of my technical expertise across frontend,
          backend, AI/ML, and core computer science fundamentals.
        </motion.p>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                rounded-xl
                border border-sky-400/25
                bg-black
                p-6
                transition
                hover:border-sky-400/50
                hover:shadow-[0_0_28px_rgba(56,189,248,0.22)]
              "
            >
              <h3 className="text-xl font-semibold text-white/90 mb-4">
                {category}
              </h3>


              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-1 rounded-full text-sm
                      border border-sky-400/40
                      text-sky-300
                      transition
                      hover:bg-sky-400/10
                      hover:border-sky-400
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
