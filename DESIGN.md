# Design System: Barra Advogados

## 1. Visual Theme & Atmosphere

A restrained, "Trust & Authority" interface for a law firm: confident navy
surfaces, a single warm gold accent, and serif headlines that read as
tradition and credibility rather than trend. Density is calm and
editorial — generous whitespace, low motion, nothing that competes with the
text. The atmosphere should feel like a well-run law office: composed,
legible, unhurried.

Note: this project deliberately breaks from generic "anti-AI-slop" serif
bans. A traditional serif headline is a considered choice for legal
branding (the ui-ux-pro-max design-system search recommends serif for law
firms specifically), not a lazy default — kept here intentionally rather
than swapped for a "distinctive" display serif.

## 2. Color Palette & Roles

- **Authority Navy** (`#1E3A8A`, token `--color-primary`) — Header CTA, hero
  and contact section backgrounds, form focus rings
- **Navy Ink** (`#1E40AF`, token `--color-secondary`) — reserved secondary
  brand tone, not yet used in a component
- **Trust Gold** (`#B45309`, token `--color-accent`) — the single accent:
  primary CTA buttons, nav hover state, section eyebrows
- **Canvas** (`#F8FAFC`, token `--color-background`) — page background
- **Ink** (`#0F172A`, token `--color-foreground`) — body text, headings
- **Mist** (`#E9EEF5`, token `--color-muted`) — card/section fill (stats,
  service cards, testimonials)
- **Slate Border** (`#CBD5E1`, token `--color-border`) — 1px structural
  lines on cards and dividers
- **Alert Red** (`#DC2626`, token `--color-destructive`) — reserved for
  form/validation errors, not yet wired into a component
- **Focus Ring** = Authority Navy (`--color-ring`) — used site-wide via the
  global `:focus-visible` rule

Max one accent (gold), used sparingly for interactive/emphasis elements only.

## 3. Typography Rules

- **Display/Headings (`font-serif`):** EB Garamond — applied globally to
  `h1`/`h2`/`h3` via `globals.css`. Weight-driven hierarchy (400–700).
- **Body (`font-sans`):** Lato — relaxed leading, used for paragraphs, nav,
  labels, and buttons.
- **Banned here:** Inter (too generic for this brand), any additional
  accent typeface — keep the two-family pairing consistent site-wide.

## 4. Component Stylings

- **Buttons:** Flat fill, no glow. Primary = navy bg / white text; CTA
  emphasis = gold bg / white text. `cursor-pointer` and `:focus-visible`
  ring on every interactive element.
- **Cards** (stats, services, testimonials): 1px border + mist background,
  rounded-xl. No shadow by default; a subtle border-color shift to gold on
  hover for service cards only.
- **Inputs:** Label above input, border-border by default, border/ring
  switches to primary on focus. No floating labels.
- **Success/status messages:** `role="status" aria-live="polite"` so
  screen readers announce async confirmations (see Contact form).

## 5. Layout Principles

- Single `max-w-6xl` container, centered, consistent `px-6` gutters.
- Sections stack vertically in a fixed order: Hero → Sobre (proof/stats) →
  Serviços → Depoimentos → Contato — matches the "Trust & Authority"
  landing pattern (hero credibility → proof → solution → CTA).
- Mobile-first grid collapse: 2-column stat/service grids collapse to a
  single column below `sm`/`lg` breakpoints, no horizontal scroll.

## 6. Motion & Interaction

- Minimal, functional motion only: `transition` on hover/focus color and
  background changes (150–300ms via Tailwind defaults). No decorative or
  perpetual animation — a law firm site should feel calm, not "alive."
  Respects `prefers-reduced-motion` globally (see `globals.css`).

## 7. Anti-Patterns (Banned)

- No emojis anywhere in the UI.
- No fabricated data presented as real: any statistic or testimonial not
  supplied by the actual firm must use an explicit `[placeholder]` label,
  never an invented number or name. **Current state:** the stats in
  `About.tsx` and the testimonials in `Testimonials.tsx` are still
  placeholders — replace with real, authorized content before launch (see
  code comments in both files, and note OAB Provimento 205/2021 on
  advertising rules for testimonials specifically).
- No pure black; no neon/oversaturated accents; single accent color only.
- No AI copywriting clichés ("Elevate", "Seamless", "Next-Gen").
