"use client";

import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";

const projects = [
  {
    title: "Synthetic Data Generator for Startups",
    desc: "Built a synthetic data generation platform to help startups test analytics and ML pipelines without using real customer data. Implemented filters, visualizations, and CSV export for rapid experimentation.",
    tech: ["Python", "Streamlit", "Faker"],
    github: "https://github.com/Shankar-K-6665/Synthetic-Data-Generator",
    live: "https://synthetic-data-generator-ddhwd3m5jbvtglrgxqrjex.streamlit.app/",
  },
  {
    title: "Rental Car Website",
    desc: "Developed a full-stack car rental web application enabling users to browse, filter, and book vehicles. Implemented backend APIs and database integration for real-time availability and booking management.",
    tech: ["React", "Node", "SQL"],
    github: "https://github.com/Shankar-K-6665/Rentacar-ReactJS",
    live: "https://rentacar-reactjs.vercel.app/",
  },
  {
    title: "YouTube Trending Analytics Dashboard",
    desc: "Designed an analytics dashboard to analyze YouTube trending videos using KPIs and data visualizations. Extracted insights from large datasets to identify trends and performance metrics.",
    tech: ["Python", "SQL", "Power BI"],
    github: "https://github.com/Shankar-K-6665/YouTube-Trending-Analytics",
    live: "",
  },
  {
    title: "AI-Powered Startup Recommendation Engine",
    desc: "Built an AI-driven platform that recommends startup ideas and funding strategies based on user inputs. Implemented secure APIs, authentication, and real-time communication features using modern backend technologies.",
    tech: ["FastAPI", "PostgreSQL", "JWT", "Docker", "WebSockets"],
    github: "https://github.com/Shankar-K-6665/Startup-Recommendation-Engine",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Projects
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-white/70 text-lg max-w-3xl"
        >
        </motion.p>
        <p className="mt-3 text-white/60 text-base max-w-3xl">
          Each project focuses on solving real-world problems using scalable and modern technologies.
        </p>


        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
              className="
                rounded-2xl border border-sky-400/20
                bg-white/5 p-6 backdrop-blur-md
                hover:border-sky-400/50
                hover:bg-sky-400/10
                hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]
                transition
              "
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-white/60">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="
                      text-sm px-3 py-1 rounded-full
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

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" colorScheme="blue">
                    GitHub 
                  </Button>
                </a>

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" colorScheme="blue">
                      Live Demo
                    </Button>
                  </a>
                ) : (
                  <Button size="sm" variant="outline" colorScheme="gray" isDisabled>
                    Live Demo
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
