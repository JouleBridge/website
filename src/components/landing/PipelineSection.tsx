"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";

const steps = [
  {
    num: "01",
    title: "Capture",
    summary: "Receive telemetry or operational events at the edge.",
    input: "Webhook, file ingest, scanner input, or other baseline adapters",
    action: "Normalize records into a deterministic internal shape and reject obvious replay or structure issues early.",
    output: "A stable event object ready for proofing and policy review.",
  },
  {
    num: "02",
    title: "Prove",
    summary: "Attach cryptographic trust to the event record.",
    input: "Canonical event payload plus signing identity",
    action: "Hash the deterministic payload, sign it with Ed25519, and attach verification metadata for downstream consumers.",
    output: "A proof envelope that can be independently reviewed later.",
  },
  {
    num: "03",
    title: "Govern",
    summary: "Evaluate whether the record should be accepted.",
    input: "Proof-backed event plus active policy bundle",
    action: "Run policy checks before persistence so bad or out-of-policy events are quarantined instead of silently entering the ledger.",
    output: "Verified records move forward; exceptions are held for review.",
  },
];

export function PipelineSection() {
  return (
    <section className="relative bg-jb-section-alt py-16 md:py-20 section-lines">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow className="mb-3 text-white/60">Pipeline</Eyebrow>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="jb-section-title"
            >
              How <span className="text-[#D06120]">Bridge Kernel</span>{" "}
              <span className="text-jb-text-muted">
                turns raw telemetry into proof
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-4 text-jb-text-muted leading-relaxed"
            >
              Three deterministic steps — capture, prove, govern — take raw field
              data and deliver audit-ready evidence before reconciliation delays
              become disputes.
            </motion.p>
          </div>
          <Button href="/product" variant="secondary">
            Learn More
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
              <p className="mt-3 text-sm leading-relaxed text-jb-white/66">{step.summary}</p>

              <div className="mt-6 space-y-4">
                <div className="border border-white/6 bg-white/[0.025] p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-jb-text-muted">
                    Input
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-jb-white/78">{step.input}</p>
                </div>
                <div className="border border-white/6 bg-white/[0.025] p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-jb-text-muted">
                    What happens
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-jb-white/78">{step.action}</p>
                </div>
                <div className="border border-[#D06120]/20 bg-[#D06120]/5 p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D06120]">
                    Output
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white">{step.output}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <TextReveal
          text="Capture. Prove. Govern. Three steps between raw telemetry and audit-ready truth."
          highlightWords={["capture.", "prove.", "govern."]}
          className="mt-10"
        />
      </div>
    </section>
  );
}
