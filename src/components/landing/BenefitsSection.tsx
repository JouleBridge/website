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
    text: "Create a stronger audit trail between field telemetry and the records used by operations, finance, and compliance teams.",
    icon: FileSearch,
    iconColor: "text-[#fb7185]",
    glow: "shadow-[0_0_24px_rgba(251,113,133,0.18)]",
  },
  {
    text: "Shorten reconciliation effort by preparing cleaner, proof-oriented evidence before disputes escalate.",
    icon: TimerReset,
    iconColor: "text-[#7dd3fc]",
    glow: "shadow-[0_0_24px_rgba(125,211,252,0.18)]",
  },
  {
    text: "Trace events from source capture through proof generation and downstream review with clearer lineage.",
    icon: GitBranch,
    iconColor: "text-[#60a5fa]",
    glow: "shadow-[0_0_24px_rgba(96,165,250,0.18)]",
  },
  {
    text: "Raise confidence that unexpected edits, policy violations, and abnormal operating behavior are visible sooner.",
    icon: Activity,
    iconColor: "text-[#f59e0b]",
    glow: "shadow-[0_0_24px_rgba(245,158,11,0.18)]",
  },
  {
    text: "Give customer, operator, and utility teams a more defensible record to review when settlement disputes appear.",
    icon: ShieldCheck,
    iconColor: "text-[#f472b6]",
    glow: "shadow-[0_0_24px_rgba(244,114,182,0.18)]",
  },
  {
    text: "Use one verification-oriented operating model across sites and asset workflows instead of one-off evidence handling.",
    icon: BadgeCheck,
    iconColor: "text-[#34d399]",
    glow: "shadow-[0_0_24px_rgba(52,211,153,0.18)]",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative z-10 bg-jb-dark py-20 section-lines md:py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <Eyebrow className="mb-4">Benefits</Eyebrow>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="jb-section-title max-w-3xl mb-10">
          Why a{" "}
          <span className="jb-title-gradient jb-title-gradient-cool">
            stronger evidence layer
          </span>{" "}
          matters
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,22,0.98),rgba(11,13,15,0.98))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.24)]">
              <div className={`mb-4 flex h-12 w-12 items-center justify-center border border-white/10 bg-[linear-gradient(180deg,rgba(25,28,32,0.98),rgba(12,14,16,0.98))] ${item.glow}`}>
                <item.icon className={`h-5 w-5 ${item.iconColor} stroke-[2.2]`} />
              </div>
              <p className="leading-relaxed text-jb-white/70">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
