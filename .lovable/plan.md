

## Increase Hero Section Padding

### File: `src/pages/HomePage.tsx` (line 25)

Current padding: `pt-[100px] md:pt-[120px] pb-12 md:pb-16`

**Top padding (+20%):**
- Mobile: `100px × 1.2 = 120px`
- Desktop: `120px × 1.2 = 144px`

**Bottom padding (+40%):**
- Mobile: `pb-12` (3rem / 48px) → `pb-[67px]` (~48 × 1.4)
- Desktop: `pb-16` (4rem / 64px) → `pb-[90px]` (~64 × 1.4)

**Updated class:** `pt-[120px] md:pt-[144px] pb-[67px] md:pb-[90px]`

Single line change on line 25.

