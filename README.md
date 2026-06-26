# Armory | AI Automation

**A premium AI automation platform landing page built for Frontend Battle.**

🚀 **[View Live Demo](https://armory-ai-three.vercel.app)**

---

## 🏗️ Architecture Highlights

This project was engineered to solve complex state, rendering, and animation challenges natively, completely avoiding bloated external UI libraries.

* **High-Performance Pricing Engine:** A dynamic multi-currency and billing matrix built with **zero hardcoded values**. Using an imperative `forwardRef` + `useImperativeHandle` architecture, pricing calculations and UI updates are isolated exclusively to individual price text nodes—preventing any parent or global React re-renders.
* **Bento-to-Accordion Context-Lock:** Hovering a feature card on the desktop bento grid and aggressively resizing the window past the mobile breakpoint transfers the exact active interaction state seamlessly to the mobile accordion layout. This is powered by a custom `useSyncExternalStore` hook acting as a single shared source of truth, avoiding duplicated or desynced state.
* **Zero External Dependencies:** No Framer Motion, Radix, or Headless UI. Every interaction, hover state, and staggered entrance animation was hand-built from scratch utilizing native CSS transitions and the Web Animations API (WAAPI).

## 🛠️ Tech Stack

* **Next.js (App Router)**
* **TypeScript**
* **Tailwind CSS**
* **Native Web Animations API (WAAPI)**

## ✅ Constraints Compliance

This submission was strictly engineered to comply with all grading constraints:

- [x] Dynamic pricing matrix (no hardcoded values)
- [x] Re-render isolation (verified via DOM mutation pattern)
- [x] Bento-to-Accordion zero-dependency (no Framer Motion/Radix/Headless UI)
- [x] Context-Lock on resize-while-hovering
- [x] Semantic HTML + full SEO metadata
- [x] Entry animations under 500ms budget via WAAPI

## 📂 Repository Structure

Key directories and architectural logic for judges auditing the codebase:

```text
app/
├── globals.css         # Design tokens, variables, and global utilities
├── layout.tsx          # Root layout, viewport, and SEO metadata
└── page.tsx            # Main landing page composition

components/
├── bento/
│   ├── useActiveNodeStore.ts       # Shared external state (Context-Lock)
│   ├── BentoAccordionWrapper.tsx   # Live matchMedia breakpoint listener
│   ├── BentoGrid.tsx               # Desktop layout
│   ├── AccordionList.tsx           # Mobile layout
│   └── featuresData.ts             # Static data layer
│
├── pricing/
│   ├── PricingSection.tsx          # Orchestrator & ref-array owner
│   ├── PriceDisplay.tsx            # Isolated calculation/render node
│   ├── PricingTierCard.tsx         # Visual card wrapper
│   └── ...                         # Toggles & Types
│
├── AnimatedSection.tsx             # Server-Component safe WAAPI wrapper
└── useEntranceAnimation.ts         # WAAPI & IntersectionObserver hook
```
