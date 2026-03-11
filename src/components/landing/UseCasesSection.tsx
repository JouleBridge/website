"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";

const useCases = [
  {
    title: "C&I Energy Settlement",
    description:
      "Open-access C&I buyers with multi-source power contracts. Bridge Kernel verifies every unit from generation to billing, eliminating reconciliation disputes.",
    color: "bg-jb-yellow",
  },
  {
    title: "EV Fleet Charging",
    description:
      "Depot and fleet charging operators with high-frequency sessions. Every charge session is metered, signed, and settled with cryptographic proof of energy delivered.",
    color: "bg-jb-pink",
  },
  {
    title: "Grid Event Audit",
    description:
      "Reconstruct the precise state of any grid-connected asset at any point in time. Signed event chains provide audit-ready evidence for regulators and counterparties.",
    color: "bg-jb-green",
  },
];

export function UseCasesSection() {
  return (
    <SectionWrapper className="bg-jb-dark">
      <Eyebrow className="mb-8">Use Cases</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="jb-section-title max-w-3xl mb-10"
      >
        Built for the workflows where weak evidence creates{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-jb-pink to-jb-accent">
          real operational risk
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {useCases.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative border border-jb-mid-gray bg-jb-card p-6 min-h-[220px] flex flex-col justify-end overflow-hidden group hover:border-jb-accent/30 transition-colors"
          >
            {/* Colored accent square */}
            <div
              className={`absolute top-4 right-4 w-8 h-8 ${item.color} opacity-80 transition-transform group-hover:scale-110`}
            />
            {/* Corner dots */}
            <span className="absolute top-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-text-muted" />
            <span className="absolute top-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-text-muted" />
            <span className="absolute bottom-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-text-muted" />
            <span className="absolute bottom-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-text-muted" />

            <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
            <p className="text-jb-white/60 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
