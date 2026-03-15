import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getPaper, papers } from "@/lib/papers";

export default async function PaperDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const paper = getPaper(slug);
  if (!paper) notFound();

  const Icon = paper.icon;
  const words = paper.title.split(" ");
  const leadingTitle = words.slice(0, -1).join(" ");
  const highlightedWord = words[words.length - 1];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-jb-dark pb-16 pt-28 section-lines">
        <article className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources/papers"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-jb-text-muted transition-colors hover:text-[#D06120]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Papers
          </Link>

          <div className="mb-6 flex items-center gap-4">
            <div className="border border-white/10 bg-black/20 p-3">
              <Icon className="h-5 w-5 text-[#D06120]" />
            </div>
            <Eyebrow className="text-[#D06120]">{paper.type}</Eyebrow>
          </div>

          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {leadingTitle}{" "}
            <span className="jb-title-gradient">{highlightedWord}</span>
          </h1>

          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-jb-white/72">
            {paper.description}
          </p>

          <div className="mb-12 flex flex-col gap-4 border border-white/10 bg-jb-card/50 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-jb-text-muted">
              <span>{paper.pages}</span>
              <span>Printable PDF</span>
              <span>JouleBridge Papers</span>
            </div>
            <a
              href={paper.downloadHref}
              download
              className="inline-flex items-center gap-2 border border-white/10 bg-black/20 px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[#D06120] transition-colors hover:border-[#D06120]/30"
            >
              Download PDF
              <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="mb-12 grid gap-4 sm:grid-cols-2">
            {paper.summary.map((item) => (
              <div key={item} className="border border-white/10 bg-[linear-gradient(180deg,rgba(19,23,28,0.96),rgba(11,13,15,0.96))] p-5">
                <p className="text-sm leading-relaxed text-jb-white/72">{item}</p>
              </div>
            ))}
          </div>

          <div className="space-y-10">
            {paper.sections.map((section, index) => (
              <section key={section.heading} className="border-t border-white/8 pt-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/60">
                    Section {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-white/8" />
                </div>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-white">
                  <span className="jb-title-gradient">{section.heading}</span>
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-jb-white/74">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return papers.map((paper) => ({ slug: paper.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const paper = getPaper(slug);
  if (!paper) notFound();

  return {
    title: `${paper.title} | JouleBridge Papers`,
    description: paper.description,
  };
}
