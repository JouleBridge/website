"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ProofCycleDiagram } from "@/components/ui/ProofCycleDiagram";
import { EnergyEvidenceIllustration } from "@/components/ui/EnergyEvidenceIllustration";

const adapters = [
  { name: "Webhook / REST", protocol: "Current", useCase: "HTTP-based telemetry and system integrations" },
  { name: "File ingest", protocol: "Current", useCase: "Controlled imports and deterministic replayable input" },
  { name: "Scanner and edge inputs", protocol: "Current", useCase: "Operational event capture at the edge" },
  { name: "GPS / NMEA", protocol: "Current", useCase: "Location-aware field event trails" },
  { name: "Modbus and DLMS", protocol: "Roadmap", useCase: "Energy-meter and industrial telemetry hardening" },
  { name: "OCPP and grid protocols", protocol: "Roadmap", useCase: "Charging and utility workflow expansion" },
  { name: "Custom adapters", protocol: "Program", useCase: "Protocol-specific work scoped through pilots" },
];

const operatingFlow = [
  {
    title: "Capture at the edge",
    detail:
      "Use the current adapter baseline to receive structured telemetry and operational events close to the source system.",
  },
  {
    title: "Produce deterministic proof",
    detail:
      "Canonicalize the record, hash it, sign it with Ed25519, and attach the metadata required for later independent review.",
  },
  {
    title: "Apply policy before persistence",
    detail:
      "Run policy checks before records hit the ledger so stale, malformed, or risky events are quarantined instead of silently accepted.",
  },
  {
    title: "Store and prepare evidence",
    detail:
      "Persist verified records locally first, then use controlled sync and evidence-pack flows for broader operational use.",
  },
];

const deployOptions = [
  { title: "Edge Gateway", desc: "ARM or x86 gateway close to the data source for edge-first verification." },
  { title: "On-Premise Server", desc: "Linux or Windows host inside an operator-controlled environment." },
  { title: "Containerized Runtime", desc: "Container-based deployment where local operational controls already exist." },
  { title: "Cloud-Adjacent Instance", desc: "Useful for controlled integrations, demos, and platform-adjacent workflows." },
];

const securityFeatures = [
  "Ed25519 signing baseline in the current runtime",
  "Replay protection with configurable time windows",
  "Idempotency via event_id deduplication across ingestion",
  "Policy bundle stage, promote, and rollback control flow",
  "Hardware-backed signing and stronger key custody on the roadmap",
  "Structured logs and runtime snapshots for operational review",
];

