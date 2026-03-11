import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata = {
  title: "Contact | JouleBridge",
  description: "Contact JouleBridge for pilots, deployment, enterprise onboarding, and partnership.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
