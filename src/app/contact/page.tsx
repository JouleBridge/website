import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata = {
  title: "Contact | JouleBridge",
  description:
    "Contact JouleBridge about industrial-site pilots, EV depot pilots, mixed-vendor integration reviews, and technical evaluations.",
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
