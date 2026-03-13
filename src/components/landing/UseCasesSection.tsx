"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";

const useCases = [
  {
    title: "C&I Energy Settlement",
    description:
      "Open-access C&I buyers with multi-source power contracts. Bridge Kernel verifies every unit from generation to billing, eliminating reconciliation disputes.",
    tone: "bg-jb-yellow",
  },
  {
    title: "EV Fleet Charging",
    description:
      "Depot and fleet charging operators with high-frequency sessions. Every charge session is metered, signed, and settled with cryptographic proof of energy delivered.",
    tone: "bg-jb-red",
  },
  {
    title: "Grid Event Audit",
    description:
      "Reconstruct the precise state of any grid-connected asset at any point in time. Signed event chains provide audit-ready evidence for regulators and counterparties.",
    tone: "bg-jb-accent",
  },
];

export function UseCasesSection() {
  return (
    <SectionWrapper className="bg-jb-dark">
      <Eyebrow className="mb-8">Use Cases</Eyebrow>

      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="jb-section-title max-w-3xl mb-10">
        Built for the workflows where{" "}
        <span className="jb-title-gradient jb-title-gradient-warm">
          weak evidence creates
        </span>{" "}
        real operational risk
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {useCases.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative flex min-h-[240px] flex-col justify-end overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,22,0.98),rgba(11,13,15,0.98))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.24)]">
            <div className={`absolute right-5 top-5 h-8 w-8 ${item.tone} opacity-70 shadow-[0_10px_28px_rgba(0,0,0,0.24)] transition-transform group-hover:scale-105`} />
            <h3 className="mb-3 text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm leading-relaxed text-jb-white/60">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
