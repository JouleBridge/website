import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionsContent } from "@/components/solutions/SolutionsContent";

export const metadata = {
  title: "Applications",
  description:
    "One operating layer across open-access industrial sites, EV fleet depots, and repeatable multi-site rollouts.",
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
