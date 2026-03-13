import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="jb-docs-shell min-h-screen bg-fd-background text-fd-foreground">
      <DocsLayout
        tree={source.getPageTree()}
        sidebar={{ defaultOpenLevel: 2, collapsible: false }}
        {...baseOptions()}
      >
        {children}
      </DocsLayout>
    </div>
  );
}
