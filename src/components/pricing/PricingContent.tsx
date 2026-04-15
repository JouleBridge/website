"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const tiers = [
  {
    name: "Discovery",
    price: "Fixed fee",
    period: "1-2 weeks",
    description:
      "A working session on the site, hardware mix, protocol access, tariff reality, and evidence expectations. Produces a scoped proposal and a go or no-go.",
    featured: false,
    features: [
      { text: "Site and hardware topology review", included: true },
      { text: "Protocol and mixed-vendor integration assessment", included: true },
      { text: "Tariff, DISCOM, and evidence requirement scoping", included: true },
      { text: "Pilot KPI and operating boundary definition", included: true },
      { text: "Commercial proposal and go or no-go", included: true },
      { text: "Live site deployment", included: false },
      { text: "Weekly operating reviews", included: false },
      { text: "On-device forecasting in production", included: false },
      { text: "Multi-site rollout planning", included: false },
    ],
    cta: "Start Discovery",
    ctaHref: "/contact",
  },
  {
    name: "Pilot",
    price: "Pilot fee",
    period: "one site | 12 weeks",
    description:
      "A production deployment on one site. Bridge Kernel runs monitoring, local control, forecast-aware dispatch, and audit-ready evidence from end to end.",
    featured: true,
    features: [
      { text: "Single-site production deployment", included: true },
      { text: "Partner-hardware or gateway setup", included: true },
      { text: "Monitoring, control, and evidence chain live", included: true },
      { text: "Forecasting and anomaly detection on-site", included: true },
      { text: "Weekly operating review cadence", included: true },
      { text: "Signed evidence pack at close", included: true },
      { text: "Multi-site rollout", included: false },
      { text: "Central review surfaces", included: false },
      { text: "Expanded annual program", included: false },
    ],
    cta: "Scope a Pilot",
    ctaHref: "/contact",
  },
  {
    name: "Rollout",
    price: "Annual platform",
    period: "+ per-endpoint",
    description:
      "Post-pilot production contract. Annual platform commit plus per-endpoint runtime fees, central review surfaces, premium modules, and repeatable rollout support.",
    featured: false,
    features: [
      { text: "Repeatable install motion", included: true },
      { text: "Extended support and runbooks", included: true },
      { text: "On-device forecasting across deployed sites", included: true },
      { text: "Central review and policy distribution", included: true },
      { text: "Security and upgrade review", included: true },
      { text: "Dedicated support and SLA", included: true },
      { text: "Multi-site program support", included: true },
      { text: "Annual platform plus per-endpoint pricing", included: true },
      { text: "Roadmap alignment workshops", included: true },
    ],
    cta: "Plan a Rollout",
    ctaHref: "/contact",
  },
];

const faqs = [
  {
    q: "Do you publish fixed prices on the website?",
    a: "No. Every site has a different hardware mix, protocol list, tariff reality, and evidence requirement. We scope against the actual deployment and share numbers after discovery.",
  },
  {
    q: "What does a pilot include?",
    a: "Twelve weeks on one production site. Bridge Kernel runs monitoring, local control, forecast-aware dispatch, anomaly detection, weekly operating reviews, and a signed evidence pack at close.",
  },
  {
    q: "What kinds of sites fit best?",
    a: "Best fit today: open-access industrial sites and EV depots with mixed hardware, hard operating constraints, and a need for stronger local control plus audit-ready records.",
  },
  {
    q: "Can Bridge Kernel run on existing hardware?",
    a: "Yes. Bridge Kernel lands on partner industrial gateways and Jetson-class edge boxes. No rip-and-replace is required for the first pilot.",
  },
  {
    q: "How long does a deployment take?",
    a: "Twelve weeks from kickoff to a signed evidence pack on one production site, assuming partner hardware and protocol access are ready on day one.",
  },
  {
    q: "What does the on-device intelligence actually do?",
    a: "Forecasting, anomaly detection, and dispatch support run on-site, not in a cloud-only loop. Each prediction is attached to the evidence record with model version and input context.",
  },
  {
    q: "How should we engage if we are still evaluating?",
    a: "Start with Discovery. One working session, one scoped proposal, and a clear go or no-go within two weeks.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/8">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="pr-4 font-medium text-white">{q}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className={`shrink-0 text-jb-text-muted transition-transform ${open ? "rotate-45" : ""}`}
        >
          <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      {open && <div className="pb-5 pr-8 leading-relaxed text-jb-text-muted">{a}</div>}
    </div>
  );
}

export function PricingContent() {
  return (
    <>
      <section className="relative bg-jb-dark pb-12 pt-28 section-lines">
        <div className="container mx-auto max-w-7xl px-6 text-center lg:px-8">
          <Eyebrow className="mb-4">Pilot Program</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="jb-section-title mb-5"
          >
            How a JouleBridge pilot{" "}
            <span className="jb-title-gradient">actually works</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="jb-section-copy mx-auto"
          >
            Discovery first. One production pilot next. Expand only when the site
            outcome and evidence model justify it. No open-ended monthly
            subscription before the operating result is clear.
          </motion.p>
        </div>
      </section>

      <section className="relative bg-jb-dark pb-16 section-lines">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col border p-8 ${
                  tier.featured
                    ? "border-white/12 border-t-[2px] border-t-white/30 bg-gradient-to-b from-[#0f1114] to-[#0c0e10] jb-shadow-card-featured"
                    : "border-white/8 bg-gradient-to-b from-[#0f1114] to-[#0c0e10] jb-shadow-card"
                }`}
              >
                {tier.featured && (
                  <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                    Recommended
                  </div>
                )}
                <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#D06120]">{tier.name}</div>
                <div className="mb-2">
                  <span className="text-4xl font-semibold text-white">{tier.price}</span>
                  {tier.period && <span className="ml-2 text-sm text-jb-text-muted">/ {tier.period}</span>}
                </div>
                <p className="mb-8 text-sm text-jb-text-muted">{tier.description}</p>

                <div className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      {feature.included ? (
                        <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 shrink-0 text-white">
                          <path d="M13.5 4.5L6 12L2.5 8.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 shrink-0 text-jb-text-muted/40">
                          <path d="M4 8H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      )}
                      <span className={`text-sm ${feature.included ? "text-jb-white/62" : "text-jb-text-muted/40"}`}>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {tier.featured ? (
                  <Button href={tier.ctaHref} variant="primary" className="w-full">
                    {tier.cta}
                  </Button>
                ) : (
                  <Button href={tier.ctaHref} variant="secondary" className="w-full">
                    {tier.cta}
                  </Button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-jb-dark py-24 section-lines">
        <div className="container mx-auto max-w-3xl px-6 lg:px-8">
          <Eyebrow className="mb-8">FAQ</Eyebrow>
          <h2 className="jb-section-title mb-12 max-w-3xl">
            <span className="jb-title-gradient">Frequently asked</span>{" "}
            questions
          </h2>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
