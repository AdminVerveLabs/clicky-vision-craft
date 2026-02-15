

# Redesign "Pick Your Occasion" to Tab-Style Sidebar Navigation

## Overview
Replace the current scroll-spy layout (where all 6 cards are stacked and you scroll through them) with a **tab-style pattern**: clicking a sidebar item swaps the content in the main area to show a detailed, full-size panel for that event type. Only one event is visible at a time.

## How It Works

1. **Sidebar stays the same** -- left-hand sticky nav with the 6 event categories, active state highlighted with purple left border
2. **Clicking a sidebar item** sets `activeId` state (no more scrolling/IntersectionObserver) and the right-side content area updates to show a detailed panel for that event
3. **Each panel** shows richer content than the current cards -- pulling from the detail data already used on each sub-page (experience details list, "what to expect" / "why it works" items, icon, description, CTAs)
4. **"Learn More"** button at the bottom of each panel still navigates to the full dedicated landing page (e.g., `/teams/team-events`)

## Content Panel Layout (Right Side)

Each panel will be a single large container with rounded corners (32px) containing:

- **Header area**: Tag pill, title (Playfair Display), and description paragraph
- **Two-column detail grid**:
  - Left column: Experience details list (duration, group size, cuisine/format, location, included items, dietary) with colored icon badges
  - Right column: "What to Expect" / "Why It Works" numbered or checkmark list in a white card
- **Footer area**: Metadata pills (group size, duration) and two CTAs -- "Book a Call" (primary) and "Learn More" (orange text link to sub-page)
- Smooth fade/slide transition when switching between panels

## Mobile Behavior

On mobile (below `md`), the sidebar is hidden. Instead, the 6 occasions render as a horizontal scrollable pill bar or simple stacked accordion/cards that can be tapped to expand.

## Technical Details

### File Modified: `src/pages/TeamsPage.tsx`

1. **Remove** the `useEffect` with `IntersectionObserver` -- no longer needed since content swaps on click rather than scroll
2. **Expand the `occasions` array** to include detail data for each event (experience details items, highlights/steps list, CTA labels) -- pulling content from the existing sub-pages
3. **Sidebar `onClick`** now just calls `setActiveId(o.id)` instead of `scrollIntoView`
4. **Replace the cards loop** with a single content panel that reads from `occasions.find(o => o.id === activeId)` and renders the full detail view
5. **Add a transition** (e.g., opacity + translateY with a key-based remount or CSS transition) when switching active panels
6. **"Learn More"** link at the bottom still calls `go(activeOccasion.path)` to navigate to the dedicated sub-page

### No other files change
- The individual sub-pages (`TeamEventsPage.tsx`, `AllHandsPage.tsx`, etc.) remain unchanged and are still accessible via their routes
- Nav component unchanged
- Routing unchanged
