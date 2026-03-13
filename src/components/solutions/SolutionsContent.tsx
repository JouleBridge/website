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
    accentBorder: "border-jb-yellow/24",
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
    accentBorder: "border-jb-pink/24",
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
    color: "bg-jb-accent",
    accentBorder: "border-jb-accent/24",
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
      <SectionWrapper className="bg-jb-dark pt-32 pb-10 md:pt-40 md:pb-14 section-lines">
        <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <Eyebrow className="mb-6">Solutions</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="jb-section-title mb-6 max-w-3xl"
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
          <div className="border border-white/10 bg-[linear-gradient(180deg,rgba(31,35,39,0.96),rgba(15,17,20,0.96))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_90px_rgba(0,0,0,0.28)]">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-jb-text-muted">
              Solution Evidence Pattern
            </div>
            <ProofCycleDiagram />
          </div>
        </div>
      </SectionWrapper>

      {solutions.map((sol) => (
        <SectionWrapper key={sol.id} id={sol.id} className="bg-jb-dark section-lines">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className={`h-3 w-3 ${sol.color}`} />
              <Eyebrow>{sol.eyebrow}</Eyebrow>
            </div>

            <h2 className="jb-section-title mb-10 max-w-3xl">{sol.title}</h2>

            <div className="mb-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="relative border border-white/10 bg-[linear-gradient(180deg,rgba(29,33,37,0.94),rgba(16,18,21,0.96))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_72px_rgba(0,0,0,0.24)]">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-jb-text-muted">The Problem</h3>
                <p className="leading-relaxed text-jb-white/64">{sol.problem}</p>
              </div>

              <div className={`relative border ${sol.accentBorder} bg-[linear-gradient(180deg,rgba(24,27,31,0.96),rgba(14,16,18,0.98))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_72px_rgba(0,0,0,0.26)]`}>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-jb-text-muted">
                  How JouleBridge Helps
                </h3>
                <p className="leading-relaxed text-jb-white/64">{sol.solution}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-jb-text-muted">Key Capabilities</h3>
              <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {sol.capabilities.map((cap, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-jb-white/64">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 ${sol.color}`} />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6 border-t border-white/8 pt-8 sm:flex-row sm:items-center">
              <p className="flex-1 font-medium text-white">{sol.outcome}</p>
              <Link
                href={sol.docsLink}
                className="shrink-0 font-mono text-xs uppercase tracking-widest text-jb-accent transition-colors hover:text-white"
              >
                View walkthrough &rarr;
              </Link>
            </div>
          </motion.div>
        </SectionWrapper>
      ))}

      <SectionWrapper className="bg-jb-dark">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Want to test the right use case first?
          </h2>
          <p className="mb-8 text-jb-white/60">
            Start a pilot conversation and we&apos;ll scope the right deployment and verification path for your workflow.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
