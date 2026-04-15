

## Plan: Add Welcome & Meet the Chef Sections to Event Page

### Overview
Add two new sections between the Hero and the Location/Duration cards on the Event page: a generic Welcome/Introduction and a compact "Meet the Chef" block featuring Chef Joey.

### Changes

**1. `src/pages/EventPage.tsx`**

Insert two sections inside the content area (`max-w-[900px]` wrapper), above the Location & Duration grid:

**Welcome/Introduction Section:**
- Section label: "WELCOME" (same `SectionLabel` style already in use)
- Heading: "We're excited to cook with you!" (or similar warm greeting) — 26px, medium weight
- Short paragraph welcoming the participant and setting expectations — 16px, muted, line-height 1.7
- Simple, clean — no cards or images, just text
- `mb-14` spacing below

**Meet the Chef Section (compact):**
- Horizontal flex layout (stacks on mobile): small photo left, text right
- Photo: Chef Joey kitchen image (import existing `chef-joey-kitchen.jpg` from assets), ~120px wide, rounded-xl, aspect-square, object-cover
- Text side:
  - "MEET THE CHEF" section label (12px uppercase, muted)
  - "Chef Joey" — 20px, semibold
  - One short paragraph (condensed version of the homepage bio) — 14-15px, muted, 3-4 lines max
  - "More About Joey →" text link in purple
- Gray-light background, rounded-[16px], padding 24-28px
- `mb-14` spacing below

**2. `src/data/eventData.ts`**

Add two optional fields to `EventPageData`:
- `welcomeHeading?: string` — defaults to "We're excited to cook with you!"
- `welcomeMessage?: string` — defaults to a generic message about preparing for the event

No changes needed to the sample event data unless custom text is desired.

### Technical Notes
- Reuses existing `chef-joey-kitchen.jpg` asset already imported on HomePage
- Follows existing `SectionLabel` pattern in EventPage
- Meet the Chef section is intentionally smaller than the HomePage version — roughly 40% the size, single short paragraph, no large heading

