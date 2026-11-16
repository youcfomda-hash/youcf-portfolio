You are building a single-page, dark, motion-heavy portfolio for an AI automation agency (Youcf Vision / Foundi Youcef).
- Match the design system in antigravity-portfolio-spec.md and musautomation.pro: colors, fonts, spacing, radii.
- Use Next.js + TypeScript + Tailwind. Animations: Framer Motion + Three.js WebGL particles. Smooth scroll: Lenis.
- All colors and fonts live in CSS variables / tailwind theme.
- One component per section in /components/sections. Content lives in /data/content.ts (no text inside JSX).
- Respect prefers-reduced-motion. Kill all animations and the starfield/particle motion when set.
- Must be responsive: 1920, 1280, 768, 390 widths.

