

# Navbar Layout Update

## Changes to `src/components/chef/Nav.tsx`

1. **Layout**: Move nav links to center between logo (left) and CTA button (right) using a 3-column flex layout: `justify-between` with logo left, links center, CTA right.

2. **Label changes**:
   - "Teams" → "Teams & Corporate"
   - "About Joey" → "About"

3. **CTA button**: Change "Chat with Joey" to "Book Now" (matching the reference image). Keep the existing purple/orange styling.

4. **Structure**: The desktop nav currently has logo on the left and all links + CTA grouped on the right. We need to split it so links are visually centered in the navbar and the CTA is pushed to the far right.

## Specific edits in `navSegments` array:
- Change `label: "Teams"` to `label: "Teams & Corporate"`
- Change `label: "About Joey"` to `label: "About"`

## Desktop nav container change:
- Current: logo left, `<div>` with links + CTA right
- New: logo left (flex item), centered links (flex item with `absolute` or `flex-1 justify-center`), CTA right (flex item)

## Mobile nav:
- Same label updates apply
- Layout stays as-is (drawer)

No new files needed. Single file edit to `src/components/chef/Nav.tsx`.

