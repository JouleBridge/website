import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingContent } from "@/components/pricing/PricingContent";

export const metadata = {
  title: "Pricing | JouleBridge",
  description: "Start with a free 12-week pilot. Scale when you see results.",
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
