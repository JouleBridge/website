"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";

const steps = [
  {
    num: "01",
    title: "Observe",
    summary: "Turn mixed hardware into one usable site picture.",
    input:
      "Raw telemetry, limits, and state from meters, inverters, storage, solar, chargers, and flexible loads",
    action:
      "Normalize mixed-vendor signals into one local site state the runtime and on-device models can reason about consistently.",
    output: "A current, usable site picture that is ready for local decisions.",
  },
  {
    num: "02",
    title: "Route",
    summary: "Turn policy and constraints into feasible local action.",
    input:
      "Site state, active policy, safety envelope, tariff windows, and forecast outputs",
    action:
      "Choose feasible actions, issue commands locally, and keep the site inside safe operating boundaries when timing matters.",
    output: "A local action the site can execute and explain later.",
  },
  {
    num: "03",
    title: "Prove",
    summary: "Attach evidence to what the site actually did.",
    input:
      "Intent, command acknowledgement, measurement, anomaly flags, and model context",
    action:
      "Package the full record with signing, timestamps, and operating context so later review does not depend on reconstruction.",
    output: "A review-ready evidence bundle instead of a disputed after-action story.",
  },
];

export function PipelineSection() {
  return (
    <section className="relative bg-jb-section-alt py-16 section-lines md:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow className="mb-3 text-white/60">Operating Loop</Eyebrow>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="jb-section-title"
            >
              How <span className="text-[#D06120]">JouleBridge</span>{" "}
              <span className="text-jb-text-muted">
                runs the site loop in one pass
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-4 leading-relaxed text-jb-text-muted"
            >
              Observe the site, route feasible local actions, and attach
              evidence before the event disappears into reporting noise.
            </motion.p>
          </div>
          <Button href="/product" variant="secondary">
            Platform Details
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.article
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="jb-panel p-5 sm:p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="font-mono text-xs uppercase tracking-[0.22em] text-white/60">
                  Step {step.num}
                </div>
                <div className="h-2.5 w-2.5 bg-[#D06120] shadow-[0_0_8px_rgba(208,97,32,0.4)]" />
              </div>

              <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-jb-white/66">
                {step.summary}
              </p>

              <div className="mt-6 space-y-4">
                <div className="border border-white/6 bg-white/[0.025] p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-jb-text-muted">
                    Input
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-jb-white/78">
                    {step.input}
                  </p>
                </div>
                <div className="border border-white/6 bg-white/[0.025] p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-jb-text-muted">
                    What happens
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-jb-white/78">
                    {step.action}
                  </p>
                </div>
                <div className="border border-[#D06120]/20 bg-[#D06120]/5 p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D06120]">
                    Output
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white">
                    {step.output}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <TextReveal
          text="Observe. Route. Prove. One loop from site state to review-ready evidence."
          highlightWords={["Observe.", "Route.", "Prove."]}
          className="mt-10"
        />
      </div>
    </section>
  );
}
