"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DemoTerminal } from "@/components/ui/DemoTerminal";

export function DemoSection() {
  return (
    <SectionWrapper className="bg-jb-dark">
      <Eyebrow className="mb-4">See It Run</Eyebrow>
      <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3 max-w-2xl">
        See the runtime behavior in a concrete operator flow
      </h2>
      <p className="text-jb-text-muted max-w-2xl mb-8">
        Step through a representative Bridge Kernel session: runtime startup,
        device input, deterministic event handling, proof generation, and a
        policy violation caught before it reaches the ledger.
      </p>
      <div className="max-w-3xl">
        <DemoTerminal />
      </div>
    </SectionWrapper>
  );
}
