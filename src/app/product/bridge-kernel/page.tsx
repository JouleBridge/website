"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Entropy } from "@/components/ui/Entropy";
import { TypewriterCode } from "@/components/ui/TypewriterCode";

const modules = [
  {
    name: "Adapter Layer",
    desc: "Protocol-specific modules that normalize charger, ESS, solar, meter, and site-system inputs into one runtime model.",
    color: "text-white/80",
  },
  {
    name: "State Builder",
    desc: "Deterministic shaping of local site state so routing and proof generation start from a stable operating picture.",
    color: "text-[#D06120]",
  },
  {
    name: "Command Path",
    desc: "Local reservation, dispatch, acknowledgement, and exception handling for assets that have to keep moving when the site is under pressure.",
    color: "text-[#D06120]",
  },
  {
    name: "Policy Gate",
    desc: "Evaluates active policy and safety envelopes before commands are allowed to move deeper into the site runtime.",
    color: "text-jb-pink",
  },
  {
    name: "Proof Writer",
    desc: "Seals intent, execution, and measured outcome into a signed record that later support and counterparties can review.",
    color: "text-white/80",
  },
  {
    name: "Local Store",
    desc: "Keeps the site record close to the operating boundary before proofs are exported or synchronized upward.",
    color: "text-[#D06120]",
  },
];

const specs = [
  { label: "Role", value: "Asset Agent" },
  { label: "Language", value: "Rust" },
  { label: "Execution", value: "Local-first" },
  { label: "Proof", value: "Ed25519 signed" },
  { label: "Deployment", value: "Industrial gateway" },
  { label: "State", value: "Deterministic" },
  { label: "Control", value: "Policy-gated" },
  { label: "Upgrade path", value: "Secure element" },
];

export default function BridgeKernelPage() {
  return (
    <>
      <Navbar />
      <main>
        <SectionWrapper className="bg-jb-dark pt-32 md:pt-40 pb-10 md:pb-14">
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/product"
              className="font-mono text-xs uppercase tracking-widest text-jb-text-muted hover:text-white transition-colors"
            >
              Platform
            </Link>
            <span className="text-jb-text-muted">/</span>
            <Eyebrow>Asset Agent Runtime</Eyebrow>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-semibold text-white tracking-tight max-w-3xl mb-6"
          >
            The edge runtime that keeps the site honest
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg text-jb-white/60 max-w-2xl leading-relaxed mb-8"
          >
            This runtime sits closest to the equipment. It reads asset state,
            participates in local control, and produces signed operational records
            that feed the wider JouleBridge stack.
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

        <SectionWrapper className="bg-jb-card">
          <Eyebrow className="mb-4">Architecture</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-10"
          >
            Six modules, one local control path
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

        <SectionWrapper className="bg-jb-dark">
          <Eyebrow className="mb-4">Specifications</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-8"
          >
            Built for constrained, real-world sites
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

        <SectionWrapper className="bg-jb-dark">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <Eyebrow className="mb-4">Operating Boundary</Eyebrow>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4"
              >
                Order from site complexity
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-jb-white/60 leading-relaxed max-w-lg"
              >
                Without a neutral edge runtime, the site turns into disconnected
                control islands. The Asset Agent keeps the local record and the local
                execution path disciplined enough for the wider stack to trust.
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
                labelLeft="Coordinated"
                labelRight="Fragmented"
                className="border border-jb-mid-gray/30 overflow-hidden"
              />
            </motion.div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-jb-card">
          <Eyebrow className="mb-4">Operator Experience</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-8"
          >
            One binary. One site boundary. Clear proof path.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-white/10 bg-jb-dark overflow-hidden max-w-3xl"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
              <div className="w-2.5 h-2.5 bg-[#D06120]" />
              <div className="w-2.5 h-2.5 bg-white/10" />
              <div className="w-2.5 h-2.5 bg-white/6" />
              <span className="ml-auto font-mono text-[10px] text-jb-text-muted">terminal</span>
            </div>
            <TypewriterCode
              lines={[
                "$ jb-ctl provision --token site-plant-07",
                "  ✓ Asset Agent enrolled",
                "  ✓ Local keystore initialized",
                "$ asset-agent start --profile pilot",
                "  [INFO] adapter: ocpp connected",
                "  [INFO] adapter: modbus ESS online",
                "  [INFO] site-router link established",
                "  [INFO] proof: signing active",
                "  [INFO] runtime ready - site boundary live",
              ]}
              typingSpeed={25}
              lineDelay={250}
              className="border-0 bg-transparent"
            />
          </motion.div>
        </SectionWrapper>

        <SectionWrapper className="bg-jb-dark">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
              Want to pressure-test the runtime on a real site?
            </h2>
            <p className="text-jb-white/60 mb-8">
              We can scope the edge runtime, partner hardware path, and proof
              expectations around a real pilot instead of a generic platform demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Start a Pilot
              </Button>
              <Button href="/product" variant="tertiary">
                Back to Platform
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
