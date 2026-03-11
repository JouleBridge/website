import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-jb-dark section-lines">
        <div className="container mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <div className="border border-jb-mid-gray bg-jb-card rounded-lg overflow-hidden mb-8 text-left">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-jb-dark-gray">
              <div className="w-2.5 h-2.5 rounded-full bg-jb-red" />
              <div className="w-2.5 h-2.5 rounded-full bg-jb-yellow" />
              <div className="w-2.5 h-2.5 rounded-full bg-jb-green" />
              <span className="ml-auto font-mono text-[10px] text-jb-text-muted">
                bridge-kernel
              </span>
            </div>
            <div className="p-6 font-mono text-sm space-y-2">
              <div className="text-jb-text-muted">
                {"> "}bridge-kernel route --resolve
              </div>
              <div className="text-jb-red">
                {"  "}ERROR 404: route not found
              </div>
              <div className="text-jb-text-muted/50 mt-4">
                {"  "}available routes:
              </div>
              <div className="text-jb-green/70">
                {"    "}/{"         "}home
              </div>
              <div className="text-jb-green/70">
                {"    "}/product{"  "}bridge kernel
              </div>
              <div className="text-jb-green/70">
                {"    "}/pricing{"  "}plans
              </div>
              <div className="text-jb-green/70">
                {"    "}/docs{"     "}documentation
              </div>
              <div className="text-jb-green/70">
                {"    "}/contact{"  "}get in touch
              </div>
              <div className="animate-pulse text-jb-green mt-2">_</div>
            </div>
          </div>

          <Link
            href="/"
            className="btn-jb btn-jb-primary relative inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm tracking-widest uppercase font-semibold bg-jb-accent text-white hover:bg-jb-accent/90 transition-all duration-300"
          >
            Return Home
            <span className="btn-corners" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
