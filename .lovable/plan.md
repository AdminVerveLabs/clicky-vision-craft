

## Move catalogue section headers above the content cards

Both pages have the same pattern: the tag + title + description sit inside the white card. Move them out above the card, centered, with the sidebar `pt` reduced accordingly.

### File: `src/pages/ClassesPage.tsx`

1. **Add centered header block** between the mobile pill bar (line ~215) and `<div className="flex gap-10">` (line ~217):
   - Centered `text-center` block with `SectionTag variant="orange"`, the `h2` "Find your flavor", and the `p` description
   - Add `mb-10` spacing below

2. **Remove the header from inside the card** (lines 245-250 — the `div.p-8` with tag/h2/p)

3. **Reduce sidebar `pt-[180px]`** to ~`pt-[20px]` since the header is no longer inside the card taking up space

### File: `src/pages/TeamsPage.tsx`

1. **Add centered header block** between the mobile pill bar (line ~250) and `<div className="flex gap-10">` (line ~252):
   - Centered `text-center` block with `SectionTag`, the `h2` "Pick your occasion", and the `p` description
   - Add `mb-10` spacing below

2. **Remove the header from inside the card** (lines 280-285 — the `div.p-8` with tag/h2/p)

3. **Reduce sidebar `pt-[180px]`** to ~`pt-[20px]`

