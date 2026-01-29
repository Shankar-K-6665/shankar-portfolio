"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Certificate = {
  title: string;
  image: string;
};

const certificates: Certificate[] = [
   {
    title: "JavaScript Essentials 1",
    image: "/certificates/javascript_certificate.png",
  },
  {
    title: "Computer Networks And Internet Protocol (NPTEL)",
    image: "/certificates/cnn_certificate.png",
  },
    {
    title: "Machine Learning & AI Foundations Course",
    image: "/certificates/Ml.png",
  },
  
   {
    title: "Data Analyst Internship",
    image: "/certificates/data_analyst_intern_certificate.png",
  },
  {
    title: "SQL and Relational Databases",
    image: "/certificates/sql & db_certificate.png",
  },
  {
    title: "Machine Learning Internship",
    image: "/certificates/ml_intern_certificate.png",
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Certificates
        </motion.h2>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="
                cursor-pointer rounded-xl
                border border-sky-400/20
                bg-white/5 p-4
                hover:bg-sky-400/10
                transition
              "
              onClick={() => setSelected(cert)}
            >
              <Image
                src={cert.image}
                alt={cert.title}
                width={400}
                height={250}
                className="rounded-lg object-cover"
              />
              <p className="mt-4 text-white/80 font-medium text-center">
                {cert.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-50
              bg-black/80
              flex items-center justify-center
              px-4
            "
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.image}
                alt={selected.title}
                width={1000}
                height={700}
                className="rounded-xl"
              />
              <p className="mt-4 text-center text-white text-lg">
                {selected.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
