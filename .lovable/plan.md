

## Plan: Redesign PackagesModal with cleaner, more spacious layout

### Summary
Update the existing `PackagesModal.tsx` with the new design spec — larger sizing, more generous spacing, restructured add-ons as a 3-column grid with separate name/price lines, remove the boxed callout in favor of plain purple text, and increase all typography for 50+ readability.

### File to modify

**`src/components/chef/PackagesModal.tsx`** — Full restyle, same props/data

Key changes from current → new:
- **Modal**: max-w `680px` → `720px`, rounded-2xl → `rounded-[20px]`, padding `p-7` → `py-9 px-11`
- **Close button**: `w-9 h-9 top-4 right-4` → `w-10 h-10 top-6 right-6`
- **Header**: title `24px` → `30px` with `mt-[18px]`, subtitle `14px` → `17px`, mb `20px` → `32px`
- **Badge pill**: tracking `2px` → `1.5px`, padding `px-4 py-1.5` → `px-4 py-1.5` (keep)
- **Package cards**: gap `3.5` → `5`, padding `18px` → `28px 24px`, border-radius `xl` → `[16px]`
  - Name: `17px` → `20px`, mb `1` → `4`
  - Price: `26px` → `36px`
  - "starting at": `12px` → `14px`, mb `3` → `4`
  - Courses: `14px` → `17px`, remove gray background pill — just plain text
  - Signature card: add subtle `bg-[#FDFBFF]` tint
  - Badge: `-top-2.5` → `-top-3`, `text-[10px]` → `text-[11px]`, `px-3 py-0.5` → `px-3.5 py-1`, `rounded-full` → `rounded-xl`
- **Add-ons**: label → uppercase `"OPTIONAL ADD-ONS"` with `tracking-[0.5px]` muted color, mb `14px`
  - Change from flex-wrap chips → 3-column grid, gap `12px`
  - Each card: `bg-gray-light rounded-[10px] p-3.5 px-4`, horizontal flex with `gap-3`
  - Emoji `text-2xl`, then a text block with name (14px medium) on top + price (13px muted) below
  - mb `28px`
- **Callout**: Remove `bg-purple-pale` box → plain centered purple text, `16px` medium, no 💜 emoji, mb `16px`
- **CTA button**: `rounded-full` → `rounded-xl`, `px-9 py-3.5 text-[15px]` → `px-12 py-[18px] text-[18px]`, mb `14px`
- **Disclaimers**: `11px` → `12px`

### No other files change
The props interface and integration in ClassesPage/TeamsPage remain identical.

