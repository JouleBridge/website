/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const MARGIN_X = 52;
const TOP_MARGIN = 62;
const BOTTOM_MARGIN = 54;
const BODY_WIDTH = PAGE_WIDTH - MARGIN_X * 2;
const BODY_FONT = 11.5;
const BODY_LEADING = 17;

const COLORS = {
  bg: [0.043, 0.051, 0.059],
  white: [0.957, 0.961, 0.969],
  muted: [0.659, 0.69, 0.749],
  line: [0.18, 0.2, 0.224],
  warmA: [0.984, 0.749, 0.141],
  warmB: [0.961, 0.62, 0.043],
  warmC: [0.976, 0.451, 0.086],
  coolA: [0.49, 0.827, 0.988],
  coolB: [0.525, 0.937, 0.675],
};

const papers = [
  {
    slug: "bridge-kernel-technical-architecture",
    title: "Bridge Kernel Technical Architecture",
    type: "Architecture Paper",
    sections: [
      {
        heading: "Abstract",
        paragraphs: [
          "Bridge Kernel is the edge runtime inside JouleBridge. Its purpose is not to present telemetry attractively, but to improve the trust quality of the earliest record in the chain. This paper explains the runtime architecture as an evidence system: how events are captured, shaped, signed, policy-checked, persisted, and prepared for downstream review.",
          "The architecture should be read as trust infrastructure. Each stage exists because weak source records create reconciliation drag, audit friction, and investigation cost. A stronger architecture therefore starts before dashboards, reports, and analytics. It starts at the moment a record becomes operationally important.",
        ],
      },
      {
        heading: "1. System Objective",
        paragraphs: [
          "Bridge Kernel is designed around a narrow systems question: what is the earliest defensible record that can be created when telemetry enters an energy workflow? Many operating stacks answer this question too late. They collect raw events in one system, transform them in another, export them into spreadsheets, and only then try to reconstruct what really happened.",
          "That delayed trust model creates commercial and operational problems. By the time the record is examined, its transformation path is fragmented. Operators, finance teams, auditors, and counterparties are left interpreting artifacts rather than verifying source evidence. Bridge Kernel moves the trust boundary closer to the originating event.",
        ],
      },
      {
        heading: "2. Runtime Boundaries",
        paragraphs: [
          "The runtime sits in the evidence path rather than in the presentation path. Its responsibilities are local and explicit: receive events, canonicalize them deterministically, generate proofs, apply policy, and store verified output. It is not intended to replace every cloud service, control plane, or interface layer in the wider JouleBridge roadmap.",
          "This boundary matters because trust layers fail when they absorb too many unrelated responsibilities. By separating source evidence generation from orchestration, visualization, and analytics, the system remains easier to reason about and easier to defend.",
        ],
      },
      {
        heading: "3. Adapter-Driven Capture",
        paragraphs: [
          "Bridge Kernel uses adapters to ingest telemetry and operational events from heterogeneous environments. The current baseline includes webhook, file, scanner, and adjacent input models, with protocol hardening around energy-specific paths continuing as the runtime matures.",
          "Adapter design is not a trivial integration detail. It is the first trust boundary. If source events are captured inconsistently, every later stage inherits ambiguity. Adapters therefore normalize ingress behavior, preserve relevant metadata, and prepare the event for deterministic shaping.",
        ],
      },
      {
        heading: "4. Deterministic Record Construction",
        paragraphs: [
          "Once an event enters the runtime, it is transformed into a deterministic representation. Equivalent events must produce equivalent canonical bytes. This rule is foundational because cryptographic proof only becomes meaningful when the underlying representation is stable across operating environments.",
          "Deterministic construction reduces a hidden category of failure. Teams often assume they disagree about business facts when in reality they disagree about formatting, transformation order, or hidden transport artifacts. A stable canonical form removes much of that noise before proof generation begins.",
        ],
      },
      {
        heading: "5. Proof Generation",
        paragraphs: [
          "The canonical event is hashed with SHA-256 and signed with Ed25519. The resulting envelope carries the event, digest, signature, key metadata, and verification context required for later inspection. The proof object is therefore more than a signed blob; it is a transportable evidence unit.",
          "This design enables independent review. A downstream verifier does not need access to the runtime internals or the private key environment. It only needs the event, the public verification path, and the declared algorithms. That property is central to how JouleBridge positions trust.",
        ],
      },
      {
        heading: "6. Policy Before Persistence",
        paragraphs: [
          "Policy execution occurs before the verified record enters the accepted persistence path. This ordering is deliberate. Weak systems often accept everything first and sort exceptions later, which allows malformed, stale, or out-of-policy events to contaminate later reporting and reconciliation.",
          "Bridge Kernel instead treats policy as a gateway. Records that fail policy can be quarantined, inspected, and reviewed without silently degrading the evidence trail. This makes exception handling explicit instead of implicit.",
        ],
      },
      {
        heading: "7. Persistence and Controlled Sync",
        paragraphs: [
          "Verified records are persisted locally first. This keeps the primary evidence trail close to the operating environment where disputes and investigations usually begin. Controlled sync then allows records to move into broader product surfaces without losing their trust origin.",
          "The architecture is therefore compatible with edge-first and sovereignty-sensitive deployments. It does not assume that cloud centralization is the right first move for every evidence workflow.",
        ],
      },
      {
        heading: "8. Deployment Posture and Conclusion",
        paragraphs: [
          "Bridge Kernel is suitable for gateways, on-premise hosts, and carefully controlled cloud-adjacent environments. The deployment recommendation should follow the trust boundary first: where is the earliest point at which a defensible record can be created and retained?",
          "The architectural thesis is simple and durable. Improve the source record first. Once the evidence base is stronger, later layers such as dashboards, analytics, certification, and settlement tools become more credible and easier to operate.",
        ],
      },
    ],
  },
  {
    slug: "energy-settlement-verification-whitepaper",
    title: "Energy Settlement Verification: A New Approach",
    type: "Whitepaper",
    sections: [
      {
        heading: "Executive Summary",
        paragraphs: [
          "Energy settlement is increasingly constrained by evidence quality rather than by raw data availability. As operating environments become more distributed and software-mediated, the number of records that matter rises faster than the number of records that can be independently defended.",
          "This whitepaper argues that verification-oriented infrastructure should be treated as an operating capability. Better evidence reduces reconciliation friction, shortens investigation time, and improves counterparties' confidence in the settlement trail.",
        ],
      },
      {
        heading: "1. Why the Problem Is Getting Worse",
        paragraphs: [
          "Open access, EV charging, DER participation, flexible tariff structures, and multi-party operational models all multiply the number of events that later feed settlement. The system is becoming more digital and more distributed at the same time.",
          "That means the cost of ambiguity compounds. Every mismatch now touches more systems, more operators, and more counterparties. Records that once seemed acceptable under manual operating conditions become much more expensive when scaled across modern transaction flows.",
        ],
      },
      {
        heading: "2. The Limits of Traditional Evidence",
        paragraphs: [
          "Institutional trust is useful but incomplete. In many cases the underlying evidence still depends on exports, screenshots, mutable logs, and post-facto reasoning. These artifacts can support an explanation, but they rarely support independent verification.",
          "As a result, settlement disputes are often less about a missing number and more about a weak confidence boundary. Teams are not simply asking what happened. They are asking whether the record itself can be trusted.",
        ],
      },
      {
        heading: "3. Verification-Oriented Infrastructure",
        paragraphs: [
          "A verification-oriented design creates trust earlier. The event is shaped deterministically, hashed, signed, checked against policy, and retained with enough metadata for later inspection. This transforms the evidence problem from a retrospective exercise into a runtime responsibility.",
          "The goal is not to eliminate all disputes. It is to reduce unnecessary ambiguity and to ensure that when a dispute does occur, the review begins from a stronger factual base.",
        ],
      },
      {
        heading: "4. Operational and Commercial Benefits",
        paragraphs: [
          "Faster reconciliation matters directly to working relationships, cycle time, and internal coordination. A stronger record can reduce the amount of time spent aligning operations, finance, and external parties around the same event history.",
          "Audit quality improves as well. Investigations become shorter when the evidence path is explicit, and regulatory or customer-facing reviews become easier when records are portable and verifiable.",
        ],
      },
      {
        heading: "5. Pilot Strategy",
        paragraphs: [
          "The right rollout path is not broad replacement. It is pilot-led improvement. Select one workflow with recurring evidence failure, instrument the source record with deterministic proof-backed capture, and compare the resulting investigation and reconciliation quality to the current state.",
          "This approach reduces adoption risk while giving the organization a concrete operating benchmark for whether verification should expand further.",
        ],
      },
      {
        heading: "6. JouleBridge Positioning",
        paragraphs: [
          "JouleBridge should be understood as trust infrastructure for energy workflows. The immediate value is not an abstract security posture or a generic interface layer. The value is stronger source evidence that later systems can rely on.",
          "That positioning makes the company relevant wherever settlement confidence depends on cleaner records, faster review, and more defensible operating history.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Energy systems do not simply need more data. They need records that are easier to trust under real commercial pressure. Verification infrastructure addresses that requirement directly by improving the source record before ambiguity compounds downstream.",
        ],
      },
    ],
  },
  {
    slug: "proof-system-specification",
    title: "Proof System Specification",
    type: "Specification",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "This paper defines the current Bridge Kernel proof model in practical implementation terms. It focuses on deterministic record construction, digest formation, signature generation, envelope structure, and verification procedure.",
          "The aim is clarity rather than novelty. A proof model should be easy to inspect, easy to implement consistently, and easy to verify independently.",
        ],
      },
      {
        heading: "1. Canonicalization Rules",
        paragraphs: [
          "Equivalent events must produce equivalent canonical bytes. Canonicalization therefore specifies key ordering, insignificant whitespace removal, and UTF-8 string normalization. These rules are not optional formatting preferences. They are preconditions for stable hashing and verification.",
          "Any implementation variance at this stage undermines every later proof claim, because the signature only protects the digest that the runtime actually created.",
        ],
      },
      {
        heading: "2. Digest Formation",
        paragraphs: [
          "The canonical byte stream is hashed with SHA-256. The digest serves as the compact integrity reference used for later validation and signature generation.",
          "Digest formation must be deterministic and algorithm-labeled. A verifier should be able to reproduce the digest from the envelope payload and confirm that the declared algorithm matches the observed output.",
        ],
      },
      {
        heading: "3. Signature Generation",
        paragraphs: [
          "Bridge Kernel signs the digest with Ed25519. The signing material includes not only the private key operation but also explicit signature context, key identifier, and key version metadata so verification can reject mismatched usage paths.",
          "This keeps the proof system legible under key rotation and prevents cross-context ambiguity.",
        ],
      },
      {
        heading: "4. Envelope Structure",
        paragraphs: [
          "A proof envelope contains the original event, digest, signature, signer metadata, timestamp, and algorithm descriptors. The envelope should be self-describing enough that verification does not require hidden runtime state.",
          "That requirement is critical for downstream audit and evidence exchange. A proof object that depends heavily on external context becomes more fragile at the moment it is needed most.",
        ],
      },
      {
        heading: "5. Verification Procedure",
        paragraphs: [
          "Verification reconstructs canonical bytes from the event payload, recomputes the digest, checks declared algorithm and context expectations, and validates the Ed25519 signature with the referenced public key.",
          "The procedure is all-or-nothing. A proof is not partially valid because some metadata aligns. The payload, digest, context, and signature must all resolve consistently.",
        ],
      },
      {
        heading: "6. Failure Conditions",
        paragraphs: [
          "Validation fails when the payload hash diverges from the recomputed digest, when the signature is invalid, when the context does not match, or when the expected verification key path cannot be satisfied.",
          "These failure conditions should be explicit in implementation outputs so operators can distinguish malformed records from policy exceptions and environmental failures.",
        ],
      },
      {
        heading: "7. Key Custody Models",
        paragraphs: [
          "The proof model supports software and hardware-backed custody. A TPM-backed operation strengthens key protection but does not change the logical structure of the envelope or the downstream verification path.",
          "This allows custody improvements without destabilizing the broader evidence ecosystem built on the proof format.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "The specification is intentionally conservative: deterministic event bytes, stable digest, explicit signature context, clear metadata, and independently verifiable output. These characteristics matter more than complexity or fashionable cryptographic packaging.",
        ],
      },
    ],
  },
];

