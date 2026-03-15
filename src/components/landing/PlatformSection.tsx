"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  DatabaseZap,
  Network,
  Orbit,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { EnergyEvidenceIllustration } from "@/components/ui/EnergyEvidenceIllustration";
import { Globe } from "@/components/ui/Globe";
import { ParallaxCard } from "@/components/ui/ParallaxCards";

const features = [
  {
    title: "Edge-first runtime",
    icon: Orbit,
    accent: "text-white/60",
    description:
      "Bridge Kernel is designed to run where the data is born, so verification starts at the operational edge instead of being bolted on later.",
  },
  {
    title: "Adapter-based ingestion",
    icon: ScanSearch,
    accent: "text-white/60",
    description:
      "Adapter-driven capture flows support DLMS, OCPP, Modbus, and IEC 61850 out of the box, with energy-specific protocol hardening built into the product core.",
  },
  {
    title: "Deterministic proof pipeline",
    icon: ShieldCheck,
    accent: "text-white/60",
    description:
      "Records are canonicalized, hashed, signed, and paired with verification metadata so the same event can be checked consistently later.",
  },
  {
    title: "Replay-aware controls",
    icon: BadgeCheck,
    accent: "text-white",
    description:
      "Replay windows, deduplication, and policy controls help filter bad or duplicate events before they contaminate the operational trail.",
  },
  {
    title: "Ledger and sync baseline",
    icon: DatabaseZap,
    accent: "text-white/60",
    description:
      "Local persistence and controlled sync flows ensure evidence integrity from edge to cloud, creating a foundation for higher-trust data movement.",
  },
  {
    title: "Roadmap-driven hardening",
    icon: Network,
    accent: "text-white/60",
    description:
      "Cloud control, dashboards, advanced protocol support, and commercial APIs layer around a strict runtime core — every addition inherits the same verification guarantees.",
  },
];

export function PlatformSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showHeavyVisuals, setShowHeavyVisuals] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShowHeavyVisuals(true);
        observer.disconnect();
      },
      { rootMargin: "280px 0px", threshold: 0.01 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 bg-jb-dark py-20 section-lines md:py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <Eyebrow className="mb-4 text-white/60">Why Bridge Kernel</Eyebrow>

        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="jb-section-title max-w-3xl">
              Built to make{" "}
              <span className="jb-title-gradient">
                high-trust telemetry
              </span>{" "}
              operationally usable.
            </motion.h2>
            <div className="mt-5">
              <Button href="/product" variant="secondary">Product Details</Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[360px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,22,0.98),rgba(11,13,15,0.98))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_60px_rgba(0,0,0,0.24)]">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
              Evidence Network View
            </div>
            {showHeavyVisuals ? (
              <Globe
                className="mx-auto aspect-square h-auto max-h-[320px] w-full"
                size={320}
                dotColor="rgba(255, 255, 255, ALPHA)"
                arcColor="rgba(255, 255, 255, 0.3)"
                markerColor="rgba(208, 97, 32, 1)"
              />
            ) : (
              <div className="mx-auto aspect-square max-h-[320px] w-full border border-white/6 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_40%),linear-gradient(180deg,rgba(18,20,22,0.92),rgba(11,13,15,0.98))]" />
            )}
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}>
              <ParallaxCard className="border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,22,0.98),rgba(11,13,15,0.98))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.24)] h-full">
                <div className="mb-4 flex items-center gap-3">
                  <div className="border border-white/10 bg-black/20 p-2.5">
                    <item.icon className={`h-4 w-4 ${item.accent}`} />
                  </div>
                  <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-white">{item.title}</h3>
                </div>
                <p className="leading-relaxed text-jb-white/66">{item.description}</p>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-jb-text-muted">JouleBridge Platform View</div>
          {showHeavyVisuals ? (
            <EnergyEvidenceIllustration />
          ) : (
            <div className="h-[420px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,22,0.98),rgba(11,13,15,0.98))]" />
          )}
        </div>
      </div>
    </section>
  );
}
