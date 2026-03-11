"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const beliefs = [
  {
    statement: "Settlement should be provable, not presumed",
    detail: "Every energy transaction deserves cryptographic evidence that both parties can independently verify.",
  },
  {
    statement: "Trust infrastructure should be invisible",
    detail: "Verification should be embedded in the data pipeline, not bolted on as an afterthought.",
  },
  {
    statement: "The edge is the source of truth",
    detail: "Signing and verification must happen where the physical measurement occurs, not in a remote cloud.",
  },
];

const milestones = [
  { date: "Aug 2025", title: "JouleBridge founded", desc: "Company incorporated with a mission to build settlement trust rails for energy." },
  { date: "Sep 2025", title: "Bridge Kernel v0.1", desc: "Foundation layer complete: config, identity, HAL, CLI framework." },
  { date: "Nov 2025", title: "Runtime baseline completed", desc: "Proof signing, policy enforcement, local ledger, sync baseline, and observability foundations were put in place." },
  { date: "Jan 2026", title: "Documentation system built", desc: "Technical docs and product explanation material were expanded into a searchable documentation site." },
  { date: "Mar 2026", title: "Company stack scaffolded", desc: "JouleBridge was reorganized into product boundaries for edge, cloud, console, certification, analytics, and settlement." },
  { date: "Q2 2026", title: "Protocol hardening phase", desc: "Focus shifts to closing the gap between the current runtime baseline and the production energy protocol roadmap." },
  { date: "Q3 2026", title: "Pilot-readiness program", desc: "The next goal is strong pilot execution with clearer deployment, evidence, and operating workflows." },
];

export function CompanyContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-jb-dark overflow-hidden section-lines">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-jb-accent opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10 pt-24">
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] gap-10 items-center">
            <div>
              <Eyebrow className="mb-4">Company</Eyebrow>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="jb-section-title mb-5 max-w-3xl"
              >
                Building the trust layer for energy
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="jb-section-copy max-w-2xl"
              >
                JouleBridge is building verification-oriented infrastructure for the
                energy workflows where weak records create operational, financial, and
                compliance risk.
              </motion.p>
            </div>
            <div className="grid gap-4">
              <div className="border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-jb-accent">
                  Company Focus
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <CompanyStat value="01" label="Trust layer" />
                  <CompanyStat value="02" label="Edge-first proof" />
                  <CompanyStat value="03" label="Pilot-driven rollout" />
                </div>
              </div>
              <div className="border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-jb-text-muted">
                  Current Direction
                </div>
                <div className="space-y-3">
                  <CompanySignal
                    title="Runtime hardening"
                    text="Move Bridge Kernel from baseline capability toward production protocol readiness."
                  />
                  <CompanySignal
                    title="Pilot execution"
                    text="Turn evidence, deployment, and operating workflows into repeatable customer programs."
                  />
                  <CompanySignal
                    title="Platform expansion"
                    text="Layer cloud control, console, certification, analytics, and settlement surfaces above the runtime."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Saw */}
      <SectionWrapper className="bg-jb-dark">
        <div className="max-w-3xl">
          <Eyebrow className="mb-4">Why We Exist</Eyebrow>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-jb-white/70 leading-relaxed"
          >
            <p>
              India&apos;s energy system is becoming more digital, more distributed, and
              more transaction-heavy. Open access, DERs, batteries, EV charging, and
              new operating models all increase the number of places where weak records
              can create real commercial friction.
            </p>
            <p>
              But the operational record is still often fragmented. Reconciliation is
              manual, dispute handling is slow, and too many workflows depend on logs
              and spreadsheets that are difficult to verify independently.
            </p>
            <p className="text-white font-medium">
              JouleBridge exists to improve that record. The goal is not just more data,
              but better evidence: deterministic capture, proof generation, policy-gated
              persistence, and clearer handoffs into operational and commercial systems.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* What We Believe */}
      <section className="relative z-10 bg-jb-light-gray py-24 text-black md:py-32 section-lines section-lines-light">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="mb-8 text-[#5a6777]">What We Believe</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beliefs.map((belief, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-t-2 border-jb-accent bg-white p-6 pt-6 shadow-[0_18px_60px_rgba(15,23,35,0.05)]"
              >
                <h3 className="mb-3 text-xl font-semibold text-black">
                  {belief.statement}
                </h3>
                <p className="text-black/60 leading-relaxed">{belief.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <SectionWrapper className="bg-jb-dark">
        <Eyebrow className="mb-8">Team</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-white tracking-tight mb-12"
        >
          Building the first version of JouleBridge
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-jb-mid-gray/50 bg-jb-card/50 p-6"
          >
            <div className="w-20 h-20 rounded-full bg-jb-accent/20 flex items-center justify-center mb-4">
              <span className="font-mono text-2xl text-jb-accent font-bold">TT</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Tarun Trilokesh</h3>
            <p className="font-mono text-xs text-jb-accent uppercase tracking-widest mb-3">
              Founder & CEO
            </p>
            <p className="text-sm text-jb-white/60 leading-relaxed">
              Building verification-oriented infrastructure for energy systems, with a
              focus on how operational data becomes trusted evidence inside real energy
              workflows.
            </p>
          </motion.div>

          {/* Hiring card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-dashed border-jb-mid-gray/50 bg-jb-card/20 p-6 flex flex-col items-center justify-center text-center"
          >
            <div className="w-20 h-20 rounded-full border border-dashed border-jb-mid-gray flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-jb-text-muted">
                <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Join the team</h3>
            <p className="text-sm text-jb-white/50 mb-4">
              We&apos;re looking for engineers who want to build high-trust infrastructure.
            </p>
            <Button href="/contact" variant="secondary" className="text-sm">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper className="bg-jb-light-gray section-lines-light">
        <Eyebrow className="mb-8 text-[#5a6777]">Timeline</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="jb-section-title-light mb-16 max-w-3xl"
        >
          Our journey so far
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-0 bottom-0 w-[1px] bg-[#cfd8e1]" />

          <div className="space-y-10">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-6"
              >
                <div className="relative shrink-0">
                  <div className="flex h-[23px] w-[23px] items-center justify-center rounded-full border-2 border-jb-accent bg-white">
                    <div className="w-2 h-2 rounded-full bg-jb-accent" />
                  </div>
                </div>
                <div className="pb-2">
                  <div className="font-mono text-xs text-jb-accent uppercase tracking-widest mb-1">
                    {milestone.date}
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-[#101419]">{milestone.title}</h3>
                  <p className="text-sm leading-relaxed text-[#556273]">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-jb-dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="jb-section-title mb-6">
            Interested in our mission?
          </h2>
          <p className="text-jb-text-muted mb-8">
            Whether you want to run a pilot, join the team, or learn more about what
            we&apos;re building, we&apos;d love to hear from you.
          </p>
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}

function CompanyStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-white/8 bg-black/10 p-4">
      <div className="font-mono text-xl font-semibold text-white">{value}</div>
      <div className="mt-2 text-sm leading-6 text-jb-white/65">{label}</div>
    </div>
  );
}

function CompanySignal({ title, text }: { title: string; text: string }) {
  return (
    <div className="border border-white/8 bg-black/10 p-4">
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-jb-accent">{title}</div>
      <div className="mt-2 text-sm leading-7 text-jb-white/68">{text}</div>
    </div>
  );
}
