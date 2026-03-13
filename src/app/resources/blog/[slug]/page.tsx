import { notFound } from "next/navigation";
import Link from "next/link";
import { Building2, Cpu, Factory, FilePenLine } from "lucide-react";
import { blog } from "@/lib/source";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";

function getSlug(post: (typeof blog)[number]) {
  return post.info.path.replace(/\.mdx$/, "");
}

function getPost(slug: string) {
  return blog.find((post) => getSlug(post) === slug);
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const MDX = post.body;

  const categoryColors: Record<string, string> = {
    Industry: "text-[#f6b44d]",
    Product: "text-[#7dd3fc]",
    Engineering: "text-[#86efac]",
    Company: "text-[#60a5fa]",
  };
  const categoryIcons = {
    Industry: Factory,
    Product: FilePenLine,
    Engineering: Cpu,
    Company: Building2,
  } as const;
  const Icon = categoryIcons[post.category as keyof typeof categoryIcons] ?? FilePenLine;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16 bg-jb-dark section-lines">
        <article className="container mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-2 font-mono text-xs text-jb-text-muted uppercase tracking-widest mb-8 hover:text-jb-accent transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 12 12">
              <path
                d="M10 6H2M5 3L2 6L5 9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Blog
          </Link>

          <Eyebrow className="mb-4">
            <span className={`inline-flex items-center gap-2 ${categoryColors[post.category] || "text-jb-text-muted"}`}>
              <Icon className="h-4 w-4" />
              {post.category}
            </span>
          </Eyebrow>

          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 font-mono text-[10px] text-jb-text-muted uppercase tracking-widest mb-10">
            <span>{post.author}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-p:text-jb-white/78 prose-p:leading-relaxed prose-li:text-jb-white/74 prose-strong:text-white prose-a:text-[#7dd3fc] prose-a:no-underline hover:prose-a:underline prose-code:rounded-none prose-code:border prose-code:border-[#0f3b49] prose-code:bg-[#0b1820] prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[#9be7ff] prose-pre:bg-[#0a1216] prose-pre:text-[#d4f6ff] prose-pre:border prose-pre:border-[#134254]">
            <MDX />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return blog.map((post) => ({
    slug: getSlug(post),
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  return {
    title: `${post.title} | JouleBridge Blog`,
    description: post.description,
  };
}
