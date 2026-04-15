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
    title: "JouleBridge Runtime Architecture",
    type: "Architecture Paper",
    sections: [
      {
        heading: "Abstract",
        paragraphs: [
          "JouleBridge is the runtime, proof, and coordination layer for distributed energy sites. The system is designed so control decisions stay close to the assets while the resulting actions remain reviewable later by another team.",
          "This paper explains the runtime architecture as an operating system for real sites: how the Asset Agent, Site Router, Portfolio Orchestrator, and Console divide responsibilities without collapsing local execution into a cloud-only product story.",
        ],
      },
      {
        heading: "1. System Objective",
        paragraphs: [
          "The architecture is built around one durable question: how should a mixed-vendor site coordinate chargers, batteries, solar, flexible loads, and meters while still leaving behind a record that others can trust later?",
          "That question pushes the design toward local control, explicit trust boundaries, and proof attached to the operating path rather than reporting layered on after the fact.",
        ],
      },
      {
        heading: "2. Runtime Split",
        paragraphs: [
          "The Asset Agent sits close to the equipment and adapter layer. The Site Router converts policy, limits, and site state into feasible local actions. The Portfolio Orchestrator distributes bundles, receives proofs, and gives the fleet view. The Console presents the operator surface.",
          "Each runtime has a narrow job. None of them should pretend to be the whole platform on its own.",
        ],
      },
      {
        heading: "3. Local-First Coordination",
        paragraphs: [
          "JouleBridge keeps the coordination loop at the site because cloud latency, tunnel fragility, and vendor heterogeneity all get worse when local autonomy is removed. The system should keep dispatch running even when upstream connectivity is degraded.",
          "Local execution is therefore a product requirement, not an optimization detail.",
        ],
      },
      {
        heading: "4. Adapter and Policy Boundaries",
        paragraphs: [
          "Adapters translate mixed-vendor equipment into a stable internal shape. Policy then evaluates whether the requested action is feasible, safe, and worth routing. This boundary matters because weak adapter behavior or vague policy handling quickly contaminates later operations.",
          "A site runtime only becomes trustworthy when ingress and policy decisions are legible.",
        ],
      },
      {
        heading: "5. Proof Chain",
        paragraphs: [
          "JouleBridge attaches proof to the operating path. Intent, dispatch, acknowledgement, measurement, and outcome are shaped into a record that can be verified later without informal reconstruction.",
          "The goal is practical defensibility. Another team should be able to answer what the site believed, what it did, and what happened next.",
        ],
      },
      {
        heading: "6. Deployment Posture",
        paragraphs: [
          "The preferred deployment model is partner hardware first. The commercial target is a repeatable install path on real site infrastructure before broader platform claims are made.",
          "That is why DepotOS starts with EV fleet depots rather than trying to tell every distributed-energy story at once.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "JouleBridge should be read as a site runtime with a proof chain, not as a dashboard wrapper. Stronger local coordination and a cleaner operational record make the later cloud view more credible and easier to operate.",
        ],
      },
    ],
  },
  {
    slug: "energy-settlement-verification-whitepaper",
    title: "DepotOS Pilot Deployment Brief",
    type: "Deployment Brief",
    sections: [
      {
        heading: "Executive Summary",
        paragraphs: [
          "DepotOS is the first commercial wedge for the JouleBridge platform. The aim is not to present a generic smart-site narrative. The aim is to solve an urgent operating problem where mixed-vendor coordination matters every day.",
          "EV fleet depots satisfy that requirement because departure times, constrained power, charger heterogeneity, and commercial uptime pressure all collide in one environment.",
        ],
      },
      {
        heading: "1. Why Depots First",
        paragraphs: [
          "A first wedge should be painful, sellable, and repeatable. Fleet depots are painful because missed charging windows disrupt real operations. They are sellable because the business case is immediate. They are repeatable because the coordination pattern appears across many sites.",
          "That makes depots a stronger first surface than trying to position JouleBridge as the answer to every distributed-energy workflow at once.",
        ],
      },
      {
        heading: "2. What the Pilot Proves",
        paragraphs: [
          "A proper depot pilot proves three things: the runtime can coordinate mixed-vendor assets locally, the proof chain can explain what happened later, and the installation path is repeatable on real hardware.",
          "Those are the right proof points for expanding from a single site into a broader portfolio motion.",
        ],
      },
      {
        heading: "3. Commercial Motion",
        paragraphs: [
          "The commercial sequence is discovery, paid pilot, then annual runtime expansion after the site proves itself. That sequence keeps the company honest because the platform has to work in the field before it gets sold as a broader operating layer.",
          "A pilot should therefore be scoped tightly, measured clearly, and tied to the day-to-day depot problem rather than abstract innovation language.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "DepotOS matters because it gives JouleBridge one credible starting point. If the runtime can keep a real depot coordinated and provable, the platform story becomes much easier to defend elsewhere.",
        ],
      },
    ],
  },
  {
    slug: "proof-system-specification",
    title: "Proof Chain Specification",
    type: "Specification",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "This paper defines the current JouleBridge proof-chain model in practical implementation terms. It focuses on record shaping, digest formation, signature context, envelope structure, and later verification.",
          "The objective is clarity. A proof system should be simple enough to inspect, consistent enough to implement, and strict enough to reject ambiguous records.",
        ],
      },
      {
        heading: "1. Record Shape",
        paragraphs: [
          "The public proof model is concerned with intent, dispatch, acknowledgement, measured outcome, and the metadata needed to verify the record later. Equivalent events should produce equivalent canonical bytes.",
          "That rule is foundational because cryptographic output only matters when the underlying representation is stable.",
        ],
      },
      {
        heading: "2. Digest and Signature",
        paragraphs: [
          "The canonical byte stream is hashed and then signed with explicit key metadata and context. Verification should never depend on unstated assumptions about which key, mode, or environment produced the signature.",
          "Clear signature context keeps the proof chain legible under rotation and support operations.",
        ],
      },
      {
        heading: "3. Envelope Requirements",
        paragraphs: [
          "A proof envelope should carry enough information that another team can re-run verification without hidden runtime state. The envelope is therefore a portable operating artifact, not just a blob attached for compliance theater.",
          "That matters because the proof is most valuable when it leaves the machine that produced it.",
        ],
      },
      {
        heading: "4. Verification Goal",
        paragraphs: [
          "Verification should allow another operator, partner, or customer to answer what the site believed, what it did, and what actually happened without relying on informal reconstruction.",
          "The system should reduce ambiguity, not just add cryptographic decoration.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "The proof chain is intentionally conservative: deterministic inputs, explicit context, stable signatures, and independently reviewable output. Those properties matter more than novelty.",
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

