"use client";

import { motion } from "framer-motion";

const internships = [
  {
    role: "Data Analyst Intern (Remote)",
    company: "Elevate Labs",
    duration: "Nov 2025 – Dec 2025",
    description:
      "Successfully completed a Data Analyst Internship, contributing to real-world projects and tasks. Demonstrated strong analytical thinking, professionalism, and dedication while working on data-driven problem solving.",
    achievements: ["Best Performer"],
    tech: ["Python", "Pandas", "Data Analysis"],
  },
  {
    role: "Machine Learning Intern (Remote)",
    company: "Cognifyz Technologies",
    duration: "Dec 2025 – Jan 2026",
    description:
      "Worked as a Machine Learning Intern, where I learned and applied basic ML concepts, completed assigned tasks responsibly, and gained hands-on experience by taking up new challenges.",
    tech: ["Machine Learning", "Python", "Model Training"],
  },
];

export default function Internship() {
  return (
    <section id="internship" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* TITLE — EXACT SAME AS PROJECTS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Internship
        </motion.h2>

        {/* SUBTITLE — EXACT SAME AS PROJECTS */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-white/70 text-lg max-w-3xl"
        >
          Hands-on industry experience gained through internships, focusing on
          data analysis, machine learning, and real-world problem solving.
        </motion.p>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {internships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                rounded-xl border border-sky-400/20
                bg-white/5 p-6
                hover:bg-sky-400/10
                hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]
                transition
              "
            >
              <h3 className="text-xl font-semibold text-sky-400">
                {item.role}
              </h3>

              <p className="mt-1 text-white/90 font-medium">
                {item.company}
              </p>

              <p className="mt-1 text-sm text-white/50">
                {item.duration}
              </p>

              <p className="mt-4 text-white/70 leading-relaxed">
                {item.description}
              </p>

              {item.achievements && (
                <div className="mt-4">
                  {item.achievements.map((a) => (
                    <span
                      key={a}
                      className="
                        inline-block mr-2 mb-2
                        px-3 py-1 text-xs font-semibold
                        rounded-full
                        bg-yellow-400/10
                        text-yellow-300
                        border border-yellow-400/30
                      "
                    >
                      🏆 {a}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-3">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="
                      px-3 py-1 rounded-full text-sm
                      border border-sky-400/30
                      text-sky-300
                      hover:bg-sky-400/10
                      transition
                    "
                  >
                    {t}
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
