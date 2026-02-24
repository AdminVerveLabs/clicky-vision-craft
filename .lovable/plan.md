

# Hero Section Layout Refinements

## Single file change: `src/pages/HomePage.tsx`

### 1. Reduce headline size and tighten spacing (line 33)
- Desktop: `text-[62px]` → `text-[46px]`
- Mobile: `text-[38px]` → `text-[32px]`
- Leading: `leading-[1.08]` → `leading-[1.05]`
- Bottom margin: `mb-6` → `mb-5`

### 2. Reduce hero section height and vertical spacing
- Section (line 25): Remove `min-h-screen`, replace with `min-h-[auto]`. Reduce bottom padding: `pb-16 md:pb-20` → `pb-12 md:pb-16`. Keep top padding as-is for nav clearance.
- Grid gap (line 31): `gap-10 md:gap-16` → `gap-8 md:gap-10`

### 3. Tighten social proof closer to CTAs (line 44)
- Change `mt-12 pt-8` → `mt-6 pt-5` to pull the trust signals up right below the buttons, forming a tight action cluster.
- "Calgary's Creole" pill (line 58): `mt-6` → `mt-4`

### 4. Make images significantly larger
- Widen image column by changing the grid from `md:grid-cols-2` to `md:grid-cols-[1fr_1.3fr]` so the image side gets ~55% of the width.
- Increase stagger offset: `translate-y-6` → `translate-y-8`, `-translate-y-6` → `-translate-y-8`
- Remove the `gap-4` between images, use `gap-3` for a tighter pair.

### 5. Reposition "Next Class" floating card
- Move it from `absolute -bottom-5 left-0` (between/below images) to `absolute -bottom-6 -left-8` so it anchors at the bottom-left, overlapping the left image edge rather than sitting awkwardly between images. This creates a clear conversion nudge without obscuring image content.

### Layout summary
```text
 ┌─────────────────────────────────────────┐
 │  [Smaller headline]   [LARGER IMAGE 1]  │
 │  [CTAs]                [LARGER IMAGE 2] │
 │  [Social proof]         ↑ staggered     │
 │  [Creole pill]                          │
 │                    ┌─Next Class─┐       │
 │                    └────────────┘       │
 └─────────────────────────────────────────┘
```

All changes in a single file edit to `src/pages/HomePage.tsx`, lines 25–86.

