

## Plan: Create Reusable ExperienceContent Component with Dual Rendering Contexts

### Summary
Build a data-driven `ExperienceContent` component matching the uploaded HTML mockup, then refactor existing example experience pages (Valentine's Day, Signature Creole, Kids Bake, Team Creole, Healthy Meal Prep) to use it. Add sidebar-embedded rendering on ClassesPage/TeamsPage and standalone page routes at `/experiences/:slug`.

### Architecture

```text
ExperienceContent (pure content, no Nav/Footer)
  ├── Embedded: sidebar click → renders in content panel (ClassesPage/TeamsPage)
  └── Standalone: /experiences/:slug → wrapped with Nav + back-link + Footer
```

### New files

**`src/data/experienceData.ts`**
- TypeScript interfaces: `MenuItem`, `VideoData`, `GalleryImage`, `ChefNotes`, `Stat`, `CTAConfig`, `ExperienceData`
- Export an array of all 5 experience data objects (valentines-day, signature-creole, kids-bake, team-creole, healthy-meal-prep) with their existing content migrated into the structured format
- Each entry includes `slug`, `segment` ("classes" | "teams"), hero image imports, menu items, story text, quote, gallery images, stats, CTA config, and optional `video`/`chefNotes`

**`src/components/chef/ExperienceContent.tsx`**
- Props: `{ data: ExperienceData; embedded?: boolean }`
- Renders 8 sections top-to-bottom matching the HTML mockup:
  1. **Hero** — gradient background with image, "EXAMPLE EXPERIENCE" pill badge, date, title (36-40px semibold), tagline. Height 320px (280px when `embedded`)
  2. **Menu** — "THE MENU" label (12px uppercase tracking-[2px] text-gray), 4-column grid (2x2 on mobile), circular 72px emoji icons with pastel backgrounds, course type / dish name / description
  3. **Story + Quote** — two-column (flex 1.3 / 0.7), intro 22px + body 17px left, purple-tinted quote card (#F8F4FC bg) right with 26px italic text
  4. **Video** (conditional) — dark container, 16:9 thumbnail, centered play button (80px white circle), duration label
  5. **Gallery** — "MOMENTS FROM THE NIGHT" label, horizontal scroll with varied-width images (200/240/280px), 240px height, rounded-xl
  6. **Chef's Notes** (conditional) — light gray bg, italic quote, purple attribution
  7. **Stats** — light gray bg rounded-xl, 4 stats with 1px vertical dividers, 32px semibold purple values, 14px muted labels
  8. **CTA** — purple gradient (135deg #6B5B95 to #8B7BA8), rounded-[20px], white headline, two buttons (primary white/purple, secondary transparent/white-border)
- All styling uses existing design tokens: `font-sans`, `text-purple`, `text-dark`, `text-gray`, `bg-cream`, `border-border`

**`src/pages/ExperiencePage.tsx`**
- Standalone wrapper for direct URL access
- Reads `:slug` from URL params, looks up data from `experienceData`
- Renders: Nav (already global) + back-link ("← Back to Classes & Events" or "← Back to Teams & Corporate") + `<ExperienceContent data={...} />` + Footer
- 404 fallback if slug not found

### Files to modify

**`src/App.tsx`**
- Add route: `/experiences/:slug` → `ExperiencePage`
- Keep existing example routes as redirects (or remove them since the new pages replace them)

**`src/pages/ClassesPage.tsx`**
- Add experience data imports
- In sidebar "Example Experiences" section: instead of navigating away on click, set an `activeExperienceSlug` state
- When an experience is selected, render `<ExperienceContent data={...} embedded />` in the content panel instead of the category card
- Add a "← Back to Categories" link above the embedded content to return to category view
- Sidebar highlights the active experience with `border-purple text-purple font-semibold`

**`src/pages/TeamsPage.tsx`**
- Same sidebar integration as ClassesPage for team experiences (team-creole, healthy-meal-prep)

**`src/pages/classes/ValentinesDayPage.tsx`** — Redirect to `/experiences/valentines-day` or replace with thin wrapper around ExperienceContent

**`src/pages/classes/SignatureCreolePage.tsx`** — Same redirect/replacement

**`src/pages/classes/KidsBakePage.tsx`** — Same redirect/replacement

**`src/pages/teams/TeamCreolePage.tsx`** — Same redirect/replacement

**`src/pages/teams/HealthyMealPrepPage.tsx`** — Same redirect/replacement

### Responsive behavior
- Menu: 4-col desktop → 2-col tablet/mobile
- Story + Quote: side-by-side desktop → stacked mobile
- Stats: 4-col desktop → 2x2 mobile
- Gallery: horizontal scroll at all sizes
- Hero: full height desktop, slightly shorter when embedded

### Total: 3 files created, 8 files modified

