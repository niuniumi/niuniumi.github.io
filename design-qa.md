# Design QA — AI Applications Portfolio

Final result: **passed**

## Source of truth

- Selected visual direction: `C:\Users\16224\.codex\generated_images\019f514a-d740-7a73-9420-5e8e0768908b\exec-37f5ddfb-439f-4cb4-92ba-fd0c8c6d3af9.png`
- Implementation screenshot: `qa/screenshots/portfolio-desktop-final.png`
- Side-by-side comparison: `qa/screenshots/comparison-homepage-1280x720.png`
- Comparison viewport/state: 1280 × 720, homepage default state after fonts and motion settled.

## Fidelity surfaces reviewed

- Typography: Noto Sans SC, Noto Serif SC, and Noto Sans Mono are bundled locally; display, body, metadata, and terminal roles remain distinct and readable.
- Layout and spacing: editorial split hero, workbench collage, project sheets, workflow sequence, profile ledger, and contact block preserve a clear vertical rhythm without generic SaaS-card repetition.
- Color: warm apricot, cobalt, vermilion, sky, leaf, lilac, paper, and ink tokens are applied consistently with accessible text contrast.
- Imagery: the hero output and Ashen Pilgrimage project use real 1536 × 864 product captures; both loaded successfully at their natural dimensions.
- Icons: all interface icons come from one Phosphor family with consistent weight and optical size.
- Motion: scroll progress, reveal, hover lift, pointer parallax, Agent state transitions, and image switching share the same timing vocabulary and honor `prefers-reduced-motion`.
- Copy: all portfolio statements are framed as AI-assisted practice, prototypes, engineering participation, or verified playable output; no unsupported business claims remain.

## Comparison history

1. Pass 1 — P1: an earlier menu capture appeared as an unintended background layer. Removed the global background image treatment and restored the paper/sky composition.
2. Pass 1 — P2: the hero title wrap and workbench ratio drifted from the selected direction. Rebalanced the desktop grid, title scale, and artwork footprint.
3. Pass 2 — P2: the implementation lacked concrete output evidence compared with the reference. Added the real Ashen Pilgrimage battle capture as a `PLAYTEST OUTPUT` layer.
4. Interaction pass — P2: clipboard permission rejection could leave the copy control without feedback. Added timeout, selection fallback, success state, and visible failure state.

All P0, P1, and P2 findings were resolved before release.

## Browser evidence

- Desktop section captures:
  - `qa/screenshots/portfolio-desktop-final.png`
  - `qa/screenshots/portfolio-work-pass2.png`
  - `qa/screenshots/portfolio-approach-pass2.png`
  - `qa/screenshots/portfolio-background-pass2.png`
  - `qa/screenshots/portfolio-contact-pass2.png`
- Agent interaction: selecting `Critic 校验` updated the live terminal to stage 3 and the expected validation task.
- Project interaction: selecting screenshot `02` changed the real game image and caption to `像素重制主菜单`.
- Contact interaction: the copy control produced `已复制：hahahi824@163.com` in its polite live region.
- Console: no errors or warnings in the final local browser pass.
- Mobile 390 × 844: document and body scroll widths matched the 375 CSS-pixel client width; no horizontal overflow. The menu exposed the four navigation links and reported `aria-expanded=true` when opened.
- The in-app browser's repeated screenshot compositor occasionally produced black tiles at emulated narrow widths. Responsive acceptance therefore used DOM geometry, semantic snapshots, and interaction state rather than treating the capture artifact as a product defect.

## Accessibility and resilience

- Semantic landmarks and labelled regions are present for navigation, hero, work, process, background, and contact.
- Buttons expose pressed/expanded state; dynamic terminal, screenshot caption, and copy feedback use polite live regions.
- Focus styles, reduced motion, practical mobile targets, real alt text, and direct phone/email links are implemented.
- Desktop and mobile navigation, anchor links, image loading, Agent selection, project screenshot selection, and copy feedback were exercised before build.
