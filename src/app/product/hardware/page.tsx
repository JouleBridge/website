"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const hardwareTargets = [
  {
    title: "Industrial Edge Gateways",
    desc: "ARM64 or x86 gateways with RS-485, Ethernet, and optional cellular. Bridge Kernel runs as a systemd service with watchdog integration.",
    specs: ["ARM Cortex-A72+", "512 MB RAM min", "RS-485 / Ethernet", "DIN rail mount"],
    status: "Supported",
  },
  {
    title: "Embedded Linux SBCs",
    desc: "Single-board computers like Raspberry Pi 4/5 or BeagleBone for development, prototyping, and small-site deployments.",
    specs: ["ARM64 Linux", "1 GB RAM recommended", "USB / GPIO I/O", "SD or eMMC storage"],
    status: "Supported",
  },
  {
    title: "Ruggedized Field Units",
    desc: "IP65-rated enclosures with integrated compute, power supply, and I/O for harsh outdoor environments. Partner hardware program launching H2 2026.",
    specs: ["IP65 enclosure", "Wide temp range", "PoE or solar input", "Tamper-evident seals"],
    status: "H2 2026",
  },
  {
    title: "Smart Inverter Integration",
    desc: "Direct integration with next-generation smart inverters that embed Bridge Kernel signing at the firmware level. Co-development partnerships in progress.",
    specs: ["Firmware-level signing", "SunSpec native", "Zero-hop proof", "OEM partnerships"],
    status: "2027",
  },
];

export default function HardwarePage() {
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
            <Eyebrow>Hardware</Eyebrow>
          </div>

          <div className="inline-block border border-jb-accent/40 bg-jb-accent/10 px-3 py-1 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-jb-accent">
              Roadmap
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight max-w-3xl mb-6"
          >
            From gateway to inverter — proof at the source
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg text-jb-white/60 max-w-2xl leading-relaxed mb-8"
          >
            Bridge Kernel already runs on standard industrial gateways and Linux
            SBCs. Our hardware roadmap extends cryptographic proof deeper into
            the energy stack — from ruggedized field units to firmware-level
            signing in smart inverters.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/contact" variant="primary">
              Partner With Us
            </Button>
            <Button href="/product/bridge-kernel" variant="tertiary">
              Bridge Kernel Specs
            </Button>
          </motion.div>
        </SectionWrapper>

        {/* Hardware Targets */}
        <SectionWrapper className="bg-jb-card">
          <Eyebrow className="mb-4">Hardware Targets</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-10"
          >
            Every form factor, one runtime
          </motion.h2>

          <div className="space-y-6">
            {hardwareTargets.map((hw, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative border border-jb-mid-gray bg-jb-dark p-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-white">{hw.title}</h3>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border ${
                          hw.status === "Supported"
                            ? "text-jb-green border-jb-green/30"
                            : "text-jb-yellow border-jb-yellow/30"
                        }`}
                      >
                        {hw.status}
                      </span>
                    </div>
                    <p className="text-sm text-jb-white/60 leading-relaxed">{hw.desc}</p>
                  </div>
                  <div className="lg:w-64 shrink-0">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-jb-text-muted mb-2">
                      Specs
                    </div>
                    <ul className="space-y-1.5">
                      {hw.specs.map((spec, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-jb-white/50">
                          <span className="w-1 h-1 bg-jb-accent shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <span className="absolute top-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute top-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute bottom-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute bottom-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Security Hardware */}
        <SectionWrapper className="bg-jb-dark">
          <Eyebrow className="mb-4">Hardware Security</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-6"
          >
            Hardware-backed key storage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-jb-white/60 max-w-3xl leading-relaxed mb-8"
          >
            Bridge Kernel supports TPM 2.0 and Secure Element modules for
            hardware-backed Ed25519 key storage. Private keys never leave the
            secure enclave — signing operations are performed on-chip, making key
            extraction physically impossible.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "TPM 2.0", desc: "Industry-standard trusted platform module. Keys generated and stored on-chip. Supported on most industrial gateways." },
              { title: "Secure Element", desc: "Dedicated crypto co-processor (e.g., ATECC608B). Ideal for space-constrained embedded deployments." },
              { title: "Software Fallback", desc: "File-based key storage with OS-level permissions. Suitable for development and trusted environments." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-jb-mid-gray/50 bg-jb-card/50 p-6"
              >
                <h3 className="font-mono text-sm uppercase tracking-widest text-jb-accent mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-jb-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper className="bg-jb-card">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
              Hardware partnership program
            </h2>
            <p className="text-jb-white/60 mb-8">
              We work with gateway manufacturers, inverter OEMs, and system
              integrators to bring cryptographic proof closer to the energy
              source. Get in touch to explore a partnership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Partner With Us
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
