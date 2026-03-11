"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { FlowLines } from "@/components/ui/FlowLines";

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
      <SectionWrapper className="bg-jb-light-gray" lines={false}>
        <Eyebrow className="mb-4 text-[#5a6777]">The Solution</Eyebrow>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="jb-section-title-light max-w-3xl"
          >
            Turn raw telemetry into evidence that survives{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-jb-accent to-jb-green">
              audits, disputes, and handoffs.
            </span>
          </motion.h2>
          <Button
            href="/product"
            variant="secondary"
            className="border-[#cbd5df] text-[#101419] hover:bg-black/[0.03]"
          >
            How It Works
          </Button>
        </div>

        {/* Scroll-driven flow lines */}
        <div className="border border-[#dbe3ea] bg-white px-4 py-6 shadow-[0_18px_60px_rgba(15,23,35,0.06)] md:px-6 md:py-8">
          <FlowLines pathLengths={[pathLength0, pathLength1, pathLength2, pathLength3]} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative border border-[#dbe3ea] bg-white p-6"
            >
              <div className="font-mono text-xs text-jb-green/70 uppercase tracking-widest mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#101419]">
                {item.title}
              </h3>
              <p className="leading-relaxed text-[#556273]">{item.description}</p>
              <span className="absolute top-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-green/60" />
              <span className="absolute top-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-green/60" />
              <span className="absolute bottom-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-green/60" />
              <span className="absolute bottom-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-green/60" />
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
