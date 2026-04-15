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
    title: "Run control where the site actually is",
    description:
      "Bridge Kernel reads every asset and keeps the control loop close to the hardware. The site can still respond safely when upstream connectivity is late, unstable, or unavailable.",
  },
  {
    title: "Keep a verifiable record of every important action",
    description:
      "Reads, dispatches, anomaly flags, and exports inherit the same signed record. Review does not depend on screenshots or operator memory after the fact.",
  },
  {
    title: "Start with one production site, then expand",
    description:
      "The first goal is one working site with a repeatable operating model. Once that is proven, the same runtime can be repeated across more sites with shared review surfaces.",
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
    <div ref={sectionRef} className="relative">
      <SectionWrapper className="bg-jb-dark" lines={true}>
        <Eyebrow className="mb-4 text-white/60">The Solution</Eyebrow>

        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="jb-section-title max-w-3xl"
          >
            One operating layer for{" "}
            <span className="jb-title-gradient">
              local control, site coordination, and auditable evidence
            </span>
            .
          </motion.h2>
          <Button href="/product" variant="secondary">
            See the Platform
          </Button>
        </div>

        <FlowLines
          pathLengths={[pathLength0, pathLength1, pathLength2, pathLength3]}
        />

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="jb-theme-shell relative overflow-hidden p-6"
            >
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-white/60">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-white">
                {item.title}
              </h3>
              <p className="leading-relaxed text-jb-white/66">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <TextReveal
          text="Control local. Evidence attached. Expansion optional."
          highlightWords={["Control", "Evidence", "optional."]}
          className="mt-10"
        />
      </SectionWrapper>
    </div>
  );
}
