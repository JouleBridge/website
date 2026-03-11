import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionsContent } from "@/components/solutions/SolutionsContent";

export const metadata = {
  title: "Solutions",
  description:
    "Bridge Kernel powers settlement-grade verification for energy settlement, EV fleet charging, and grid audit. Explore how JouleBridge solves each use case.",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SolutionsContent />
      </main>
      <Footer />
    </>
  );
}
