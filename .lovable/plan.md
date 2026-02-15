
# Update Navigation Segments

## Changes
Two updates to the `navSegments` array in `src/components/chef/Nav.tsx`:

1. **Rename "Teams" to "For Teams"** -- label change only, children stay the same.

2. **Replace "Public" and "Friends" segments with a single "Classes & Events" segment** containing these dropdown items:
   - Open Classes
   - Private Events
   - Special Occasions
   - Friends
   - Kids Party
   - Catering

## Result
The nav will have three items (plus "About Joey"):
- **Classes & Events** (dropdown with 6 sub-items, links to `/classes`)
- **For Teams** (dropdown with 7 sub-items, unchanged, links to `/teams`)
- **About Joey** (no dropdown)

## File Modified
- `src/components/chef/Nav.tsx` -- Update the `navSegments` array (lines 11-45) to reflect the new structure.