export function ProductContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-jb-dark section-lines">
        <div className="absolute left-[-8rem] top-20 h-[28rem] w-[28rem] rounded-full bg-jb-accent/8 blur-[120px] pointer-events-none" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-36">
          <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div>
              <Eyebrow className="mb-6">Product</Eyebrow>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="jb-section-title mb-5"
              >
                Bridge Kernel
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="jb-section-copy mb-8"
              >
                The edge runtime at the center of JouleBridge. It captures
                operational events, produces deterministic records, generates
                cryptographic proofs, applies policy checks, and stores verified
                evidence locally before broader platform layers consume it.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Button href="/docs/get-started/quickstart" variant="primary">
                  Quick Start
                </Button>
                <Button href="/docs/core-concepts/architecture" variant="white">
                  Architecture
                </Button>
              </motion.div>
            </div>
            <div className="rounded-[28px] border border-[#d8e0e8] bg-white p-5 shadow-[0_24px_80px_rgba(15,23,35,0.08)]">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#5a6777]">
                Proof Lifecycle
              </div>
              <ProofCycleDiagram />
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-jb-light-gray section-lines-light">
        <Eyebrow className="mb-4 text-[#5a6777]">How It Works</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="jb-section-title-light mb-8 max-w-3xl"
        >
          From source telemetry to reviewable evidence
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {operatingFlow.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-[24px] border border-[#dbe3ea] bg-white p-6 shadow-[0_18px_60px_rgba(15,23,35,0.06)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-jb-accent/35 bg-jb-accent/10 font-mono text-sm text-jb-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-[#101419]">{step.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#556273]">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-jb-dark">
        <Eyebrow className="mb-4">Protocol Adapters</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="jb-section-title mb-8 max-w-3xl"
        >
          Adapter baseline and protocol direction
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {adapters.map((adapter, i) => (
            <motion.div
              key={adapter.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative border border-jb-mid-gray/50 bg-jb-card/50 p-5 transition-colors hover:border-jb-accent/30"
            >
              <div className="mb-1 font-mono text-xs uppercase tracking-widest text-jb-accent">
                {adapter.protocol}
              </div>
              <h3 className="mb-2 font-semibold text-white">{adapter.name}</h3>
              <p className="text-sm text-jb-white/50">{adapter.useCase}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-jb-light-gray section-lines-light">
        <Eyebrow className="mb-4 text-[#5a6777]">Proof System</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="jb-section-title-light mb-8 max-w-3xl"
        >
          Proof generation in the current runtime baseline
        </motion.h2>

        <div className="rounded-[28px] border border-[#d8e0e8] bg-white p-5 shadow-[0_20px_60px_rgba(15,23,35,0.06)] md:p-6">
          <div className="mb-8 max-w-3xl rounded-[22px] border border-[#e0e6ed] bg-[#f7fbff] p-4">
            <ProofCycleDiagram />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="space-y-6">
              {[
                {
                  step: "1. Canonicalize",
                  desc: "Sort keys, normalize text, and produce a deterministic representation of the event payload.",
                },
                {
                  step: "2. Hash",
                  desc: "Compute a SHA-256 digest so later systems can identify whether the content changed.",
                },
                {
                  step: "3. Sign",
                  desc: "Use Ed25519 to attach identity and integrity metadata to the digest.",
                },
                {
                  step: "4. Envelope",
                  desc: "Wrap the event, signature, and verification metadata into a proof object that downstream systems can inspect.",
                },
              ].map((item) => (
                <div key={item.step}>
                  <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-[#101419]">
                    {item.step}
                  </h3>
                  <p className="leading-relaxed text-[#556273]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-[24px] border border-[#d8e0e8] bg-[#0f141b]">
              <div className="flex items-center gap-2 border-b border-[#242b34] px-4 py-3">
                <div className="w-2.5 h-2.5 rounded-full bg-jb-red" />
                <div className="w-2.5 h-2.5 rounded-full bg-jb-yellow" />
                <div className="w-2.5 h-2.5 rounded-full bg-jb-green" />
                <span className="ml-auto font-mono text-[10px] text-jb-text-muted">proof-envelope.json</span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-xs leading-relaxed text-jb-green/70">{`{
  "event": {
    "current_a": 12.4,
    "power_kw": 3.1,
    "voltage_v": 230.5
  },
  "key_id": "site-gw-01",
  "key_version": 3,
  "signature_context": "bridge-kernel-v1",
  "signatures": [
    {
      "algorithm": "Ed25519",
      "value": "b7e2f1c3d8a9..."
    }
  ],
  "proof_metadata": {
    "hash_algorithm": "SHA-256",
    "digest": "8af3c2b1e9d4f7a2...",
    "timestamp": "2026-03-07T10:15:00Z",
    "verified": true
  }
}`}</pre>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-jb-dark">
        <Eyebrow className="mb-4">Deployment</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="jb-section-title mb-8 max-w-3xl"
        >
          Deploy where the evidence needs to begin
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {deployOptions.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-jb-mid-gray/50 bg-jb-card/50 p-6"
            >
              <h3 className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-white">
                {opt.title}
              </h3>
              <p className="text-sm leading-relaxed text-jb-white/50">{opt.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-jb-light-gray section-lines-light">
        <Eyebrow className="mb-4 text-[#5a6777]">Security</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="jb-section-title-light mb-8 max-w-3xl"
        >
          Security controls that sit inside the runtime itself
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {securityFeatures.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-start gap-3 py-3"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 shrink-0 text-jb-green">
                <path d="M13.5 4.5L6 12L2.5 8.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm leading-relaxed text-[#556273]">{feature}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/docs/operations/security" variant="primary">
            Security Model
          </Button>
          <Button href="/contact" variant="secondary" className="border-[#cbd5df] text-[#101419] hover:bg-black/[0.03]">
            Request Security Review
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-jb-dark">
        <div className="rounded-[28px] border border-jb-mid-gray/60 bg-jb-card/35 p-6 md:p-8">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-center">
            <div>
              <Eyebrow className="mb-4">Operating View</Eyebrow>
              <h2 className="jb-section-title mb-4 max-w-3xl">
                Built for the teams that have to defend what happened
              </h2>
              <p className="jb-section-copy mb-5">
                Bridge Kernel is the edge runtime, not the full JouleBridge
                platform. Its job is to produce a cleaner record where telemetry
                first becomes operationally meaningful.
              </p>
              <p className="jb-section-copy">
                Cloud control, dashboards, certification, and settlement layers
                can sit above this runtime later. This page reflects the current
                runtime baseline and the roadmap direction documented in the
                JouleBridge brain.
              </p>
            </div>
            <EnergyEvidenceIllustration />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
