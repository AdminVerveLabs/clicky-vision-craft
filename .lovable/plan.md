
# Update Navigation Bar with Dropdown Menus

## Change
Replace the current flat nav items with three new segments, each featuring a dropdown menu with sub-items. The "About Joey" link remains as-is (no dropdown).

## New Navigation Structure

1. **Public Classes** (replaces "Classes & Events")
   - In Person
   - Remote
   - Special Events

2. **Teams** (replaces "For Teams")
   - Team Events
   - All Hands & Townhalls
   - Onboarding & Culture
   - Client Entertainment
   - Holiday & Celebrations
   - Custom Experiences
   - Catering

3. **Private Classes** (new segment)
   - Kids Party
   - Friends Party
   - Special Events
   - Catering

4. **About Joey** (unchanged, no dropdown)

## Design Details
- Each segment label shows a small chevron-down icon indicating a dropdown
- On hover, a white dropdown panel appears below the nav item with the sub-items listed vertically
- Dropdown has solid white background, rounded corners, subtle shadow, and high z-index (no transparency issues)
- Text color adapts to scroll state (white on transparent hero, dark on scrolled white nav) -- same as current behavior
- Dropdown links are placeholder navigation for now (all route to their parent page, e.g. `/classes`, `/teams`) since this is a clickable prototype
- "Book a Class" CTA button remains unchanged

## Technical Approach
- Add hover-based open/close state for each dropdown using `useState` and `onMouseEnter`/`onMouseLeave` on wrapper divs
- Each nav item wrapper contains the label + a positioned dropdown panel
- Dropdown items styled with padding, hover highlight, and the same font styling
- Keep it self-contained in `src/components/chef/Nav.tsx` (no new files needed)

## File Modified
- `src/components/chef/Nav.tsx` — Rewrite nav items to support dropdown menus with the new segment/sub-segment structure
