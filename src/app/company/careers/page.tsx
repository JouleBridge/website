import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Careers | JouleBridge",
  description:
    "Join JouleBridge and help build the trust layer for energy settlement.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16 bg-jb-dark section-lines">
        <div className="container mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <Eyebrow className="mb-6">Careers</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Build the trust layer for energy
          </h1>
          <p className="text-lg text-jb-text-muted max-w-xl mx-auto mb-8 leading-relaxed">
            We&apos;re building infrastructure that makes energy settlement
            provable. If you care about cryptography, distributed systems, and
            energy markets, we want to hear from you.
          </p>

          <div className="border border-jb-mid-gray/50 bg-jb-card/50 p-10 relative mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">
              No open roles right now
            </h2>
            <p className="text-jb-text-muted mb-6 leading-relaxed">
              We&apos;re a small team and aren&apos;t actively hiring, but
              we&apos;re always interested in exceptional people. If you&apos;re
              passionate about what we&apos;re building, reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="mailto:hello@joulebridge.com" variant="primary">
                hello@joulebridge.com
              </Button>
              <Button href="/company" variant="white">
                About JouleBridge
              </Button>
            </div>
            <span className="absolute top-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
            <span className="absolute top-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
            <span className="absolute bottom-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
            <span className="absolute bottom-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent/40" />
          </div>

          <div className="space-y-6 text-left max-w-xl mx-auto">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-jb-accent">
              What we value
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Precision over speed",
                  desc: "We build settlement infrastructure. Correctness matters more than velocity.",
                },
                {
                  title: "Evidence over opinion",
                  desc: "Cryptographic proofs, not assumptions. We apply the same standard to how we work.",
                },
                {
                  title: "Ownership over process",
                  desc: "Small team, high autonomy. You own problems end to end.",
                },
              ].map((value) => (
                <div key={value.title}>
                  <h4 className="text-white font-semibold mb-1">
                    {value.title}
                  </h4>
                  <p className="text-sm text-jb-text-muted">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
