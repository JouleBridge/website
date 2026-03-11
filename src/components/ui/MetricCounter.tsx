"use client";

import { motion } from "framer-motion";

interface MetricCounterProps {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

export function MetricCounter({ value, label, suffix, prefix }: MetricCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">
        {prefix}
        {value}
        {suffix}
      </div>
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-jb-text-muted">
        {label}
      </div>
    </motion.div>
  );
}
