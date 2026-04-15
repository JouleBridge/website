import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingContent } from "@/components/pricing/PricingContent";

export const metadata = {
  title: "Pilot Program | JouleBridge",
  description: "Discovery, pilot, and rollout - how a JouleBridge deployment actually works.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingContent />
      </main>
      <Footer />
    </>
  );
}
