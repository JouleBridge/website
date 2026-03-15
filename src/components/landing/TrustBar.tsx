"use client";

import { motion } from "framer-motion";
import { Settings, Lock, ShieldCheck } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const badges = [
  { label: "RUST", icon: Settings },
  { label: "ED25519", icon: Lock },
  { label: "SHA-256", icon: ShieldCheck },
] as const;

const standards = "IEC 62056 · OCPP 1.6/2.0 · MODBUS RTU/TCP · IEC 61850";

export function TrustBar() {
  return (
    <section className="bg-jb-dark border-t border-b border-white/6">
      <motion.div
        className="container mx-auto max-w-7xl px-6 lg:px-8 py-14 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Eyebrow className="mb-4">Built With</Eyebrow>

        {/* Tech badges */}
        <div className="flex items-center justify-center gap-6 lg:gap-10">
          {/* Burnt-orange signal dot */}
          <span className="w-2 h-2 bg-[#D06120] shadow-[0_0_8px_rgba(208,97,32,0.4)] rounded-none" />

          {badges.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 border border-white/8 bg-white/[0.03] px-4 py-2 rounded-none font-mono text-sm text-jb-text-muted"
            >
              <Icon className="h-4 w-4" />
              {label}
            </span>
          ))}
        </div>

        {/* Standards row */}
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-jb-text-muted/50">
          {standards}
        </p>
      </motion.div>
    </section>
  );
}
