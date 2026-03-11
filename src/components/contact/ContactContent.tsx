"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/lib/site-config";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactContent() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Try Formspree submission first, fall back to mailto
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (formspreeEndpoint) {
      try {
        const res = await fetch(`https://formspree.io/f/${formspreeEndpoint}`, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          setStatus("success");
          form.reset();
          return;
        }
      } catch {
        // Fall through to mailto
      }
    }

    // Mailto fallback
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const role = data.get("role") as string;
    const interest = data.get("interest") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`[Website] ${interest} - ${company}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nRole: ${role}\nInterest: ${interest}\n\n${message}`
    );

    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
    setStatus("success");
  }

  return (
    <>
      <section className="relative min-h-screen bg-jb-dark pt-28 pb-16 section-lines">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Form */}
            <div>
              <Eyebrow className="mb-6">Contact</Eyebrow>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="jb-section-title mb-4 max-w-3xl"
              >
                Let&apos;s talk about your energy settlement
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="jb-section-copy mb-10"
              >
                Whether you&apos;re ready for a pilot or just exploring, we&apos;d love to hear
                about your challenges.
              </motion.p>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-jb-green/30 bg-jb-green/5 p-8 text-center"
                >
                  <div className="text-jb-green font-mono text-sm uppercase tracking-widest mb-3">
                    Message Sent
                  </div>
                  <p className="text-jb-white/70">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                    You can also reach us at{" "}
                    <a href={`mailto:${siteConfig.contactEmail}`} className="text-jb-accent hover:underline">
                      {siteConfig.contactEmail}
                    </a>
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-widest text-jb-text-muted mb-2">
                        Full name *
                      </label>
                      <input
                        name="name"
                        required
                        className="w-full border border-jb-mid-gray/50 bg-jb-card px-4 py-3 text-sm font-mono text-white transition-colors focus:border-jb-accent focus:outline-none"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-widest text-jb-text-muted mb-2">
                        Work email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full border border-jb-mid-gray/50 bg-jb-card px-4 py-3 text-sm font-mono text-white transition-colors focus:border-jb-accent focus:outline-none"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-widest text-jb-text-muted mb-2">
                        Company *
                      </label>
                      <input
                        name="company"
                        required
                        className="w-full border border-jb-mid-gray/50 bg-jb-card px-4 py-3 text-sm font-mono text-white transition-colors focus:border-jb-accent focus:outline-none"
                        placeholder="Acme Energy"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-widest text-jb-text-muted mb-2">
                        Role / Title
                      </label>
                      <input
                        name="role"
                        className="w-full border border-jb-mid-gray/50 bg-jb-card px-4 py-3 text-sm font-mono text-white transition-colors focus:border-jb-accent focus:outline-none"
                        placeholder="VP Operations"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-jb-text-muted mb-2">
                      I&apos;m interested in *
                    </label>
                    <select
                      name="interest"
                      required
                      className="w-full appearance-none border border-jb-mid-gray/50 bg-jb-card px-4 py-3 text-sm font-mono text-white transition-colors focus:border-jb-accent focus:outline-none"
                    >
                      <option value="">Select an option</option>
                      <option value="Pilot program">Pilot program</option>
                      <option value="Enterprise pricing">Enterprise pricing</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Technical question">Technical question</option>
                      <option value="Joining the team">Joining the team</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-jb-text-muted mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full resize-none border border-jb-mid-gray/50 bg-jb-card px-4 py-3 text-sm font-mono text-white transition-colors focus:border-jb-accent focus:outline-none"
                      placeholder="Tell us about your energy settlement challenges..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-jb btn-jb-primary relative inline-flex items-center justify-center gap-2 px-8 py-3 font-mono text-sm tracking-widest uppercase font-semibold bg-jb-accent text-white hover:bg-jb-accent/90 transition-all duration-300 disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                    <span className="btn-corners" />
                  </button>
                </motion.form>
              )}
            </div>

            {/* Right: Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:pt-32"
            >
              <div className="relative border border-jb-mid-gray/50 bg-jb-card/50 p-8">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-jb-accent mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div>
                    <div className="font-mono text-xs text-jb-text-muted uppercase tracking-widest mb-2">
                      Email
                    </div>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="text-white hover:text-jb-accent transition-colors"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </div>

                  <div>
                    <div className="font-mono text-xs text-jb-text-muted uppercase tracking-widest mb-2">
                      Response Time
                    </div>
                    <p className="text-jb-white/70 text-sm">Typically within 24 hours</p>
                  </div>

                  <div>
                    <div className="font-mono text-xs text-jb-text-muted uppercase tracking-widest mb-3">
                      Follow Us
                    </div>
                    <div className="flex items-center gap-4">
                      <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-jb-white/60 hover:text-white transition-colors font-mono text-sm"
                      >
                        LinkedIn
                      </a>
                      <a
                        href={siteConfig.social.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-jb-white/60 hover:text-white transition-colors font-mono text-sm"
                      >
                        X
                      </a>
                      <a
                        href={siteConfig.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-jb-white/60 hover:text-white transition-colors font-mono text-sm"
                      >
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>

                {/* Corner dots */}
                <span className="absolute top-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent" />
                <span className="absolute top-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent" />
                <span className="absolute bottom-[-1px] left-[-1px] w-[2px] h-[2px] bg-jb-accent" />
                <span className="absolute bottom-[-1px] right-[-1px] w-[2px] h-[2px] bg-jb-accent" />
              </div>

              <div className="mt-8 border border-dashed border-jb-mid-gray/30 bg-jb-card/15 p-6 text-center">
                <p className="font-mono text-xs text-jb-text-muted uppercase tracking-widest mb-2">
                  For urgent inquiries
                </p>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-jb-accent hover:underline text-sm"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
