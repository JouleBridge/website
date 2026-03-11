"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MetricCounter } from "@/components/ui/MetricCounter";

function BackgroundGrid() {
  const blocks = [
    "left-[8%] top-10 h-12 w-12 bg-jb-green/20",
    "left-[18%] top-28 h-8 w-8 bg-jb-yellow/20",
    "right-[18%] top-12 h-14 w-14 bg-jb-accent/18",
    "right-[10%] top-28 h-10 w-10 bg-jb-pink/18",
    "left-[20%] bottom-14 h-10 w-10 bg-jb-accent/16",
    "right-[24%] bottom-12 h-12 w-12 bg-jb-green/16",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:140px_140px] opacity-40" />
      {blocks.map((className, index) => (
        <div
          key={index}
          className={`absolute border border-white/15 ${className}`}
        />
      ))}
    </div>
  );
}

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-jb-dark py-20 section-lines">
      <BackgroundGrid />

      <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-jb-green" />
          <span className="text-sm uppercase tracking-[0.16em] text-jb-green/90">
            Pilot Program Open
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-5 text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          Scope the right pilot before you overbuild the stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-jb-white/70"
        >
          Start with the workflow where weak evidence is already slowing you down.
          JouleBridge pilots are designed to validate deployment shape, proof quality,
          and operating fit before a broader rollout.
        </motion.p>

        <div className="mb-12 grid grid-cols-2 gap-8 border-y border-jb-mid-gray/30 py-8 md:grid-cols-4">
          <MetricCounter value="4" label="Current adapter baseline" />
          <MetricCounter value="6" label="Core runtime layers" />
          <MetricCounter value="3" label="Primary pilot workflows" />
          <MetricCounter value="11" label="Core modules" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Button href="/contact" variant="primary">
            Request a Pilot
          </Button>
          <Button href="/docs" variant="white">
            Read the Docs
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
