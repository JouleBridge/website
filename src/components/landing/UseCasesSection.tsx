"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ParallaxCard } from "@/components/ui/ParallaxCards";

const useCases = [
  {
    title: "Open-access industrial sites",
    description:
      "Factories, process plants, cold-chain sites, and data centers that need tighter control over batteries, solar, metering, and tariff-sensitive loads.",
    tone: "bg-[#D06120]",
  },
  {
    title: "EV fleet depots",
    description:
      "Depots with mixed charger hardware, hard departure windows, and site-level power constraints that cannot rely on slow or fragmented control.",
    tone: "bg-white/12",
  },
  {
    title: "Multi-site rollout",
    description:
      "After one site is working, the same operating model can be repeated across a portfolio with centralized review surfaces and consistent evidence output.",
    tone: "bg-white/8",
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
        className="jb-section-title mb-10 max-w-3xl"
      >
        One operating layer.{" "}
        <span className="jb-title-gradient">Multiple site types.</span> Same
        evidence model.
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {useCases.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <ParallaxCard className="group relative flex min-h-[240px] flex-col justify-end overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,22,0.98),rgba(11,13,15,0.98))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.24)]">
              <div
                className={`absolute right-5 top-5 h-8 w-8 ${item.tone} opacity-70 shadow-[0_10px_28px_rgba(0,0,0,0.24)] transition-transform group-hover:scale-105`}
              />
              <h3 className="mb-3 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-jb-white/60">
                {item.description}
              </p>
            </ParallaxCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
