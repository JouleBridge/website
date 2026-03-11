"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ProofCycleDiagram } from "@/components/ui/ProofCycleDiagram";

const solutions = [
  {
    id: "energy-settlement",
    eyebrow: "Solution 01",
    title: "C&I Energy Settlement",
    color: "bg-jb-yellow",
    accentBorder: "border-jb-yellow/30",
    problem:
      "Open-access C&I buyers juggle multiple contracts, sites, and counterparties. When the evidence trail is weak, reconciliation takes too long and confidence falls apart.",
    solution:
      "JouleBridge creates a stronger operational record for the data settlement teams depend on, reducing ambiguity before it turns into commercial friction.",
    capabilities: [
      "Deterministic event records",
      "Proof-oriented telemetry workflow",
      "Clearer handoff between field and finance teams",
      "Stronger audit and evidence posture",
      "Pilot-friendly deployment model",
    ],
    outcome: "Build a stronger settlement record and cut down the time spent defending what happened.",
    docsLink: "/docs/examples/energy-settlement",
  },
  {
    id: "ev-charging",
    eyebrow: "Solution 02",
    title: "EV Fleet Charging",
    color: "bg-jb-pink",
    accentBorder: "border-jb-pink/30",
    problem:
      "Fleet and depot charging workflows create dense session data and frequent exceptions. Weak telemetry handling makes audits, billing, and operational diagnosis harder than they should be.",
    solution:
      "The EV workflow is a strong fit for verified telemetry because session data, operating events, and settlement records all depend on a clean evidence chain.",
    capabilities: [
      "Session-level telemetry structure",
      "Evidence-first operational record",
      "Better dispute handling support",
      "Clearer operational investigation trail",
      "Pilotable deployment path",
    ],
    outcome: "Create a more defensible operating and settlement trail for fleet charging workflows.",
    docsLink: "/docs/examples/ev-charging",
  },
  {
    id: "grid-audit",
    eyebrow: "Solution 03",
    title: "Grid Event Audit",
    color: "bg-jb-green",
    accentBorder: "border-jb-green/30",
    problem:
      "When operators or regulators need to reconstruct what happened, mutable logs and fragmented records make investigations slow and difficult to trust.",
    solution:
      "A deterministic event trail makes grid and asset investigations much easier to reconstruct and explain when counterparties or regulators ask hard questions.",
    capabilities: [
      "Event-history reconstruction support",
      "Stronger audit posture",
      "Clearer incident timelines",
      "Evidence-pack oriented outputs",
      "Operational trust for investigations",
    ],
    outcome: "Reduce ambiguity in investigations by keeping a cleaner and more verifiable event history.",
    docsLink: "/docs/examples/grid-audit",
  },
];

export function SolutionsContent() {
  return (
    <>
      <SectionWrapper className="bg-jb-dark pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-10 items-center">
          <div>
            <Eyebrow className="mb-6">Solutions</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="jb-section-title max-w-3xl mb-6"
            >
              Where stronger telemetry evidence changes the operating outcome
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="jb-section-copy"
            >
              JouleBridge is aimed at the workflows where operators need stronger
              evidence, cleaner audits, and less ambiguity between field events and
              business decisions.
            </motion.p>
          </div>
          <div className="rounded-[28px] border border-[#d8e0e8] bg-white p-5 shadow-[0_24px_80px_rgba(15,23,35,0.08)]">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#5a6777]">
              Solution Evidence Pattern
            </div>
            <ProofCycleDiagram />
          </div>
        </div>
      </SectionWrapper>

      {solutions.map((sol, i) => (
        <SectionWrapper
          key={sol.id}
          id={sol.id}
          className={i % 2 === 0 ? "bg-jb-light-gray section-lines-light" : "bg-jb-dark"}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className={`w-3 h-3 ${sol.color}`} />
              <Eyebrow className={i % 2 === 0 ? "text-[#5a6777]" : undefined}>{sol.eyebrow}</Eyebrow>
            </div>

            <h2 className={i % 2 === 0 ? "jb-section-title-light mb-10 max-w-3xl" : "jb-section-title mb-10 max-w-3xl"}>
              {sol.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              <div className={i % 2 === 0 ? "relative border border-[#dbe3ea] bg-white p-6" : "relative border border-jb-mid-gray bg-jb-card p-6"}>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-jb-text-muted">The Problem</h3>
                <p className={i % 2 === 0 ? "leading-relaxed text-[#556273]" : "leading-relaxed text-jb-white/70"}>{sol.problem}</p>
              </div>

              <div className={`relative border p-6 ${i % 2 === 0 ? `${sol.accentBorder} bg-white` : `${sol.accentBorder} bg-jb-card`}`}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-jb-text-muted mb-4">
                  How JouleBridge Helps
                </h3>
                <p className={i % 2 === 0 ? "leading-relaxed text-[#556273]" : "leading-relaxed text-jb-white/70"}>{sol.solution}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-jb-text-muted mb-4">Key Capabilities</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sol.capabilities.map((cap, j) => (
                  <li key={j} className={i % 2 === 0 ? "flex items-start gap-3 text-sm text-[#556273]" : "flex items-start gap-3 text-sm text-jb-white/70"}>
                    <span className={`mt-1.5 w-1.5 h-1.5 shrink-0 ${sol.color}`} />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            <div className={i % 2 === 0 ? "flex flex-col gap-6 border-t border-[#dbe3ea] pt-8 sm:flex-row sm:items-center" : "flex flex-col gap-6 border-t border-jb-mid-gray pt-8 sm:flex-row sm:items-center"}>
              <p className={i % 2 === 0 ? "flex-1 font-medium text-[#101419]" : "flex-1 font-medium text-white"}>{sol.outcome}</p>
              <Link
                href={sol.docsLink}
                className="font-mono text-xs uppercase tracking-widest text-jb-accent hover:text-white transition-colors shrink-0"
              >
                View walkthrough &rarr;
              </Link>
            </div>
          </motion.div>
        </SectionWrapper>
      ))}

      <SectionWrapper className="bg-jb-dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
            Want to test the right use case first?
          </h2>
          <p className="text-jb-white/60 mb-8">
            Start a pilot conversation and we&apos;ll scope the right deployment and verification path for your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Start a Pilot
            </Button>
            <Button href="/docs/get-started/quickstart" variant="tertiary">
              Read the Docs
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
