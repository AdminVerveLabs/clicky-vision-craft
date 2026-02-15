

# Redesign "Pick Your Occasion" Section with Scroll Spy

## Overview
Replace the current 3x2 grid of `ServiceCard` components in the "Pick your occasion" section of `/teams` with an editorial-style scroll spy layout featuring a sticky sidebar navigation and large horizontal content cards.

## Layout

**Desktop (md+):**
- Section header at top (tag + heading + subtitle, centered)
- Below: two-column split -- sticky sidebar (left, ~220px) and scrollable content cards (right)
- Sidebar stays fixed as user scrolls through the 6 event cards

**Mobile (<md):**
- Sidebar hidden entirely
- Cards stack vertically in a simple list

## Scroll Spy Mechanics
- Each content card is wrapped in a `<div>` with a unique `id` (e.g., `team-events`, `all-hands`, etc.)
- A `useEffect` sets up an `IntersectionObserver` watching all 6 section elements
- When a section enters the viewport (threshold ~0.3-0.5), the `activeId` state updates
- The sidebar highlights the matching link with a left purple border and purple text
- Clicking a sidebar link calls `scrollIntoView({ behavior: "smooth" })` on the target section

## Card Design (per reference image)
Each card is a large horizontal layout with rounded corners (32px):
- **Left side:** Purple-tinted background area with a centered icon/emoji (similar to current ServiceCard icon area)
- **Right side:** Tag label (e.g., "MOST POPULAR"), title in Playfair Display, description text, metadata pills (group size, duration), and a "Learn More" link that navigates to the sub-page

## Sidebar Design
- "CATEGORIES" label at the top in small uppercase tracking
- List of 6 links, each with left border indicator
- Active link: solid purple left border + purple text
- Inactive links: transparent border + gray text
- On hover: text turns purple

## Data Structure
An array of 6 occasion objects drives both sidebar and cards:
```
{ id, sidebarLabel, tag, title, description, groupSize, duration, icon, path }
```

## Technical Details

### File Modified: `src/pages/TeamsPage.tsx`

1. Add `useState`, `useEffect`, `useRef` imports from React
2. Define the `occasions` data array with all 6 events (Team Building, All-Hands, Onboarding, Client Entertainment, Holiday, Custom Experiences)
3. Replace the current "Use Cases" section (lines 54-70) with:
   - Same `SectionTag` + heading, plus a new subtitle paragraph
   - A flex container with:
     - Sticky sidebar nav (hidden on mobile via `hidden md:block`, `sticky top-32`)
     - Scrollable content area with 6 large horizontal cards
4. Add `useEffect` with `IntersectionObserver` logic:
   - Observe each section by `id`
   - Update `activeId` state when sections enter viewport
   - Cleanup observer on unmount
5. Each card uses the `go()` helper on its "Learn More" link to navigate to the sub-page

### No other files need changes
- The `useIsMobile` hook already exists but won't be needed -- CSS `hidden md:block` handles responsiveness
- Tailwind config already has `font-serif` (Playfair Display) and the purple/orange color tokens
- The existing `ServiceCard` component remains unchanged (used elsewhere)

