

# Update Hero Banner Purple Color

## Change
Update the purple color used in the hero banner gradient to `#430073` (HSL: 275 100% 22.5%).

## Technical Details
The hero banner in `src/pages/HomePage.tsx` uses an inline style gradient referencing CSS custom properties `--purple-dark` and `--purple`:

```
background: linear-gradient(165deg, hsl(var(--purple-dark)) 0%, hsl(var(--purple)) 35%, hsl(var(--dark)) 100%)
```

Rather than changing the global CSS variables (which would affect the entire site), I will update the hero section's inline gradient to use the new hex color `#430073` directly, keeping the rest of the site unchanged.

## File Modified
- `src/pages/HomePage.tsx` — Update the hero `style` prop gradient to replace the purple stops with `#430073`.

