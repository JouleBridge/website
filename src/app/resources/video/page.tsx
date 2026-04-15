import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Videos | JouleBridge",
  description: "Product demos, technical walkthroughs, and deployment guides for Bridge Kernel — the runtime for distributed energy.",
};

export default function VideoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16 bg-jb-dark section-lines">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <Eyebrow className="mb-6">Videos</Eyebrow>
          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Video Library
          </h1>
          <p className="text-lg text-jb-text-muted max-w-xl mb-10">
            Runtime demos, proof-chain walkthroughs, and deployment guides.
          </p>

          <div className="border border-dashed border-jb-mid-gray/50 bg-jb-card/20 p-16 text-center">
            <div className="w-16 h-16 rounded-full bg-jb-accent/10 flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#D06120]">
                <polygon points="5,3 19,12 5,21" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Video content coming soon
            </h2>
            <p className="text-jb-text-muted mb-8 max-w-md mx-auto">
              Subscribe for Bridge Kernel demos, on-device ML walkthroughs, and mixed-vendor site deployment explainers.
            </p>
            <Button href={siteConfig.social.youtube} variant="primary" external>
              Subscribe on YouTube
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
