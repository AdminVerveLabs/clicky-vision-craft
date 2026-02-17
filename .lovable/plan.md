

# Animate CTA Corners to Square on Hover

## What Changes
Update `CTAButton` so that on hover, the asymmetric rounded corners animate out to nearly square (like a rectangle), matching the reference images. The default state keeps the current asymmetric "stamp" rounding; on hover, corners transition to a uniform small radius (nearly square).

## File Changed: `src/components/chef/CTAButton.tsx`

- Add explicit `transition-all duration-200` (already present) which will cover border-radius transitions
- For stamp variants (primary/orange), change hover behavior:
  - Default: `rounded-tl-2xl rounded-tr-lg rounded-bl-lg rounded-br-2xl` (current)
  - Hover: `hover:rounded-lg` (all corners become uniformly small/square)
- Since Tailwind can't transition between different corner radius utilities natively, switch to inline style approach using CSS custom properties or direct style-based border-radius with CSS transition
- Simplest approach: use arbitrary values with `[border-radius]` in base + hover, letting `transition-all` handle the animation

### Technical approach
Replace the Tailwind rounding classes with inline style for border-radius on stamp variants, and use a CSS class or group-hover to animate. Actually, the cleanest way is to apply border-radius via style prop and use a state or CSS hover:

- Use a wrapper approach with CSS: define default `border-radius: 16px 8px 8px 16px` and on hover `border-radius: 8px` 
- Add a small CSS class in the component or use Tailwind arbitrary properties

Since `transition-all` already covers `border-radius`, we just need both states expressible. Tailwind hover utilities for border-radius work with `transition-all`, so: `rounded-tl-2xl rounded-tr-lg rounded-bl-lg rounded-br-2xl hover:rounded-lg` should animate smoothly.

