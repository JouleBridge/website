"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import NeuralBackground from "@/components/ui/NeuralBackground";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-jb-dark section-lines">
      <div className="absolute inset-0">
        <NeuralBackground
          className="h-full w-full"
          color="#f59e0b"
          trailOpacity={0.12}
          particleCount={520}
          speed={1}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.18),transparent_24%),linear-gradient(180deg,rgba(8,9,10,0.42),rgba(8,9,10,0.78))]" />

      <div className="container relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pb-12 pt-24 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 inline-flex items-center gap-3 border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 bg-[#f59e0b]" />
            <span className="text-sm uppercase tracking-[0.18em] text-[#f6b44d]">
              Verified data infrastructure for energy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.75rem]"
          >
            Make{" "}
            <span className="jb-title-gradient jb-title-gradient-warm">
              critical energy records
            </span>{" "}
            easier to trust.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 max-w-2xl text-[0.98rem] leading-relaxed text-jb-white/72 sm:text-base md:text-lg"
          >
            JouleBridge helps utilities, AMISPs, C&amp;I operators, and EV platforms
            turn telemetry into deterministic records, cryptographic proofs, and
            audit-ready evidence before reconciliation delays and disputes spread
            through the stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/contact" variant="primary">
              Start a Pilot
            </Button>
            <Button href="/product" variant="white">
              Explore the Platform
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
