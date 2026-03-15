"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent"
    />
  );
}
