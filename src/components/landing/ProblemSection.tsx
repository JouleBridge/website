"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Entropy } from "@/components/ui/Entropy";
import { TextReveal } from "@/components/ui/TextReveal";

const problems = [
  {
    title: "Mixed hardware, fragmented control.",
    description:
      "Meters, inverters, storage, solar, chargers, and flexible loads arrive from different vendors with different interfaces. The site ends up operating through disconnected tools instead of one control model.",
  },
  {
    title: "Cloud-only control breaks at the wrong time.",
    description:
      "Tariff windows close quickly. Batteries need a decision. Chargers need a command. If the site depends on a delayed or unavailable cloud path, the control stack fails when timing matters most.",
  },
  {
    title: "Most audit trails are reconstructed later.",
    description:
      "When operations, finance, or compliance asks what happened, the answer is often a spreadsheet, screenshots, and a best-effort explanation stitched together after the site already moved on.",
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
              Most distributed energy sites still operate through{" "}
              <span className="jb-title-gradient">
                disconnected vendor systems, delayed cloud control,
              </span>{" "}
              and weak audit trails.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="jb-section-copy"
            >
              The problem is not just visibility. The problem is operating a
              real site under tariff pressure, hardware constraints, and mixed
              control surfaces while still being able to explain what happened
              later.
            </motion.p>
          </div>

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
              className="overflow-hidden border border-jb-mid-gray/30"
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
              className="relative border border-jb-mid-gray/50 bg-jb-card/50 p-6"
            >
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-white/50">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-jb-white">
                {item.title}
              </h3>
              <p className="leading-relaxed text-jb-white/60">{item.description}</p>
              <span className="absolute left-[-1px] top-[-1px] h-[2px] w-[2px] bg-white/30" />
              <span className="absolute right-[-1px] top-[-1px] h-[2px] w-[2px] bg-white/30" />
              <span className="absolute bottom-[-1px] left-[-1px] h-[2px] w-[2px] bg-white/30" />
              <span className="absolute bottom-[-1px] right-[-1px] h-[2px] w-[2px] bg-white/30" />
            </motion.div>
          ))}
        </div>

        <TextReveal
          text="Local control when timing matters. Evidence attached when questions come later."
          highlightWords={["Local", "Evidence", "later."]}
          className="mt-10"
        />
      </div>
    </SectionWrapper>
  );
}
