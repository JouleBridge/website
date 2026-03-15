import Link from "next/link";
import { Building2, Cpu, Factory, FilePenLine } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { blog } from "@/lib/source";

export const metadata = {
  title: "Blog | JouleBridge",
  description: "Engineering, product, and industry insights from the JouleBridge team.",
};

const categoryColors: Record<string, string> = {
  Industry: "text-[#f6b44d]",
  Product: "text-[#D06120]",
  Engineering: "text-white/60",
  Company: "text-white",
};

const categoryIcons = {
  Industry: Factory,
  Product: FilePenLine,
  Engineering: Cpu,
  Company: Building2,
} as const;

export default function BlogPage() {
  const posts = [...blog].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16 bg-jb-dark section-lines">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="mb-6">Blog</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Insights
          </h1>
          <p className="text-lg text-jb-text-muted max-w-xl mb-10">
            Engineering, product, and industry perspectives on energy settlement verification.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
              const slug = post.info.path.replace(/\.mdx$/, "");
              const Icon = categoryIcons[post.category as keyof typeof categoryIcons] ?? FilePenLine;
              return (
              <Link
                key={slug}
                href={`/resources/blog/${slug}`}
                className="border border-jb-mid-gray/50 bg-jb-card/50 p-6 relative group hover:border-[#D06120]/30 transition-colors flex flex-col"
              >
                <div className={`mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] ${categoryColors[post.category] || "text-jb-text-muted"}`}>
                  <Icon className="h-4 w-4" />
                  {post.category}
                </div>
                <h2 className="text-lg font-semibold text-white mb-3 group-hover:text-[#D06120] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-jb-white/50 leading-relaxed mb-4 flex-1">
                  {post.description}
                </p>
                <div className="flex items-center gap-4 font-mono text-[10px] text-jb-text-muted uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <span className="absolute top-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute top-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute bottom-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
                <span className="absolute bottom-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
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
