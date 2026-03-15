"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="group relative overflow-hidden bg-jb-section-alt py-20">
      {/* Hairline divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* White radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[512px] w-[60%] translate-y-4 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)] opacity-80 transition-all duration-500 group-hover:translate-y-[-2rem] group-hover:opacity-100" />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[256px] w-[40%] translate-y-4 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_60%)] opacity-80 transition-all duration-500 group-hover:translate-y-[-1rem] group-hover:opacity-100" />
      </div>

      <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 bg-[#D06120] shadow-[0_0_8px_rgba(208,97,32,0.4)]" />
          <span className="text-sm uppercase tracking-[0.16em] text-white/80">
            Pilot Program Open
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
        >
          The smart meter rollout is happening <span className="text-[#D06120]">now</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-jb-white/70"
        >
          Early verification infrastructure becomes the standard.
          Start with the workflow where weak evidence is already slowing you
          down — Bridge Kernel validates deployment shape, proof quality, and
          operating fit before a broader rollout.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="/contact"
            className="btn-jb relative inline-flex items-center justify-center gap-2 border border-[#D06120] bg-[#D06120] px-8 py-3.5 font-mono text-sm font-semibold uppercase tracking-widest text-white shadow-[0_0_30px_rgba(208,97,32,0.3)] transition-all duration-300 hover:bg-[#D06120]/90"
          >
            Request a Pilot
            <span className="btn-corners" />
          </a>
          <Button href="/docs" variant="white">
            Read the Docs
          </Button>
        </motion.div>
      </div>

      {/* Hairline divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
}
