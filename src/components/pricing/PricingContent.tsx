"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const tiers = [
  {
    name: "Discovery",
    price: "Contact us",
    period: "",
    description: "A technical and commercial scoping engagement for teams that need to map the workflow before a pilot.",
    featured: false,
    features: [
      { text: "Workflow and data-path review", included: true },
      { text: "Architecture fit assessment", included: true },
      { text: "Pilot scope definition", included: true },
      { text: "Protocol and deployment review", included: true },
      { text: "Commercial proposal", included: true },
      { text: "Production rollout", included: false },
      { text: "Dedicated implementation support", included: false },
      { text: "Multi-site program governance", included: false },
      { text: "Custom operating model", included: false },
    ],
    cta: "Talk to Us",
    ctaHref: "/contact",
  },
  {
    name: "Pilot",
    price: "Contact us",
    period: "",
    description: "A guided pilot for proving trusted telemetry, operational evidence, and workflow fit in a real deployment.",
    featured: true,
    features: [
      { text: "Single workflow or site pilot", included: true },
      { text: "Edge deployment and configuration", included: true },
      { text: "Evidence and verification outputs", included: true },
      { text: "Weekly review cadence", included: true },
      { text: "Pilot KPI definition", included: true },
      { text: "Multi-site rollout", included: false },
      { text: "Custom platform features", included: false },
      { text: "Long-term SLA", included: false },
      { text: "Enterprise governance", included: false },
    ],
    cta: "Start a Pilot",
    ctaHref: "/contact",
  },
  {
    name: "Rollout",
    price: "Custom",
    period: "",
    description: "Production rollout for operators who need broader deployment, stronger controls, and long-term operating support.",
    featured: false,
    features: [
      { text: "Production deployment plan", included: true },
      { text: "Extended support model", included: true },
      { text: "Operational runbooks and governance", included: true },
      { text: "Custom integration planning", included: true },
      { text: "Security and rollout review", included: true },
      { text: "Dedicated support + SLA", included: true },
      { text: "Multi-site program support", included: true },
      { text: "Commercial rollout structure", included: true },
      { text: "Roadmap alignment workshops", included: true },
    ],
    cta: "Contact Sales",
    ctaHref: "/contact",
  },
];

const faqs = [
  {
    q: "Do you publish fixed prices on the website?",
    a: "Not yet. JouleBridge engagements depend on workflow complexity, site conditions, deployment model, and the level of implementation support required. We scope and price based on the real operating problem rather than a generic SaaS tier.",
  },
  {
    q: "What does a pilot include?",
    a: "A pilot usually includes workflow scoping, configuration, deployment planning, evidence outputs, review cadence, and a closeout recommendation for whether the system should expand into a larger rollout.",
  },
  {
    q: "Can I deploy Bridge Kernel on-premise?",
    a: "Yes. Bridge Kernel runs on ARM/x86 edge gateways, on-premise Linux/Windows servers, and containerized environments. Deployment model is scoped during discovery.",
  },
  {
    q: "What protocols do you support?",
    a: "Bridge Kernel ships with adapters for DLMS/IEC 62056, OCPP 1.6/2.0, Modbus RTU/TCP, and webhook/REST. IEC 61850 is on the roadmap. Protocol fit is confirmed during discovery to ensure adapter coverage matches your deployment.",
  },
  {
    q: "How long does integration take?",
    a: "Typical pilot deployments take 2-4 weeks from scoping to first verified evidence output. Production rollouts depend on site count, protocol mix, and integration depth.",
  },
  {
    q: "How should we engage if we are early in evaluation?",
    a: "Start with discovery. If the workflow and technical fit are strong, we can structure a pilot and then a broader rollout without pretending that every customer starts in the same place.",
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
          <Eyebrow className="mb-4">Pricing</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="jb-section-title mb-5"
          >
            Engagement models that{" "}
            <span className="jb-title-gradient">
              match operational reality
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="jb-section-copy mx-auto"
          >
            Start with scoped discovery. Move into a pilot when the workflow is clear. Expand into rollout when the evidence model proves itself.
          </motion.p>
        </div>
      </section>

      <section className="relative bg-jb-dark pb-16 section-lines">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
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
                  <a
                    href={tier.ctaHref}
                    className="btn-jb inline-flex items-center justify-center bg-white px-8 py-3.5 font-mono text-sm font-semibold uppercase tracking-widest text-jb-dark shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-white/90 w-full"
                  >
                    {tier.cta}
                    <span className="btn-corners" />
                  </a>
                ) : (
                  <Button
                    href={tier.ctaHref}
                    variant="secondary"
                    className="w-full"
                  >
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
            <span className="jb-title-gradient">
              Frequently asked
            </span>{" "}
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