function escapePdf(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function estimateTextWidth(text, fontSize) {
  return text.length * fontSize * 0.52;
}

function wrapText(text, fontSize, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (estimateTextWidth(next, fontSize) <= maxWidth) {
      current = next;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function pushObject(objects, value) {
  objects.push(value);
  return objects.length - 1;
}

function buildPaperPdf(paper) {
  const pages = [];
  let page = null;
  let y = 0;

  const beginPage = () => {
    page = {
      content: [],
      pageNumber: pages.length + 1,
    };
    y = PAGE_HEIGHT - TOP_MARGIN;
    drawHeader();
    pages.push(page);
  };

  const ensureSpace = (heightNeeded) => {
    if (!page || y - heightNeeded < BOTTOM_MARGIN) {
      beginPage();
    }
  };

  const setFill = (rgb) => {
    page.content.push(`${rgb[0]} ${rgb[1]} ${rgb[2]} rg`);
  };

  const drawText = (text, x, baselineY, font = "F1", size = BODY_FONT) => {
    page.content.push("BT");
    page.content.push(`/${font} ${size} Tf`);
    page.content.push(`${x} ${baselineY} Td`);
    page.content.push(`(${escapePdf(text)}) Tj`);
    page.content.push("ET");
  };

  const drawHeader = () => {
    page.content.push("q");
    page.content.push(`${COLORS.line[0]} ${COLORS.line[1]} ${COLORS.line[2]} RG`);
    page.content.push("0.8 w");
    page.content.push(`${MARGIN_X} ${PAGE_HEIGHT - 44} m ${PAGE_WIDTH - MARGIN_X} ${PAGE_HEIGHT - 44} l S`);
    page.content.push("Q");

    setFill(COLORS.warmB);
    drawText("JOULE", MARGIN_X, PAGE_HEIGHT - 30, "F2", 14);
    setFill(COLORS.white);
    drawText("BRIDGE", MARGIN_X + 49, PAGE_HEIGHT - 30, "F2", 14);

    setFill(COLORS.muted);
    drawText(paper.type.toUpperCase(), PAGE_WIDTH - 180, PAGE_HEIGHT - 30, "F1", 9);

    y = PAGE_HEIGHT - 82;
  };

  const drawFooter = () => {
    page.content.push("q");
    page.content.push(`${COLORS.line[0]} ${COLORS.line[1]} ${COLORS.line[2]} RG`);
    page.content.push("0.8 w");
    page.content.push(`${MARGIN_X} 36 m ${PAGE_WIDTH - MARGIN_X} 36 l S`);
    page.content.push("Q");
    setFill(COLORS.muted);
    drawText("joulebridge.com", MARGIN_X, 20, "F1", 9);
    drawText(`Page ${page.pageNumber}`, PAGE_WIDTH - 82, 20, "F1", 9);
  };

  const addTitle = () => {
    ensureSpace(92);
    setFill(COLORS.white);
    drawText(paper.title, MARGIN_X, y, "F2", 23);
    y -= 24;
    setFill(COLORS.coolA);
    drawText("JouleBridge Papers", MARGIN_X, y, "F1", 11);
    y -= 28;
  };

  const addSectionHeading = (heading) => {
    ensureSpace(44);
    setFill(COLORS.coolB);
    drawText(heading.toUpperCase(), MARGIN_X, y, "F2", 12);
    y -= 22;
  };

  const addParagraph = (paragraph) => {
    const lines = wrapText(paragraph, BODY_FONT, BODY_WIDTH);
    ensureSpace(lines.length * BODY_LEADING + 10);
    setFill(COLORS.white);
    for (const line of lines) {
      drawText(line, MARGIN_X, y, "F1", BODY_FONT);
      y -= BODY_LEADING;
    }
    y -= 8;
  };

  beginPage();
  addTitle();
  for (const section of paper.sections) {
    addSectionHeading(section.heading);
    for (const paragraph of section.paragraphs) {
      addParagraph(paragraph);
    }
    y -= 6;
  }

  for (const p of pages) {
    page = p;
    drawFooter();
  }

  const objects = [null];
  const catalogNum = pushObject(objects, null);
  const pagesNum = pushObject(objects, null);
  const fontRegularNum = pushObject(
    objects,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  );
  const fontBoldNum = pushObject(
    objects,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  );

  const pageNums = [];
  for (const p of pages) {
    const stream = p.content.join("\n");
    const contentNum = pushObject(
      objects,
      `<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream`,
    );
    const pageNum = pushObject(
      objects,
      `<< /Type /Page /Parent ${pagesNum} 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 ${fontRegularNum} 0 R /F2 ${fontBoldNum} 0 R >> >> /Contents ${contentNum} 0 R >>`,
    );
    pageNums.push(pageNum);
  }

  objects[catalogNum] = `<< /Type /Catalog /Pages ${pagesNum} 0 R >>`;
  objects[pagesNum] = `<< /Type /Pages /Count ${pageNums.length} /Kids [${pageNums.map((n) => `${n} 0 R`).join(" ")}] >>`;

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (let i = 1; i < objects.length; i++) {
    offsets[i] = Buffer.byteLength(pdf, "utf8");
    pdf += `${i} 0 obj\n${objects[i]}\nendobj\n`;
  }
  const xrefOffset = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objects.length}\n`;
  pdf += "0000000000 65535 f \n";
  for (let i = 1; i < objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length} /Root ${catalogNum} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return { pdf, pages: pageNums.length };
}

const outDir = path.join(__dirname, "..", "public", "papers");
fs.mkdirSync(outDir, { recursive: true });

for (const paper of papers) {
  const result = buildPaperPdf(paper);
  fs.writeFileSync(path.join(outDir, `${paper.slug}.pdf`), result.pdf, "utf8");
  console.log(`${paper.slug}.pdf -> ${result.pages} pages`);
}

