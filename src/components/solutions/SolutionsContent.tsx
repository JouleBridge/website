"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { DataFlowVisualization } from "@/components/ui/DataFlowVisualization";
import { TextReveal } from "@/components/ui/TextReveal";

const solutions = [
  {
    id: "energy-settlement",
    eyebrow: "Application 01",
    title: "Open-access industrial sites",
    color: "bg-jb-accent",
    accentBorder: "border-[#D06120]/24",
    problem:
      "Factories, process plants, and data centers buying power on open access face tariff windows that close in minutes, reconciliation that takes weeks, and on-site storage, solar, and flexible loads that rarely talk to each other.",
    solution:
      "Bridge Kernel runs monitoring, forecast-aware dispatch, and anomaly detection locally at the site boundary. Every read, command, measurement, and prediction is attached to one evidence chain that operations, finance, and compliance can review.",
    capabilities: [
      "Local coordination across storage, solar, loads, and metering",
      "Forecast-aware dispatch for tariff windows and peak shaving",
      "On-device anomaly detection on meters, inverters, and batteries",
      "Audit-ready records for reconciliation and review",
      "Repeatable rollout once the first site is live",
    ],
    outcome: "Best fit today for tariff-sensitive industrial sites with mixed hardware.",
    docsLink: "/docs/examples/energy-settlement",
  },
  {
    id: "ev-charging",
    eyebrow: "Application 02",
    title: "EV fleet depots",
    color: "bg-jb-pink",
    accentBorder: "border-jb-pink/24",
    problem:
      "Fleet depots must charge vehicles against real departure windows, site power limits, and mixed-vendor hardware. Cloud-only coordination fails when connectivity is weak, and post-facto reporting does not help the next morning's departures.",
    solution:
      "Bridge Kernel runs the dispatch loop locally across every charger, battery, solar array, and meter at the depot. Reservations, dispatches, and measured outcomes stay attached to evidence that can be reviewed later.",
    capabilities: [
      "Mixed-vendor charger coordination at the site boundary",
      "Local dispatch continuity when the cloud is unreachable",
      "Signed records for reservations, commands, and measured outcomes",
      "On-site forecasting for load and arrival planning",
      "Partner-hardware deployment motion for repeatable installs",
    ],
    outcome: "A strong fit for depots that need local control and defensible session history.",
    docsLink: "/docs/examples/ev-charging",
  },
  {
    id: "grid-audit",
    eyebrow: "Application 03",
    title: "Multi-site rollout",
    color: "bg-white/10",
    accentBorder: "border-white/12",
    problem:
      "Once one site is working, teams need a way to repeat the operating model across multiple locations without giving up local execution or creating a fresh reporting mess.",
    solution:
      "The same runtime can be rolled out across additional sites while central surfaces distribute policy, ingest evidence, and expose a clear operating view. Local control stays local. Review gets easier as the program grows.",
    capabilities: [
      "Central review surfaces for operating and evidence history",
      "Policy distribution from cloud to local site runtimes",
      "Exportable records for counterparties, finance, and compliance",
      "Path from one production site to repeatable multi-site operation",
      "Expansion only after the first site is proven",
    ],
    outcome: "The repeatable rollout motion for teams growing from one site to several.",
    docsLink: "/docs/examples/grid-audit",
  },
];

export function SolutionsContent() {
  return (
    <>
      <SectionWrapper className="bg-jb-dark pb-10 pt-32 section-lines md:pb-14 md:pt-40">
        <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <Eyebrow className="mb-6">Applications</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="jb-section-title mb-6 max-w-3xl"
            >
              One operating layer.{" "}
              <span className="jb-title-gradient">Multiple site types.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="jb-section-copy"
            >
              Bridge Kernel gives industrial sites, EV depots, and expanding
              multi-site programs the same core operating model: local control,
              mixed-vendor integration, and audit-ready evidence attached to every
              important decision.
            </motion.p>
          </div>
          <div className="border border-white/10 bg-[linear-gradient(180deg,rgba(31,35,39,0.96),rgba(15,17,20,0.96))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_90px_rgba(0,0,0,0.28)]">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-jb-text-muted">
              Operating Flow
            </div>
            <DataFlowVisualization />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-jb-section-alt">
        <TextReveal
          text="Start where the operating pain is real. Prove one site. Repeat the model."
          highlightWords={["operating", "site.", "model."]}
          className=""
        />
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
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-jb-text-muted">Operating Context</h3>
                <p className="leading-relaxed text-jb-white/64">{sol.problem}</p>
              </div>

              <div className={`relative border ${sol.accentBorder} bg-[linear-gradient(180deg,rgba(24,27,31,0.96),rgba(14,16,18,0.98))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_72px_rgba(0,0,0,0.26)]`}>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-jb-text-muted">
                  JouleBridge Fit
                </h3>
                <p className="leading-relaxed text-jb-white/64">{sol.solution}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-jb-text-muted">What the stack enables</h3>
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
                className="shrink-0 font-mono text-xs uppercase tracking-widest text-[#D06120] transition-colors hover:text-white"
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
            Ready to scope a pilot?
          </h2>
          <p className="mb-8 text-jb-white/60">
            One conversation. We scope the site, the hardware path, the protocol
            list, and the evidence requirements. You get a real proposal, not a
            slideware estimate.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Scope a Pilot
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
