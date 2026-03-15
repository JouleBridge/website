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
        className="jb-section-title max-w-2xl mb-3"
      >
        Watch Bridge Kernel{" "}
        <span className="text-jb-text-muted">
          sign, verify, and govern
        </span>{" "}
        in real time
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="text-jb-text-muted max-w-2xl mb-8"
      >
        Step through an operator session: runtime startup, device input,
        deterministic event handling, proof generation, and a policy violation
        caught before it reaches the ledger.
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
