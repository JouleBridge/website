import {
  FileStack,
  Network,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type PaperSection = {
  heading: string;
  body: string[];
};

export type PaperMeta = {
  slug: string;
  title: string;
  description: string;
  type: string;
  pages: string;
  downloadHref: string;
  accent: string;
  icon: LucideIcon;
  summary: string[];
  sections: PaperSection[];
};

export const papers: PaperMeta[] = [
  {
    slug: "bridge-kernel-technical-architecture",
    title: "Bridge Kernel Technical Architecture",
    description:
      "A detailed architecture paper covering runtime boundaries, adapter-driven ingestion, deterministic proof generation, policy enforcement, persistence, and deployment posture.",
    type: "Architecture Paper",
    pages: "3 pages",
    downloadHref: "/papers/bridge-kernel-technical-architecture.pdf",
    accent: "from-[#7dd3fc] via-[#60a5fa] to-[#86efac]",
    icon: Network,
    summary: [
      "Bridge Kernel is the edge runtime inside JouleBridge. It exists to create stronger source evidence before telemetry becomes settlement, compliance, or operationally significant data.",
      "The paper explains the actual runtime flow: capture, canonicalize, prove, govern, and persist, with attention to why each stage exists and what trust problems it solves.",
    ],
    sections: [
      {
        heading: "System Objective",
        body: [
          "Bridge Kernel is designed around a narrow but important question: what is the earliest point in an energy workflow where a trustworthy record can be created? The product does not begin with dashboards or reporting. It begins with the record itself.",
          "In many operating environments, the record that later drives reconciliation or audit review is assembled from logs, spreadsheets, screenshots, exports, and post-facto reasoning. That record may be useful, but it is expensive to defend. Bridge Kernel is intended to improve the original evidence posture before the workflow becomes commercially sensitive.",
        ],
      },
      {
        heading: "Runtime Boundaries",
        body: [
          "The runtime sits at the edge of the operating environment. It receives telemetry or operational events from adapters, applies deterministic shaping rules, generates cryptographic proofs, runs policy checks, and persists verified output. Those responsibilities are intentionally local and operational.",
          "Higher-level product layers such as cloud control, dashboards, analytics, certification workflows, and settlement orchestration may sit above this runtime. They are not substitutes for the runtime. Their quality depends on the quality of the source record beneath them.",
        ],
      },
      {
        heading: "Adapter-Driven Capture",
        body: [
          "Bridge Kernel uses adapters to ingest raw events from the environments where operating evidence originates. The current baseline includes webhook, file, scanner, and adjacent input models, with protocol-specific hardening progressing around the product core.",
          "Adapters are not merely import utilities. They are where source-system variance first gets normalized. That makes the capture layer an engineering and trust boundary, not just a connectivity convenience.",
        ],
      },
      {
        heading: "Deterministic Record Construction",
        body: [
          "Once the runtime receives an event, it constructs a deterministic representation. Equivalent events should produce equivalent canonical bytes even if they arrive through different operational paths. This requirement is fundamental because later hashing and signature generation only become useful if the underlying representation is stable.",
          "Deterministic shaping also reduces downstream ambiguity. When operations, finance, and counterparties inspect the same event, they should not be arguing over formatting accidents or transformation noise.",
        ],
      },
      {
        heading: "Proof and Policy",
        body: [
          "The runtime hashes the canonical event, signs it with Ed25519, and attaches verification metadata that allows later independent review. The result is a proof-backed record rather than a simple application log.",
          "Policy runs before persistence. That ordering matters. Instead of silently accepting malformed, stale, or risky events and discovering problems later, the runtime can quarantine questionable records before they enter the ledger path.",
        ],
      },
      {
        heading: "Persistence and Sync",
        body: [
          "Verified records are persisted locally first. The persistence model exists to keep an append-oriented evidence trail close to the operating environment, where investigations often begin. Controlled sync then allows evidence to move without losing the original trust boundary.",
          "This model supports deployments where data sovereignty, intermittent connectivity, or operational control requirements make cloud-first ingestion a poor default.",
        ],
      },
      {
        heading: "Deployment Posture",
        body: [
          "Bridge Kernel is suitable for gateways, on-premise hosts, and controlled cloud-adjacent environments. The preferred model remains edge-first because the closer trust creation sits to the measurement source, the more defensible the record becomes.",
          "Deployment decisions should therefore be made around the trust boundary first and the convenience boundary second.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "The architecture is intentionally disciplined. It does not try to solve the entire energy software stack in one layer. It solves the earlier and more durable problem: producing a source record that is easier to defend under reconciliation pressure, audit review, and operational investigation.",
        ],
      },
    ],
  },
  {
    slug: "energy-settlement-verification-whitepaper",
    title: "Energy Settlement Verification: A New Approach",
    description:
      "A whitepaper on why conventional settlement evidence fails at scale and how verification-oriented infrastructure improves reconciliation speed and audit quality.",
    type: "Whitepaper",
    pages: "2 pages",
    downloadHref: "/papers/energy-settlement-verification-whitepaper.pdf",
    accent: "from-[#86efac] via-[#7dd3fc] to-[#60a5fa]",
    icon: FileStack,
    summary: [
      "Energy settlement is becoming harder because the operating environment is becoming more distributed, more software-mediated, and more transaction-heavy.",
      "The answer is not more spreadsheets, more reconciliation labor, or broader institutional trust claims. The answer is stronger source evidence.",
    ],
    sections: [
      {
        heading: "The Modern Settlement Problem",
        body: [
          "Open access transactions, EV charging networks, DER participation, flexible commercial arrangements, and multi-party operating models all increase the number of events that later need to be reconciled. As the number of counterparties rises, so does the cost of ambiguity.",
          "Settlement friction rarely begins in finance alone. It begins earlier, when the event trail is weak and the operational record cannot be reconstructed cleanly.",
        ],
      },
      {
        heading: "Why Traditional Evidence Breaks",
        body: [
          "Many teams still rely on exports, mutable application logs, screenshots, and manually assembled summaries. These may be operationally necessary, but they are a poor foundation for disputed commercial decisions.",
          "The resulting problem is not simply that records are incomplete. It is that they are hard to validate independently. Every escalation therefore becomes slower and more political than it should be.",
        ],
      },
      {
        heading: "Verification-Oriented Infrastructure",
        body: [
          "Verification-oriented infrastructure changes the order of operations. Instead of waiting until after a discrepancy appears, it creates stronger evidence when the event first enters the trusted processing boundary.",
          "The event is shaped deterministically, hashed, signed, checked against policy, and retained in a way that later users can independently examine. This does not remove all disagreements, but it sharply reduces avoidable ambiguity.",
        ],
      },
      {
        heading: "Commercial Impact",
        body: [
          "The practical outcome is faster reconciliation, better audit posture, and clearer handoffs between operations and finance. Teams spend less time debating whether the record can be trusted and more time resolving the actual exception.",
          "This matters directly for cycle time, customer trust, internal coordination, and the cost of investigating historical discrepancies.",
        ],
      },
      {
        heading: "Pilot-Led Deployment",
        body: [
          "The recommended operating approach is not broad replacement on day one. It is pilot-first. Select one workflow with repeated evidence breakdowns, create a stronger source trail, and measure whether review quality improves.",
          "Once the evidence model proves useful in one workflow, adjacent use cases become much easier to justify.",
        ],
      },
      {
        heading: "JouleBridge Position",
        body: [
          "JouleBridge should be understood as trust infrastructure for energy workflows rather than as a generic analytics product. Its immediate value is in improving the defensibility of records that later feed commercial and operating decisions.",
          "That makes the company particularly relevant wherever counterparties need cleaner proof and not just more interface software.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "As energy systems become more distributed and digitally mediated, verification becomes operational infrastructure. The market does not only need more data. It needs better evidence.",
        ],
      },
    ],
  },
  {
    slug: "proof-system-specification",
    title: "Proof System Specification",
    description:
      "A specification-style paper covering canonicalization, hashing, signature generation, envelope structure, and verification procedures in the current proof model.",
    type: "Specification",
    pages: "2 pages",
    downloadHref: "/papers/proof-system-specification.pdf",
    accent: "from-[#60a5fa] via-[#7dd3fc] to-[#86efac]",
    icon: ShieldCheck,
    summary: [
      "This paper describes the current proof model in practical engineering terms, including the deterministic shaping rules that make later verification possible.",
      "It is intended as an implementation-adjacent specification, not a marketing summary.",
    ],
    sections: [
      {
        heading: "Canonicalization",
        body: [
          "Verification begins with deterministic representation. Equivalent events must produce equivalent canonical bytes. The canonicalization rules therefore define key ordering, whitespace behavior, and string encoding expectations.",
          "This stage is foundational because the proof system is only as stable as the event representation beneath it.",
        ],
      },
      {
        heading: "Hash Construction",
        body: [
          "The canonical byte stream is hashed with SHA-256. The digest provides a stable integrity reference and allows later verification without depending on variable payload size.",
          "Any change to the canonical payload must result in a different hash. That property is the minimum requirement for later trust claims.",
        ],
      },
      {
        heading: "Signature Generation",
        body: [
          "The digest is signed with Ed25519. Signature metadata includes the key identifier, key version, and signature context so verification can reject mismatched usage and support key lifecycle operations cleanly.",
          "The proof system is designed so that verification does not require access to the private key environment, only to the public key and the envelope contents.",
        ],
      },
      {
        heading: "Envelope Structure",
        body: [
          "A proof envelope contains the original event, digest, signature, signer identity metadata, context information, and algorithm descriptors. It should be self-contained enough for downstream validation without hidden dependencies.",
          "This is important because externalizing too much metadata increases the cost and brittleness of later audit review.",
        ],
      },
      {
        heading: "Verification Procedure",
        body: [
          "Verification reconstructs the canonical bytes from the envelope payload, recomputes the digest, validates algorithm and context expectations, and checks the Ed25519 signature against the referenced public key.",
          "A proof is only valid if all of these stages succeed. Partial consistency is not enough.",
        ],
      },
      {
        heading: "Failure Conditions",
        body: [
          "Proof validation fails when the payload hash is inconsistent, the signature is invalid, the context is wrong, or the expected key metadata does not match the verification path. These failure conditions should be explicit and observable in implementation.",
          "A good proof system does not merely produce pass results. It produces legible failure modes.",
        ],
      },
      {
        heading: "Key Custody Models",
        body: [
          "The proof model supports software-backed and hardware-backed custody. TPM-based operations strengthen key protection but do not change the logical structure of the envelope.",
          "That separation allows operating environments to harden custody without rewriting downstream verification logic.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "The proof model is intentionally conservative: deterministic payload, stable digest, explicit context, clear signature metadata, and independently verifiable output. Those characteristics matter more than novelty.",
        ],
      },
    ],
  },
];

export function getPaper(slug: string) {
  return papers.find((paper) => paper.slug === slug);
}
