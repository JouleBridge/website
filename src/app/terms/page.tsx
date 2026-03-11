import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service | JouleBridge",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 bg-jb-dark">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8 py-24 prose prose-invert prose-lg">
          <h1>Terms of Service</h1>
          <p>Last updated: March 2026</p>
          <p>
            These Terms of Service govern your use of JouleBridge products and services.
            By using our services, you agree to these terms.
          </p>
          <h2>Use of Services</h2>
          <p>You may use our services in compliance with applicable laws and these terms.</p>
          <h2>Intellectual Property</h2>
          <p>All content, software, and materials are owned by JouleBridge or its licensors.</p>
          <h2>Contact</h2>
          <p>For questions, contact us at <a href="mailto:hello@joulebridge.com">hello@joulebridge.com</a>.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
