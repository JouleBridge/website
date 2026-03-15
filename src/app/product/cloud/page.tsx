"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const plannedFeatures = [
  {
    title: "Fleet Dashboard",
    desc: "Monitor all Bridge Kernel instances across your sites in a single pane. Real-time health, throughput, and proof generation metrics.",
    status: "In Development",
  },
  {
    title: "Centralized Key Management",
    desc: "Manage Ed25519 keys, rotation schedules, and access policies across all nodes from one control plane. HSM-backed key storage available.",
    status: "In Development",
  },
  {
    title: "Policy Orchestration",
    desc: "Author, test, sign, and deploy policy rule bundles to your fleet. Staged rollouts with automatic rollback on failure.",
    status: "Planned",
  },
  {
    title: "Evidence Explorer",
    desc: "Search, filter, and verify any event across your entire fleet. Export evidence packs for settlement disputes or regulatory audits.",
    status: "Planned",
  },
  {
    title: "Alerts & Webhooks",
    desc: "Configurable alerts for policy violations, proof failures, node disconnections, and throughput anomalies. Integrate with Slack, PagerDuty, or custom endpoints.",
    status: "Planned",
  },
  {
    title: "Multi-Tenant Isolation",
    desc: "Separate data planes per organization with role-based access control. SOC 2 Type II compliance in progress.",
    status: "Planned",
  },
];

export default function CloudPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <SectionWrapper className="bg-jb-dark pt-32 md:pt-40 pb-10 md:pb-14">
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/product"
              className="font-mono text-xs uppercase tracking-widest text-jb-text-muted hover:text-white transition-colors"
            >
              Product
            </Link>
            <span className="text-jb-text-muted">/</span>
            <Eyebrow>Cloud</Eyebrow>
          </div>

          <div className="inline-block border border-white/16 bg-white/6 px-3 py-1 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-white/80">
              Coming Q2 2026
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight max-w-3xl mb-6"
          >
            Manage your fleet from one control plane
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg text-jb-white/60 max-w-2xl leading-relaxed mb-8"
          >
            JouleBridge Cloud extends Bridge Kernel with fleet management,
            centralized key operations, policy orchestration, and an evidence
            explorer. Your data stays on your nodes — the cloud layer provides
            observability and control.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <Button href="/contact" variant="primary">
              Join the Waitlist
            </Button>
          </motion.div>
        </SectionWrapper>

        {/* Architecture Philosophy */}
        <SectionWrapper className="bg-jb-card">
          <Eyebrow className="mb-4">Architecture</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-6"
          >
            Control plane, not data plane
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-jb-white/60 max-w-3xl leading-relaxed mb-10"
          >
            Bridge Kernel nodes handle all data ingestion, proof generation, and
            ledger storage locally. JouleBridge Cloud never touches your raw
            telemetry. Instead, it receives metadata, health signals, and
            aggregated metrics — giving you full fleet visibility without
            compromising data sovereignty.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Edge-First",
                desc: "All cryptographic operations happen at the edge. The cloud layer orchestrates — it never processes raw data.",
              },
              {
                title: "Zero Trust",
                desc: "Every communication between node and cloud is mutually authenticated. No implicit trust, no plaintext channels.",
              },
              {
                title: "Data Sovereignty",
                desc: "Your telemetry stays on your infrastructure. Export evidence packs when you need them, on your terms.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative border border-jb-mid-gray bg-jb-dark p-6"
              >
                <h3 className="font-mono text-sm uppercase tracking-widest text-[#D06120] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-jb-white/60 leading-relaxed">{item.desc}</p>
                <span className="absolute top-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute top-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute bottom-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute bottom-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Planned Features */}
        <SectionWrapper className="bg-jb-dark">
          <Eyebrow className="mb-4">Roadmap</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-10"
          >
            What we&apos;re building
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plannedFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border border-jb-mid-gray/50 bg-jb-card/50 p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border ${
                      feature.status === "In Development"
                        ? "text-[#D06120] border-[#D06120]/30"
                        : "text-jb-text-muted border-jb-mid-gray/50"
                    }`}
                  >
                    {feature.status}
                  </span>
                </div>
                <p className="text-sm text-jb-white/50 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper className="bg-jb-card">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
              Get early access
            </h2>
            <p className="text-jb-white/60 mb-8">
              JouleBridge Cloud launches Q2 2026. Join the waitlist to get early
              access and shape the product roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Join the Waitlist
              </Button>
              <Button href="/product" variant="tertiary">
                Back to Product
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
