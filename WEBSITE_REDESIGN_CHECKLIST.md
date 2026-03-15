# JouleBridge Website Redesign Checklist

Status: `completed` | All phases executed
Updated: 2026-03-15 — full Industrial Signal redesign implemented

---

## A. Content Rewrites (what the website SAYS)

- [x] **A1. Rewrite hero headline and subtext**
  - Current: "Make critical energy records easier to trust"
  - New direction: Lead with the $15B problem and India smart meter wave. Something like "India is deploying 250 million smart meters. The data they produce isn't verifiable." followed by how JouleBridge fixes it.
  - Remove hedging. Speak with conviction.

- [x] **A2. Add a numbers/stats bar to homepage**
  - Add a section (after hero or after problem) with hard market numbers:
    - $15B/year — India AT&C losses
    - 250M+ — Smart meters sanctioned under RDSS
    - 54M — Already deployed (Jan 2026)
    - 8 — Protocol adapters in Bridge Kernel
  - Replace the weak CTA metrics ("4 adapters", "11 modules") with buyer-relevant numbers.

- [x] **A3. Rewrite benefits as outcomes, not descriptions**
  - Current: abstract paragraphs describing features
  - New: concrete before/after outcomes
    - "3 weeks → 3 days reconciliation"
    - "Every reading signed at source — tamper = broken signature"
    - "One evidence format across all sites, all protocols"
  - Add icons that reinforce the outcome, not the feature.

- [x] **A4. Add India market context to Solutions page**
  - C&I: mention open-access buyers, multi-DISCOM billing, Indian tariff complexity
  - EV: mention 29,000+ public chargers, OCPP roaming, CPO/eMSP reconciliation
  - Grid Audit: mention CERC, state regulators, AT&C loss audits
  - Add IES (India Energy Stack) reference — PoC July 2026

- [x] **A5. Add trust signals / social proof section**
  - "Built with" badges: Rust, Ed25519, SHA-256
  - Standards alignment: IEC 62056 (DLMS), OCPP, Modbus, IEC 61850
  - "Designed for" logos: India Energy Stack, CERC, BIS (as standards, not clients)
  - Conference presence: ISUW, ECAMEX, RenewX (if attended)

- [x] **A6. Rewrite CTA section with urgency**
  - Current: "Scope the right pilot before you overbuild the stack" (passive)
  - New: Lead with the market window — "The smart meter rollout is happening now. Early verification infrastructure becomes the standard."
  - Replace internal metrics with market-relevant ones.

- [x] **A7. Tighten product page — lead with outcomes, not internals**
  - Move the "how it works" pipeline deeper, not top-of-page
  - Lead with: "What Bridge Kernel does for your operation" (reduce disputes, faster reconciliation, audit-ready evidence)
  - Keep technical depth available but behind a click/scroll

- [x] **A8. Remove hedging language site-wide**
  - Kill: "current baseline", "roadmap direction", "the current implementation"
  - Replace with direct statements: "Bridge Kernel signs every reading at the edge" not "The current runtime baseline includes local persistence and controlled sync flows"
  - Pricing FAQ: remove over-qualifying answers

- [x] **A9. Add founder story / mission weight to Company page**
  - Current bio: one sentence
  - Add: why energy, what drove the founding, India-specific thesis
  - Timeline: add market context milestones (IES announced, RDSS rollout, etc.)

---

## F. Logo & Wordmark Redesign

> Font: **Chakra Petch Bold** (Google Fonts)
> Design file: `design/logo_wordmark.pen`

- [x] **F1. Implement new wordmark — "JouleBridge" in Chakra Petch Bold**
  - **Font:** Chakra Petch, weight 700 (Bold)
  - **Color split:** "Joule" in `#D06120` (burnt orange) + "Bridge" in `#FFFFFF` (white)
  - **No gap** between "Joule" and "Bridge" — reads as one word
  - **Letter spacing:** `-1px` at hero size, `-0.5px` at nav size
  - **Why Chakra Petch:** square terminals echo the `border-radius: 0` brand identity. Engineered feel — looks like it belongs on industrial hardware, not a SaaS dashboard.
  - **Sizes tested:**
    - Hero/marketing: 72px
    - Navbar: 24px
    - Both read cleanly at their respective sizes

