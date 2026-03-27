

## Redesign ClassModal with overlapping card layout

Restructure `src/components/chef/ClassModal.tsx` into a layered design: image hero on top, purple info bar below, white content card overlapping upward.

### New layout (top to bottom)

```text
┌──────────────────────────────┐
│  [Image hero - rounded top]  │  ~240px, full-width photo
│                              │  Close X button top-right
├──────────────────────────────┤
│  Purple header bar           │  Badge, emoji, spots left
│  Title + date/time           │  ~padding pb-16 to make room
├──────────────────────────────┤
│ ┌──────────────────────────┐ │
│ │  White overlapping card  │ │  -mt-8, mx-4, shadow, rounded-xl
│ │  Description             │ │
│ │  Info grid (2x2)         │ │
│ │  On the Menu             │ │
│ │  What's Included         │ │
│ │  CTA bar                 │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
```

### Changes to `src/components/chef/ClassModal.tsx`

1. **Image hero** — Move the photo strip to the very top. Full-width, ~240px tall, rounded top corners matching the modal. Close X button positioned over the image (white with backdrop blur).

2. **Purple header bar** — Sits below the image (no rounded top corners). Contains the badge, emoji, spots indicator, title, and date/time. Extra bottom padding (~pb-14) so the white card can overlap into it.

3. **White overlapping content card** — Wrap all body content (description, info grid, menu, included, CTA) in a white card with `-mt-8 mx-4 rounded-xl shadow-lg relative z-10 p-8`. This creates the overlapping depth effect.

4. **Keep existing content** — All info grid, menu, included, and CTA sections stay the same internally. Just wrapped in the new card container.

5. **Spots indicator** — Add back `{cls.spots > 0 && !cls.soldOut && "🔥 Only " + cls.spots + " spots left"}` in the purple header (this is a semantic urgency indicator per accent rules).

### Single file modified
- `src/components/chef/ClassModal.tsx`

