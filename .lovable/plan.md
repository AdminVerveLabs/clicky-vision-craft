

## Plan: Fix Navbar Background on Event Pages

### Problem
The Nav component only shows a white background when scrolled. On non-home pages (like `/events/*`), the background stays transparent at the top, causing the hero image to show through behind the navbar. The home page intentionally uses this transparent-over-hero effect, but all other pages should have a solid white navbar from the start.

### Fix
**File: `src/components/chef/Nav.tsx`**

Update the nav's inline styles so that non-home pages (`!isHome`) always get the white/solid treatment — same as the scrolled state:

- `background`: white when `scrolled || !isHome`
- `backdropFilter`: blur when `scrolled || !isHome`
- `borderBottom`: solid border when `scrolled || !isHome`
- `padding`: compact padding when `scrolled || !isHome`

This is a ~4 line change in the `style` prop of the `<nav>` element (lines 80-85). The text color and logo filter already handle this correctly via `isHome` checks.

