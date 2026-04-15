"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DemoTerminal } from "@/components/ui/DemoTerminal";

export function DemoSection() {
  return (
    <SectionWrapper className="bg-jb-dark">
      <Eyebrow className="mb-4">See It Run</Eyebrow>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="jb-section-title mb-3 max-w-2xl"
      >
        Watch one site session{" "}
        <span className="text-jb-text-muted">
          from startup to evidence export
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="mb-8 max-w-2xl text-jb-text-muted"
      >
        A simplified site run: service startup, asset discovery, local
        decisioning, measured outcome, and the review-ready record that remains
        after.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.16 }}
        className="max-w-3xl"
      >
        <DemoTerminal />
      </motion.div>
    </SectionWrapper>
  );
}
