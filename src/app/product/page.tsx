import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductContent } from "@/components/product/ProductContent";

export const metadata = {
  title: "Bridge Kernel | JouleBridge",
  description:
    "A deterministic, tamper-evident event ledger runtime. Ingests energy telemetry, generates cryptographic proofs, evaluates policy rules, and persists to an immutable ledger.",
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
