"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const hardwareTargets = [
  {
    title: "Industrial Edge Gateways",
    desc: "Primary deployment shape for early pilots. These gateways host the runtime next to chargers, ESS, inverters, and metering hardware already present at the site.",
    specs: ["ARM64 or x86", "Field I/O", "Ethernet / RS-485", "Systemd deployment"],
    status: "Primary",
  },
  {
    title: "Partner hardware kits",
    desc: "Reference hardware paths used to make site installs repeatable before any first-party appliance exists.",
    specs: ["Pilot-ready BOM", "Install runbook", "Recovery path", "Supportable footprint"],
    status: "Current",
  },
  {
    title: "Embedded control boards",
    desc: "Useful when the deployment has to stay compact and local, especially for constrained edge control environments.",
    specs: ["Linux SBC", "eMMC or SSD", "Serial and CAN", "Low power draw"],
    status: "Supported",
  },
  {
    title: "Secure-element path",
    desc: "A later hardening step that moves key custody into dedicated secure hardware once the early pilot path is already working.",
    specs: ["ATECC608B", "TPM option", "Provider abstraction", "Pilot gate"],
    status: "Next",
  },
];

export default function HardwarePage() {
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
            <Eyebrow>Hardware</Eyebrow>
          </div>

          <div className="inline-block border border-[#D06120]/40 bg-[#D06120]/10 px-3 py-1 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D06120]">
              Partner hardware first
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-semibold text-white tracking-tight max-w-3xl mb-6"
          >
            Real deployments on hardware the site can actually use
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg text-jb-white/60 max-w-2xl leading-relaxed mb-8"
          >
            JouleBridge is not a hardware company. The goal is to land the runtime on
            partner gateways and control hardware that already fit the site, then
            harden the install path into something supportable and repeatable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/contact" variant="primary">
              Discuss Hardware Fit
            </Button>
            <Button href="/product/bridge-kernel" variant="tertiary">
              Runtime Specs
            </Button>
          </motion.div>
        </SectionWrapper>

        <SectionWrapper className="bg-jb-card">
          <Eyebrow className="mb-4">Hardware Targets</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-10"
          >
            One runtime, several deployment shapes
          </motion.h2>

          <div className="space-y-6">
            {hardwareTargets.map((hw, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative border border-jb-mid-gray bg-jb-dark p-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-white">{hw.title}</h3>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border ${
                          hw.status === "Primary" || hw.status === "Current" || hw.status === "Supported"
                            ? "text-[#D06120] border-[#D06120]/30"
                            : "text-white/80 border-white/12"
                        }`}
                      >
                        {hw.status}
                      </span>
                    </div>
                    <p className="text-sm text-jb-white/60 leading-relaxed">{hw.desc}</p>
                  </div>
                  <div className="lg:w-64 shrink-0">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-jb-text-muted mb-2">
                      Specs
                    </div>
                    <ul className="space-y-1.5">
                      {hw.specs.map((spec, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-jb-white/50">
                          <span className="w-1 h-1 bg-jb-accent shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <span className="absolute top-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute top-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute bottom-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute bottom-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-jb-dark">
          <Eyebrow className="mb-4">Hardware Security</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-6"
          >
            Key custody evolves with the pilot path
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-jb-white/60 max-w-3xl leading-relaxed mb-8"
          >
            Early pilots can use the software provider path when the install motion
            matters most. Later stages move signing into TPMs or secure elements
            without changing the higher-level proof model.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Software provider", desc: "Fastest path for early pilots where deployment speed and supportability matter most." },
              { title: "TPM 2.0", desc: "Useful on industrial gateways that already expose a hardware root for key protection." },
              { title: "Secure element", desc: "The tighter custody path for later pilot stages once the repeatable install motion is already proven." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-jb-mid-gray/50 bg-jb-card/50 p-6"
              >
                <h3 className="font-mono text-sm uppercase tracking-widest text-[#D06120] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-jb-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-jb-card">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
              Need to validate hardware fit before a pilot?
            </h2>
            <p className="text-jb-white/60 mb-8">
              We can scope the right gateway path, the runtime footprint, and the
              secure-key posture around the actual site you want to deploy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Scope Hardware Fit
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
