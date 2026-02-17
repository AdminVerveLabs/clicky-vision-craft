

# Restyle Primary CTAs to "Culinary Stamp" Style

## What Changes
Update the `CTAButton` component to use asymmetric rounding (like a stamp -- more rounded on some corners, less on others) instead of `rounded-full`. On hover, the button lifts further with a deeper shadow, creating a "pop out" effect.

## Visual Details (from reference images)
- **Default**: Asymmetric border radius (e.g., `rounded-tl-2xl rounded-tr-lg rounded-bl-lg rounded-br-2xl`), purple background, white uppercase text, moderate shadow offset
- **Hover**: Button translates up further (`-translate-y-1.5`) and shadow grows deeper/wider, giving the "pops out from black" effect

## File Changed

### `src/components/chef/CTAButton.tsx`
- Replace `rounded-full` in base styles with asymmetric rounding: `rounded-tl-2xl rounded-tr-lg rounded-bl-lg rounded-br-2xl`
- Add uppercase + tracking to base: `uppercase tracking-widest`
- Update hover from `hover:-translate-y-0.5 hover:opacity-90` to `hover:-translate-y-1.5` (no opacity change)
- Update primary variant shadow to use a darker, offset shadow that grows on hover: `shadow-[0_4px_0_hsl(var(--dark))] hover:shadow-[0_8px_0_hsl(var(--dark))]`
- Apply similar shadow treatment to orange variant
- Keep secondary and ghost variants with their current rounded-full style (only primary and orange get the stamp look)

### Approach
Since the stamp style only applies to `primary` and `orange` variants, we'll split the rounding logic: primary/orange get asymmetric rounding, secondary/ghost keep `rounded-full`. The hover shadow "pop" effect uses a hard black box-shadow that extends on hover, matching the reference images.

