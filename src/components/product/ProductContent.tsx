"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ProofCycleDiagram } from "@/components/ui/ProofCycleDiagram";
import { VerificationMetrics } from "@/components/ui/VerificationMetrics";
import { EnergyEvidenceIllustration } from "@/components/ui/EnergyEvidenceIllustration";
import { TextReveal } from "@/components/ui/TextReveal";

const adapters = [
  { name: "OCPP 1.6/2.0", protocol: "Current", useCase: "Charger reservations, status, and dispatch acknowledgements" },
  { name: "Modbus RTU/TCP", protocol: "Current", useCase: "Industrial storage, solar, metering, and gateway telemetry" },
  { name: "SunSpec", protocol: "Current", useCase: "Inverter and DER integration across partner hardware" },
  { name: "CAN / J1939", protocol: "Current", useCase: "Vehicle, battery, and industrial control surfaces" },
  { name: "DLMS / IEC 62056", protocol: "Current", useCase: "Metering and utility-adjacent evidence inputs" },
  { name: "IEC 61850", protocol: "Current", useCase: "Substation and utility-grade protection and control surfaces" },
  { name: "Webhook / REST", protocol: "Current", useCase: "Operational schedules, partner integrations, and cloud-side triggers" },
  { name: "Custom site adapters", protocol: "Program", useCase: "Pilot-scoped interfaces for partner hardware and local control systems" },
  { name: "Future protocol lanes", protocol: "Roadmap", useCase: "Expansion only when a signed deployment path requires it" },
];

const operatingFlow = [
  {
    title: "Observe the site",
    detail:
      "Read meters, inverters, storage, solar, chargers, and flexible loads close to the equipment so the runtime sees the real site, not a delayed shadow of it.",
  },
  {
    title: "Control locally",
    detail:
      "Turn policy, safety constraints, tariff windows, and on-site forecasts into feasible dispatch actions inside the site boundary, even when upstream connectivity is unstable.",
  },
  {
    title: "Review centrally",
    detail:
      "Distribute policy, collect signed site state, and expose multi-site visibility without taking over local execution or breaking the trust boundary.",
  },
  {
    title: "Prove every decision",
    detail:
      "Attach a signed record to every read, command, measurement, and prediction so later reviews run on evidence instead of reconstruction.",
  },
];

const deployOptions = [
  { title: "Industrial Gateway", desc: "Primary target for open-access industrial and EV depot sites with mixed-vendor hardware." },
  { title: "Reference Site Kit", desc: "Controlled deployment shape for pilot replication and support runbooks." },
  { title: "On-Prem Linux Host", desc: "Useful when local compute already exists inside a site operations environment." },
  { title: "Cloud Coordination Plane", desc: "For policy distribution, evidence ingest, and multi-site review after the first site is live." },
];

const securityFeatures = [
  "Ed25519 signing across every layer that records a meaningful action",
  "On-device predictions attached to the dispatches they inform",
  "Replay-aware verification and monotonic bundle checks",
  "Policy stage, promote, and rollback control flow",
  "Separate identities across edge, site, and cloud runtimes",
  "Encrypted runtime state for software-key-provider pilots",
  "Secure-element upgrade path for later pilot stages",
];

