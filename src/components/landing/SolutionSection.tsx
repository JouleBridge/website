"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { FlowLines } from "@/components/ui/FlowLines";
import { TextReveal } from "@/components/ui/TextReveal";

const solutions = [
  {
    title: "Deterministic capture",
    description:
      "JouleBridge starts at the edge. Data is captured close to the source and normalized into deterministic records before the evidence trail begins.",
  },
  {
    title: "Verifiable proof generation",
    description:
      "Events are canonicalized, hashed, signed, and wrapped with verification metadata so operators and counterparties can validate what happened.",
  },
  {
    title: "Policy-gated persistence",
    description:
      "Before records are accepted into the ledger, policy rules can reject stale, malformed, or risky flows. The result is a cleaner operational and settlement trail.",
  },
];

export function SolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const pathLength0 = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const pathLength1 = useTransform(scrollYProgress, [0.05, 0.55], [0, 1]);
  const pathLength2 = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  const pathLength3 = useTransform(scrollYProgress, [0.15, 0.65], [0, 1]);

  return (
    <div ref={sectionRef}>
      <SectionWrapper className="bg-jb-dark" lines={true}>
        <Eyebrow className="mb-4 text-white/60">The Solution</Eyebrow>

        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="jb-section-title max-w-3xl">
            Turn raw telemetry into{" "}
            <span className="jb-title-gradient">
              evidence that survives
            </span>{" "}
            audits, disputes, and handoffs.
          </motion.h2>
          <Button href="/product" variant="secondary">How It Works</Button>
        </div>

        <FlowLines pathLengths={[pathLength0, pathLength1, pathLength2, pathLength3]} />

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {solutions.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,22,0.98),rgba(11,13,15,0.98))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_70px_rgba(0,0,0,0.24)]">
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-white/60">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-white">{item.title}</h3>
              <p className="leading-relaxed text-jb-white/66">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <TextReveal
          text="One runtime. Deterministic proofs. Evidence that holds up when it matters most."
          highlightWords={["deterministic", "evidence"]}
          className="mt-10"
        />
      </SectionWrapper>
    </div>
  );
}
