"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BadgeCheck,
  FileSearch,
  GitBranch,
  ShieldCheck,
  TimerReset,
} from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const benefits = [
  {
    title: "3 weeks → 3 days reconciliation",
    text: "Proof-oriented evidence prepared before disputes escalate. Cleaner records, faster settlement.",
    icon: TimerReset,
    iconColor: "text-white",
    glow: "shadow-[0_0_24px_rgba(255,255,255,0.12)]",
    featured: true,
  },
  {
    title: "Tamper = broken signature",
    text: "Every reading signed at the edge with Ed25519. If a record is altered, the cryptographic proof breaks visibly.",
    icon: ShieldCheck,
    iconColor: "text-white/60",
    glow: "shadow-[0_0_24px_rgba(255,255,255,0.08)]",
    featured: false,
  },
  {
    title: "Source-to-settlement lineage",
    text: "Trace every event from field capture through proof generation to downstream review. No gaps in the chain.",
    icon: GitBranch,
    iconColor: "text-white/60",
    glow: "shadow-[0_0_24px_rgba(255,255,255,0.08)]",
    featured: false,
  },
  {
    title: "One evidence format everywhere",
    text: "DLMS, OCPP, Modbus, IEC 61850 — all normalized into a single verification-oriented format across sites and protocols.",
    icon: BadgeCheck,
    iconColor: "text-[#D06120]",
    glow: "shadow-[0_0_24px_rgba(208,97,32,0.18)]",
    featured: true,
  },
  {
    title: "Anomalies surface fast",
    text: "Unexpected edits, policy violations, and abnormal operating behavior become visible before they compound.",
    icon: Activity,
    iconColor: "text-white",
    glow: "shadow-[0_0_24px_rgba(255,255,255,0.12)]",
    featured: false,
  },
  {
    title: "Defensible records for disputes",
    text: "Customer, operator, and utility teams get a cryptographically verifiable record when settlement disputes appear.",
    icon: FileSearch,
    iconColor: "text-white/60",
    glow: "shadow-[0_0_24px_rgba(255,255,255,0.08)]",
    featured: false,
  },
];

export function BenefitsSection() {
  return (
    <section className="relative z-10 bg-jb-section-alt py-20 md:py-24">
      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <Eyebrow className="mb-4">Outcomes</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="jb-section-title max-w-3xl mb-12"
        >
          What changes when <span className="text-[#D06120]">evidence</span> is{" "}
          <span className="text-jb-text-muted">built in, not bolted on</span>
        </motion.h2>

        {/* Bento grid: Row 1 = 2+1, Row 2 = 1+2, Row 3 = 1+1+1 (only 2 items) */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`group relative flex flex-col justify-between p-6 transition-colors duration-300 hover:bg-jb-card-hover ${
                item.featured
                  ? "md:col-span-2 border-l-[3px] border-l-[#D06120] border border-white/8 bg-jb-section-elevated jb-shadow-card-featured"
                  : "border border-white/6 bg-jb-card jb-shadow-card"
              } ${item.featured ? "min-h-[200px]" : "min-h-[180px]"}`}
            >
              <div>
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center border border-white/10 bg-[linear-gradient(180deg,rgba(25,28,32,0.98),rgba(12,14,16,0.98))] ${item.glow}`}
                >
                  <item.icon className={`h-5 w-5 ${item.iconColor} stroke-[2.2]`} />
                </div>
                <h3 className="mb-2 font-display text-xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-jb-text-muted">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
