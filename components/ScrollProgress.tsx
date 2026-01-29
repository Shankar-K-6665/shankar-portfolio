"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-sky-400 z-[9999]"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
}
