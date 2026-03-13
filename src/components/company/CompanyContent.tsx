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
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-jb-dark section-lines">
        <div className="pointer-events-none absolute top-1/2 right-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-jb-accent opacity-[0.03] blur-[120px]" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6 pt-24 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            <div>
              <Eyebrow className="mb-4">Company</Eyebrow>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="jb-section-title mb-5 max-w-3xl"
              >
                Building the{" "}
                <span className="jb-title-gradient jb-title-gradient-cool">
                  trust layer
                </span>{" "}
                for energy
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
              <div className="border border-white/10 bg-[linear-gradient(180deg,rgba(30,34,38,0.94),rgba(16,18,21,0.96))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_72px_rgba(0,0,0,0.24)]">
                <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-jb-accent">
                  Company Focus
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <CompanyStat value="01" label="Trust layer" />
                  <CompanyStat value="02" label="Edge-first proof" />
                  <CompanyStat value="03" label="Pilot-driven rollout" />
                </div>
              </div>
              <div className="border border-white/10 bg-[linear-gradient(180deg,rgba(26,29,33,0.92),rgba(14,16,18,0.96))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_72px_rgba(0,0,0,0.24)]">
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

      <SectionWrapper className="bg-jb-dark">
        <div className="max-w-3xl">
          <Eyebrow className="mb-4">Why We Exist</Eyebrow>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg leading-relaxed text-jb-white/70"
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
            <p className="font-medium text-white">
              JouleBridge exists to improve that record. The goal is not just more data,
              but better evidence: deterministic capture, proof generation, policy-gated
              persistence, and clearer handoffs into operational and commercial systems.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      <section className="relative z-10 bg-jb-dark py-24 section-lines md:py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="mb-8">What We Believe</Eyebrow>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {beliefs.map((belief, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-white/10 bg-[linear-gradient(180deg,rgba(31,35,39,0.94),rgba(16,18,20,0.96))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_72px_rgba(0,0,0,0.24)]"
              >
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {belief.statement}
                </h3>
                <p className="leading-relaxed text-jb-white/58">{belief.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-jb-dark">
        <Eyebrow className="mb-8">Team</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl font-semibold tracking-tight text-white"
        >
          Building the{" "}
          <span className="jb-title-gradient jb-title-gradient-warm">
            first version
          </span>{" "}
          of JouleBridge
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-white/10 bg-[linear-gradient(180deg,rgba(28,31,35,0.92),rgba(15,17,20,0.96))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_72px_rgba(0,0,0,0.24)]"
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center border border-white/12 bg-white/[0.04]">
              <span className="font-mono text-2xl font-bold text-jb-accent">TT</span>
            </div>
            <h3 className="mb-1 text-lg font-semibold text-white">Tarun Trilokesh</h3>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-jb-accent">
              Founder & CEO
            </p>
            <p className="text-sm leading-relaxed text-jb-white/60">
              Building verification-oriented infrastructure for energy systems, with a
              focus on how operational data becomes trusted evidence inside real energy
              workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-center border border-dashed border-white/10 bg-[linear-gradient(180deg,rgba(24,27,31,0.75),rgba(13,15,17,0.9))] p-6 text-center"
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center border border-dashed border-white/12 bg-black/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-jb-text-muted">
                <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">Join the team</h3>
            <p className="mb-4 text-sm text-jb-white/50">
              We&apos;re looking for engineers who want to build high-trust infrastructure.
            </p>
            <Button href="/contact" variant="secondary" className="text-sm">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-jb-dark section-lines">
        <Eyebrow className="mb-8">Timeline</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="jb-section-title mb-16 max-w-3xl"
        >
          Our{" "}
          <span className="jb-title-gradient jb-title-gradient-cool">
            journey so far
          </span>
        </motion.h2>

        <div className="relative">
          <div className="absolute bottom-0 left-[11px] top-0 w-[1px] bg-white/10" />

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
                  <div className="flex h-[23px] w-[23px] items-center justify-center rounded-full border border-jb-accent/50 bg-[#121518]">
                    <div className="h-2 w-2 rounded-full bg-jb-accent" />
                  </div>
                </div>
                <div className="pb-2">
                  <div className="mb-1 font-mono text-xs uppercase tracking-widest text-jb-accent">
                    {milestone.date}
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-white">{milestone.title}</h3>
                  <p className="text-sm leading-relaxed text-jb-white/58">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-jb-dark">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="jb-section-title mb-6">
            Interested in{" "}
            <span className="jb-title-gradient jb-title-gradient-warm">
              our mission
            </span>
            ?
          </h2>
          <p className="mb-8 text-jb-text-muted">
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
