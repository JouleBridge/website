import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | JouleBridge",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 bg-jb-dark">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8 py-24 prose prose-invert prose-lg">
          <h1>Privacy Policy</h1>
          <p>Last updated: March 2026</p>
          <p>
            JouleBridge (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your information.
          </p>
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly, such as contact form submissions and email correspondence.</p>
          <h2>How We Use Information</h2>
          <p>We use collected information to provide and improve our services, communicate with you, and ensure security.</p>
          <h2>Contact</h2>
          <p>For privacy inquiries, contact us at <a href="mailto:hello@joulebridge.com">hello@joulebridge.com</a>.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