- [x] **F2. Implement new favicon — "JB" in Chakra Petch Bold**
  - **"J"** in `#D06120`, **"B"** in `#FFFFFF`
  - **Background:** `#0a0c0e` (near-black, matches site bg)
  - **Sizes to generate:**
    - `favicon.ico` — 16x16, 32x32 (multi-size ICO)
    - `favicon-48.png` — 48x48
    - `apple-touch-icon.png` — 180x180
    - `android-chrome-192.png` — 192x192
    - `android-chrome-512.png` — 512x512
  - At 16px: font-size 9px, tight but the color split keeps "J" and "B" distinguishable
  - At 32px+: font-size 18px+, reads clearly

- [x] **F3. Replace current logo across the site**
  - Update `src/components/ui/Logo.tsx` — replace current logo with two `<span>` elements:
    ```tsx
    <span className="font-chakra font-bold text-[#D06120]">Joule</span>
    <span className="font-chakra font-bold text-white">Bridge</span>
    ```
  - Add Chakra Petch to `next/font/google` imports in layout (alongside Manrope and IBM Plex Mono)
  - Update `public/brand/` with new favicon files from F2
  - Update `<head>` metadata with correct favicon references
  - Update OG image generation (`opengraph-image.tsx`) to use new wordmark

- [x] **F4. Update site typography to use Chakra Petch as display font**
  - Replace Space Grotesk (current display font) with Chakra Petch for section titles and headings
  - Keep Manrope as body font, IBM Plex Mono as code/mono font
  - Update `@theme` in `globals.css`:
    ```css
    --font-display: var(--font-jb-display), ui-sans-serif, system-ui, sans-serif;
    ```
  - Apply to `.jb-section-title` class and all `<h1>`/`<h2>` elements

---

## B. Visual Depth (make it not flat)

- [x] **B1. Break the section monotony — alternate layouts**
  - Not every section should be: eyebrow → title → card grid
  - Use alternating patterns:
    - Full-width statement + small visual
    - Split layout (text left, diagram right)
    - Single large card with internal layout
    - Staggered/offset cards instead of uniform grid
  - At minimum: Hero, Problem, Stats, Solution, Pipeline should each feel different.

- [x] **B2. Replace flat monochrome with "Industrial Signal" design language**
  - The monochrome is too flat — but the fix is NOT adding a generic accent color
  - Direction: stay fully achromatic (black→gray→white) but use **luminance contrast** as the accent
  - Hard white `#FFFFFF` with soft glow for emphasis elements (stat numbers, CTA buttons, active borders)
  - Single signal color: burnt orange `#D06120` used ONLY as a status indicator dot/square — like the LED on a physical meter
  - Burnt-orange appears in: eyebrow badge dots, terminal cursor blink, "Pilot Open" indicator. Nowhere else.
  - The sharp edges (`border-radius: 0`) are the brand — this direction doubles down on that industrial identity

- [x] **B3. Add visual depth with layering and shadows**
  - Use subtle elevation differences between sections
  - Add background texture: very faint noise/grain overlay on the dark background
  - Use larger, softer box-shadows on hero elements
  - Add subtle inner glow to key cards (the "featured" ones)

