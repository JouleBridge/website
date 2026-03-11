"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { EnergyEvidenceIllustration } from "@/components/ui/EnergyEvidenceIllustration";

const features = [
  {
    title: "Edge-first runtime",
    description:
      "Bridge Kernel is designed to run where the data is born, so verification starts at the operational edge instead of being bolted on later.",
  },
  {
    title: "Adapter-based ingestion",
    description:
      "The current implementation already supports adapter-driven capture flows, and the energy-specific protocol roadmap is being hardened around the product core.",
  },
  {
    title: "Deterministic proof pipeline",
    description:
      "Records are canonicalized, hashed, signed, and paired with verification metadata so the same event can be checked consistently later.",
  },
  {
    title: "Replay-aware controls",
    description:
      "Replay windows, deduplication, and policy controls help filter bad or duplicate events before they contaminate the operational trail.",
  },
  {
    title: "Ledger and sync baseline",
    description:
      "The current baseline includes local persistence and controlled sync flows, creating a foundation for higher-trust evidence movement.",
  },
  {
    title: "Roadmap-driven hardening",
    description:
      "Cloud control, dashboards, advanced protocol support, and broader commercial surfaces are being layered around a stricter runtime core.",
  },
];


export function PlatformSection() {
  return (
    <section className="relative z-10 bg-jb-light-gray py-16 md:py-20 section-lines section-lines-light">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <Eyebrow className="mb-4 text-[#5a6777]">Why Bridge Kernel</Eyebrow>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="jb-section-title-light max-w-3xl"
          >
            Built to make high-trust telemetry{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-jb-accent to-jb-green">
              operationally usable.
            </span>
          </motion.h2>
          <Button
            href="/product"
            variant="secondary"
            className="border-[#cbd5df] text-[#101419] hover:bg-black/[0.03]"
          >
            Product Details
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <h3 className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#101419]">
                {item.title}
              </h3>
              <p className="leading-relaxed text-[#556273]">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#5a6777]">
            JouleBridge Platform View
          </div>
          <EnergyEvidenceIllustration />
        </div>
      </div>
    </section>
  );
}
