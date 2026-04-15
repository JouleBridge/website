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
    title: "Bridge Kernel Runtime Architecture",
    description:
      "A practical paper on the four-layer runtime split - Asset Agent, Site Router, Cloud Coordination, Console - and how Bridge Kernel keeps control local while signing every decision.",
    type: "Architecture Paper",
    pages: "3 pages",
    downloadHref: "/papers/bridge-kernel-technical-architecture.pdf",
    accent: "from-white/40 via-white/20 to-white/10",
    icon: Network,
    summary: [
      "Bridge Kernel is the runtime for distributed energy — monitor, control, orchestrate, prove.",
      "The paper explains how the Asset Agent, Site Router, Cloud Coordination, and Console relate to one another and where on-site intelligence runs.",
    ],
    sections: [
      {
        heading: "System Objective",
        body: [
          "The architecture is built around one durable question: how should a real site monitor mixed-vendor assets, run control and forecasting locally, and still leave behind a record another team can trust later?",
          "That pushes the design toward local execution, on-device ML, explicit trust boundaries, and proof attached to every decision rather than reporting layered on afterward.",
        ],
      },
      {
        heading: "Runtime Split",
        body: [
          "The Asset Agent sits close to the equipment. The Site Router turns policy, constraints, and on-site forecasts into feasible local actions. The cloud coordination layer distributes policy, ingests evidence, and supports multi-site review. The Console exposes the operator view.",
          "Each surface has a clear job. None of them should pretend to be the whole platform on its own.",
        ],
      },
      {
        heading: "Deployment Posture",
        body: [
          "The preferred deployment model is open-access industrial sites first. The goal is one repeatable install path on real site infrastructure before broader platform claims are made.",
        ],
      },
    ],
  },
  {
    slug: "energy-settlement-verification-whitepaper",
    title: "C&I Open-Access Pilot Brief",
    description:
      "A short paper on why open-access industrial sites are the first commercial wedge for Bridge Kernel.",
    type: "Deployment Brief",
    pages: "2 pages",
    downloadHref: "/papers/energy-settlement-verification-whitepaper.pdf",
    accent: "from-white/40 via-white/20 to-white/10",
    icon: FileStack,
    summary: [
      "The first commercial wedge should be painful, sellable, and repeatable on real hardware.",
      "Open-access industrial sites meet that bar: real tariff windows, real mixed-vendor sites, and a natural path into repeatable multi-site rollouts.",
    ],
    sections: [
      {
        heading: "Why C&I First",
        body: [
          "Open-access industrial sites combine tariff pressure, mixed-vendor assets, storage, solar, flexible loads, and strong commercial motivation in one environment.",
          "That makes them the right place to prove monitoring, forecast-aware dispatch, and signed evidence under real operating conditions.",
        ],
      },
      {
        heading: "Commercial Motion",
        body: [
          "The commercial sequence is discovery, paid pilot, then annual platform and per-endpoint expansion - with multi-site rollout only after the first site is proven.",
        ],
      },
    ],
  },
  {
    slug: "proof-system-specification",
    title: "Proof Chain Specification",
    description:
      "A concise specification of the current proof-chain concepts used across the JouleBridge runtime.",
    type: "Specification",
    pages: "2 pages",
    downloadHref: "/papers/proof-system-specification.pdf",
    accent: "from-white/40 via-white/20 to-white/10",
    icon: ShieldCheck,
    summary: [
      "The proof chain exists so the site's actions can be reviewed independently later.",
      "The specification focuses on deterministic shaping, signing, and verification context rather than marketing language.",
    ],
    sections: [
      {
        heading: "Proof Inputs",
        body: [
          "The public proof model is concerned with intent, dispatch, acknowledgement, measured outcome, and the metadata needed to verify the record later.",
        ],
      },
      {
        heading: "Verification Goal",
        body: [
          "Verification should allow another team to answer what the site believed, what it did, and what actually happened without depending on informal reconstruction.",
        ],
      },
    ],
  },
];

export function getPaper(slug: string) {
  return papers.find((paper) => paper.slug === slug);
}
