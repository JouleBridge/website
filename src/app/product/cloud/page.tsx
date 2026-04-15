"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const plannedFeatures = [
  {
    title: "Scheduling guidance",
    desc: "Push portfolio-level scheduling hints back to sites without turning the cloud into the only place decisions can happen.",
    status: "In Development",
  },
  {
    title: "Policy distribution",
    desc: "Stage, sign, and promote policy bundles across many sites while preserving local enforcement at the edge and site-router layers.",
    status: "In Development",
  },
  {
    title: "Proof ingest",
    desc: "Collect site proof bundles, verify them, and make them available for support, finance, and operator review.",
    status: "Planned",
  },
  {
    title: "Multi-site view",
    desc: "Expose the state of many sites at once without pretending the cloud is the source of truth for the physical environment.",
    status: "Planned",
  },
  {
    title: "Enrollment workflow",
    desc: "Bring new sites online through a controlled provision-and-verify flow rather than ad hoc configuration drift.",
    status: "Planned",
  },
  {
    title: "Support tooling",
    desc: "Give operators and support teams a clean way to inspect site history, exported proofs, and rollout health.",
    status: "Planned",
  },
];

export default function CloudPage() {
  return (
    <>
      <Navbar />
      <main>
        <SectionWrapper className="bg-jb-dark pt-32 md:pt-40 pb-10 md:pb-14">
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/product"
              className="font-mono text-xs uppercase tracking-widest text-jb-text-muted hover:text-white transition-colors"
            >
              Platform
            </Link>
            <span className="text-jb-text-muted">/</span>
            <Eyebrow>Cloud Coordination</Eyebrow>
          </div>

          <div className="inline-block border border-white/16 bg-white/6 px-3 py-1 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-white/80">
              Rolling out with pilots
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-semibold text-white tracking-tight max-w-3xl mb-6"
          >
            Multi-site coordination without breaking the site boundary
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg text-jb-white/60 max-w-2xl leading-relaxed mb-8"
          >
            The cloud plane distributes policy, ingests proofs, and gives operators a
            review surface across many sites. It does not replace local execution. The
            local runtime still decides safely at the edge.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <Button href="/contact" variant="primary">
              Discuss Multi-Site Rollout
            </Button>
          </motion.div>
        </SectionWrapper>

        <SectionWrapper className="bg-jb-card">
          <Eyebrow className="mb-4">Architecture</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-6"
          >
            Coordination plane, not the site&apos;s only control loop
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-jb-white/60 max-w-3xl leading-relaxed mb-10"
          >
            The cloud coordination layer handles fleet-wide policy, scheduling
            guidance, enrollment, and proof ingest. The cloud gets stronger because
            the site runtime is strong first, not because the site is hollowed out.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Local-first",
                desc: "Sites keep the execution path. Cloud logic coordinates, but it does not erase the local trust boundary.",
              },
              {
                title: "Replay-aware",
                desc: "Ingested proof bundles and policy flows should remain reviewable, monotonic, and hard to replay incorrectly.",
              },
              {
                title: "Operator usable",
                desc: "Cloud surfaces should help support teams answer what happened across many sites without creating fresh ambiguity.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative border border-jb-mid-gray bg-jb-dark p-6"
              >
                <h3 className="font-mono text-sm uppercase tracking-widest text-[#D06120] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-jb-white/60 leading-relaxed">{item.desc}</p>
                <span className="absolute top-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute top-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute bottom-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute bottom-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-jb-dark">
          <Eyebrow className="mb-4">Roadmap</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-10"
          >
            What the cloud layer is there to do
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plannedFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border border-jb-mid-gray/50 bg-jb-card/50 p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border ${
                      feature.status === "In Development"
                        ? "text-[#D06120] border-[#D06120]/30"
                        : "text-jb-text-muted border-jb-mid-gray/50"
                    }`}
                  >
                    {feature.status}
                  </span>
                </div>
                <p className="text-sm text-jb-white/50 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-jb-card">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
              Building the coordination layer after the site works
            </h2>
            <p className="text-jb-white/60 mb-8">
              If you are planning multi-site rollouts, we can discuss how the cloud
              plane should fit around the local runtime instead of competing with it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Discuss Rollout
              </Button>
              <Button href="/product" variant="tertiary">
                Back to Platform
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
