

# Redesign "Find Your Flavor" to Tab-Style Sidebar Navigation

## Overview
Replace the current 3+2 grid of `ServiceCard` components in the "Find your flavor" section on the Classes page with the same tab-style sidebar navigation pattern used on the Teams page "Pick your occasion" section.

## What Changes

The existing grid of 5 service cards (lines 62-78 in `ClassesPage.tsx`) will be replaced with:

1. **Sticky sidebar on the left** with 5 category links: Public Classes, Private Parties, Kids Cooking, Signature Sessions, Gift Certificates
2. **Single content panel on the right** that swaps when a sidebar item is clicked, showing detailed info for that experience type (description, experience details grid, highlights, CTAs)
3. **Mobile pill bar** replacing the sidebar on small screens
4. **"Learn More"** button on each panel navigating to the existing sub-page

## Data Structure
A `classExperiences` array with 5 items, each containing:
- `id`, `sidebarLabel`, `tag`, `title`, `description`, `icon`, `path`
- `details[]` -- 6 items with icon, label, value, color (duration, group size, cuisine, location, format, includes)
- `highlights[]` -- 5 bullet points for "What to Expect"
- `price` -- shown in the footer pills

Content is pulled from the existing `ServiceCard` text and expanded with richer detail matching each sub-page.

## Design Adaptation
- Uses **orange** accent color instead of purple (matching the Classes page theme) -- orange left border on active sidebar, orange tag pills, orange accent on detail labels
- Same card structure: gradient header with icon, two-column body (details + highlights), footer with pills and CTAs
- `rounded-[32px]` cards, `animate-fade-in` transitions, same font hierarchy

## Technical Details

### File Modified: `src/pages/ClassesPage.tsx`

1. **Add `classExperiences` array** above the component (5 experience objects with full detail data)
2. **Add state**: `const [activeExpId, setActiveExpId] = useState(classExperiences[0].id)`
3. **Replace lines 62-78** (the Experience Types section) with the tab-style layout:
   - Section header (SectionTag + heading + subtitle)
   - Mobile pill bar (horizontal scrollable buttons, hidden on `md+`)
   - Flex container with sticky sidebar nav (hidden below `md`) + content panel
   - Content panel renders the active experience with header, details grid, highlights, and footer CTAs
4. **"Learn More"** calls `go(activeExperience.path)` to navigate to the sub-page
5. **CTA button** says "Book Now" (orange variant) instead of "Book a Call"

### No other files change
- Sub-pages remain as-is
- `ServiceCard` component is no longer imported (can be removed from imports)

