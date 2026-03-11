import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata = {
  title: "Papers | JouleBridge",
  description: "Technical papers on Bridge Kernel architecture, proof systems, and energy settlement verification.",
};

const papers = [
  {
    title: "Bridge Kernel Technical Architecture",
    description:
      "A comprehensive overview of the Bridge Kernel runtime architecture, covering the ingestion pipeline, proof system, policy engine, ledger persistence, and P2P sync protocol.",
    type: "Technical Overview",
    pages: "24 pages",
    href: "/docs/core-concepts/architecture",
  },
  {
    title: "Energy Settlement Verification: A New Approach",
    description:
      "Why traditional energy settlement processes fail at scale, and how cryptographic verification creates a trust layer that eliminates disputes before they start.",
    type: "Industry Whitepaper",
    pages: "16 pages",
    href: "/docs",
  },
  {
    title: "Proof System Specification",
    description:
      "Formal specification of the Bridge Kernel proof system: canonical JSON construction, SHA-256 hashing, Ed25519 signing, COSE Sign1 envelope format, and verification protocol.",
    type: "Specification",
    pages: "12 pages",
    href: "/docs/core-concepts/proof-system",
  },
];

export default function PapersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16 bg-jb-dark section-lines">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="mb-6">Papers</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Technical Papers
          </h1>
          <p className="text-lg text-jb-text-muted max-w-xl mb-10">
            Deep technical documentation on Bridge Kernel architecture, proof systems, and settlement verification.
          </p>

          <div className="space-y-6">
            {papers.map((paper, i) => (
              <a
                key={i}
                href={paper.href}
                className="block border border-jb-mid-gray/50 bg-jb-card/50 p-8 relative group hover:border-jb-accent/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-jb-accent">
                        {paper.type}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-jb-text-muted">
                        {paper.pages}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-jb-accent transition-colors">
                      {paper.title}
                    </h2>
                    <p className="text-sm text-jb-white/50 leading-relaxed max-w-2xl">
                      {paper.description}
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 font-mono text-xs text-jb-accent uppercase tracking-widest">
                    Read
                    <svg width="12" height="12" viewBox="0 0 12 12" className="text-jb-accent">
                      <path d="M2 6H10M7 3L10 6L7 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <span className="absolute top-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute top-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute bottom-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute bottom-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
