"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { DotGridBackground } from "@/components/ui/DotGridBackground";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TypewriterCode } from "@/components/ui/TypewriterCode";

const stats = [
  { value: 4, prefix: "", suffix: "", label: "Layers: observe, route, prove, review" },
  { value: 8, prefix: "", suffix: "+", label: "Protocol and adapter lanes" },
  { value: 12, prefix: "", suffix: "-week", label: "Pilot window on one production site" },
  { value: 0, prefix: "", suffix: "", label: "Required rip-and-replace for first pilot" },
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
        {showBackground ? <DotGridBackground className="h-full w-full" /> : null}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(208,97,32,0.12),transparent_38%),linear-gradient(180deg,rgba(8,9,10,0.22),rgba(8,9,10,0.68))]" />

      <div className="absolute left-0 right-0 top-0 h-px bg-white/8" />

      <div className="container relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-10 pt-20 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-12 lg:pt-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 inline-flex items-center gap-3 border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 bg-[#D06120] shadow-[0_0_8px_rgba(208,97,32,0.4)]" />
            <span className="text-sm uppercase tracking-[0.18em] text-white/80">
              Bridge Kernel | on-site runtime for distributed energy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 font-display text-[1.8rem] font-bold leading-[1.06] tracking-tight text-white sm:text-[2.35rem] md:text-[2.8rem] lg:text-[3.05rem]"
          >
            Control mixed-vendor{" "}
            <span className="text-[#D06120]">energy assets on-site</span>. Keep
            operating when the cloud fails.{" "}
            <span className="text-jb-text-muted">
              Prove every important decision.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-xl text-[0.95rem] leading-relaxed text-jb-white/72 sm:text-base md:text-[1.02rem]"
          >
            JouleBridge helps industrial sites and EV depots run batteries,
            solar, chargers, meters, and flexible loads through one local
            control layer. Bridge Kernel keeps the site responsive, reduces
            dependence on disconnected vendor tools, and produces audit-ready
            records for dispatch, settlement, and review.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/contact" variant="primary">
              Scope a Pilot
            </Button>
            <Button href="/product" variant="white">
              See How It Works
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-5 border-t border-white/8 pt-6 md:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="relative pl-3">
                <div
                  className={`absolute left-0 top-0 h-full w-[3px] ${
                    i === 0 ? "bg-[#D06120]" : "bg-white/20"
                  }`}
                />
                <div
                  className="font-display text-3xl font-bold text-white md:text-4xl"
                  style={{ textShadow: "0 0 40px rgba(255,255,255,0.12)" }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2.2}
                  />
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-jb-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block"
        >
          <div className="border border-white/10 bg-black/60 shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
              <div className="h-2 w-2 bg-[#D06120]" />
              <div className="h-2 w-2 bg-white/20" />
              <div className="h-2 w-2 bg-white/10" />
              <span className="ml-auto font-mono text-[10px] text-white/40">
                joulebridge
              </span>
            </div>
            <TypewriterCode
              lines={[
                "$ jb pilot scope --site plant-07",
                "[OK] meter, inverter, storage, and charger surfaces mapped",
                "[OK] local policy loaded",
                "[OK] forecast model ready",
                "$ site-router dispatch --window peak --target-kw 480",
                "-> local safety envelope: pass",
                "-> dispatch issued at site boundary",
                "-> evidence bundle sealed",
                "$ jb export evidence dispatch-2041",
                "[OK] review pack ready | signature valid | chain intact",
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
