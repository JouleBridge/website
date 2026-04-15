"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BadgeCheck,
  FileSearch,
  GitBranch,
  ShieldCheck,
  TimerReset,
} from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const benefits = [
  {
    title: "The link drops. The site keeps running.",
    text: "Local control stays close to the hardware, so the site can still respond inside safety and policy limits when remote systems are delayed or unavailable.",
    icon: TimerReset,
    iconColor: "text-white",
    glow: "shadow-[0_0_24px_rgba(255,255,255,0.12)]",
    featured: true,
  },
  {
    title: "One operating view across mixed hardware",
    text: "Meters, inverters, storage, solar, chargers, and flexible loads move through one operating model instead of six disconnected tools.",
    icon: ShieldCheck,
    iconColor: "text-white/60",
    glow: "shadow-[0_0_24px_rgba(255,255,255,0.08)]",
    featured: false,
  },
  {
    title: "Every important action is reviewable",
    text: "Commands, measurements, anomaly flags, and exports inherit the same record so teams can review what happened without reconstructing the event.",
    icon: GitBranch,
    iconColor: "text-white/60",
    glow: "shadow-[0_0_24px_rgba(255,255,255,0.08)]",
    featured: false,
  },
  {
    title: "Forecasting helps before the tariff window closes",
    text: "On-device forecasts and anomaly signals arrive close enough to the site to support real decisions, not just next-day dashboards.",
    icon: BadgeCheck,
    iconColor: "text-[#D06120]",
    glow: "shadow-[0_0_24px_rgba(208,97,32,0.18)]",
    featured: true,
  },
  {
    title: "Anomalies surface before they become incidents",
    text: "Theft, drift, thermal issues, and control mismatches can be flagged while there is still time to act at the site boundary.",
    icon: Activity,
    iconColor: "text-white",
    glow: "shadow-[0_0_24px_rgba(255,255,255,0.12)]",
    featured: false,
  },
  {
    title: "Finance and compliance get audit-ready records",
    text: "Teams downstream receive a signed operating record they can inspect, share, and export instead of a report assembled after the fact.",
    icon: FileSearch,
    iconColor: "text-white/60",
    glow: "shadow-[0_0_24px_rgba(255,255,255,0.08)]",
    featured: false,
  },
];

export function BenefitsSection() {
  return (
    <section className="relative z-10 bg-jb-section-alt py-20 md:py-24">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <Eyebrow className="mb-4">Outcomes</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="jb-section-title mb-12 max-w-3xl"
        >
          What changes when{" "}
          <span className="text-[#D06120]">local control, mixed-vendor coordination,</span>{" "}
          <span className="text-jb-text-muted">and review-ready records share one layer</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`group relative flex min-h-[180px] flex-col justify-between p-6 transition-colors duration-300 hover:bg-jb-card-hover ${
                item.featured
                  ? "jb-shadow-card-featured border border-white/8 border-l-[3px] border-l-[#D06120] bg-jb-section-elevated md:col-span-2"
                  : "jb-shadow-card border border-white/6 bg-jb-card"
              } ${item.featured ? "min-h-[200px]" : ""}`}
            >
              <div>
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center border border-white/10 bg-[linear-gradient(180deg,rgba(25,28,32,0.98),rgba(12,14,16,0.98))] ${item.glow}`}
                >
                  <item.icon className={`h-5 w-5 ${item.iconColor} stroke-[2.2]`} />
                </div>
                <h3 className="mb-2 font-display text-xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-jb-text-muted">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