export function ProductContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-jb-dark section-lines">
        <div className="pointer-events-none absolute left-[-8rem] top-20 h-[28rem] w-[28rem] bg-white/[0.04] blur-[120px]" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-36">
          <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div>
              <Eyebrow className="mb-6">Platform</Eyebrow>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="jb-section-title mb-5"
              >
                <span className="jb-title-gradient">JouleBridge Platform</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="jb-section-copy mb-8"
              >
                Bridge Kernel combines an Asset Agent at the edge, a Site Router
                for local control and on-site forecasting, central coordination
                surfaces for policy and review, and evidence outputs that explain
                what happened after the fact.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Button href="/docs/get-started/quickstart" variant="primary">
                  Read the Docs
                </Button>
                <Button href="/contact" variant="white">
                  Discuss a Pilot
                </Button>
              </motion.div>
            </div>
            <div className="border border-white/10 bg-[linear-gradient(180deg,rgba(32,36,40,0.96),rgba(17,19,22,0.96))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_90px_rgba(0,0,0,0.3)]">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-jb-text-muted">
                Evidence Lifecycle
              </div>
              <ProofCycleDiagram />
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-jb-section-alt">
        <TextReveal
          text="Keep control local. Keep records attached. Keep central review useful without taking over the site boundary."
          highlightWords={["local.", "records", "site"]}
          className=""
        />
      </SectionWrapper>

      <SectionWrapper className="bg-jb-dark section-lines">
        <Eyebrow className="mb-4">How It Works</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="jb-section-title mb-8 max-w-3xl"
        >
          From site state to{" "}
          <span className="jb-title-gradient">one signed evidence chain</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {operatingFlow.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-white/10 bg-[linear-gradient(180deg,rgba(30,34,38,0.94),rgba(16,18,21,0.94))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_70px_rgba(0,0,0,0.24)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center border border-white/14 bg-white/[0.04] font-mono text-sm text-[#D06120]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-jb-white/58">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-jb-dark">
        <Eyebrow className="mb-4">Adapter Surface</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="jb-section-title mb-8 max-w-3xl"
        >
          Mixed-vendor inputs{" "}
          <span className="text-jb-text-muted">normalized into one runtime model</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {adapters.map((adapter, i) => (
            <motion.div
              key={adapter.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative border border-white/10 bg-[linear-gradient(180deg,rgba(27,31,35,0.9),rgba(15,17,20,0.95))] p-5 transition-colors hover:border-white/16"
            >
              <div className="mb-1 font-mono text-xs uppercase tracking-widest text-white/60">
                {adapter.protocol}
              </div>
              <h3 className="mb-2 font-semibold text-white">{adapter.name}</h3>
              <p className="text-sm text-jb-white/50">{adapter.useCase}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-jb-dark section-lines">
        <Eyebrow className="mb-4">Evidence Chain</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="jb-section-title mb-8 max-w-3xl"
        >
          How Bridge Kernel{" "}
          <span className="text-jb-text-muted">turns monitoring, control, and forecasting into one signed chain</span>
        </motion.h2>

        <div className="border border-white/10 bg-[linear-gradient(180deg,rgba(26,30,34,0.96),rgba(14,16,18,0.96))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_75px_rgba(0,0,0,0.26)] md:p-6">
          <div className="mb-8">
            <VerificationMetrics />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="space-y-6">
              {[
                {
                  step: "1. Observe",
                  desc: "Read site state, constraints, tariff windows, and incoming intent in a deterministic representation the runtime can act on consistently.",
                },
                {
                  step: "2. Predict",
                  desc: "Run forecasting and anomaly detection on-site. Model version and inputs stay attached so the prediction can be reviewed alongside the dispatch.",
                },
                {
                  step: "3. Control",
                  desc: "Route intent through local policy and safety checks. Issue commands, collect acknowledgements, and record the measured site response.",
                },
                {
                  step: "4. Sign",
                  desc: "Wrap intent, prediction, execution, and measurements into one Ed25519-signed record downstream systems can verify independently.",
                },
              ].map((item) => (
                <div key={item.step}>
                  <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-white">
                    {item.step}
                  </h3>
                  <p className="leading-relaxed text-jb-white/58">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="overflow-hidden border border-white/10 bg-[#0d1014]">
              <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
                <div className="h-2.5 w-2.5 bg-white/10" />
                <div className="h-2.5 w-2.5 bg-white/6" />
                <div className="h-2.5 w-2.5 bg-[#D06120]" />
                <span className="ml-auto font-mono text-[10px] text-jb-text-muted">execution-proof.json</span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-xs leading-relaxed text-white/70">{`{
  "site_id": "plant-07",
  "asset_id": "feeder-bus-07",
  "forecast": {
    "horizon_min": 15,
    "peak_kw": 612,
    "model_version": "bk-ml-fcast-0.4.2"
  },
  "dispatch_intent": {
    "target_kw": 480,
    "window_s": 900
  },
  "command_ack": {
    "accepted": true,
    "accepted_at": "2026-04-14T10:15:00Z"
  },
  "measurement": {
    "power_kw": 478.6,
    "soc_delta_pct": -3.1
  },
  "proof_metadata": {
    "hash_algorithm": "SHA-256",
    "signature_algorithm": "Ed25519",
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
          Deploy where the{" "}
          <span className="jb-title-gradient">site boundary needs to hold</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {deployOptions.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-white/10 bg-[linear-gradient(180deg,rgba(28,32,36,0.92),rgba(16,18,20,0.96))] p-6"
            >
              <h3 className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-white">
                {opt.title}
              </h3>
              <p className="text-sm leading-relaxed text-jb-white/50">{opt.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-jb-dark section-lines">
        <Eyebrow className="mb-4">Security</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="jb-section-title mb-8 max-w-3xl"
        >
          <span className="jb-title-gradient">Security controls</span>{" "}
          that sit inside the runtime itself
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
              <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 shrink-0 text-white">
                <path d="M13.5 4.5L6 12L2.5 8.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm leading-relaxed text-jb-white/58">{feature}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/docs/operations/security" variant="primary">
            Security Model
          </Button>
          <Button href="/contact" variant="secondary">
            Request Security Review
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-jb-dark">
        <div className="border border-white/10 bg-[linear-gradient(180deg,rgba(26,30,34,0.92),rgba(14,16,18,0.94))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_80px_rgba(0,0,0,0.24)] md:p-8">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-center">
            <div>
              <Eyebrow className="mb-4">Operating View</Eyebrow>
              <h2 className="jb-section-title mb-4 max-w-3xl">
                Built for the teams that have to{" "}
                <span className="jb-title-gradient">explain what happened</span>
              </h2>
              <p className="jb-section-copy mb-5">
                The Asset Agent and Site Router keep monitoring, control, and
                on-site forecasting local. Central coordination distributes policy,
                ingests signed records, and gives operators a clear review surface
                across deployed sites.
              </p>
              <p className="jb-section-copy">
                The result: operators, counterparties, and regulators get a
                verifiable record of what the site saw, what it predicted, what it
                did, and where the outcome diverged.
              </p>
            </div>
            <EnergyEvidenceIllustration />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
