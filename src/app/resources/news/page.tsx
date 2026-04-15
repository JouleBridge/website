import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata = {
  title: "News | JouleBridge",
  description: "Product releases, pilot milestones, and company announcements from JouleBridge.",
};

const news = [
  {
    date: "2026-04-01",
    title: "JouleBridge opens C&I pilot conversations for open-access industrial sites",
    description:
      "We are focusing the first commercial motion on open-access industrial sites where tariff windows, mixed-vendor hardware, and the demand for signed evidence can be validated on a live site. Bridge Kernel ML runs forecasting on-device as part of the pilot.",
    tag: "Announcement",
  },
  {
    date: "2026-03-01",
    title: "Runtime stack hardening pass completed for local-first operations",
    description:
      "The JouleBridge runtime adds stronger observability, policy lifecycle control, and proof-handling primitives needed for repeatable pilot deployments.",
    tag: "Product Release",
  },
  {
    date: "2026-01-15",
    title: "Documentation Portal Launched",
    description:
      "The technical docs now cover the runtime stack, deployment model, proof path, and operator-facing implementation details.",
    tag: "Product",
  },
  {
    date: "2025-11-20",
    title: "Core runtime foundation reaches first complete internal milestone",
    description:
      "The early runtime layers, adapters, policy path, proof flow, and observability baseline come together into the first coherent control stack.",
    tag: "Milestone",
  },
  {
    date: "2025-08-15",
    title: "JouleBridge Founded",
    description:
      "JouleBridge is founded to build Bridge Kernel - the runtime for distributed energy - starting with open-access industrial sites and a repeatable path toward multi-site rollout.",
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
          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
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
