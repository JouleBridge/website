import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CompanyContent } from "@/components/company/CompanyContent";

export const metadata = {
  title: "About | JouleBridge",
  description:
    "JouleBridge builds software for high-stakes energy operations, starting with industrial sites and EV depots that need stronger local control and audit-ready records.",
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
