"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Entropy } from "@/components/ui/Entropy";

const modules = [
  {
    name: "Adapter Layer",
    desc: "Protocol-specific ingestion modules that normalize raw telemetry into a canonical event format. Supports Modbus, SunSpec, OCPP, DNP3, IEEE 2030.5, IEC 61850, and custom webhooks.",
    color: "text-jb-yellow",
  },
  {
    name: "Canonicalizer",
    desc: "Deterministic JSON normalization — sorted keys, stripped whitespace, UTF-8 encoding. Ensures identical payloads always produce identical hashes regardless of source format.",
    color: "text-jb-accent",
  },
  {
    name: "Proof Engine",
    desc: "SHA-256 hashing followed by Ed25519 signing with versioned key management. Outputs COSE Sign1 ProofEnvelopes that any counterparty can independently verify.",
    color: "text-jb-accent",
  },
  {
    name: "Policy Gate",
    desc: "Evaluates events against signed policy rule bundles before persistence. Supports threshold checks, rate limits, schema validation, and custom predicate expressions.",
    color: "text-jb-pink",
  },
  {
    name: "Event Ledger",
    desc: "Append-only, hash-chained SQLite storage with WAL mode for concurrent reads. Events are immutable once written — no updates, no deletes, no tampering.",
    color: "text-jb-yellow",
  },
  {
    name: "Sync Engine",
    desc: "Peer-to-peer replication using Merkle tree comparison. Nodes discover and reconcile divergent event chains without a central coordinator.",
    color: "text-jb-accent",
  },
];

const specs = [
  { label: "Language", value: "Rust (no unsafe)" },
  { label: "Binary Size", value: "~8 MB" },
  { label: "Memory", value: "~32 MB typical" },
  { label: "Proof Latency", value: "<50 ms" },
  { label: "Storage Backend", value: "SQLite (WAL)" },
  { label: "Signing", value: "Ed25519 (COSE Sign1)" },
  { label: "Platforms", value: "Linux, macOS, ARM64" },
  { label: "Config", value: "TOML + env vars" },
];

export default function BridgeKernelPage() {
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
            <Eyebrow>Bridge Kernel</Eyebrow>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight max-w-3xl mb-6"
          >
            The runtime that makes energy data trustworthy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg text-jb-white/60 max-w-2xl leading-relaxed mb-8"
          >
            Bridge Kernel is a single-binary Rust runtime that ingests raw device
            telemetry, generates cryptographic proofs, evaluates policy rules, and
            persists verified events to an immutable ledger. Deploy it on any Linux
            device — from ARM gateways to cloud VMs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/docs/get-started/quickstart" variant="primary">
              Quick Start Guide
            </Button>
            <Button href="/docs/core-concepts/architecture" variant="tertiary">
              Architecture Docs
            </Button>
          </motion.div>
        </SectionWrapper>

        {/* Module Breakdown */}
        <SectionWrapper className="bg-jb-card">
          <Eyebrow className="mb-4">Architecture</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-10"
          >
            Six modules, one pipeline
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative border border-jb-mid-gray bg-jb-dark p-6"
              >
                <h3 className={`font-mono text-sm uppercase tracking-widest ${mod.color} mb-3`}>
                  {mod.name}
                </h3>
                <p className="text-sm text-jb-white/60 leading-relaxed">{mod.desc}</p>
                <span className="absolute top-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute top-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute bottom-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute bottom-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Technical Specs */}
        <SectionWrapper className="bg-jb-dark">
          <Eyebrow className="mb-4">Specifications</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-8"
          >
            Built for constrained environments
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="border border-jb-mid-gray/50 bg-jb-card/50 p-4"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-jb-text-muted mb-2">
                  {spec.label}
                </div>
                <div className="text-white font-semibold text-sm">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Data Integrity Visualization */}
        <SectionWrapper className="bg-jb-dark">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <Eyebrow className="mb-4">Data Integrity</Eyebrow>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4"
              >
                Order from chaos
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-jb-white/60 leading-relaxed max-w-lg"
              >
                Without cryptographic verification, energy data degrades into
                noise — unverifiable, disputable, and impossible to audit. Bridge
                Kernel maintains deterministic order across every event, keeping
                your settlement data structured and provable.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <Entropy
                size={320}
                labelLeft="Verified"
                labelRight="Unverified"
                className="border border-jb-mid-gray/30 overflow-hidden"
              />
            </motion.div>
          </div>
        </SectionWrapper>

        {/* CLI Preview */}
        <SectionWrapper className="bg-jb-card">
          <Eyebrow className="mb-4">Developer Experience</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-8"
          >
            One binary. One config file. Done.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-jb-mid-gray bg-jb-dark rounded-lg overflow-hidden max-w-3xl"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-jb-dark-gray">
              <div className="w-2.5 h-2.5 rounded-full bg-jb-red" />
              <div className="w-2.5 h-2.5 rounded-full bg-jb-yellow" />
              <div className="w-2.5 h-2.5 rounded-full bg-jb-accent" />
              <span className="ml-auto font-mono text-[10px] text-jb-text-muted">terminal</span>
            </div>
            <pre className="p-6 font-mono text-xs text-jb-accent/80 whitespace-pre leading-relaxed">{`$ curl -fsSL https://get.joulebridge.com | sh
$ bridge-kernel init --adapter modbus --site my-site
  ✓ Generated Ed25519 keypair (key_id: my-site)
  ✓ Created config at ./bridge-kernel.toml
  ✓ Initialized ledger at ./data/ledger.db

$ bridge-kernel start
  [INFO] adapter: modbus connected (192.168.1.100:502)
  [INFO] ingesting registers [40001:40020] every 5s
  [INFO] proof: Ed25519 signing active (key v1)
  [INFO] ledger: append-only mode, WAL enabled
  [INFO] ready — settlement evidence pipeline running`}</pre>
          </motion.div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper className="bg-jb-dark">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
              Try Bridge Kernel today
            </h2>
            <p className="text-jb-white/60 mb-8">
              Get running in under 5 minutes with our quickstart guide, or talk
              to us about a production pilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/docs/get-started/quickstart" variant="primary">
                Quick Start
              </Button>
              <Button href="/contact" variant="tertiary">
                Start a Pilot
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
