"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { LatticeCube } from "@/components/ui/LatticeCube";

const proofPoints = ["Edge runtime", "Proof engine", "Policy gate", "Operator review"];

const operatingFacts = [
  {
    label: "Current baseline",
    value: "Deterministic runtime, proofs, ledger, policy, and controlled sync.",
  },
  {
    label: "Best fit now",
    value: "Pilots, audits, and high-trust telemetry workflows in energy operations.",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-jb-dark section-lines">
      <div className="absolute inset-0 jb-surface pointer-events-none" />
      <div className="absolute right-[-8rem] top-20 h-[24rem] w-[24rem] rounded-full bg-jb-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-6rem] bottom-[-6rem] h-[18rem] w-[18rem] rounded-full bg-jb-green/8 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pb-10 pt-24 lg:px-8 lg:pb-8 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(320px,1.06fr)] lg:gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-jb-accent" />
              <span className="text-sm tracking-[0.18em] text-jb-accent uppercase">
                Verified data infrastructure for energy
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 text-4xl font-semibold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-[4.5rem]"
            >
              Make critical energy records easier to trust.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mb-7 max-w-xl text-base leading-relaxed text-jb-text-muted md:text-lg"
            >
              JouleBridge helps utilities, AMISPs, C&I operators, and EV platforms
              turn raw telemetry into deterministic records, cryptographic proofs,
              and audit-ready evidence before disputes and reconciliation delays
              spread through the stack.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mb-7 flex flex-wrap gap-3"
            >
              {proofPoints.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-jb-white/75"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button href="/contact" variant="primary">
                Start a Pilot
              </Button>
              <Button href="/product" variant="white">
                Explore the Platform
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {operatingFacts.map((item) => (
                <div key={item.label} className="jb-panel rounded-2xl p-4">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-jb-text-muted">
                    {item.label}
                  </div>
                  <div className="text-sm leading-relaxed text-jb-white/82">{item.value}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/15 p-4 md:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,215,200,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(182,255,108,0.12),transparent_32%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-jb-accent">
                      JouleBridge Hero Visual
                    </div>
                    <div className="text-xl font-semibold text-white md:text-2xl">
                      Trust layer in motion
                    </div>
                  </div>
                  <div className="hidden items-center gap-2 sm:flex">
                    <span className="h-2.5 w-2.5 rounded-full bg-jb-accent" />
                    <span className="h-2.5 w-2.5 rounded-full bg-jb-green" />
                    <span className="h-2.5 w-2.5 rounded-full bg-jb-yellow" />
                  </div>
                </div>

                <div className="h-[360px] overflow-hidden rounded-[24px] border border-white/8 bg-black/20 md:h-[440px]">
                  <LatticeCube />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-jb-accent">
                      Capture
                    </div>
                    <div className="text-sm leading-relaxed text-jb-white/72">
                      Receive field telemetry and operational events at the edge.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-jb-green">
                      Prove
                    </div>
                    <div className="text-sm leading-relaxed text-jb-white/72">
                      Turn records into reviewable proof before downstream handoff.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
