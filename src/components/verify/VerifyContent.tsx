"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

type Check = {
  name: string;
  status: "pass" | "fail" | "warn";
  message: string;
};

function stableStringify(value: unknown): string {
  if (Array.isArray(value)) {
    return `[${value.map((item) => stableStringify(item)).join(",")}]`;
  }
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    return `{${Object.keys(record)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${stableStringify(record[key])}`)
      .join(",")}}`;
  }
  return JSON.stringify(value);
}

async function sha256Hex(value: unknown): Promise<string> {
  const input = typeof value === "string" ? value : stableStringify(value);
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function normalizeExport(input: unknown): Record<string, unknown> {
  const record = input as Record<string, unknown>;
  if (record?.artifact && typeof record.artifact === "object") {
    const artifact = record.artifact as Record<string, unknown>;
    if (artifact.content && typeof artifact.content === "object") {
      return artifact.content as Record<string, unknown>;
    }
  }
  if (record?.site_proof_export_package && typeof record.site_proof_export_package === "object") {
    return (record.site_proof_export_package as Record<string, unknown>).export as Record<string, unknown>;
  }
  if (record?.site_proof_export && typeof record.site_proof_export === "object") {
    return record.site_proof_export as Record<string, unknown>;
  }
  return record;
}

async function verifyDocument(input: unknown): Promise<Check[]> {
  const exportDoc = normalizeExport(input);
  const checks: Check[] = [];
  const add = (name: string, status: Check["status"], message: string) => checks.push({ name, status, message });

  const bundle = exportDoc.bundle as Record<string, unknown> | undefined;
  const entries = Array.isArray(bundle?.entries) ? (bundle.entries as Record<string, unknown>[]) : [];
  if (!bundle || entries.length === 0) {
    add("bundle_present", "fail", "No site-proof bundle with entries was found.");
  } else {
    add("bundle_present", "pass", `Found bundle ${String(bundle.bundle_id || "unknown")} with ${entries.length} entries.`);
    let previousHash: string | null = null;
    let chainOk = true;
    for (const entry of entries) {
      const expected = await sha256Hex({
        stage: entry.stage,
        payload: entry.payload,
        previous_hash_hex: previousHash,
      });
      if (entry.previous_hash_hex !== previousHash || entry.hash_hex !== expected) {
        chainOk = false;
        break;
      }
      previousHash = String(entry.hash_hex || "");
    }
    add("hash_chain", chainOk ? "pass" : "fail", chainOk ? "Bundle hash chain is contiguous." : "Bundle hash chain does not match entry hashes.");
    add(
      "root_hash",
      previousHash && bundle.root_hash_hex === previousHash ? "pass" : "fail",
      previousHash && bundle.root_hash_hex === previousHash ? "Root hash matches the final entry." : "Root hash does not match the final entry.",
    );
  }

  const manifest = exportDoc.manifest as Record<string, unknown> | undefined;
  const artifacts = Array.isArray(manifest?.artifacts) ? (manifest.artifacts as Record<string, unknown>[]) : [];
  if (!artifacts.length) {
    add("manifest", "warn", "No manifest artifacts were found to checksum.");
  } else {
    const contentByType: Record<string, unknown> = {
      site_proof_bundle_json: exportDoc.bundle,
      proof_verification_report_json: exportDoc.verification_report,
      site_proof_export_json: exportDoc,
      dispatch_feedback_json: exportDoc.dispatch_feedback,
      site_routing_diagnostics_json: exportDoc.diagnostics,
      signed_export_json: exportDoc.signed_export,
    };
    let checked = 0;
    let failed = 0;
    let skipped = 0;
    for (const artifact of artifacts) {
      const artifactType = String(artifact.artifact_type || "");
      if (artifactType === "site_proof_export_json") {
        skipped += 1;
        continue;
      }
      const content = contentByType[artifactType];
      if (!content || !artifact.checksum_sha256_hex) {
        continue;
      }
      checked += 1;
      if ((await sha256Hex(content)) !== artifact.checksum_sha256_hex) {
        failed += 1;
      }
    }
    add("manifest_checksums", failed === 0 ? "pass" : "fail", `${checked} artifact checksum${checked === 1 ? "" : "s"} checked; ${failed} failed.`);
    if (skipped > 0) {
      add("export_container_checksum", "warn", "Skipped the export-container checksum because it is self-referential; bundle, report, feedback, and diagnostics checks still ran.");
    }
  }

  const signedExport = exportDoc.signed_export as Record<string, unknown> | undefined;
  if (!signedExport) {
    add("signed_export", "warn", "No signed_export object was found.");
  } else {
    const payloadHash = signedExport.payload_hash_hex;
    const expectedHash = await sha256Hex({
      bundle,
      verificationReport: exportDoc.verification_report,
      diagnostics: exportDoc.diagnostics,
    });
    add(
      "signed_export_payload_hash",
      payloadHash === expectedHash ? "pass" : "fail",
      payloadHash === expectedHash ? "Signed export payload hash matches." : "Signed export payload hash does not match.",
    );
    add("signature_present", signedExport.signature_hex ? "pass" : "fail", signedExport.signature_hex ? "Signature field is present." : "Signature field is missing.");
  }

  return checks;
}

export function VerifyContent() {
  const [input, setInput] = useState("");
  const [checks, setChecks] = useState<Check[]>([]);
  const [error, setError] = useState("");

  const runVerification = async () => {
    setError("");
    setChecks([]);
    try {
      const parsed = JSON.parse(input);
      setChecks(await verifyDocument(parsed));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
    }
  };

  const hasFail = checks.some((check) => check.status === "fail");
  const hasWarn = checks.some((check) => check.status === "warn");
  const verdict = checks.length === 0 ? "WAITING" : hasFail ? "FAIL" : hasWarn ? "PASS WITH WARNINGS" : "PASS";

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-white/10 bg-white/[0.03] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-jb-signal">Offline verifier</p>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] text-white sm:text-6xl">
              Verify a JouleBridge proof export in your browser.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-jb-text-muted">
              Paste a site-proof export, export package, or signed export artifact. Hash checks run client-side only.
            </p>
            <div className="mt-8 border border-white/10 bg-black/30 p-5">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-jb-text-muted">Verdict</div>
              <div className={`mt-3 font-display text-3xl font-bold ${hasFail ? "text-red-300" : hasWarn ? "text-amber-300" : "text-emerald-300"}`}>
                {verdict}
              </div>
            </div>
          </div>
          <div className="border border-white/10 bg-black/35 p-4">
            <textarea
              className="h-[360px] w-full resize-y border border-white/10 bg-[#050607] p-4 font-mono text-xs leading-6 text-white outline-none focus:border-jb-signal"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder='Paste {"schema_version":"site-proof-export/v1", ... }'
            />
            <button
              className="mt-4 border border-jb-signal bg-jb-signal px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-black"
              type="button"
              onClick={runVerification}
            >
              Verify JSON
            </button>
            {error && <div className="mt-4 border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200">{error}</div>}
            <div className="mt-5 grid gap-3">
              {checks.map((check) => (
                <div key={check.name} className="border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-white">{check.name}</span>
                    <span className={check.status === "pass" ? "text-emerald-300" : check.status === "warn" ? "text-amber-300" : "text-red-300"}>
                      {check.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-jb-text-muted">{check.message}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
