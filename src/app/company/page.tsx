import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CompanyContent } from "@/components/company/CompanyContent";

export const metadata = {
  title: "About | JouleBridge",
  description:
    "JouleBridge builds the trust layer for energy. Settlement-grade verification infrastructure for the world's energy transition.",
};

export default function CompanyPage() {
  return (
    <>
      <Navbar />
      <main>
        <CompanyContent />
      </main>
      <Footer />
    </>
  );
}
