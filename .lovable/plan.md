

## Condense "Meet Chef Joey + Flexible Formats" into one compact section

**File: `src/pages/TeamsPage.tsx`** (lines 187–239)

Replace the current two-part layout (tall portrait image + 3 paragraphs + separate formats grid below) with a single condensed section:

**New layout:**
- One row: Chef Joey photo (smaller, landscape aspect `4/3`) on the left, short intro text on the right (1 short paragraph + CTAs) — reduce from 3 paragraphs to 1
- Remove `mb-20` gap between intro and formats
- Add a small `mt-10` divider, then the 3 format cards inline below — make cards more compact (`p-6` instead of `p-8`, smaller icons `text-3xl` instead of `text-5xl`)
- Remove the separate "Flexible Formats" header/subheader — just a small `SectionTag` inline
- Reduce section padding from `py-20 md:py-28` to `py-14 md:py-20`
- Change image aspect from `4/5` (portrait) to `4/3` (landscape) to save vertical space

This keeps everything viewable in roughly one viewport on desktop.

