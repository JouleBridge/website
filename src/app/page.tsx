import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { PipelineSection } from "@/components/landing/PipelineSection";
import { PlatformSection } from "@/components/landing/PlatformSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { CTASection } from "@/components/landing/CTASection";
import { DemoSection } from "@/components/landing/DemoSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="landing-grid">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PipelineSection />
        <PlatformSection />
        <DemoSection />
        <BenefitsSection />
        <UseCasesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
