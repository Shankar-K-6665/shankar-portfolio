"use client";

import { motion } from "framer-motion";

export default function BackgroundDots() {
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf820_1px,transparent_1px)] bg-[size:22px_22px] animate-dots" />
    </motion.div>
  );
}
