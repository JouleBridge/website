"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { DotGridBackground } from "@/components/ui/DotGridBackground";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TypewriterCode } from "@/components/ui/TypewriterCode";

const stats = [
  { value: 15, prefix: "$", suffix: "B", label: "India AT&C losses per year" },
  { value: 250, prefix: "", suffix: "M+", label: "Smart meters sanctioned under RDSS" },
  { value: 54, prefix: "", suffix: "M", label: "Already deployed (Jan 2026)" },
  { value: 8, prefix: "", suffix: "", label: "Protocol adapters in Bridge Kernel" },
];

export function HeroSection() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    let idleId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => setShowBackground(true), {
        timeout: 250,
      });
    } else {
      timeoutId = globalThis.setTimeout(() => setShowBackground(true), 140);
    }

    return () => {
      if ("cancelIdleCallback" in window && idleId !== null) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) {
        globalThis.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-jb-dark">
      <div className="absolute inset-0">
        {showBackground ? (
          <DotGridBackground className="h-full w-full" />
        ) : null}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(208,97,32,0.12),transparent_38%),linear-gradient(180deg,rgba(8,9,10,0.22),rgba(8,9,10,0.68))]" />

      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/8" />

      <div className="container relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-12 pt-24 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-16 lg:pt-24">
        {/* Left — Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 inline-flex items-center gap-3 border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 bg-[#D06120] shadow-[0_0_8px_rgba(208,97,32,0.4)]" />
            <span className="text-sm uppercase tracking-[0.18em] text-white/80">
              Verified data infrastructure for energy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            India is deploying{" "}
            <span className="text-[#D06120]">250 million</span>{" "}
            smart meters.{" "}
            <span className="text-jb-text-muted">
              The data they produce isn&apos;t verifiable.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 max-w-xl text-[0.98rem] leading-relaxed text-jb-white/72 sm:text-base md:text-lg"
          >
            Bridge Kernel signs every meter reading at the edge, chains it into
            cryptographic proofs, and delivers audit-ready evidence before
            reconciliation delays become disputes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/contact" variant="primary">
              Start a Pilot
            </Button>
            <Button href="/product" variant="white">
              Explore the Platform
            </Button>
          </motion.div>

          {/* Inline stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-6 border-t border-white/8 pt-8 md:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="relative pl-3">
                <div className={`absolute left-0 top-0 h-full w-[3px] ${i === 0 ? "bg-[#D06120]" : "bg-white/20"}`} />
                <div className="font-display text-3xl font-bold text-white md:text-4xl" style={{ textShadow: "0 0 40px rgba(255,255,255,0.12)" }}>
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} duration={2.2} />
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-jb-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Terminal preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block"
        >
          <div className="border border-white/10 bg-black/60 backdrop-blur-sm shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
              <div className="h-2 w-2 bg-[#D06120]" />
              <div className="h-2 w-2 bg-white/20" />
              <div className="h-2 w-2 bg-white/10" />
              <span className="ml-auto font-mono text-[10px] text-white/40">bridge-kernel</span>
            </div>
            <TypewriterCode
              lines={[
                "$ bridge-kernel init --adapter dlms",
                "✓ Runtime initialized",
                "✓ Ed25519 signing key loaded",
                "$ bridge-kernel ingest meter-001.json",
                "→ Canonicalizing event payload...",
                "→ Signing with Ed25519...",
                "→ Policy check: PASS",
                "✓ Proof envelope written → evidence/0x8a3f.json",
                "$ bridge-kernel verify 0x8a3f",
                "✓ Signature valid · Chain intact · Evidence ready",
              ]}
              typingSpeed={30}
              lineDelay={400}
              className="border-0 bg-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
