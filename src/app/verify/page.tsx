import type { Metadata } from "next";
import { VerifyContent } from "@/components/verify/VerifyContent";

export const metadata: Metadata = {
  title: "Verify Proof Export",
  description: "Verify JouleBridge site-proof export hashes and signed export payloads in the browser.",
  alternates: {
    canonical: "/verify",
  },
};

export default function VerifyPage() {
  return <VerifyContent />;
}
