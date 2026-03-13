"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Entropy } from "@/components/ui/Entropy";

const problems = [
  {
    title: "Telemetry changes meaning as it moves",
    description:
      "Field data passes through gateways, spreadsheets, operators, and settlement teams. By the time it matters, nobody can independently prove the original record.",
  },
  {
    title: "Reconciliation takes too long",
    description:
      "Energy operations still spend days or weeks reconciling mismatches across sites, systems, and counterparties. The delay is operationally expensive and commercially risky.",
  },
  {
    title: "Disputes start with weak evidence",
    description:
      "When a tariff, session, or operational dispute happens, the conversation often falls back to screenshots and spreadsheets instead of tamper-evident proof.",
  },
];

export function ProblemSection() {
  return (
    <SectionWrapper className="bg-jb-dark" lines={false}>
      <div className="relative z-10">
        <Eyebrow className="mb-4">The Problem</Eyebrow>

        <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="jb-section-title mb-4 max-w-4xl"
            >
              Critical energy workflows still rely on{" "}
              <span className="jb-title-gradient jb-title-gradient-cool">
                records that are hard to trust
              </span>
              .{" "}
              <span className="jb-title-gradient jb-title-gradient-warm">
                That breaks operations.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="jb-section-copy"
            >
              The issue is bigger than billing. Once telemetry becomes operationally or financially important,
              teams need deterministic records, audit trails, and evidence they can defend.
            </motion.p>
          </div>

          {/* Entropy visualization — order degrading into chaos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <Entropy
              size={280}
              labelLeft="Evidence"
              labelRight="Ambiguity"
              className="rounded-lg border border-jb-mid-gray/30 overflow-hidden"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-jb-mid-gray/50 bg-jb-card/50 p-6 relative"
            >
              <div className="font-mono text-xs text-jb-red/80 uppercase tracking-widest mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-jb-white mb-3">
                {item.title}
              </h3>
              <p className="text-jb-white/60 leading-relaxed">{item.description}</p>
              <span className="absolute top-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-red/60" />
              <span className="absolute top-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-red/60" />
              <span className="absolute bottom-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-red/60" />
              <span className="absolute bottom-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-red/60" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