- [x] **B4. Add visual breaks between sections**
  - Use horizontal divider lines (subtle, 1px, white/6)
  - Or use alternating background tones (jb-dark vs slightly lighter #0c0e10)
  - Or use full-bleed accent sections for key moments (stats bar, CTA)

- [x] **B5. Make the stats/numbers section visually dominant**
  - Large display numbers (4rem+) with counter animation
  - Full-width bar with slightly different background
  - Numbers should be the loudest visual element after the hero

- [x] **B6. Add motion and progressive reveal**
  - Wire up Lenis for smooth scrolling
  - Add scroll-triggered reveals (fade + slide) to more elements
  - Add parallax depth to hero background
  - Stagger card reveals (already partially done, extend to all sections)

- [x] **B7. Improve card visual hierarchy**
  - Not all cards should look the same
  - Featured/primary cards: stronger border, slight glow, larger padding
  - Secondary cards: more subtle
  - Use size variation in grids (one large + two small instead of three equal)

- [x] **B8. Add a second visual element to the homepage**
  - Currently only: architecture SVG + terminal demo
  - Add at least one more: a data flow animation, a proof visualization, or an abstract grid/mesh that reinforces the "trust infrastructure" concept
  - The globe in PlatformSection is good but small — consider making it more prominent

---

## C. SEO & Technical

- [x] **C1. Add JSON-LD structured data** (Organization, WebSite, Product)
- [x] **C2. Add Google Search Console verification meta tag**
- [x] **C3. Add Bing Webmaster Tools verification meta tag**
- [x] **C4. Add IndexNow key file in public directory**
- [x] **C5. Add canonical URLs to metadata**
- [x] **C6. Add security headers in next.config** (CSP, HSTS, X-Content-Type-Options)
- [x] **C7. Wire up LenisProvider** for smooth scrolling

---

## D. Component Upgrades — "Industrial Signal" Direction

> Design identity: fully achromatic (black→gray→hard white) with a single burnt-orange
> signal dot (#D06120). No blue, no teal, no green. The "accent" is luminance
> contrast — pure white at full intensity with glow. Sharp edges stay. The site
> should feel like an industrial control panel, not a SaaS dashboard.
>
> Pattern sources: 21st.dev component library research + Pencil MCP design analysis.

- [x] **D1. Redesign hero as split layout with inline stats bar**
  - **Pattern source:** 21st.dev "MINIMAL" hero (adapted to achromatic)
  - **Current problem:** Hero is full-width left-aligned text over neural background — no visual anchor on the right, stats are buried in the CTA section at the bottom
  - **Implementation:**
    - Switch to `lg:grid-cols-2` split layout: headline + CTA left, neural animation / proof chain right
    - Top-line: a 1px `border-t border-white/8` full-width hairline (no colored gradient — structure, not decoration)
    - Embed a 4-column stats grid directly below the hero CTA buttons (inside the hero, not a separate section)
    - Each stat: `text-5xl md:text-6xl font-black text-white` value with `text-shadow: 0 0 40px rgba(255,255,255,0.12)` + `text-xs uppercase tracking-[0.2em] text-jb-text-muted` label + 3px white left-border as indicator bar
    - Stats values: `$15B`, `250M+`, `54M`, `8` (the market numbers from A2)
    - Neural background: change `color="#d2d5db"` to `color="#FFFFFF"` at lower `trailOpacity={0.06}` — particles become faint light traces, like instrument readings
    - Eyebrow badge: replace the white dot with a 2x2px burnt orange `#D06120` square — the signal LED
  - **Combines:** A1 + A2 + B2 + B1

- [x] **D2. Rebuild CTA section with white glow + urgency copy**
  - **Pattern source:** 21st.dev "CTA with Glow" (adapted: white radial glow, not colored)
  - **Current problem:** CTA uses flat grid bg with internal metrics ("4 adapters", "6 layers") — meaningless to buyers
  - **Implementation:**
    - Replace `BackgroundGrid` with white glow: two nested `div`s with `radial-gradient(ellipse_at_center, rgba(255,255,255,0.06), transparent 60%)` centered behind heading
    - Add `group` to section wrapper + `group-hover:translate-y-[-1rem] group-hover:opacity-100` on glow
    - Remove the 4-metric counter grid — replace with urgency statement: "The smart meter rollout is happening now. Early verification infrastructure becomes the standard."
    - CTA button: hard white bg `bg-white text-jb-dark` with white glow `shadow-[0_0_30px_rgba(255,255,255,0.15)]` — inverts to outline on hover
    - Add burnt-orange dot next to "Pilot Program Open" eyebrow
    - Section bg: `bg-[#0a0c0e]` (slightly lighter than jb-dark) for visual separation
  - **Combines:** A6 + B3 + B4

- [x] **D3. Convert benefits to asymmetric bento grid with scale hierarchy**
  - **Pattern source:** 21st.dev "Feature Section with Bento Grid" + "Bento Grid" (magic-ui)
  - **Current problem:** 6 identical cards in a 3x2 grid — no hierarchy, all look the same
  - **Implementation:**
    - Row 1: `lg:col-span-2` featured card (reconciliation) + `lg:col-span-1` card (tamper detection)
    - Row 2: `lg:col-span-1` card (lineage) + `lg:col-span-2` featured card (unified evidence)
    - Row 3: two `lg:col-span-1` cards (anomaly detection, defensible records)
    - Featured cards: `p-8`, white left-border `border-l-[3px] border-white/20`, slightly elevated bg `bg-[#0d0f11]`, inner white glow `shadow-[0_-20px_80px_-20px_rgba(255,255,255,0.04)_inset]`
    - Standard cards: `p-6`, subtle border `border border-white/6`, bg `bg-jb-card`
    - Icon colors: keep the existing per-card icon colors (pink, sky, blue, etc.) — these are accent enough against the monochrome bg. Do NOT unify them to a single accent color.
    - Each card: icon top-left, outcome headline in `text-xl tracking-tight text-white`, before/after metric in `text-jb-text-muted`
    - Hover: `group-hover:bg-jb-card-hover` transition, no text translation — keep it subtle
  - **Combines:** A3 + B1 + B7

- [x] **D4. Add horizontal trust bar with tech badges + standards**
  - **Pattern source:** 21st.dev badge pattern (adapted: no pills/rounded — sharp industrial tags)
  - **Current problem:** No credibility markers anywhere on homepage
  - **Implementation:**
    - New component: `TrustBar.tsx` — between Solution and Benefits sections
    - Layout: `flex items-center justify-center gap-6 lg:gap-10`
    - Each badge: sharp-edged tag — `border border-white/8 bg-white/[0.03] px-4 py-2` (NO rounded corners)
      - "RUST" + cog icon
      - "ED25519" + lock icon
      - "SHA-256" + shield icon
    - Below: standards as monospaced text — `font-mono text-xs uppercase tracking-[0.2em] text-jb-text-muted/50`
      - IEC 62056 · OCPP 1.6/2.0 · MODBUS RTU/TCP · IEC 61850
    - Separator: full-width `border-t border-white/6` above and below
    - Burnt-orange signal dot before "RUST" badge — small `w-2 h-2 bg-[#D06120] shadow-[0_0_8px_rgba(208,97,32,0.4)]` with subtle pulse animation
    - Visual reference: should feel like the label plate on industrial equipment
  - **Implements:** A5

- [x] **D5. Upgrade pricing with elevation hierarchy + blur-in**
  - **Pattern source:** 21st.dev "Dark Gradient Pricing" (adapted: no colored gradients)
  - **Implementation:**
    - Card wrapper: `bg-gradient-to-b from-[#0f1114] to-[#0c0e10] border border-white/8`
    - Blur-in viewport animation: `initial={{ filter: "blur(2px)" }} whileInView={{ filter: "blur(0px)" }}`
    - Featured/recommended tier: white top-border `border-t-[2px] border-white/30` + "RECOMMENDED" label in `text-xs tracking-[0.2em] text-white/60`
    - Featured tier CTA: `bg-white text-jb-dark` (inverted). Other tiers: `variant="ghost"` outline
    - Checkmark items: `bg-white` dot for included, `bg-white/10` for excluded
    - No colored badges, no gradient shimmer — let the white border and inverted button do the work
  - **Enhances:** Pricing page

- [x] **D6. Add hairline section dividers (no colored accents)**
  - **Current problem:** Sections blend together — same bg, no visual separation
  - **Implementation:**
    - New utility: `SectionDivider.tsx`
    - Renders a `div` with `h-px bg-gradient-to-r from-transparent via-white/8 to-transparent`
    - Viewport-triggered opacity: `initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}` with `duration: 0.8`
    - Place between every major section (4-5 instances)
    - No color, no thickness, no animation gimmicks — just a structural hairline
    - Alternating sections also get bg color shift: odd sections `bg-jb-dark`, even sections `bg-[#0a0c0e]`
  - **Implements:** B4

- [x] **D7. Add noise texture overlay to globals.css**
  - **Current problem:** Background is flat gradient — no tactile depth
  - **Implementation:**
    - CSS-only noise using `::before` pseudo-element on `body`:
      ```css
      body::before {
        content: '';
        position: fixed;
        inset: 0;
        z-index: 9999;
        pointer-events: none;
        opacity: 0.025;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        background-size: 200px 200px;
      }
      ```
    - Opacity 2-3% — barely perceptible, but adds material quality to the dark surfaces
  - **Implements:** B3

- [x] **D8. Promote proof chain animation as primary homepage visual**
  - **Current problem:** `ProofChainAnimation.tsx` exists but is underused; homepage has neural bg + terminal + architecture SVG but nothing showing the core value (verified data chain)
  - **Implementation:**
    - Embed in hero right panel (D1 split layout) or as standalone full-width section between Solution and Benefits
    - Scale up container to `max-w-4xl`
    - Proof nodes: white borders, white text, white connecting lines
    - The "signing" step: burnt orange `#D06120` fill on the signature node — the ONLY colored element in the animation
    - Connecting lines: SVG `stroke-dasharray` animation in white, 1px weight
    - Fade mask at edges: `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)`
    - This becomes the visual that communicates "we sign data at the edge" without words
  - **Implements:** B8

---

## E. Design System Tokens — "Industrial Signal" (globals.css)

> Achromatic palette. White is the accent. Burnt-orange is the signal. Nothing else.

- [x] **E1. Update accent + signal color tokens in `@theme`**
  ```css
  /* Keep existing jb-accent as silver for backward compat */
  --color-jb-silver: #d2d5db;
  /* Redefine accent as hard white — the emphasis color */
  --color-jb-accent: #FFFFFF;
  --color-jb-accent-muted: rgba(255, 255, 255, 0.08);
  --color-jb-accent-glow: rgba(255, 255, 255, 0.15);
  /* Signal burnt-orange — used ONLY for indicator dots */
  --color-jb-signal: #D06120;
  --color-jb-signal-glow: rgba(208, 97, 32, 0.4);
  --color-jb-signal-muted: rgba(208, 97, 32, 0.15);
  ```

- [x] **E2. Add elevation tokens (all achromatic)**
  ```css
  --shadow-jb-card: 0 1px 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03);
  --shadow-jb-card-featured: 0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06);
  --shadow-jb-glow: 0 0 30px rgba(255,255,255,0.15);
  --shadow-jb-hero: 0 8px 32px rgba(0,0,0,0.6);
  ```

- [x] **E3. Add section background alternation tokens**
  ```css
  --color-jb-section-alt: #0a0c0e;
  --color-jb-section-elevated: #0d0f11;
  ```

- [x] **E4. Keep the global border-radius kill rule — it IS the brand**
  - The `border-radius: 0 !important` rule is correct for this direction
  - Sharp edges on everything: cards, buttons, badges, inputs
  - The only exception: the burnt-orange signal dot can be `rounded-none` too (square dot, not circle) — reinforces the industrial aesthetic
  - Do NOT add `rounded-full` for pills/badges — use sharp-edged tags instead

---

## Execution Order (updated — "Industrial Signal" direction)

### Phase 0 — Logo & wordmark (brand foundation)
1. **F1** (Chakra Petch Bold wordmark: "Joule" #D06120 + "Bridge" white)
2. **F2** (favicon "JB" generation at all sizes)
3. **F3** (replace logo across site + update font imports)
4. **F4** (Chakra Petch as display font, replacing Space Grotesk)

### Phase 1 — Design tokens + texture
5. **E1** (white accent + burnt-orange signal tokens) + **E2** (elevation tokens) + **E3** (section bg tokens)
6. **E4** (confirm sharp edges stay) + **D7** (noise texture) + **D6** (hairline dividers + bg alternation)
7. **B2** (apply Industrial Signal language: white glows, burnt-orange dots, luminance hierarchy)

### Phase 2 — Hero + CTA (highest visual impact)
8. **D1** (hero split layout + inline stats + burnt-orange eyebrow dot)
9. **D2** (white glow CTA + urgency copy + burnt-orange signal dot)
10. **B5** (stats visual dominance via massive type scale + white text-shadow)

### Phase 3 — Section upgrades
11. **D3** (bento grid benefits with white left-border hierarchy, keep per-card icon colors)
12. **D4** (trust bar with sharp industrial tags + burnt-orange dot)
13. **D8** (proof chain with burnt-orange signing node)
14. **B6** (extend motion/progressive reveal to all sections)

### Phase 4 — Content depth
15. **A4** (India context) + **A7** (product page outcomes-first) + **A8** (de-hedge site-wide)
16. **A9** (founder story / company page)

### Phase 5 — Pricing + polish
17. **D5** (pricing with white border hierarchy + inverted featured button)
18. **B7** (card hierarchy refinements)

### Phase 6 — SEO & technical
19. **C1-C7** (structured data, verification, headers, Lenis)
