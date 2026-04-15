"use client";

import { motion } from "framer-motion";
import { Settings, Lock, ShieldCheck } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const badges = [
  { label: "MIXED-VENDOR READY", icon: Settings },
  { label: "RUNS ON PARTNER GATEWAYS", icon: Lock },
  { label: "PILOT-FIRST DEPLOYMENT", icon: ShieldCheck },
] as const;

const standards =
  "OCPP 1.6/2.0 | MODBUS RTU/TCP | DLMS | IEC 62056 | IEC 61850 | SUNSPEC | CAN";

export function TrustBar() {
  return (
    <section className="border-b border-t border-white/6 bg-jb-dark">
      <motion.div
        className="container mx-auto max-w-7xl px-6 py-14 text-center lg:px-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Eyebrow className="mb-4">Deployment Reality</Eyebrow>

        <div className="flex items-center justify-center gap-6 lg:gap-10">
          <span className="h-2 w-2 rounded-none bg-[#D06120] shadow-[0_0_8px_rgba(208,97,32,0.4)]" />

          {badges.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-none border border-white/8 bg-white/[0.03] px-4 py-2 font-mono text-sm text-jb-text-muted"
            >
              <Icon className="h-4 w-4" />
              {label}
            </span>
          ))}
        </div>

        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-jb-text-muted/50">
          {standards}
        </p>
      </motion.div>
    </section>
  );
}
