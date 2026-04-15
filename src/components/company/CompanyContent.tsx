"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";

const beliefs = [
  {
    statement: "Local safety beats remote intent",
    detail:
      "Control software for physical sites has to stay safe and useful even when the cloud is late, wrong, or offline.",
  },
  {
    statement: "Evidence is part of operations",
    detail:
      "The record has to stay attached to the decision path itself, not reconstructed after the site has already moved on.",
  },
  {
    statement: "Mixed-vendor sites need neutral software",
    detail:
      "As sites add more assets, it becomes riskier to let one vendor boundary define the whole operating model.",
  },
];

const milestones = [
  {
    date: "2025",
    title: "JouleBridge founded",
    desc: "The company starts with a simple thesis: real energy sites need better local control and better evidence, not another disconnected dashboard.",
  },
  {
    date: "Late 2025",
    title: "Runtime foundation built",
    desc: "Identity, configuration, local execution primitives, and operator surfaces are established for the first serious deployment path.",
  },
  {
    date: "Early 2026",
    title: "Evidence chain working end to end",
    desc: "Signing, policy, persistence, sync, and observability come together into one operating path.",
  },
  {
    date: "2026",
    title: "Commercial wedge clarified",
    desc: "The go-to-market motion narrows around open-access industrial sites and EV depots with mixed hardware and real operating constraints.",
  },
  {
    date: "Now",
    title: "Pilot deployments and rollout readiness",
    desc: "The focus is hardening the runtime, proving one production site at a time, and making the rollout motion repeatable.",
  },
];

export function CompanyContent() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-jb-dark section-lines">
        <div className="pointer-events-none absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-white opacity-[0.03] blur-[120px]" />
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
                JouleBridge builds software for{" "}
                <span className="jb-title-gradient">high-stakes energy operations</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="jb-section-copy max-w-2xl"
              >
                We are building Bridge Kernel, an on-site runtime for distributed
                energy systems. The focus is straightforward: help real sites run
                mixed hardware safely, respond locally, and keep audit-ready records
                of important actions.
              </motion.p>
            </div>
            <div className="grid gap-4">
              <div className="jb-theme-shell p-5">
                <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
                  Company Focus
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <CompanyStat value="2025" label="Founded in India" />
                  <CompanyStat value="Pilot" label="Current stage" />
                  <CompanyStat value="Mixed" label="Hardware reality" />
                </div>
              </div>
              <div className="jb-theme-shell-soft p-5">
                <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-jb-text-muted">
                  Current Direction
                </div>
                <div className="space-y-3">
                  <CompanySignal
                    title="Runtime hardening"
                    text="Turn the edge and site runtimes into a repeatable, supportable deployment path."
                  />
                  <CompanySignal
                    title="Production pilots"
                    text="Prove local control, mixed-vendor integration, and audit-ready records on one real site at a time."
                  />
                  <CompanySignal
                    title="Repeatable rollout"
                    text="Build the install motion, evidence outputs, and support runbooks required for multi-site expansion."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-jb-section-alt">
        <TextReveal
          text="The hard part is not collecting more telemetry. The hard part is operating one real site locally and explaining what happened later."
          highlightWords={["real", "locally", "later."]}
          className=""
        />
      </SectionWrapper>

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
              Distributed energy stopped being a single-device problem years ago.
              Serious sites now run meters, inverters, storage, solar, chargers,
              and flexible loads from multiple vendors under real tariff and
              operating constraints.
            </p>
            <p>
              Most software still treats that as a reporting problem or a cloud API
              problem. The real problem is harder: the site has to make safe
              decisions locally, and someone has to explain those decisions later
              with records that actually hold up.
            </p>
            <p className="font-medium text-white">
              JouleBridge exists to make that operating model legible. Local
              control, on-site intelligence, and audit-ready evidence belong in one
              runtime.
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
                key={belief.statement}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="jb-theme-shell p-6"
              >
                <h3 className="mb-3 text-xl font-semibold text-white">{belief.statement}</h3>
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
          Building the runtime{" "}
          <span className="jb-title-gradient">real sites can trust</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="jb-theme-shell-soft p-6"
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center border border-white/12 bg-white/[0.04]">
              <span className="font-mono text-2xl font-bold text-white/60">TT</span>
            </div>
            <h3 className="mb-1 text-lg font-semibold text-white">Tarun Trilokesh</h3>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-white/60">
              Founder & CEO
            </p>
            <p className="text-sm leading-relaxed text-jb-white/60">
              Tarun founded JouleBridge after working on industrial and
              controls-adjacent systems. The company started from an operations
              problem: energy sites need better local control and better evidence,
              not another disconnected dashboard.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="jb-theme-shell-soft flex flex-col items-center justify-center border border-dashed border-white/10 p-6 text-center"
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center border border-dashed border-white/12 bg-black/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-jb-text-muted">
                <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">Current stage</h3>
            <p className="mb-4 text-sm text-jb-white/50">
              JouleBridge is focused on design partners, pilot deployments, and the
              support model required for repeatable rollout.
            </p>
            <Button href="/contact" variant="secondary" className="text-sm">
              Scope a Pilot
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
          What we are{" "}
          <span className="jb-title-gradient">building now</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute bottom-0 left-[11px] top-0 w-[1px] bg-white/10" />

          <div className="space-y-10">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-6"
              >
                <div className="relative shrink-0">
                  <div className="flex h-[23px] w-[23px] items-center justify-center border border-[#D06120]/50 bg-jb-card">
                    <div className="h-2 w-2 bg-[#D06120]" />
                  </div>
                </div>
                <div className="pb-2">
                  <div className="mb-1 font-mono text-xs uppercase tracking-widest text-[#D06120]">
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
            Need to{" "}
            <span className="jb-title-gradient">pressure-test a real site problem</span>
            ?
          </h2>
          <p className="mb-8 text-jb-text-muted">
            If you are evaluating a pilot, a mixed-vendor integration path, or an
            evidence requirement for a live site, we should talk.
          </p>
          <Button href="/contact" variant="primary">
            Scope a Pilot
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
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/60">{title}</div>
      <div className="mt-2 text-sm leading-7 text-jb-white/68">{text}</div>
    </div>
  );
}
