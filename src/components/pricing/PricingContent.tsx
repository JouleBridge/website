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
    a: "Yes. The product direction supports edge and on-premise deployment models. The exact rollout model depends on your environment and should be agreed during scoping.",
  },
  {
    q: "What protocols do you support?",
    a: "The product roadmap covers multiple energy and telemetry protocols, but support maturity depends on the current implementation and agreed pilot scope. We review protocol fit during discovery rather than over-claiming broad production support on the website.",
  },
  {
    q: "How long does integration take?",
    a: "That depends on the site, protocol path, and deployment complexity. The right answer is a scoped implementation plan, not a single generic number for every customer.",
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
            <span className="jb-title-gradient jb-title-gradient-warm">
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col border p-8 ${
                  tier.featured
                    ? "border-jb-accent/30 bg-[linear-gradient(180deg,rgba(34,39,44,0.96),rgba(17,19,23,0.96))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_90px_rgba(0,0,0,0.28)]"
                    : "border-white/10 bg-[linear-gradient(180deg,rgba(28,31,35,0.92),rgba(15,17,20,0.96))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_72px_rgba(0,0,0,0.24)]"
                }`}
              >
                {tier.featured && <div className="absolute left-0 right-0 top-0 h-[2px] bg-jb-accent/70" />}
                <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-jb-accent">{tier.name}</div>
                <div className="mb-2">
                  <span className="text-4xl font-semibold text-white">{tier.price}</span>
                  {tier.period && <span className="ml-2 text-sm text-jb-text-muted">/ {tier.period}</span>}
                </div>
                <p className="mb-8 text-sm text-jb-text-muted">{tier.description}</p>

                <div className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      {feature.included ? (
                        <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 shrink-0 text-jb-accent">
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

                <Button
                  href={tier.ctaHref}
                  variant={tier.featured ? "primary" : "secondary"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-jb-dark py-24 section-lines">
        <div className="container mx-auto max-w-3xl px-6 lg:px-8">
          <Eyebrow className="mb-8">FAQ</Eyebrow>
          <h2 className="jb-section-title mb-12 max-w-3xl">
            <span className="jb-title-gradient jb-title-gradient-cool">
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
