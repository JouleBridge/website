import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { papers } from "@/lib/papers";

export const metadata = {
  title: "Papers | JouleBridge",
  description:
    "Technical papers and downloadable PDFs on Bridge Kernel architecture, the proof chain, on-device ML, and the C&I production wedge.",
};

export default function PapersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-jb-dark pb-16 pt-28 section-lines">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow className="mb-6">Papers</Eyebrow>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Technical <span className="jb-title-gradient">Papers</span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-jb-text-muted">
            Read the paper online first, then download the PDF version for architecture reviews, pilot conversations, and technical diligence.
          </p>

          <div className="space-y-6">
            {papers.map((paper) => {
              const Icon = paper.icon;
              return (
                <Link
                  key={paper.slug}
                  href={`/resources/papers/${paper.slug}`}
                  className="group relative block border border-jb-mid-gray/50 bg-jb-card/50 p-6 transition-colors hover:border-[#D06120]/30 sm:p-8"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="border border-white/10 bg-black/20 p-3">
                          <Icon className="h-5 w-5 text-[#D06120]" />
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D06120]">
                            {paper.type}
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-jb-text-muted">
                            {paper.pages}
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-jb-text-muted">
                            PDF + Web
                          </span>
                        </div>
                      </div>
                      <h2 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-[#D06120]">
                        {paper.title}
                      </h2>
                      <p className="max-w-2xl text-sm leading-relaxed text-jb-white/62">
                        {paper.description}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
                      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D06120]">
                        Read Paper
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-jb-text-muted">
                        Downloadable PDF
                        <Download className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                  <span className="absolute left-[-1px] top-[-1px] h-[2px] w-[2px] bg-white/20" />
                  <span className="absolute right-[-1px] top-[-1px] h-[2px] w-[2px] bg-white/20" />
                  <span className="absolute bottom-[-1px] left-[-1px] h-[2px] w-[2px] bg-white/20" />
                  <span className="absolute bottom-[-1px] right-[-1px] h-[2px] w-[2px] bg-white/20" />
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
