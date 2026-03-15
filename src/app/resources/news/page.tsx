import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata = {
  title: "News | JouleBridge",
  description: "Product releases, milestones, and company announcements from JouleBridge.",
};

const news = [
  {
    date: "2026-03-07",
    title: "JouleBridge Launches Pilot Program for C&I Energy Settlement",
    description:
      "We're opening our 12-week pilot program to commercial and industrial energy operators in India. Deploy Bridge Kernel at your site, measure settlement improvements, and decide with data.",
    tag: "Announcement",
  },
  {
    date: "2026-03-01",
    title: "Bridge Kernel 2.0 Released with Full Observability Stack",
    description:
      "Bridge Kernel 2.0 ships with Prometheus-compatible metrics, structured event logs, health degradation signals, and SLO-linked alerting. Plus: policy supervisor lifecycle with stage/promote/rollback.",
    tag: "Product Release",
  },
  {
    date: "2026-01-15",
    title: "Documentation Portal Launched",
    description:
      "Our comprehensive documentation portal is live with 13 pages covering quickstart guides, architecture overviews, adapter configuration, proof system details, and deployment instructions.",
    tag: "Product",
  },
  {
    date: "2025-11-20",
    title: "Bridge Kernel v1.0: Seven Phases Complete",
    description:
      "Bridge Kernel reaches v1.0 with all seven core phases implemented: foundation, data plane, runtime orchestration, adapters, P2P sync, policy engine, and observability. 26 tests passing.",
    tag: "Milestone",
  },
  {
    date: "2025-08-15",
    title: "JouleBridge Founded",
    description:
      "JouleBridge is incorporated with a mission to build settlement trust rails for energy operations. Starting with India's C&I energy market as the beachhead.",
    tag: "Company",
  },
];

const tagColors: Record<string, string> = {
  Announcement: "text-[#D06120]",
  "Product Release": "text-[#D06120]",
  Product: "text-[#D06120]",
  Milestone: "text-white/80",
  Company: "text-jb-pink",
};

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16 bg-jb-dark section-lines">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <Eyebrow className="mb-6">News</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Company News
          </h1>
          <p className="text-lg text-jb-text-muted max-w-xl mb-10">
            Product releases, milestones, and announcements.
          </p>

          <div className="space-y-0">
            {news.map((item, i) => (
              <div
                key={i}
                className="border-b border-jb-mid-gray/30 py-8 first:pt-0"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-mono text-[10px] text-jb-text-muted uppercase tracking-widest">
                    {item.date}
                  </span>
                  <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${tagColors[item.tag] || "text-jb-text-muted"}`}>
                    {item.tag}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-jb-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
