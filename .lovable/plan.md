

## Redesign ClassModal — Compact Single-View Layout

Replace the current tall, scrollable overlapping-card modal with a compact, information-dense layout that fits in a single view (~480-500px wide).

### New Layout

```text
┌─────────────────────────────────────────────┐
│ [120x120 img]  PUBLIC 🔥3 spots    $89/person│
│                Creole Comfort Classics       │
│                Feb 1, 2026 · 10:00 AM        │
│                2.5 hrs · All levels · YW...  │  ✕
├─────────────────────────────────────────────┤
│ Description paragraph text in muted color... │
├─────────────────────────────────────────────┤
│ ON THE MENU                                  │
│ Item 1 · Item 2 · Item 3 · Item 4           │
├─────────────────────────────────────────────┤
│ ✅ WHAT'S INCLUDED                           │
│ All ingredients, equipment, aprons...        │
├─────────────────────────────────────────────┤
│ [ Gift This Class ]  [    Get Cooking    ]   │
└─────────────────────────────────────────────┘
```

### Changes — `src/components/chef/ClassModal.tsx`

**Remove entirely:**
- Full-width image hero (240px)
- Purple gradient header bar with decorative circles
- White overlapping card wrapper
- Large emoji display
- Bottom price display (price moves to top-right)

**New structure (top to bottom inside a single white/cream card):**

1. **Top section** — Horizontal flex with close button top-right
   - Left: 120×120px square image (rounded-xl, object-cover), using existing `getClassImage(cls.id)`
   - Right column:
     - Row 1: Green pill badge (`cls.type`) + "🔥 X spots left" (if applicable) + price right-aligned (bold, larger)
     - Title: `text-lg font-medium`
     - Date/time: muted text
     - Meta line: `duration · level · location` in muted text

2. **Description** — Full-width paragraph, `text-[13px] text-dark/70 leading-relaxed`

3. **Divider** — Subtle `border-t border-dark/10`

4. **On the Menu** — Uppercase label, then menu items joined with ` · ` as plain text (not pills/tags)

5. **What's Included** — Light green (`bg-green/10`) rounded box with green checkmark icon, uppercase label, and description text

6. **CTA buttons** — Two buttons using the culinary stamp style from CTAButton:
   - "Gift This Class" — secondary variant (~40% width)
   - "Get Cooking" — primary/green variant (~60% width)
   - Sold out state: single disabled button "Sold Out — Join Waitlist"

**Modal container:** `max-w-[500px]`, `rounded-2xl`, `p-5`, `bg-white`, no scroll needed. Keep existing backdrop, animation, and image imports.

### Single file modified
- `src/components/chef/ClassModal.tsx`

