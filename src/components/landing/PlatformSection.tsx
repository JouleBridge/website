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
    title: "Asset Agent at the edge",
    icon: Orbit,
    accent: "text-white/60",
    description:
      "The edge runtime talks to real equipment, keeps the site picture current, and enforces the local operating boundary close to the hardware.",
  },
  {
    title: "Mixed-vendor adapter layer",
    icon: ScanSearch,
    accent: "text-white/60",
    description:
      "OCPP, Modbus, DLMS, SunSpec, CAN, IEC 62056, IEC 61850, and more - normalized into one operating model instead of scattered vendor tools.",
  },
  {
    title: "Site Router local control",
    icon: ShieldCheck,
    accent: "text-white/60",
    description:
      "Policy, constraints, and forecast outputs converge into feasible actions the site can execute locally and explain later.",
  },
  {
    title: "Signed evidence chain",
    icon: BadgeCheck,
    accent: "text-white",
    description:
      "Reads, commands, measurements, and exports are captured in one review-ready record. Audit does not start from scratch after the event.",
  },
  {
    title: "On-device forecasting and anomaly flags",
    icon: DatabaseZap,
    accent: "text-white",
    description:
      "Forecasting and anomaly detection run close to the telemetry so the site can act in time and preserve the model context for later review.",
  },
  {
    title: "Multi-site review surface",
    icon: Network,
    accent: "text-white/60",
    description:
      "Cloud review surfaces help teams compare sites, share policy, and export records without taking local execution away from the site boundary.",
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
    <section
      ref={sectionRef}
      className="relative z-10 bg-jb-dark py-20 section-lines md:py-24"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <Eyebrow className="mb-4 text-white/60">Platform</Eyebrow>

        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="jb-section-title max-w-3xl"
            >
              The operating layer for{" "}
              <span className="jb-title-gradient">
                mixed-vendor energy sites
              </span>
              .
            </motion.h2>
            <div className="mt-5">
              <Button href="/product" variant="secondary">
                Platform Details
              </Button>
            </div>
          </div>
          <div className="jb-theme-shell mx-auto w-full max-w-[360px] p-4">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
              Multi-Site View
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
              <div className="mx-auto aspect-square max-h-[320px] w-full border border-white/6 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_40%)] bg-jb-card/70" />
            )}
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <ParallaxCard className="jb-theme-shell h-full p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="border border-white/10 bg-black/20 p-2.5">
                    <item.icon className={`h-4 w-4 ${item.accent}`} />
                  </div>
                  <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="leading-relaxed text-jb-white/66">
                  {item.description}
                </p>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-jb-text-muted">
            Runtime Topology
          </div>
          {showHeavyVisuals ? (
            <EnergyEvidenceIllustration />
          ) : (
            <div className="jb-theme-shell h-[420px]" />
          )}
        </div>
      </div>
    </section>
  );
}
