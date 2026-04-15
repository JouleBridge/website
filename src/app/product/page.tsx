import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductContent } from "@/components/product/ProductContent";

export const metadata = {
  title: "Platform | JouleBridge",
  description:
    "The JouleBridge platform coordinates mixed-vendor energy assets through an edge runtime, local site control, cloud review surfaces, and audit-ready records.",
};

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductContent />
      </main>
      <Footer />
    </>
  );
}
