"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
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
        // Fall through to mailto fallback.
      }
    }

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
      <section className="relative min-h-screen bg-jb-dark pb-16 pt-28 section-lines">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <Eyebrow className="mb-6">Contact</Eyebrow>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="jb-section-title mb-4 max-w-3xl"
              >
                Tell us about the{" "}
                <span className="jb-title-gradient">site, hardware mix, and control problem</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="jb-section-copy mb-10"
              >
                We work best with industrial sites and EV depots that need better
                local control, mixed-vendor integration, and audit-ready operating
                records.
              </motion.p>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="jb-theme-shell p-8 text-center"
                >
                  <div className="mb-3 font-mono text-sm uppercase tracking-widest text-white/60">
                    Message Sent
                  </div>
                  <p className="text-jb-white/70">
                    Thanks for reaching out. We&apos;ll reply as quickly as possible.
                    You can also reach us at{" "}
                    <a href={`mailto:${siteConfig.contactEmail}`} className="text-white/60 hover:underline">
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
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-jb-text-muted">
                        Full name *
                      </label>
                      <input
                        name="name"
                        required
                        className="jb-theme-input w-full px-4 py-3 text-sm font-mono transition-colors focus:border-white/30 focus:outline-none"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-jb-text-muted">
                        Work email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="jb-theme-input w-full px-4 py-3 text-sm font-mono transition-colors focus:border-white/30 focus:outline-none"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-jb-text-muted">
                        Company *
                      </label>
                      <input
                        name="company"
                        required
                        className="jb-theme-input w-full px-4 py-3 text-sm font-mono transition-colors focus:border-white/30 focus:outline-none"
                        placeholder="Acme Energy"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-jb-text-muted">
                        Role / Title
                      </label>
                      <input
                        name="role"
                        className="jb-theme-input w-full px-4 py-3 text-sm font-mono transition-colors focus:border-white/30 focus:outline-none"
                        placeholder="Head of Operations"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-jb-text-muted">
                      I&apos;m interested in *
                    </label>
                    <select
                      name="interest"
                      required
                      className="jb-theme-input w-full appearance-none px-4 py-3 text-sm font-mono transition-colors focus:border-white/30 focus:outline-none"
                    >
                      <option value="">Select an option</option>
                      <option value="Industrial site pilot">Industrial site pilot</option>
                      <option value="EV depot pilot">EV depot pilot</option>
                      <option value="Mixed-vendor integration review">Mixed-vendor integration review</option>
                      <option value="Security or audit review">Security or audit review</option>
                      <option value="Technical evaluation">Technical evaluation</option>
                      <option value="Partnership discussion">Partnership discussion</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-jb-text-muted">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="jb-theme-input w-full resize-none px-4 py-3 text-sm font-mono transition-colors focus:border-white/30 focus:outline-none"
                      placeholder="Tell us about the site, the hardware mix, the protocols in scope, and the operating result you need."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-jb btn-jb-primary relative inline-flex items-center justify-center gap-2 px-8 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending..." : "Send Request"}
                    <span className="btn-corners" />
                  </button>
                </motion.form>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:pt-32"
            >
              <div className="jb-theme-shell relative p-8">
                <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-white/60">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div>
                    <div className="mb-2 font-mono text-xs uppercase tracking-widest text-jb-text-muted">
                      Email
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-[#D06120]" />
                      <a
                        href={`mailto:${siteConfig.contactEmail}`}
                        className="text-white transition-colors hover:text-[#D06120]"
                      >
                        {siteConfig.contactEmail}
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 font-mono text-xs uppercase tracking-widest text-jb-text-muted">
                      Phone
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-white" />
                      <a
                        href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
                        className="text-white transition-colors hover:text-white"
                      >
                        {siteConfig.contactPhone}
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 font-mono text-xs uppercase tracking-widest text-jb-text-muted">
                      Best for
                    </div>
                    <div className="space-y-2 text-sm text-jb-white/64">
                      <p>Industrial site pilots</p>
                      <p>EV depot pilots</p>
                      <p>Mixed-vendor integration reviews</p>
                      <p>Technical and audit evaluations</p>
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 font-mono text-xs uppercase tracking-widest text-jb-text-muted">
                      Follow Us
                    </div>
                    <div className="flex items-center gap-4">
                      <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-jb-white/60 transition-colors hover:text-white"
                      >
                        LinkedIn
                      </a>
                      <a
                        href={siteConfig.social.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-jb-white/60 transition-colors hover:text-white"
                      >
                        X
                      </a>
                      <a
                        href={siteConfig.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-jb-white/60 transition-colors hover:text-white"
                      >
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>

                <span className="absolute left-[-1px] top-[-1px] h-[2px] w-[2px] bg-white/30" />
                <span className="absolute right-[-1px] top-[-1px] h-[2px] w-[2px] bg-white/30" />
                <span className="absolute bottom-[-1px] left-[-1px] h-[2px] w-[2px] bg-white/30" />
                <span className="absolute bottom-[-1px] right-[-1px] h-[2px] w-[2px] bg-white/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
