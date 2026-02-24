

# Hero Section: Two-Image Layout

## Change: `src/pages/HomePage.tsx`

Replace the single hero image (lines 64-75) with a two-image layout matching the reference — two rounded images side by side, left image slightly taller/offset from the right, similar to the uploaded reference.

### Images
- Left image: `chef-joey-61.jpg` (already in `src/assets`)
- Right image: `chef-joey-106.jpg` (already in `src/assets`)

### New imports (add at top)
```tsx
import chefJoey61 from "@/assets/chef-joey-61.jpg";
import chefJoey106 from "@/assets/chef-joey-106.jpg";
```

Remove unused `chefJoeyHero` import.

### New hero visual markup (replacing lines 64-75)
Two images in a flex row with a gap. Left image has `aspect-[3/4]` and is slightly shifted down; right image has `aspect-[3/4]` and is slightly shifted up — creating the staggered look from the reference. Both have `rounded-2xl` with `overflow-hidden`.

The "Next Class" floating card stays, repositioned to `absolute -bottom-5 left-0` (anchored to the bottom-left of the container, overlapping the left image area).

### Layout detail
```text
┌──────────────────────────────┐
│  [Image 1]      [Image 2]   │
│  chef-joey-61   chef-joey-106│
│  shifted down   shifted up   │
│                              │
│  ┌─Next Class Card─┐        │
│  └─────────────────┘        │
└──────────────────────────────┘
```

Single file edit, no new files needed.

