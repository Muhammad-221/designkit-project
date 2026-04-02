==========================================================
  DesignKit — React + Vite Design System Starter
==========================================================

DESCRIPTION
-----------
A fully accessible, token-driven React starter built with
Vite, Tailwind CSS, and TypeScript. Features a complete
design system with reusable components (Button, Input, Card,
Navbar, Modal, Footer), semantic HTML, WCAG-compliant contrast,
and keyboard navigation support.

HOW TO RUN
----------
1. Unzip the source/ folder
2. cd source/
3. npm install
4. npm run dev
5. Open http://localhost:5173 in your browser

REFACTOR NOTES
--------------
Before (template defaults):
- Generic placeholder page with inline styles
- No design tokens — raw Tailwind defaults
- No semantic HTML structure
- No reusable custom components
- Default shadcn color palette (no brand identity)

After (refactored):
- Complete design system with HSL color tokens:
  Primary (teal 174°), Accent (coral 12°), Success (green 152°)
- Typography scale using Space Grotesk (headings) + Inter (body)
- Shadow tokens (sm, md, lg) for depth hierarchy
- 5 reusable components: Navbar, FeatureCard, ContactForm, Modal, Footer
- Button variants: hero, accent (in addition to shadcn defaults)
- Semantic HTML: <header>, <main>, <section>, <footer>, <nav>, <article>
- All inputs labeled with <Label htmlFor="...">
- ARIA attributes: role, aria-label, aria-labelledby, aria-expanded, aria-live
- Keyboard navigation via focus-ring utility class
- Color contrast meets WCAG AA (4.5:1+ for body text)
- Zero inline styles — everything via Tailwind + design tokens
- Organized folder structure: components/, pages/, styles (index.css)

ACCESSIBILITY IMPROVEMENTS
---------------------------
- Semantic landmarks: banner, main, contentinfo
- Skip-to-content–ready with id="main-content"
- Focus-visible ring on all interactive elements
- Mobile menu announces expanded/collapsed state
- Form success uses role="status" + aria-live="polite"
- All decorative icons marked aria-hidden="true"
- Color swatches use role="img" with descriptive aria-label

DESIGN SYSTEM EXPORTS
----------------------
See export/ folder for the design token documentation (PDF-style text).

PERFORMANCE
-----------
- Vite HMR for fast dev builds
- Tree-shaking via ES modules
- Font display: swap for fast text rendering
- Animations use CSS transforms (GPU-accelerated)
- No external runtime dependencies beyond React

DELIVERY STRUCTURE
------------------
├── README.txt          (this file)
├── before_after/       (UI comparison & performance notes)
│   ├── before.txt      (description of before state)
│   └── after.txt       (description of after state)
├── export/             (design system documentation)
│   └── design-tokens.txt
└── source/             (complete source code)
